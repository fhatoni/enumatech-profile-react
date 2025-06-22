import DataImage from "./data";
import { listTools, listProyek } from "./data";
import { useState } from "react";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (imgUrl) => {
    setSelectedImage(imgUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      {/* Hero */}
      <div className="hero grid p-7 md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6">
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy" />
            <q>Solusi Masa Depan Pengembangan Produk IT</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">CV. Enuma Technology</h1>
          <p className="text-base/loose mb-6 opacity-50">Kami terdiri dari teknisi handal yang siap membantu mewujudkan produk IT impian anda</p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="#kontak" className="bg-blue-700 p-4 rounded-2xl hover:bg-blue-600">
              Hubungi Kami <i className="ri-phone-line"></i>
            </a>
            <a href="#tentang" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">
              Mulai Tour <i className="ri-eye-2-fill"></i>
            </a>
          </div>
        </div>
        <div>
          <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-3s" loading="lazy" />
        </div>
      </div>
      {/* End Hero */}
      {/* Tentang */}
      <div className="tentang mt-30 md:py-5 py-15 xl:p-10 p-5" id="tentang">
        <h1 className="text-4xl/snug font-bold mb-5 text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          Tentang Kami
        </h1>
        <div className="sm:w-fit w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-delay="300" data-aos-once="true">
          <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" />
          <p className="text-base/loose mb-10">
            Enuma Technology merupakan sebuah perusahaan yang bergerak di bidang teknologi informasi dengan menyediakan jasa perancangan, pengelolaan, pengembangan dan penelitian terkait IT. Adapun cakupan jasa kami meliputi di bawah ini :<li>Internet of Things (IOT)</li>
            <li>Multimedia : Desain grafis dan animasi</li>
            <li>Pengembangan Aplikasi Android </li>
            <li>Pengembangan Game Sistemasi Robotika</li>
          </p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy" />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  50<span className="text-blue-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  5<span className="text-blue-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Tentang */}
      <div className="jasa bg-zinc-900 mt-30 md:py-5 py-15 p-10" id="jasa">
        <h1 className="text-4xl font-bold text-center text-white mb-4" data-aos="fade-up" data-aos-once="true">
          Jasa & Program
        </h1>
        <p className="text-base text-center opacity-60 mb-10 max-w-2xl mx-auto text-white" data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
          Kami menyediakan layanan profesional dan program pembinaan di bidang teknologi informasi untuk mendukung kebutuhan digitalisasi Anda.
        </p>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
          {/* Konsultasi IT */}
          <div className="bg-zinc-800 p-6 rounded-lg text-white hover:bg-zinc-700 transition">
            <h2 className="text-xl font-semibold mb-2">Konsultasi IT</h2>
            <p className="text-sm opacity-70">Pendampingan dalam perencanaan solusi digital dan manajemen teknologi untuk bisnis Anda.</p>
          </div>
          {/* Perancangan Sistem */}
          <div className="bg-zinc-800 p-6 rounded-lg text-white hover:bg-zinc-700 transition">
            <h2 className="text-xl font-semibold mb-2">Perancangan Sistem</h2>
            <p className="text-sm opacity-70">Analisis kebutuhan dan desain sistem sesuai workflow dan struktur organisasi.</p>
          </div>
          {/* Pembuatan Sistem */}
          <div className="bg-zinc-800 p-6 rounded-lg text-white hover:bg-zinc-700 transition">
            <h2 className="text-xl font-semibold mb-2">Pembuatan Sistem</h2>
            <p className="text-sm opacity-70">Implementasi sistem berbasis web, mobile, atau hybrid yang terintegrasi dan scalable.</p>
          </div>
          {/* Pengembangan Produk */}
          <div className="bg-zinc-800 p-6 rounded-lg text-white hover:bg-zinc-700 transition">
            <h2 className="text-xl font-semibold mb-2">Pengembangan Produk</h2>
            <p className="text-sm opacity-70">Peningkatan fitur, UI/UX, dan performa produk digital yang sudah berjalan.</p>
          </div>
          {/* Pengelolaan Produk */}
          <div className="bg-zinc-800 p-6 rounded-lg text-white hover:bg-zinc-700 transition">
            <h2 className="text-xl font-semibold mb-2">Pengelolaan Produk</h2>
            <p className="text-sm opacity-70">Layanan maintenance, monitoring, dan manajemen siklus hidup sistem dan aplikasi.</p>
          </div>
          {/* Program Internship */}
          <div className="bg-zinc-800 p-6 rounded-lg text-white hover:bg-zinc-700 transition">
            <h2 className="text-xl font-semibold mb-2">Program Internship</h2>
            <p className="text-sm opacity-70">Program magang edukatif bagi siswa SMK dan Mahasiswa untuk meningkatkan pengalaman di dunia IT profesional.</p>
          </div>
        </div>
      </div>
      {/* Tools */}
      <div className="tools mt-30 p-10 md:py-5 py-15">
        <h1 className="text-center text-4xl font-bold mb-5" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          Klien Kami
        </h1>
        <p className="text-center text-base opacity-60 mb-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
          Kami telah dipercaya oleh berbagai klien dari beragam sektor industri untuk mendukung kebutuhan teknologi informasi mereka melalui layanan dan solusi yang kami tawarkan.
        </p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map((tool) => (
            <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-blue-800 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
              <img src={tool.gambar} alt="Tools Image" className="w-14 h-14 object-contain bg-white p-1 rounded-md" loading="lazy" />
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* End Tools */}
      {/* Proyek */}
      <div className="proyek mt-30 md:py-5 py-15 p-10" id="proyek">
        <h1 className="text-center text-4xl font-bold mb-5" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          Proyek
        </h1>
        <p className="text-center text-base opacity-60 mb-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
          Berikut adalah beberapa proyek yang telah kami selesaikan dalam berbagai bidang teknologi. Kami selalu berkomitmen memberikan solusi terbaik yang inovatif dan sesuai dengan kebutuhan klien.
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true">
              <img src={proyek.gambar} alt="Proyek Image" loading="lazy" className="w-full h-50 object-cover rounded-md cursor-pointer hover:opacity-80 transition" onClick={() => openModal(proyek.gambar)} />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
              </div>
            </div>
          ))}
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closeModal}>
            <div
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()} // mencegah modal tertutup saat klik gambar
            >
              <button className="absolute lg:-top-5 -top-10 right-1 text-white text-3xl font-bold" onClick={closeModal}>
                &times;
              </button>
              <img src={selectedImage} alt="Full Image" className="w-full max-h-[70vh] object-contain rounded-md" />
            </div>
          </div>
        )}
      </div>
      {/* End Proyek */}
      {/* Kontak */}
      <div className="kontak mt-30 md:py-5 py-15 p-10" id="kontak">
        <h1 className="text-4xl font-bold text-center mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          Kontak Kami
        </h1>
        <p className="text-center text-base opacity-60 mb-10 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
          Hubungi kami untuk konsultasi, kerja sama, atau informasi lebih lanjut mengenai layanan yang kami sediakan.
        </p>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 items-start">
          {/* Info Kontak Kiri */}
          <div className="bg-zinc-800 text-white p-6 rounded-lg space-y-6" data-aos="fade-up" data-aos-delay="400" data-aos-once="true">
            <div>
              <h2 className="text-xl font-semibold flex items-center gap-2 mb-1">
                <i className="ri-map-pin-fill text-blue-400 text-2xl"></i> Lokasi
              </h2>
              <p className="opacity-75">Daratan, RT 002/RW 006, Tohudan, Colomadu, Karanganyar, Jawa Tengah, Indonesia</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold flex items-center gap-2 mb-1">
                <i className="ri-mail-fill text-blue-400 text-2xl"></i> Email
              </h2>
              <p className="opacity-75">support@enumatech.com</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold flex items-center gap-2 mb-1">
                <i className="ri-phone-fill text-blue-400 text-2xl"></i> Telepon
              </h2>
              <p className="opacity-75">+62 821-3649-0192</p>
            </div>
            <div className="pt-2">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.371523982063!2d110.76814567367948!3d-7.534396092478832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a1476ffffffff%3A0x4fefce7d4aab5646!2sEnuma%20Technology!5e0!3m2!1sen!2sid!4v1750549124160!5m2!1sen!2sid" className="w-full h-60 rounded-md border border-zinc-700" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

          {/* Form Kontak Kanan */}
          <form action="https://formsubmit.co/support@enumatech.com" method="POST" autoComplete="off" className="bg-zinc-800 p-6 rounded-lg text-white space-y-6" data-aos="fade-up" data-aos-delay="600" data-aos-once="true">
            {/* Hidden extras */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://enumatechnology.com/terkirim.html" />

            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Anda</label>
              <input type="text" name="nama" required className="p-2 rounded-md bg-zinc-900 border border-zinc-600" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email Anda</label>
              <input type="email" name="email" required className="p-2 rounded-md bg-zinc-900 border border-zinc-600" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Judul Pesan</label>
              <input type="text" name="subjek" className="p-2 rounded-md bg-zinc-900 border border-zinc-600" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Pesan</label>
              <textarea name="pesan" rows="5" required className="p-2 rounded-md bg-zinc-900 border border-zinc-600" />
            </div>
            <button type="submit" className="bg-blue-700 hover:bg-blue-600 transition p-3 w-full rounded-md font-semibold">
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>

      {/* End Kontak */}
    </>
  );
}

export default App;
