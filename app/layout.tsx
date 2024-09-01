import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { StepProvider } from "@/providers/MultistepFormProvider";
import Navbar from "@/components/header/Navbar";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});


const APP_NAME = "Multi-step PWA App";
const APP_DEFAULT_TITLE = "Multi-step PWA App";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION = "Create seamless user experiences with our React Multi-Step Form app! This powerful PWA (Progressive Web App) enables you to build dynamic, step-by-step forms with validation, user-friendly navigation, and responsive design. Ideal for complex form workflows, surveys, registration processes, and more. Leverage modern technologies like React Hook Form, Zod validation, and customizable stepper components to deliver a smooth, efficient, and error-free data collection process. Perfect for developers looking to integrate a flexible and scalable multi-step form into their web applications.";
const KEYWORDS = "React Multi-Step Form, Progressive Web App (PWA), Form Validation, Stepper Component, User-Friendly Navigation, Responsive Design, React Hook Form, Zod Validation, Complex Form Workflows, Dynamic Forms, Multi-Step Registration, Survey Forms, Data Collection, Scalable Forms, Web Application Forms, Form Builder, Form Wizard, Customizable Steps, Form Management, Frontend Development";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  keywords: KEYWORDS,
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: APP_DEFAULT_TITLE,
    startupImage: [{ url: "/apple-touch-icon.png" }],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StepProvider>

          <> <Navbar/>  {children}</>

        </StepProvider>
      </body>
    </html>
  );
}
