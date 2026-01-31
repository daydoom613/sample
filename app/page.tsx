import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function page() {
  return (
    <main className="h-screen bg-[url('/MainPage_BG_v01.png')] bg-cover bg-center">
      <header>
        <NavBar />
      </header>
      <Footer />
    </main>
  );
}
