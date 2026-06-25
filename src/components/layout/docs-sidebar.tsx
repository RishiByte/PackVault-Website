"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

const navigation = [
  {
    title: "Getting Started",
    links: [
      { title: "Installation", href: "/install" },
      { title: "Quick Start", href: "/docs/quickstart" },
    ],
  },
  {
    title: "Core Concepts",
    links: [
      { title: "How It Works", href: "/docs/concepts/how-it-works" },
      { title: "Vault Layout", href: "/docs/vault-layout" },
    ],
  },
  {
    title: "Commands Reference",
    links: [
      { title: "Overview", href: "/docs/commands" },
      { title: "Sync", href: "/docs/commands/sync" },
      { title: "Install", href: "/docs/commands/install" },
      { title: "Bundle", href: "/docs/commands/bundle" },
    ],
  },
  {
    title: "Guides",
    links: [
      { title: "LAN Sharing", href: "/docs/guides/lan-sharing" },
      { title: "Project Templates", href: "/docs/guides/project-templates" },
    ],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 flex-shrink-0 hidden lg:block border-r border-[#333333] h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto pb-10">
      <nav className="p-6 space-y-8">
        {navigation.map((section) => (
          <div key={section.title}>
            <h4 className="font-semibold text-white mb-3 text-sm tracking-tight">
              {section.title}
            </h4>
            <ul className="space-y-2 border-l border-[#333333] pl-3 ml-1">
              {section.links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block text-sm transition-colors ${
                        isActive
                          ? "text-[#dc2626] font-medium"
                          : "text-[#a3a3a3] hover:text-white"
                      }`}
                    >
                      {link.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
