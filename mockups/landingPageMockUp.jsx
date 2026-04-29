import { useState, useEffect } from "react";

const C = {
  bg: "#080a0f",
  surface: "#0f1117",
  surfaceAlt: "#13161e",
  border: "rgba(255,255,255,0.06)",
  borderHover: "rgba(255,255,255,0.12)",
  accent: "#5b8dee",
  accentSoft: "rgba(91,141,238,0.12)",
  accentGlow: "rgba(91,141,238,0.22)",
  teal: "#34d399",
  tealSoft: "rgba(52,211,153,0.1)",
  tealBorder: "rgba(52,211,153,0.25)",
  purple: "#a78bfa",
  purpleSoft: "rgba(167,139,250,0.1)",
  text: "#edf0f7",
  muted: "#7c8494",
  dim: "#3d4251",
};

const F = { display: "'DM Serif Display', serif", sans: "'DM Sans', sans-serif" };

const gfonts = `@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');
*{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}a{text-decoration:none}
.products-scroll::-webkit-scrollbar{height:4px}
.products-scroll::-webkit-scrollbar-track{background:transparent}
.products-scroll::-webkit-scrollbar-thumb{background:rgba(255,255,255,0.1);border-radius:2px}
.products-scroll::-webkit-scrollbar-thumb:hover{background:rgba(255,255,255,0.18)}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.35}}`;

function NavLink({ href, children }) {
  const [h, setH] = useState(false);
  return <a href={href} style={{ fontFamily: F.sans, fontSize: 14, color: h ? C.text : C.muted, transition: "color .15s" }} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>{children}</a>;
}

function Btn({ href, children, primary, large }) {
  const [h, setH] = useState(false);
  return (
    <a href={href} style={{
      display: "inline-flex", alignItems: "center", gap: 7,
      fontFamily: F.sans, fontSize: large ? 15 : 14, fontWeight: 500,
      color: primary ? "#fff" : C.muted,
      background: primary ? C.accent : "transparent",
      border: `1px solid ${primary ? C.accent : C.border}`,
      padding: large ? "13px 28px" : "9px 20px",
      borderRadius: large ? 11 : 9, transition: "all .15s",
      opacity: h && !primary ? 0.85 : 1,
      boxShadow: primary ? (h ? `0 4px 36px ${C.accentGlow}` : `0 0 24px ${C.accentGlow}`) : "none",
      transform: primary && h ? "translateY(-1px)" : "none",
    }} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>{children}</a>
  );
}

function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <div style={{ width: 32, height: 32, borderRadius: 9, background: `linear-gradient(135deg, ${C.accent} 0%, ${C.teal} 100%)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
          <rect x="1" y="1" width="5.5" height="5.5" rx="1.5" fill="white" opacity="0.95" />
          <rect x="8.5" y="1" width="5.5" height="5.5" rx="1.5" fill="white" opacity="0.55" />
          <rect x="1" y="8.5" width="5.5" height="5.5" rx="1.5" fill="white" opacity="0.55" />
          <rect x="8.5" y="8.5" width="5.5" height="5.5" rx="1.5" fill="white" opacity="0.95" />
        </svg>
      </div>
      <span style={{ fontFamily: F.display, fontSize: 16, color: C.text, letterSpacing: "-0.01em" }}>Agentic Solutions</span>
    </div>
  );
}

function Nav({ scrolled }) {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(8,10,15,0.88)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
      transition: "all .3s",
      padding: "0 max(1.5rem, calc(50vw - 660px))",
    }}>
      <div style={{ display: "flex", alignItems: "center", height: 64, gap: 36 }}>
        <Logo />
        <div style={{ flex: 1 }} />
        {["Products", "Who We Serve", "About", "Contact"].map(l => (
          <NavLink key={l} href={`#${l.toLowerCase().replace(/ /g, "-")}`}>{l}</NavLink>
        ))}
        <Btn href="#products" primary>Explore products</Btn>
      </div>
    </nav>
  );
}

function Chip({ children }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.surfaceAlt, border: `1px solid ${C.border}`, borderRadius: 100, padding: "6px 14px", marginBottom: 30 }}>
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.teal }} />
      <span style={{ fontFamily: F.sans, fontSize: 11, color: C.muted, letterSpacing: "0.06em", textTransform: "uppercase" }}>{children}</span>
    </div>
  );
}

