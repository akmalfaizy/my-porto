// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Modal
function openModalFromElement(imgSrc, title, descId) {
  const desc = document.getElementById(descId).innerText; // ambil seluruh teks
  openModal(imgSrc, title, desc);
}

function openModal(imgSrc, title, desc) {
  document.getElementById("modalImage").src = imgSrc;
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDesc").innerText = desc;

  const modal = document.getElementById("portfolioModal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");

  // Hide navbar
  document.querySelector("header").classList.add("hidden");

  // Matikan scroll di body
  document.body.classList.add("overflow-hidden");
}

function closeModal() {
  const modal = document.getElementById("portfolioModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");

  // Show navbar kembali
  document.querySelector("header").classList.remove("hidden");

  // Aktifkan scroll kembali
  document.body.classList.remove("overflow-hidden");
}

// Close ketika klik tombol silang
document.getElementById("modalClose").addEventListener("click", closeModal);

// Close ketika klik di luar modal
document
  .getElementById("portfolioModal")
  .addEventListener("click", function (e) {
    if (e.target === this) {
      closeModal();
    }
  });
