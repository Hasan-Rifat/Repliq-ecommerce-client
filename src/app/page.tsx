"use client";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import Hero from "@/components/Home/Hero";
import LatestProducts from "@/components/Home/LatestProducts";
import ShopeOffer from "@/components/Home/ShopexOffer";
import Testimonial from "@/components/Home/Testimonial";

export default function Home() {
  localStorage.setItem(
    "token",
    JSON.stringify(
      "eyJhbGciOiJIUzI1NiJ9.aGFzYW5yaWZhdEBnbWFpbC5jb20.W4PwbjV9aWpU2qgefOUSK43LBoWsqnShdxigHFa4NKw"
    )
  );
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <LatestProducts />
      <ShopeOffer />
      <Testimonial />
    </main>
  );
}
