import { Navbar } from "~/components/navbar";
import { Footer } from "~/components/footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="w-full max-w-5xl sm:mx-auto flex-1">{children}</main>
      <Footer />
    </div>
  );
}
