// Daftar gambar slideshow (pastikan nama file dan ekstensi sesuai)
let images = [
    "kita2.JPG",
    "kita3.JPG",
    "kita4.JPG",
    "kita5.JPG",
    "kita6.JPG",
    "kita7.JPG "
];

let index = 0;

// Tampilkan kejutan dan mulai musik
function showSurprise() {
    const surprise = document.getElementById("surprise");
    surprise.style.display = "block";
    surprise.classList.add("fade-in"); // Animasi muncul
    playMusic();
}

// Tampilkan galeri foto
function showGallery() {
    const gallery = document.getElementById("gallery");
    gallery.style.display = "block";
    gallery.classList.add("fade-in");
}

// Slide berikutnya
function nextSlide() {
    index = (index + 1) % images.length;
    updateSlide();
}

// Slide sebelumnya
function prevSlide() {
    index = (index - 1 + images.length) % images.length;
    updateSlide();
}

// Update tampilan gambar slideshow
function updateSlide() {
    const slideImg = document.getElementById("slideImg");
    slideImg.classList.add("fade-out");

    setTimeout(() => {
        slideImg.src = images[index];
        slideImg.onerror = () => (slideImg.src = "default.jpg"); // Gambar fallback
        slideImg.classList.remove("fade-out");
        slideImg.classList.add("fade-in");
    }, 300);
}

// Putar musik latar
function playMusic() {
    const bgMusic = document.getElementById("bgMusic");
    if (bgMusic.paused) {
        bgMusic.play().catch((error) => {
            console.log("Autoplay diblokir, user harus klik dulu");
        });
    }
}
