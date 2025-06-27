import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const dummyDetail = {
  title: "Paket C (Setara SMA)",
  desc: `Program pendidikan kesetaraan tingkat SMA bagi masyarakat yang ingin
  melanjutkan studi atau meningkatkan peluang kerja. Dirancang fleksibel dengan
  modul pembelajaran yang bisa diakses secara online maupun tatap muka.`,
  mentor: "Bu Yuliana, M.Pd",
  statusPendaftaran: "Dibuka",
  biaya: "Gratis",
  mode: "Offline",
  durasi: "12 Bulan",
  komitmen: "4–6 Jam / Minggu",
  subjek: "Ilmu Sosial, Bahasa, Matematika",
  bahasa: "Indonesia",
  tipe: "Kelas Reguler",
  topik: "Kesetaraan Pendidikan",
  tataCara: `1. Isi formulir pendaftaran online atau ambil langsung di kantor PKBM.\n
2. Sertakan fotokopi ijazah terakhir & KTP/KK.\n
3. Ikuti sesi wawancara atau orientasi belajar.`,
  image: "http://localhost:5173/img/banner3.jpg",
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  return (
    <main className="relative flex flex-col justify-start w-full min-h-screen">
      {/* Banner Header */}
      <div className="grid grid-cols-2 mb-12 p-6 bg-blue-600 text-white rounded-xl shadow-md pt-25 pb-20 px-4 md:px-16">
        <div className="flex flex-col">
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            {dummyDetail.title}
          </h2>
          <p className="mt-2">
            Dapatkan informasi dan perkembangan terbaru dari PKBM Zahratul
            Syitha
          </p>
        </div>
      </div>
      {/* Card yang mengambang */}
      <div className="absolute right-1/4 top-1/6 flex flex-col">
        {/* Gambar & Detail */}
        <div className="overflow-hidden rounded-xl shadow border border-gray-200">
          <img
            src={dummyDetail.image}
            alt={dummyDetail.title}
            className="w-full h-64 object-cover"
          />
        </div>
        <div>
          {/* Informasi Tambahan */}
          <section className="grid grid-cols-1 gap-6 text-sm text-gray-700">
            <div>
              <p>
                <strong>Mentor:</strong> {dummyDetail.mentor}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    dummyDetail.statusPendaftaran === "Dibuka"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {dummyDetail.statusPendaftaran}
                </span>
              </p>
              <p>
                <strong>Biaya:</strong>{" "}
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    dummyDetail.biaya === "Gratis"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {dummyDetail.biaya}
                </span>
              </p>
              <p>
                <strong>Mode:</strong>{" "}
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    dummyDetail.mode === "Online"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-purple-100 text-purple-700"
                  }`}
                >
                  {dummyDetail.mode}
                </span>
              </p>
            </div>

            <div className="space-y-1">
              <p>
                <strong>Durasi:</strong> {dummyDetail.durasi}
              </p>
              <p>
                <strong>Komitmen Waktu:</strong> {dummyDetail.komitmen}
              </p>
              <p>
                <strong>Subjek:</strong> {dummyDetail.subjek}
              </p>
              <p>
                <strong>Bahasa:</strong> {dummyDetail.bahasa}
              </p>
              <p>
                <strong>Tipe Kelas:</strong> {dummyDetail.tipe}
              </p>
              <p>
                <strong>Topik:</strong> {dummyDetail.topik}
              </p>
            </div>
          </section>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="p-10"
      >
        {/* Tombol kembali */}
        <button
          onClick={() => navigate(-1)}
          className="text-blue-600 hover:underline mb-4 text-sm"
        >
          ← Kembali ke layanan
        </button>

        {/* Deskripsi */}
        <section>
          <h3 className="text-xl font-semibold mb-2">Deskripsi</h3>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {dummyDetail.desc}
          </p>
        </section>

        {/* Tata Cara */}
        <section>
          <h3 className="text-xl font-semibold mb-2">Tata Cara Pendaftaran</h3>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {dummyDetail.tataCara}
          </p>
        </section>
      </motion.div>
    </main>
  );
};

export default ServiceDetail;
