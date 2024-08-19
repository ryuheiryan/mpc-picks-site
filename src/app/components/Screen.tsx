export default function Screen({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col xl:h-screen my-8 py-16 px-32 xl:px-28 gap-8">
      {children}
    </div>
  );
}
