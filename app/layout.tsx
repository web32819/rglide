import Script from "next/script";   // 👈 THIS LINE WAS MISSING
import "./css/bootstrap.min.css";
import "./css/owl.carousel.css";
import "./css/owl.theme.default.min.css";
import "./css/style.css";
import "./css/jquery.fancybox.min.css";
import "./css/hover.css";


import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";
import Footer from "./components/Footer";
import ClientScripts from "./components/ClientScripts";


export const metadata = {
  title: "R-Glide - Composite Bearings",
  description: "R-Glide - Composite Bearings",
  
  openGraph: {
    title: "R-Glide - Composite Bearings",
    description: "R-Glide - Composite Bearings",
    url: "https://rglide.com/", // change to your real domain
    siteName: "R-Glide",
    images: [
      {
        url: "https://rglide.com/images/og-image.jpg", // must be absolute URL
        width: 1200,
        height: 900,
        alt: "R-Glide",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  
};

export const viewport = {
  width: "device-width", initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
		<head>
			<link rel="shortcut icon" href="/images/favicon.ico" />
			<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet"/>
			<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" crossOrigin="anonymous" />
		</head>
		<body>
	  
			<Navbar />
			
			<MobileNav />

			{/* Page content */}
			{children}
			
			  {/* Libraries */}
				<Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js" strategy="beforeInteractive" />
				<Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
				<Script src="/js/owl.carousel.js" strategy="afterInteractive" />
				<Script src="/js/jquery.fancybox.min.js" strategy="afterInteractive" />
				
			<Footer />

			{/* All JS logic lives here */}
			<ClientScripts />
			
		</body>
    </html>
  );
}
