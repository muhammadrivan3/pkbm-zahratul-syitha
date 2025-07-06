import React from "react";
import { motion } from "framer-motion";
import AnimatedLink from "../../ui/AnimatedLink";
import { Link } from "react-router-dom";

const latestNews = [
  {
    id: 1,
    date: "12 Juni 2025",
    title: "PKBM Zahratul Syitha Lolos Bantuan Program Literasi Nasional",
    excerpt:
      "Melalui proses seleksi ketat, PKBM berhasil meraih kepercayaan untuk memperkuat budaya literasi masyarakat di wilayah tertinggal. Program ini akan difokuskan pada penyediaan buku bacaan, pelatihan literasi fungsional, dan pembinaan kelompok belajar.",
  },
  {
    id: 2,
    date: "10 Juni 2025",
    title: "Kunjungan Kepala Dinas Pendidikan Provinsi",
    excerpt:
      "Kepala Dinas memberikan apresiasi atas peningkatan kualitas pendidikan nonformal di PKBM Zahratul Syitha. Dalam kunjungan tersebut, beliau juga berdialog langsung dengan warga belajar serta memberikan motivasi untuk terus berprestasi.",
  },
  {
    id: 3,
    date: "8 Juni 2025",
    title: "Workshop Kewirausahaan Bagi Warga Belajar",
    excerpt:
      "PKBM menyelenggarakan pelatihan UMKM dengan fokus pada kewirausahaan digital dan pemasaran berbasis media sosial. Kegiatan ini bertujuan membekali peserta dengan keterampilan usaha mandiri yang relevan dengan perkembangan zaman.",
  },
];


const BeritaUtama = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      {/* Section Header */}
      <div className="mb-10 text-start">
        <h2 className="text-2xl md:text-3xl font-title font-bold text-title">
          Berita Utama
        </h2>
        <p className="font-body text-muted mt-2 text-sm md:text-base">
          Informasi terkini seputar kegiatan dan pencapaian terbaru kami
        </p>
        <hr className="mt-4 h-[2px] w-full bg-accent border-none rounded" />
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-body">
        {/* Berita Unggulan */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative bg-gray-0 overflow-hidden"
        >
          <motion.img
            src={"http://localhost:5173/img/banner1.jpg"}
            alt="Berita Utama"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute bottom-0 p-6 bg-black/50 text-[var(--bg-base)] w-full">
            <p className="text-sm  mb-1">14 Juni 2025</p>
            <h3 className="text-xl font-semibold mb-2">
              PKBM Gelar Gebyar Pendidikan Nonformal 2025
            </h3>
            <p className=" text-sm mb-4 line-clamp-3">
              Kegiatan ini dihadiri oleh ratusan peserta dari berbagai daerah
              sebagai wujud komitmen PKBM Zahratul Syitha dalam mencerdaskan
              bangsa.
            </p>
            <AnimatedLink
              to="/tentang"
              label="Selengkapnya"
              className="mt-6 "
              textVariants={{
                initial: { scale: 1, color: "#f8fafc" },
                hover: { scale: 1.1, color: "#1d4ed8" },
              }}
            />
          </div>
        </motion.div>

        {/* Daftar Berita Singkat */}
        <div className="space-y-6">
          {latestNews.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 border-b-2 border-gray-300"
            >
              <p className="text-sm text-gray-400">{news.date}</p>
              <h3 className="text-lg font-semibold text-gray-800 mt-1">
                {news.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                {news.excerpt}
              </p>
              <AnimatedLink
                to="/tentang"
                label="Baca Selengkapnya"
                className=""
                textVariants={{
                  initial: { scale: 1, color: "#1e293b" },
                  hover: { scale: 1.1, color: "#1d4ed8" },
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeritaUtama;
