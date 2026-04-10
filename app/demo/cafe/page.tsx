import type { Metadata } from "next";
import Image from "next/image";
import cafeCoffeeImage from "@/public/images/demo/cafe/coffee.jpeg";
import cafeHeroImage from "@/public/images/demo/cafe/hero.jpeg";
import cafeMusicImage from "@/public/images/demo/cafe/live-music.jpg";
import cafePlantsImage from "@/public/images/demo/cafe/plants.jpeg";
import cafeStationeryImage from "@/public/images/demo/cafe/stationery.jpg";
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
    "A warm neighborhood cafe with a curated retail shop, live music nights, and an inviting local feel.",
};

const categories = [
  {
    name: "Coffee Bar",
    description:
      "Seasonal pour-overs, house lattes, and small-batch beans roasted for a smooth, balanced cup that keeps regulars coming back.",
    image: cafeCoffeeImage,
    alt: "Espresso and pastry set on a warm wooden cafe table",
    imageClassName: "object-[center_62%]",
  },
  {
    name: "House Plants",
    description:
      "Easy-care plants, ceramic planters, and shelf-ready greens chosen to make home feel a little more alive.",
    image: cafePlantsImage,
    alt: "Green house plants styled on shelves inside the cafe shop",
    imageClassName: "object-center",
  },
  {
    name: "Stationery",
    description:
      "Journals, paper goods, and desk details picked for people who still love handwritten notes and thoughtful gifting.",
    image: cafeStationeryImage,
    alt: "Stationery and paper goods arranged for a boutique retail display",
    imageClassName: "object-[center_42%]",
  },
];

const events = [
  {
    date: "APR 12",
    title: "Vinyl & Candlelight",
    copy: "An acoustic trio, candlelit tables, and espresso tonics poured late from 7 to 10.",
  },
  {
    date: "APR 19",
    title: "Open Mic in the Garden Room",
    copy: "Poetry, stripped-back sets, and a standing menu of cardamom buns, chai, and soft conversation.",
  },
  {
    date: "APR 26",
    title: "Saturday Night Folk Session",
    copy: "A neighborhood favorite with local artists, rotating pastries, and window seats that disappear early.",
  },
];

