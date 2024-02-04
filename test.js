var img = document.querySelector("img");
var allImg = ["./img/img1.jpg", "./img/img2.jpg", "./img/img3.jpg"];

var count = 0;

function next() {
  count++;
  if (count >= allImg.length) {
    count = 0;
    img.src = allImg[count];
  } else {
    img.src = allImg[count];
  }
}
function prev() {
  count--;
  if (count < 0) {
    count = allImg.length - 1;
    img.src = allImg[count];
  } else {
    img.src = allImg[count];
  }
}
