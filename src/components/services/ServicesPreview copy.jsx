import React from 'react';
import { motion } from 'framer-motion';
import { BookOpenCheck, Hammer, Users } from 'lucide-react';

const services = [
  {
    title: 'Pendidikan Kesetaraan',
    description:
      'Program Paket A (setara SD), Paket B (SMP), dan Paket C (SMA) yang bersifat fleksibel dan terakreditasi.',
    icon: BookOpenCheck,
  },
  {
    title: 'Pelatihan Keterampilan',
    description:
      'Pelatihan menjahit, komputer, wirausaha, dan keterampilan lainnya untuk peningkatan daya saing masyarakat.',
    icon: Hammer,
  },
  {
    title: 'Pengembangan Komunitas',
    description:
      'Kegiatan penyuluhan, edukasi keluarga, parenting, hingga kegiatan sosial berbasis masyarakat.',
    icon: Users,
  },
];

const cardVariant = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.25 },
  }),
};

const ServicesPreview = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 bg-white">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-4">
          Layanan Unggulan PKBM
        </h2>
        <p className="text-base text-gray-600 max-w-2xl mx-auto">
          Komitmen kami adalah memberikan pendidikan berkualitas dan pemberdayaan masyarakat yang berdampak nyata.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariant}
              className="group bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full mb-5 bg-gradient-to-br from-indigo-100 via-white to-indigo-50 border border-indigo-200 shadow-inner">
                <Icon className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesPreview;
