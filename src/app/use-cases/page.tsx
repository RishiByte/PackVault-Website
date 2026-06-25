import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Globe, Users, ServerOff, ShieldCheck } from "lucide-react";

export default function UseCasesPage() {
  const cases = [
    {
      title: "Remote Development",
      icon: Globe,
      desc: "Prepare dependencies before traveling and continue building without internet access.",
      content: "When coding on a plane, train, or in a remote cabin, internet access is often nonexistent or too slow to rely on. By running \`packvault sync\` before you leave, your entire dependency graph is cached locally. You can create new projects, install packages, and build your applications with zero latency."
    },
    {
      title: "Workshops & Classrooms",
      icon: Users,
      desc: "Share one prepared vault with dozens of students and eliminate repeated downloads.",
      content: "Conference WiFi is notoriously unreliable. Instead of having 50 students attempt to download React and Next.js simultaneously, the instructor can host a PackVault instance. Students run \`packvault connect [host-ip]\` to pull packages instantly over the local network."
    },
    {
      title: "Team Development",
      icon: ServerOff,
      desc: "Reduce bandwidth usage across multiple machines and local networks.",
      content: "In offices with metered or slow internet connections, a central PackVault server can act as a local registry mirror. Teams can share packages peer-to-peer, dramatically reducing external bandwidth consumption and speeding up CI/CD pipelines."
    },
    {
      title: "Air-Gapped Systems",
      icon: ShieldCheck,
      desc: "Prepare dependency vaults in advance and build applications securely.",
      content: "For government, financial, or healthcare environments where development machines have strict firewall rules and no internet access, PackVault allows administrators to export a trusted vault (\`packvault export\`) and import it onto the isolated network."
    }
  ];

  return (
    <>
      <Header />
      <main className="flex-1 min-h-[calc(100vh-4rem-200px)] py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Use Cases</h1>
            <p className="text-xl text-[#a3a3a3] max-w-2xl mx-auto">
              Discover how developers and teams are leveraging PackVault to solve real-world connectivity challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cases.map((useCase, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#121212] border border-[#1a1a1a] hover:border-[#333333] transition-colors">
                <div className="mb-6 inline-flex p-4 rounded-xl bg-[#dc2626]/10 text-[#dc2626]">
                  <useCase.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-[#a3a3a3] mb-6 font-medium">{useCase.desc}</p>
                <p className="text-[#a3a3a3] leading-relaxed text-sm">{useCase.content}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
