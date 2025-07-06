import React from "react";

const PPDB = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-28 px-4 md:px-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-4">
          Penerimaan Peserta Didik Baru (PPDB)
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed text-center mb-8">
          Informasi lengkap mengenai proses pendaftaran PKBM Zahratul Syitha tahun ajaran 2025/2026.
        </p>

        {/* Jadwal Pendaftaran */}
        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">📅 Jadwal Pendaftaran</h2>
          <ul className="list-disc ml-5 text-gray-700 space-y-2">
            <li><strong>Pendaftaran Dibuka:</strong> 1 Juli 2025</li>
            <li><strong>Penutupan Pendaftaran:</strong> 30 Agustus 2025</li>
            <li><strong>Wawancara & Orientasi:</strong> 5–10 September 2025</li>
            <li><strong>Mulai Belajar:</strong> 15 September 2025</li>
          </ul>
        </section>

        {/* Syarat Pendaftaran */}
        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">📝 Syarat Pendaftaran</h2>
          <ul className="list-disc ml-5 text-gray-700 space-y-2">
            <li>Fotokopi ijazah terakhir</li>
            <li>Fotokopi KTP/KK</li>
            <li>Pas foto 3x4 sebanyak 2 lembar</li>
            <li>Mengisi formulir pendaftaran</li>
          </ul>
        </section>

        {/* Alur Pendaftaran */}
        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">🔄 Alur Pendaftaran</h2>
          <ol className="list-decimal ml-5 text-gray-700 space-y-2">
            <li>Mengakses portal pendaftaran online</li>
            <li>Mengisi data & mengunggah dokumen</li>
            <li>Menunggu jadwal wawancara/orientasi</li>
            <li>Menerima informasi kelulusan & mulai belajar</li>
          </ol>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <a
            href="https://pend-pkbm-zs.vercel.app/ppdb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
          >
            Daftar Sekarang →
          </a>
          <p className="text-gray-500 mt-2 text-sm">*Link akan mengarah ke portal resmi pendaftaran</p>
        </div>
      </div>
    </main>
  );
};

export default PPDB;
