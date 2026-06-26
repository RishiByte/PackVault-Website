import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MessageSquare, Heart } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";

export default function CommunityPage() {
  return (
    <>
      <Header />
      <main className="flex-1 min-h-[calc(100vh-4rem-200px)] py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Community</h1>
            <p className="text-xl text-[#a3a3a3]">
              Join the PackVault community. Get help, contribute, and stay updated.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-xl bg-[#121212] border border-[#333333] text-center">
              <MessageSquare className="h-10 w-10 mx-auto text-[#dc2626] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Discussions</h3>
              <p className="text-[#a3a3a3] text-sm mb-4">Ask questions and share your ideas with other developers.</p>
              <Link href="https://github.com/Omnikon-Org/PackVault/discussions" target="_blank">
                <Button variant="outline" className="w-full text-white hover:text-white">Join the Chat</Button>
              </Link>
            </div>
            
            <div className="p-6 rounded-xl bg-[#121212] border border-[#333333] text-center">
              <GithubIcon className="h-10 w-10 mx-auto text-white mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Issues & Bugs</h3>
              <p className="text-[#a3a3a3] text-sm mb-4">Found a bug or have a feature request? Open an issue.</p>
              <Link href="https://github.com/Omnikon-Org/PackVault/issues" target="_blank">
                <Button variant="outline" className="w-full text-white hover:text-white">Report Issue</Button>
              </Link>
            </div>
            
            <div className="p-6 rounded-xl bg-[#121212] border border-[#333333] text-center">
              <Heart className="h-10 w-10 mx-auto text-[#dc2626] mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Contributing</h3>
              <p className="text-[#a3a3a3] text-sm mb-4">Help us improve PackVault by contributing code or docs.</p>
              <Link href="https://github.com/Omnikon-Org/PackVault/blob/main/CONTRIBUTING.md" target="_blank">
                <Button variant="outline" className="w-full text-white hover:text-white">Read Guide</Button>
              </Link>
            </div>
          </div>

          <div className="prose prose-invert prose-red max-w-none p-8 rounded-xl bg-[#0a0a0a] border border-[#1a1a1a]">
            <h2 id="contributing">Code of Conduct</h2>
            <p>
              We are committed to providing a friendly, safe, and welcoming environment for all, regardless of gender, sexual orientation, disability, ethnicity, religion, or similar personal characteristic.
            </p>
            <p>
              Please read and follow our <a href="https://github.com/Omnikon-Org/PackVault/blob/main/CODE_OF_CONDUCT.md" target="_blank" rel="noreferrer">Code of Conduct</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
