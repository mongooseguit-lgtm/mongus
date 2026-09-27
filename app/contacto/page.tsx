import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contacto — Mongus",
  description: "Ponte en contacto con Mongus.",
};

export default function ContactoPage() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <div style={{ flex: 1 }}>
        <Footer />
      </div>
    </main>
  );
}
