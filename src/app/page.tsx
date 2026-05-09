"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactForm from '@/components/form/ContactForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
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
      <NavbarStyleFullscreen
      navItems={[
        { name: "Inicio", id: "hero" },
        { name: "Sobre Nosotros", id: "about" },
        { name: "Menú", id: "menu" },
        { name: "FAQ", id: "faq" },
        { name: "Contacto", id: "contact" },
      ]}
      brandName="Tacos Victor Montréal"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Tacos Victor Montréal"
      description="Tacos artesanales hechos frescos diariamente con ingredientes premium. Experimenta el sabor de México en el corazón de MTL."
      testimonials={[
        { name: "Marc L.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-waitress-standing-counter_1170-668.jpg", handle: "@mtlfoodie", testimonial: "¡Los mejores tacos de la ciudad, sin duda!", rating: 5 },
        { name: "Sophie B.", imageSrc: "http://img.b2bpic.net/free-photo/front-view-beautiful-girl-with-lemons_23-2148483076.jpg", handle: "@mtleats", testimonial: "Sabores auténticos y frescos.", rating: 5 },
        { name: "Jean P.", imageSrc: "http://img.b2bpic.net/free-photo/friends-eating-conversating-restaurant_23-2148006709.jpg", handle: "@tacolover", testimonial: "Lugar de almuerzo rápido con calidad increíble.", rating: 4 },
      ]}
      buttons={[{ text: "Ver Menú y Ordenar Ahora", href: "#menu" }]}
      imageSrc="http://img.b2bpic.net/free-photo/top-view-tasty-mexican-food-ready-be-served_23-2148614398.jpg"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="Nuestra Historia"
      title="De México a Montreal"
      description="Nacidos de una pasión por los sabores tradicionales, traemos el corazón de la cocina callejera a las calles de Montreal."
      subdescription="Fresco, de origen local y elaborado con amor, nuestra cocina es donde la tradición se encuentra con la vibrante escena culinaria de MTL."
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
        { title: "Ingredientes Frescos", description: "Productos de origen local y carnes premium entregados diariamente.", imageSrc: "http://img.b2bpic.net/free-photo/top-view-fresh-tortillas-with-meat-vegetables_23-2148614372.jpg" },
        { title: "Tortillas Artesanales", description: "Hechas frescas durante todo el día para esa textura auténtica.", imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-mexican-food-composition_23-2148131285.jpg" },
      ]}
      title="Lo que nos hace especiales"
      description="No tomamos atajos. La calidad está en nuestro ADN."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        { id: "p1", name: "Al Pastor", price: "$4.50", imageSrc: "http://img.b2bpic.net/free-photo/close-up-delicious-tacos-with-avocado_23-2152026865.jpg" },
        { id: "p2", name: "Carne Asada", price: "$5.00", imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-tortilla-with-meat-vegetables_23-2148750445.jpg" },
        { id: "p3", name: "Frijoles Negros y Aguacate", price: "$4.00", imageSrc: "http://img.b2bpic.net/free-photo/front-view-hands-holding-delicious-taco_23-2151048050.jpg" },
      ]}
      title="Nuestro Menú"
      description="Explora nuestra selección de tacos auténticos."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", icon: CheckCircle, title: "Tacos Servidos", value: "50,000+", description: "Servidos con amor" },
        { id: "m2", icon: Star, title: "Clientes Diarios", value: "200+", description: "Fans satisfechos" },
        { id: "m3", icon: Award, title: "Locales MTL", value: "100%", description: "Corazón de la ciudad" },
      ]}
      title="En Números"
      description="Crecimiento constante basado en calidad."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      useInvertedBackground={true}
      textboxLayout="default"
      testimonials={[
        { id: "t1", title: "Increíble", quote: "¡Los mejores tacos de MTL!", name: "Sarah J.", role: "Foodie" },
        { id: "t2", title: "Auténtico", quote: "Sabor real mexicano.", name: "Michael C.", role: "Cliente" },
      ]}
      title="Lo Que Dicen"
      description="Nuestros clientes aman el sabor."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      useInvertedBackground={false}
      faqs={[
        { id: "f1", title: "¿Ofrecen catering?", content: "Sí, contáctanos para eventos." },
        { id: "f2", title: "¿Opciones veganas?", content: "Sí, tenemos opciones deliciosas." },
      ]}
      title="Preguntas Frecuentes"
      description="Resuelve tus dudas aquí."
      faqsAnimation="slide-up"
      textboxLayout="split"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactForm
      tag="Contacto"
      title="¿Tienes antojo?"
      description="Ponte en contacto con nosotros para cualquier consulta o pedido especial."
      inputPlaceholder="Tu correo electrónico"
      buttonText="Enviar mensaje"
      centered={true}
      useInvertedBackground={false}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        { items: [{ label: "Tacos", href: "#menu" }, { label: "Bebidas", href: "#menu" }] },
        { items: [{ label: "Sobre", href: "#about" }, { label: "FAQ", href: "#faq" }, { label: "Contacto", href: "#contact" }] },
      ]}
      logoText="Tacos Victor Montréal"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}