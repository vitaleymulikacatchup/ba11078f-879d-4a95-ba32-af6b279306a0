"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterBase from '@/components/sections/footer/FooterBase';
import { HelpCircle } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="medium"
      sizing="small"
      background="radialGradient"
      cardStyle="glass-depth"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "/" },
            { name: "Menu", id: "/menu" },
            { name: "About", id: "/about" },
            { name: "Reviews", id: "/reviews" }
          ]}
          brandName="Smakachino"
          button={{
            text: "Book Table",
            href: "/contact"
          }}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Reserve Your Table"
          description="Book your authentic Italian dining experience at Smakachino. We'll confirm your reservation within 2 hours."
          buttonText="Book Now"
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            { name: "date", type: "date", placeholder: "Preferred Date", required: true },
            { name: "time", type: "time", placeholder: "Preferred Time", required: true },
            { name: "guests", type: "number", placeholder: "Number of Guests", required: true }
          ]}
          textarea={{
            name: "special_requests",
            placeholder: "Special requests, dietary restrictions, or occasion details...",
            rows: 4,
            required: false
          }}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Everything you need to know about dining at Smakachino"
          tag="Questions"
          tagIcon={HelpCircle}
          textboxLayout="default"
          imageSrc="https://pixabay.com/get/g6fa6d0ca5f2d81ba1ed286ae06be784238047381d37b3add33e490cead01213a7d2453d40d1ed159e6cbe0d32cb77ab858a60713e00fb4915dfef9157d75fa18_1280.jpg"
          imageAlt="Smakachino restaurant exterior"
          mediaPosition="right"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "Do you take reservations?",
              content: "Yes, we highly recommend making a reservation, especially for dinner service and weekends. You can book online through our website or call us directly."
            },
            {
              id: "2",
              title: "Do you accommodate dietary restrictions?",
              content: "Absolutely! We offer gluten-free pasta options, vegetarian dishes, and can accommodate most dietary restrictions. Please inform us when making your reservation."
            },
            {
              id: "3",
              title: "What are your operating hours?",
              content: "We're open Tuesday through Sunday. Lunch: 12:00 PM - 3:00 PM, Dinner: 6:00 PM - 10:00 PM. We're closed on Mondays for ingredient sourcing and preparation."
            },
            {
              id: "4",
              title: "Do you offer wine pairings?",
              content: "Yes! Our sommelier has carefully selected Italian wines that complement our dishes perfectly. We offer both individual glass pairings and full tasting menu wine packages."
            },
            {
              id: "5",
              title: "Is parking available?",
              content: "We have valet parking service available during dinner hours, and there's also street parking nearby. We validate parking for the municipal lot across the street."
            }
          ]}
        />
      </div>

      <FooterBase
        logoText="Smakachino"
        copyrightText="© 2025 | Smakachino Italian Restaurant"
        columns={[
          {
            title: "Restaurant",
            items: [
              { label: "Home", href: "/" },
              { label: "Menu", href: "/menu" },
              { label: "About Us", href: "/about" }
            ]
          },
          {
            title: "Contact",
            items: [
              { label: "Location", href: "/contact" },
              { label: "Phone: +1 (555) 123-4567" },
              { label: "Hours: Tue-Sun 12-10pm" }
            ]
          },
          {
            title: "Experience",
            items: [
              { label: "Wine List", href: "/menu" },
              { label: "Private Events", href: "/contact" },
              { label: "Gift Cards", href: "/contact" }
            ]
          }
        ]}
      />
    </ThemeProvider>
  );
}