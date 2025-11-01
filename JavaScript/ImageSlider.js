 const images = [
      "images/image2.jpg",
      "images/image3.jpg",
      "images/image4.jpg",
      "images/image5.jpg",
      "images/image6.jpg",
      "images/image7.jpg",
      "images/image8.jpg",
    ];

    let currentIndex = 0;
    const imageContent = document.getElementById("imageContent");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    function updateImage() {
      imageContent.style.opacity = 0;
      setTimeout(() => {
        imageContent.src = images[currentIndex];
        imageContent.style.opacity = 1;
      }, 300);
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      updateImage();
    }

    function prevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateImage();
    }

  
    //let slideInterval = setInterval(nextImage, 3000);  ... you can uncomment this line of code if the application sets slide show awtomatically after 3 seconds
  
    nextBtn.addEventListener("click", () => {
      nextImage();
      resetInterval();
    });

    prevBtn.addEventListener("click", () => {
      prevImage();
      resetInterval();
    });

    function resetInterval() {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextImage, 3000);
    }

    
    updateImage();