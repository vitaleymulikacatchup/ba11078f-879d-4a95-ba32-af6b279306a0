"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FooterBase from '@/components/sections/footer/FooterBase';
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function ReviewsPage() {
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
            { name: "Contact", id: "/contact" }
          ]}
          brandName="Smakachino"
          button={{
            text: "Book Table",
            href: "/contact"
          }}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Hear from our valued customers about their authentic Italian dining experience"
          tag="Guest Reviews"
          tagIcon={MessageCircle}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Maria Rossi",
              role: "Food Enthusiast",
              company: "Milan",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gb5d3799273c173686454de320c36864dcadcec720aebd893856a872594d4ce5645734413a249409b61fc5863e5bfbdac16cd5ce01cf180903d9eaa1e5c0da23a_1280.jpg",
              imageAlt: "Maria Rossi dining at Smakachino"
            },
            {
              id: "2",
              name: "Giovanni Bianchi",
              role: "Local Food Critic",
              company: "Roma Today",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g246d39b3558fda2c2b9244978081ed62e04d9e8ae20c99fbfc6fa907593893e12afff957008f7a0257ef870058ba76fb71825bf5529fcc595379338f063bcf3f_1280.jpg",
              imageAlt: "Giovanni Bianchi food critic"
            },
            {
              id: "3",
              name: "Elena Francesca",
              role: "Travel Blogger",
              company: "Italy Insider",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g82de6f99bdb250602f7a8bc6d2f3ec380b50b68cd680617c6e0653dd75e7246cf85925890ad8c797fc3999fc088c264b34e0c08ed1094bf8dbf72dbf2e344d90_1280.jpg",
              imageAlt: "Elena Francesca travel blogger"
            },
            {
              id: "4",
              name: "Marco Lombardi",
              role: "Chef",
              company: "Culinary Institute",
              rating: 5,
              imageSrc: "https://pixabay.com/get/ge2f732b50a5ed89da782c94ac8537bd9025ec804d90b9721320454d5a5755806d03fcb827c2903dd723ed640cc21f90c2d2bfac3a6b950b833f44f32e7107f64_1280.jpg",
              imageAlt: "Marco Lombardi professional chef"
            },
            {
              id: "5",
              name: "Sofia Benedetti",
              role: "Wine Sommelier",
              company: "Tuscany Wines",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g1e6b58f69a9a20a428098b12438d3c964b26b669990726740129f54e71f2b1dcf78583b8d654794e4376753ff5047b577769d660594eb47eeb423c89344dc991_1280.jpg",
              imageAlt: "Sofia Benedetti wine expert"
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