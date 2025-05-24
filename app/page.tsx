import Hero from "./components/Hero";
import Clientslider from "./components/reusable/Clientslider";
import JasaSection from "./components/reusable/JasaSection";
import Testimonial from "./components/Testimonial";
import Content from "./components/Content";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <Clientslider
        title="Our Partners"
        images={[
          {
            src: "https://dummyimage.com/100x100/000/fff&text=Partner+1",
            alt: "partner-1",
          },
          {
            src: "https://dummyimage.com/100x100/000/fff&text=Partner+2",
            alt: "partner-2",
          },
          {
            src: "https://dummyimage.com/100x100/000/fff&text=Partner+3",
            alt: "partner-3",
          },
          {
            src: "https://dummyimage.com/100x100/000/fff&text=Partner+4",
            alt: "partner-4",
          },
          {
            src: "https://dummyimage.com/100x100/000/fff&text=Partner+5",
            alt: "partner-5",
          },
          // Add more images
        ]}
        slidesToShow={5}
        mobileSlidesToShow={4}
      />
      <JasaSection
        title="Jasa Kami"
        description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        services={[
          {
            imageSrc: "https://dummyimage.com/720x400/000/fff",
            imageAlt: "service-1",
            subheading: "JASA",
            heading: "Servis 1",
            paragraph:
              "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
          {
            imageSrc: "https://dummyimage.com/720x400/000/fff",
            imageAlt: "service-2",
            subheading: "JASA",
            heading: "Servis 2",
            paragraph:
              "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
          {
            imageSrc: "https://dummyimage.com/720x400/000/fff",
            imageAlt: "service-3",
            subheading: "JASA",
            heading: "Servis 3",
            paragraph:
              "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
          {
            imageSrc: "https://dummyimage.com/720x400/000/fff",
            imageAlt: "service-4",
            subheading: "JASA",
            heading: "Servis 4",
            paragraph:
              "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
          // Add more services
        ]}
        animationDuration={1}
        animationDelay={0.3}
      />
      <Pricing />
      <Testimonial />
      <Content />
    </>
  );
}
