import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

// Real burger images from assets
import imgPresent from "@/assets/The Present.jpeg";
import imgBoss from "@/assets/The Boss.jpeg";
import imgOne from "@/assets/The One.jpeg";
import imgYesterday from "@/assets/The Yesterday.jpeg";
import imgCombo from "@/assets/The Combo.jpeg";
import imgFuture from "@/assets/The Future(Left).jpeg";
import imgFreshieHotspot from "@/assets/The Freshie (Left) and Hotspot (Right).jpeg";
import imgStefanio from "@/assets/The Stefanio's Burger.jpeg";
import imgStenio from "@/assets/The Stenio`s Burger.jpeg";
import logoImg from "@/assets/hotspot_logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hotspot Takeaway & Catering — Windhoek West" },
      { name: "description", content: "Loaded burgers, kotas, gourmet subs and full-service catering in Windhoek. Call +264 81 365 2649." },
      { property: "og:title", content: "Hotspot Takeaway & Catering — Windhoek West" },
      { property: "og:description", content: "Loaded burgers, kotas, gourmet subs and full-service catering in Windhoek." },
      { property: "og:image", content: imgBoss },
      { name: "twitter:image", content: imgBoss },
    ],
  }),
  component: Index,
});

const PHONE = "+264813652649";
const PHONE_DISPLAY = "+264 81 365 2649";
const WHATSAPP = `https://wa.me/264813652649?text=${encodeURIComponent("Hi Hotspot! I'd like to place an order.")}`;

