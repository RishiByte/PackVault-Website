import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { DocsSidebar } from "@/components/layout/docs-sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex-1 flex w-full max-w-7xl mx-auto">
        <DocsSidebar />
        <main className="flex-1 min-w-0 px-6 py-10 md:px-10">
          <div className="prose prose-invert prose-red max-w-none">
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
