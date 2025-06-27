import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Pendidikan Kesetaraan",
    desc: "Program Paket A, B, dan C yang terakreditasi untuk semua usia.",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80",
    link: "/layanan/pendidikan",
  },
  {
    title: "Pelatihan Keterampilan",
    desc: "Pelatihan komputer, tata boga, menjahit, dan kewirausahaan.",
    image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=600&q=80",
    link: "/layanan/pelatihan",
  },
  {
    title: "Pemberdayaan Komunitas",
    desc: "Program parenting, penyuluhan, dan kegiatan sosial masyarakat.",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80",
    link: "/layanan/komunitas",
  },
];

const ServicesPreviewSplit = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 space-y-20">
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800">
          Layanan Kami
        </h2>
        <p className="text-gray-600 mt-2">
          Sekilas layanan unggulan yang kami sediakan untuk mendukung pendidikan masyarakat.
        </p>
        <div className="mt-4 h-[2px] w-16 bg-blue-500 rounded-full mx-auto" />
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
          } gap-8 items-center`}
        >
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover rounded-xl shadow-md"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
            <p className="text-gray-600 text-base">{service.desc}</p>
            <Link
              to={service.link}
              className="text-sm font-medium text-blue-600 hover:text-blue-800 transition"
            >
              Selengkapnya →
            </Link>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default ServicesPreviewSplit;
