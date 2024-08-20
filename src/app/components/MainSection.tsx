export default function MainSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col xl:flex-row items-center flex-auto px-12 md:px-16 xl:px-32 ${className}`}
    >
      {children}
    </div>
  );
}
