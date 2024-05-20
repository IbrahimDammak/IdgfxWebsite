window.onload = function() {
    var preloader = document.querySelector(".preloader");
  setTimeout(function() {
    preloader.classList.add("hide");
  }, 1000); // wait 1 second before hiding preloader
}