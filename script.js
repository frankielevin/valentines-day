const text = "Isobel Crowne - Will you be my valentine?";

let index = 0;

const writeText = function () {
  document.querySelector(".text").innerText = text.slice(0, index);
  index++;

  if (index > text.length) index = 0;
};

setInterval(writeText, 300);

const createHeart = function () {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 2 + "s";
  heart.innerText = "❤️";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
};

setInterval(createHeart, 300);
