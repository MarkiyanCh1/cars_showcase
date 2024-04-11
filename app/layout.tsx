import { SearchContextProvider } from "@/context/search";
import "./globals.css";
import { Navbar } from "@/components";
import { ModalContextProvider } from "@/context/modal";

export const metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world.",
  icons: [
    {
      url: "/steering-wheel.svg",
      href: "/steering-wheel.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        <ModalContextProvider>
          <SearchContextProvider>{children}</SearchContextProvider>
        </ModalContextProvider>
      </body>
    </html>
  );
}
