export default function Subheading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h3 className="text-6xl xl:text-7xl font-semibold mb-4 merriweather-regular">
      {children}
    </h3>
  );
}
