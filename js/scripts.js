
let onHoverElements = document.querySelectorAll(".fsh-on-hover-resize");

onHoverElements.forEach((element) => {
  element.addEventListener("mouseover", (event) => {
    event.target.style.color = "red";
    event.target.style.fontSize = "30px";
  },false)

  element.addEventListener("mouseout", (event) => {
    event.target.style.color = "black";
    event.target.style.fontSize = "20px";
  })
});