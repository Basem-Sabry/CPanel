var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
function openNav() {
  document.getElementById("mySidebar").style.width = "275px";
/*
  document.getElementById("newuser").style.width = "80%";
*/
}
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
/*
  document.getElementById("newuser").style.width = "100%";
*/
}