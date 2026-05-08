"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Award, CheckCircle, Star, Utensils } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="small"
        sizing="mediumLarge"
        background="circleGradient"
        cardStyle="layered-gradient"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Menu",          id: "menu"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Tacos Victor Montréal"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Authentic Tacos, Montreal Flavor, Pure Satisfaction"
      description="Handcrafted tacos made fresh daily with premium ingredients. Experience the taste of Mexico in the heart of MTL."
      testimonials={[
        {
          name: "Marc L.",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-waitress-standing-counter_1170-668.jpg",          handle: "@mtlfoodie",          testimonial: "Best tacos in the city, hands down!",          rating: 5,
        },
        {
          name: "Sophie B.",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-beautiful-girl-with-lemons_23-2148483076.jpg",          handle: "@mtleats",          testimonial: "Authentic and fresh flavors.",          rating: 5,
        },
        {
          name: "Jean P.",          imageSrc: "http://img.b2bpic.net/free-photo/friends-eating-conversating-restaurant_23-2148006709.jpg",          handle: "@tacolover",          testimonial: "Quick lunch spot with amazing quality.",          rating: 4,
        },
        {
          name: "Camille R.",          imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-man-smiling-cheerfully-showing-thumbs-up-standing-pink-wall_141793-23039.jpg",          handle: "@montrealfood",          testimonial: "Hidden gem in MTL.",          rating: 5,
        },
        {
          name: "Alex D.",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-male-courier-yellow-uniform-holding-delivery-bowl-light-pink-background_140725-40686.jpg",          handle: "@foodie",          testimonial: "The al pastor is perfection.",          rating: 5,
        },
      ]}
      buttons={[
        {
          text: "View Menu & Order Now",          href: "#menu"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/top-view-tasty-mexican-food-ready-be-served_23-2148614398.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-with-food_23-2148899052.jpg",          alt: "Customer 1"},
        {
          src: "http://img.b2bpic.net/free-photo/smiling-man-enjoying-croissant_1170-631.jpg",          alt: "Customer 2"},
        {
          src: "http://img.b2bpic.net/free-photo/happy-young-female-student-eating-fast-food-fast-food-cheat-meal_169016-67586.jpg",          alt: "Customer 3"},
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-with-kebab_23-2148773545.jpg",          alt: "Customer 4"},
        {
          src: "http://img.b2bpic.net/free-photo/hipster-with-stylish-haircut-beard-sits-table-roadside-cafe-drinks-soda-hot-day_613910-19633.jpg",          alt: "Customer 5"},
      ]}
      avatarText="Loved by over 50k taco fans in Montreal"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="Our Story"
      title="From Mexico to Montreal"
      description="Born from a passion for traditional flavors, we bring the heart of street-style cooking to the streets of Montreal. Every taco is a tribute to heritage."
      subdescription="Fresh, locally sourced, and crafted with love, our kitchen is where tradition meets the vibrant MTL culinary scene."
      imageSrc="http://img.b2bpic.net/free-photo/mexican-food-concept-with-tacos-plate_23-2147812205.jpg"
      mediaAnimation="slide-up"
      icon={Utensils}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Fresh Ingredients",          description: "Locally sourced produce and premium meats delivered daily.",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-fresh-tortillas-with-meat-vegetables_23-2148614372.jpg"},
        {
          title: "Handcrafted Tortillas",          description: "Made fresh throughout the day for that authentic texture.",          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-mexican-food-composition_23-2148131285.jpg"},
        {
          title: "Authentic Recipes",          description: "Generational recipes inspired by Mexico's best street food.",          imageSrc: "http://img.b2bpic.net/free-photo/overhead-view-tomato-soup-blue-bowl-brown-wooden-tray-mixed-color-table_140725-86972.jpg"},
      ]}
      title="What Makes Us Special"
      description="We don't cut corners. From our hand-pressed tortillas to our signature house-made salsas, quality is in our DNA."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",          name: "Al Pastor",          price: "$4.50",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-delicious-tacos-with-avocado_23-2152026865.jpg"},
        {
          id: "p2",          name: "Carne Asada",          price: "$5.00",          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-tortilla-with-meat-vegetables_23-2148750445.jpg"},
        {
          id: "p3",          name: "Black Bean & Avocado",          price: "$4.00",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-hands-holding-delicious-taco_23-2151048050.jpg"},
        {
          id: "p4",          name: "Baja Fish",          price: "$5.50",          imageSrc: "http://img.b2bpic.net/free-photo/palatable-shrimp-dish_23-2147761580.jpg"},
        {
          id: "p5",          name: "Chorizo",          price: "$4.50",          imageSrc: "http://img.b2bpic.net/free-photo/guacamole_23-2148024743.jpg"},
        {
          id: "p6",          name: "Grilled Shrimp",          price: "$5.50",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-tacos-with-shrimps_23-2148629378.jpg"},
      ]}
      title="Our Taco Menu"
      description="Explore our curated selection of signature street-style tacos."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          icon: CheckCircle,
          title: "Tacos Served",          value: "50,000+"},
        {
          id: "m2",          icon: Star,
          title: "Daily Regulars",          value: "200+"},
        {
          id: "m3",          icon: Award,
          title: "Montreal Locals",          value: "100%"},
      ]}
      title="By The Numbers"
      description="Serving Montreal with love and authentic flavors every day."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",          name: "Sarah J.",          imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-eating-clubsandwich-served-with-ketchup-french-fries_140725-12120.jpg"},
        {
          id: "t2",          name: "Michael C.",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-adorable-blue-eyed-female-model-with-hair-knot-wears-overalls-enjoys-drinking-fruit-smoothie-looks-happily-somewhere-while-sits-cozy-restaurant-beautiful-teenage-girl-coffee-shop_273609-3038.jpg"},
        {
          id: "t3",          name: "Emily R.",          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-friends-with-delicious-cocktails_23-2150244937.jpg"},
        {
          id: "t4",          name: "David K.",          imageSrc: "http://img.b2bpic.net/free-photo/man-dancing-with-woman-restaurant_23-2148016782.jpg"},
        {
          id: "t5",          name: "Julie M.",          imageSrc: "http://img.b2bpic.net/free-photo/professional-barber-man-apron-looking-front-smiliung-cheerfully-showing-ok-sign-standing-orange-wall_141793-96581.jpg"},
      ]}
      cardTitle="What Our Fans Say"
      cardTag="Testimonials"
      cardAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",          title: "Do you offer catering?",          content: "Yes, we cater for office lunches and special events."},
        {
          id: "f2",          title: "Are there vegan options?",          content: "Absolutely, our black bean tacos are delicious."},
        {
          id: "f3",          title: "Where are you located?",          content: "We are in the heart of Montreal - check our contact section."},
      ]}
      sideTitle="Frequently Asked"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "plain"}}
      tag="Contact Us"
      title="Hungry for a Taco?"
      description="Visit us at our Montreal shop or order online for pickup."
      buttons={[
        {
          text: "Visit Our Shop",          href: "#"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Home",              href: "/"},
            {
              label: "Menu",              href: "#menu"},
            {
              label: "About",              href: "#about"},
          ],
        },
        {
          items: [
            {
              label: "Facebook",              href: "#"},
            {
              label: "Instagram",              href: "#"},
          ],
        },
        {
          items: [
            {
              label: "Privacy",              href: "#"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
      ]}
      logoText="Tacos Victor Montréal"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}