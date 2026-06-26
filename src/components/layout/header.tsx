import Link from "next/link";
import { Menu } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#333333] bg-[#0a0a0a]/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-lg sm:text-xl text-white">PackVault</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/docs/quickstart" className="transition-colors hover:text-[#dc2626] text-[#e5e5e5]">
            Docs
          </Link>
          <Link href="/use-cases" className="transition-colors hover:text-[#dc2626] text-[#e5e5e5]">
            Use Cases
          </Link>
          <Link href="/community" className="transition-colors hover:text-[#dc2626] text-[#e5e5e5]">
            Community
          </Link>
          <Link href="/releases" className="transition-colors hover:text-[#dc2626] text-[#e5e5e5]">
            Releases
          </Link>
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Link
              href="https://github.com/Omnikon-Org/PackVault"
              target="_blank"
              rel="noreferrer"
            >
              <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-[#262626] hover:text-white h-9 w-9">
                <GithubIcon className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link href="/docs/quickstart" className="hidden sm:block">
              <Button variant="default" size="sm">Get Started</Button>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
