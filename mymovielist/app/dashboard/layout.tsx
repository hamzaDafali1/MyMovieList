import type { Metadata } from "next";
import Footer from "../ui/footer";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Your List of movies",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col md:overflow-hidden">
      <div className="grow pt-6 md:overflow-y-auto md:p-12">{children}</div>
      <Footer />
    </div>
  );
}