function Hero() {
  return (
    <section style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", textAlign: "center",
      padding: "140px max(1.5rem, calc(50vw - 660px)) 120px",
      background: `radial-gradient(ellipse 80% 55% at 50% 0%, rgba(91,141,238,0.07) 0%, transparent 68%)`,
    }}>
      <Chip>Agentic Solutions LLC · New York · Est. 2026</Chip>
      <h1 style={{ fontFamily: F.display, fontSize: "clamp(46px, 6.5vw, 80px)", color: C.text, lineHeight: 1.07, letterSpacing: "-0.025em", maxWidth: 820, marginBottom: 24 }}>
        Software built for<br /><em style={{ color: C.accent, fontStyle: "italic" }}>everyone</em> who needs it.
      </h1>
      <p style={{ fontFamily: F.sans, fontSize: 18, fontWeight: 300, color: C.muted, lineHeight: 1.72, maxWidth: 540, marginBottom: 48 }}>
        We design and ship SaaS products for consumers, businesses, and developers — tools that are useful, well-crafted, and built to last.
      </p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
        <Btn href="#products" primary large>Browse our products</Btn>
        <Btn href="#who-we-serve" large>Who we serve</Btn>
      </div>
      <div style={{ display: "flex", gap: 48, marginTop: 80, flexWrap: "wrap", justifyContent: "center" }}>
        {[["1", "live product"], ["3", "audiences served"], ["∞", "more in the pipeline"]].map(([n, l]) => (
          <div key={l} style={{ textAlign: "center" }}>
            <p style={{ fontFamily: F.display, fontSize: 38, color: C.text, lineHeight: 1 }}>{n}</p>
            <p style={{ fontFamily: F.sans, fontSize: 12, color: C.dim, marginTop: 6, letterSpacing: "0.02em" }}>{l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Tag({ color, bg, children }) {
  return (
    <span style={{ fontFamily: F.sans, fontSize: 11, fontWeight: 500, color, background: bg, padding: "4px 10px", borderRadius: 100, letterSpacing: "0.05em" }}>
      {children}
    </span>
  );
}

function LiveBadge() {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: F.sans, fontSize: 11, fontWeight: 500, color: C.teal, background: C.tealSoft, border: `1px solid ${C.tealBorder}`, padding: "4px 10px", borderRadius: 100, letterSpacing: "0.05em" }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.teal, display: "inline-block", animation: "pulse 2s ease-in-out infinite" }} />
      Live
    </span>
  );
}

function CookbookCard() {
  const [h, setH] = useState(false);
  return (
    <div style={{
      width: 380, flexShrink: 0,
      background: C.surface,
      border: `1px solid ${h ? C.tealBorder : C.border}`,
      borderRadius: 18, padding: "32px 28px", transition: "all .2s",
      transform: h ? "translateY(-2px)" : "none",
      display: "flex", flexDirection: "column",
      boxShadow: h ? `0 0 40px rgba(52,211,153,0.06)` : "none",
    }}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 20 }}>
        <span style={{ fontSize: 28 }}>📒</span>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <Tag color={C.teal} bg={C.tealSoft}>Consumer</Tag>
          <LiveBadge />
        </div>
      </div>
      <h3 style={{ fontFamily: F.display, fontSize: 30, color: C.text, marginBottom: 10 }}>The Cookbook</h3>
      <p style={{ fontFamily: F.sans, fontSize: 14, color: C.muted, lineHeight: 1.68, marginBottom: 26, flex: 1 }}>
        A culinary community platform to create, organize, share, and discover recipes and cookbooks. Free to use — with premium features for power users.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 28 }}>
        {[
          { tier: "Free", items: ["Up to 3 cookbooks", "Public & private recipes", "Browse community content"] },
          { tier: "Pro · $9.99/mo", items: ["Unlimited cookbooks", "Ingredient list export", "Personalized recommendations"] },
        ].map(t => (
          <div key={t.tier} style={{ background: C.surfaceAlt, borderRadius: 12, padding: "14px 12px" }}>
            <p style={{ fontFamily: F.sans, fontSize: 12, fontWeight: 500, color: C.teal, marginBottom: 8 }}>{t.tier}</p>
            {t.items.map(i => (
              <p key={i} style={{ fontFamily: F.sans, fontSize: 12, color: C.muted, marginBottom: 5, display: "flex", gap: 6, alignItems: "flex-start", lineHeight: 1.4 }}>
                <span style={{ color: C.teal, flexShrink: 0 }}>✓</span>{i}
              </p>
            ))}
          </div>
        ))}
      </div>
      <a href="https://thecookbook.up.railway.app/" target="_blank" rel="noreferrer"
        style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: F.sans, fontSize: 14, fontWeight: 500, color: C.teal, transition: "gap .15s" }}
        onMouseEnter={e => e.currentTarget.style.gap = "13px"} onMouseLeave={e => e.currentTarget.style.gap = "8px"}>
        Open The Cookbook
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </a>
    </div>
  );
}

