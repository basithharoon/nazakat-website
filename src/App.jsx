import { useState, useEffect } from "react";

// ─── LOGO SVG (recreated from brand: hanger + hearts + "Nazakat" script) ──────
function NazakatLogo({ size = 48, variant = "full" }) {
  // variant: "full" = icon+text, "icon" = icon only, "light" = light version
  const textColor = variant === "light" ? "#f5e6d8" : "#7a3b1e";
  const strokeColor = variant === "light" ? "#f0c9a0" : "#c4865a";
  const glowColor = variant === "light" ? "rgba(240,201,160,0.4)" : "rgba(196,134,90,0.3)";
  return (
    <svg width={size} height={size * 0.85} viewBox="0 0 120 102" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`lg-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={variant === "light" ? "#f5e6d8" : "#e8b490"} />
          <stop offset="50%" stopColor={variant === "light" ? "#f0c9a0" : "#c4865a"} />
          <stop offset="100%" stopColor={variant === "light" ? "#d4a882" : "#8b4513"} />
        </linearGradient>
        <filter id={`glow-${variant}`}>
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      {/* Hanger body */}
      <path d="M60 28 Q60 22 66 20 Q72 18 74 22 Q76 26 72 28 Q68 30 60 28Z" stroke={`url(#lg-${variant})`} strokeWidth="2.5" fill="none" filter={`url(#glow-${variant})`}/>
      {/* Hook curl */}
      <path d="M64 20 Q68 12 73 13 Q78 14 77 19 Q76 23 71 23" stroke={`url(#lg-${variant})`} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* Hanger arms */}
      <path d="M60 28 Q30 32 18 55 Q16 60 22 62 Q98 62 100 62 Q106 60 104 55 Q92 32 60 28" stroke={`url(#lg-${variant})`} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Bottom oval */}
      <path d="M24 62 Q32 78 60 78 Q88 78 98 62" stroke={`url(#lg-${variant})`} strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Hearts */}
      <path d="M28 26 Q28 21 33 21 Q36 21 37 24 Q38 21 41 21 Q46 21 46 26 Q46 31 37 36 Q28 31 28 26Z" fill={`url(#lg-${variant})`} opacity="0.85" filter={`url(#glow-${variant})`}/>
      <path d="M32 28 Q32 25 35 25 Q36.5 25 37 26.5 Q37.5 25 39 25 Q42 25 42 28 Q42 31 37 34 Q32 31 32 28Z" fill="white" opacity="0.4"/>
      {/* Sparkles */}
      <g filter={`url(#glow-${variant})`} opacity="0.9">
        <line x1="101" y1="56" x2="101" y2="62" stroke={strokeColor} strokeWidth="1.5"/>
        <line x1="98" y1="59" x2="104" y2="59" stroke={strokeColor} strokeWidth="1.5"/>
        <line x1="99" y1="57" x2="103" y2="61" stroke={strokeColor} strokeWidth="1"/>
        <line x1="103" y1="57" x2="99" y2="61" stroke={strokeColor} strokeWidth="1"/>
        <line x1="108" y1="50" x2="108" y2="54" stroke={strokeColor} strokeWidth="1"/>
        <line x1="106" y1="52" x2="110" y2="52" stroke={strokeColor} strokeWidth="1"/>
      </g>
      {/* Brand name */}
      <text x="60" y="76" textAnchor="middle" fontFamily="'Cormorant Garamond', Georgia, serif" fontStyle="italic" fontSize="16" fill={`url(#lg-${variant})`} filter={`url(#glow-${variant})`} letterSpacing="1">Nazakat</text>
    </svg>
  );
}

