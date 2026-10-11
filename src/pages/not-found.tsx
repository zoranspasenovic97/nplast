import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

export default function NotFound() {
  return (
    <main className="flex min-h-[100dvh] items-center justify-center bg-[#f8f5ec] px-5">
      <div className="max-w-md text-center">
        <p className="eyebrow text-[#d51e32]">Greška 404</p>
        <h1 className="mt-4 font-display text-5xl font-bold tracking-[-.05em] text-[#182331]">
          Stranica nije pronađena.
        </h1>
        <p className="mt-4 text-sm leading-6 text-[#52606a]">
          Stranica koju tražite ne postoji ili je premeštena.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 bg-[#d51e32] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#b8172a]"
        >
          <ArrowLeft size={16} /> Nazad na početnu
        </Link>
      </div>
    </main>
  );
}
