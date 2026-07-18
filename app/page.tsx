export default function Home() {
  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      fontFamily: "Arial"
    }}>
      <h1>🎉 RifaPro</h1>
      <p>La plataforma de rifas más segura.</p>

      <button
        style={{
          padding: "12px 24px",
          background: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Ver rifas
      </button>
    </main>
  );
      }
