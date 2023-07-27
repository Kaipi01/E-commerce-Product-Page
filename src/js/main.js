const lightbox = document.querySelector('.lightbox');
const changeProductImgBtns = document.querySelectorAll(
  ".product__change-img-btn"
);

changeProductImgBtns.forEach((btn) =>
  btn.addEventListener("click", e => changeProductImg(e))
);

function changeProductImg(e) {

}