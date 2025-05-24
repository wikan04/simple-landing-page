import Hero from "../components/reusable/ServiceHero";
import Clientslider from "../components/reusable/Clientslider";

export default function menu1() {
  return (
    <div>
      <Hero
        imageSrc="https://dummyimage.com/720x600/000/fff"
        imageAlt="custom hero"
        heading={<>Menu Link 1</>}
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        primaryButtonText="Konsultasi Gratis Sekarang"
      />
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
        mobileSlidesToShow={3}
      />
    </div>
  );
}
