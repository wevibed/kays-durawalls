import React from "react";
import {createRoot} from "react-dom/client";
import {ArrowRight,MapPin,MessageCircle,Phone,Menu,X,ShieldCheck,Hammer,Home} from "lucide-react";
import "./styles.css";

const WA="263773059082";
const wa=(message)=>`https://wa.me/${WA}?text=${encodeURIComponent(message)}`;
const projects=["kays-01.webp", "kays-02.webp", "kays-03.webp", "kays-04.webp", "kays-05.webp", "kays-06.webp", "kays-07.webp", "kays-08.webp", "kays-09.webp", "kays-10.webp", "kays-11.webp", "kays-12.webp", "kays-13.webp", "kays-14.webp"];

function App(){
 const [open,setOpen]=React.useState(false);
 return <div className="site">
  <div className="topbar"><span>DURAWALLS · COTTAGES · FIX & SUPPLY</span><span>HARARE · ZIMBABWE</span></div>
  <header className="nav">
   <a href="#home" className="brand"><strong>KAYS</strong><small>DURAWALLS</small></a>
   <button className="menu" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X size={22}/>:<Menu size={22}/>}</button>
   <nav className={open?"nav-links open":"nav-links"}>
    <a href="#home">Home</a><a href="#services">Services</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
    <a className="nav-cta" href={wa("Hello Kays Durawalls, I would like to enquire about your services.")}>Get a Quote <ArrowRight size={15}/></a>
   </nav>
  </header>
  <main>
   <section id="home" className="hero">
    <div className="hero-copy"><div className="eyebrow">KAYS DURAWALLS · HARARE</div>
     <h1>STRONG<br/>BOUNDARIES.<br/><em>BETTER SPACES.</em></h1>
     <p>Durawalls, cottages, fix and supply.</p>
     <div className="location"><MapPin size={15}/> Home Industrie, Harare</div>
     <a className="hero-btn" href={wa("Hello Kays Durawalls, I would like to enquire about a project.")}>START A PROJECT <ArrowRight size={16}/></a>
    </div>
    <div className="hero-image"><img src="/images/hero-kays.webp" alt="Kays Durawalls completed boundary wall project" fetchPriority="high"/></div>
   </section>
   <section className="intro"><div><div className="eyebrow">BUILT AROUND YOUR NEEDS</div><h2>More than a wall.<br/><em>A finished space.</em></h2></div>
    <p>Kays Durawalls works across durawall and cottage projects, with fix-and-supply services. Use WhatsApp to discuss your project, requirements and location.</p>
   </section>
   <section id="services" className="services"><div className="section-head"><div><div className="eyebrow">WHAT WE DO</div><h2>OUR<br/><em>SERVICES.</em></h2></div><p>Service-focused solutions for residential projects in and around Harare.</p></div>
    <div className="service-grid">
     <article><div className="icon"><ShieldCheck size={25}/></div><span>01</span><h3>Durawalls</h3><p>Boundary wall projects designed around the property and finish you need.</p></article>
     <article><div className="icon"><Home size={25}/></div><span>02</span><h3>Cottages</h3><p>Discuss cottage requirements with Kays Durawalls and plan the next step.</p></article>
     <article><div className="icon"><Hammer size={25}/></div><span>03</span><h3>Fix & Supply</h3><p>Supply and fixing services for your project, coordinated through WhatsApp.</p></article>
    </div>
   </section>
   <section id="projects" className="projects"><div className="section-head"><div><div className="eyebrow">SUPPLIED PROJECT PHOTOS</div><h2>RECENT<br/><em>WORK.</em></h2></div><p>Selected project imagery supplied for Kays Durawalls.</p></div>
    <div className="gallery">{projects.map((src,i)=><a className={i===4?"project featured":"project"} href={wa("Hello Kays Durawalls, I am interested in a project similar to the work shown on your website.")} key={src}>
     <div className="project-image"><img src={`/images/${src}`} alt={`Kays Durawalls project ${i+1}`} loading={i<3?"eager":"lazy"} decoding="async"/><span>ENQUIRE</span></div>
     <div className="project-caption"><span>PROJECT {String(i+1).padStart(2,"0")}</span><ArrowRight size={15}/></div>
    </a>)}</div>
   </section>
   <section className="cta"><div className="eyebrow">READY TO BUILD?</div><h2>Tell us about<br/><em>your project.</em></h2><p>Send Kays Durawalls your requirements, location and what you want to build.</p>
    <a className="dark-btn" href={wa("Hello Kays Durawalls, I would like a quote for my project.")}>WHATSAPP KAYS DURAWALLS <MessageCircle size={16}/></a>
   </section>
   <section id="contact" className="contact"><div><div className="eyebrow">CONTACT</div><h2>Let's build<br/><em>your boundary.</em></h2></div>
    <div className="contact-card">
     <a href={wa("Hello Kays Durawalls, I would like to enquire about your services.")}><MessageCircle size={20}/><span>WhatsApp<br/><strong>+263 77 305 9082</strong></span></a>
     <a href="tel:+263773059082"><Phone size={20}/><span>Call<br/><strong>077 305 9082</strong></span></a>
     <div><MapPin size={20}/><span>Home Industrie<br/><strong>Harare, Zimbabwe</strong></span></div>
    </div>
   </section>
  </main>
  <footer><div className="footer-brand">KAYS DURAWALLS</div><div>Durawalls · Cottages · Fix & Supply</div><div>© 2026 Kays Durawalls</div></footer>
  <a className="whatsapp-float" href={wa("Hello Kays Durawalls, I would like to enquire about your services.")} target="_blank" rel="noreferrer" aria-label="WhatsApp Kays Durawalls"><MessageCircle size={27}/></a>
 </div>
}
createRoot(document.getElementById("root")).render(<App/>);
