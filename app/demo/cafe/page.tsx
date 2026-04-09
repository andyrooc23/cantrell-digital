import type { Metadata } from "next";
import {
  DemoButton,
  DemoFooter,
  DemoHeading,
  DemoImageCard,
  DemoSection,
  DemoStat,
} from "../components/DemoPrimitives";

export const metadata: Metadata = {
  title: "Juniper & Pine | Cafe Demo",
  description:
    "A warm, artisan-inspired cafe and lifestyle shop concept page for Cantrell Digital demos.",
};

const categories = [
  {
    name: "Coffee Bar",
    description:
      "Seasonal pour-overs, signature lattes, and small-batch beans roasted with caramel warmth and a clean finish.",
    accent: "from-[#b67b4d] via-[#d9b08c] to-[#f2e7d7]",
  },
  {
    name: "House Plants",
    description:
      "Low-maintenance greens, ceramic planters, and shelf-friendly arrangements that bring the shop home with you.",
    accent: "from-[#3d5a40] via-[#76926c] to-[#d6e0d3]",
  },
  {
    name: "Stationery",
    description:
      "Tactile journals, brass pens, greeting cards, and desk details chosen for slow mornings and good ideas.",
    accent: "from-[#8d6e63] via-[#c3a58b] to-[#efe2d3]",
  },
];

const events = [
  {
    date: "APR 12",
    title: "Vinyl & Candlelight",
    copy: "An acoustic trio, soft lamp glow, and late-night espresso tonics from 7 to 10.",
  },
  {
    date: "APR 19",
    title: "Open Mic in the Garden Room",
    copy: "Poetry, stripped-back sets, and a standing menu of cardamom buns and chai.",
  },
  {
    date: "APR 26",
    title: "Saturday Night Folk Session",
    copy: "A neighborhood favorite with local artists, rotating pastries, and window seats that fill fast.",
  },
];

const gallery = [
  {
    title: "Morning light, first pour",
    className: "min-h-[320px] bg-gradient-to-br from-[#efd9bd] via-[#d6b188] to-[#89624a]",
  },
  {
    title: "Reading corner",
    className: "min-h-[220px] bg-gradient-to-br from-[#dfe7d9] via-[#aab89f] to-[#62735d]",
  },
  {
    title: "Handmade paper goods",
    className: "min-h-[220px] bg-gradient-to-br from-[#f8f2ea] via-[#e5d4c1] to-[#b18b6a]",
  },
  {
    title: "Night set-up",
    className: "min-h-[320px] bg-gradient-to-br from-[#8a6244] via-[#4b382f] to-[#231b18]",
  },
];

