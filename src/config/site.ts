const domain = "bill-manager.lat";

export const siteConfig = {
  name: "SwiftShip",
  description:
    "A template for building modern, fast, and secure apps with Next.js.",
  domain,
  url: `https://${domain}`,
  ogImage: "https://tx.shadcn.com/og.jpg",
  links: {
    twitter: "https://twitter.com/shadcn",
  },
  keywords: [
    "apps",
    "templates",
    "nextjs",
    "tailwind",
    "react",
    "hooks",
    "hono",
    "trpc",
    "zod",
    "clerk",
  ] as string[],
} as const;
