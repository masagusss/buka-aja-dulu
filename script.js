function showSurprise() {
    let surprise = document.getElementById("surprise");
    surprise.style.display = "block";
    surprise.classList.add("fade-in"); // Animasi smooth muncul

    let bgMusic = document.getElementById("bgMusic");
    if (bgMusic.paused) {
        bgMusic.play().catch(error => console.log("Autoplay diblokir, user harus klik dulu"));
    }
}

// Daftar gambar slideshow
let images = [
    "images/kita1.JPG",
    "images/kita2.JPG",
    "images/kita3.JPG",
    "images/kita4.JPG",
    "images/kita5.JPG",
    "images/kita6.JPG",
    "images/kita7.JPEG"
];

let index = 0;

function showGallery() {
    let gallery = document.getElementById("gallery");
    gallery.style.display = "block";
    gallery.classList.add("fade-in"); // Animasi fade-in
}

// Ganti gambar ke slide berikutnya
function nextSlide() {
    index = (index + 1) % images.length;
    updateSlide();
}

// Ganti gambar ke slide sebelumnya
function prevSlide() {
    index = (index - 1 + images.length) % images.length;
    updateSlide();
}

// Update tampilan slide dan animasi
function updateSlide() {
    let slideImg = document.getElementById("slideImg");
    slideImg.classList.add("fade-out"); // Tambahkan efek fade-out sebelum ganti gambar

    setTimeout(() => {
        slideImg.src = images[index];
        slideImg.onerror = () => slideImg.src = "images/default.jpg"; // Jika error, ganti default image
        slideImg.classList.remove("fade-out");
        slideImg.classList.add("fade-in"); // Tambahkan efek fade-in setelah gambar baru dimuat
    }, 300); // Waktu fade-out sebelum ganti gambar
}

function playMusic() {
    let bgMusic = document.getElementById("bgMusic");
    if (bgMusic.paused) {
        bgMusic.play().catch(error => console.log("Autoplay diblokir, user harus klik dulu"));
    }
}

// Panggil fungsi playMusic() saat tombol ditekan
function showSurprise() {
    document.getElementById("surprise").style.display = "block";
    document.getElementById("surprise").classList.add("fade-in"); 
    playMusic(); // 🔥 Musik mulai saat tombol kejutan ditekan
}