export default function CafeDemoPage() {
  return (
    <main className="min-h-screen bg-[#f6efe7] text-[#3e3129]">
      <DemoSection className="relative overflow-hidden pt-6 sm:pt-8">
        <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top,_rgba(219,182,141,0.45),_transparent_52%)]" />
        <div className="flex items-center justify-between rounded-full border border-[#cdb59a] bg-white/70 px-4 py-3 text-xs uppercase tracking-[0.24em] text-[#6c5748] shadow-[0_14px_40px_-24px_rgba(80,55,35,0.45)] backdrop-blur sm:px-6">
          <span>Juniper & Pine</span>
          <span>coffee • plants • paper</span>
        </div>

        <div className="grid gap-10 pb-20 pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:pb-28">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.28em] text-[#7b6658]">
              Lifestyle cafe concept
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Slow mornings, good coffee, and little things worth taking home.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f4d41] sm:text-lg">
              Juniper & Pine blends an artisan cafe, boutique plant shop, and
              stationery counter into one warm neighborhood destination. Every
              corner is designed to invite people to linger.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <DemoButton
                href="#visit"
                className="bg-[#4a6a4b] text-[#f8f3ec] hover:bg-[#3e5a3f]"
              >
                Plan Your Visit
              </DemoButton>
              <DemoButton
                href="#music"
                variant="outline"
                className="border-[#7b6658]/25 text-[#5c483b]"
              >
                See Live Music Nights
              </DemoButton>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <DemoStat label="Locally Sourced" value="92%" />
              <DemoStat label="Community Events" value="18 / mo" />
              <DemoStat label="Favorite Window Seats" value="14" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-8 hidden h-32 w-32 rounded-full bg-[#c2d0ba]/65 blur-3xl sm:block" />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-[#d7c6b4] bg-[#f8f2ea] p-4 shadow-[0_30px_60px_-32px_rgba(68,45,29,0.38)] sm:translate-y-10">
                <div className="min-h-[250px] rounded-[1.5rem] bg-gradient-to-br from-[#e8d4bb] via-[#d9b18d] to-[#8d6249]" />
                <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[#7e6958]">
                  Signature drinks
                </p>
                <p className="mt-2 text-xl font-medium">
                  Orange blossom latte with cardamom cream.
                </p>
              </div>
              <div className="space-y-4">
                <div className="rounded-[2rem] border border-[#d7c6b4] bg-white/75 p-4 shadow-[0_30px_60px_-32px_rgba(68,45,29,0.28)]">
                  <div className="min-h-[180px] rounded-[1.5rem] bg-gradient-to-br from-[#dde6d7] via-[#a9b99d] to-[#586d57]" />
                  <p className="mt-4 text-lg font-medium">Green shelves, soft light</p>
                </div>
                <div className="rounded-[2rem] border border-[#d7c6b4] bg-[#f3e7d9] p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#7b6658]">
                    This week at the shop
                  </p>
                  <p className="mt-3 text-2xl font-medium">
                    Friday night folk set with house-made affogatos until 10.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DemoSection>

      <DemoSection id="about" className="pb-20 lg:pb-28">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-16">
          <div className="rounded-[2rem] border border-[#dbc9b6] bg-white/75 p-8 shadow-[0_22px_60px_-34px_rgba(80,55,35,0.34)]">
            <DemoHeading
              eyebrow="Our Story"
              title="Made for neighbors who love the ritual as much as the product."
              description="Part cafe, part curated shop, Juniper & Pine was imagined as a room you keep wanting to come back to: warm wood, hand-thrown ceramics, shelves of paper goods, and music drifting in after sunset."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {categories.map((category) => (
              <article
                key={category.name}
                className="rounded-[2rem] border border-[#dbc9b6] bg-[#fcf8f3] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-28px_rgba(80,55,35,0.35)]"
              >
                <div
                  className={`h-40 rounded-[1.5rem] bg-gradient-to-br ${category.accent}`}
                />
                <h3 className="mt-5 text-2xl font-medium">{category.name}</h3>
                <p className="mt-3 text-sm leading-7 text-[#655246]">
                  {category.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </DemoSection>

      <DemoSection
        id="music"
        className="bg-[#ece2d6] py-20 text-[#3d2d24] lg:py-24"
      >
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <DemoHeading
            eyebrow="Live Music Nights"
            title="After-hours events that make the shop feel like a secret worth sharing."
            description="Intimate performances, rotating menus, and a calendar designed to pull regulars back through the door. This section sells atmosphere as much as it sells events."
          />
          <div className="space-y-4">
            {events.map((event) => (
              <article
                key={event.title}
                className="flex flex-col gap-4 rounded-[1.75rem] border border-[#ccb7a2] bg-[#f8f2ea] p-5 shadow-[0_20px_45px_-30px_rgba(74,51,35,0.3)] transition duration-300 hover:-translate-y-1 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-[#4a6a4b] px-4 py-3 text-sm font-semibold tracking-[0.2em] text-[#f6efe7]">
                    {event.date}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">{event.title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-7 text-[#6a5648]">
                      {event.copy}
                    </p>
                  </div>
                </div>
                <a href="#" className="text-sm font-medium text-[#4a6a4b] transition hover:text-[#2f4430]">
                  Reserve a seat
                </a>
              </article>
            ))}
          </div>
        </div>
      </DemoSection>

      <DemoSection id="gallery" className="py-20 lg:py-24">
        <DemoHeading
          eyebrow="Gallery"
          title="An editorial-style look at the mood, textures, and details."
          description="Instead of generic filler, the gallery leans on warm gradients and composition-driven blocks to suggest photography art direction for the final build."
          align="center"
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <DemoImageCard title={gallery[0].title} className={gallery[0].className} />
          <div className="grid gap-4">
            <DemoImageCard title={gallery[1].title} className={gallery[1].className} />
            <DemoImageCard title={gallery[2].title} className={gallery[2].className} />
          </div>
          <DemoImageCard
            title={gallery[3].title}
            className={`${gallery[3].className} lg:col-span-2`}
          />
        </div>
      </DemoSection>

      <DemoSection id="visit" className="pb-14 lg:pb-18">
        <div className="rounded-[2.25rem] border border-[#d6c2ae] bg-white/80 p-8 shadow-[0_25px_60px_-36px_rgba(80,55,35,0.35)] lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <DemoHeading
                eyebrow="Visit Us"
                title="Corner storefront energy, tucked into a walkable block."
                description="This concept is built to reassure new visitors quickly: where you are, when you are open, and what kind of experience they can expect when they arrive."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[#7b6658]">
                    Address
                  </p>
                  <p className="mt-2 text-lg font-medium">214 Alder Street</p>
                  <p className="text-sm text-[#675346]">Portland, OR 97205</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[#7b6658]">
                    Hours
                  </p>
                  <p className="mt-2 text-lg font-medium">Mon-Sat 7a-9p</p>
                  <p className="text-sm text-[#675346]">Sun 8a-6p</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[#7b6658]">
                    Contact
                  </p>
                  <p className="mt-2 text-lg font-medium">(503) 555-0148</p>
                  <p className="text-sm text-[#675346]">hello@juniperandpine.co</p>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] bg-gradient-to-br from-[#e8d4bb] via-[#f6efe7] to-[#c7d4bd] p-4">
              <div className="min-h-[320px] rounded-[1.6rem] border border-white/60 bg-[linear-gradient(135deg,rgba(74,106,75,0.2),rgba(255,255,255,0.55)),linear-gradient(90deg,transparent_49%,rgba(74,106,75,0.12)_50%,transparent_51%),linear-gradient(transparent_49%,rgba(74,106,75,0.12)_50%,transparent_51%)] bg-[length:auto,68px_68px,68px_68px] p-6">
                <div className="flex h-full flex-col justify-between rounded-[1.4rem] border border-[#4a6a4b]/15 bg-white/45 p-6 backdrop-blur-sm">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-[#6f5b4c]">
                      Neighborhood map
                    </p>
                    <p className="mt-3 max-w-sm text-xl font-medium">
                      A gentle map mockup block that suggests a polished location module without needing real embed functionality.
                    </p>
                  </div>
                  <DemoButton
                    href="#"
                    className="w-full bg-[#3d2d24] text-[#f8f2ea] sm:w-auto"
                  >
                    Get Directions
                  </DemoButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DemoSection>

      <DemoFooter
        brand="Juniper & Pine"
        className="text-[#5f4d41]"
        links={[
          { label: "About", href: "#about" },
          { label: "Music", href: "#music" },
          { label: "Gallery", href: "#gallery" },
          { label: "Visit", href: "#visit" },
        ]}
      />
    </main>
  );
}
