import { GraduationCap, Laptop2 } from "lucide-react";
import React from "react";
import BlurText from "../../ui/BlurText";

const LearningFlow = () => {
  return (
    <div className="text-center py-10 px-6 bg-accent ">
      <h2 className="text-3xl md:text-4xl font-title font-bold text-title mb-4 font-serif">
        Bagaimana Cara Belajar di PKBM?
      </h2>

      <p className="text-body max-w-2xl mx-auto mb-12 text-sm md:text-base leading-relaxed font-body">
        PKBM Zahratul Syitha menyediakan dua mode pembelajaran:{" "}
        <strong className="text-blue-700">Online</strong> dan{" "}
        <strong className="text-purple-700">Offline</strong>, dirancang
        fleksibel untuk menjangkau semua kalangan.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto text-left ">
        {/* ONLINE */}
        <div className="relative  p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-t-2xl" />
          <div className="flex items-center gap-4 mb-4">
            <Laptop2 className="text-blue-600 w-6 h-6" />
            <BlurText
              text="PEMBELAJARAN ONLINE"
              delay={100}
              animateBy="words"
              direction="top"
              className="font-body text-lg md:text-xl font-bold text-blue-700"
            />
          </div>
          <p className="text-body text-sm md:text-base leading-relaxed font-body">
            Pendaftaran dilakukan secara daring melalui halaman{" "}
            <strong>PPDB Online</strong>. Pembelajaran disampaikan via{" "}
            <strong>WhatsApp</strong>, <strong>Google Classroom</strong>, atau{" "}
            <strong>Zoom</strong>. Materi berupa video, PDF, sesi live, dan
            evaluasi online.
          </p>
        </div>

        {/* OFFLINE */}
        <div className="relative p-8 rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl transition group font-body">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-300 rounded-t-2xl" />
          <div className="flex items-center gap-4 mb-4">
            <GraduationCap className="text-purple-600 w-6 h-6" />
            <BlurText
              text="PEMBELAJARAN OFFLINE"
              delay={100}
              animateBy="words"
              direction="top"
              className="text-lg md:text-xl font-bold text-purple-700"
            />
          </div>
          <p className="text-body text-sm md:text-base leading-relaxed">
            Calon peserta mendaftar langsung ke kantor PKBM. Kegiatan belajar
            dilakukan secara tatap muka dengan pengajar berpengalaman,
            menggunakan pendekatan praktik, diskusi kelompok, dan ujian luring.
          </p>
        </div>
      </div>

      <div className="mt-12">
        <a
          href="/daftar"
          className="font-ui inline-block bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-full font-semibold shadow hover:opacity-90 transition"
        >
          Daftar Sekarang
        </a>
      </div>
    </div>
  );
};

export default LearningFlow;
