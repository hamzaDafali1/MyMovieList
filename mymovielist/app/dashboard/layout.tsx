import NavBar from "../ui/navbar";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <NavBar />
      <div className="grow pt-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}