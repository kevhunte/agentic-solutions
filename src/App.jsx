import { useState, useEffect } from "react";

const C = {
  bg: "var(--color-bg)",
  surface: "var(--color-surface)",
  surfaceAlt: "var(--color-surface-alt)",
  border: "var(--color-border)",
  borderHover: "var(--color-border-hover)",
  accent: "var(--color-accent)",
  accentSoft: "var(--color-accent-soft)",
  accentGlow: "var(--color-accent-glow)",
  teal: "var(--color-teal)",
  tealSoft: "var(--color-teal-soft)",
  tealBorder: "var(--color-teal-border)",
  purple: "var(--color-purple)",
  purpleSoft: "var(--color-purple-soft)",
  text: "var(--color-text)",
  muted: "var(--color-muted)",
  dim: "var(--color-dim)",
};

const F = {
  display: "var(--font-display)",
  sans: "var(--font-sans)",
};

function NavLink({ href, children }) {
  return <a href={href} className="nav-link">{children}</a>;
}

function Btn({ href, children, primary, large }) {
  const [h, setH] = useState(false);
  return (
    <a
      href={href}
      style={{
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
      }}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
    >
      {children}
    </a>
  );
}

function Logo() {
  return (
    <div className="logo">
      <div className="logo-icon">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
          <rect x="1" y="1" width="5.5" height="5.5" rx="1.5" fill="white" opacity="0.95" />
          <rect x="8.5" y="1" width="5.5" height="5.5" rx="1.5" fill="white" opacity="0.55" />
          <rect x="1" y="8.5" width="5.5" height="5.5" rx="1.5" fill="white" opacity="0.55" />
          <rect x="8.5" y="8.5" width="5.5" height="5.5" rx="1.5" fill="white" opacity="0.95" />
        </svg>
      </div>
      <span className="logo-text">Agentic Solutions</span>
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
      <div className="nav-inner">
        <Logo />
        <div className="nav-spacer" />
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
    <div className="chip">
      <div className="chip-dot" />
      <span className="chip-text">{children}</span>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero">
      <Chip>Agentic Solutions LLC · New York · Est. 2026</Chip>
      <h1 className="hero-title">
        Software built for<br />
        <em style={{ color: C.accent, fontStyle: "italic" }}>everyone</em> who needs it.
      </h1>
      <p className="hero-subtitle">
        We design and ship SaaS products for consumers, businesses, and developers — tools that are useful, well-crafted, and built to last.
      </p>
      <div className="hero-ctas">
        <Btn href="#products" primary large>Browse our products</Btn>
        <Btn href="#who-we-serve" large>Who we serve</Btn>
      </div>
      <div className="hero-stats">
        {[["1", "live product"], ["3", "audiences served"], ["∞", "more in the pipeline"]].map(([n, l]) => (
          <div key={l} style={{ textAlign: "center" }}>
            <p className="hero-stat-num">{n}</p>
            <p className="hero-stat-label">{l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Tag({ color, bg, children }) {
  return (
    <span style={{
      fontFamily: F.sans, fontSize: 11, fontWeight: 500,
      color, background: bg,
      padding: "4px 10px", borderRadius: 100, letterSpacing: "0.05em",
    }}>
      {children}
    </span>
  );
}

function LiveBadge() {
  return (
    <span className="live-badge">
      <span className="live-dot" />
      Live
    </span>
  );
}

function CookbookCard() {
  const [h, setH] = useState(false);
  return (
    <div
      className="cookbook-card"
      style={{
        border: `1px solid ${h ? C.tealBorder : C.border}`,
        transform: h ? "translateY(-2px)" : "none",
        boxShadow: h ? `0 0 40px rgba(52,211,153,0.06)` : "none",
      }}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
    >
      <div className="cookbook-card-header">
        <span style={{ fontSize: 28 }}>📒</span>
        <div className="cookbook-card-badges">
          <Tag color={C.teal} bg={C.tealSoft}>Consumer</Tag>
          <LiveBadge />
        </div>
      </div>
      <h3 className="cookbook-card-title">The Cookbook</h3>
      <p className="cookbook-card-desc">
        A culinary community platform to create, organize, share, and discover recipes and cookbooks. Free to use — with premium features for power users.
      </p>
      <div className="cookbook-tiers">
        {[
          { tier: "Free", items: ["Up to 3 cookbooks", "Public & private recipes", "Browse community content"] },
          { tier: "Pro · $9.99/mo", items: ["Unlimited cookbooks", "Ingredient list export", "Personalized recommendations"] },
        ].map(t => (
          <div key={t.tier} className="cookbook-tier">
            <p className="cookbook-tier-name">{t.tier}</p>
            {t.items.map(i => (
              <p key={i} className="cookbook-tier-item">
                <span className="cookbook-tier-check">✓</span>{i}
              </p>
            ))}
          </div>
        ))}
      </div>
      <a
        href="https://thecookbook.up.railway.app/"
        target="_blank"
        rel="noreferrer"
        className="cookbook-link"
        onMouseEnter={e => e.currentTarget.style.gap = "13px"}
        onMouseLeave={e => e.currentTarget.style.gap = "8px"}
      >
        Open The Cookbook
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  );
}

function Products() {
  return (
    <section id="products" className="products-section">
      <div className="products-header">
        <Label color={C.accent}>Products</Label>
        <h2 className="section-h2">Our SaaS Products</h2>
        <p className="section-sub">Every product we ship is a real, standalone piece of software — not a prototype, not a side project.</p>
      </div>
      <div className="products-scroll">
        <div style={{ scrollSnapAlign: "start" }}><CookbookCard /></div>
      </div>
    </section>
  );
}

const audiences = [
  {
    label: "Consumers",
    icon: "◉",
    color: "var(--color-teal)",
    soft: "var(--color-teal-soft)",
    headline: "Everyday tools, beautifully made.",
    desc: "Products designed for real people — intuitive, accessible, and priced fairly. If a consumer needs it, we'll build it right.",
    status: "live",
  },
  {
    label: "Businesses",
    icon: "◈",
    color: "var(--color-accent)",
    soft: "var(--color-accent-soft)",
    headline: "Software that helps your business get more done.",
    desc: "Whether you're a solo operator, a small team, or a growing company, our tools are built to reduce friction, save time, and keep things moving.",
    status: "soon",
  },
  {
    label: "Developers",
    icon: "⬡",
    color: "var(--color-purple)",
    soft: "var(--color-purple-soft)",
    headline: "Infrastructure for builders.",
    desc: "APIs, SDKs, and developer-first platforms. Well-documented, reliable, and built with DX as a first-class concern.",
    status: "soon",
  },
];

function WhoWeServe() {
  return (
    <section id="who-we-serve" className="section-pad section-border-top">
      <Label color={C.teal}>Who We Serve</Label>
      <h2 className="section-h2">Three audiences. One standard.</h2>
      <p className="section-sub">Every product we build serves at least one of these groups — often all three.</p>
      <div className="serve-grid">
        {audiences.map(a => (
          <div
            key={a.label}
            className="serve-card"
            onMouseEnter={e => e.currentTarget.style.borderColor = C.borderHover}
            onMouseLeave={e => e.currentTarget.style.borderColor = C.border}
          >
            <div className="serve-card-icon" style={{ background: a.soft, color: a.color }}>{a.icon}</div>
            <div className="serve-card-meta">
              <Tag color={a.color} bg={a.soft}>{a.label}</Tag>
              {a.status === "soon" && <span className="serve-card-soon">Coming soon</span>}
            </div>
            <h3 className="serve-card-headline">{a.headline}</h3>
            <p className="serve-card-desc">{a.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-pad section-border-top">
      <div className="about-grid">
        <div>
          <Label color={C.purple}>About</Label>
          <h2 className="section-h2">A product company, not a consultancy.</h2>
          <p className="about-body-text">
            Agentic Solutions LLC is a New York-based company focused on building and operating SaaS products for consumers, businesses, and developers.
          </p>
          <p className="about-body-text">
            Founded in April 2026, we ship real products — not MVPs that disappear. Our commitment is to long-term, quality software that earns its users' trust over time.
          </p>
        </div>
        <div className="about-facts">
          {[
            ["Company", "Agentic Solutions LLC"],
            ["State of Formation", "New York"],
            ["Founded", "April 2026"],
            ["Location", "New York, NY"],
            ["Focus", "SaaS Products"],
          ].map(([label, value]) => (
            <div key={label} className="about-fact-row">
              <span className="about-fact-label">{label}</span>
              <span className="about-fact-value">{value}</span>
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
    <section id="contact" className="contact-section">
      <div className="contact-box">
        <Chip>Get in touch</Chip>
        <h2 className="contact-h2">Have a question or idea?</h2>
        <p className="contact-desc">
          We&apos;re open to product feedback, partnership conversations, and anything in between.
        </p>
        <a
          href="mailto:agenticsolutionsllc@yahoo.com"
          style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            fontFamily: F.sans, fontSize: 15, fontWeight: 500,
            color: "#fff", background: C.accent,
            padding: "14px 32px", borderRadius: 11,
            boxShadow: h ? `0 4px 40px ${C.accentGlow}` : `0 0 24px ${C.accentGlow}`,
            transition: "all .15s",
            transform: h ? "translateY(-1px)" : "none",
          }}
          onMouseEnter={() => setH(true)}
          onMouseLeave={() => setH(false)}
        >
          agenticsolutionsllc@yahoo.com
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <Logo />
      <a href="https://thecookbook.up.railway.app/" className="footer-link">
        The Cookbook
      </a>
      <span className="footer-copyright">© 2026 Agentic Solutions LLC · New York, NY</span>
    </footer>
  );
}

function Label({ children, color }) {
  return <p className="section-label" style={{ color }}>{children}</p>;
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <div className="page-wrapper">
      <Nav scrolled={scrolled} />
      <Hero />
      <Products />
      <WhoWeServe />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
