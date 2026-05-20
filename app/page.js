export default function Home() {
  return (
    <main className="site">
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; background: #050816; color: white; font-family: Arial, Helvetica, sans-serif; }
        a { color: inherit; text-decoration: none; }
        .site { min-height: 100vh; background: #050816; }
        .hero {
          position: relative;
          overflow: hidden;
          padding: 28px 6% 90px;
          background:
            radial-gradient(circle at 15% 20%, rgba(47,140,255,.55), transparent 32%),
            radial-gradient(circle at 85% 15%, rgba(218,183,91,.28), transparent 28%),
            linear-gradient(to bottom, #071126, #050816 85%);
        }
        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 80px;
        }
        .brandWrap { display: flex; align-items: center; gap: 16px; }
        .mark {
          width: 70px;
          height: 70px;
          border-radius: 20px;
          background: white;
          color: #071126;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 38px;
          font-weight: 900;
          box-shadow: 0 18px 45px rgba(0,0,0,.35);
          border: 3px solid rgba(212,175,55,.85);
        }
        .brand { font-size: 25px; font-weight: 900; letter-spacing: .03em; }
        .sub { color: #8dc5ff; font-size: 11px; letter-spacing: .28em; text-transform: uppercase; margin-top: 5px; }
        .phone {
          background: #2f8cff;
          padding: 15px 24px;
          border-radius: 18px;
          font-weight: 900;
          box-shadow: 0 16px 35px rgba(47,140,255,.3);
        }
        .grid {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.08fr .92fr;
          gap: 55px;
          align-items: center;
        }
        .badge {
          display: inline-flex;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(47,140,255,.14);
          border: 1px solid rgba(141,197,255,.32);
          color: #d7edff;
          font-weight: 900;
          margin-bottom: 26px;
        }
        h1 {
          font-size: clamp(48px, 6.2vw, 86px);
          line-height: .92;
          letter-spacing: -.055em;
          margin: 0;
        }
        .lead {
          color: #d3dcea;
          font-size: 20px;
          line-height: 1.75;
          max-width: 720px;
          margin-top: 28px;
        }
        .actions { display: flex; gap: 15px; flex-wrap: wrap; margin-top: 34px; }
        .btn {
          padding: 18px 28px;
          border-radius: 18px;
          background: #2f8cff;
          font-weight: 900;
          box-shadow: 0 18px 40px rgba(47,140,255,.25);
        }
        .btn.secondary {
          background: rgba(255,255,255,.08);
          border: 1px solid rgba(255,255,255,.2);
          box-shadow: none;
        }
        .stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 42px;
        }
        .stat {
          padding: 20px;
          border-radius: 24px;
          background: rgba(255,255,255,.065);
          border: 1px solid rgba(255,255,255,.12);
        }
        .stat strong { display: block; font-size: 34px; color: #8dc5ff; }
        .stat span { color: #cbd5e1; font-size: 14px; }
        .card {
          overflow: hidden;
          border-radius: 38px;
          background: rgba(255,255,255,.09);
          border: 1px solid rgba(255,255,255,.14);
          box-shadow: 0 30px 90px rgba(0,0,0,.45);
          backdrop-filter: blur(18px);
        }
        .logoPanel {
          background: white;
          color: #071126;
          padding: 54px 38px;
          text-align: center;
        }
        .bigM {
          width: 110px;
          height: 110px;
          border-radius: 30px;
          margin: 0 auto 24px;
          background: linear-gradient(135deg, #071126, #123f7b);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 58px;
          font-weight: 900;
          border: 4px solid #d4af37;
        }
        .logoTitle {
          font-size: 58px;
          font-weight: 900;
          letter-spacing: .12em;
        }
        .goldLine {
          height: 2px;
          width: 260px;
          margin: 16px auto;
          background: linear-gradient(to right, transparent, #d4af37, transparent);
        }
        .logoSub {
          color: #133a73;
          font-weight: 900;
          letter-spacing: .28em;
          text-transform: uppercase;
          font-size: 14px;
        }
        .cardText { padding: 34px; }
        .cardText h2 { font-size: 34px; line-height: 1.05; margin: 0; }
        .cardText p { color: #cbd5e1; font-size: 17px; line-height: 1.7; }
        .services {
          padding: 85px 6%;
          background: #08111f;
        }
        .sectionHead { max-width: 900px; margin: 0 auto 45px; text-align: center; }
        .eyebrow { color: #8dc5ff; letter-spacing: .28em; text-transform: uppercase; font-weight: 900; font-size: 13px; }
        .sectionHead h2 { font-size: clamp(38px, 5vw, 58px); margin: 14px 0; line-height: 1; }
        .sectionHead p { color: #cbd5e1; font-size: 18px; line-height: 1.7; }
        .serviceGrid {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }
        .service {
          padding: 30px;
          border-radius: 30px;
          background: rgba(5,8,22,.84);
          border: 1px solid rgba(255,255,255,.12);
          min-height: 245px;
          box-shadow: 0 20px 55px rgba(0,0,0,.22);
        }
        .icon {
          width: 54px;
          height: 54px;
          border-radius: 18px;
          background: rgba(47,140,255,.16);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #8dc5ff;
          font-size: 26px;
          margin-bottom: 20px;
        }
        .service h3 { font-size: 23px; margin: 0 0 12px; }
        .service p { color: #cbd5e1; line-height: 1.65; margin: 0; }
        .split {
          max-width: 1280px;
          margin: 0 auto;
          padding: 85px 6%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }
        .panel {
          border-radius: 38px;
          padding: 42px;
          background: rgba(255,255,255,.075);
          border: 1px solid rgba(255,255,255,.12);
          box-shadow: 0 25px 75px rgba(0,0,0,.25);
        }
        .panel.blue {
          background: linear-gradient(145deg, rgba(47,140,255,.22), rgba(255,255,255,.06));
        }
        .panel h2 { font-size: 44px; line-height: 1; margin: 14px 0 18px; }
        .panel p { color: #cbd5e1; line-height: 1.7; font-size: 17px; }
        .panel ul { padding: 0; list-style: none; margin-top: 26px; }
        .panel li {
          margin: 12px 0;
          padding: 16px;
          border-radius: 17px;
          background: rgba(5,8,22,.52);
          font-weight: 800;
          color: #e5edf8;
        }
        .cta {
          padding: 70px 6%;
          background: #2f8cff;
          color: #050816;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
        }
        .cta h2 { font-size: 54px; margin: 0; line-height: 1; }
        .cta p { font-size: 19px; font-weight: 800; color: #071126; }
        .darkBtn {
          background: #050816;
          color: white;
          padding: 18px 30px;
          border-radius: 18px;
          font-weight: 900;
          display: inline-flex;
        }
        footer {
          padding: 34px 6%;
          color: #94a3b8;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          border-top: 1px solid rgba(255,255,255,.1);
        }
        @media(max-width: 900px) {
          .nav { align-items: flex-start; gap: 20px; }
          .grid, .serviceGrid, .split { grid-template-columns: 1fr; }
          .stats { grid-template-columns: 1fr; }
          .cta, footer { flex-direction: column; align-items: flex-start; }
          .logoTitle { font-size: 42px; }
        }
      `}</style>

      <section className="hero">
        <div className="nav">
          <div className="brandWrap">
            <div className="mark">M</div>
            <div>
              <div className="brand">Mitchell</div>
              <div className="sub">Carpet Cleaning & Restoration</div>
            </div>
          </div>
          <a className="phone" href="tel:9728240752">972-824-0752</a>
        </div>

        <div className="grid">
          <div>
            <div className="badge">DFW Builder, Warranty & Homeowner Support</div>
            <h1>Specialty floor care, water cleanup, and restoration support.</h1>
            <p className="lead">
              Mitchell Carpet Cleaning & Restoration helps DFW builders, warranty departments, and homeowners with professional carpet cleaning, water extraction, drying, odor removal, subfloor issues, and specialty repairs.
            </p>
            <div className="actions">
              <a className="btn" href="tel:9728240752">Call 972-824-0752</a>
              <a className="btn secondary" href="mailto:mitchellrestorationdfw@gmail.com">Email Us</a>
            </div>

            <div className="stats">
              <div className="stat"><strong>30+</strong><span>Years Experience</span></div>
              <div className="stat"><strong>DFW</strong><span>Builder Support</span></div>
              <div className="stat"><strong>Fast</strong><span>Clear Response</span></div>
            </div>
          </div>

          <div className="card">
            <div className="logoPanel">
              <div className="bigM">M</div>
              <div className="logoTitle">MITCHELL</div>
              <div className="goldLine"></div>
              <div className="logoSub">Carpet Cleaning & Restoration</div>
            </div>
            <div className="cardText">
              <h2>Experienced problem solvers for jobs that need extra care.</h2>
              <p>
                Shawn Mitchell brings 30+ years of hands-on experience solving flooring, carpet, water, odor, and warranty issues across DFW homes and builder communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="sectionHead">
          <div className="eyebrow">Services</div>
          <h2>The services builders and homeowners call us for.</h2>
          <p>From routine carpet cleaning to urgent water extraction and specialty warranty work, we help keep projects moving and homeowners taken care of.</p>
        </div>

        <div className="serviceGrid">
          <div className="service"><div className="icon">✦</div><h3>Water Extraction & Drying</h3><p>Fast response for water damage, drying equipment, moisture checks, and builder warranty support.</p></div>
          <div className="service"><div className="icon">✦</div><h3>Carpet Cleaning</h3><p>Professional truck-mounted hot water extraction for homeowners, builders, and warranty teams.</p></div>
          <div className="service"><div className="icon">✦</div><h3>Carpet Repairs</h3><p>Stretching, seam repair, specialty flooring issues, subfloor pops, creaks, and difficult repairs.</p></div>
          <div className="service"><div className="icon">✦</div><h3>Moisture & Mold Prevention</h3><p>Thermal imaging, moisture detection, mold detection support, and preventative treatment options.</p></div>
          <div className="service"><div className="icon">✦</div><h3>Odor Removal</h3><p>Dead animal odor removal, ozone treatment, air scrubbers, and deodorizing solutions.</p></div>
          <div className="service"><div className="icon">✦</div><h3>Builder & Warranty Support</h3><p>Reliable vendor support for construction managers, warranty teams, and customer care departments.</p></div>
        </div>
      </section>

      <section className="split">
        <div className="panel blue">
          <div className="eyebrow">Builder Support</div>
          <h2>Built for warranty teams, construction managers, and customer care.</h2>
          <p>We understand timelines, homeowner expectations, warranty communication, and the importance of representing your company professionally inside every home.</p>
          <ul>
            <li>Construction manager and warranty support</li>
            <li>Water extraction, drying equipment, and moisture documentation</li>
            <li>Carpet stretching, seams, subfloor pops, and creaks</li>
            <li>Clean job sites and homeowner-friendly communication</li>
          </ul>
        </div>

        <div className="panel">
          <div className="eyebrow">Homeowners</div>
          <h2>Clean, respectful service from start to finish.</h2>
          <p>Whether you need carpet cleaning, odor removal, water extraction, or help with a flooring issue, our goal is to make the process easy, respectful, and professional from start to finish.</p>
        </div>
      </section>

      <section className="cta">
        <div>
          <div className="eyebrow">Call, Email, or Visit</div>
          <h2>Ready when you need us.</h2>
          <p>Fast communication, dependable service, and professional results across DFW.</p>
        </div>
        <a className="darkBtn" href="tel:9728240752">Call Now</a>
      </section>

      <footer>
        <div>© Mitchell Carpet Cleaning & Restoration LLC</div>
        <div>972-824-0752 · mitchellrestorationdfw@gmail.com</div>
      </footer>
    </main>
  );
}
