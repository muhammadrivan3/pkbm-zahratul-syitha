import { motion } from "framer-motion";
import { ScrollText, Sparkles, Target } from "lucide-react";
import SplitTextReveal from "../components/ui/SplitTextReveal";
import ScrollReveal from "../components/ui/ScrollReveal";

const infoItems = [
  {
    icon: Target,
    title: "Misi Kami",
    desc: "Menyediakan pendidikan inklusif dan bermutu untuk memberdayakan individu agar berkontribusi positif bagi masyarakat.",
  },
  {
    icon: Sparkles,
    title: "Visi Kami",
    desc: "Menjadi lembaga pendidikan unggulan yang dikenal atas kualitas, inovasi, dan dampak komunitasnya.",
  },
  {
    icon: ScrollText,
    title: "Sejarah Singkat",
    desc: "Didirikan pada tahun [Tahun], PKBM Zahratul Syitha berkembang dari inisiatif masyarakat menjadi pusat pembelajaran yang dipercaya.",
  },
];

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <motion.main
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="min-h-screen bg-base pt-28 pb-20 px-4 md:px-10 text-gray-800"
    >
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center mb-20">
        <SplitTextReveal
          text="Tentang Kami"
          containerClassName="text-center"
          textClassName="font-title text-title text-2xl md:text-4xl font-bold px-2 break-words"
        />
        <ScrollReveal
          children="PKBM Zahratul Syitha hadir sebagai lembaga pendidikan non-formal yang
          berkomitmen menghadirkan layanan berkualitas tinggi bagi masyarakat luas."
          containerClassName="text-center"
          textClassName="mx-auto leading-relaxed max-w-3xl text-sm md:text-md text-body"
          baseOpacity={0.2}
          blurStrength={4}
          enableBlur
        />
      </section>

      {/* Sambutan Kepala Sekolah */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="rounded-xl overflow-hidden shadow-md ring-1 ring-gray-200">
            <img
              src="/img/bg_edo.jpg"
              alt="Kepala Sekolah"
              className="object-cover w-full h-96"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <SplitTextReveal
            text="Sambutan Kepala Sekolah"
            containerClassName="text-start"
            textClassName="text-xl md:text-2xl font-semibold text-subtitle"
          />
          <ScrollReveal
            containerClassName="text-start"
            textClassName="mx-auto leading-relaxed max-w-3xl text-md md:text-md text-body text-justify"
          >
            Selamat datang di{" "}
            <span className="font-semibold">PKBM Zahratul Syitha</span>, tempat
            tumbuh dan berkembangnya generasi yang berilmu, mandiri, dan
            berintegritas tinggi.
          </ScrollReveal>
          <ScrollReveal
            containerClassName="text-start"
            textClassName="mx-auto leading-relaxed max-w-3xl text-md md:text-md text-body text-justify"
          >
            Kami percaya bahwa setiap individu berhak mendapat kesempatan
            belajar yang bermakna. Mari wujudkan masa depan yang lebih baik
            bersama kami.
          </ScrollReveal>

          <div>
            <p className="text-lg font-semibold">Dr. Ridho Akbar Derda Putra</p>
            <p className="text-gray-500 italic">Kepala Sekolah</p>
          </div>
        </motion.div>
      </section>

      {/* Visi Misi Sejarah */}
      <section className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-title font-bold text-gray-800 mb-4">
            Nilai & Tujuan Kami
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Fondasi dari semua layanan pendidikan kami ditopang oleh misi yang
            kuat, visi yang jauh ke depan, dan sejarah yang bermakna.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {infoItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariant}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="flex gap-6 bg-white p-6 rounded-xl shadow-md border border-gray-200"
              >
                <div className="flex-shrink-0 bg-blue-100 border border-blue-200 p-3 rounded-full">
                  <Icon className="text-blue-700 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-serif font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </motion.main>
  );
};

export default About;
