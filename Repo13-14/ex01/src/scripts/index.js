var modal = document.getElementById("myModal");

var popup = document.querySelectorAll(".popup");

var span = document.getElementsByClassName("close")[0];

popup.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
