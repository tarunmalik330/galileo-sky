import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="xl:max-w-[1920px] mx-auto">
      <Header />
      <Footer />
    </div>
  );
}