function Products() {
  const outerPad = "max(1.5rem, calc(50vw - 660px))";
  return (
    <section id="products" style={{ borderTop: `1px solid ${C.border}`, paddingTop: 100, paddingBottom: 100 }}>
      <div style={{ padding: `0 ${outerPad}`, marginBottom: 48 }}>
        <Label color={C.accent}>Products</Label>
        <h2 style={H2}>Our SaaS Products</h2>
        <p style={Sub}>Every product we ship is a real, standalone piece of software — not a prototype, not a side project.</p>
      </div>

      {/* Horizontally scrollable strip — bleeds to edges */}
      <div
        className="products-scroll"
        style={{
          display: "flex", gap: 20, overflowX: "auto", overflowY: "visible",
          padding: `4px ${outerPad} 20px`,
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}>
        <div style={{ scrollSnapAlign: "start" }}><CookbookCard /></div>
      </div>
    </section>
  );
}

const audiences = [
  {
    label: "Consumers",
    icon: "◉",
    color: C.teal,
    soft: C.tealSoft,
    headline: "Everyday tools, beautifully made.",
    desc: "Products designed for real people — intuitive, accessible, and priced fairly. If a consumer needs it, we'll build it right.",
    status: "live",
  },
  {
    label: "Businesses",
    icon: "◈",
    color: C.accent,
    soft: C.accentSoft,
    headline: "Software that helps your business get more done.",
    desc: "Whether you're a solo operator, a small team, or a growing company, our tools are built to reduce friction, save time, and keep things moving.",
    status: "soon",
  },
  {
    label: "Developers",
    icon: "⬡",
    color: C.purple,
    soft: C.purpleSoft,
    headline: "Infrastructure for builders.",
    desc: "APIs, SDKs, and developer-first platforms. Well-documented, reliable, and built with DX as a first-class concern.",
    status: "soon",
  },
];

function WhoWeServe() {
  return (
    <section id="who-we-serve" style={{ padding: "100px max(1.5rem, calc(50vw - 660px))", borderTop: `1px solid ${C.border}` }}>
      <Label color={C.teal}>Who We Serve</Label>
      <h2 style={H2}>Three audiences. One standard.</h2>
      <p style={Sub}>Every product we build serves at least one of these groups — often all three.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginTop: 48 }}>
        {audiences.map(a => (
          <div key={a.label} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 16, padding: "30px 24px", transition: "border-color .2s" }}
            onMouseEnter={e => e.currentTarget.style.borderColor = C.borderHover}
            onMouseLeave={e => e.currentTarget.style.borderColor = C.border}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: a.soft, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, color: a.color, marginBottom: 18 }}>{a.icon}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <Tag color={a.color} bg={a.soft}>{a.label}</Tag>
              {a.status === "soon" && (
                <span style={{ fontFamily: F.sans, fontSize: 11, color: C.dim, letterSpacing: "0.04em" }}>Coming soon</span>
              )}
            </div>
            <h3 style={{ fontFamily: F.display, fontSize: 22, color: C.text, marginBottom: 10, lineHeight: 1.2 }}>{a.headline}</h3>
            <p style={{ fontFamily: F.sans, fontSize: 14, color: C.muted, lineHeight: 1.68 }}>{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" style={{ padding: "100px max(1.5rem, calc(50vw - 660px))", borderTop: `1px solid ${C.border}` }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
        <div>
          <Label color={C.purple}>About</Label>
          <h2 style={{ ...H2, textAlign: "left" }}>A product company, not a consultancy.</h2>
          <p style={{ fontFamily: F.sans, fontSize: 15, color: C.muted, lineHeight: 1.78, marginBottom: 18 }}>
            Agentic Solutions LLC is a New York-based company focused on building and operating SaaS products for consumers, businesses, and developers.
          </p>
          <p style={{ fontFamily: F.sans, fontSize: 15, color: C.muted, lineHeight: 1.78 }}>
            Founded in April 2026, we ship real products — not MVPs that disappear. Our commitment is to long-term, quality software that earns its users' trust over time.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            ["Company", "Agentic Solutions LLC"],
            ["State of Formation", "New York"],
            ["Founded", "April 2026"],
            ["Location", "New York, NY"],
            ["Focus", "SaaS Products"],
          ].map(([label, value]) => (
            <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "14px 18px", background: C.surface, border: `1px solid ${C.border}`, borderRadius: 10 }}>
              <span style={{ fontFamily: F.sans, fontSize: 13, color: C.muted }}>{label}</span>
              <span style={{ fontFamily: F.sans, fontSize: 13, fontWeight: 500, color: C.text }}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [h, setH] = useState(false);
  return (
    <section id="contact" style={{ padding: "100px max(1.5rem, calc(50vw - 660px)) 120px", borderTop: `1px solid ${C.border}` }}>
      <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 22, padding: "72px 56px", textAlign: "center", backgroundImage: `radial-gradient(ellipse 60% 50% at 50% 0%, rgba(91,141,238,0.06) 0%, transparent 70%)` }}>
        <Chip>Get in touch</Chip>
        <h2 style={{ ...H2, textAlign: "center", fontSize: 42 }}>Have a question or idea?</h2>
        <p style={{ fontFamily: F.sans, fontSize: 16, color: C.muted, maxWidth: 460, margin: "0 auto 44px", lineHeight: 1.7 }}>
          We're open to product feedback, partnership conversations, and anything in between.
        </p>
        <a href="mailto:agenticsolutionsllc@yahoo.com"
          style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: F.sans, fontSize: 15, fontWeight: 500, color: "#fff", background: C.accent, padding: "14px 32px", borderRadius: 11, boxShadow: h ? `0 4px 40px ${C.accentGlow}` : `0 0 24px ${C.accentGlow}`, transition: "all .15s", transform: h ? "translateY(-1px)" : "none" }}
          onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
          agenticsolutionsllc@yahoo.com
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${C.border}`, padding: "28px max(1.5rem, calc(50vw - 660px))", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
      <Logo />
      <a href="https://thecookbook.up.railway.app/" style={{ fontFamily: F.sans, fontSize: 13, color: C.dim, transition: "color .15s" }}
        onMouseEnter={e => e.target.style.color = C.muted} onMouseLeave={e => e.target.style.color = C.dim}>
        The Cookbook
      </a>
      <span style={{ fontFamily: F.sans, fontSize: 12, color: C.dim }}>© 2026 Agentic Solutions LLC · New York, NY</span>
    </footer>
  );
}

function Label({ children, color }) {
  return <p style={{ fontFamily: F.sans, fontSize: 11, fontWeight: 500, color, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14 }}>{children}</p>;
}

const H2 = { fontFamily: F.display, fontSize: "clamp(28px, 4vw, 46px)", color: C.text, lineHeight: 1.12, letterSpacing: "-0.022em", marginBottom: 16, textAlign: "left" };
const Sub = { fontFamily: F.sans, fontSize: 16, fontWeight: 300, color: C.muted, lineHeight: 1.7, maxWidth: 520, textAlign: "left" };

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <>
      <style>{gfonts}</style>
      <div style={{ background: C.bg, minHeight: "100vh", color: C.text }}>
        <Nav scrolled={scrolled} />
        <Hero />
        <Products />
        <WhoWeServe />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}