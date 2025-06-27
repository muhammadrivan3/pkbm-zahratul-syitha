import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const categories = ["Semua", "Pendidikan", "Pelatihan", "Prestasi"];

const newsData = [
  {
    id: 1,
    title: "PKBM Gelar Wisuda Tahunan",
    excerpt:
      "Lebih dari 100 siswa mengikuti prosesi wisuda yang berlangsung khidmat...",
    image: "http://localhost:5173/img/banner1.jpg",
    date: "12 Juni 2025",
    category: "Pendidikan",
  },
  {
    id: 2,
    title: "Pelatihan Kemandirian Santri",
    excerpt:
      "Meningkatkan keterampilan praktis peserta didik dalam dunia usaha...",
    image: "http://localhost:5173/img/banner2.jpg",
    date: "10 Juni 2025",
    category: "Pelatihan",
  },
  {
    id: 3,
    title: "Alumni PKBM Buka Usaha Mandiri",
    excerpt: "Mantan peserta kini sukses membuka usaha konveksi menengah...",
    image: "http://localhost:5173/img/banner3.jpg",
    date: "08 Juni 2025",
    category: "Prestasi",
  },
];

const News = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredNews = newsData.filter((item) => {
    const matchCategory =
      activeCategory === "Semua" || item.category === activeCategory;
    const matchSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <main className="min-h-screen bg-gray-50 pt-28 pb-20 px-4 md:px-10">
      {/* Hero */}
      <section className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-700">
          Semua Berita
        </h2>
        <p className="text-gray-600 text-lg mt-3">
          Dapatkan informasi dan perkembangan terbaru dari PKBM Zahratul Syitha.
        </p>
      </section>

      {/* Filter & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 max-w-5xl mx-auto">
        <input
          type="text"
          placeholder="Cari berita..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1 rounded-full text-sm transition font-medium ${
                activeCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* News Cards */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredNews.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between text-sm text-gray-500 mb-1">
                <span>{item.category}</span>
                <span>{item.date}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                {item.excerpt}
              </p>
              <Link
                to={`/news/${item.id}`}
                className="text-sm text-blue-600 hover:underline font-medium inline-block mt-3"
              >
                Baca Selengkapnya →
              </Link>
            </div>
          </motion.div>
        ))}

        {filteredNews.length === 0 && (
          <div className="col-span-full text-center text-gray-400 italic">
            Tidak ada berita ditemukan.
          </div>
        )}
      </section>
    </main>
  );
};

export default News;
