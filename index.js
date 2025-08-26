// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//   alert("I got clicked");
// }

const drumKit = document.querySelectorAll(".drum");

for (var i = 0; i < drumKit.length; i++) {
  console.log(i);
  drumKit[i].addEventListener("click", function () {
    alert("I got clicked");
  });
}
