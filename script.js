function showSurprise() {
    const surprise = document.getElementById("surprise");
    surprise.style.display = "block";
    surprise.classList.add("fade-in");
  
    const bgMusic = document.getElementById("bgMusic");
    if (bgMusic.paused) {
      bgMusic.play().catch(err => console.log("Autoplay blocked."));
    }
  }
  
  function showGallery() {
    const gallery = document.getElementById("gallery");
    gallery.style.display = "block";
    gallery.classList.add("fade-in");
  }
  
  let images = [
    "kita1.JPG",
    "kita2.JPG",
    "kita3.JPG",
    "kita4.JPG",
    "kita5.JPG",
    "kita6.JPG",
    "kita7.JPEG"
  ];
  
  let index = 0;
  
  function nextSlide() {
    index = (index + 1) % images.length;
    updateSlide();
  }
  
  function prevSlide() {
    index = (index - 1 + images.length) % images.length;
    updateSlide();
  }
  
  function updateSlide() {
    const slideImg = document.getElementById("slideImg");
    slideImg.classList.add("fade-out");
  
    setTimeout(() => {
      slideImg.src = images[index];
      slideImg.onerror = () => slideImg.src = "images/default.jpg";
      slideImg.classList.remove("fade-out");
      slideImg.classList.add("fade-in");
    }, 300);
  }
  