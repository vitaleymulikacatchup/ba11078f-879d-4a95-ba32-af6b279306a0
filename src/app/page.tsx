"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Heart, Star } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
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
            { name: "Menu", id: "/menu" },
            { name: "About", id: "/about" },
            { name: "Reviews", id: "/reviews" },
            { name: "Contact", id: "/contact" }
          ]}
          brandName="Smakachino"
          button={{
            text: "Book Table",
            href: "/contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Authentic Italian Cuisine at Smakachino"
          description="Experience the true taste of Italy with our handmade pasta, premium ingredients, and traditional recipes passed down through generations in a warm, inviting atmosphere."
          tag="Benvenuti alla Famiglia"
          tagIcon={Heart}
          imageSrc="https://pixabay.com/get/gcd6f8dbbc7c6e72ed3c2dfcd75697e7840a26e7ce3413f9a3c17b67f12f6cb0459d4199f6912bbe006835c0aa0e1140a13297f037bfaebd4112ff2bade80ccdd_1280.jpg"
          imageAlt="Warm and inviting Italian restaurant interior"
          imagePosition="right"
          buttons={[
            { text: "View Menu", href: "/menu" },
            { text: "Book Table", href: "/contact" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardOne
          title="What Makes Us Special"
          description="Discover the authentic Italian dining experience that sets Smakachino apart"
          tag="Our Specialties"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              title: "Handmade Pasta",
              description: "Fresh pasta made daily using traditional Italian techniques and the finest semolina flour",
              imageSrc: "https://pixabay.com/get/gac5bf2130521cf9d8e22cfc1ed3546a56bc5a160c9a1f6dcec1ac9054991902096712d5a789a3ebbeeb888c977e4c1ded836b510ed2945c44a9508720abcff79_1280.jpg",
              imageAlt: "Chef making fresh pasta by hand"
            },
            {
              title: "Premium Ingredients",
              description: "Imported authentic ingredients from Italy including San Marzano tomatoes, Parmigiano-Reggiano, and extra virgin olive oil",
              imageSrc: "https://pixabay.com/get/g9de216ca8a64524869f658cfb69efa7b8b4e6939ed12412c112ab3a16169738f192ab095e48a6c7c07d49f21e138b3a03dbabebdf2bad896b1dc30a9283d4229_1280.jpg",
              imageAlt: "Fresh Italian ingredients display"
            },
            {
              title: "Italian Traditions",
              description: "Time-honored cooking methods and family recipes passed down through generations of Italian chefs",
              imageSrc: "https://pixabay.com/get/g866c9dc8af35cfd71f6fae6f07f27e76350ceaf4cf581b03a9c16f01bae8f0f8a04390cb9f180aafe8526c78ea8e2fadcada0ba57df01e0decfb02303a63383c_1280.jpg",
              imageAlt: "Traditional Italian cooking methods"
            },
            {
              title: "Modern Presentation",
              description: "Contemporary plating and presentation techniques that honor tradition while creating visual masterpieces",
              imageSrc: "https://pixabay.com/get/g2377b7d86b849725f3f9b413ca6bb011b4995aba06487e8dd656cf046be3cd4a862d74baddcc13182f68ae1f96be7bf66b86d057d11906c52e390b3ec762a332_1280.jpg",
              imageAlt: "Elegantly plated Italian dish"
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
              { label: "Menu", href: "/menu" },
              { label: "About Us", href: "/about" },
              { label: "Reservations", href: "/contact" }
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