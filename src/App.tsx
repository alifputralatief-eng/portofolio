import "./App.css";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {

  const [info, setInfo] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>

      {/* Navbar */}
      <nav className="navbar">

        <h2 className="logo">Alif_dev</h2>

        {/* Hamburger */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* Nav Links */}
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>

          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>

          <li>
            <a href="#education" onClick={() => setMenuOpen(false)}>
              Education
            </a>
          </li>

          <li>
            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>

        </ul>

      </nav>

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-text">

          <h1>
            Hi, I'm <span>Alif Putra Latief</span>
          </h1>

        </div>

        <img
          src="/foto.jpeg"
          alt="Profile"
          className="profile"
        />

      </section>

      {/* About */}
      <section className="section" id="about">

        <h2>About Me</h2>

        <p>
          Mahasiswa semester 2 Program Studi Ilmu Komputer
          di Institut Teknologi Habibie (ITH) yang sedang
          mempelajari pengembangan website modern menggunakan
          HTML, CSS, JavaScript, dan React.Saya memiliki minat pada bidang web development
          dan teknologi digital. Saat ini saya fokus
          mempelajari frontend development dan UI/UX design
          untuk membuat website yang modern, menarik,
          dan responsif.
        </p>

      </section>

      {/* Education */}
      <section className="section" id="education">

        <h2>Education</h2>

        <div className="education">

          {/* SD */}
          <div
            className={`edu-card ${info === "sd" ? "active" : ""}`}
            onClick={() => setInfo(info === "sd" ? "" : "sd")}
          >

            <h3>SD</h3>

            <p>SDN 85 kota Parepare</p>

            {info === "sd" && (
              <div className="edu-detail">
                Menempuh pendidikan Sekolah Dasar
                dari tahun 2013 - 2019
              </div>
            )}

          </div>

          {/* SMP */}
          <div
            className={`edu-card ${info === "smp" ? "active" : ""}`}
            onClick={() => setInfo(info === "smp" ? "" : "smp")}
          >

            <h3>SMP</h3>

            <p>SMPN 1 kota Parepare</p>

            {info === "smp" && (
              <div className="edu-detail">
                Menempuh pendidikan SMP
                dari tahun 2019 - 2022
              </div>
            )}

          </div>

          {/* SMA */}
          <div
            className={`edu-card ${info === "sma" ? "active" : ""}`}
            onClick={() => setInfo(info === "sma" ? "" : "sma")}
          >

            <h3>SMA</h3>

            <p>SMAN 4 kota Parepare</p>

            {info === "sma" && (
              <div className="edu-detail">
                Menempuh pendidikan SMA
                dari tahun 2022 - 2025
              </div>
            )}

          </div>

          {/* Kuliah */}
          <div
            className={`edu-card ${info === "kuliah" ? "active" : ""}`}
            onClick={() => setInfo(info === "kuliah" ? "" : "kuliah")}
          >

            <h3>Kuliah</h3>

            <p>Institut Teknologi Habibie (ITH)</p>

            {info === "kuliah" && (
              <div className="edu-detail">
                Mahasiswa Institut Teknologi Habibie
                sejak tahun 2025
              </div>
            )}

          </div>

        </div>

      </section>

      {/* Skills */}
      <section className="section" id="skills">

        <h2>Skills</h2>

        <div className="skills">

          <div className="skill-card">
            <i className="fab fa-html5 skill-icon html"></i>
            <h3>HTML</h3>
          </div>

          <div className="skill-card">
            <i className="fab fa-css3-alt skill-icon css"></i>
            <h3>CSS</h3>
          </div>

          <div className="skill-card">
            <i className="fab fa-js-square skill-icon js"></i>
            <h3>JavaScript</h3>
          </div>

          <div className="skill-card react-card">
            <i className="fab fa-react skill-icon react"></i>
            <h3>React</h3>
          </div>

          <div className="skill-card python-card">
            <i className="fab fa-python skill-icon python"></i>
            <h3>Python</h3>
          </div>

        </div>

      </section>

      {/* Contact */}
      <section className="section" id="contact">

        <h2>Contact</h2>

        <div className="contact-info">

          {/* WhatsApp */}
          <div className="contact-item">

            <a
              href="https://wa.me/6289519032007"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon fa-brands fa-whatsapp"></i>
            </a>

          </div>

          {/* Instagram */}
          <div className="contact-item">

            <a
              href="https://www.instagram.com/liipp_19/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon fa-brands fa-instagram"></i>
            </a>

          </div>

          {/* TikTok */}
          <div className="contact-item">

            <a
              href="https://www.tiktok.com/@alippp_19_03"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon fa-brands fa-tiktok"></i>
            </a>

          </div>

          {/* LinkedIn */}
          <div className="contact-item">

            <a
              href="https://www.linkedin.com/in/alif-putra-latief-1911783b3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon fa-brands fa-linkedin"></i>
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}

export default App;