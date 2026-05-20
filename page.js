export default function Home() {
  const services = [
    ["Water Extraction & Drying", "Fast response for water damage, extraction, drying equipment, moisture checks, and builder warranty support."],
    ["Carpet Cleaning", "Professional truck-mounted hot water extraction for homeowners, builders, and warranty teams."],
    ["Carpet Repairs", "Stretching, seam repair, specialty flooring issues, subfloor pops, creaks, and difficult repairs."],
    ["Moisture & Mold Prevention", "Thermal imaging, moisture detection, mold detection support, and preventative treatment options."],
    ["Odor Removal", "Odor treatment, dead animal odor removal, ozone treatment, air scrubbers, and deodorizing solutions."],
    ["Builder & Warranty Support", "Reliable vendor support for construction managers, warranty teams, and customer care departments."]
  ];

  return (
    <main>
      <header className="nav">
        <div className="brand">
          <div className="logoBox">
            <img src="/logo.png" alt="Mitchell Carpet Cleaning & Restoration logo" />
          </div>
          <div>
            <div className="brandTitle">Mitchell</div>
            <div className="brandSub">Carpet Cleaning & Restoration</div>
          </div>
        </div>
        <div className="navLinks">
          <a href="https://mitchellrestorationdfw.com">mitchellrestorationdfw.com</a>
          <a href="mailto:mitchellrestorationdfw@gmail.com">Email</a>
          <a className="button small" href="tel:9728240752">972-824-0752</a>
        </div>
      </header>

      <section className="hero">
        <div className="heroGlow"></div>
        <div className="heroInner">
          <div className="heroText">
            <div className="badge">DFW builder, warranty, and homeowner support</div>
            <h1>Specialty floor care, water cleanup, and restoration support.</h1>
            <p>
              Mitchell Carpet Cleaning & Restoration helps DFW builders, warranty departments, and homeowners with professional carpet cleaning, water extraction, drying, odor removal, subfloor issues, and specialty repairs.
            </p>
            <div className="actions">
              <a className="button" href="tel:9728240752">Call 972-824-0752</a>
              <a className="button secondary" href="mailto:mitchellrestorationdfw@gmail.com">Email Us</a>
            </div>
            <div className="stats">
              <div><strong>30+</strong><span>Years experience</span></div>
              <div><strong>DFW</strong><span>Builder support</span></div>
              <div><strong>Fast</strong><span>Clear response</span></div>
            </div>
          </div>

          <div className="heroCard">
            <div className="logoFeature">
              <img src="/logo.png" alt="Mitchell Carpet Cleaning & Restoration" />
            </div>
            <div className="cardContent">
              <div className="miniBadge">Premium service without the hassle</div>
              <h2>Experienced problem solvers for jobs that need extra care.</h2>
              <p>
                Shawn Mitchell brings 30+ years of hands-on experience solving flooring, carpet, water, odor, and warranty issues across DFW homes and builder communities.
              </p>
              <div className="miniGrid">
                <div>Responsive scheduling</div>
                <div>Builder-aware process</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="sectionHead">
          <span>Services</span>
          <h2>The services builders and homeowners call us for.</h2>
          <p>From routine carpet cleaning to urgent water extraction and specialty warranty work, we help keep projects moving and homeowners taken care of.</p>
        </div>

        <div className="serviceGrid">
          {services.map(([title, text]) => (
            <div className="serviceCard" key={title}>
              <div className="serviceIcon">✦</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="split">
        <div className="panel blue">
          <span>Builder support</span>
          <h2>Built for warranty teams, construction managers, and customer care.</h2>
          <p>
            We understand timelines, homeowner expectations, EPOs, warranty communication, and the importance of representing your company professionally inside every home.
          </p>
          <ul>
            <li>Construction manager and warranty support</li>
            <li>Water extraction, drying equipment, and moisture documentation</li>
            <li>Carpet stretching, seams, subfloor pops, and creaks</li>
            <li>Clean job sites and homeowner-friendly communication</li>
          </ul>
        </div>
        <div className="panel">
          <span>Homeowners</span>
          <h2>Clean, respectful service from start to finish.</h2>
          <p>
            Whether you need carpet cleaning, odor removal, water extraction, or help with a flooring issue, our goal is to make the process easy, respectful, and professional from start to finish.
          </p>
          <div className="whiteCard">
            <img src="/logo.png" alt="Mitchell logo" />
            <div>
              <strong>Ready when you need us.</strong>
              <p>Serving builders, warranty teams, and homeowners across the DFW area.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div>
          <span>Call, email, or visit</span>
          <h2>Let’s get your job handled.</h2>
          <p>Fast communication, dependable service, and professional results.</p>
        </div>
        <div className="actions">
          <a className="button dark" href="tel:9728240752">972-824-0752</a>
          <a className="button outlineDark" href="https://mitchellrestorationdfw.com">mitchellrestorationdfw.com</a>
        </div>
      </section>

      <footer>
        <p>© Mitchell Carpet Cleaning & Restoration LLC. All rights reserved.</p>
        <p>972-824-0752 · mitchellrestorationdfw@gmail.com · DFW Area</p>
      </footer>
    </main>
  );
}
