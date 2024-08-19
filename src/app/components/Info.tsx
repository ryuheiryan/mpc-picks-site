export default function Info({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-xl xl:text-2xl leading-loose ${className}`}>
      {children}
    </p>
  );
}
