import Hero from "@/components/preview/Hero";
import Buy from "@/components/preview/Buy";
import CopyRight from "@/components/preview/CopyRight";
import Demo from "@/components/preview/Demo";
import Features from "@/components/preview/Features";

import "../public/assets/css/style.css";
import Home1 from "./(homes)/home-1/page";
import Home2 from "./(homes)/home-2/page";

export const metadata = {
  title: "NFC Portfolio",
  description:
    "NFC Portfolio",
};
export default function page() {
  return (
    <>
      <Hero />
      {/* <Demo />
      <Features />
      <Buy />
      <CopyRight /> */}
      {/* <Home2/> */}
    </>
  );
}
