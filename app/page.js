'use client'

import { useState } from 'react'

const services = [
  ['01', 'Water Damage & Extraction', 'Water extraction, moisture detection, structural drying and equipment monitoring.', '⌁'],
  ['02', 'Carpet Cleaning & Repair', 'Professional cleaning, stretching, seam repair and builder warranty service.', '▦'],
  ['03', 'Tile, Laminate & LVP', 'Specialty cleaning and floor care for residential and new-construction properties.', '◇'],
  ['04', 'Mold & Microbial Treatment', 'Moisture investigation, antimicrobial treatment and remediation support.', '◌'],
  ['05', 'Odor Removal & Sanitization', 'Ozone treatment, odor control, sanitation and difficult property conditions.', '✧'],
  ['06', 'Demolition & Restoration', 'Flood cuts, damaged material removal, baseboards, trim, insulation, subfloor and restoration support.', '▤'],
]

const benefits = [
  ['RAPID RESPONSE', 'Fast communication when water, flooring or warranty problems cannot wait.'],
  ['BUILDER EXPERIENCE', 'Hands-on experience working within production homebuilding environments and warranty processes.'],
  ['CLEAR DOCUMENTATION', 'Moisture readings, job documentation, invoices and required field paperwork handled professionally.'],
  ['ONE CALL. MULTIPLE SOLUTIONS.', 'Cleaning, extraction, drying, specialty flooring, odor, microbial treatment and restoration support from one field partner.'],
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Mitchell Carpet Cleaning and Restoration home">
          <span className="brand-mark" aria-hidden="true"><b>M</b><i>★</i></span><span className="brand-lockup"><strong>MCCR</strong><small>MITCHELL RESTORATION</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? '×' : '☰'}</button>
        <nav className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label="Main navigation">
          {['SERVICES', 'BUILDERS', 'ABOUT', 'SERVICE AREA', 'CONTACT'].map((item) => <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
          <a className="nav-phone" href="tel:9728240752">☎ <span>972-824-0752</span></a>
          <a className="button button-gold nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>REQUEST A QUOTE <span>↗</span></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-media" />
        <div className="hero-content shell">
          <p className="eyebrow">DFW CARPET CLEANING & PROPERTY RESTORATION</p>
          <h1>CLEANER SPACES.<br /><em>STRONGER TOMORROWS.</em></h1>
          <p className="hero-lead">Professional carpet cleaning, water damage restoration, specialty floor care and property recovery for North Texas homebuilders, property managers and homeowners.</p>
          <div className="hero-actions"><a className="button button-gold" href="#contact">REQUEST A QUOTE <span>↗</span></a><a className="button button-outline" href="#services">EXPLORE OUR SERVICES <span>↓</span></a></div>
          <a className="hero-call" href="tel:9728240752">CALL <strong>972-824-0752</strong> <span>↗</span></a>
        </div>
        <div className="scroll-cue">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section className="trust-strip"><div>30+ <span>YEARS FIELD EXPERIENCE</span></div><div>BUILDER <span>& WARRANTY SPECIALISTS</span></div><div>DFW <span>& NORTH TEXAS</span></div><div>RAPID <span>RESPONSE</span></div></section>

      <section className="section services-section" id="services">
        <div className="section-heading"><p className="eyebrow">WHAT WE DO</p><h2>RESTORATION THAT<br /><em>GETS THE JOB DONE.</em></h2><p>From everyday floor care to complex water and property damage, MCCR provides practical solutions backed by decades of hands-on field experience.</p></div>
        <div className="service-grid">{services.map(([num, title, text, icon]) => <article className="service-card" key={title}><div className="service-top"><span className="service-number">{num}</span><span className="service-icon">{icon}</span></div><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Learn more about ${title}`}>LEARN MORE <span>↗</span></a></article>)}</div>
      </section>

      <section className="builder-section" id="builders"><div className="builder-image" /><div className="builder-content"><p className="eyebrow">BUILT FOR BUILDERS</p><h2>THE RESTORATION PARTNER THAT <em>KEEPS YOUR HOMES MOVING.</em></h2><p className="builder-intro">MCCR understands the demands of production homebuilding, warranty work and closing schedules. We provide responsive field service, clear documentation and practical solutions designed to help builder teams resolve problems quickly and keep projects moving.</p><div className="benefit-grid">{benefits.map(([title, text]) => <div className="benefit" key={title}><span className="benefit-line" /><div><h3>{title}</h3><p>{text}</p></div></div>)}</div><a className="button button-gold" href="#contact">BECOME A BUILDER PARTNER <span>↗</span></a></div></section>

      <section className="section process-section"><div className="section-heading left"><p className="eyebrow">OUR APPROACH</p><h2>CLEAN. <em>RESTORE.</em><br />PROTECT.</h2><p>A straightforward process built around clear communication, quality workmanship and getting your property back in order.</p></div><div className="process-grid"><div className="process-image" /><div className="process-steps"><div><b>01</b><h3>CLEAN</h3><p>Professional cleaning and specialty floor care.</p></div><div><b>02</b><h3>RESTORE</h3><p>Water extraction, drying, damage removal and property recovery.</p></div><div><b>03</b><h3>PROTECT</h3><p>Moisture verification, treatment, documentation and preventative solutions.</p></div></div></div></section>

      <section className="about-section" id="about"><div className="about-inner"><div><p className="eyebrow">WHO WE ARE</p><h2>BUILT ON EXPERIENCE.<br /><em>DRIVEN BY SERVICE.</em></h2></div><div className="about-copy"><p>Mitchell Carpet Cleaning & Restoration is a family-owned North Texas company focused on professional cleaning, restoration and builder support.</p><p>Our operations leadership brings more than 30 years of hands-on carpet cleaning and restoration field experience to every job. We believe in direct communication, practical problem solving and quality workmanship that earns long-term relationships.</p><div className="about-points"><span>DIRECT COMMUNICATION</span><span>LOCAL NORTH TEXAS SERVICE</span><span>QUALITY WORKMANSHIP</span></div></div></div></section>

      <section className="area-section" id="service-area"><div className="area-map"><div className="map-ring ring-one" /><div className="map-ring ring-two" /><span className="map-label">DFW</span><span className="map-dot dot-dallas" /><span className="map-dot dot-fort" /></div><div className="area-content"><p className="eyebrow">WHERE WE WORK</p><h2>PROUDLY SERVING<br /><em>NORTH TEXAS.</em></h2><p>Dallas-Fort Worth is home base. We provide service throughout DFW and surrounding North Texas communities for homeowners, builders, property managers and commercial partners.</p><a className="text-link" href="#contact">CHECK YOUR SERVICE AREA <span>↗</span></a></div></section>

      <section className="why-section"><div className="section-heading"><p className="eyebrow">WHY MCCR</p><h2>WHEN SOMETHING GOES WRONG,<br /><em>EXPERIENCE MATTERS.</em></h2></div><div className="why-grid"><div><strong>30+</strong><span>YEARS FIELD EXPERIENCE</span></div><div><strong>FAST</strong><span>RAPID RESPONSE</span></div><div><strong>BUILT</strong><span>BUILDER-FOCUSED SERVICE</span></div><div><strong>LOCAL</strong><span>LOCALLY OWNED</span></div></div><div className="reviews-note"><span>★★★★★</span><p>Real customer reviews coming soon. We are building this space for verified feedback from the people and teams we serve.</p></div></section>

      <section className="final-cta"><div className="final-overlay" /><div className="final-content"><p className="eyebrow">READY WHEN YOU ARE</p><h2>LET&apos;S GET IT <em>DONE.</em></h2><p>Whether you need routine floor care, builder warranty support or help recovering from property damage, MCCR is ready to go to work.</p><div className="hero-actions"><a className="button button-gold" href="#contact">REQUEST A QUOTE <span>↗</span></a><a className="button button-outline" href="tel:9728240752">CALL 972-824-0752</a></div><div className="final-tag">CLEAN <span>•</span> RESTORE <span>•</span> PROTECT</div></div></section>

      <section className="contact-section" id="contact"><div className="contact-intro"><p className="eyebrow">START A CONVERSATION</p><h2>TELL US WHAT<br /><em>YOU&apos;RE FACING.</em></h2><p>Send a few details and our team will follow up directly. For urgent water damage, call now.</p><a className="contact-phone" href="tel:9728240752">972-824-0752 <span>↗</span></a></div><form className="quote-form" onSubmit={(event) => event.preventDefault()}><div className="form-row"><label>Name<input required name="name" placeholder="Your name" /></label><label>Company / Builder<input name="company" placeholder="Company name" /></label></div><div className="form-row"><label>Phone<input required type="tel" name="phone" placeholder="972-000-0000" /></label><label>Email<input type="email" name="email" placeholder="you@company.com" /></label></div><label>Property Address<input name="address" placeholder="Street, city, ZIP" /></label><label>Service Needed<select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Water damage & extraction</option><option>Carpet cleaning & repair</option><option>Builder warranty support</option><option>Other restoration service</option></select></label><label>Tell Us What Happened<textarea name="details" rows="4" placeholder="Give us a quick overview of what you need..."></textarea></label><fieldset><legend>Preferred Contact Method</legend><label className="radio"><input type="radio" name="contact" defaultChecked /> Phone</label><label className="radio"><input type="radio" name="contact" /> Email</label><label className="radio"><input type="radio" name="contact" /> Text</label></fieldset><button className="button button-gold" type="submit">REQUEST SERVICE <span>↗</span></button></form></section>

      <footer className="site-footer"><div className="footer-brand"><a className="brand" href="#top"><span className="brand-mark" aria-hidden="true"><b>M</b><i>★</i></span><span className="brand-lockup"><strong>MCCR</strong><small>MITCHELL RESTORATION</small></span></a><p>Dallas-Fort Worth, Texas</p></div><div className="footer-links"><a href="#services">Services</a><a href="#builders">Builder Services</a><a href="#about">About</a><a href="#service-area">Service Area</a><a href="#contact">Contact</a></div><div className="footer-contact"><a href="tel:9728240752">972-824-0752</a><a href="mailto:mitchellrestorationdfw@gmail.com">mitchellrestorationdfw@gmail.com</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Mitchell Carpet Cleaning & Restoration</span><strong>CLEAN <i>•</i> RESTORE <i>•</i> PROTECT</strong></div></footer>
    </main>
  )
}
