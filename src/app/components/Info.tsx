export default function Info({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`font-sans text-2xl xl:text-3xl leading-loose ${className}`}>
      {children}
    </p>
  );
}