// ─── GLOBAL STYLES ────────────────────────────────────────────────────────────
const GlobalStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Jost:wght@200;300;400;500;600&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      /* Brand palette derived from logo */
      --terracotta: #8b2e0a;
      --terra-deep: #6b1f08;
      --terra-mid: #a33d15;
      --rose-gold: #c4865a;
      --rose-light: #e8b490;
      --rose-pale:  #f5e6d8;
      --champagne:  #f0c9a0;
      --cream:      #fdf8f3;
      --warm-white: #faf5ef;
      --beige:      #f0e8dc;
      --warm-mid:   #e0d0bc;
      --text:       #3d1f0a;
      --text-mid:   #7a4a30;
      --text-light: #a07055;
      --border:     #e0cbb8;
      --shadow:     0 4px 24px rgba(139,46,10,0.08);
      --shadow-lg:  0 16px 56px rgba(139,46,10,0.15);
      --shadow-gold: 0 0 24px rgba(196,134,90,0.3);
    }

    html { scroll-behavior: smooth; }
    body {
      font-family: 'Jost', sans-serif;
      background: var(--cream);
      color: var(--text);
      line-height: 1.6;
      overflow-x: hidden;
    }
    h1,h2,h3,h4 { font-family: 'Cormorant Garamond', serif; font-weight: 400; line-height: 1.2; }

    ::-webkit-scrollbar { width: 5px; }
    ::-webkit-scrollbar-track { background: var(--beige); }
    ::-webkit-scrollbar-thumb { background: var(--rose-gold); border-radius: 3px; }

    @keyframes fadeUp   { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
    @keyframes fadeIn   { from { opacity:0; } to { opacity:1; } }
    @keyframes floatUp  { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-8px); } }
    @keyframes shimmerMove { 0% { background-position: -400px 0; } 100% { background-position: 400px 0; } }
    @keyframes sparkle  { 0%,100% { opacity:0.3; transform:scale(0.8); } 50% { opacity:1; transform:scale(1.2); } }

    .animate-up { animation: fadeUp 0.75s ease both; }
    .animate-in { animation: fadeIn 0.5s ease both; }

    /* ─── NAV ─── */
    .nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
      background: rgba(253,248,243,0.96);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid var(--border);
      transition: all 0.3s;
    }
    .nav-inner {
      max-width: 1280px; margin: 0 auto;
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 32px; height: 76px;
    }
    .nav-brand { display: flex; align-items: center; gap: 12px; cursor: pointer; }
    .nav-brand-text { display: flex; flex-direction: column; }
    .nav-brand-name { font-family: 'Cormorant Garamond'; font-style: italic; font-size: 26px; color: var(--terracotta); line-height: 1; letter-spacing: 0.02em; }
    .nav-brand-tag  { font-size: 8.5px; letter-spacing: 0.35em; text-transform: uppercase; color: var(--rose-gold); font-family: 'Jost'; }
    .nav-links { display: flex; gap: 36px; list-style: none; }
    .nav-links a { font-size: 11.5px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--text-mid); text-decoration: none; transition: color 0.2s; cursor: pointer; position: relative; }
    .nav-links a::after { content:''; position:absolute; bottom:-4px; left:0; right:0; height:1px; background:var(--rose-gold); transform:scaleX(0); transition:transform 0.3s; }
    .nav-links a:hover { color: var(--terracotta); }
    .nav-links a:hover::after { transform:scaleX(1); }
    .nav-cta {
      background: var(--terracotta); color: var(--rose-pale);
      border: none; padding: 11px 24px; font-family: 'Jost'; font-size: 10.5px;
      letter-spacing: 0.22em; text-transform: uppercase; cursor: pointer; transition: all 0.3s;
    }
    .nav-cta:hover { background: var(--rose-gold); box-shadow: var(--shadow-gold); }
    .hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; }
    .hamburger span { display:block; width:24px; height:1.5px; background:var(--terracotta); transition:all 0.3s; }
    .mobile-menu {
      display: none; position: fixed; inset: 0; z-index: 999;
      background: var(--cream); flex-direction: column;
      padding: 100px 40px 40px; gap: 0;
    }
    .mobile-menu.open { display: flex; animation: fadeIn 0.25s ease; }
    .mobile-menu a {
      font-family: 'Cormorant Garamond'; font-size: 36px; font-style: italic;
      color: var(--terracotta); text-decoration: none; cursor: pointer;
      padding: 18px 0; border-bottom: 1px solid var(--border);
      transition: color 0.2s;
    }
    .mobile-menu a:hover { color: var(--rose-gold); }
    .mobile-close {
      position: absolute; top: 28px; right: 32px;
      background: none; border: none; font-size: 28px; cursor: pointer; color: var(--text-mid);
    }

    /* ─── HERO ─── */
    .hero {
      min-height: 100vh;
      background: linear-gradient(150deg, var(--terracotta) 0%, #6b1f08 40%, #4a1205 100%);
      display: flex; align-items: center; position: relative; overflow: hidden;
      padding-top: 76px;
    }
    .hero-texture {
      position: absolute; inset: 0; opacity: 0.04;
      background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f5e6d8' fill-opacity='1'%3E%3Cpath d='M20 0 L22 18 L40 20 L22 22 L20 40 L18 22 L0 20 L18 18Z'/%3E%3C/g%3E%3C/svg%3E");
    }
    .hero-radial {
      position: absolute; right: -200px; top: 50%; transform: translateY(-50%);
      width: 700px; height: 700px; border-radius: 50%;
      background: radial-gradient(ellipse, rgba(196,134,90,0.15) 0%, transparent 70%);
      pointer-events: none;
    }
    .hero-inner {
      max-width: 1280px; margin: 0 auto; padding: 80px 32px;
      display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 80px; align-items: center;
      position: relative; z-index: 1; width: 100%;
    }
    .hero-left .eyebrow {
      display: inline-flex; align-items: center; gap: 14px; margin-bottom: 28px;
      font-size: 9.5px; letter-spacing: 0.45em; text-transform: uppercase; color: var(--champagne);
    }
    .hero-left .eyebrow::before, .hero-left .eyebrow::after { content:''; width:36px; height:1px; background:var(--rose-gold); }
    .hero-h1 { font-size: clamp(50px, 6.5vw, 88px); color: var(--rose-pale); margin-bottom: 8px; }
    .hero-h1 em { color: var(--champagne); display: block; }
    .hero-tagline { font-size: clamp(13px, 1.5vw, 16px); color: rgba(245,230,216,0.65); letter-spacing: 0.12em; margin-bottom: 32px; font-style: italic; font-family: 'Cormorant Garamond'; }
    .hero-desc { font-size: 15px; color: rgba(245,230,216,0.7); max-width: 460px; line-height: 1.85; margin-bottom: 44px; }
    .hero-btns { display: flex; gap: 16px; flex-wrap: wrap; }
    .btn-hero-primary {
      background: var(--rose-gold); color: var(--text);
      border: none; padding: 16px 40px; font-family: 'Jost'; font-size: 11px;
      letter-spacing: 0.25em; text-transform: uppercase; cursor: pointer; transition: all 0.35s;
    }
    .btn-hero-primary:hover { background: var(--champagne); transform: translateY(-2px); box-shadow: var(--shadow-gold); }
    .btn-hero-outline {
      background: transparent; color: var(--rose-pale);
      border: 1px solid rgba(196,134,90,0.6); padding: 16px 40px; font-family: 'Jost'; font-size: 11px;
      letter-spacing: 0.25em; text-transform: uppercase; cursor: pointer; transition: all 0.35s;
    }
    .btn-hero-outline:hover { border-color: var(--rose-gold); color: var(--champagne); }
    .hero-trust { display: flex; gap: 32px; margin-top: 44px; flex-wrap: wrap; }
    .trust-item { display: flex; align-items: center; gap: 8px; font-size: 12px; color: rgba(245,230,216,0.55); }
    .trust-icon { font-size: 16px; }

    /* Hero card */
    .hero-right { position: relative; }
    .hero-card-wrap { position: relative; animation: floatUp 6s ease-in-out infinite; }
    .hero-card {
      background: rgba(253,248,243,0.07); backdrop-filter: blur(12px);
      border: 1px solid rgba(196,134,90,0.3); padding: 0;
      overflow: hidden; position: relative;
    }
    .hero-card-badge {
      background: var(--rose-gold); color: var(--text);
      font-size: 9px; letter-spacing: 0.25em; text-transform: uppercase;
      padding: 8px 20px; display: inline-block;
    }
    .hero-card-img {
      height: 340px;
      background: linear-gradient(135deg, rgba(196,134,90,0.15) 0%, rgba(240,201,160,0.08) 100%);
      display: flex; align-items: center; justify-content: center;
      position: relative; overflow: hidden;
    }
    .hero-card-img .fabric-lines {
      position: absolute; inset: 0;
      background: repeating-linear-gradient(45deg, transparent, transparent 12px, rgba(196,134,90,0.05) 12px, rgba(196,134,90,0.05) 24px);
    }
    .hero-card-img .hero-emoji { font-size: 80px; position: relative; z-index: 1; filter: drop-shadow(0 8px 24px rgba(0,0,0,0.3)); }
    .hero-card-body { padding: 24px 28px; }
    .hero-card-cat { font-size: 9.5px; letter-spacing: 0.25em; text-transform: uppercase; color: var(--rose-gold); margin-bottom: 6px; }
    .hero-card-name { font-size: 22px; color: var(--rose-pale); margin-bottom: 4px; }
    .hero-card-fabric { font-size: 12px; color: rgba(245,230,216,0.5); margin-bottom: 16px; }
    .hero-card-price { font-family: 'Cormorant Garamond'; font-size: 30px; color: var(--champagne); margin-bottom: 16px; }
    .hero-card-btn {
      width: 100%; background: var(--rose-gold); color: var(--text);
      border: none; padding: 14px; font-family: 'Jost'; font-size: 11px;
      letter-spacing: 0.2em; text-transform: uppercase; cursor: pointer; transition: all 0.3s;
    }
    .hero-card-btn:hover { background: var(--champagne); }

    /* ─── SECTIONS ─── */
    .section { padding: 88px 32px; }
    .section-inner { max-width: 1280px; margin: 0 auto; }
    .sec-head { text-align: center; margin-bottom: 64px; }
    .sec-eyebrow { font-size: 9.5px; letter-spacing: 0.45em; text-transform: uppercase; color: var(--rose-gold); display: block; margin-bottom: 14px; }
    .sec-title { font-size: clamp(34px, 4vw, 56px); color: var(--terracotta); }
    .sec-title em { color: var(--rose-gold); font-style: italic; }
    .sec-sub { font-size: 15px; color: var(--text-light); margin-top: 16px; max-width: 520px; margin-left: auto; margin-right: auto; font-family: 'Cormorant Garamond'; font-style: italic; font-size: 18px; }
    .divider { width: 56px; height: 1px; background: linear-gradient(to right, transparent, var(--rose-gold), transparent); margin: 20px auto 0; }

    /* ─── CATEGORIES ─── */
    .cat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 3px; }
    .cat-card { aspect-ratio: 0.8; position: relative; cursor: pointer; overflow: hidden; }
    .cat-card:first-child { grid-row: span 2; aspect-ratio: auto; }
    .cat-bg { position: absolute; inset: 0; transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94); }
    .cat-card:hover .cat-bg { transform: scale(1.06); }
    .cat-card:nth-child(1) .cat-bg { background: linear-gradient(160deg, #8b2e0a 0%, #5a1a06 100%); }
    .cat-card:nth-child(2) .cat-bg { background: linear-gradient(160deg, #a33d15 0%, #7a2c0e 100%); }
    .cat-card:nth-child(3) .cat-bg { background: linear-gradient(160deg, #c4865a 0%, #8b4513 100%); }
    .cat-card:nth-child(4) .cat-bg { background: linear-gradient(160deg, #7a3b1e 0%, #4a1a08 100%); }
    .cat-card:nth-child(5) .cat-bg { background: linear-gradient(160deg, #b85a30 0%, #7a2e0a 100%); }
    .cat-pattern {
      position: absolute; inset: 0; opacity: 0.06;
      background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f5e6d8'%3E%3Ccircle cx='15' cy='15' r='3'/%3E%3C/g%3E%3C/svg%3E");
    }
    .cat-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 60%); transition: opacity 0.3s; }
    .cat-label { position: absolute; bottom: 0; left: 0; right: 0; padding: 24px; color: var(--rose-pale); }
    .cat-label .sub { font-size: 9px; letter-spacing: 0.3em; text-transform: uppercase; opacity: 0.7; display: block; margin-bottom: 4px; color: var(--champagne); }
    .cat-label h3 { font-size: 22px; }
    .cat-card:first-child .cat-label h3 { font-size: 30px; }
    .cat-emoji { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-60%); font-size: 64px; opacity: 0.2; transition: opacity 0.3s; pointer-events: none; }
    .cat-card:hover .cat-emoji { opacity: 0.35; }

    /* ─── PRODUCTS ─── */
    .product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(290px, 1fr)); gap: 28px; }
    .product-card { background: white; position: relative; cursor: pointer; transition: all 0.45s cubic-bezier(0.25,0.46,0.45,0.94); box-shadow: var(--shadow); }
    .product-card:hover { transform: translateY(-10px); box-shadow: var(--shadow-lg); }
    .prod-img-wrap { position: relative; overflow: hidden; aspect-ratio: 3/4; }
    .prod-img {
      width: 100%; height: 100%;
      background: linear-gradient(135deg, var(--beige) 0%, var(--warm-mid) 100%);
      display: flex; align-items: center; justify-content: center;
      font-size: 72px; transition: transform 0.65s;
      position: relative;
    }
    .prod-img::before {
      content: ''; position: absolute; inset: 0;
      background: repeating-linear-gradient(45deg, transparent, transparent 14px, rgba(196,134,90,0.04) 14px, rgba(196,134,90,0.04) 28px);
    }
    .product-card:hover .prod-img { transform: scale(1.07); }
    .prod-overlay {
      position: absolute; inset: 0; background: rgba(107,31,8,0.55);
      display: flex; align-items: center; justify-content: center;
      opacity: 0; transition: opacity 0.4s;
    }
    .product-card:hover .prod-overlay { opacity: 1; }
    .prod-overlay-btn {
      background: var(--rose-pale); color: var(--terracotta);
      border: none; padding: 14px 28px; font-family: 'Jost'; font-size: 10.5px;
      letter-spacing: 0.22em; text-transform: uppercase; cursor: pointer; transition: all 0.3s;
    }
    .prod-overlay-btn:hover { background: var(--rose-gold); color: white; }
    .prod-tag {
      position: absolute; top: 16px; left: 0;
      background: var(--terracotta); color: var(--rose-pale);
      font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase;
      padding: 6px 14px; font-family: 'Jost';
    }
    .prod-info { padding: 22px; }
    .prod-cat { font-size: 9.5px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--rose-gold); margin-bottom: 6px; }
    .prod-name { font-size: 22px; color: var(--terracotta); margin-bottom: 4px; }
    .prod-fabric { font-size: 12px; color: var(--text-light); margin-bottom: 14px; }
    .prod-footer { display: flex; align-items: center; justify-content: space-between; padding-top: 12px; border-top: 1px solid var(--border); }
    .prod-price { font-family: 'Cormorant Garamond'; font-size: 24px; color: var(--rose-gold); }
    .prod-delivery { font-size: 10px; color: var(--text-light); }

    /* ─── HOW IT WORKS ─── */
    .hiw { background: linear-gradient(135deg, var(--terracotta) 0%, var(--terra-deep) 100%); }
    .hiw-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; }
    .hiw-step {
      padding: 52px 40px; text-align: center;
      background: rgba(255,255,255,0.03); transition: background 0.3s; position: relative;
    }
    .hiw-step:hover { background: rgba(255,255,255,0.06); }
    .hiw-step:not(:last-child)::after {
      content: '→'; position: absolute; right: -14px; top: 50%; transform: translateY(-50%);
      font-size: 24px; color: rgba(196,134,90,0.4); z-index: 1;
    }
    .hiw-num-wrap {
      width: 72px; height: 72px; margin: 0 auto 24px; position: relative;
      display: flex; align-items: center; justify-content: center;
    }
    .hiw-num-wrap::before {
      content: ''; position: absolute; inset: 0;
      border: 1px solid rgba(196,134,90,0.35); border-radius: 0;
      transform: rotate(45deg);
    }
    .hiw-num-wrap::after {
      content: ''; position: absolute; inset: 8px;
      border: 1px solid rgba(196,134,90,0.15); border-radius: 0;
      transform: rotate(45deg);
    }
    .hiw-num { font-family: 'Cormorant Garamond'; font-size: 30px; color: var(--rose-gold); z-index: 1; }
    .hiw-icon { font-size: 32px; margin-bottom: 16px; }
    .hiw-step h3 { font-size: 26px; color: var(--rose-pale); margin-bottom: 12px; }
    .hiw-step p { font-size: 14px; color: rgba(245,230,216,0.55); line-height: 1.85; }

    /* ─── WHY US ─── */
    .why-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
    .why-card { background: white; padding: 36px; box-shadow: var(--shadow); display: flex; gap: 22px; border-bottom: 3px solid transparent; transition: all 0.3s; }
    .why-card:hover { border-bottom-color: var(--rose-gold); transform: translateY(-4px); box-shadow: var(--shadow-lg); }
    .why-icon-wrap { width: 52px; height: 52px; background: var(--beige); display: flex; align-items: center; justify-content: center; font-size: 26px; flex-shrink: 0; }
    .why-card h3 { font-size: 24px; color: var(--terracotta); margin-bottom: 8px; }
    .why-card p { font-size: 14px; color: var(--text-light); line-height: 1.8; }

    /* ─── TESTIMONIALS ─── */
    .testi-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
    .testi-card { background: white; padding: 36px; box-shadow: var(--shadow); position: relative; overflow: hidden; }
    .testi-card::before { content: '"'; font-family: 'Cormorant Garamond'; font-size: 100px; color: var(--rose-gold); opacity: 0.08; position: absolute; top: 0; left: 16px; line-height: 1; pointer-events: none; }
    .testi-stars { color: var(--rose-gold); font-size: 14px; margin-bottom: 14px; letter-spacing: 3px; }
    .testi-text { font-size: 15px; color: var(--text-mid); line-height: 1.85; margin-bottom: 24px; font-family: 'Cormorant Garamond'; font-style: italic; font-size: 17px; }
    .testi-author { display: flex; align-items: center; gap: 12px; }
    .testi-avatar { width: 46px; height: 46px; border-radius: 50%; background: linear-gradient(135deg, var(--beige), var(--warm-mid)); display: flex; align-items: center; justify-content: center; font-size: 20px; }
    .testi-name { font-size: 14px; font-weight: 500; color: var(--terracotta); }
    .testi-loc  { font-size: 12px; color: var(--text-light); }

    /* ─── IG GRID ─── */
    .ig-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 3px; }
    .ig-item {
      aspect-ratio: 1; cursor: pointer; overflow: hidden;
      background: linear-gradient(135deg, var(--beige), var(--warm-mid));
      display: flex; align-items: center; justify-content: center; font-size: 36px;
      transition: all 0.3s; position: relative;
    }
    .ig-item:hover .ig-hover { opacity: 1; }
    .ig-hover { position: absolute; inset: 0; background: rgba(139,46,10,0.6); opacity: 0; transition: opacity 0.3s; display: flex; align-items: center; justify-content: center; color: white; font-size: 22px; }
    .ig-cta { text-align: center; margin-top: 32px; }
    .ig-handle { font-family: 'Cormorant Garamond'; font-style: italic; font-size: 22px; color: var(--rose-gold); }

    /* ─── FOOTER ─── */
    .footer { background: var(--terra-deep); color: rgba(245,230,216,0.7); }
    .footer-main { max-width: 1280px; margin: 0 auto; padding: 72px 32px 48px; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 56px; }
    .footer-brand-name { font-family: 'Cormorant Garamond'; font-style: italic; font-size: 36px; color: var(--rose-pale); margin-bottom: 6px; }
    .footer-tagline { font-size: 9.5px; letter-spacing: 0.3em; text-transform: uppercase; color: var(--rose-gold); display: block; margin-bottom: 20px; }
    .footer-desc { font-size: 14px; line-height: 1.85; margin-bottom: 28px; }
    .footer-contact { display: flex; flex-direction: column; gap: 8px; font-size: 13px; }
    .footer-col h4 { font-size: 9.5px; letter-spacing: 0.35em; text-transform: uppercase; color: var(--rose-gold); margin-bottom: 22px; }
    .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 11px; }
    .footer-col ul li { font-size: 14px; cursor: pointer; transition: color 0.2s; }
    .footer-col ul li:hover { color: var(--rose-light); }
    .footer-bottom { border-top: 1px solid rgba(245,230,216,0.08); padding: 22px 32px; max-width: 1280px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; font-size: 12px; flex-wrap: wrap; gap: 12px; }

    /* ─── PAGE HERO ─── */
    .page-hero {
      background: linear-gradient(150deg, var(--terracotta) 0%, var(--terra-deep) 100%);
      padding: 148px 32px 72px; text-align: center; position: relative; overflow: hidden;
    }
    .page-hero::before { content: ''; position: absolute; inset: 0; background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f5e6d8' fill-opacity='0.04'%3E%3Cpath d='M20 0L22 18L40 20L22 22L20 40L18 22L0 20L18 18Z'/%3E%3C/g%3E%3C/svg%3E"); }
    .page-hero h1 { font-size: clamp(38px, 5.5vw, 72px); color: var(--rose-pale); margin-bottom: 12px; position: relative; }
    .page-hero p { font-size: 16px; color: rgba(245,230,216,0.6); max-width: 480px; margin: 0 auto; position: relative; font-family: 'Cormorant Garamond'; font-style: italic; }
    .breadcrumb { font-size: 11.5px; color: rgba(245,230,216,0.45); margin-bottom: 14px; letter-spacing: 0.1em; cursor: pointer; position: relative; }
    .breadcrumb span { color: var(--rose-gold); }

    /* ─── PRODUCT DETAIL ─── */
    .pd-wrap { max-width: 1280px; margin: 0 auto; padding: 56px 32px; display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
    .pd-main-img {
      aspect-ratio: 3/4; background: linear-gradient(135deg, var(--beige), var(--warm-mid));
      display: flex; align-items: center; justify-content: center; font-size: 100px;
      margin-bottom: 12px; position: relative; overflow: hidden;
    }
    .pd-main-img::before { content:''; position:absolute; inset:0; background: repeating-linear-gradient(45deg, transparent, transparent 14px, rgba(196,134,90,0.04) 14px, rgba(196,134,90,0.04) 28px); }
    .pd-thumbs { display: grid; grid-template-columns: repeat(4,1fr); gap: 8px; }
    .pd-thumb { aspect-ratio: 1; cursor: pointer; background: var(--beige); display: flex; align-items: center; justify-content: center; font-size: 24px; border: 2px solid transparent; transition: border-color 0.2s; }
    .pd-thumb.active { border-color: var(--rose-gold); }
    .pd-eyebrow { font-size: 9.5px; letter-spacing: 0.3em; text-transform: uppercase; color: var(--rose-gold); margin-bottom: 12px; }
    .pd-title { font-size: 46px; color: var(--terracotta); margin-bottom: 8px; }
    .pd-price { font-size: 40px; color: var(--rose-gold); font-family: 'Cormorant Garamond'; margin-bottom: 6px; }
    .pd-price small { font-size: 13px; color: var(--text-light); font-family: 'Jost'; }
    .pd-advance { background: var(--beige); border-left: 3px solid var(--rose-gold); padding: 12px 16px; margin-bottom: 24px; font-size: 13px; color: var(--text-mid); }
    .pd-desc { font-size: 15px; color: var(--text-light); line-height: 1.9; margin-bottom: 32px; }
    .size-label { font-size: 10.5px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--text); margin-bottom: 10px; font-weight: 500; }
    .size-row { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px; }
    .size-btn { min-width: 50px; height: 50px; border: 1px solid var(--border); background: none; font-family: 'Jost'; font-size: 13px; cursor: pointer; transition: all 0.2s; padding: 0 12px; color: var(--text-mid); }
    .size-btn:hover, .size-btn.active { border-color: var(--terracotta); background: var(--terracotta); color: var(--rose-pale); }
    .pd-specs { border: 1px solid var(--border); margin-bottom: 32px; }
    .pd-spec-row { display: flex; gap: 16px; padding: 12px 20px; border-bottom: 1px solid var(--border); font-size: 14px; }
    .pd-spec-row:last-child { border-bottom: none; }
    .spec-k { color: var(--text-light); width: 120px; flex-shrink: 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; }
    .spec-v { color: var(--text); font-weight: 400; }
    .enquire-main-btn {
      width: 100%; background: var(--terracotta); color: var(--rose-pale);
      border: none; padding: 20px; font-family: 'Jost'; font-size: 12px;
      letter-spacing: 0.3em; text-transform: uppercase; cursor: pointer; transition: all 0.35s; margin-bottom: 12px;
    }
    .enquire-main-btn:hover { background: var(--rose-gold); }
    .note-text { font-size: 12px; color: var(--text-light); text-align: center; }

    /* ─── FILTER BAR ─── */
    .filter-bar { display: flex; gap: 10px; margin-bottom: 40px; flex-wrap: wrap; }
    .filter-btn { background: none; border: 1px solid var(--border); padding: 10px 22px; font-family: 'Jost'; font-size: 10.5px; letter-spacing: 0.18em; text-transform: uppercase; cursor: pointer; transition: all 0.25s; color: var(--text-mid); }
    .filter-btn:hover, .filter-btn.active { background: var(--terracotta); color: var(--rose-pale); border-color: var(--terracotta); }

    /* ─── CHAT ─── */
    .chat-wrap { max-width: 940px; margin: 0 auto; padding: 48px 32px; display: grid; grid-template-columns: 270px 1fr; gap: 20px; }
    .chat-sidebar { background: white; box-shadow: var(--shadow); }
    .chat-sb-head { padding: 20px; border-bottom: 1px solid var(--border); }
    .chat-sb-head h3 { font-size: 22px; color: var(--terracotta); }
    .chat-thread { padding: 16px 20px; border-bottom: 1px solid var(--border); cursor: pointer; transition: background 0.2s; }
    .chat-thread:hover, .chat-thread.active { background: var(--beige); }
    .chat-thread-name { font-size: 14px; font-weight: 500; color: var(--terracotta); margin-bottom: 4px; }
    .chat-thread-prev { font-size: 12px; color: var(--text-light); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .chat-main { background: white; box-shadow: var(--shadow); display: flex; flex-direction: column; }
    .chat-head { padding: 20px 24px; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; }
    .chat-messages { flex: 1; padding: 24px; display: flex; flex-direction: column; gap: 16px; min-height: 380px; overflow-y: auto; background: var(--warm-white); }
    .msg { max-width: 76%; }
    .msg.admin { align-self: flex-start; }
    .msg.customer { align-self: flex-end; }
    .msg-bubble { padding: 12px 18px; font-size: 14px; line-height: 1.65; }
    .admin .msg-bubble { background: white; color: var(--text); border: 1px solid var(--border); }
    .customer .msg-bubble { background: var(--terracotta); color: var(--rose-pale); }
    .msg-meta { font-size: 10px; color: var(--text-light); margin-top: 5px; }
    .customer .msg-meta { text-align: right; }
    .chat-input-row { padding: 16px 24px; border-top: 1px solid var(--border); display: flex; gap: 10px; background: white; }
    .chat-input { flex: 1; border: 1px solid var(--border); padding: 12px 16px; font-family: 'Jost'; font-size: 14px; background: var(--cream); outline: none; resize: none; color: var(--text); }
    .chat-input:focus { border-color: var(--rose-gold); }
    .chat-send { background: var(--terracotta); color: var(--rose-pale); border: none; padding: 12px 24px; font-family: 'Jost'; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; cursor: pointer; transition: background 0.2s; flex-shrink: 0; }
    .chat-send:hover { background: var(--rose-gold); }

    /* ─── STATUS BADGES ─── */
    .sbadge { font-size: 9px; letter-spacing: 0.12em; text-transform: uppercase; padding: 4px 10px; display: inline-block; font-family: 'Jost'; }
    .sbadge-pending   { background: #fff8e6; color: #a07000; border: 1px solid #f0c060; }
    .sbadge-awaiting  { background: #fff3e0; color: #c07000; border: 1px solid #ffb74d; }
    .sbadge-confirmed { background: #e8f5e9; color: #2e7d32; border: 1px solid #81c784; }
    .sbadge-sourcing  { background: #fce4ec; color: #880e4f; border: 1px solid #f48fb1; }
    .sbadge-shipped   { background: #e3f2fd; color: #1565c0; border: 1px solid #64b5f6; }
    .sbadge-delivered { background: #e0f2f1; color: #00695c; border: 1px solid #4db6ac; }

    /* ─── ADMIN ─── */
    .admin-wrap { display: grid; grid-template-columns: 248px 1fr; min-height: calc(100vh - 76px); }
    .admin-side { background: var(--terra-deep); }
    .admin-side-logo { padding: 32px 24px; border-bottom: 1px solid rgba(245,230,216,0.08); }
    .admin-nav-item { padding: 15px 24px; cursor: pointer; font-size: 13px; color: rgba(245,230,216,0.55); transition: all 0.2s; display: flex; align-items: center; gap: 12px; border-left: 3px solid transparent; }
    .admin-nav-item:hover, .admin-nav-item.active { color: var(--rose-light); background: rgba(196,134,90,0.08); border-left-color: var(--rose-gold); }
    .admin-body { padding: 44px; background: var(--beige); }
    .admin-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 36px; }
    .admin-head h1 { font-size: 40px; color: var(--terracotta); }
    .stats-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 20px; margin-bottom: 36px; }
    .stat-card { background: white; padding: 26px; box-shadow: var(--shadow); }
    .stat-lbl { font-size: 9.5px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--text-light); margin-bottom: 8px; }
    .stat-val { font-family: 'Cormorant Garamond'; font-size: 44px; color: var(--terracotta); line-height: 1; }
    .stat-chg { font-size: 12px; color: var(--rose-gold); margin-top: 6px; }
    .admin-table-wrap { background: white; box-shadow: var(--shadow); overflow: hidden; }
    .admin-table-wrap table { width: 100%; border-collapse: collapse; }
    .admin-table-wrap th { background: var(--terracotta); color: var(--rose-pale); padding: 14px 20px; text-align: left; font-size: 9.5px; letter-spacing: 0.18em; text-transform: uppercase; font-weight: 400; font-family: 'Jost'; }
    .admin-table-wrap td { padding: 16px 20px; border-bottom: 1px solid var(--border); font-size: 14px; }
    .admin-table-wrap tr:last-child td { border-bottom: none; }
    .admin-table-wrap tr:hover td { background: var(--warm-white); }
    .act-btn { background: none; border: 1px solid var(--border); padding: 6px 14px; font-size: 11px; letter-spacing: 0.12em; cursor: pointer; transition: all 0.2s; font-family: 'Jost'; color: var(--text-mid); }
    .act-btn:hover { background: var(--terracotta); color: var(--rose-pale); border-color: var(--terracotta); }

    /* ─── FORM / MODAL ─── */
    .modal-overlay { position: fixed; inset: 0; background: rgba(107,31,8,0.65); z-index: 2000; display: flex; align-items: center; justify-content: center; padding: 24px; animation: fadeIn 0.2s; }
    .modal { background: var(--cream); max-width: 580px; width: 100%; max-height: 92vh; overflow-y: auto; position: relative; box-shadow: var(--shadow-lg); }
    .modal-head { padding: 32px 32px 0; display: flex; align-items: flex-start; justify-content: space-between; }
    .modal-head h2 { font-size: 32px; color: var(--terracotta); }
    .modal-close { background: none; border: none; font-size: 26px; cursor: pointer; color: var(--text-light); line-height: 1; }
    .modal-body { padding: 24px 32px 36px; }
    .modal-prod-prev { display: flex; gap: 16px; background: var(--beige); padding: 16px; margin-bottom: 28px; align-items: center; border-left: 3px solid var(--rose-gold); }
    .modal-prod-icon { width: 68px; height: 84px; background: var(--warm-mid); display: flex; align-items: center; justify-content: center; font-size: 32px; flex-shrink: 0; }
    .modal-prod-name { font-size: 20px; color: var(--terracotta); }
    .modal-prod-price { font-family: 'Cormorant Garamond'; font-size: 22px; color: var(--rose-gold); }
    .modal-prod-adv { font-size: 12px; color: var(--text-light); margin-top: 2px; }
    .f-group { margin-bottom: 22px; }
    .f-label { display: block; font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase; color: var(--text); margin-bottom: 8px; font-weight: 500; }
    .f-input, .f-select, .f-textarea { width: 100%; border: 1px solid var(--border); background: white; padding: 13px 16px; font-family: 'Jost'; font-size: 14px; outline: none; transition: border-color 0.2s; color: var(--text); }
    .f-input:focus, .f-select:focus, .f-textarea:focus { border-color: var(--rose-gold); }
    .f-textarea { resize: vertical; min-height: 90px; }
    .f-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .f-submit { width: 100%; background: var(--terracotta); color: var(--rose-pale); border: none; padding: 18px; font-family: 'Jost'; font-size: 11.5px; letter-spacing: 0.28em; text-transform: uppercase; cursor: pointer; transition: all 0.3s; margin-top: 8px; }
    .f-submit:hover { background: var(--rose-gold); }
    .f-note { background: var(--beige); border-left: 3px solid var(--rose-gold); padding: 14px 18px; margin: 16px 0; font-size: 13px; color: var(--text-mid); line-height: 1.7; }
    .success-wrap { text-align: center; padding: 48px 32px; }
    .success-icon { font-size: 72px; margin-bottom: 20px; }
    .success-wrap h2 { font-size: 36px; color: var(--terracotta); margin-bottom: 14px; }
    .success-wrap p { font-size: 15px; color: var(--text-light); line-height: 1.85; }

    /* ─── POLICY ─── */
    .policy-wrap { max-width: 780px; margin: 0 auto; padding: 60px 32px; }
    .pol-section { margin-bottom: 44px; }
    .pol-section h2 { font-size: 32px; color: var(--terracotta); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 12px; }
    .pol-section p { font-size: 15px; color: var(--text-light); line-height: 1.9; margin-bottom: 12px; }
    .pol-highlight { background: linear-gradient(to right, var(--beige), transparent); border-left: 3px solid var(--rose-gold); padding: 16px 20px; margin: 18px 0; font-size: 14px; color: var(--text); line-height: 1.7; }

    /* ─── PAYMENT ─── */
    .pay-steps { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 20px; margin: 40px 0; }
    .pay-step { text-align: center; padding: 36px 24px; background: white; box-shadow: var(--shadow); border-top: 3px solid transparent; transition: border-color 0.3s; }
    .pay-step:hover { border-top-color: var(--rose-gold); }
    .pay-step-num { width: 58px; height: 58px; background: var(--terracotta); color: var(--rose-pale); display: flex; align-items: center; justify-content: center; font-family: 'Cormorant Garamond'; font-size: 28px; margin: 0 auto 20px; }
    .pay-step h3 { font-size: 22px; color: var(--terracotta); margin-bottom: 10px; }
    .pay-step p { font-size: 14px; color: var(--text-light); line-height: 1.8; }
    .bank-box { background: var(--terra-deep); padding: 36px; margin: 36px 0; }
    .bank-box h3 { font-size: 26px; color: var(--champagne); margin-bottom: 24px; }
    .bank-row { display: flex; gap: 16px; padding: 13px 0; border-bottom: 1px solid rgba(245,230,216,0.08); font-size: 14px; }
    .bank-row:last-child { border-bottom: none; }
    .bank-k { color: rgba(245,230,216,0.5); width: 150px; flex-shrink: 0; }
    .bank-v { color: var(--rose-light); }

    /* ─── ABOUT ─── */
    .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center; max-width: 1280px; margin: 0 auto; padding: 80px 32px; }
    .about-visual {
      aspect-ratio: 4/5; background: linear-gradient(135deg, var(--beige), var(--warm-mid));
      display: flex; align-items: center; justify-content: center;
      position: relative; overflow: hidden;
    }
    .about-visual::before { content:''; position:absolute; top:-20px; left:-20px; right:20px; bottom:20px; border:1px solid rgba(196,134,90,0.3); pointer-events: none; }
    .about-visual::after { content:''; position:absolute; top:-8px; left:-8px; right:8px; bottom:8px; border:1px solid rgba(196,134,90,0.15); pointer-events: none; }
    .about-logo-large { opacity: 0.4; }
    .about-text h2 { font-size: 48px; color: var(--terracotta); margin-bottom: 24px; }
    .about-text p { font-size: 15px; color: var(--text-light); line-height: 1.95; margin-bottom: 18px; }
    .about-values { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-top: 36px; }
    .about-val { padding: 20px; border: 1px solid var(--border); transition: border-color 0.2s; }
    .about-val:hover { border-color: var(--rose-gold); }
    .about-val h4 { font-size: 20px; color: var(--terracotta); margin-bottom: 6px; }
    .about-val p { font-size: 13px; color: var(--text-light); }

    /* ─── TOAST ─── */
    .toast { position: fixed; bottom: 32px; right: 32px; z-index: 3000; background: var(--terracotta); color: var(--rose-pale); padding: 16px 26px; font-size: 14px; box-shadow: var(--shadow-lg); animation: fadeUp 0.4s; }

    /* ─── RESPONSIVE ─── */
    @media (max-width: 1024px) {
      .cat-grid { grid-template-columns: repeat(2,1fr); }
      .cat-card:first-child { grid-row: auto; }
      .hiw-grid { grid-template-columns: 1fr; }
      .hiw-step:not(:last-child)::after { display: none; }
      .why-grid { grid-template-columns: 1fr; }
      .testi-grid { grid-template-columns: 1fr; }
      .footer-main { grid-template-columns: 1fr 1fr; gap: 36px; }
      .about-grid { grid-template-columns: 1fr; }
      .about-visual { display: none; }
      .pd-wrap { grid-template-columns: 1fr; }
      .chat-wrap { grid-template-columns: 1fr; }
      .chat-sidebar { display: none; }
      .admin-wrap { grid-template-columns: 1fr; }
      .admin-side { display: none; }
      .stats-grid { grid-template-columns: repeat(2,1fr); }
    }
    @media (max-width: 768px) {
      .nav-links, .nav-cta { display: none; }
      .hamburger { display: flex; }
      .hero-inner { grid-template-columns: 1fr; gap: 40px; }
      .hero-right { display: none; }
      .section { padding: 60px 20px; }
      .cat-grid { grid-template-columns: repeat(2,1fr); }
      .product-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
      .ig-grid { grid-template-columns: repeat(3,1fr); }
      .footer-main { grid-template-columns: 1fr; }
      .f-row { grid-template-columns: 1fr; }
      .about-values { grid-template-columns: 1fr; }
      .pay-steps { grid-template-columns: 1fr; }
    }
    @media (max-width: 480px) {
      .hero-h1 { font-size: 40px; }
      .product-grid { grid-template-columns: 1fr; }
      .stats-grid { grid-template-columns: 1fr 1fr; }
    }
  `}</style>
);

// ─── DATA ─────────────────────────────────────────────────────────────────────
const PRODUCTS = [
  { id:1, name:"Noor Bridal Lehenga",       category:"Pakistani Designer Lehengas",    price:68500, fabric:"Raw Silk · Zardozi Embroidery",    emoji:"👗", tag:"New Arrival", desc:"An ethereal bridal lehenga adorned with intricate zardozi embroidery on pure raw silk. Features a heavily embellished blouse, a flared lehenga skirt with dramatic trail, and a matching dupatta with scalloped pearl borders.", sizes:["S","M","L","XL","Custom"], specs:{Fabric:"Raw Silk",Work:"Zardozi & Resham",Occasion:"Bridal / Wedding",Origin:"Pakistan",Delivery:"~2 Weeks"} },
  { id:2, name:"Gulnoor 3-Piece Set",        category:"Ready-Made Shalwar Sets",        price:18500, fabric:"Chiffon · Floral Embroidery",        emoji:"🌸", tag:"Best Seller", desc:"A ready-to-wear chiffon ensemble featuring delicate floral embroidery on the neckline and sleeves. Perfect for formal gatherings, Eid celebrations, and family events.", sizes:["S","M","L","XL"],       specs:{Fabric:"Chiffon",Work:"Floral Embroidery",Occasion:"Formal / Eid",Origin:"Pakistan",Delivery:"~2 Weeks"} },
  { id:3, name:"Sehrish Eid Collection",     category:"Eid Wear",                       price:22000, fabric:"Organza & Net · Pearl Work",          emoji:"✨", tag:"Eid Special", desc:"Celebrate Eid in luminous organza with delicate pearl and sequin work. This lightweight ensemble drapes beautifully and catches the light with every graceful movement.", sizes:["S","M","L","XL","XXL"],   specs:{Fabric:"Organza & Net",Work:"Pearl & Sequin",Occasion:"Eid / Festive",Origin:"Pakistan",Delivery:"~2 Weeks"} },
  { id:4, name:"Amber Festive Sharara",      category:"Festive & Occasion Wear",        price:35000, fabric:"Velvet · Gold Thread Work",           emoji:"🌟", tag:"Limited",     desc:"A stunning velvet sharara set richly embroidered with gold thread work. Deep jewel tones meet traditional craftsmanship for a look that commands attention at any festive occasion.", sizes:["S","M","L","XL"],       specs:{Fabric:"Velvet",Work:"Gold Thread",Occasion:"Festive / Party",Origin:"Pakistan",Delivery:"~2 Weeks"} },
  { id:5, name:"Jasmine Lawn 2-Piece",       category:"Ready-Made Shalwar Sets",        price:12500, fabric:"Lawn Cotton · Block Print",           emoji:"🌿", tag:"Casual",      desc:"A breezy lawn cotton two-piece set featuring elegant block-print patterns. Perfect for casual outings, family visits, and everyday elegance.", sizes:["S","M","L","XL","XXL"],   specs:{Fabric:"Lawn Cotton",Work:"Block Print",Occasion:"Casual / Daily",Origin:"Pakistan",Delivery:"~2 Weeks"} },
  { id:6, name:"Rania Formal Lehenga",       category:"Pakistani Designer Lehengas",    price:55000, fabric:"Net · Multi-colour Threadwork",       emoji:"💫", tag:"Designer",    desc:"A semi-formal lehenga in soft net with intricate multi-colour threadwork. Ideal for walimas, sangeets, and formal evening events.", sizes:["S","M","L","XL","Custom"], specs:{Fabric:"Net",Work:"Multi-colour Threadwork",Occasion:"Formal / Walima",Origin:"Pakistan",Delivery:"~2 Weeks"} },
];

const ENQUIRIES = [
  { id:"ENQ001", customer:"Fathima Rauf",   product:"Noor Bridal Lehenga",    date:"2025-02-10", status:"sourcing",  amount:"LKR 68,500" },
  { id:"ENQ002", customer:"Amna Khan",      product:"Sehrish Eid Collection", date:"2025-02-12", status:"confirmed", amount:"LKR 22,000" },
  { id:"ENQ003", customer:"Zareena Mohamed",product:"Amber Festive Sharara",  date:"2025-02-14", status:"pending",   amount:"LKR 35,000" },
  { id:"ENQ004", customer:"Rihana Saleem",  product:"Gulnoor 3-Piece Set",    date:"2025-02-15", status:"shipped",   amount:"LKR 18,500" },
  { id:"ENQ005", customer:"Dilnoza Farooq", product:"Rania Formal Lehenga",   date:"2025-02-16", status:"awaiting",  amount:"LKR 55,000" },
];

const TESTIMONIALS = [
  { text:"The lehenga was absolutely breathtaking. Admin was so helpful and kept me updated every step of the way. Worth every rupee!", author:"Fathima R.", loc:"Colombo", stars:5, av:"💁‍♀️" },
  { text:"I was worried about ordering online but the enquiry process was so smooth. Got my Eid outfit exactly as pictured and right on time.", author:"Amna K.", loc:"Kandy", stars:5, av:"👩‍🦱" },
  { text:"The quality of Pakistani designer wear they source is unmatched in Sri Lanka. My sharara set was the talk of the evening!", author:"Zareena M.", loc:"Galle", stars:5, av:"👩" },
];

// ─── HELPER ───────────────────────────────────────────────────────────────────
function StatusBadge({ status }) {
  const map = { pending:"Pending", awaiting:"Awaiting Advance", confirmed:"Confirmed", sourcing:"Sourcing", shipped:"Shipped", delivered:"Delivered" };
  return <span className={`sbadge sbadge-${status}`}>{map[status]}</span>;
}

// ─── ENQUIRY MODAL ────────────────────────────────────────────────────────────
function EnquiryModal({ product, onClose }) {
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name:"", phone:"", email:"", size:"", address:"", notes:"" });
  const ch = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal animate-in">
        {!done ? (
          <>
            <div className="modal-head">
              <h2>Request This Design</h2>
              <button className="modal-close" onClick={onClose}>×</button>
            </div>
            <div className="modal-body">
              {product && (
                <div className="modal-prod-prev">
                  <div className="modal-prod-icon">{product.emoji}</div>
                  <div>
                    <div className="modal-prod-name">{product.name}</div>
                    <div className="modal-prod-price">LKR {product.price.toLocaleString()}</div>
                    <div className="modal-prod-adv">Advance: LKR {Math.round(product.price*0.5).toLocaleString()} (50%)</div>
                  </div>
                </div>
              )}
              <form onSubmit={e => { e.preventDefault(); setDone(true); }}>
                <div className="f-row">
                  <div className="f-group"><label className="f-label">Full Name *</label><input name="name" className="f-input" required value={form.name} onChange={ch} placeholder="Your full name" /></div>
                  <div className="f-group"><label className="f-label">Phone *</label><input name="phone" className="f-input" required value={form.phone} onChange={ch} placeholder="07X XXX XXXX" /></div>
                </div>
                <div className="f-group"><label className="f-label">Email Address *</label><input name="email" type="email" className="f-input" required value={form.email} onChange={ch} placeholder="your@email.com" /></div>
                <div className="f-group">
                  <label className="f-label">Preferred Size</label>
                  <select name="size" className="f-select" value={form.size} onChange={ch}>
                    <option value="">Select size</option>
                    {(product?.sizes || ["S","M","L","XL"]).map(s => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div className="f-group"><label className="f-label">Delivery Address *</label><textarea name="address" className="f-textarea" required value={form.address} onChange={ch} placeholder="Your full delivery address..." style={{ minHeight:72 }} /></div>
                <div className="f-group"><label className="f-label">Additional Notes</label><textarea name="notes" className="f-textarea" value={form.notes} onChange={ch} placeholder="Colour preferences, occasion, customisation requests..." style={{ minHeight:72 }} /></div>
                <div className="f-note">✦ A <strong>50% advance payment</strong> via bank transfer confirms your order.<br />✦ Estimated delivery: <strong>~2 weeks</strong> from payment confirmation.</div>
                <button type="submit" className="f-submit">Send Enquiry →</button>
              </form>
            </div>
          </>
        ) : (
          <div className="success-wrap animate-up">
            <div className="success-icon">✨</div>
            <h2>Enquiry Sent!</h2>
            <p>Thank you, <strong>{form.name}</strong>. Our team will contact you within 24 hours on <strong>{form.phone}</strong> with payment details and order confirmation.</p>
            <br />
            <p style={{ fontSize:13, color:"var(--text-light)" }}>Please have your bank details ready for the advance payment of <strong>LKR {product ? Math.round(product.price*0.5).toLocaleString() : ""}</strong>.</p>
            <br />
            <button className="f-submit" style={{ width:"100%" }} onClick={onClose}>Continue Browsing</button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── NAV ──────────────────────────────────────────────────────────────────────
function Nav({ setPage }) {
  const [open, setOpen] = useState(false);
  const go = p => { setPage(p); setOpen(false); };
  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-brand" onClick={() => go("home")}>
            <NazakatLogo size={52} />
            <div className="nav-brand-text">
              <span className="nav-brand-name">Nazakat</span>
              <span className="nav-brand-tag">Elegance in Every Thread</span>
            </div>
          </div>
          <ul className="nav-links">
            {[["Collections","collections"],["About","about"],["How It Works","payment"],["Delivery","delivery"]].map(([l,p]) => (
              <li key={p}><a onClick={() => go(p)}>{l}</a></li>
            ))}
          </ul>
          <button className="nav-cta" onClick={() => go("enquiry")}>Enquire Now</button>
          <button className="hamburger" onClick={() => setOpen(!open)}><span/><span/><span/></button>
        </div>
      </nav>
      {open && (
        <div className="mobile-menu open">
          <button className="mobile-close" onClick={() => setOpen(false)}>×</button>
          {[["Home","home"],["Collections","collections"],["About","about"],["Payment","payment"],["Delivery","delivery"],["Refund Policy","refund"],["My Enquiries","enquiry"]].map(([l,p]) => (
            <a key={p} onClick={() => go(p)}>{l}</a>
          ))}
        </div>
      )}
    </>
  );
}

// ─── HOME ─────────────────────────────────────────────────────────────────────
function HomePage({ setPage, openEnquiry }) {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-texture" />
        <div className="hero-radial" />
        <div className="hero-inner">
          <div className="hero-left animate-up">
            <div className="eyebrow">Premium Pakistani Fashion · Sri Lanka</div>
            <h1 className="hero-h1">Elegance in <em>Every Thread</em></h1>
            <p className="hero-tagline">— Nazakat · نزاکت —</p>
            <p className="hero-desc">Your trusted sourcing partner for premium Pakistani designer wear — curated with love, delivered to your doorstep across Sri Lanka.</p>
            <div className="hero-btns">
              <button className="btn-hero-primary" onClick={() => setPage("collections")}>Explore Collections</button>
              <button className="btn-hero-outline" onClick={() => setPage("payment")}>How It Works</button>
            </div>
            <div className="hero-trust">
              {[["🚚","Pronto Delivery"],["✦","Authentic Designer"],["💬","Personal Service"],["🔒","Secure Process"]].map(([i,l]) => (
                <div className="trust-item" key={l}><span className="trust-icon">{i}</span>{l}</div>
              ))}
            </div>
          </div>
          <div className="hero-right animate-in" style={{ animationDelay:"0.35s" }}>
            <div className="hero-card-wrap">
              <div className="hero-card">
                <div className="hero-card-badge">New Arrival · 2025</div>
                <div className="hero-card-img">
                  <div className="fabric-lines" />
                  <div className="hero-emoji">👗</div>
                </div>
                <div className="hero-card-body">
                  <div className="hero-card-cat">Pakistani Designer Lehenga</div>
                  <div className="hero-card-name">Noor Bridal Collection</div>
                  <div className="hero-card-fabric">Raw Silk · Zardozi Embroidery</div>
                  <div className="hero-card-price">LKR 68,500</div>
                  <button className="hero-card-btn" onClick={() => openEnquiry(PRODUCTS[0])}>Request This Design</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section" style={{ padding:"80px 0", background:"var(--warm-white)" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 32px" }}>
          <div className="sec-head">
            <span className="sec-eyebrow">Browse By Category</span>
            <h2 className="sec-title">Curated <em>Collections</em></h2>
            <div className="divider" />
          </div>
        </div>
        <div className="cat-grid" style={{ maxWidth:1280, margin:"0 auto", padding:"0 32px" }}>
          {[
            { name:"Pakistani Designer Lehengas", sub:"Bridal & Formal", emoji:"👗" },
            { name:"Ready-Made Shalwar Sets",      sub:"2 & 3 Piece",    emoji:"🌸" },
            { name:"Eid Wear",                     sub:"Festive Season",  emoji:"✨" },
            { name:"Festive & Occasion Wear",      sub:"Celebrations",   emoji:"🌟" },
          ].map((c,i) => (
            <div className="cat-card" key={i} onClick={() => setPage("collections")}>
              <div className="cat-bg" />
              <div className="cat-pattern" />
              <div className="cat-emoji">{c.emoji}</div>
              <div className="cat-overlay" />
              <div className="cat-label"><span className="sub">{c.sub}</span><h3>{c.name}</h3></div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="section">
        <div className="section-inner">
          <div className="sec-head">
            <span className="sec-eyebrow">Featured Designs</span>
            <h2 className="sec-title">This Season's <em>Favourites</em></h2>
            <p className="sec-sub">Each piece is sourced on demand — exclusively for you</p>
            <div className="divider" />
          </div>
          <div className="product-grid">
            {PRODUCTS.map(p => (
              <div className="product-card" key={p.id}>
                <div className="prod-img-wrap">
                  <div className="prod-img">{p.emoji}</div>
                  {p.tag && <div className="prod-tag">{p.tag}</div>}
                  <div className="prod-overlay">
                    <button className="prod-overlay-btn" onClick={() => openEnquiry(p)}>Request Design</button>
                  </div>
                </div>
                <div className="prod-info">
                  <div className="prod-cat">{p.category}</div>
                  <div className="prod-name">{p.name}</div>
                  <div className="prod-fabric">{p.fabric}</div>
                  <div className="prod-footer">
                    <div className="prod-price">LKR {p.price.toLocaleString()}</div>
                    <div className="prod-delivery">~2 Weeks</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section hiw">
        <div className="section-inner">
          <div className="sec-head">
            <span className="sec-eyebrow" style={{ color:"var(--champagne)" }}>Simple Process</span>
            <h2 className="sec-title" style={{ color:"var(--rose-pale)" }}>How It <em style={{ color:"var(--champagne)" }}>Works</em></h2>
            <div className="divider" />
          </div>
          <div className="hiw-grid">
            {[
              { n:"01", icon:"💬", title:"Enquire", desc:"Browse our curated designs and click 'Request This Design'. Fill in your details — name, size, address, and any special requirements." },
              { n:"02", icon:"💳", title:"Confirm & Pay", desc:"Our team contacts you within 24 hours. Pay 50% advance via bank transfer to confirm your order and begin sourcing." },
              { n:"03", icon:"✈️", title:"Receive", desc:"We source your chosen design from Pakistan. Delivery in approximately 2 weeks. Remaining 50% paid on delivery or full transfer for outstation." },
            ].map(({ n, icon, title, desc }) => (
              <div className="hiw-step" key={n}>
                <div className="hiw-num-wrap"><span className="hiw-num">{n}</span></div>
                <div className="hiw-icon">{icon}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section" style={{ background:"var(--warm-white)" }}>
        <div className="section-inner">
          <div className="sec-head">
            <span className="sec-eyebrow">Our Promise</span>
            <h2 className="sec-title">Why Choose <em>Nazakat</em></h2>
            <div className="divider" />
          </div>
          <div className="why-grid">
            {[
              { icon:"🌹", title:"Authentic Designer Wear", desc:"We source directly from trusted suppliers in Pakistan, ensuring every piece is genuine, high-quality, and exactly as described." },
              { icon:"✦",  title:"Personalised Concierge", desc:"Every order is handled personally by our team. We are your fashion concierge — not an automated platform." },
              { icon:"🚚", title:"Reliable Island-Wide Delivery", desc:"We partner with Pronto for island-wide delivery. Real-time tracking updates are shared in your private order chat." },
              { icon:"🤝", title:"Transparent & Fair", desc:"No hidden fees. Clear payment terms. Full refund of advance if your chosen item is unavailable — always." },
            ].map(({ icon, title, desc }) => (
              <div className="why-card" key={title}>
                <div className="why-icon-wrap">{icon}</div>
                <div><h3>{title}</h3><p>{desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="section-inner">
          <div className="sec-head">
            <span className="sec-eyebrow">Client Stories</span>
            <h2 className="sec-title">Loved Across <em>Sri Lanka</em></h2>
            <div className="divider" />
          </div>
          <div className="testi-grid">
            {TESTIMONIALS.map((t, i) => (
              <div className="testi-card" key={i}>
                <div className="testi-stars">{"★".repeat(t.stars)}</div>
                <p className="testi-text">{t.text}</p>
                <div className="testi-author">
                  <div className="testi-avatar">{t.av}</div>
                  <div>
                    <div className="testi-name">{t.author}</div>
                    <div className="testi-loc">{t.loc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IG GRID */}
      <section className="section" style={{ padding:"0 0 80px", background:"var(--warm-white)" }}>
        <div className="section-inner">
          <div className="sec-head" style={{ paddingTop:80, marginBottom:32 }}>
            <span className="sec-eyebrow">Follow Our Story</span>
            <h2 className="sec-title"><em>@Nazakat.lk</em></h2>
          </div>
          <div className="ig-grid">
            {["🌸","👗","✨","🌹","💫","🌿","👒","💎","🌙","🎀","✦","🦋"].map((e,i) => (
              <div className="ig-item" key={i}>{e}<div className="ig-hover">♥</div></div>
            ))}
          </div>
          <div className="ig-cta" style={{ marginTop:24 }}>
            <span className="ig-handle">Follow us on Instagram for new arrivals and styling inspiration</span>
          </div>
        </div>
      </section>
    </>
  );
}

// ─── COLLECTIONS ──────────────────────────────────────────────────────────────
function CollectionsPage({ openEnquiry }) {
  const [filter, setFilter] = useState("All");
  const cats = ["All", ...Array.from(new Set(PRODUCTS.map(p => p.category)))];
  const filtered = filter === "All" ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);
  return (
    <>
      <div className="page-hero">
        <h1>Our Collections</h1>
        <p>Premium Pakistani designer wear, curated with care and sourced on demand</p>
      </div>
      <section className="section">
        <div className="section-inner">
          <div className="filter-bar">
            {cats.map(c => (
              <button key={c} className={`filter-btn${filter===c?" active":""}`} onClick={() => setFilter(c)}>{c}</button>
            ))}
          </div>
          <div className="product-grid">
            {filtered.map(p => (
              <div className="product-card" key={p.id}>
                <div className="prod-img-wrap">
                  <div className="prod-img">{p.emoji}</div>
                  {p.tag && <div className="prod-tag">{p.tag}</div>}
                  <div className="prod-overlay">
                    <button className="prod-overlay-btn" onClick={() => openEnquiry(p)}>Request Design</button>
                  </div>
                </div>
                <div className="prod-info">
                  <div className="prod-cat">{p.category}</div>
                  <div className="prod-name">{p.name}</div>
                  <div className="prod-fabric">{p.fabric}</div>
                  <div className="prod-footer">
                    <div className="prod-price">LKR {p.price.toLocaleString()}</div>
                    <div className="prod-delivery">~2 Weeks Delivery</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// ─── ENQUIRY / CHAT ───────────────────────────────────────────────────────────
function EnquiryPage() {
  const [msgs, setMsgs] = useState([
    { id:1, from:"admin", text:"Assalamu Alaikum! Thank you for your enquiry about the Noor Bridal Lehenga. Could you please confirm your size preference and the occasion this is for?", time:"10:32 AM" },
    { id:2, from:"customer", text:"Wa Alaikum Assalam! I'd like size M please. It's for my wedding in March 🌹", time:"10:45 AM" },
    { id:3, from:"admin", text:"Mashallah, congratulations! 🌹 We can source the Noor Bridal Lehenga in your size. The 50% advance payment would be LKR 34,250. Could you confirm your delivery address?", time:"11:02 AM" },
    { id:4, from:"customer", text:"Yes, my address is 45 Flower Road, Colombo 07.", time:"11:08 AM" },
    { id:5, from:"admin", text:"Perfect! We have sent our bank details to your email. Once the advance is received, we will begin sourcing immediately and provide weekly updates here. Estimated delivery: ~2 weeks from confirmation. ✦", time:"11:15 AM" },
  ]);
  const [input, setInput] = useState("");
  const send = () => {
    if (!input.trim()) return;
    setMsgs(p => [...p, { id:Date.now(), from:"customer", text:input, time:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}) }]);
    setInput("");
  };
  return (
    <>
      <div className="page-hero">
        <h1>My Enquiries</h1>
        <p>Track your orders and chat with our team</p>
      </div>
      <div className="chat-wrap">
        <div className="chat-sidebar">
          <div className="chat-sb-head"><h3>Orders</h3></div>
          {[
            { name:"Noor Bridal Lehenga", status:"sourcing", prev:"Begin sourcing immediately..." },
            { name:"Gulnoor 3-Piece Set", status:"delivered", prev:"Your order has been delivered!" },
          ].map((t,i) => (
            <div key={i} className={`chat-thread${i===0?" active":""}`}>
              <div className="chat-thread-name">{t.name}</div>
              <div className="chat-thread-prev">{t.prev}</div>
              <StatusBadge status={t.status} />
            </div>
          ))}
        </div>
        <div className="chat-main">
          <div className="chat-head">
            <div>
              <div style={{ fontSize:17, fontWeight:500, color:"var(--terracotta)" }}>Noor Bridal Lehenga</div>
              <StatusBadge status="sourcing" />
            </div>
            <div style={{ fontSize:12, color:"var(--text-light)" }}>Ref: ENQ001 · Est. Delivery ~2 Weeks</div>
          </div>
          <div className="chat-messages">
            {msgs.map(m => (
              <div key={m.id} className={`msg ${m.from}`}>
                <div className="msg-bubble">{m.text}</div>
                <div className="msg-meta">{m.from==="admin"?"Nazakat Team":"You"} · {m.time}</div>
              </div>
            ))}
          </div>
          <div className="chat-input-row">
            <textarea className="chat-input" value={input} onChange={e => setInput(e.target.value)} placeholder="Type your message..." rows={2} onKeyDown={e => e.key==="Enter" && !e.shiftKey && (e.preventDefault(), send())} />
            <button className="chat-send" onClick={send}>Send</button>
          </div>
        </div>
      </div>
    </>
  );
}

// ─── ADMIN ────────────────────────────────────────────────────────────────────
function AdminPage() {
  const [tab, setTab] = useState("enquiries");
  const [statuses, setStatuses] = useState(Object.fromEntries(ENQUIRIES.map(e=>[e.id,e.status])));
  const STATUS_OPTIONS = ["pending","awaiting","confirmed","sourcing","shipped","delivered"];
  return (
    <>
      <div style={{ background:"var(--terra-deep)", padding:"100px 32px 32px" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", display:"flex", alignItems:"center", gap:20 }}>
          <NazakatLogo size={56} variant="light" />
          <div>
            <h1 style={{ fontFamily:"Cormorant Garamond", fontSize:44, color:"var(--rose-pale)" }}>Admin Portal</h1>
            <p style={{ color:"rgba(245,230,216,0.4)", fontSize:13 }}>Nazakat · Order Management Dashboard</p>
          </div>
        </div>
      </div>
      <div className="admin-wrap" style={{ maxWidth:1280, margin:"0 auto" }}>
        <div className="admin-side">
          <div className="admin-side-logo">
            <div style={{ fontFamily:"Cormorant Garamond", fontStyle:"italic", fontSize:22, color:"var(--rose-light)" }}>Nazakat</div>
          </div>
          {[["📊","enquiries","All Enquiries"],["💬","messages","Messages"],["📦","products","Products"],["📈","analytics","Analytics"],["⚙️","settings","Settings"]].map(([icon,id,label]) => (
            <div key={id} className={`admin-nav-item${tab===id?" active":""}`} onClick={() => setTab(id)}>
              <span>{icon}</span>{label}
            </div>
          ))}
        </div>
        <div className="admin-body">
          <div className="admin-head">
            <h1>Enquiries</h1>
            <button className="nav-cta" style={{ fontFamily:"Jost" }}>+ Add Note</button>
          </div>
          <div className="stats-grid">
            {[["Total Enquiries","47","+8 this week"],["In Progress","12","Active orders"],["Revenue","1.2M","LKR this month"],["Delivered","28","Happy customers"]].map(([l,v,c]) => (
              <div className="stat-card" key={l}>
                <div className="stat-lbl">{l}</div>
                <div className="stat-val">{v}</div>
                <div className="stat-chg">{c}</div>
              </div>
            ))}
          </div>
          <div className="admin-table-wrap">
            <table>
              <thead>
                <tr><th>Ref</th><th>Customer</th><th>Product</th><th>Amount</th><th>Date</th><th>Status</th><th>Action</th></tr>
              </thead>
              <tbody>
                {ENQUIRIES.map(e => (
                  <tr key={e.id}>
                    <td style={{ fontFamily:"Cormorant Garamond", fontSize:17, color:"var(--terracotta)" }}>{e.id}</td>
                    <td style={{ fontWeight:500 }}>{e.customer}</td>
                    <td style={{ fontSize:13, color:"var(--text-light)" }}>{e.product}</td>
                    <td style={{ color:"var(--rose-gold)", fontFamily:"Cormorant Garamond", fontSize:18 }}>{e.amount}</td>
                    <td style={{ fontSize:12, color:"var(--text-light)" }}>{e.date}</td>
                    <td>
                      <select value={statuses[e.id]} onChange={ev => setStatuses(p => ({ ...p, [e.id]:ev.target.value }))} style={{ border:"1px solid var(--border)", padding:"6px 10px", fontFamily:"Jost", fontSize:11, background:"none", cursor:"pointer", color:"var(--text-mid)" }}>
                        {STATUS_OPTIONS.map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase()+s.slice(1)}</option>)}
                      </select>
                    </td>
                    <td><button className="act-btn">View Chat</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

// ─── PAYMENT PAGE ─────────────────────────────────────────────────────────────
function PaymentPage() {
  return (
    <>
      <div className="page-hero">
        <h1>How Payment Works</h1>
        <p>Simple, transparent, and handled personally by our team</p>
      </div>
      <div className="policy-wrap">
        <div className="pay-steps">
          {[
            { n:"01", title:"Browse & Enquire",    desc:"Choose your design and click 'Request This Design'. Fill in your details and submit your enquiry form." },
            { n:"02", title:"Confirmation Call",   desc:"Our team contacts you within 24 hours to confirm availability, discuss any customisation, and provide final pricing." },
            { n:"03", title:"Pay 50% Advance",     desc:"Transfer 50% of the order value to our bank account. Your order is confirmed only after advance payment is received." },
            { n:"04", title:"We Source for You",   desc:"We source your item directly from Pakistan. Expect weekly updates in your chat thread throughout the process." },
            { n:"05", title:"Delivery & Balance",  desc:"Your item arrives via Pronto. Pay the remaining 50% on delivery. (Full payment for outstation deliveries.)" },
          ].map(({ n, title, desc }) => (
            <div className="pay-step" key={n}>
              <div className="pay-step-num">{n}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
        <div className="bank-box">
          <h3>Bank Transfer Details</h3>
          {[["Bank","Commercial Bank of Ceylon"],["Account Name","Nazakat (Pvt) Ltd"],["Account Number","XXXX XXXX XXXX"],["Branch","Colombo 03"],["Reference","Your Enquiry ID (e.g. ENQ001)"]].map(([k,v]) => (
            <div className="bank-row" key={k}><span className="bank-k">{k}</span><span className="bank-v">{v}</span></div>
          ))}
        </div>
        <div className="pol-section">
          <h2>Important Notes</h2>
          <div className="pol-highlight">Your order is confirmed <strong>only after</strong> the 50% advance is received and verified by our team.</div>
          <p>For customers outside Colombo, full payment via bank transfer may be required before dispatch. Our team will advise you during the enquiry conversation.</p>
          <p>Please send your payment receipt via WhatsApp for faster processing. All transactions are manually verified — we'll send you written confirmation once verified.</p>
        </div>
      </div>
    </>
  );
}

// ─── DELIVERY PAGE ────────────────────────────────────────────────────────────
function DeliveryPage() {
  return (
    <>
      <div className="page-hero">
        <h1>Delivery Policy</h1>
        <p>Reliable, tracked delivery across Sri Lanka</p>
      </div>
      <div className="policy-wrap">
        {[
          { title:"Our Delivery Partner", body:"We deliver exclusively via Pronto — Sri Lanka's trusted logistics partner. Once your item ships, a tracking number is shared in your private order chat thread." },
          { title:"Sourcing Timeline", body:"All items are sourced on-demand from Pakistan. Please allow approximately 2 weeks from order confirmation to final delivery. This timeline begins after your advance payment is received." },
          { title:"Colombo & Suburbs", body:"Standard delivery within Colombo and the Western Province typically takes 1–2 business days after the item arrives in Sri Lanka. For urgent orders, please discuss with our team at enquiry." },
          { title:"Outstation Deliveries", body:"Delivery to other provinces is handled via Pronto's intercity service. For outstation orders, full payment via bank transfer is generally required. Allow 1–3 additional business days." },
          { title:"Festive Season Delays", body:"During Eid, Ramadan, and major festive seasons, sourcing timelines from Pakistan may extend due to high demand. We proactively communicate all delays in your chat thread." },
        ].map(({ title, body }) => (
          <div className="pol-section" key={title}>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        ))}
        <div className="pol-highlight">All tracking updates are shared in your private order chat. Please ensure your phone number is correct when submitting your enquiry form.</div>
      </div>
    </>
  );
}

// ─── REFUND PAGE ──────────────────────────────────────────────────────────────
function RefundPage() {
  return (
    <>
      <div className="page-hero">
        <h1>Refund & Cancellation</h1>
        <p>Fair and transparent — because we value your trust</p>
      </div>
      <div className="policy-wrap">
        {[
          { title:"Advance Payment Policy", body:"The 50% advance payment is non-refundable once sourcing has commenced. Sourcing typically begins within 24–48 hours of payment confirmation." },
          { title:"Item Unavailability", body:"In the rare event that your selected design is unavailable after payment, we will issue a full refund of your advance payment within 3–5 business days via bank transfer." },
          { title:"Size & Fit Responsibility", body:"Customers are responsible for providing accurate size information at the time of enquiry. As all items are sourced to order, we are unable to accept returns for incorrect sizes selected by the customer." },
          { title:"Damaged or Incorrect Items", body:"If you receive an item that is damaged or significantly different from what was described, please contact us within 24 hours of delivery with photos. We will work to find a fair resolution." },
          { title:"Cancellation Before Sourcing", body:"If you wish to cancel within 12 hours of advance payment (before sourcing begins), please contact us immediately via WhatsApp. We assess these requests individually." },
        ].map(({ title, body }) => (
          <div className="pol-section" key={title}>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        ))}
        <div className="pol-highlight">Contact us: WhatsApp +94 XX XXX XXXX · Email hello@nazakat.lk</div>
      </div>
    </>
  );
}

// ─── ABOUT PAGE ───────────────────────────────────────────────────────────────
function AboutPage({ openEnquiry }) {
  return (
    <>
      <div className="page-hero">
        <h1>Our Story</h1>
        <p>Born from a love for authentic fashion and a passion for service</p>
      </div>
      <div className="about-grid">
        <div className="about-visual">
          <NazakatLogo size={220} variant="full" />
        </div>
        <div className="about-text">
          <span className="sec-eyebrow">Est. Sri Lanka</span>
          <h2>Your Trusted Fashion <em>Sourcing Partner</em></h2>
          <p>Nazakat — meaning grace, refinement, and elegance in Urdu — was founded on a simple but powerful belief: every woman in Sri Lanka deserves access to the exquisite artistry of authentic Pakistani designer fashion.</p>
          <p>We are a boutique fashion sourcing service, personally curating and procuring premium Pakistani designer wear — from bridal lehengas and festive shararas to everyday shalwar sets — and delivering them with care to your doorstep across Sri Lanka.</p>
          <p>We don't hold inventory. We hold relationships. Every piece is sourced personally from trusted suppliers who share our unwavering commitment to craftsmanship, authenticity, and elegance.</p>
          <div className="about-values">
            {[
              { h:"Authenticity", p:"Genuine Pakistani designer wear, always." },
              { h:"Personal Service", p:"Every order handled with individual care." },
              { h:"Transparency", p:"No hidden fees. No surprises. Ever." },
              { h:"Elegance", p:"Curated for the discerning Sri Lankan woman." },
            ].map(({ h, p }) => (
              <div className="about-val" key={h}><h4>{h}</h4><p>{p}</p></div>
            ))}
          </div>
        </div>
      </div>
      <section className="section hiw" style={{ textAlign:"center" }}>
        <div className="section-inner">
          <NazakatLogo size={80} variant="light" />
          <h2 style={{ color:"var(--rose-pale)", fontSize:48, fontFamily:"Cormorant Garamond", margin:"20px 0 12px" }}>Find Your Perfect Design</h2>
          <p style={{ color:"rgba(245,230,216,0.55)", fontSize:16, fontFamily:"Cormorant Garamond", fontStyle:"italic", marginBottom:36 }}>Browse our curated collections and let us source it exclusively for you</p>
          <button className="btn-hero-primary" onClick={() => openEnquiry(null)}>Make an Enquiry →</button>
        </div>
      </section>
    </>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div>
          <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:16 }}>
            <NazakatLogo size={60} variant="light" />
            <div>
              <div className="footer-brand-name">Nazakat</div>
            </div>
          </div>
          <span className="footer-tagline">Elegance in Every Thread</span>
          <p className="footer-desc">Your trusted sourcing partner for premium Pakistani designer wear, delivered to your doorstep across Sri Lanka with love and care.</p>
          <div className="footer-contact">
            <span>📱 +94 XX XXX XXXX (WhatsApp)</span>
            <span>✉️ hello@nazakat.lk</span>
            <span>📍 Colombo, Sri Lanka</span>
            <span>⏰ Mon–Sat · 9AM–8PM</span>
          </div>
        </div>
        <div className="footer-col">
          <h4>Collections</h4>
          <ul>
            {["Pakistani Designer Lehengas","Ready-Made Shalwar Sets","Eid Wear","Festive Occasion Wear","Bridal Collections"].map(c => <li key={c} onClick={() => setPage("collections")}>{c}</li>)}
          </ul>
        </div>
        <div className="footer-col">
          <h4>Information</h4>
          <ul>
            {[["About Nazakat","about"],["How It Works","payment"],["Delivery Policy","delivery"],["Refund Policy","refund"],["My Enquiries","enquiry"]].map(([l,p]) => <li key={l} onClick={() => setPage(p)}>{l}</li>)}
          </ul>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            {["Privacy Policy","Terms of Service","Cookie Policy"].map(l => <li key={l}>{l}</li>)}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 Nazakat Sri Lanka. All rights reserved.</span>
        <span>Delivery via <strong style={{ color:"var(--rose-gold)" }}>Pronto</strong> · Payments via Bank Transfer Only</span>
      </div>
    </footer>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("home");
  const [enquiryProduct, setEnquiryProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openEnquiry = product => { setEnquiryProduct(product); setShowModal(true); };
  useEffect(() => { window.scrollTo(0, 0); }, [page]);

  const pages = { home:<HomePage setPage={setPage} openEnquiry={openEnquiry}/>, collections:<CollectionsPage openEnquiry={openEnquiry}/>, enquiry:<EnquiryPage/>, admin:<AdminPage/>, payment:<PaymentPage/>, delivery:<DeliveryPage/>, refund:<RefundPage/>, about:<AboutPage openEnquiry={openEnquiry}/> };

  return (
    <>
      <GlobalStyle />
      {/* SEO Meta */}
      <title>Nazakat Sri Lanka | Premium Pakistani Designer Wear</title>
      <Nav setPage={setPage} />
      <main>{pages[page] || pages.home}</main>
      <Footer setPage={setPage} />
      {showModal && <EnquiryModal product={enquiryProduct} onClose={() => setShowModal(false)} />}

      {/* Admin shortcut */}
      <div style={{ position:"fixed", bottom:24, left:24, zIndex:900, display:"flex", gap:8 }}>
        <button onClick={() => setPage(page==="admin"?"home":"admin")} style={{ background:"var(--terra-deep)", color:"var(--rose-light)", border:"1px solid rgba(196,134,90,0.3)", padding:"8px 16px", fontFamily:"Jost", fontSize:11, letterSpacing:"0.15em", textTransform:"uppercase", cursor:"pointer" }}>
          {page==="admin"?"← Home":"⚙ Admin"}
        </button>
      </div>
    </>
  );
}
