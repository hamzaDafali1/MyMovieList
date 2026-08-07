import NavBar from "../UI/navbar";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div>
        <NavBar />
      </div>
      <div className="grow pt-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}