const gallery = [
  {
    title: "Morning light, first pour",
    src: cafeHeroImage,
    alt: "Sunlit cafe interior with layered wood tones and soft morning light",
    className: "min-h-[320px]",
    imageClassName: "object-[center_34%]",
  },
  {
    title: "Reading corner",
    src: cafePlantsImage,
    alt: "Plant-filled corner with cozy seating and natural light",
    className: "min-h-[220px]",
    imageClassName: "object-center",
  },
  {
    title: "Handmade paper goods",
    src: cafeStationeryImage,
    alt: "Close-up of journals, pens, and paper goods styled on a table",
    className: "min-h-[220px]",
    imageClassName: "object-[center_45%]",
  },
  {
    title: "Night set-up",
    src: cafeMusicImage,
    alt: "Live music setup inside a warmly lit cafe at night",
    className: "min-h-[320px]",
    imageClassName: "object-center",
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
              Neighborhood cafe and shop
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Coffee worth lingering over, in a place that feels like part of the neighborhood.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f4d41] sm:text-lg">
              Juniper & Pine brings together a coffee bar, plant shop, and paper counter under one warm roof. It is the kind of corner spot people come to for the latte, then stay for the atmosphere.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <DemoButton
                href="#visit"
                className="bg-[#4a6a4b] text-[#f8f3ec] hover:bg-[#3e5a3f]"
              >
                Stop By This Week
              </DemoButton>
              <DemoButton
                href="#music"
                variant="outline"
                className="border-[#7b6658]/25 text-[#5c483b]"
              >
                See What&apos;s On
              </DemoButton>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <DemoStat label="Beans From Regional Roasters" value="92%" />
              <DemoStat label="Community Nights Each Month" value="18" />
              <DemoStat label="Window Seats Worth Claiming" value="14" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-8 hidden h-32 w-32 rounded-full bg-[#c2d0ba]/65 blur-3xl sm:block" />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-[#d7c6b4] bg-[#f8f2ea] p-4 shadow-[0_30px_60px_-32px_rgba(68,45,29,0.38)] sm:translate-y-10">
                <div className="relative min-h-[340px] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={cafeHeroImage}
                    alt="Cozy artisan cafe interior with wood, plants, and seating"
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, 28vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#35261d]/60 via-[#35261d]/15 to-transparent" />
                </div>
                <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[#7e6958]">
                  Inside the shop
                </p>
                <p className="mt-2 text-xl font-medium">
                  Warm wood, soft light, and just enough bustle to make the room feel alive.
                </p>
              </div>
              <div className="space-y-4">
                <div className="rounded-[2rem] border border-[#d7c6b4] bg-white/75 p-4 shadow-[0_30px_60px_-32px_rgba(68,45,29,0.28)]">
                  <div className="relative min-h-[220px] overflow-hidden rounded-[1.5rem]">
                    <Image
                      src={cafeCoffeeImage}
                      alt="Latte and pastry served on a warm-toned table"
                      fill
                      sizes="(max-width: 640px) 100vw, 22vw"
                      className="object-cover object-[center_60%]"
                    />
                  </div>
                  <p className="mt-4 text-lg font-medium">
                    House drinks and pastries that earn their place in the routine
                  </p>
                </div>
                <div className="rounded-[2rem] border border-[#d7c6b4] bg-[#f3e7d9] p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#7b6658]">
                    This week at the shop
                  </p>
                  <p className="mt-3 text-2xl font-medium">
                    Friday folk set, affogatos after dark, and the front windows glowing until 10.
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
              title="Built for regulars, slow mornings, and people who like a little character with their coffee."
              description="Juniper & Pine was created as a neighborhood place with real staying power: excellent coffee, thoughtful retail, warm materials, and a rhythm that shifts naturally from early rush to late-evening conversation."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {categories.map((category) => (
              <article
                key={category.name}
                className="rounded-[2rem] border border-[#dbc9b6] bg-[#fcf8f3] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-28px_rgba(80,55,35,0.35)]"
              >
                <div className="relative h-44 overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={category.image}
                    alt={category.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 23vw"
                    className={`object-cover transition duration-500 hover:scale-[1.03] ${category.imageClassName}`}
                  />
                </div>
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
          <div className="space-y-6">
            <DemoHeading
              eyebrow="Live Music Nights"
              title="Evenings that turn a coffee stop into the best part of someone&apos;s week."
              description="Live sets, limited menus, and a welcoming room give people one more reason to come back. The music calendar feels local, intimate, and easy to say yes to."
            />
            <div className="relative min-h-[300px] overflow-hidden rounded-[2rem] border border-[#ccb7a2] shadow-[0_24px_60px_-34px_rgba(74,51,35,0.3)]">
              <Image
                src={cafeMusicImage}
                alt="Musicians performing in an intimate cafe setting at night"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2f221b]/70 via-[#2f221b]/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-[#f8f2ea]">
                <p className="text-xs uppercase tracking-[0.28em] text-[#eadbcd]/75">
                  Friday feature
                </p>
                <p className="mt-2 max-w-md text-2xl font-medium">
                  Acoustic sets, lamp-lit tables, and a room that settles into its best mood after sunset.
                </p>
              </div>
            </div>
          </div>
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
                  Save your spot
                </a>
              </article>
            ))}
          </div>
        </div>
      </DemoSection>

      <DemoSection id="gallery" className="py-20 lg:py-24">
        <DemoHeading
          eyebrow="Gallery"
          title="A closer look at the textures, corners, and everyday moments people remember."
          description="The gallery gives the brand a lived-in feel, showing the atmosphere, details, and small rituals that make Juniper & Pine easy to fall for."
          align="center"
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <DemoImageCard
            title={gallery[0].title}
            className={gallery[0].className}
            src={gallery[0].src}
            alt={gallery[0].alt}
            imageClassName={gallery[0].imageClassName}
            sizes="(max-width: 1024px) 100vw, 56vw"
          />
          <div className="grid gap-4">
            <DemoImageCard
              title={gallery[1].title}
              className={gallery[1].className}
              src={gallery[1].src}
              alt={gallery[1].alt}
              imageClassName={gallery[1].imageClassName}
              sizes="(max-width: 1024px) 100vw, 28vw"
            />
            <DemoImageCard
              title={gallery[2].title}
              className={gallery[2].className}
              src={gallery[2].src}
              alt={gallery[2].alt}
              imageClassName={gallery[2].imageClassName}
              sizes="(max-width: 1024px) 100vw, 28vw"
            />
          </div>
          <DemoImageCard
            title={gallery[3].title}
            className={`${gallery[3].className} lg:col-span-2`}
            src={gallery[3].src}
            alt={gallery[3].alt}
            imageClassName={gallery[3].imageClassName}
            sizes="100vw"
          />
        </div>
      </DemoSection>

      <DemoSection id="visit" className="pb-14 lg:pb-18">
        <div className="rounded-[2.25rem] border border-[#d6c2ae] bg-white/80 p-8 shadow-[0_25px_60px_-36px_rgba(80,55,35,0.35)] lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <DemoHeading
                eyebrow="Visit Us"
                title="Easy to find, easy to settle into, and worth making part of the routine."
                description="New guests can quickly see where to go, when to come by, and what kind of atmosphere is waiting for them when they walk in."
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
              <div className="relative min-h-[320px] overflow-hidden rounded-[1.6rem] border border-white/60">
                <Image
                  src={cafePlantsImage}
                  alt="Front corner of the cafe with planters and soft natural light"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(74,106,75,0.2),rgba(255,255,255,0.28)),linear-gradient(transparent_49%,rgba(255,255,255,0.1)_50%,transparent_51%)] bg-[length:auto,72px_72px]" />
                <div className="absolute inset-5 flex flex-col justify-between rounded-[1.4rem] border border-white/35 bg-white/35 p-6 backdrop-blur-md">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-[#6f5b4c]">
                      Neighborhood feel
                    </p>
                    <p className="mt-3 max-w-sm text-xl font-medium">
                      A bright corner, fresh greenery, and the kind of room that makes one coffee turn into a long stay.
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
