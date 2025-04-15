import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { Toaster } from "@/components/ui/sonner";

// const geistSans = Geist({
//     variable: "--font-geist-sans",
//     subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//     variable: "--font-geist-mono",
//     subsets: ["latin"],
// });
const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Snap UI",
    description: "Create Powerful Websites with AI",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${mont.className} antialiased bg-[#262624]`}>
                <ConvexClientProvider>
                    <Provider>
                        {children}
                        <Toaster />
                    </Provider>
                </ConvexClientProvider>
            </body>
        </html>
    );
}
