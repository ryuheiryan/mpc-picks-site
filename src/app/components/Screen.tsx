import Footer from "./Footer";
import Header from "./Header";

export default function Screen({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col xl:h-dvh content-between gap-8">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
