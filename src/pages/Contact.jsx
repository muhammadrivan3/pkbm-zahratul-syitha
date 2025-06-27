import React from "react";

const Contact = () => {
  return (
    <main className="min-h-screen pt-28 px-6 bg-white text-gray-800">
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-serif font-bold mb-4 text-gray-900">Hubungi Kami</h2>
        <p className="text-lg text-gray-600">
          Ingin bertanya atau bekerja sama? Kirimkan pesan Anda melalui formulir berikut.
        </p>
      </section>

      <section className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-xl shadow-md">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="name"
              placeholder="Masukkan nama Anda"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="nama@email.com"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Pesan
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Tulis pesan Anda di sini..."
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Kirim Pesan
          </button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
