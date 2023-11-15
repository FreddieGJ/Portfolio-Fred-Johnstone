document.addEventListener("DOMContentLoaded", function() {
    var dropdownBtn = document.getElementById("dropdown-btn");
    var dropdownContent = document.querySelector(".dropdown-content");
  
    dropdownBtn.addEventListener("click", function() {
      dropdownContent.classList.toggle("show");
    });
  
    // Close the dropdown menu if the user clicks outside of it
    window.addEventListener("click", function(event) {
      if (!event.target.matches("#dropdown-btn")) {
        if (dropdownContent.classList.contains("show")) {
          dropdownContent.classList.remove("show");
        }
      }
    });
  });


