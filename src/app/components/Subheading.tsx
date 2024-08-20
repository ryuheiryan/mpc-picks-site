export default function Subheading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h3 className="font-serif text-6xl xl:text-7xl font-normal mb-4 self-start">
      {children}
    </h3>
  );
}
