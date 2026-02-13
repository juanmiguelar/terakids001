/**
 * Props for the MaterialIcon component.
 */
interface MaterialIconProps {
  name: string; // The name of the Material Icon (e.g., "menu", "close")
  className?: string; // Optional additional CSS classes
}

/**
 * Renders a Material Icon using the Google Material Icons font.
 *
 * @param {MaterialIconProps} props - The component props.
 * @returns {JSX.Element} The rendered icon.
 */
export function MaterialIcon({ name, className = "" }: MaterialIconProps) {
  return (
    <span className={`material-icons-round ${className}`} aria-hidden="true">
      {name}
    </span>
  );
}
