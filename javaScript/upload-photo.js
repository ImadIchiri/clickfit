const uploadPhotoBtn = document.getElementById("upload_btn");
const uploadPhotoInput = document.getElementById("upload_input");
const form = document.querySelector("form");

uploadPhotoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  uploadPhotoInput.click();
});

uploadPhotoInput.addEventListener("change", () => {});
