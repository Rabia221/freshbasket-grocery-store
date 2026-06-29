import Navbar from "@/components/layout/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="flex h-screen items-center justify-center">
        <h1 className="text-4xl font-bold">Home Page</h1>
      </main>
    </>
  );
}
