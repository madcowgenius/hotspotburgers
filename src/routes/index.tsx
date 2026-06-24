import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import hero from "@/assets/hero.asset.json";
import logo from "@/assets/hotspot-logo.asset.json";
import burger1 from "@/assets/burger1.asset.json";
import stack from "@/assets/stack.asset.json";
import kota1 from "@/assets/kota1.asset.json";
import sub1 from "@/assets/sub1.asset.json";
import sub2 from "@/assets/sub2.asset.json";
import subs from "@/assets/subs.asset.json";
import duo from "@/assets/duo.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hotspot Takeaway & Catering — Windhoek West" },
      { name: "description", content: "Loaded burgers, kotas, gourmet subs and full-service catering in Windhoek. Call +264 81 365 2649." },
      { property: "og:title", content: "Hotspot Takeaway & Catering — Windhoek West" },
      { property: "og:description", content: "Loaded burgers, kotas, gourmet subs and full-service catering in Windhoek." },
      { property: "og:image", content: hero.url },
      { name: "twitter:image", content: hero.url },
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
          <a href="#top" className="flex items-center gap-2">
            <img src={logo.url} alt="Hotspot — Simply Breathtaking" className="h-12 w-auto" />
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
              Hotspot serves the boldest burgers, kotas and gourmet subs in Windhoek — plus full-service catering for events that need to taste as good as they look.
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
            <div className="absolute -inset-6 bg-primary/20 rounded-[2.5rem] blur-3xl" />
            <img src={hero.url} alt="Hotspot signature loaded burger" className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square" />
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl px-5 py-3 shadow-xl rotate-[-4deg]">
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
            <img src={duo.url} alt="Burger pair" className="rounded-2xl aspect-square object-cover col-span-2" />
            <img src={subs.url} alt="Sub platter" className="rounded-2xl aspect-square object-cover" />
            <img src={kota1.url} alt="Kota" className="rounded-2xl aspect-square object-cover" />
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
        <div className="max-w-7xl mx-auto px-5 flex flex-wrap justify-between gap-4 text-sm">
          <div className="font-display text-background text-xl">HOTSPOT TAKEAWAY & CATERING</div>
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
  category: "Starters" | "Mains" | "Sides" | "Drinks";
};

const MENU_ITEMS: MenuItem[] = [
  { img: sub1.url, name: "Chicken Strips", desc: "Crispy buttermilk chicken strips with house dipping sauce.", price: "N$ 55", category: "Starters" },
  { img: sub2.url, name: "Loaded Nachos", desc: "Corn chips, cheese sauce, jalapeños, salsa & sour cream.", price: "N$ 65", category: "Starters" },
  { img: kota1.url, name: "Wings Basket (6)", desc: "Saucy chicken wings — BBQ, peri-peri or lemon-pepper.", price: "N$ 60", category: "Starters" },

  { img: burger1.url, name: "Signature Burger", desc: "Juicy patty, smoked bacon, two sauces, sesame bun.", price: "N$ 75", category: "Mains" },
  { img: stack.url, name: "Double Stack", desc: "Double beef, bacon, crispy chips & cheese sauce.", price: "N$ 110", category: "Mains" },
  { img: hero.url, name: "Garlic Bomb Burger", desc: "Garlic-butter bun, patty, salsa & pink sauce drip.", price: "N$ 85", category: "Mains" },
  { img: kota1.url, name: "Hotspot Kota", desc: "Crusty roll loaded with russian, slaw, cheese & sauce.", price: "N$ 65", category: "Mains" },
  { img: sub1.url, name: "Loaded Sub", desc: "Long roll piled with meats, slaw & shredded cheese.", price: "N$ 95", category: "Mains" },
  { img: sub2.url, name: "Bacon & Egg Sub", desc: "Crispy bacon, fried egg, chips & double-sauce drizzle.", price: "N$ 90", category: "Mains" },

  { img: stack.url, name: "Slap Chips", desc: "Golden hand-cut chips with Hotspot salt.", price: "N$ 35", category: "Sides" },
  { img: stack.url, name: "Cheesy Chips", desc: "Chips smothered in melted cheese sauce.", price: "N$ 50", category: "Sides" },
  { img: duo.url, name: "Onion Rings", desc: "Crispy battered onion rings, served hot.", price: "N$ 40", category: "Sides" },
  { img: subs.url, name: "Coleslaw", desc: "Fresh creamy slaw, the perfect cool side.", price: "N$ 25", category: "Sides" },

  { img: hero.url, name: "Coke / Fanta / Sprite", desc: "Ice-cold 330ml can.", price: "N$ 18", category: "Drinks" },
  { img: hero.url, name: "Bottled Water", desc: "Still 500ml.", price: "N$ 15", category: "Drinks" },
  { img: hero.url, name: "Iced Tea", desc: "Peach or lemon, 330ml.", price: "N$ 20", category: "Drinks" },
  { img: hero.url, name: "Milkshake", desc: "Chocolate, vanilla or strawberry — thick & creamy.", price: "N$ 45", category: "Drinks" },
];

const CATEGORIES = ["All", "Starters", "Mains", "Sides", "Drinks"] as const;

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
              <article key={item.name} className="group bg-background text-foreground rounded-2xl overflow-hidden hover:-translate-y-1 transition shadow-lg">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={item.img} alt={item.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
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

