"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import FooterBase from '@/components/sections/footer/FooterBase';
import { ChefHat, Utensils, Star, Award, Users } from "lucide-react";
import Link from "next/link";

export default function MenuPage() {
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

      <div id="menu" data-section="menu">
        <ProductCardOne
          title="Signature Dishes"
          description="Explore our most beloved Italian creations, crafted with passion and authentic ingredients"
          tag="Menu Highlights"
          tagIcon={ChefHat}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "carbonara",
              name: "Spaghetti alla Carbonara",
              price: "€22",
              imageSrc: "https://pixabay.com/get/g931fe1507a0ab28fde942311e4813f1a6914bb792735cce550ff4b03f81ba36f72a729581e74c37cd66f005c6f0f7f9141ca0e5afcf632ab139531df0e075251_1280.jpg",
              imageAlt: "Creamy spaghetti carbonara with guanciale"
            },
            {
              id: "margherita",
              name: "Pizza Margherita",
              price: "€18",
              imageSrc: "https://pixabay.com/get/g21f3433093afb89d3569f2f1924de2908813ce635bc3210a9831a45178dfb08e241bebe810172f3b7ad1f4b07085a1bb644e1ad9c10c5c599affaa14e2806b62_1280.jpg",
              imageAlt: "Classic margherita pizza with fresh basil"
            },
            {
              id: "tiramisu",
              name: "Tiramisu della Casa",
              price: "€12",
              imageSrc: "https://pixabay.com/get/g5d41ca5d892673fc194360c25daa211f8ec4db3713e1c87d8388347e81be00324d4c61527dad0d50a7455a967122bf909bc997264f4bad1f7faba4bad4536f79_1280.jpg",
              imageAlt: "Homemade tiramisu dessert"
            },
            {
              id: "wine-selection",
              name: "Chianti Classico",
              price: "€8/glass",
              imageSrc: "https://pixabay.com/get/g2699f86686d7484a62013505ca894f216ebfbadbe0764f6cd7ca8b78d45cf88fc0a8d48ef484a615c914a5b0110807a30012d384a3ef96f60a8dbd09ff43ea74_1280.jpg",
              imageAlt: "Italian wine pairing"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Dining Experiences"
          description="Choose the perfect dining experience for your special occasion"
          tag="Experiences"
          tagIcon={Utensils}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "casual-dining",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "€35-45",
              subtitle: "Perfect for date nights and casual dining",
              features: [
                "À la carte menu selection",
                "Complimentary bread and olive oil",
                "Wine pairing recommendations",
                "Dessert of the day"
              ]
            },
            {
              id: "chef-special",
              badge: "Chef's Choice",
              badgeIcon: Award,
              price: "€65",
              subtitle: "Curated tasting experience",
              features: [
                "5-course tasting menu",
                "Wine pairing included",
                "Seasonal specialties",
                "Chef's personal recommendations",
                "Limoncello digestif"
              ]
            },
            {
              id: "family-feast",
              badge: "Family Style",
              badgeIcon: Users,
              price: "€25/person",
              subtitle: "Perfect for families and large groups",
              features: [
                "Shared appetizer platters",
                "Choice of 3 main courses",
                "Family-style portions",
                "Children's menu available",
                "Complimentary limoncello for adults"
              ]
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