function Index() {
  return (
    <div className="min-h-screen text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 transition hover:opacity-80">
            <img src={logoImg} alt="Hotspot Logo" className="h-12 w-auto object-contain" />
            <span className="font-display text-2xl text-foreground tracking-widest uppercase mt-1">Hotspot Burgers</span>
          </a>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#menu" className="hover:text-primary transition">Menu</a>
            <a href="#catering" className="hover:text-primary transition">Catering</a>
            <a href="#about" className="hover:text-primary transition">About</a>
            <a href="#visit" className="hover:text-primary transition">Visit</a>
          </nav>
          <a href={`tel:${PHONE}`} className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition">
            <span>📞</span> Order Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 pt-12 pb-20 md:pt-20 md:pb-28 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/30 text-foreground border border-accent/60 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Windhoek West · Open Today
            </div>
            <h1 className="font-display text-6xl md:text-8xl leading-[0.9] uppercase">
              Loaded.<br />
              <span className="text-primary">Saucy.</span><br />
              Unforgettable.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              Hotspot serves the boldest burgers in Windhoek — built fresh to order with signature sauces, generous fillings and big honest flavour. Plus full-service catering for every occasion.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:scale-[1.02] transition shadow-lg shadow-primary/30">
                Order on WhatsApp
              </a>
              <a href="#catering" className="border-2 border-foreground px-6 py-3 rounded-full font-semibold hover:bg-foreground hover:text-background transition">
                Book Catering
              </a>
            </div>
            <div className="mt-10 flex gap-8 text-sm">
              <div><div className="font-display text-3xl text-primary">100%</div><div className="text-muted-foreground">Fresh daily</div></div>
              <div><div className="font-display text-3xl text-primary">7</div><div className="text-muted-foreground">Days a week</div></div>
              <div><div className="font-display text-3xl text-primary">500+</div><div className="text-muted-foreground">Happy customers</div></div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-primary/40 rounded-[2.5rem] blur-3xl transition-opacity duration-1000" />
            <img src={imgBoss} alt="The Boss — Hotspot signature loaded burger" className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square animate-float" />
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl px-5 py-3 shadow-xl rotate-[-4deg] animate-float" style={{ animationDelay: '1s' }}>
              <div className="font-display text-2xl">★ ★ ★ ★ ★</div>
              <div className="text-xs text-muted-foreground">"Best burger in Windhoek"</div>
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <MenuSection />

      {/* CATERING */}
      <section id="catering" className="py-24">
        <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src={imgCombo} alt="The Combo" className="rounded-2xl aspect-square object-cover col-span-2" />
            <img src={imgFreshieHotspot} alt="The Freshie and Hotspot Burger" className="rounded-2xl aspect-square object-cover" />
            <img src={imgFuture} alt="The Future burgers" className="rounded-2xl aspect-square object-cover" />
          </div>
          <div>
            <div className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">Catering</div>
            <h2 className="font-display text-5xl md:text-6xl uppercase leading-none">Feed the whole crew.</h2>
            <p className="mt-5 text-lg text-muted-foreground">From office lunches to weddings and birthdays — we cater events of every size across Windhoek with platters that disappear fast.</p>
            <ul className="mt-8 space-y-3">
              {[
                "Corporate lunches & meetings",
                "Weddings, birthdays & private parties",
                "Conferences, school events & functions",
                "Custom menus & dietary options",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-primary text-primary-foreground inline-flex items-center justify-center text-xs font-bold">✓</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-8 inline-flex bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
              Request a Catering Quote
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-accent/20 py-24 border-y border-border">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <div className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">About Hotspot</div>
          <h2 className="font-display text-5xl md:text-6xl uppercase">Windhoek's flavour HQ</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Born in Windhoek West and built around big, honest flavour. We grill, stack, and load every order to order — because takeaway should never taste like an afterthought. Walk in, call ahead, or let us cater your next big moment.
          </p>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="py-24">
        <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-3 gap-6">
          {[
            { title: "Find Us", body: "Hadyn Street\nWindhoek West\nNamibia", icon: "📍" },
            { title: "Call / WhatsApp", body: PHONE_DISPLAY, icon: "📞", href: `tel:${PHONE}` },
            { title: "Hours", body: "Mon – Sun\n10:00 – 22:00", icon: "🕒" },
          ].map((c) => (
            <div key={c.title} className="bg-card border border-border rounded-2xl p-8 hover:border-primary transition">
              <div className="text-4xl mb-4">{c.icon}</div>
              <h3 className="font-display text-2xl uppercase mb-3">{c.title}</h3>
              {c.href ? (
                <a href={c.href} className="text-lg font-medium whitespace-pre-line hover:text-primary">{c.body}</a>
              ) : (
                <p className="text-lg whitespace-pre-line text-muted-foreground">{c.body}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <h2 className="font-display text-5xl md:text-7xl uppercase leading-none">Hungry yet?</h2>
          <p className="mt-4 text-primary-foreground/80 text-lg">Order now — fresh, fast, and loaded just the way you like it.</p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a href={`tel:${PHONE}`} className="bg-background text-foreground px-6 py-3 rounded-full font-semibold hover:scale-105 transition">📞 {PHONE_DISPLAY}</a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="bg-foreground text-background px-6 py-3 rounded-full font-semibold hover:scale-105 transition">WhatsApp Us</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background/70 py-8">
        <div className="max-w-7xl mx-auto px-5 flex flex-wrap items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Hotspot Logo" className="h-10 w-auto object-contain bg-background/95 p-1 rounded-lg" />
            <div className="font-display text-background text-xl hidden sm:block">HOTSPOT TAKEAWAY & CATERING</div>
          </div>
          <div>Hadyn Street, Windhoek West · {PHONE_DISPLAY}</div>
        </div>
      </footer>
    </div>
  );
}

type MenuItem = {
  img: string;
  name: string;
  desc: string;
  price: string;
  category: "Burgers" | "Combos";
};

const MENU_ITEMS: MenuItem[] = [
  {
    img: imgPresent,
    name: "The Present",
    desc: "Diced Russians, Polony, Fancy Lettuce & Cheese.",
    price: "N$ 30",
    category: "Burgers",
  },
  {
    img: imgBoss,
    name: "The Boss",
    desc: "Chips, Meat Patty, Diced Russians, Fancy Lettuce, Polony and an Egg.",
    price: "N$ 55",
    category: "Burgers",
  },
  {
    img: imgOne,
    name: "The One",
    desc: "Diced Russians, Chips, Fancy Lettuce & Cheese.",
    price: "N$ 35",
    category: "Burgers",
  },
  {
    img: imgYesterday,
    name: "The Yesterday",
    desc: "Diced Russians, Meats, Chips & Egg.",
    price: "N$ 38",
    category: "Burgers",
  },
  {
    img: imgFreshieHotspot,
    name: "The Freshie",
    desc: "Diced Russians, Meat Patty, Fancy Lettuce & Cheese.",
    price: "N$ 35",
    category: "Burgers",
  },
  {
    img: imgFreshieHotspot,
    name: "HotSpot Burger",
    desc: "Chips, Meat Patty, Diced Russians & Cheese.",
    price: "N$ 40",
    category: "Burgers",
  },
  {
    img: imgFuture,
    name: "The Double or Nothing",
    desc: "Chips, 2x Meat Patties and an Egg.",
    price: "N$ 50",
    category: "Burgers",
  },
  {
    img: imgFuture,
    name: "The Boss Double",
    desc: "Chips, 2x Meat Patty, an Egg, Fancy Lettuce & Cheese.",
    price: "N$ 70",
    category: "Burgers",
  },
  {
    img: imgStefanio,
    name: "The Stefanio's Burger",
    desc: "Chips, Meat Patty, Chicken Strip & Cheese.",
    price: "N$ 35",
    category: "Burgers",
  },
  {
    img: imgStenio,
    name: "The Stenio's Burger",
    desc: "Diced Russians, Meat Patty, Chips.",
    price: "N$ 30",
    category: "Burgers",
  },
  {
    img: imgCombo,
    name: "The Combo",
    desc: "The Yesterday and The One — two legendary burgers in one deal.",
    price: "N$ 60",
    category: "Combos",
  },
];

const CATEGORIES = ["All", "Burgers", "Combos"] as const;

function MenuSection() {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return MENU_ITEMS.filter((i) => {
      const inCat = category === "All" || i.category === category;
      const inQuery = !q || i.name.toLowerCase().includes(q) || i.desc.toLowerCase().includes(q);
      return inCat && inQuery;
    });
  }, [category, query]);

  return (
    <section id="menu" className="bg-foreground text-background py-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-accent font-semibold uppercase tracking-widest text-sm mb-2">Our Menu</div>
            <h2 className="font-display text-5xl md:text-6xl uppercase">Made to be devoured</h2>
          </div>
          <p className="max-w-sm text-background/70">Every order is built fresh — toasted buns, signature sauces, generous fillings. No shortcuts.</p>
        </div>

        {/* Search + Filters */}
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-8">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => {
              const active = c === category;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide transition border ${
                    active
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-transparent text-background/80 border-background/20 hover:border-accent hover:text-accent"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
          <div className="relative md:w-72">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the menu…"
              aria-label="Search menu"
              className="w-full bg-background/10 border border-background/20 rounded-full px-5 py-2.5 text-sm text-background placeholder:text-background/50 focus:outline-none focus:border-accent"
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16 text-background/60">
            No items match "{query}". Try a different search or category.
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <article key={item.name} className="group bg-background text-foreground rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary/40 border border-transparent hover:border-primary/50 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />
                <div className="aspect-[4/3] overflow-hidden relative bg-muted/20 p-2">
                  <div className="w-full h-full rounded-xl overflow-hidden">
                    <img src={item.img} alt={item.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <span className="absolute top-3 left-3 bg-foreground/80 text-background text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-2xl uppercase">{item.name}</h3>
                    <span className="font-display text-xl text-primary">{item.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <a href={`tel:${PHONE}`} className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
            Call to order — {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
