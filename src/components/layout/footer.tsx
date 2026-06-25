import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, TwitterIcon } from "@/components/ui/icons";

export function Footer() {
  return (
    <footer className="border-t border-[#333333] bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-lg text-white">PackVault</span>
            </Link>
            <p className="text-sm text-[#a3a3a3] mb-4">
              Cache npm packages once. Install forever — even offline.
            </p>
            <div className="flex items-center space-x-4 text-[#a3a3a3]">
              <Link href="https://github.com/Demon-Die/PackVault" target="_blank" className="hover:text-white transition-colors">
                <GithubIcon className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                <TwitterIcon className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
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
              <li><Link href="https://github.com/Demon-Die/PackVault/issues" target="_blank" className="hover:text-white transition-colors">Issues</Link></li>
              <li><Link href="/releases" className="hover:text-white transition-colors">Releases</Link></li>
              <li><Link href="/community#contributing" className="hover:text-white transition-colors">Contributing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-[#a3a3a3]">
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="https://github.com/Demon-Die/PackVault/blob/main/LICENSE" target="_blank" className="hover:text-white transition-colors">MIT License</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#333333] flex flex-col md:flex-row items-center justify-between text-sm text-[#a3a3a3]">
          <p>© {new Date().getFullYear()} PackVault. All rights reserved.</p>
          <p className="mt-4 md:mt-0 flex items-center">
            Built by Demon-Die
          </p>
        </div>
      </div>
    </footer>
  );
}
