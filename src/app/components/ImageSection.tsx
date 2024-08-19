export default function ImageSection({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`flex container justify-center ${className}`}>
      <img src={src} alt={alt} className="object-contain" />
    </div>
  );
}
