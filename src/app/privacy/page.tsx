import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          <div className="prose prose-invert prose-red">
            <p className="text-[#a3a3a3]">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            <p className="text-[#e5e5e5]">
              This is a placeholder for the PackVault Privacy Policy. At Omnikon, we take your privacy seriously. 
              As an offline-first tool, PackVault is designed to keep your data local to your machine and network 
              as much as possible.
            </p>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Data Collection</h2>
            <p className="text-[#e5e5e5]">
              PackVault only connects to the official npm registry to sync package metadata and tarballs. We do not 
              collect analytics, telemetry, or personal information about your usage unless explicitly opted-in.
            </p>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Local Storage</h2>
            <p className="text-[#e5e5e5]">
              All cached packages are stored locally in your designated vault directory. You maintain full ownership 
              and control over this data.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
