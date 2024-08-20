export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-8xl md:text-9xl xl:text-[10rem] leading-none font-medium text-center mb-4">
      {children}
    </h2>
  );
}
