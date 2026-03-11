"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import Link from 'next/link';

export default function ContactPage() {
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

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started Free"
          tagAnimation="slide-up"
          title="Join 150K+ Farmers Using Kisan AI"
          description="Get instant access to crop advisory, market prices, weather alerts, government schemes, and livestock care guidance. No credit card required. Your agricultural journey to profitability starts here."
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/smiley-agronomist-looking-away-cornfield_23-2148233386.jpg?_wi=2"
          imageAlt="Happy farmer with successful harvest celebration"
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputPlaceholder="आपका ईमेल दर्ज करें"
          buttonText="अभी शुरू करें"
          termsText="हम आपकी गोपनीयता का सम्मान करते हैं। किसी भी समय unsubscribe कर सकते हैं। Weekly tips, weather alerts, और scheme updates प्राप्त करेंगे।"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          tag="Common Questions"
          tagAnimation="slide-up"
          title="Everything You Need to Know"
          description="Get quick answers to common questions about Kisan AI, registration, features, and support. If you have additional questions, reach out to our support team."
          textboxLayout="default"
          useInvertedBackground={false}
          mediaPosition="left"
          imageSrc="http://img.b2bpic.net/free-photo/close-up-young-gardener-selling-products_329181-16521.jpg?_wi=2"
          imageAlt="Farmer learning to use Kisan AI on mobile device"
          mediaAnimation="slide-up"
          faqsAnimation="slide-up"
          faqs={[
            {
              id: "1",
              title: "क्या Kisan AI बिल्कुल free है?",
              content: "हाँ! Kisan AI का सभी core advisory service बिल्कुल free है। हम farmers को कभी charged नहीं करते। आप unlimited crop advice, market prices, weather alerts, और government scheme information पा सकते हैं।",
            },
            {
              id: "2",
              title: "Registration के लिए क्या जानकारी चाहिए?",
              content: "हमें सिर्फ आपका नाम, मोबाइल नंबर, गांव/तहसील, खेत का आकार (एकड़ में), मिट्टी का प्रकार, और आप मुख्य रूप से कौन सी फसल उगाते हैं—यह बेसिक जानकारी चाहिए। कोई भी sensitive data नहीं।",
            },
            {
              id: "3",
              title: "मैं कौन से भाषाओं में सलाह पा सकता हूं?",
              content: "Kisan AI 8 भाषाओं में उपलब्ध है: हिंदी, पंजाबी, गुजराती, मराठी, तमिल, तेलुगु, कन्नड़, और बंगाली। आप अपनी पसंद की भाषा चुन सकते हैं और सभी सलाह उसी भाषा में प्राप्त करेंगे।",
            },
            {
              id: "4",
              title: "क्या मुझे support मिलेगा अगर कोई समस्या हो?",
              content: "बिल्कुल! हमारे support team 24/7 सभी भारतीय भाषाओं में उपलब्ध हैं। आप chat, email, या phone पर संपर्क कर सकते हैं। हम किसी भी समस्या का तुरंत समाधान करते हैं।",
            },
            {
              id: "5",
              title: "Kisan AI किन राज्यों में काम करता है?",
              content: "Kisan AI वर्तमान में भारत के 15 राज्यों में सक्रिय है। हम में Punjab, Haryana, Uttar Pradesh, Maharashtra, Karnataka, Madhya Pradesh, Rajasthan, Gujarat, Tamil Nadu, Telangana, Andhra Pradesh, Bihar, Jharkhand, Odisha, और West Bengal शामिल हैं।",
            },
            {
              id: "6",
              title: "क्या मेरा data सुरक्षित है?",
              content: "हाँ। हम आपके सभी personal और farm data को highest security standards के साथ encrypt करते हैं। हम कभी भी आपकी जानकारी third parties को share नहीं करते। आपकी privacy हमारी top priority है।",
            },
            {
              id: "7",
              title: "मुझे real-time updates कैसे मिलेंगे?",
              content: "एक बार registration के बाद, आप अपने mobile app या website के through dashboard से access कर सकते हैं। Weather alerts, price updates, disease warnings, और personalized recommendations automatically push notifications के through आते हैं।",
            },
            {
              id: "8",
              title: "क्या छोटे जोतों के लिए Kisan AI सही है?",
              content: "बिल्कुल! Kisan AI विशेष रूप से छोटे जोतों (1-5 एकड़) के लिए डिजाइन किया गया है। हमारी सभी सलाह low-cost techniques और accessible resources पर केंद्रित है। 80% से अधिक हमारे users small holder farmers हैं।",
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