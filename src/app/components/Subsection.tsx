export default function Subsection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-center flex-auto ${className}`}>
      {children}
    </div>
  );
}
