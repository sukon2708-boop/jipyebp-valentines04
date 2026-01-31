const gallery = document.getElementById("gallery");
const modalBackdrop = document.getElementById("modalBackdrop");
const bigImg = document.getElementById("bigImg");

const photos = [
  "assets/1.jpg",
  "assets/2.jpg",
  "assets/3.jpg",
  "assets/4.jpg",
  "assets/5.jpg",
  "assets/6.jpg",
  "assets/7.jpg",
];

photos.forEach(src=>{
  const img = document.createElement("img");
  img.className = "photo";
  img.src = src;
  img.alt = "memory";
  img.addEventListener("click", ()=>{
    bigImg.src = src;
    modalBackdrop.style.display = "flex";
  });
  gallery.appendChild(img);
});

document.getElementById("closeModalBtn").addEventListener("click", ()=>{
  modalBackdrop.style.display = "none";
});
modalBackdrop.addEventListener("click", (e)=>{
  if(e.target === modalBackdrop) modalBackdrop.style.display = "none";
});
