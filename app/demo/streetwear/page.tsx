import type { Metadata } from "next";
import {
  DemoButton,
  DemoFooter,
  DemoHeading,
  DemoSection,
} from "../components/DemoPrimitives";

export const metadata: Metadata = {
  title: "After/Hours | Streetwear Demo",
  description:
    "An edgy streetwear e-commerce concept page for Cantrell Digital demos.",
};

const featuredProducts = [
  {
    name: "Signal Bomber",
    price: "$148",
    palette: "from-[#1c1c1c] via-[#0d0d0d] to-[#f43f5e]",
  },
  {
    name: "Static Mesh Tee",
    price: "$58",
    palette: "from-[#ffffff] via-[#c8d1d8] to-[#4ade80]",
  },
  {
    name: "Transit Cargo",
    price: "$118",
    palette: "from-[#202327] via-[#585d63] to-[#3b82f6]",
  },
  {
    name: "Night Shift Hoodie",
    price: "$96",
    palette: "from-[#0a0a0a] via-[#27272a] to-[#f59e0b]",
  },
];

const collections = [
  {
    title: "Summer Drop",
    copy: "High-contrast layers, washed textures, and campaign pieces built around heat and movement.",
  },
  {
    title: "Essentials",
    copy: "Core silhouettes in heavy cotton, utility nylon, and monochrome palettes that stay in rotation.",
  },
];

