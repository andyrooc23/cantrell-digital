import type { Metadata } from "next";
import {
  DemoButton,
  DemoFooter,
  DemoHeading,
  DemoImageCard,
  DemoSection,
} from "../components/DemoPrimitives";

export const metadata: Metadata = {
  title: "After/Hours | Streetwear Demo",
  description:
    "A bold streetwear label built around limited drops, strong identity, and campaign-driven product releases.",
};

const featuredProducts = [
  {
    name: "Signal Bomber",
    price: "$148",
    palette: "from-[#18181b] via-[#09090b] to-[#f43f5e]",
  },
  {
    name: "Static Mesh Tee",
    price: "$58",
    palette: "from-[#111827] via-[#0f172a] to-[#4ade80]",
  },
  {
    name: "Transit Cargo",
    price: "$118",
    palette: "from-[#27272a] via-[#18181b] to-[#3b82f6]",
  },
  {
    name: "Night Shift Hoodie",
    price: "$96",
    palette: "from-[#09090b] via-[#3f3f46] to-[#f59e0b]",
  },
];

const collections = [
  {
    title: "Summer Drop",
    copy: "Lightweight layers, washed textures, and sharp silhouettes built for heat, motion, and late nights.",
  },
  {
    title: "Essentials",
    copy: "Core silhouettes in heavy cotton, utility nylon, and monochrome palettes made to stay in rotation.",
  },
];

