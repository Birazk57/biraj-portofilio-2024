function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

 // Get the filter dropdown and project cards
 const filterType = document.getElementById("filterType");
 const cards = document.querySelectorAll(".details-container");

 // Add event listener to the filter
 filterType.addEventListener("change", function() {
   const selected = this.value;

   // Loop through all the cards and display/hide based on the selected value
   cards.forEach(card => {
     const type = card.getAttribute("data-type");
     
     if (!selected || type === selected) {
       card.style.display = "flex";  // or "block" depending on your layout
     } else {
       card.style.display = "none";
     }
   });
 });
