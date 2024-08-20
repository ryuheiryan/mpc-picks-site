import ScreenFooter from "./ScreenFooter";
import ScreenHeader from "./ScreenHeader";

export default function Screen({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col xl:h-dvh content-between gap-8">
      <ScreenHeader />
      {children}
      <ScreenFooter />
    </div>
  );
}
