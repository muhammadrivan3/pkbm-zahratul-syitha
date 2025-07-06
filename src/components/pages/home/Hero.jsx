import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const images = [
  '/img/documentasi_1.webp',
  '/img/documentasi_2.webp',
  '/img/documentasi_3.webp',
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 10000); // setiap 5 detik ganti gambar
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden bg-black">
      <AnimatePresence mode="wait" >
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`Banner ${index + 1}`}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.2, scale: 1.03 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 w-full h-full object-cover object-center "
        />
      </AnimatePresence>

      {/* Optional overlay for tone */}
      {/* <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" /> */}
    </section>
  );
};

export default Hero;
