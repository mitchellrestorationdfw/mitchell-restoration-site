export default function Home() {
  return (
    <main style={{
      background: "#050816",
      color: "white",
      minHeight: "100vh",
      fontFamily: "Arial",
      padding: "40px"
    }}>
      <h1 style={{
        fontSize: "64px",
        fontWeight: "900",
        lineHeight: "1"
      }}>
        Mitchell Carpet Cleaning & Restoration
      </h1>

      <p style={{
        marginTop: "20px",
        fontSize: "22px",
        color: "#cbd5e1",
        maxWidth: "700px",
        lineHeight: "1.6"
      }}>
        Professional carpet cleaning, water extraction,
        odor removal, specialty flooring repairs,
        builder warranty support, and restoration services across DFW.
      </p>

      <div style={{
        marginTop: "40px",
        display: "flex",
        gap: "20px"
      }}>
        <a
          href="tel:9728240752"
          style={{
            background: "#2f8cff",
            padding: "18px 28px",
            borderRadius: "16px",
            color: "white",
            textDecoration: "none",
            fontWeight: "700"
          }}
        >
          Call 972-824-0752
        </a>

        <a
          href="https://mitchellrestorationdfw.com"
          style={{
            border: "1px solid white",
            padding: "18px 28px",
            borderRadius: "16px",
            color: "white",
            textDecoration: "none",
            fontWeight: "700"
          }}
        >
          Visit Website
        </a>
      </div>
    </main>
  );
}
