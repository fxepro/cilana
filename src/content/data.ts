import type { LucideIcon } from 'lucide-react';
import { Zap, ShieldCheck, Layers, FileText, Users, Flag, Goal, Cpu, Users2, GitFork, FileJson, Lightbulb, Milestone, CheckCircle2, CircleDot, Circle, Newspaper, HelpCircle, CalendarDays, Award, Mail, Send } from 'lucide-react';

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
  dataAiHint?: string;
}

export const features: FeatureItem[] = [
  {
    icon: Zap,
    title: "Lightning Fast Transactions",
    description: "Experience unparalleled transaction speeds on the Cilana network, designed for efficiency and scalability.",
    dataAiHint: "speed network",
  },
  {
    icon: ShieldCheck,
    title: "Robust Security",
    description: "Built with security at its core, Cilana leverages proven cryptographic methods to protect your assets.",
    dataAiHint: "security protection",
  },
  {
    icon: Layers,
    title: "Ethereum Compatible",
    description: "Seamlessly integrate with the Ethereum ecosystem. Cilana supports EVM and existing Ethereum tools.",
    dataAiHint: "compatibility blockchain",
  },
];

export const teamMembers = [
  {
    name: "Dr. Aris Thorne",
    role: "Lead Architect & Visionary",
    bio: "Aris is the driving force behind Cilana, with over a decade of experience in distributed systems and cryptography. Believes in a decentralized future for all.",
    imageUrl: "https://placehold.co/300x300.png",
    dataAiHint: "person portrait",
  },
  {
    name: "Lena Petrova",
    role: "Head of Engineering",
    bio: "Lena leads the development team, ensuring Cilana's technical excellence and robust infrastructure. Expert in smart contract development.",
    imageUrl: "https://placehold.co/300x300.png",
    dataAiHint: "woman technology",
  },
  {
    name: "Kenji Tanaka",
    role: "Community & Growth Manager",
    bio: "Kenji is passionate about building a strong and engaged Cilana community. He focuses on outreach and user adoption strategies.",
    imageUrl: "https://placehold.co/300x300.png",
    dataAiHint: "man community",
  },
];

export interface RoadmapMilestone {
  icon: LucideIcon;
  title: string;
  date: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
  colorClass: string;
}

export const roadmapMilestones: RoadmapMilestone[] = [
  {
    icon: CheckCircle2,
    title: "Concept & Initial Whitepaper",
    date: "Q1 2023",
    description: "Core idea formalized, initial technical specifications and vision documented.",
    status: 'completed',
    colorClass: "text-green-500",
  },
  {
    icon: CheckCircle2,
    title: "Seed Funding Secured",
    date: "Q2 2023",
    description: "Initial funding round completed to kickstart development and team expansion.",
    status: 'completed',
    colorClass: "text-green-500",
  },
  {
    icon: CircleDot,
    title: "Devnet Launch",
    date: "Q4 2023 - Q1 2024",
    description: "Internal development network launched for core feature testing and iteration.",
    status: 'in-progress',
    colorClass: "text-blue-500",
  },
  {
    icon: Circle,
    title: "Public Testnet",
    date: "Q2 2024 (TBD)",
    description: "Open testnet for community participation, bug bounties, and dApp experimentation.",
    status: 'planned',
    colorClass: "text-gray-500",
  },
  {
    icon: Circle,
    title: "Mainnet Launch",
    date: "Q4 2024 (TBD)",
    description: "The official launch of the Cilana blockchain, bringing full functionality to the public.",
    status: 'planned',
    colorClass: "text-gray-500",
  },
  {
    icon: Circle,
    title: "DeFi Ecosystem Grants",
    date: "Post-Mainnet",
    description: "Initiatives to foster development of decentralized finance applications on Cilana.",
    status: 'planned',
    colorClass: "text-gray-500",
  },
];

export interface ResourceContent {
  type: 'blog' | 'faq';
  title: string;
  summary?: string;
  content: string;
  icon: LucideIcon;
  slug: string;
}

export const resourcesContent: ResourceContent[] = [
  {
    type: 'faq',
    title: "What is Ethereum?",
    summary: "A brief explanation of Ethereum and its significance in the blockchain world.",
    content: "Ethereum is a decentralized, open-source blockchain with smart contract functionality. Ether (ETH) is the native cryptocurrency of the platform. It's a community-run technology powering the cryptocurrency ether (ETH) and thousands of decentralized applications.",
    icon: HelpCircle,
    slug: 'what-is-ethereum',
  },
  {
    type: 'faq',
    title: "Why build on Ethereum?",
    summary: "Understanding the advantages of developing applications on the Ethereum network.",
    content: "Building on Ethereum offers several advantages: a large, established network with a vast user base, robust security, extensive developer tools and documentation, and a vibrant ecosystem of compatible dApps and services. Its EVM (Ethereum Virtual Machine) has become a standard for smart contract execution.",
    icon: HelpCircle,
    slug: 'why-build-on-ethereum',
  },
   {
    type: 'blog',
    title: "Cilana's Approach to Scalability",
    summary: "Deep dive into how Cilana enhances scalability while maintaining Ethereum compatibility.",
    content: "Cilana employs a multi-faceted approach to scalability. This includes [mention a technique like Layer 2 integration, sharding concepts, or efficient consensus mechanism if applicable, otherwise keep it general]. Our goal is to provide high throughput and low transaction fees without compromising decentralization or security. This allows dApps to perform complex operations efficiently, opening up new possibilities for on-chain applications that were previously impractical due to Ethereum's mainnet limitations.",
    icon: Newspaper,
    slug: 'cilana-scalability',
  },
  {
    type: 'blog',
    title: "The Future of NFTs on Cilana",
    summary: "Exploring the potential for Non-Fungible Tokens within the Cilana ecosystem.",
    content: "With Cilana's Ethereum compatibility and enhanced performance, the NFT landscape is poised for exciting developments. Creators and collectors can expect lower minting costs, faster transactions, and new forms of utility for NFTs. We envision Cilana becoming a hub for innovative NFT projects, from digital art and collectibles to gaming assets and real-world tokenization.",
    icon: Newspaper,
    slug: 'nfts-on-cilana',
  }
];

