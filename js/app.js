// Fungsi ketika tombol utama diklik
function mulai() {
  alert(
    "Terima kasih telah tertarik dengan JANGKAU!\nSistem Interactive Mapping dan Dashboard AI sedang dipersiapkan.",
  );

  // Opsional: Gulir otomatis ke bagian fitur jika ingin mengarahkan pengguna
  const fiturSection = document.getElementById("fitur");
  if (fiturSection) {
    fiturSection.scrollIntoView({ behavior: "smooth" });
  }
}

// Efek tambahan: Mengubah warna background navbar saat halaman di-scroll
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.style.backgroundColor = "#ffffff";
    nav.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
  } else {
    nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
  }
});
