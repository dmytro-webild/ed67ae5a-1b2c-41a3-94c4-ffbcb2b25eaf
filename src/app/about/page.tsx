"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import MediaAbout from '@/components/sections/about/MediaAbout';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import Link from 'next/link';
import { Star, Zap } from 'lucide-react';

export default function AboutPage() {
  const navItems = [
    { name: "Features", id: "features" },
    { name: "How It Works", id: "how-it-works" },
    { name: "Solutions", id: "solutions" },
    { name: "Testimonials", id: "testimonials" },
    { name: "FAQ", id: "faq" },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="mediumLargeSizeLargeTitles"
      background="floatingGradient"
      cardStyle="subtle-shadow"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Kisan AI"
          navItems={navItems}
          button={{
            text: "अभी शुरू करें",
            href: "/contact",
          }}
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Empowering Indian Farmers with AI-Driven Agricultural Intelligence"
          description="Kisan AI is built on a mission to bridge the gap between traditional farming wisdom and modern technology. We combine government agricultural data, market intelligence, and AI insights to provide farmers with actionable, real-time guidance tailored to their specific needs and regional context."
          tag="About Kisan AI"
          imageSrc="http://img.b2bpic.net/free-photo/full-shot-smiley-woman-farm_23-2149059792.jpg"
          imageAlt="Diverse Indian farming scenarios—smallholder, progressive, and livestock operations"
          buttons={[
            { text: "Explore Our Impact", href: "/" },
          ]}
          useInvertedBackground={false}
        />
      </div>

      <div id="mission" data-section="mission">
        <FeatureCardSix
          tag="Our Impact"
          tagIcon={Zap}
          tagAnimation="slide-up"
          title="Why Farmers Choose Kisan AI"
          description="Three core reasons make Kisan AI the trusted agricultural partner for Indian farmers seeking sustainable growth and profitability."
          textboxLayout="default"
          useInvertedBackground={false}
          buttonAnimation="slide-up"
          features={[
            {
              id: 1,
              title: "Trust Through Data",
              description: "Our recommendations are powered by ICAR (Indian Council of Agricultural Research) and NABARD (National Bank for Agriculture and Rural Development) data, ensuring accuracy and reliability trusted by government agencies and farmers alike.",
              imageSrc: "http://img.b2bpic.net/free-photo/medium-view-man-reading-from-clipboard_23-2148233496.jpg?_wi=2",
            },
            {
              id: 2,
              title: "Multilingual & Accessible",
              description: "Available in 8 Indian languages including Hindi, Punjabi, Gujarati, Marathi, Tamil, Telugu, Kannada, and Bengali. We meet farmers where they are, removing language barriers to agricultural excellence.",
              imageSrc: "http://img.b2bpic.net/free-photo/two-workers-communicating-while-checking-growth-plants-plant-nursery_637285-1526.jpg?_wi=2",
            },
            {
              id: 3,
              title: "Farmer-Centric Design",
              description: "Built directly with input from small holders, progressive farmers, and livestock owners across 15 Indian states. Every feature is designed with farmer success and profitability in mind.",
              imageSrc: "http://img.b2bpic.net/free-photo/farmer-cowshed-feeding-cows-farm_1303-30808.jpg?_wi=2",
            },
            {
              id: 4,
              title: "Real-Time Intelligence",
              description: "Live market prices from mandis, location-specific weather forecasts, and instant pest/disease identification mean farmers always have the latest information for better decisions.",
              imageSrc: "http://img.b2bpic.net/free-photo/farmer-inspecting-tomato-plants-greenhouse_23-2152020402.jpg?_wi=2",
            },
            {
              id: 5,
              title: "Government Scheme Database",
              description: "Our curated collection of PM Kisan, crop insurance, subsidies, and state-level programs helps farmers access ₹2.5 Cr+ in collective annual benefits without bureaucratic barriers.",
              imageSrc: "http://img.b2bpic.net/free-photo/nature-ecology-science-concept_273609-6425.jpg?_wi=2",
            },
            {
              id: 6,
              title: "Holistic Support",
              description: "From crop advisory and weather management to livestock care and sustainable farming techniques, Kisan AI covers every aspect of modern, profitable Indian agriculture.",
              imageSrc: "http://img.b2bpic.net/free-photo/plant-garden-still-life_23-2148128683.jpg?_wi=2",
            },
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          tag="Real Stories of Success"
          tagIcon={Star}
          tagAnimation="slide-up"
          title="Farmers Across India Trust Kisan AI"
          description="Read how farmers from different regions, farm sizes, and backgrounds have transformed their agricultural practices and income with Kisan AI guidance."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "राज कुमार",
              role: "Small Holder Farmer, 3 acres, Haryana",
              testimonial: "पिछले 2 साल में मेरी गेहूं की उपज 25% बढ़ गई। सही समय पर कीटनाशक और खाद की सलाह मिल जाती है। अब मेरा कर्ज भी कम हो गया।",
              imageSrc: "http://img.b2bpic.net/free-photo/man-greenhouse_1398-1871.jpg?_wi=3",
            },
            {
              id: "2",
              name: "प्रिया शर्मा",
              role: "Progressive Farmer, 8 acres, Punjab",
              testimonial: "Market price alerts से मैं सही समय पर अपनी फसल बेचता हूं। Real-time data से मेरी आय 35% बढ़ गई। Government schemes की जानकारी से ₹1.5 लाख की subsidy मिल गई।",
              imageSrc: "http://img.b2bpic.net/free-photo/successful-confident-businesswoman-manages-financial-planning_482257-107979.jpg?_wi=3",
            },
            {
              id: "3",
              name: "विक्रम सिंह",
              role: "Livestock Owner, 12 cattle, UP",
              testimonial: "Veterinary guidance से मेरे पशुओं की बीमारियों में 60% कमी आई। Milk production में 40% वृद्धि हुई। परिवार की कुल आय दोगुनी हो गई।",
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-indian-man-bazaar_23-2150913294.jpg?_wi=3",
            },
            {
              id: "4",
              name: "अमित पटेल",
              role: "Young Farmer, 6 acres, Maharashtra",
              testimonial: "Organic farming guide से मैंने सफलतापूर्वक transition किया। Premium prices मिल रहे हैं। AI insights से sustainable और profitable दोनों बन गया।",
              imageSrc: "http://img.b2bpic.net/free-photo/indian-woman-showing-isolated-copy-space-display-front-camera_482257-122375.jpg?_wi=3",
            },
            {
              id: "5",
              name: "सीता देवी",
              role: "Vegetable Farmer, 2 acres, Karnataka",
              testimonial: "Weather predictions से मैं सही समय पर बीज बोता हूं। Crop failure का डर खत्म हो गया। अब हर महीने ₹15,000 तक कमाती हूं।",
              imageSrc: "/placeholders/placeholder1.webp?_wi=3",
            },
            {
              id: "6",
              name: "नरेश गुप्ता",
              role: "Dairy Farmer, 8 cows, Rajasthan",
              testimonial: "Vaccination schedule और feed optimization से milk quality improve हुई। Cooperative को premium price मिल रहा है। अब 5 गांव के किसान भी Kisan AI use कर रहे हैं।",
              imageSrc: "/placeholders/placeholder1.webp?_wi=4",
            },
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Kisan AI"
          leftLink={{ text: "Privacy Policy", href: "/privacy" }}
          rightLink={{ text: "Terms & Conditions", href: "/terms" }}
        />
      </div>
    </ThemeProvider>
  );
}