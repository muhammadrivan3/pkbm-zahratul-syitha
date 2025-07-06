import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SplitTextReveal from "../../ui/SplitTextReveal";
import AnimatedLine from "../../ui/AnimatedLine";
import ScrollReveal from "../../ui/ScrollReveal";
import { ArrowRight, CircleArrowRight } from "lucide-react";
import AnimatedLink from "../../ui/AnimatedLink";
import ParallaxImage from "../../ui/ParallaxImage";

const services = [
  {
    title: "Pendidikan Kesetaraan",
    desc: "Program Paket A, B, dan C yang telah terakreditasi, ditujukan untuk masyarakat dari berbagai usia yang belum menyelesaikan pendidikan formal. Pembelajaran dilakukan secara fleksibel dan disesuaikan dengan kebutuhan peserta didik, baik melalui tatap muka maupun daring. Sertifikat kelulusan diakui secara nasional dan dapat digunakan untuk melanjutkan pendidikan ke jenjang berikutnya atau melamar pekerjaan.",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80",
    link: "/layanan/pendidikan",
  },
  {
    title: "Pelatihan Keterampilan",
    desc: "Kami menyediakan pelatihan praktis seperti komputer dasar, desain grafis, tata boga, menjahit, hingga kewirausahaan. Program ini dirancang untuk meningkatkan kompetensi dan kemandirian peserta dalam menghadapi dunia kerja maupun membuka usaha mandiri. Dengan fasilitas pelatihan yang memadai dan pendampingan oleh tutor profesional, peserta mendapatkan pengalaman belajar yang langsung dapat diterapkan.",
    image:
      "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=600&q=80",
    link: "/layanan/pelatihan",
  },
  {
    title: "Pemberdayaan Komunitas",
    desc: "Program ini mencakup kegiatan seperti parenting education, penyuluhan kesehatan, pelatihan soft skill, serta pengembangan komunitas lokal. Tujuannya adalah untuk meningkatkan kualitas hidup masyarakat secara menyeluruh melalui pendekatan edukatif dan kolaboratif. Melalui kegiatan sosial yang terstruktur, kami membangun lingkungan belajar yang mendukung partisipasi aktif warga dalam pembangunan sosial.",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80",
    link: "/layanan/komunitas",
  },
];

const ServicesPreviewSplit = () => {
  return (
    <section className="w-full min-h-screen">
      <div className="text-center mb-6 md:mb-10">
        <SplitTextReveal
          text="Selamat Datang di PKBM Zahratul Syitha"
          containerClassName="mt-20 text-center"
          textClassName="font-title text-title text-2xl md:text-4xl font-bold px-2 break-words"
        />
        <AnimatedLine
          width="w-50" // Tailwind width
          height="h-[3px]" // Tailwind height
          color="bg-gray-200" // Warna custom
        />
      </div>

      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 * index }}
          viewport={{ once: true }}
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } gap-2 items-start font-body`}
        >
          {/* Image */}
          <div className="md:w-1/2">
            <ParallaxImage
              src={service.image}
              alt={service.title}
              height="h-72 md:h-96"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 px-2  md:py-10 md:px-10">
            <SplitTextReveal
              text={service.title}
              containerClassName="text-start"
              textClassName="text-xl md:text-2xl font-semibold text-subtitle"
            />
            {/* <p className="text-gray-600 text-base">{service.desc}</p> */}
            <ScrollReveal
              children={service.desc}
              containerClassName="text-start"
              textClassName="text-sm md:text-md text-body text-justify"
              baseOpacity={0.2}
              blurStrength={4}
              enableBlur
            />
            <Link
              to={service.link}
              className="group mt-6 inline-flex items-center gap-4"
            >
              {/* Teks + Icon */}
              <AnimatedLink to="/layanan/pelatihan" label="Selengkapnya" />
            </Link>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default ServicesPreviewSplit;
