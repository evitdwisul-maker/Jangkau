// ==========================================================================
// JANGKAU - AI untuk Pemerataan Layanan Publik Indonesia
// Complete Logic File (app.js)
// ==========================================================================

/**
 * Fungsi utama saat pengguna menekan tombol "Mulai Sekarang" atau "Jelajahi JANGKAU"
 */
function mulai() {
  alert(
    "Terima kasih telah tertarik dengan JANGKAU!\nSistem Interactive Mapping dan Dashboard AI sedang dipersiapkan.",
  );

  // Gulir otomatis ke bagian fitur agar interaktif
  const fiturSection = document.getElementById("fitur");
  if (fiturSection) {
    fiturSection.scrollIntoView({ behavior: "smooth" });
  }
}

/**
 * Efek Interaktif: Mengubah tampilan Navbar ketika halaman digulir (Scroll)
 */
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.style.backgroundColor = "#ffffff";
    nav.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
    nav.style.padding = "15px 8%"; // Membuat navbar sedikit lebih ramping saat di-scroll
  } else {
    nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
    nav.style.padding = "20px 8%"; // Kembali ke ukuran semula
  }
});
