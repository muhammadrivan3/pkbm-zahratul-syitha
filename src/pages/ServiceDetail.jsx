import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  User,
  Calendar,
  Clock,
  BookOpen,
  Languages,
  GraduationCap,
  Tag,
  ListChecks,
  BadgeDollarSign,
  MapPin,
} from "lucide-react";

const dummyDetail = {
  title: "Paket C (Setara SMA)",
  desc: `Program pendidikan kesetaraan tingkat SMA bagi masyarakat yang ingin melanjutkan studi atau meningkatkan peluang kerja. Dirancang fleksibel dengan modul pembelajaran yang bisa diakses secara online maupun tatap muka.`,
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
  tataCara: `1. Isi formulir pendaftaran online atau ambil langsung di kantor PKBM.\n2. Sertakan fotokopi ijazah terakhir & KTP/KK.\n3. Ikuti sesi wawancara atau orientasi belajar.`,
  image: "/img/documentasi_3.webp",
};

const InfoItem = ({ icon, label, value, badgeColor }) => (
  <div className="flex items-center space-x-2">
    <span className="text-yellow-500">{icon}</span>
    <p className="text-gray-700 text-sm">
      <strong>{label}:</strong>{" "}
      {badgeColor ? (
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${badgeColor}`}>
          {value}
        </span>
      ) : (
        value
      )}
    </p>
  </div>
);

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  return (
    <main className="w-full min-h-screen px-4 md:px-12 py-10 bg-gray-50">
      
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-blue-700 hover:text-blue-900 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          aria-label="Kembali ke halaman sebelumnya"
        >
          <ArrowLeft />
          <span>Kembali</span>
        </button>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Kiri: Konten utama */}
          <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-md space-y-8">
            <div>
              <h2 className="text-4xl font-serif font-bold text-blue-900 leading-tight">
                {dummyDetail.title}
              </h2>
              <p className="mt-3 text-gray-600 text-lg">
                Dapatkan informasi dan perkembangan terbaru dari PKBM Zahratul Syitha.
              </p>
              <div className="mt-6">
                <a
                  href="https://pend-pkbm-zs.vercel.app/ppdb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
      inline-flex items-center justify-center
      w-44 px-6 py-3 rounded-md text-lg font-semibold
      text-gray-900 bg-yellow-400 hover:bg-yellow-500
      shadow-lg transition-transform transform hover:scale-105
      focus:outline-none focus:ring-4 focus:ring-yellow-300
    "
    aria-label="Daftar program"
                >
                  <span>DAFTAR</span>
                </a>
              </div>
            </div>

            {/* Deskripsi */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2">
                Deskripsi
              </h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line text-base">
                {dummyDetail.desc}
              </p>
            </section>

            {/* Tata Cara */}
            <section>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2">
                Tata Cara Pendaftaran
              </h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line text-base">
                {dummyDetail.tataCara}
              </p>
            </section>
          </div>

          {/* Kanan: Info Card */}
          <aside className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden p-6 flex flex-col transition-transform transform hover:scale-[1.02] duration-300">
            <img
              src={dummyDetail.image}
              alt={dummyDetail.title}
              className="w-full h-56 object-cover rounded-md mb-6"
            />
            <div className="space-y-4 text-gray-700 text-sm flex-grow">
              <InfoItem icon={<User />} label="Mentor" value={dummyDetail.mentor} />
              <InfoItem
                icon={<ListChecks />}
                label="Status"
                value={dummyDetail.statusPendaftaran}
                badgeColor={
                  dummyDetail.statusPendaftaran === "Dibuka"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-700"
                }
              />
              <InfoItem
                icon={<BadgeDollarSign />}
                label="Biaya"
                value={dummyDetail.biaya}
                badgeColor={
                  dummyDetail.biaya === "Gratis"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-yellow-100 text-yellow-700"
                }
              />
              <InfoItem
                icon={<MapPin />}
                label="Mode"
                value={dummyDetail.mode}
                badgeColor={
                  dummyDetail.mode === "Online"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-purple-100 text-purple-700"
                }
              />
              <hr className="my-4" />
              <InfoItem icon={<Calendar />} label="Durasi" value={dummyDetail.durasi} />
              <InfoItem icon={<Clock />} label="Komitmen" value={dummyDetail.komitmen} />
              <InfoItem icon={<BookOpen />} label="Subjek" value={dummyDetail.subjek} />
              <InfoItem icon={<Languages />} label="Bahasa" value={dummyDetail.bahasa} />
              <InfoItem icon={<GraduationCap />} label="Tipe Kelas" value={dummyDetail.tipe} />
              <InfoItem icon={<Tag />} label="Topik" value={dummyDetail.topik} />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default ServiceDetail;
