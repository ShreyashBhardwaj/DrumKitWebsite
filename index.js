// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//   alert("I got clicked");
// }

const drumKit = document.querySelectorAll(".drum");
var allSounds = [
  "sounds/crash.mp3",
  "sounds/kick-bass.mp3",
  "sounds/snare.mp3",
  "sounds/tom-1.mp3",
  "sounds/tom-2.mp3",
  "sounds/tom-3.mp3",
  "sounds/tom-4.mp3",
];

for (var i = 0; i < drumKit.length; i++) {
  drumKit[i].addEventListener("click", function () {
    this.style.color = "white";
    var sound;
    switch (this.innerHTML) {
      case "w":
        sound = allSounds[3];
        break;
      case "a":
        sound = allSounds[4];
        break;
      case "s":
        sound = allSounds[5];
        break;
      case "d":
        sound = allSounds[6];
        break;
      case "j":
        sound = allSounds[2];
        break;
      case "k":
        sound = allSounds[1];
        break;
      case "l":
        sound = allSounds[0];
        break;
      default:
        console.log(this.innerHTML);
    }
    var audio = new Audio(sound);
    audio.play();
  });
}

/* NEW WAY

class Dinosaur {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

let dino = new Dinosaur("GigaSaur", 29);
console.log(dino.a);*/

/* OLD WAY
function DinosaurTwo(name, length) {
  this.name = name;
  this.length = length;
  this.roar = function () {
    alert("ROAR");
  };
}

let dino2 = new DinosaurTwo("Gigasuar", 25);

dino2.roar();*/
