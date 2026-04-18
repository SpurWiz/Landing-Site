import localFont from "next/font/local";

export const cerebri = localFont({
  src: [
    {
      path: "../public/fonts/CerebriSansPro-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/CerebriSansPro-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-cerebri",
});
