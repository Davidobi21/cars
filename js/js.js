function toggleNavbar() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }


  document.addEventListener("DOMContentLoaded", function() {
    const categoryImage = document.getElementById('categoryImage');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const images = ['/home/dave/Documents/car/images/kia_telluride_2024_large-middle.png', '/home/dave/Documents/car/images/kia_EV9_2024_large-middle.png', '/home/dave/Documents/car/images/kia_k5_2024_large-middle.png', '/home/dave/Documents/car/images/kia_soul_2024_large-middle.png', '/home/dave/Documents/car/images/kia_forte_2024_large-middle.png']; // Replace with the paths to your images
    let currentIndex = 0;
  
    // Function to update the image source
    function updateImage() {
      categoryImage.src = images[currentIndex];
    }
  
    // Event listener for previous button
    prevButton.addEventListener('click', function() {
      currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
      updateImage();
    });
  
    // Event listener for next button
    nextButton.addEventListener('click', function() {
      currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
      updateImage();
    });
  
    // Initial image update
    updateImage();
  });



  
  function showContent(id) {
    var contentContainers = document.querySelectorAll('.coke');
    contentContainers.forEach(function(container) {
      container.style.display = 'none'; // Hide all content containers
    });
  
    var selectedContent = document.getElementById(id);
    if (selectedContent) {
      selectedContent.style.display = 'block'; // Show the selected content container
    }
  }

  
  
  
  
  
  
  
  
  
  
  
  