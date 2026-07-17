"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { ArrowLeft, AtSign, Check, Eye, EyeOff, KeyRound, LockKeyhole, Mail, ShieldCheck, Sparkles, UserRound } from "lucide-react";

type Mode = "login" | "signup" | "forgot-password" | "forgot-username";
type StoredAccount = { username: string; email: string; password: string; displayName: string };

const copy = {
  login: { eyebrow: "WELCOME BACK", title: "Return to your sound.", subtitle: "Sign in to continue your BruhWiks Pulse journey.", button: "Sign in" },
  signup: { eyebrow: "JOIN THE ORBIT", title: "Create your listening identity.", subtitle: "Build your profile, save worlds and listen your way.", button: "Create account" },
  "forgot-password": { eyebrow: "ACCOUNT RECOVERY", title: "Reset your password.", subtitle: "Enter your email or username and we’ll locate your account.", button: "Find my account" },
  "forgot-username": { eyebrow: "ACCOUNT RECOVERY", title: "Find your username.", subtitle: "Enter the email connected to your BruhWiks account.", button: "Find username" },
};

export default function AuthExperience({ mode }: { mode: Mode }) {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const details = copy[mode];
  const strength = useMemo(() => [password.length >= 8, /[A-Z]/.test(password), /[0-9]/.test(password)].filter(Boolean).length, [password]);

  function accounts(): StoredAccount[] {
    try { return JSON.parse(localStorage.getItem("bruhwiks_accounts") || "[]"); } catch { return []; }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(""); setMessage("");
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") || "").trim().toLowerCase();
    const username = String(data.get("username") || "").trim();
    const pass = String(data.get("password") || "");
    const saved = accounts();

    if (mode === "signup") {
      const displayName = String(data.get("displayName") || "").trim();
      if (!displayName || !username || !email || pass.length < 8) return setError("Complete every field and use at least 8 characters for your password.");
      if (saved.some(a => a.email === email || a.username.toLowerCase() === username.toLowerCase())) return setError("That email or username is already being used.");
      const next = [...saved, { displayName, username, email, password: pass }];
      localStorage.setItem("bruhwiks_accounts", JSON.stringify(next));
      localStorage.setItem("bruhwiks_session", JSON.stringify({ displayName, username, email }));
      setMessage("Account created. Your BruhWiks identity is ready.");
      setTimeout(() => { window.location.href = "/"; }, 900);
      return;
    }

    if (mode === "login") {
      const identity = String(data.get("identity") || "").trim().toLowerCase();
      const found = saved.find(a => (a.email === identity || a.username.toLowerCase() === identity) && a.password === pass);
      if (!found) return setError("We couldn’t match those login details.");
      localStorage.setItem("bruhwiks_session", JSON.stringify({ displayName: found.displayName, username: found.username, email: found.email }));
      setMessage(`Welcome back, ${found.displayName}.`);
      setTimeout(() => { window.location.href = "/"; }, 700);
      return;
    }

    if (mode === "forgot-password") {
      const identity = String(data.get("identity") || "").trim().toLowerCase();
      const found = saved.find(a => a.email === identity || a.username.toLowerCase() === identity);
      if (!found) return setError("No BruhWiks account was found with those details.");
      setMessage(`Account found for ${found.email}. A real email reset can be connected next.`);
      return;
    }

    const found = saved.find(a => a.email === email);
    if (!found) return setError("No BruhWiks account was found with that email.");
    setMessage(`Your username is ${found.username}.`);
  }

  return <main className="auth-shell">
    <div className="auth-glow auth-glow-one" /><div className="auth-glow auth-glow-two" />
    <section className="auth-story">
      <Link href="/" className="auth-back"><ArrowLeft size={18}/> Back to BruhWiks</Link>
      <div className="auth-brand"><span><Sparkles size={19}/></span> BruhWiks <b>Pulse</b></div>
      <div className="auth-story-copy">
        <span className="auth-kicker">YOUR MUSIC. YOUR UNIVERSE.</span>
        <h2>One account.<br/>Every version of you.</h2>
        <p>Save your sound worlds, follow artists, join listening rooms and carry your music identity everywhere.</p>
      </div>
      <div className="auth-security"><ShieldCheck/><div><b>Built around privacy</b><small>Your listening identity stays yours.</small></div></div>
    </section>

    <section className="auth-panel-wrap"><div className="auth-panel">
      <div className="auth-heading"><span>{details.eyebrow}</span><h1>{details.title}</h1><p>{details.subtitle}</p></div>
      <form onSubmit={submit} className="auth-form">
        {mode === "signup" && <>
          <label><span>Display name</span><div className="auth-input"><UserRound/><input name="displayName" placeholder="What should we call you?" autoComplete="name"/></div></label>
          <label><span>Username</span><div className="auth-input"><AtSign/><input name="username" placeholder="Choose a unique username" autoComplete="username"/></div></label>
        </>}
        {mode === "login" && <label><span>Email or username</span><div className="auth-input"><UserRound/><input name="identity" placeholder="you@example.com or @username" autoComplete="username"/></div></label>}
        {mode === "forgot-password" && <label><span>Email or username</span><div className="auth-input"><KeyRound/><input name="identity" placeholder="Enter your account details"/></div></label>}
        {(mode === "signup" || mode === "forgot-username") && <label><span>Email address</span><div className="auth-input"><Mail/><input name="email" type="email" placeholder="you@example.com" autoComplete="email"/></div></label>}
        {(mode === "login" || mode === "signup") && <label><span>Password</span><div className="auth-input"><LockKeyhole/><input name="password" type={showPassword ? "text" : "password"} placeholder={mode === "signup" ? "At least 8 characters" : "Enter your password"} value={password} onChange={e=>setPassword(e.target.value)} autoComplete={mode === "signup" ? "new-password" : "current-password"}/><button type="button" onClick={()=>setShowPassword(!showPassword)} aria-label="Show password">{showPassword?<EyeOff/>:<Eye/>}</button></div></label>}
        {mode === "signup" && <div className="password-meter"><div>{[0,1,2].map(i=><i key={i} className={i < strength ? "on" : ""}/>)}</div><small>{strength === 3 ? "Strong password" : "Use 8+ characters, a number and uppercase letter"}</small></div>}
        {mode === "login" && <div className="auth-options"><label className="remember"><input type="checkbox" defaultChecked/> Remember me</label><Link href="/forgot-password">Forgot password?</Link></div>}
        {error && <div className="auth-alert error">{error}</div>}{message && <div className="auth-alert success"><Check size={17}/>{message}</div>}
        <button className="auth-primary" type="submit">{details.button}<span>→</span></button>
      </form>

      {mode === "login" && <><div className="auth-divider"><span/>or<span/></div><p className="auth-switch">New to BruhWiks? <Link href="/signup">Create an account</Link></p><p className="auth-help"><Link href="/forgot-username">Forgot your username?</Link></p></>}
      {mode !== "login" && <p className="auth-switch">Already have an account? <Link href="/login">Sign in</Link></p>}
    </div></section>
  </main>;
}
