import { siteConfig } from "@/config/site";
import { Mail, Twitter, Github, Linkedin, FileText } from "lucide-react"; // Added Linkedin and FileText
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Transforming web3 with Cilana</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Twitter" className="text-background/60 hover:text-background transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="GitHub" className="text-background/60 hover:text-background transition-colors">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-background/60 hover:text-background transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Email" className="text-background/60 hover:text-background transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-3 py-2 bg-background/10 border border-background/20 rounded-l-lg text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-4 py-2 gradient-primary text-white rounded-r-lg hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>

          {/* Column 2: Product */}
          <div className="space-y-4">
            <h4 className="font-semibold">Product</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/technology" className="text-background/60 hover:text-background transition-colors">
                Technology
              </Link>
              <Link href="/resources" className="text-background/60 hover:text-background transition-colors">
                Documentation
              </Link>
              <Link href="/about" className="text-background/60 hover:text-background transition-colors">
                About
              </Link>
            </nav>
          </div>

          {/* Column 3: Developers */}
          <div className="space-y-4">
            <h4 className="font-semibold">Developers</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/resources" className="text-background/60 hover:text-background transition-colors">
                Resources
              </Link>
              <Link href="/community" className="text-background/60 hover:text-background transition-colors">
                Community
              </Link>
              <Link href="/roadmap" className="text-background/60 hover:text-background transition-colors">
                Roadmap
              </Link>
            </nav>
          </div>

          {/* Column 4: Company */}
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/contact" className="text-background/60 hover:text-background transition-colors">
                Contact
              </Link>
              <Link href="#" className="text-background/60 hover:text-background transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-background/60 hover:text-background transition-colors">
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-background/40 text-xs mt-2 md:mt-0">
            Built for the future of decentralized applications
          </p>
        </div>
      </div>
    </footer>
  );
}
