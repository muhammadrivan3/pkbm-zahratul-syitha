import React from "react";
import { motion } from "framer-motion";

const alumniList = [
  {
    name: "Siti Nurhaliza",
    graduationYear: 2018,
    testimonial:
      "PKBM Zahratul Syitha provided me with excellent education and support to succeed in my career.",
    photo:
      "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Ahmad Fauzi",
    graduationYear: 2019,
    testimonial:
      "The community and learning environment here helped me grow both personally and professionally.",
    photo:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Dewi Lestari",
    graduationYear: 2020,
    testimonial:
      "I am proud to be an alumnus of PKBM Zahratul Syitha. The skills I gained are invaluable.",
    photo:
      "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const AlumniSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 bg-white rounded-t-2xl shadow-xl">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800">
          Alumni Kami
        </h2>
        <p className="text-gray-600 text-base mt-2 max-w-xl mx-auto">
          Beberapa alumni kami telah sukses melangkah ke jenjang yang lebih tinggi berkat pendidikan di PKBM Zahratul Syitha.
        </p>
        <div className="mt-6 h-[2px] w-20 bg-blue-500 rounded-full mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {alumniList.map((alumnus, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={alumnus.photo}
                alt={alumnus.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {alumnus.name}
                </h3>
                <p className="text-sm text-gray-500">
                  Alumni {alumnus.graduationYear}
                </p>
              </div>
            </div>
            <blockquote className="text-sm text-gray-700 leading-relaxed italic border-l-4 border-blue-300 pl-4">
              “{alumnus.testimonial}”
            </blockquote>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AlumniSection;