export default function StreetwearDemoPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <DemoSection className="overflow-hidden pt-6 sm:pt-8">
        <div className="flex items-center justify-between border border-white/10 bg-white/5 px-4 py-3 text-[11px] uppercase tracking-[0.28em] text-white/60 backdrop-blur sm:px-6">
          <span>After/Hours</span>
          <span>Drop 04 live now</span>
        </div>

        <div className="grid gap-4 pb-16 pt-4 lg:grid-cols-[1.15fr_0.85fr] lg:grid-rows-[auto_auto] lg:pb-20">
          <div className="relative overflow-hidden border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(244,63,94,0.28),_transparent_35%),linear-gradient(135deg,#111111,#050505_55%,#121212)] px-6 py-12 sm:px-8 sm:py-14 lg:row-span-2 lg:min-h-[42rem] lg:px-10 lg:py-12">
            <div className="absolute inset-y-0 right-[8%] hidden w-px bg-white/12 lg:block" />
            <div className="absolute bottom-0 left-0 h-40 w-40 bg-[#f43f5e]/25 blur-3xl" />
            <p className="text-xs uppercase tracking-[0.32em] text-white/45">
              Streetwear brand concept
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold uppercase leading-none tracking-[-0.06em] sm:text-7xl lg:text-[7.5rem]">
              Uniform for the hours after dark.
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/68 sm:text-base">
              A campaign-led storefront concept with aggressive typography,
              bold blocks, and retail sections arranged like an editorial spread.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <DemoButton
                href="#products"
                className="rounded-none bg-white px-7 text-black hover:bg-white/90"
              >
                Shop Featured
              </DemoButton>
              <DemoButton
                href="#collections"
                variant="outline"
                className="rounded-none border-white/20 text-white"
              >
                Explore Collections
              </DemoButton>
            </div>
            <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
              <div className="border border-white/10 bg-white/[0.03] p-4">
                <p className="text-3xl font-semibold tracking-tight">04</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.24em] text-white/45">
                  Seasonal drops
                </p>
              </div>
              <div className="border border-white/10 bg-white/[0.03] p-4">
                <p className="text-3xl font-semibold tracking-tight">48h</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.24em] text-white/45">
                  Early access window
                </p>
              </div>
              <div className="border border-white/10 bg-white/[0.03] p-4">
                <p className="text-3xl font-semibold tracking-tight">NY / LA</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.24em] text-white/45">
                  Shipping hubs
                </p>
              </div>
            </div>
          </div>

          <div className="border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),transparent_40%),linear-gradient(160deg,#141414,#080808)] p-5">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
              Campaign frame 01
            </p>
            <div className="mt-4 min-h-[16rem] bg-[linear-gradient(135deg,#ffffff_0%,#9ca3af_30%,#111827_70%,#f43f5e_100%)]" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="border border-white/10 bg-[linear-gradient(135deg,#0d0d0d,#111827_65%,#3b82f6)] p-5">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                Drop note
              </p>
              <p className="mt-4 text-2xl font-medium uppercase tracking-tight">
                Technical layers.
                <br />
                Utility finish.
              </p>
            </div>
            <div className="border border-white/10 bg-[linear-gradient(135deg,#0d0d0d,#1f2937_55%,#4ade80)] p-5">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                Restock
              </p>
              <p className="mt-4 text-2xl font-medium uppercase tracking-tight">
                Core tees back
                <br />
                in heavy cotton.
              </p>
            </div>
          </div>
        </div>
      </DemoSection>

      <DemoSection id="products" className="pb-18 lg:pb-22">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <DemoHeading
            eyebrow="Featured Products"
            title="Grid-first merchandising with bold contrast and quick scanability."
            description="The product grid is designed to feel like a modern fashion release page rather than a generic storefront template."
          />
          <a href="#" className="text-sm uppercase tracking-[0.28em] text-white/50 transition hover:text-white">
            View all products
          </a>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product, index) => (
            <article
              key={product.name}
              className="group border border-white/10 bg-white/[0.02] p-3 transition duration-300 hover:-translate-y-1 hover:border-white/22"
            >
              <div
                className={`min-h-[20rem] bg-gradient-to-br ${product.palette} transition duration-500 group-hover:scale-[1.02]`}
              />
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.26em] text-white/40">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </p>
                  <h3 className="mt-2 text-xl font-medium uppercase tracking-tight">
                    {product.name}
                  </h3>
                </div>
                <p className="text-sm font-medium text-white/78">{product.price}</p>
              </div>
            </article>
          ))}
        </div>
      </DemoSection>

      <DemoSection
        id="collections"
        className="border-y border-white/10 bg-white/[0.02] py-18 lg:py-22"
      >
        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <DemoHeading
            eyebrow="Collections"
            title="Two collection stories, each with its own mood and utility."
            description="Collection modules help position the brand as editorial and curated, which is especially useful for fashion and product-led businesses."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {collections.map((collection, index) => (
              <article
                key={collection.title}
                className="relative overflow-hidden border border-white/10 p-6"
              >
                <div
                  className={`absolute inset-0 ${
                    index === 0
                      ? "bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.24),_transparent_38%),linear-gradient(160deg,#0a0a0a,#141414)]"
                      : "bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.24),_transparent_38%),linear-gradient(160deg,#0a0a0a,#13161d)]"
                  }`}
                />
                <div className="relative">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/45">
                    Collection {index + 1}
                  </p>
                  <h3 className="mt-8 text-4xl font-semibold uppercase tracking-[-0.04em]">
                    {collection.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-7 text-white/68">
                    {collection.copy}
                  </p>
                  <a
                    href="#"
                    className="mt-8 inline-flex text-sm uppercase tracking-[0.24em] text-white transition hover:text-[#f43f5e]"
                  >
                    Shop collection
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </DemoSection>

      <DemoSection className="py-18 lg:py-22">
        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="border border-white/10 bg-[linear-gradient(135deg,#0d0d0d,#0b1220_60%,#f43f5e)] p-6 sm:p-8">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
              Editorial panel
            </p>
            <h2 className="mt-6 max-w-2xl text-4xl font-semibold uppercase tracking-[-0.04em] sm:text-5xl">
              Built to feel like a campaign, not just a catalog.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/70">
              For fashion brands, the distinction matters. The layout mixes product, attitude, and release energy so the site sells identity as much as inventory.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="border border-white/10 bg-[linear-gradient(135deg,#111111,#1f2937_70%,#ffffff)] p-6">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                Shipping
              </p>
              <p className="mt-4 text-2xl font-medium uppercase tracking-tight">
                Free on U.S. orders over $150
              </p>
            </div>
            <div className="border border-white/10 bg-[linear-gradient(135deg,#111111,#3f3f46_70%,#f59e0b)] p-6">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                Members
              </p>
              <p className="mt-4 text-2xl font-medium uppercase tracking-tight">
                Text list gets first access to every drop
              </p>
            </div>
          </div>
        </div>
      </DemoSection>

      <DemoSection className="pb-14 lg:pb-18">
        <div className="border border-white/10 bg-white/[0.03] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <DemoHeading
              eyebrow="Newsletter"
              title="Get the next drop before everyone else."
              description="This signup module is intentionally simple and campaign-driven. It gives the page a strong conversion point without requiring backend form work for the demo."
            />
            <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
              <input
                type="email"
                placeholder="Email address"
                className="min-h-14 border border-white/12 bg-black px-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-white/28"
              />
              <button
                type="button"
                className="min-h-14 bg-white px-6 text-sm font-medium uppercase tracking-[0.24em] text-black transition hover:bg-[#f43f5e] hover:text-white"
              >
                Join
              </button>
            </div>
          </div>
        </div>
      </DemoSection>

      <DemoFooter
        brand="After/Hours"
        className="text-white"
        links={[
          { label: "Featured", href: "#products" },
          { label: "Collections", href: "#collections" },
          { label: "Newsletter", href: "#" },
        ]}
      />
    </main>
  );
}
