export const projects = [
  {
    slug: "cafe",
    title: "Independent cafe",
    sector: "Hospitality",
    summary:
      "A warmer digital front door for coffee, conversation, and live events.",
    image: "/images/projects/cafe.webp",
    brief:
      "The concept brief asks how a neighborhood cafe could make its atmosphere, events, and visiting information immediately legible online.",
    direction:
      "Warm photography and a relaxed editorial rhythm make the space feel approachable. A clear visit path gives practical information the same care as the first impression.",
    system:
      "Cream surfaces, deep green accents, generous serif headings, and rounded image panels connect the coffee bar, shop, and event programme.",
    moments: [
      [
        "The first impression",
        "An atmospheric hero introduces the cafe, with direct paths to the menu and upcoming events.",
      ],
      [
        "More than a coffee bar",
        "Distinct category cards give coffee, plants, and stationery their own place without competing with the visit path.",
      ],
      [
        "A reason to return",
        "An event list and visit section bring the page back to useful information. On mobile, these become a single reading column.",
      ],
    ],
  },
  {
    slug: "construction",
    title: "Construction studio",
    sector: "Construction",
    summary:
      "A considered presence for complex projects and a clearer path to an inquiry.",
    image: "/images/projects/construction.webp",
    brief:
      "The concept brief asks how a contractor could explain custom homes, renovations, and commercial work while making a project inquiry feel straightforward.",
    direction:
      "Architectural imagery, precise spacing, and a restrained hierarchy explore a sense of care. Service descriptions help visitors understand the scope before reaching the inquiry.",
    system:
      "Stone neutrals, strong dark typography, architectural crops, and an ordered project gallery create a structured visual language.",
    moments: [
      [
        "Architecture first",
        "A large hero image establishes the visual direction while keeping the service proposition readable.",
      ],
      [
        "Scope made legible",
        "Separate service chapters distinguish new builds, renovations, and commercial spaces.",
      ],
      [
        "From interest to inquiry",
        "Project imagery leads toward a clear contact action. The mobile layout keeps descriptions and controls in a predictable order.",
      ],
    ],
  },
  {
    slug: "streetwear",
    title: "Independent streetwear",
    sector: "Retail exploration",
    summary:
      "Release energy, expressive art direction, and direct collection journeys.",
    image: "/images/projects/streetwear.webp",
    brief:
      "The concept brief asks how an independent label could give a collection a strong point of view while keeping browsing paths direct.",
    direction:
      "Bold contrasts and large type create release energy. Collection hierarchy is intended to help visitors move from the campaign to individual pieces.",
    system:
      "High-contrast surfaces, assertive sans serif type, collection cards, and a product grid form a distinct merchandising system.",
    moments: [
      [
        "A strong opening",
        "The campaign hero introduces the drop through scale, contrast, and a direct collection action.",
      ],
      [
        "Collection as a system",
        "Cards and product details support a consistent browsing rhythm rather than a series of unrelated promotions.",
      ],
      [
        "Designed for the small screen",
        "The product grid reduces columns and preserves clear labels and touch targets. Checkout and fulfillment would require separately evaluated custom scope.",
      ],
    ],
  },
] as const;
export const services = [
  {
    title: "Strategy and direction",
    summary:
      "Find the right starting point before deciding what the website should look like.",
    deliverables: [
      "Audience and offer alignment",
      "Content inventory and sitemap",
      "Page goals and direction board",
    ],
    input:
      "Bring your business goals, existing content, and the questions your customers ask.",
    fit: "A new site, a changing offer, or an existing site that has lost its focus.",
  },
  {
    title: "Interface and visual design",
    summary:
      "Give your business a recognizable presence and your visitors a clear way through.",
    deliverables: [
      "Wireframes and visual direction",
      "Responsive page designs",
      "Component rules and reviewable prototype",
    ],
    input:
      "Share brand assets and consolidated feedback at agreed review points.",
    fit: "Businesses that need a more coherent identity and clearer visitor journeys.",
  },
  {
    title: "Development and launch",
    summary:
      "Turn the approved direction into a useful website that holds together beyond the mockup.",
    deliverables: [
      "Responsive implementation",
      "Integrations as scoped",
      "Accessibility, performance, and launch checks",
    ],
    input:
      "Provide access to the agreed systems and review the working site before launch.",
    fit: "An approved design ready for implementation, or a connected strategy-to-launch engagement.",
  },
] as const;
export const process = [
  [
    "Discover",
    "Align on audience, goals, content, and scope.",
    "Project brief and direction",
    "Share priorities and existing material; confirm the brief.",
  ],
  [
    "Shape",
    "Establish structure, hierarchy, and visual language.",
    "Wireframes and design system",
    "Review the direction and consolidate feedback before approval.",
  ],
  [
    "Build",
    "Develop responsive pages and agreed integrations.",
    "Reviewable production build",
    "Supply final content and test the agreed visitor journeys.",
  ],
  [
    "Refine & launch",
    "Test, polish, and prepare the path to production.",
    "Launch preparation and handoff",
    "Approve the final site and the agreed launch plan.",
  ],
] as const;
export const packages = [
  {
    name: "Starter",
    label: "A focused foundation",
    summary: "A concise professional presence for a new or small business.",
    items: [
      "Core page structure",
      "Responsive visual direction",
      "Focused content hierarchy",
      "Contact pathway",
    ],
  },
  {
    name: "Growth",
    label: "Room for the whole offer",
    summary:
      "A multi-page website for an established business with clearer inquiry paths.",
    items: [
      "Multi-page architecture",
      "Connected visual system",
      "Service and work pages",
      "Lead inquiry flow",
    ],
  },
  {
    name: "Premium",
    label: "A tailored system",
    summary:
      "A broader scope for more involved content, booking, or custom needs.",
    items: [
      "Expanded discovery",
      "Custom page systems",
      "Integrations evaluated together",
      "Detailed handoff planning",
    ],
  },
] as const;
export const principles = [
  [
    "Clarity before decoration",
    "Page goals and content hierarchy guide the design, so a visitor can understand the offer before exploring the details.",
  ],
  [
    "One connected system",
    "Strategy, design, and implementation inform one another—from the sitemap to the smallest screen.",
  ],
  [
    "Respect for the visitor",
    "Readable content, visible focus, and direct navigation make the site easier to use.",
  ],
  [
    "Care beyond the mockup",
    "Responsive states, real content, and maintainable components receive the same attention as the first impression.",
  ],
] as const;
export const email = "andrew@cantrelldigital.dev";
