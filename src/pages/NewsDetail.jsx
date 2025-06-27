import React from "react";
import { useParams, Link } from "react-router-dom";
import { newsData } from "../data/newsData";

const NewsDetail = () => {
  const { id } = useParams();
  const news = newsData.find((item) => item.id === id); // pastikan id bertipe number

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center text-gray-500 px-4">
        <div>
          <p className="mb-4">Berita tidak ditemukan.</p>
          <Link to="/news" className="text-yellow-600 underline text-sm">
            ← Kembali ke berita
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-28 pb-20 px-4 md:px-10 text-gray-800 font-serif">
      {/* Hero */}
      <section className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-700">
          {news.title}
        </h2>
        <p className="text-gray-500 mt-2">
          {news.date} • <span className="text-yellow-600">{news.category}</span>
        </p>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto">
        <img
          src={news.image}
          alt={news.title}
          className="w-full rounded-xl shadow mb-8 object-cover max-h-[480px]"
        />

        <div className="text-sm text-gray-500 flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-6">
          <span>
            Ditulis oleh:{" "}
            <span className="font-medium text-gray-700">
              {news.author || "Admin PKBM"}
            </span>
          </span>
        </div>

        <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line mb-10">
          {news.content}
        </p>

        {/* Tags */}
        {news.tags && news.tags.length > 0 && (
          <div className="mb-10">
            <p className="text-sm text-gray-600">Tags:</p>
            <ul className="flex flex-wrap gap-2 mt-2">
              {news.tags.map((tag, index) => (
                <li
                  key={index}
                  className="bg-yellow-100 text-yellow-700 px-3 py-1 text-xs rounded-full"
                >
                  #{tag}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Back Button */}
        <Link
          to="/news"
          className="inline-block text-yellow-600 hover:text-yellow-500 text-sm"
        >
          ← Kembali ke semua berita
        </Link>
      </div>
    </main>
  );
};

export default NewsDetail;