export default function StreetwearDemoPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <DemoSection className="overflow-hidden pt-6 sm:pt-8">
        <div className="flex items-center justify-between border border-white/10 bg-white/5 px-4 py-3 text-[11px] uppercase tracking-[0.28em] text-white/60 backdrop-blur sm:px-6">
          <span>After/Hours</span>
          <span>Drop 04 online now</span>
        </div>

        <div className="grid gap-4 pb-16 pt-4 lg:grid-cols-[1.15fr_0.85fr] lg:grid-rows-[auto_auto] lg:pb-20">
          <div className="relative overflow-hidden border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(244,63,94,0.28),_transparent_35%),linear-gradient(135deg,#111111,#050505_55%,#121212)] px-6 py-12 sm:px-8 sm:py-14 lg:row-span-2 lg:min-h-[42rem] lg:px-10 lg:py-12">
            <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(5,5,5,0.92)_0%,rgba(5,5,5,0.72)_42%,rgba(5,5,5,0.5)_100%)]" />
            <div className="absolute inset-x-[12%] top-[18%] h-40 border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_55%)]" />
            <div className="absolute left-[8%] bottom-[18%] h-28 w-28 rounded-full border border-white/10 bg-white/[0.03]" />
            <div className="absolute right-[14%] top-[24%] h-48 w-24 border border-white/10 bg-[linear-gradient(180deg,rgba(244,63,94,0.18),transparent)]" />
            <div className="absolute inset-y-0 right-[8%] hidden w-px bg-white/12 lg:block" />
            <div className="absolute bottom-0 left-0 h-40 w-40 bg-[#f43f5e]/25 blur-3xl" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.32em] text-white/45">
                Independent streetwear label
              </p>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold uppercase leading-none tracking-[-0.06em] sm:text-7xl lg:text-[7.5rem]">
                Built for the city after dark.
              </h1>
              <p className="mt-6 max-w-xl text-sm leading-7 text-white/68 sm:text-base">
                After/Hours makes utility-driven pieces with an editorial edge. Every drop is designed to feel limited, wearable, and instantly recognizable from across the room.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <DemoButton
                  href="#products"
                  className="rounded-none bg-white px-7 text-black hover:bg-white/90"
                >
                  Shop The Drop
                </DemoButton>
                <DemoButton
                  href="#collections"
                  variant="outline"
                  className="rounded-none border-white/20 text-white"
                >
                  View Collections
                </DemoButton>
              </div>
              <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
                <div className="border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm">
                  <p className="text-3xl font-semibold tracking-tight">04</p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.24em] text-white/45">
                    Limited drops
                  </p>
                </div>
                <div className="border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm">
                  <p className="text-3xl font-semibold tracking-tight">48h</p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.24em] text-white/45">
                    Members-first access
                  </p>
                </div>
                <div className="border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm">
                  <p className="text-3xl font-semibold tracking-tight">NY / LA</p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.24em] text-white/45">
                    City hubs
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),transparent_40%),linear-gradient(160deg,#141414,#080808)] p-5">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
              Campaign frame
            </p>
            <div className="relative mt-4 flex min-h-[16rem] overflow-hidden border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.22),transparent_35%),linear-gradient(135deg,#0f0f10,#050505_65%,#111827)] p-6">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),transparent_35%),linear-gradient(180deg,transparent,rgba(5,5,5,0.55))]" />
              <div className="relative mt-auto max-w-xs">
                <p className="text-[11px] uppercase tracking-[0.26em] text-white/45">
                  Release language
                </p>
                <p className="mt-3 text-2xl font-medium uppercase tracking-tight">
                  Clean lines.
                  <br />
                  Hard finish.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="border border-white/10 bg-[linear-gradient(135deg,#0d0d0d,#111827_65%,#3b82f6)] p-5">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                Drop note
              </p>
              <p className="mt-4 text-2xl font-medium uppercase tracking-tight">
                Technical layers.
                <br />
                Street-level attitude.
              </p>
            </div>
            <div className="border border-white/10 bg-[linear-gradient(135deg,#0d0d0d,#1f2937_55%,#4ade80)] p-5">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                Restock
              </p>
              <p className="mt-4 text-2xl font-medium uppercase tracking-tight">
                Core tees back
                <br />
                in heavyweight cotton.
              </p>
            </div>
          </div>
        </div>
      </DemoSection>

      <DemoSection id="products" className="pb-18 lg:pb-22">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <DemoHeading
            eyebrow="Featured Products"
            title="Core pieces from the current release."
            description="The product grid is direct and fast to scan, letting the identity, product names, and pricing do the talking."
          />
          <a href="#" className="text-sm uppercase tracking-[0.28em] text-white/50 transition hover:text-white">
            Shop everything
          </a>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product, index) => (
            <article
              key={product.name}
              className="group border border-white/10 bg-white/[0.02] p-3 transition duration-300 hover:-translate-y-1 hover:border-white/22"
            >
              <div
                className={`relative flex min-h-[20rem] overflow-hidden bg-gradient-to-br ${product.palette}`}
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_30%),linear-gradient(180deg,transparent,rgba(0,0,0,0.32))]" />
                <div className="absolute left-4 top-4 h-16 w-16 border border-white/10" />
                <div className="absolute right-4 bottom-4 h-24 w-24 rounded-full border border-white/10" />
                <div className="relative mt-auto p-4">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
                    Product card
                  </p>
                </div>
              </div>
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
            title="Two sides of the label: the new drop and the pieces that stay in rotation."
            description="Collections give the brand a point of view, helping shoppers buy into the mood and identity as much as the product itself."
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
                      ? "bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.24),_transparent_38%),linear-gradient(160deg,rgba(10,10,10,0.55),rgba(20,20,20,0.88))]"
                      : "bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.24),_transparent_38%),linear-gradient(160deg,rgba(10,10,10,0.48),rgba(19,22,29,0.9))]"
                  }`}
                />
                <div className="relative">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-white/45">
                    Edit {index + 1}
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
                    Shop this edit
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </DemoSection>

      <DemoSection className="py-18 lg:py-22">
        <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <DemoImageCard
            title="More than product shots. This is the world around the drop."
            subtitle="The layout sells identity, energy, and belonging so the brand feels like culture, not just inventory."
            className="min-h-[24rem] rounded-none border-white/10"
            overlayClassName="bg-[linear-gradient(135deg,rgba(13,13,13,0.55),rgba(11,18,32,0.55)_60%,rgba(244,63,94,0.7))]"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="border border-white/10 bg-[linear-gradient(135deg,#111111,#1f2937_70%,#ffffff)] p-6">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                Shipping
              </p>
              <p className="mt-4 text-2xl font-medium uppercase tracking-tight">
                Free U.S. shipping over $150
              </p>
            </div>
            <div className="border border-white/10 bg-[linear-gradient(135deg,#111111,#3f3f46_70%,#f59e0b)] p-6">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                Members
              </p>
              <p className="mt-4 text-2xl font-medium uppercase tracking-tight">
                Text list gets first shot at every release
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
              title="Get early access before the drop goes public."
              description="Join the list for release texts, restock alerts, and first access when new pieces go live."
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
                Join The List
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
