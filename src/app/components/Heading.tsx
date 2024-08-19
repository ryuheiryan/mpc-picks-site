export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-9xl xl:text-[10rem] leading-none font-semibold mb-4 merriweather-bold">
      {children}
    </h2>
  );
}
