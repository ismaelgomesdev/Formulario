var body = document.querySelector("body");
var input1 = document.getElementById("grad-input-1");
input1.addEventListener("change", function () {
  body.style.setProperty("--grad-color-1", input1.value);
});
