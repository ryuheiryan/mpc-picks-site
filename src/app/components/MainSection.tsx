export default function MainSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={` flex flex-col xl:flex-row items-center flex-auto ${className}`}
    >
      {children}
    </div>
  );
}