export const communityInfo = {
  upcomingEvents: [
    {
      title: "Cilana Community Town Hall - Q2 Updates",
      date: "July 15, 2024",
      description: "Join the Cilana core team for an update on project progress, upcoming milestones, and a live Q&A session.",
      link: "#", // Placeholder link
    },
    {
      title: "Workshop: Building Your First dApp on Cilana Testnet",
      date: "August 5, 2024",
      description: "A hands-on workshop for developers looking to get started with smart contract development on Cilana.",
      link: "#", // Placeholder link
    }
  ],
  ambassadorProgram: {
    title: "Cilana Ambassador Program",
    description: "Become a Cilana Ambassador and help us grow our community! We are looking for passionate individuals to spread awareness, create content, and support new users. As an ambassador, you'll get exclusive insights, rewards, and a chance to shape the future of Cilana.",
    applyLink: "#", // Placeholder link
  }
};

export const siteSections = {
  homepage: {
    intro: "Cilana is a next-generation blockchain platform designed for scalability, security, and seamless Ethereum compatibility. Our mission is to empower developers and users with a robust infrastructure for decentralized applications, paving the way for a more open and equitable digital future.",
    vision: "To be the leading scalable and developer-friendly platform that extends Ethereum's capabilities, fostering innovation and mass adoption of blockchain technology.",
    mission: "Our mission is to provide a high-performance, secure, and Ethereum-compatible blockchain that enables developers to build groundbreaking decentralized applications. We are committed to fostering a vibrant ecosystem, promoting education, and driving the growth of the decentralized web.",
  },
  about: {
    origin: "Cilana was born from the vision of addressing the scalability challenges of existing blockchain networks while harnessing the power and ubiquity of the Ethereum ecosystem. Our founders, a group of experienced blockchain architects and developers, recognized the need for a platform that could support a new wave of demanding decentralized applications without sacrificing security or decentralization.",
    goals: "Our primary goal is to deliver a blockchain that is significantly faster and more cost-effective than Ethereum mainnet, yet fully compatible with its tools, languages, and standards. We aim to foster a thriving ecosystem of dApps in areas like DeFi, NFTs, gaming, and more, by providing developers with the resources and support they need. Ultimately, Cilana strives to make blockchain technology more accessible and practical for everyday users and businesses.",
    ethereumCompatibility: "Cilana achieves Ethereum compatibility through its full support for the Ethereum Virtual Machine (EVM). This means that smart contracts written in Solidity (or other EVM languages like Vyper) can be deployed on Cilana with minimal to no modification. Developers can use familiar tools such as Hardhat, Truffle, Remix, and Web3.js/Ethers.js libraries. This significantly lowers the barrier to entry for Ethereum developers and allows for easy migration of existing dApps to Cilana to benefit from its enhanced performance and lower transaction costs.",
  },
  technology: {
    leveragingEthereum: "Cilana is not a competitor to Ethereum but an enabler and extender of its ecosystem. We leverage Ethereum's battle-tested security principles, its extensive developer community, and its established standards. By being EVM-compatible, Cilana benefits from the continuous research and development happening within the Ethereum space. Our architecture is designed to potentially incorporate future Ethereum upgrades and Layer 2 scaling solutions, ensuring long-term alignment and interoperability.",
    smartContracts: "Cilana supports the full spectrum of smart contract capabilities found on Ethereum. This includes creating and managing fungible tokens (ERC-20), non-fungible tokens (ERC-721, ERC-1155), decentralized autonomous organizations (DAOs), complex DeFi protocols (lending, borrowing, DEXs), and any other application logic that can be encoded into a smart contract. Our platform aims to execute these contracts with greater speed and lower gas fees.",
    useCases: [
      { title: "Decentralized Finance (DeFi)", description: "Build high-speed, low-cost lending platforms, decentralized exchanges, yield farming protocols, and stablecoins on Cilana." },
      { title: "Non-Fungible Tokens (NFTs)", description: "Mint, trade, and utilize NFTs for digital art, collectibles, gaming items, and real-world asset representation with enhanced efficiency." },
      { title: "Blockchain Gaming (GameFi)", description: "Develop immersive on-chain games with fast state updates and affordable player interactions, enabling true ownership of in-game assets." },
      { title: "Decentralized Autonomous Organizations (DAOs)", description: "Create and manage DAOs with efficient voting mechanisms and treasury management, fostering community-driven governance." },
      { title: "Supply Chain Management", description: "Track goods and verify authenticity across supply chains with transparent and immutable records on Cilana." },
      { title: "Identity & Credentials", description: "Build decentralized identity solutions and verifiable credential systems that give users control over their data." },
    ]
  }
}
