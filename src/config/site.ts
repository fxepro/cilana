export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Cilana Crypto",
  description: "Scalable Ethereum-Based Cryptocurrency. Discover the future of decentralized finance with Cilana.",
  navItems: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Technology", href: "/technology" },
    { label: "Roadmap", href: "/roadmap" },
    { label: "Resources", href: "/resources" },
    { label: "Community", href: "/community" },
    { label: "Contact", href: "/contact" },
  ],
  links: {
    // Add any external links here, e.g., whitepaper, social media
    // whitepaper: "/cilana-whitepaper.pdf", // Example
    // github: "https://github.com/cilana", // Example
    // twitter: "https://twitter.com/cilana", // Example
  },
};
