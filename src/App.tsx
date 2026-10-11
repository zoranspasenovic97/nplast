import { type ReactNode, useState } from 'react';
import { ErrorBoundary } from '@/components/error-boundary';
import NotFound from '@/pages/not-found';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, Download, Mail, MapPin, Menu, Phone, Recycle, ShieldCheck, Truck, X } from 'lucide-react';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const blogPosts = [
    ['Kupili ste streč foliju, ali ne znate koja vrsta se za šta koristi?', 'kupili-ste-strec-foliju-ali-ne-znate-koja-vrsta-se-za-sta-koristi'],
    ['Pregled streč folije', 'pregled-strec-folije'],
    ['Ogromno tržište streč folija', 'ogromno-trziste-strec-folija'],
    ['Gde koristiti streč foliju', 'gde-koristiti-strec-foliju'],
    ['Kontrola viskoznosti streč folije', 'kontrola-viskoznosti-strec-folije'],
    ['Kakvu ulogu igra proizvođač streč folija', 'kakvu-ulogu-igra-proizvodjac-strec-folija'],
    ['Kako sačuvati karakteristike streč folije', 'kako-sacuvati-karakteristike-strec-folije'],
  ];
  const navItems = [['Proizvodi', '#proizvodi'], ['Specifikacije', '#specifikacije'], ['Isporuka', '#isporuka'], ['O nama', '#o-nama'], ['Blog', '#blog']];
  return (
    <div className="grain min-h-[100dvh]">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-[#f8f5ec] focus:px-4 focus:py-3">Preskoči na sadržaj</a>
      <div className="bg-[#182331] px-5 py-2.5 text-[#f9f5eb]">
        <div className="section-wrap flex items-center justify-between gap-3">
          <span className="eyebrow text-[#e7c95d]">N PLAST 996 <span className="hidden sm:inline">— Vaš pouzdan poslovni partner!</span></span>
          <div className="flex items-center gap-4 text-xs">
            <a data-testid="link-top-phone" href="tel:+381641285674" className="inline-flex items-center gap-2 hover:text-[#f2d868]"><Phone size={13}/> <span className="hidden sm:inline">064 128 5674</span><span className="sm:hidden">Pozovite</span></a>
            <a data-testid="link-top-email" href="mailto:office@nplast996.com" className="hidden items-center gap-2 hover:text-[#f2d868] sm:inline-flex"><Mail size={13}/> office@nplast996.com</a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-[#ded8ca] bg-[#f8f5ec]/95 backdrop-blur-md">
        <div className="section-wrap flex h-[76px] items-center justify-between">
          <a href="#top" aria-label="N Plast 996 — početna" className="flex items-center gap-3">
            <img src="/images/logo1.png" className="h-[54px] w-[66px] object-contain" alt="N Plast 996 logo"/>
            <span className="font-display text-[15px] font-bold tracking-[-.05em]">N PLAST <span className="text-[#d51e32]">996</span></span>
          </a>
          <nav aria-label="Glavna navigacija" className="hidden items-center gap-7 lg:flex">
            {navItems.map(([label, href]) => <a key={href} className="nav-link eyebrow text-[10px] tracking-[.08em]" href={href}>{label}</a>)}
          </nav>
          <div className="hidden lg:block">
            <a href="#kontakt" className="inline-flex items-center gap-2 bg-[#d51e32] px-5 py-3 text-xs font-bold text-[#fff9ee] transition hover:bg-[#b8172a]">Zatražite ponudu <ArrowUpRight size={15}/></a>
          </div>
          <button aria-label={menuOpen ? 'Zatvori meni' : 'Otvori meni'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} className="inline-flex h-11 w-11 items-center justify-center border border-[#d8d1c3] lg:hidden">
            {menuOpen ? <X size={20}/> : <Menu size={20}/>}
          </button>
        </div>
        {menuOpen && <nav aria-label="Mobilna navigacija" className="border-t border-[#ded8ca] bg-[#f8f5ec] px-5 pb-5 lg:hidden">
          <div className="section-wrap flex flex-col">
            {navItems.map(([label, href]) => <a onClick={closeMenu} key={href} href={href} className="border-b border-[#ded8ca] py-4 text-sm font-semibold">{label}</a>)}
            <a onClick={closeMenu} href="#kontakt" className="mt-4 inline-flex items-center justify-center gap-2 bg-[#d51e32] px-5 py-4 text-sm font-bold text-[#fff9ee]">Zatražite ponudu <ArrowUpRight size={15}/></a>
          </div>
        </nav>}
      </header>

      <main id="main">
        <section id="top" className="hero-photo relative overflow-hidden text-[#faf7ed]">
          <div className="section-wrap relative grid min-h-[590px] items-end pb-14 pt-20 sm:min-h-[650px] sm:pb-20 lg:min-h-[690px] lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:pb-20">
            <div className="max-w-[720px]">
              <div className="reveal eyebrow mb-6 inline-flex items-center gap-3 border border-white/30 bg-[#182331]/35 px-3 py-2 text-[#f4dc79]">
                <span className="h-2 w-2 rounded-full bg-[#e8cf6b]"></span> Streč folija za sigurno pakovanje
              </div>
              <h1 className="reveal reveal-delay font-display text-[clamp(3.2rem,10vw,7.4rem)] font-bold leading-[.88] tracking-[-.075em]">
                Teret<br/>spreman.<br/><span className="text-[#f0d46a]">Posao ide.</span>
              </h1>
              <p className="mt-7 max-w-[470px] text-base leading-7 text-white/85 sm:text-lg">
                Streč folija za industrijsko pakovanje i svakodnevnu upotrebu. Brzo, kvalitetno, povoljno.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#proizvodi" className="inline-flex min-h-14 items-center justify-center gap-3 bg-[#d51e32] px-6 text-sm font-bold text-white transition hover:bg-[#b8172a]">Pogledajte proizvode <ArrowRight size={17}/></a>
                <a href="#kontakt" className="inline-flex min-h-14 items-center justify-center gap-3 border border-white/55 px-6 text-sm font-bold text-white transition hover:bg-white/10">Kontaktirajte nas <Phone size={16}/></a>
              </div>
            </div>
            <div className="mt-12 flex items-end justify-between gap-4 lg:mt-0 lg:justify-self-end">
              <div className="max-w-[215px] border-l-2 border-[#f0d46a] pl-4 text-sm leading-6 text-white/90">
                <span className="eyebrow mb-2 block text-[#f0d46a]">N PLAST 996</span>
                Vaš pouzdan poslovni partner!
              </div>
              <a href="#proizvodi" aria-label="Saznajte više" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/50 transition hover:bg-white/10"><ArrowDown size={18}/></a>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-white/15 bg-[#182331]/45 py-3">
            <div className="marquee flex w-max items-center gap-7 whitespace-nowrap eyebrow text-[10px] text-white/85">
              {Array.from({length: 4}, (_, i) => <span key={i} className="flex items-center gap-7">BRZO <i className="h-1 w-1 rounded-full bg-[#f0d46a]"/> KVALITETNO <i className="h-1 w-1 rounded-full bg-[#e83a45]"/> POVOLJNO <i className="h-1 w-1 rounded-full bg-[#f0d46a]"/> POUZDAN POSLOVNI PARTNER <i className="h-1 w-1 rounded-full bg-[#e83a45]"/></span>)}
            </div>
          </div>
        </section>

        <section id="proizvodi" className="section-wrap py-20 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="eyebrow mb-5 flex items-center gap-3 text-[#c42032]"><span className="h-px w-8 bg-[#c42032]"/> Proizvod</p>
              <h2 className="font-display text-4xl font-semibold leading-[1.04] tracking-[-.055em] sm:text-6xl">Pakovanje koje<br/>drži stvar na<br/><span className="text-[#d51e32]">svom mestu.</span></h2>
              <p className="mt-6 max-w-[450px] text-[15px] leading-7 text-[#52606a]">N PLAST 996 vrši obradu i distribuciju streč folije visokog kvaliteta renomiranog proizvođača iz Srbije. Standardna folija je providna, sa lepkom na unutrašnjoj strani.</p>
              <a className="arrow-link mt-7 inline-flex items-center gap-3 border-b border-[#182331] pb-2 text-sm font-bold" href="#specifikacije">Istražite specifikacije <ArrowRight size={16}/></a>
            </div>
            <div className="relative grid min-h-[365px] items-center overflow-hidden bg-[#dce9e8] p-7 sm:min-h-[440px] sm:p-12">
              <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full border border-[#b7cecc] sm:h-72 sm:w-72"/>
              <div className="absolute bottom-0 left-0 h-20 w-full bg-[#d51e32]"/>
              <img src="/images/strec_folija_home.png" alt="Providne rolne streč folije" className="relative z-10 mx-auto max-h-[330px] max-w-full object-contain mix-blend-multiply sm:max-h-[380px]"/>
              <span className="eyebrow absolute left-6 top-6 z-10 text-[#344653]">STABILNOST U SVAKOM SLOJU</span>
              <span className="font-mono absolute bottom-5 right-6 z-10 text-xs text-white">N PLAST 996 / 01</span>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 border-y border-[#d9d2c4] lg:grid-cols-4">
            {[
              ['01', 'Stabilizuje', 'Povezuje i stabilizuje proizvode pri pakovanju.'],
              ['02', 'Štiti', 'Pomaže u zaštiti od prašine i vlage.'],
              ['03', 'Za svaki pogon', 'Ručno i mašinsko pakovanje.'],
              ['04', 'Može u reciklažu', 'Streč folija je materijal koji se može reciklirati.'],
            ].map(([n, title, text]) => <article key={n} className="border-b border-r border-[#d9d2c4] px-4 py-6 last:border-r-0 even:border-r-0 sm:px-6 lg:border-b-0 lg:even:border-r lg:last:border-r-0">
              <span className="font-mono text-xs text-[#d51e32]">{n}</span><h3 className="mt-5 font-display text-lg font-semibold">{title}</h3><p className="mt-2 text-xs leading-5 text-[#617078] sm:text-sm">{text}</p>
            </article>)}
          </div>
        </section>

        <section id="specifikacije" className="bg-[#182331] py-20 text-[#f8f5ec] sm:py-28">
          <div className="section-wrap">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div><p className="eyebrow mb-5 text-[#e7c95d]">Izaberite po meri</p><h2 className="font-display text-4xl font-semibold tracking-[-.05em] sm:text-6xl">Specifikacije,<br/>bez nagađanja.</h2></div>
              <p className="max-w-[390px] text-sm leading-6 text-white/65">Dostupne dimenzije i varijante za ručno ili mašinsko pakovanje. Moguće su i dimenzije po želji.</p>
            </div>
            <div className="grid gap-px border border-white/15 bg-white/15 md:grid-cols-2 lg:grid-cols-3">
              {[
                ['ŠIRINA FOLIJE', '100 · 200 · 300 · 500 mm', 'ili po želji'],
                ['DEBLJINA', '10 · 12 · 17 · 19 · 23 · 30 · 35 µ', 'debljina folije'],
                ['PREČNIK HILZNE', '30 · 52 · 76 mm', 'prečnik jezgra'],
                ['TEŽINA HILZNE', '0,05 · 0,1 · 1,1 · 1,7 kg', 'težina jezgra'],
                ['TEŽINA ROLE', '0,5 · 1 · 2,5 · 5 · 16 kg', 'ili po želji'],
                ['TIP PAKOVANJA', 'Ručno · mašinsko', 'u skladu sa načinom upotrebe'],
              ].map(([label, value, note], index) => <div key={label} className="bg-[#202e3d] px-5 py-7 sm:px-8 sm:py-9">
                <div className="mb-7 flex items-center justify-between"><span className="eyebrow text-[10px] text-white/55">{label}</span><span className="font-mono text-[10px] text-[#e7c95d]">0{index + 1}</span></div>
                <p className="font-display text-[19px] font-semibold leading-7 tracking-[-.025em] sm:text-[22px]">{value}</p><p className="mt-2 text-xs text-white/55">{note}</p>
              </div>)}
            </div>
            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              <div className="flex gap-4 border-l-2 border-[#e7c95d] bg-white/[.04] p-5 sm:p-7">
                <span className="font-mono text-sm text-[#e7c95d]">01</span><div><p className="eyebrow mb-2 text-[#e7c95d]">Najtraženije</p><h3 className="font-display text-xl font-semibold">23 µ / 5 kg i 23 µ / 16 kg</h3><p className="mt-2 text-sm text-white/65">5 kg za ručno pakovanje · 16 kg za mašinsko pakovanje.</p></div>
              </div>
              <div className="flex gap-4 border-l-2 border-[#d51e32] bg-white/[.04] p-5 sm:p-7">
                <span className="font-mono text-sm text-[#f37c7e]">02</span><div><p className="eyebrow mb-2 text-[#f37c7e]">Preporuka i dostupnost</p><h3 className="font-display text-xl font-semibold">10 µ / 30 m i 50 m</h3><p className="mt-2 text-sm text-white/65">Preporuka za svakodnevnu upotrebu. Istog dana dostupna isporuka 23 µ / 2,5 kg, 5 kg i 16 kg.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section id="isporuka" className="overflow-hidden bg-[#ede7d8]">
          <div className="section-wrap grid items-center gap-4 py-16 sm:py-20 lg:grid-cols-[1fr_.85fr] lg:gap-16">
            <div className="relative order-2 flex min-h-[250px] items-center justify-center sm:min-h-[330px] lg:order-1">
              <div className="absolute left-0 top-1/2 h-[82%] w-[76%] -translate-y-1/2 border border-[#d6cdb9]"/>
              <div className="absolute left-8 top-[16%] bg-[#f8f5ec] px-3 py-2 eyebrow text-[#d51e32]">DOSTAVA / SP</div>
              <img src="/images/dostava.png" alt="Vozilo za isporuku" className="relative z-10 w-[min(100%,440px)] object-contain mix-blend-multiply"/>
              <div className="absolute bottom-[12%] right-[4%] flex h-24 w-24 flex-col items-center justify-center rounded-full bg-[#e6cc67] text-center text-[#182331] sm:h-32 sm:w-32"><span className="font-display text-3xl font-bold leading-none sm:text-4xl">60</span><span className="eyebrow mt-1 text-[9px]">km od Stare Pazove</span></div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="eyebrow mb-5 flex items-center gap-3 text-[#c42032]"><Truck size={15}/> Isporuka</p>
              <h2 className="font-display text-4xl font-semibold leading-[1.03] tracking-[-.05em] sm:text-6xl">Stižemo brzo.<br/><span className="text-[#d51e32]">Dogovorimo se.</span></h2>
              <p className="mt-6 max-w-[480px] text-[15px] leading-7 text-[#52606a]">Brza i besplatna dostava do 60 km od Stare Pazove. Isporuku možemo dogovoriti za dan i vreme koje Vama odgovara.</p>
              <div className="mt-7 flex items-start gap-3 border-t border-[#d5cbb7] pt-5 text-sm leading-6"><Check className="mt-1 shrink-0 text-[#d51e32]" size={17}/><span>Istog dana: 23 µ u pakovanjima od 2,5 kg, 5 kg i 16 kg.</span></div>
              <a href="#kontakt" className="mt-7 inline-flex items-center gap-3 bg-[#182331] px-5 py-4 text-sm font-bold text-[#f8f5ec] transition hover:bg-[#d51e32]">Dogovorite isporuku <ArrowRight size={16}/></a>
            </div>
          </div>
        </section>

        <section id="o-nama" className="section-wrap py-20 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="eyebrow mb-5 text-[#c42032]">N PLAST 996 / O nama</p>
              <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-[-.055em] sm:text-6xl">Pouzdanost<br/>počinje od<br/><span className="text-[#d51e32]">materijala.</span></h2>
            </div>
            <div className="lg:pt-10">
              <p className="text-lg leading-8 text-[#344653]">Proizvodnja streč folije odvija se uz pomoć ekstrudera najnovije generacije i kvalitetnog granulata, kod renomiranog proizvođača iz Srbije.</p>
              <p className="mt-5 text-sm leading-7 text-[#68737a]">Naši proizvodi poseduju sertifikate kvaliteta i zdravstvene ispravnosti. Standardna folija je providna i lepi se sa unutrašnje strane, pogodna za industrijsko pakovanje i svakodnevne poslove.</p>
              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                <div className="flex items-start gap-4 border border-[#d9d2c4] bg-[#f2eee4] p-5"><ShieldCheck className="mt-1 text-[#d51e32]" size={20}/><div><h3 className="font-display text-sm font-bold">Sertifikovana folija</h3><p className="mt-1 text-xs leading-5 text-[#68737a]">Sertifikati kvaliteta i zdravstvene ispravnosti.</p></div></div>
                <div className="flex items-start gap-4 border border-[#d9d2c4] bg-[#f2eee4] p-5"><Recycle className="mt-1 text-[#d51e32]" size={20}/><div><h3 className="font-display text-sm font-bold">Može se reciklirati</h3><p className="mt-1 text-xs leading-5 text-[#68737a]">Streč folija je materijal koji se može reciklirati.</p></div></div>
              </div>
            </div>
          </div>
        </section>

        <section id="ponude" className="bg-[#d9e6e3] py-16 sm:py-20">
          <div className="section-wrap grid gap-8 md:grid-cols-[.8fr_1.2fr] md:items-center">
            <div><p className="eyebrow mb-4 text-[#c42032]">Dokumentacija</p><h2 className="font-display text-3xl font-semibold tracking-[-.05em] sm:text-5xl">Ponude za preuzimanje.</h2><p className="mt-4 max-w-[400px] text-sm leading-6 text-[#52606a]">Pregledajte ponude i kontaktirajte nas za dogovor oko Vaših potreba.</p></div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[['Osnovna ponuda', '/osnovna-ponuda.pdf'], ['Dodatna ponuda', '/dodatna-ponuda.pdf']].map(([title, href], index) => <a key={title} data-testid={`link-download-offer-${index}`} href={href} download className="group flex min-h-[110px] items-center justify-between border border-[#b8cbc6] bg-[#f8f5ec] p-5 transition hover:border-[#d51e32] hover:bg-[#fffaf1]">
                <span><span className="eyebrow block text-[9px] text-[#7d8887]">PDF / PONUDA 0{index + 1}</span><strong className="mt-2 block font-display text-lg">{title}</strong></span>
                <span className="flex h-11 w-11 items-center justify-center bg-[#182331] text-white transition group-hover:bg-[#d51e32]"><Download size={17}/></span>
              </a>)}
            </div>
          </div>
        </section>

        <section id="blog" className="section-wrap py-20 sm:py-28">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div><p className="eyebrow mb-4 text-[#c42032]">Iz našeg bloga</p><h2 className="font-display text-4xl font-semibold tracking-[-.05em] sm:text-5xl">Više o streč foliji.</h2></div>
            <a href="https://folija.rs/blog/" target="_blank" rel="noreferrer" className="arrow-link inline-flex items-center gap-2 text-sm font-bold">Svi tekstovi <ArrowUpRight size={15}/></a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map(([title, slug], index) => <a key={slug} href={`https://folija.rs/blog/${slug}/`} target="_blank" rel="noreferrer" className="group flex min-h-[150px] flex-col justify-between border border-[#d9d2c4] bg-[#f4f0e7] p-5 transition hover:-translate-y-1 hover:border-[#d51e32] hover:bg-[#fffaf1] sm:min-h-[180px] sm:p-6">
              <div className="flex items-center justify-between"><span className="eyebrow text-[9px] text-[#d51e32]">VODIČ / 0{index+1}</span><ArrowUpRight size={16} className="text-[#7c8585] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#d51e32]"/></div>
              <h3 className="mt-8 max-w-[310px] font-display text-lg font-semibold leading-6 tracking-[-.025em]">{title}</h3>
            </a>)}
          </div>
        </section>

        <section id="kontakt" className="bg-[#d51e32] py-16 text-[#fff9ee] sm:py-24">
          <div className="section-wrap grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-end">
            <div>
              <p className="eyebrow mb-5 text-[#f0d46a]">Kontakt / N PLAST 996</p>
              <h2 className="font-display text-5xl font-semibold leading-[.98] tracking-[-.06em] sm:text-7xl">Spremni za<br/>sledeću isporuku?</h2>
              <p className="mt-6 max-w-[440px] text-sm leading-6 text-white/80">Pozovite nas ili pošaljite upit. Rado ćemo pomoći da izaberete odgovarajuću streč foliju i dogovorite isporuku.</p>
            </div>
            <div className="border-t border-white/30 lg:border-t-0">
              <a data-testid="link-contact-phone" href="tel:+381641285674" className="flex items-center justify-between border-b border-white/30 py-5 text-lg font-semibold transition hover:text-[#f0d46a] sm:text-xl"><span className="flex items-center gap-4"><Phone size={19}/> 064 128 5674</span><ArrowUpRight size={18}/></a>
              <a data-testid="link-contact-email" href="mailto:office@nplast996.com" className="flex items-center justify-between border-b border-white/30 py-5 text-base font-semibold transition hover:text-[#f0d46a] sm:text-xl"><span className="flex items-center gap-4"><Mail size={19}/> office@nplast996.com</span><ArrowUpRight size={18}/></a>
              <a href="https://maps.google.com/?q=Branislava+Nusica+42,+Stara+Pazova" target="_blank" rel="noreferrer" className="flex items-center justify-between py-5 text-sm transition hover:text-[#f0d46a] sm:text-base"><span className="flex items-center gap-4"><MapPin size={19}/> Branislava Nušića 42, Stara Pazova</span><ArrowUpRight size={18}/></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#182331] py-7 text-[#f8f5ec]">
        <div className="section-wrap flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <a href="#top" className="flex items-center gap-3"><img src="/images/logo1.png" alt="" className="h-10 w-12 object-contain"/><span className="font-display text-sm font-bold">N PLAST <span className="text-[#e7c95d]">996</span></span></a>
          <p className="eyebrow text-[9px] text-white/55">Brzo · Kvalitetno · Povoljno</p>
          <a href="#top" className="arrow-link inline-flex items-center gap-2 text-xs text-white/75 hover:text-white">Nazad na vrh <ChevronDown size={14} className="rotate-180"/></a>
        </div>
      </footer>
    </div>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Router />
    </WouterRouter>
  );
}

export default App;
