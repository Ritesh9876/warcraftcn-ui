import { RootProvider } from "fumadocs-ui/provider/next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import SearchDialog from "@/components/search";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";

import "./global.css";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html className={inter.className} lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <RootProvider
            search={{
              SearchDialog,
            }}
          >
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <Toaster />
          </RootProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
