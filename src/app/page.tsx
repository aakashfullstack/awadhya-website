import HeroSection from "@/components/home/HeroSection";
import CollectionFilter from "@/components/home/CollectionFilter";
import BestsellersCarousel from "@/components/home/BestsellersCarousel";
import OurStoryStrip from "@/components/home/OurStoryStrip";
import FestivalCountdown from "@/components/home/FestivalCountdown";
import ReviewsStrip from "@/components/home/ReviewsStrip";
import TrustStrip from "@/components/home/TrustStrip";
import InstagramGrid from "@/components/home/InstagramGrid";
import NewsletterCapture from "@/components/home/NewsletterCapture";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — above the fold, 3-second brand comprehension */}
      <HeroSection />

      {/* 2. Collection cards + ornament-type filter */}
      <CollectionFilter />

      {/* 3. Festival countdown (conditional — shows when within 30 days) */}
      <FestivalCountdown />

      {/* 4. Bestsellers / New Arrivals carousel */}
      <BestsellersCarousel />

      {/* 5. Our Story strip */}
      <OurStoryStrip />

      {/* 6. Customer reviews / UGC */}
      <ReviewsStrip />

      {/* 7. Trust signals */}
      <TrustStrip />

      {/* 8. As seen on Instagram */}
      <InstagramGrid />

      {/* 9. Newsletter / WhatsApp opt-in */}
      <NewsletterCapture />
    </>
  );
}
