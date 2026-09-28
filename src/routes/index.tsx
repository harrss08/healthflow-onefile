import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MediLink — Hospital Records & Intelligent Referral System" },
      {
        name: "description",
        content:
          "Centralized hospital records, AI symptom guidance, referrals, risk scoring and analytics in one system.",
      },
      { property: "og:title", content: "MediLink — Hospital Records & Referral System" },
      {
        property: "og:description",
        content:
          "One patient, one record: symptoms, appointments, referrals, reports and risk analysis across every department.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [session, setSession] = useState<Session | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setReady(true);
    });
    return () => data.subscription.unsubscribe();
  }, []);

  if (!ready) return <div className="ml-auth" />;
  if (!session) return <AuthScreen />;

  return (
    <div style={{ position: "relative" }}>
      <button className="ml-signout" onClick={() => supabase.auth.signOut()}>
        Sign out
      </button>
      <iframe
        src="/hospital/index.html"
        title="MediLink Hospital Records & Intelligent Referral System"
        allow="camera; microphone; fullscreen; display-capture; autoplay"
        style={{ border: 0, width: "100%", height: "100vh", display: "block" }}
      />
    </div>
  );
}

function AuthScreen() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [step, setStep] = useState<"form" | "code">("form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [msg, setMsg] = useState<{ t: "err" | "ok"; m: string } | null>(null);
  const [busy, setBusy] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => setUrl(window.location.origin), []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: window.location.origin, data: { full_name: name } },
      });
      if (error) setMsg({ t: "err", m: error.message });
      else {
        setStep("code");
        setMsg({ t: "ok", m: `Confirmation email sent to ${email}` });
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        if (/confirm/i.test(error.message)) {
          await supabase.auth.resend({ type: "signup", email });
          setStep("code");
          setMsg({ t: "ok", m: `Please confirm your email. We re-sent the link to ${email}` });
        } else setMsg({ t: "err", m: error.message });
      }
    }
    setBusy(false);
  }

  async function verify(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    const { error } = await supabase.auth.verifyOtp({ email, token: code.trim(), type: "signup" });
    if (error) setMsg({ t: "err", m: error.message });
    setBusy(false);
  }

  async function resend() {
    const { error } = await supabase.auth.resend({ type: "signup", email });
    setMsg(error ? { t: "err", m: error.message } : { t: "ok", m: "Email sent again" });
  }

  return (
    <div className="ml-auth">
      <div className="ml-card">
        <div className="ml-qr">
          <div className="ml-logo">🏥</div>
          <h2>MediLink</h2>
          <p>Scan with your phone camera to open this website</p>
          <div className="ml-qrbox">{url && <QRCodeSVG value={url} size={190} />}</div>
          <small>ఫోన్ కెమెరాతో స్కాన్ చేయండి</small>
        </div>

        <div className="ml-form">
          {step === "form" ? (
            <>
              <div className="ml-tabs">
                <button className={mode === "signin" ? "on" : ""} onClick={() => { setMode("signin"); setMsg(null); }}>
                  Sign in
                </button>
                <button className={mode === "signup" ? "on" : ""} onClick={() => { setMode("signup"); setMsg(null); }}>
                  Sign up
                </button>
              </div>
              <h1>{mode === "signin" ? "Welcome back" : "Create your account"}</h1>
              <form onSubmit={submit}>
                {mode === "signup" && (
                  <input placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} required />
                )}
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password (min 6)" minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button className="ml-primary" disabled={busy}>
                  {busy ? "Please wait…" : mode === "signin" ? "Sign in" : "Sign up"}
                </button>
              </form>
            </>
          ) : (
            <>
              <h1>Confirm it's you</h1>
              <p className="ml-mut">
                We sent an email to <b>{email}</b>. Open it and tap the link to confirm it's you — you'll be signed in automatically.
              </p>
              <p className="ml-mut">Didn't sign up? Just ignore the email and nothing will happen.</p>
              <div className="ml-row">
                <button className="ml-link" onClick={resend}>Resend email</button>
                <button className="ml-link" onClick={() => { setStep("form"); setMsg(null); }}>Back</button>
              </div>
            </>
          )}
          {msg && <div className={`ml-msg ${msg.t}`}>{msg.m}</div>}
        </div>
      </div>
    </div>
  );
}
