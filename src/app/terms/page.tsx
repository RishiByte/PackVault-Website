import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
          <div className="prose prose-invert prose-red">
            <p className="text-[#a3a3a3]">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            <p className="text-[#e5e5e5]">
              This is a placeholder for the PackVault Terms of Service. By using PackVault, you agree to the 
              following terms and conditions.
            </p>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Usage</h2>
            <p className="text-[#e5e5e5]">
              PackVault is provided "as is", without warranty of any kind. You are free to use it for personal 
              and commercial projects.
            </p>
            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Omnikon Services</h2>
            <p className="text-[#e5e5e5]">
              If you utilize the PackVault Pro features, you agree to abide by the service limits and guidelines 
              established by Omnikon.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
