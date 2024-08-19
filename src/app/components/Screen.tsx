export default function Screen({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col xl:h-screen py-24 px-32 xl:px-48 gap-8">
      {children}
    </div>
  );
}
