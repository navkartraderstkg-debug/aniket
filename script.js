// Image filenames without extension
const imageNames = ["1", "2", "3", "4", "5", "6", "7"]; // add more if needed
const imageFolder = "images/";
const extensions = [".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"];

const slidesContainer = document.getElementById("slides");

imageNames.forEach(name => {
  let found = false;
  for (const ext of extensions) {
    const img = new Image();
    img.src = imageFolder + name + ext;

    img.onload = () => {
      if (!found) {
        const slideImg = document.createElement("img");
        slideImg.src = img.src;
        slideImg.alt = "Aniket & Rutuja";
        slidesContainer.appendChild(slideImg);
        found = true;
      }
    };

    img.onerror = () => {};
  }
});

console.log("Aniket ❤️ Rutuja | Wedding 22 November 2025");
