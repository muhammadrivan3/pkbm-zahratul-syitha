import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    category: "Pendidikan Formal",
    items: [
      {
        title: "Paket A (Setara SD)",
        desc: "Program pendidikan dasar bagi masyarakat yang belum menyelesaikan pendidikan tingkat sekolah dasar. Diperuntukkan bagi anak-anak dan orang dewasa yang ingin mendapatkan ijazah setara SD.",
        mentor: "Bu Lestari, M.Pd",
        statusPendaftaran: "Dibuka",
        mode: "Offline",
        image: "http://localhost:5173/img/banner3.jpg",
      },
      {
        title: "Paket B (Setara SMP)",
        desc: "Alternatif pendidikan jenjang menengah pertama bagi warga belajar yang tidak dapat mengakses pendidikan formal. Fleksibel, terstruktur, dan mendukung pembelajaran mandiri.",
        mentor: "Pak Hendra, S.Pd",
        statusPendaftaran: "Ditutup",
        mode: "Online",
        image: "http://localhost:5173/img/banner3.jpg",
      },
      {
        title: "Paket C (Setara SMA)",
        desc: "Memberikan kesempatan setara SMA untuk meningkatkan jenjang pendidikan atau persiapan kerja. Dilengkapi dengan pendampingan belajar, ujian, dan sertifikasi nasional.",
        mentor: "Bu Yuliana, M.Pd",
        statusPendaftaran: "Dibuka",
        mode: "Offline",
        image: "http://localhost:5173/img/banner3.jpg",
      },
    ],
  },
  {
    category: "Pendidikan Non-Formal",
    items: [
      {
        title: "Keaksaraan Fungsional",
        desc: "Program pengentasan buta huruf yang juga membekali keterampilan praktis seperti berhitung, membaca tanda dan simbol, serta pemahaman informasi dasar untuk kehidupan sehari-hari.",
        mentor: "Pak Surya, S.Pd",
        mode: "Offline",
        image: "http://localhost:5173/img/banner3.jpg",
      },
      {
        title: "Kecakapan Hidup",
        desc: "Pelatihan untuk membentuk karakter, etika kerja, kemampuan sosial, dan kepemimpinan. Cocok untuk pelajar, remaja, hingga orang dewasa.",
        mentor: "Bu Indah, S.Psi",
        mode: "Online",
        image: "http://localhost:5173/img/banner3.jpg",
      },
      {
        title: "Kewirausahaan",
        desc: "Program yang dirancang untuk membangun mentalitas wirausaha dengan studi kasus, praktik usaha mikro, dan mentoring bisnis skala kecil.",
        mentor: "Pak Dimas, SE",
        mode: "Offline",
        image: "http://localhost:5173/img/banner3.jpg",
      },
    ],
  },
  {
    category: "Pelatihan Keterampilan",
    items: [
      {
        title: "Komputer Dasar lkajsdukhasd aklsjdlasdjkasjd aiojaskdasd kajsdnas,d jknasdklasmd kjasdjhasd ",
        desc: "Pelatihan pengoperasian komputer, MS Office, internet, serta penggunaan email dan perangkat lunak perkantoran dasar.",
        mentor: "Bu Rini, S.Kom",
        biaya: "Gratis",
        mode: "Online",
        image: "http://localhost:5173/img/banner3.jpg",
      },
      {
        title: "Desain Grafis",
        desc: "Mengajarkan dasar penggunaan Canva & Adobe Photoshop untuk kebutuhan promosi, presentasi, atau personal branding.",
        mentor: "Pak Danu, D.Sn",
        biaya: "Berbayar",
        mode: "Offline",
        image: "http://localhost:5173/img/banner3.jpg",
      },
      {
        title: "Menjahit",
        desc: "Pelatihan menjahit pakaian dasar, teknik pola, dan praktik langsung hingga menghasilkan produk jadi.",
        mentor: "Bu Tati, SPd",
        biaya: "Berbayar",
        mode: "Offline",
        image: "http://localhost:5173/img/banner3.jpg",
      },
      {
        title: "Tata Boga",
        desc: "Belajar teknik memasak, baking, serta pengemasan makanan rumahan. Cocok untuk yang ingin usaha kuliner.",
        mentor: "Bu Siska, A.Md",
        biaya: "Gratis",
        mode: "Offline",
        image: "http://localhost:5173/img/banner3.jpg",
      },
    ],
  },
];


const Service = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-28 pb-20 px-4 md:px-10 text-gray-800">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold font-serif text-blue-700"
        >
          Layanan Kami
        </motion.h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          Kami menyediakan berbagai program pendidikan formal, non-formal, dan pelatihan keterampilan yang dirancang untuk semua kalangan.
        </p>
      </div>

      {/* Section Per Kategori */}
      <div className="space-y-20 max-w-7xl mx-auto">
        {services.map((section, idx) => (
          <section key={idx}>
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-blue-700 mb-6 border-b border-blue-200 pb-2">
              {section.category}
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-48 w-full object-cover"
                    />
                  )}

                  <div className="flex flex-col justify-between flex-grow p-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                        {item.desc}
                      </p>
                      <p className="text-sm text-gray-500 italic">
                        Mentor:{" "}
                        <span className="text-gray-800 font-medium">
                          {item.mentor}
                        </span>
                      </p>
                    </div>

                    {/* Label Section */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.statusPendaftaran && (
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded-full ${
                            item.statusPendaftaran === "Dibuka"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          Pendaftaran: {item.statusPendaftaran}
                        </span>
                      )}

                      {item.biaya && (
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded-full ${
                            item.biaya === "Gratis"
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {item.biaya}
                        </span>
                      )}

                      {item.mode && (
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded-full ${
                            item.mode === "Online"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-purple-100 text-purple-700"
                          }`}
                        >
                          {item.mode}
                        </span>
                      )}
                    </div>

                    <div className="mt-4 text-right">
                      <Link
                        to={`/services/${encodeURIComponent(item.title)}`}
                        className="inline-block text-sm font-medium text-blue-600 hover:underline"
                      >
                        Selengkapnya →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Service;
