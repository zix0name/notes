const root = document.querySelector("#root");

const app = document.createElement("div");
app.className = "app";

const img = document.createElement("img");
img.src =
  "https://img.freepik.com/free-vector/all-right-emoji-illustration_23-2151298395.jpg";
img.alt = "emoji";
img.className = "emoji";
img.style =
  "display: flex; justify-content: center; align-items: center; width: auto; margin:auto; height: 100vh; background-color: #f0f0f0;";
app.appendChild(img);
root.appendChild(app);
img.addEventListener("click", () => {
  img.style.transform = "rotate(360deg)";
  img.style.transition = "transform 1s";
  img.style.transitionTimingFunction = "ease-in-out";
  setTimeout(() => {
    img.style.transform = "rotate(0deg)";
  }, 1000);
  img.style.transition = "transform 1s";
});
