interface MaterialIconProps {
  name: string;
  className?: string;
}

export function MaterialIcon({ name, className = "" }: MaterialIconProps) {
  return (
    <span className={`material-icons-round ${className}`} aria-hidden="true">
      {name}
    </span>
  );
}
