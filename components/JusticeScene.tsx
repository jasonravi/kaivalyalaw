type Props = {
  className?: string;
  alt?: string;
};

export function JusticeScene({ className, alt = "Lady Justice" }: Props) {
  return (
    <div className={`justice-scene ${className ?? ""}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/expertise/justitia-cinematic.png" alt={alt} />
    </div>
  );
}
