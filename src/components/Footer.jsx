export const Footer = () => {
  return (
    <div className="mt-25 py-4 p-10 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <h1 className="md:text-2xl text-1xl font-bold">CV. Enuma Technology</h1>
      <div className="flex md:gap-7 gap-3">
        <a href="#beranda" className="p-2 rounded-md hover:bg-blue-600">
          Beranda
        </a>
        <a href="#tentang" className="p-2 rounded-md hover:bg-blue-600">
          Tentang
        </a>
        <a href="#proyek" className="p-2 rounded-md hover:bg-blue-600">
          Proyek
        </a>
        <a href="#kontak" className="p-2 rounded-md hover:bg-blue-600">
          Kontak
        </a>
      </div>
      <div className="flex gap-3 text-center">
        <a href="https://enumatechnology.com/" className="p-2 rounded-md hover:bg-blue-600">
          <i className="ri ri-twitter-fill ri-2x"></i>
        </a>
        <a href="https://enumatechnology.com/" className="p-2 rounded-md hover:bg-blue-600">
          <i className="ri ri-instagram-fill ri-2x"></i>
        </a>
        <a href="https://enumatechnology.com/" className="p-2 rounded-md hover:bg-blue-600">
          <i className="ri ri-facebook-fill ri-2x"></i>
        </a>
        <a href="https://enumatechnology.com/" className="p-2 rounded-md hover:bg-blue-600">
          <i className="ri ri-linkedin-fill ri-2x"></i>
        </a>
      </div>
    </div>
  );
};
