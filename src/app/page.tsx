"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import Link from 'next/link';
import { Sprout, Zap, Smartphone, Star, CheckCircle, TrendingUp, Award, Leaf, Users } from 'lucide-react';

export default function HomePage() {
  const navItems = [
    { name: "Features", id: "features" },
    { name: "How It Works", id: "how-it-works" },
    { name: "Solutions", id: "solutions" },
    { name: "Testimonials", id: "testimonials" },
    { name: "FAQ", id: "faq" },
  ];

  const navLinks = [
    { label: "Features", href: "/#features" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Solutions", href: "/#solutions" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "FAQ", href: "/#faq" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="mediumLargeSizeLargeTitles"
      background="circleGradient"
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
            text: "अभी शुरू करें",            href: "/contact"}}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardTestimonial
          tag="आपके खेत का साथी"
          tagIcon={Sprout}
          tagAnimation="slide-up"
          title="आपके खेत का सबसे विश्वसनीय साथी Your Fields Most Trusted Partner"
          description="Realtime farming solutions in your language. Get instant answers on crops, weather, prices, schemes, and livestock care—trusted by Indian farmers, powered by ICAR and NABARD data."
          background={{ variant: "plain" }}
          imageSrc="http://img.b2bpic.net/free-photo/woman-harvesting-vegetables_23-2148568617.jpg"
          imageAlt="Indian farmer in his field with crops and agricultural tools"
          mediaAnimation="slide-up"
          testimonials={[
            {
              name: "राज कुमार",              handle: "Small Holder Farmer, Haryana",              testimonial: "Kisan AI ने मेरी फसल की उपज 25% बढ़ा दी। अब मुझे सही समय पर सही सलाह मिलता है।",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/man-greenhouse_1398-1871.jpg?_wi=1"},
            {
              name: "प्रिया शर्मा",              handle: "Progressive Farmer, Punjab",              testimonial: "Real-time market prices और government schemes की जानकारी एक जगह से मिलना बेहद कारगर है। मेरी आय में उल्लेखनीय वृद्धि हुई।",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/successful-confident-businesswoman-manages-financial-planning_482257-107979.jpg?_wi=1"},
            {
              name: "विक्रम सिंह",              handle: "Livestock Owner, UP",              testimonial: "पशुचिकित्सा सलाह और पोषण गाइडेंस के कारण मेरे पशुओं का स्वास्थ्य बेहतर हो गया। परिवार की आय में 40% इजाफा हुआ।",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-indian-man-bazaar_23-2150913294.jpg?_wi=1"},
            {
              name: "अमित पटेल",              handle: "Young Farmer, Maharashtra",              testimonial: "AI-powered insights ने मेरी खेती को आधुनिक बनाया। डेटा-ड्रिवन निर्णय लेना अब आसान है।",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/indian-woman-showing-isolated-copy-space-display-front-camera_482257-122375.jpg?_wi=1"},
          ]}
          buttons={[
            { text: "अभी शुरू करें - Start Now", href: "/contact" },
            { text: "Free Farm Advice", href: "/contact" },
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardSix
          tag="Core Capabilities"
          tagIcon={Zap}
          tagAnimation="slide-up"
          title="Real-Time Farming Solutions"
          description="Comprehensive agricultural guidance powered by government data, market intelligence, and AI-driven insights tailored to Indian farming conditions."
          textboxLayout="default"
          useInvertedBackground={false}
          buttonAnimation="slide-up"
          features={[
            {
              id: 1,
              title: "Crop Advisory & Disease Detection",              description: "Real-time crop health monitoring, pest & disease identification with treatment recommendations in Hindi, Punjabi, Marathi, Tamil, and regional languages.",              imageSrc: "http://img.b2bpic.net/free-photo/farmer-inspecting-tomato-plants-greenhouse_23-2152020402.jpg"},
            {
              id: 2,
              title: "Weather & Water Management",              description: "Location-specific weather forecasts, rainfall predictions, and water conservation techniques to optimize irrigation and reduce water stress.",              imageSrc: "http://img.b2bpic.net/free-vector/ecology-background-design_1212-319.jpg"},
            {
              id: 3,
              title: "Market Price Intelligence",              description: "Live mandi rates, price trends, and best-selling timing recommendations to help farmers maximize profits on crop sales.",              imageSrc: "http://img.b2bpic.net/free-photo/fruit-stand-background_23-2147960255.jpg"},
            {
              id: 4,
              title: "Government Schemes & Subsidies",              description: "Curated database of PM Kisan, crop insurance, fertilizer subsidies, and state-level agricultural schemes with eligibility checks and application guides.",              imageSrc: "http://img.b2bpic.net/free-photo/medium-view-man-reading-from-clipboard_23-2148233496.jpg"},
            {
              id: 5,
              title: "Livestock Care & Veterinary Support",              description: "Animal health diagnostics, vaccination schedules, feed optimization, and emergency veterinary guidance for cattle, goats, poultry, and dairy operations.",              imageSrc: "http://img.b2bpic.net/free-photo/farmer-cowshed-feeding-cows-farm_1303-30808.jpg"},
            {
              id: 6,
              title: "Sustainable Farming Techniques",              description: "Step-by-step guides on organic farming, soil health restoration, water harvesting, and profitable alternative crops for long-term sustainability.",              imageSrc: "http://img.b2bpic.net/free-photo/plant-garden-still-life_23-2148128683.jpg"},
          ]}
        />
      </div>

      <div id="how-it-works" data-section="how-it-works">
        <ProductCardTwo
          tag="Get Started in Minutes"
          tagIcon={Smartphone}
          tagAnimation="slide-up"
          title="How Kisan AI Works - 4 Simple Steps"
          description="From farmer registration to actionable advice—our streamlined process puts powerful agricultural intelligence in your hands."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          gridVariant="four-items-2x2-equal-grid"
          products={[
            {
              id: "step-1",              brand: "Step 1",              name: "Register & Verify",              price: "✓",              rating: 5,
              reviewCount: "Easy",              imageSrc: "http://img.b2bpic.net/free-photo/smiley-man-indicating-phone-mock-up_23-2148233425.jpg"},
            {
              id: "step-2",              brand: "Step 2",              name: "Input Farm Details",              price: "✓",              rating: 5,
              reviewCount: "Quick",              imageSrc: "http://img.b2bpic.net/free-photo/nature-ecology-science-concept_273609-6425.jpg"},
            {
              id: "step-3",              brand: "Step 3",              name: "Get AI Recommendations",              price: "✓",              rating: 5,
              reviewCount: "Instant",              imageSrc: "http://img.b2bpic.net/free-photo/woman-science-assistant-agricultural-officer-greenhouse-farm-research-melon_1150-10626.jpg"},
            {
              id: "step-4",              brand: "Step 4",              name: "Track & Optimize",              price: "✓",              rating: 5,
              reviewCount: "Ongoing",              imageSrc: "http://img.b2bpic.net/free-photo/agronomist-examines-growing-melon-seedlings-farm-farmers-researchers-analysis-plant_1150-10620.jpg"},
          ]}
        />
      </div>

      <div id="solutions" data-section="solutions">
        <MediaAbout
          tag="Tailored Solutions"
          tagAnimation="slide-up"
          title="Solutions for Every Farming Context"
          description="Whether you cultivate wheat and rice, manage dairy cattle, grow cash crops, or practice organic farming, Kisan AI delivers personalized guidance aligned to your specific agricultural profile and regional practices."
          imageSrc="http://img.b2bpic.net/free-photo/full-shot-smiley-woman-farm_23-2149059792.jpg"
          imageAlt="Diverse Indian farming scenarios—smallholder, progressive, and livestock operations"
          buttons={[
            { text: "Explore All Solutions", href: "#features" }
          ]}
          useInvertedBackground={false}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardEleven
          tag="Impact & Trust"
          tagAnimation="slide-up"
          title="Farmers Trust Kisan AI"
          description="Real results from the Indian agricultural community, powered by ICAR data and NABARD expertise."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          metrics={[
            {
              id: "1",              value: "150K+",              title: "Active Farmers",              description: "Using Kisan AI across 15 states in India",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-indian-people-celebrating-baisakhi-festival_23-2151216938.jpg"},
            {
              id: "2",              value: "₹2.5 Cr+",              title: "Farmer Income Increased",              description: "Average 25-40% yield and profit improvement",              imageSrc: "http://img.b2bpic.net/free-photo/smiley-man-looking-away-field_23-2148233497.jpg"},
            {
              id: "3",              value: "98%",              title: "Satisfaction Rate",              description: "Farmers rate our advice as highly reliable",              imageSrc: "http://img.b2bpic.net/free-photo/young-farmer-taking-care-his-business_329181-15998.jpg"},
            {
              id: "4",              value: "8",              title: "Languages Supported",              description: "Hindi, Punjabi, Gujarati, Marathi, Tamil, Telugu, Kannada, Bengali",              imageSrc: "http://img.b2bpic.net/free-photo/two-workers-communicating-while-checking-growth-plants-plant-nursery_637285-1526.jpg"},
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          tag="Real Success Stories"
          tagIcon={Star}
          tagAnimation="slide-up"
          title="What Farmers Say About Kisan AI"
          description="Hear from small holders, progressive farmers, and livestock owners across India who have transformed their agricultural productivity and income."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          testimonials={[
            {
              id: "1",              name: "राज कुमार",              role: "Small Holder Farmer, 3 acres, Haryana",              testimonial: "पिछले 2 साल में मेरी गेहूं की उपज 25% बढ़ गई। सही समय पर कीटनाशक और खाद की सलाह मिल जाती है। अब मेरा कर्ज भी कम हो गया।",              imageSrc: "http://img.b2bpic.net/free-photo/man-greenhouse_1398-1871.jpg?_wi=2",              icon: CheckCircle,
            },
            {
              id: "2",              name: "प्रिया शर्मा",              role: "Progressive Farmer, 8 acres, Punjab",              testimonial: "Market price alerts से मैं सही समय पर अपनी फसल बेचता हूं। Real-time data से मेरी आय 35% बढ़ गई। Government schemes की जानकारी से ₹1.5 लाख की subsidy मिल गई।",              imageSrc: "http://img.b2bpic.net/free-photo/successful-confident-businesswoman-manages-financial-planning_482257-107979.jpg?_wi=2",              icon: TrendingUp,
            },
            {
              id: "3",              name: "विक्रम सिंह",              role: "Livestock Owner, 12 cattle, UP",              testimonial: "Veterinary guidance से मेरे पशुओं की बीमारियों में 60% कमी आई। Milk production में 40% वृद्धि हुई। परिवार की कुल आय दोगुनी हो गई।",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-indian-man-bazaar_23-2150913294.jpg?_wi=2",              icon: Award,
            },
            {
              id: "4",              name: "अमित पटेल",              role: "Young Farmer, 6 acres, Maharashtra",              testimonial: "Organic farming guide से मैंने सफलतापूर्वक transition किया। Premium prices मिल रहे हैं। AI insights से sustainable और profitable दोनों बन गया।",              imageSrc: "http://img.b2bpic.net/free-photo/indian-woman-showing-isolated-copy-space-display-front-camera_482257-122375.jpg?_wi=2",              icon: Leaf,
            },
            {
              id: "5",              name: "सीता देवी",              role: "Vegetable Farmer, 2 acres, Karnataka",              testimonial: "Weather predictions से मैं सही समय पर बीज बोता हूं। Crop failure का डर खत्म हो गया। अब हर महीने ₹15,000 तक कमाती हूं।",              imageSrc: "/placeholders/placeholder1.webp?_wi=1",              icon: Zap,
            },
            {
              id: "6",              name: "नरेश गुप्ता",              role: "Dairy Farmer, 8 cows, Rajasthan",              testimonial: "Vaccination schedule और feed optimization से milk quality improve हुई। Cooperative को premium price मिल रहा है। अब 5 गांव के किसान भी Kisan AI use कर रहे हैं।",              imageSrc: "/placeholders/placeholder1.webp?_wi=2",              icon: Users,
            },
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          tag="Help & Support"
          tagAnimation="slide-up"
          title="Frequently Asked Questions"
          description="Get answers to common questions about Kisan AI, how it works, and how to maximize benefits for your farm."
          textboxLayout="default"
          useInvertedBackground={false}
          mediaPosition="right"
          imageSrc="http://img.b2bpic.net/free-photo/close-up-young-gardener-selling-products_329181-16521.jpg"
          imageAlt="Farmer learning to use Kisan AI on mobile device"
          mediaAnimation="slide-up"
          faqsAnimation="slide-up"
          faqs={[
            {
              id: "1",              title: "क्या Kisan AI सभी भारतीय भाषाओं में उपलब्ध है?",              content: "हाँ, Kisan AI 8 भारतीय भाषाओं में काम करता है: हिंदी, पंजाबी, गुजराती, मराठी, तमिल, तेलुगु, कन्नड़, और बंगाली। आप अपनी पसंद की भाषा चुन सकते हैं और सभी सलाह अपनी भाषा में प्राप्त कर सकते हैं।"},
            {
              id: "2",              title: "क्या यह छोटे जोतों वाले किसानों के लिए भी उपयोगी है?",              content: "बिल्कुल! Kisan AI विशेष रूप से छोटे जोतों (1-5 एकड़) वाले किसानों के लिए डिजाइन किया गया है। हमारी सलाह कम लागत वाली तकनीकों और government schemes पर केंद्रित है जो छोटे किसानों को सर्वाधिक लाभ देते हैं।"},
            {
              id: "3",              title: "Kisan AI के लिए कौन-कौन सी जानकारी देनी पड़ेगी?",              content: "आपको अपना नाम, गांव, खेत का आकार, मिट्टी का प्रकार, और आप क्या फसल उगाते हैं—यह जानकारी देनी होगी। फिर Kisan AI आपकी location और farm profile के अनुसार personalized recommendations देगा। कोई भी sensitive personal data नहीं मांगा जाता।"},
            {
              id: "4",              title: "क्या Kisan AI government schemes की जानकारी देता है?",              content: "हाँ, Kisan AI में PM Kisan, crop insurance, fertilizer subsidies, irrigation schemes, और अन्य केंद्रीय और state-level schemes की अपडेटेड जानकारी है। हम आपको बताते हैं कि आप किन schemes के लिए eligible हैं और कैसे apply करें।"},
            {
              id: "5",              title: "क्या Kisan AI livestock care के लिए भी काम करता है?",              content: "हाँ, Kisan AI में पशुपालन के लिए भी comprehensive guidance है। हम animal health diagnostics, vaccination schedules, feed optimization, और veterinary emergency support देते हैं। यह cattle, goats, poultry, और dairy operations सभी के लिए काम करता है।"},
            {
              id: "6",              title: "Market prices की जानकारी कितनी frequently update होती है?",              content: "Market prices real-time में update होती हैं। आप अपने nearest mandi के latest prices देख सकते हैं और Kisan AI आपको सलाह देता है कि सही selling time क्या है। Price trends से आप भविष्य की planning कर सकते हैं।"},
            {
              id: "7",              title: "क्या Kisan AI पूरी तरह free है?",              content: "Kisan AI का basic advisory service बिल्कुल free है। हम farmers को कभी charged नहीं करते। Premium features जैसे advanced analytics या consulting भविष्य में आ सकते हैं, लेकिन core guidance सदा free रहेगी।"},
            {
              id: "8",              title: "अगर मेरा सवाल FAQ में नहीं है तो?",              content: "आप हमारे support team से direct contact कर सकते हैं। हम chat, email, और phone support सभी भारतीय भाषाओं में देते हैं। आपका सवाल कितना भी सरल हो, हम जवाब देंगे और मदद करेंगे।"},
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Connected"
          tagAnimation="slide-up"
          title="Get Free Farm Advice Today"
          description="Join 150K+ Indian farmers who are already using Kisan AI to boost yields, save money, and farm sustainably. Subscribe to our newsletter for weekly tips, weather alerts, and government scheme updates."
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/smiley-agronomist-looking-away-cornfield_23-2148233386.jpg"
          imageAlt="Happy farmer with successful harvest celebration"
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputPlaceholder="आपका ईमेल दर्ज करें"
          buttonText="अभी शुरू करें"
          termsText="हम आपकी गोपनीयता का सम्मान करते हैं। किसी भी समय unsubscribe कर सकते हैं।"
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
