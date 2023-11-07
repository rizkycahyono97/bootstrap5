// script untuk googlesheets
const scriptURL = "https://script.google.com/macros/s/AKfycbyXDeuacEnrV94YpK5dbwNfIQwBv4N77Q_1pYOhK9J-QH9RWUTLf60ObN4gwzAk1Uwu/exec"; // url dari deploy triger
const form = document.forms["rizky-contact-form"]; // untuk menyambungkan ke form kita

// variable untuk menangkap class
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // ketika tombol submit diklik
  // tampilkan tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol loading, hilangkan tombol kirim
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // menampilkan alert
      myAlert.classList.toggle("d-none");
      // reset formnya (ngilangin semua tulisan ketika sudah terkirim)
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

// untuk animasi gallery-img
const galleryImage = document.querySelectorAll(".gallery-img");

galleryImage.forEach((img, i) => {
  img.dataset.aos = "fade-down";
  img.dataset.aosDelay = i * 100;
  img.dataset.aosDuration = 1000;
});

// untuk Vanilla-tilts.js
