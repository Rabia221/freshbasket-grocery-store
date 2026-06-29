import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="min-h-screen">
        <h1 className="pt-20 text-center text-4xl font-bold">FreshBasket</h1>
      </main>
    </>
  );
}
