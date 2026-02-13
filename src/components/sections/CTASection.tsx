import Link from "next/link";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export function CTASection({
  title,
  description,
  buttonText,
  buttonHref,
}: CTASectionProps) {
  return (
    <section className="px-6 mb-12 max-w-6xl mx-auto">
      <div className="bg-primary rounded-3xl p-8 md:p-12 text-center shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full transform -translate-x-1/2 translate-y-1/2" />

        <h2 className="text-white font-display font-bold text-xl md:text-2xl mb-2 relative z-10">
          {title}
        </h2>
        <p className="text-white/90 text-sm md:text-base mb-6 relative z-10 max-w-md mx-auto">
          {description}
        </p>
        <Link
          href={buttonHref}
          className="bg-white text-primary font-bold py-3 px-8 rounded-full shadow-md hover:bg-gray-50 transition active:scale-95 relative z-10 inline-block"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
