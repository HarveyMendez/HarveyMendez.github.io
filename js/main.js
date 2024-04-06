document.addEventListener("DOMContentLoaded", () => {
    let index = 0;
    const slides = document.querySelectorAll(".slide");
  
    const showSlide = () => {
      slides.forEach(slide => slide.classList.remove("active"));
      slides[index].classList.add("active");
      index = (index + 1) % slides.length;
    };
  
    showSlide();
    setInterval(showSlide, 4000); // Cambia de imagen cada 4 segundos
  });