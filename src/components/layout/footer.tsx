import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, TwitterIcon } from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="border-t border-[#333333] bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-lg text-white">PackVault</span>
            </Link>
            <p className="text-sm text-[#a3a3a3] mb-2 font-medium">
              Developer tools for the next generation
            </p>
            <p className="text-sm text-[#737373] mb-6 max-w-xs">
              Cache npm packages once. Install forever — even offline.
            </p>
            <div className="flex items-center space-x-4 text-[#a3a3a3]">
              <Link href="https://github.com/Omnikon-Org" target="_blank" className="hover:text-white transition-colors">
                <GithubIcon className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://x.com/OmnikonOrg" target="_blank" className="hover:text-white transition-colors">
                <TwitterIcon className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="mailto:omnikonorg@gmail.com" className="hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-[#a3a3a3]">
              <li><Link href="/docs/quickstart" className="hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="/docs/commands" className="hover:text-white transition-colors">Command Reference</Link></li>
              <li><Link href="/use-cases" className="hover:text-white transition-colors">Use Cases</Link></li>
              <li><Link href="/install" className="hover:text-white transition-colors">Installation</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Community</h3>
            <ul className="space-y-2 text-sm text-[#a3a3a3]">
              <li><Link href="/community" className="hover:text-white transition-colors">Discussions</Link></li>
              <li><Link href="https://github.com/Omnikon-Org/PackVault/issues" target="_blank" className="hover:text-white transition-colors">Issues</Link></li>
              <li><Link href="/releases" className="hover:text-white transition-colors">Releases</Link></li>
              <li><Link href="/community#contributing" className="hover:text-white transition-colors">Contributing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">More from Omnikon</h3>
            <ul className="space-y-2 text-sm text-[#a3a3a3]">
              <li><Link href="https://github.com/Omnikon-Org/IssueSwipe" target="_blank" className="hover:text-white transition-colors">IssueSwipe</Link></li>
              <li><Link href="https://github.com/Omnikon-Org/Abyss" target="_blank" className="hover:text-white transition-colors">Abyss</Link></li>
              <li><Link href="https://github.com/Omnikon-Org/schema-cast" target="_blank" className="hover:text-white transition-colors">schema-cast</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-[#a3a3a3]">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="https://github.com/Omnikon-Org/PackVault/blob/main/LICENSE" target="_blank" className="hover:text-white transition-colors">MIT License</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#333333] flex flex-col md:flex-row items-center justify-between text-sm text-[#a3a3a3]">
          <p>© {new Date().getFullYear()} Omnikon. All rights reserved.</p>
          <p className="mt-4 md:mt-0 flex items-center">
            Built with <span className="text-[#dc2626] mx-1">♥</span> by <Link href="https://github.com/Omnikon-Org" target="_blank" className="text-white hover:text-[#dc2626] transition-colors ml-1 font-medium">Omnikon-Org</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
