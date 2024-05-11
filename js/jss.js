// Function to toggle the dropdown content
function toggleDropdown() {
  var dropdownContent = document.querySelector('.dropdown-content');
  dropdownContent.classList.toggle('show');
}

// Close the dropdown when clicking outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const button = document.querySelector('.butto');
  const popupForm = document.getElementById('popup-form');

  button.addEventListener('click', function() {
    popupForm.style.display = 'block';
  });
});
