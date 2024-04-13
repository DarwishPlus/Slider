// Steps
/*
1- array from Images
2- get Number Of Slide (array.length)
3- Set Current Slide
4- Set Element U will Use (slideNum - Prev - Next)
5- prev - next ==> onclick
6- Create The Main Ul Element 
      - Set Id On Created Element
7- ( loop )
      - Create list Items (li) Based On Slides Count 
      - Set Custom Attribute - 
      - Set TextNode (item content)
      - Append Item To The Main Ul List
      - Add The Created Ul Element To The Page
8-
*/

let slideNumber = document.querySelector(".slide-number"),
  images = Array.from(document.querySelectorAll(".slider-container img")),
  prevButton = document.querySelector(".prev"),
  nextButton = document.querySelector(".next"),
  currentSlide = 1,
  slidesCount = images.length;

prevButton.onclick = prevSlide;
nextButton.onclick = nextSlide;

let mainUl = document.createElement("ul");
mainUl.setAttribute("id", "pagination-ul");

for (let i = 1; i <= slidesCount; i++) {
  let li = document.createElement("li");
  li.setAttribute("data-index", i);
  li.appendChild(document.createTextNode(i));
  mainUl.appendChild(li);
  document.getElementById("indicators").appendChild(mainUl);
}

let paginationCreatedUl = document.getElementById("pagination-ul");
let paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

for (let i = 0; i < paginationBullets.length; i++) {
  paginationBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    theChecker();
  };
}

theChecker();

function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}

function theChecker() {
  slideNumber.textContent = "Slide# " + currentSlide + " of " + slidesCount;

  removeAllActive();
  images[currentSlide - 1].classList.add("active");
  paginationCreatedUl.children[currentSlide - 1].classList.add("active");

  if (currentSlide == 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }
  if (currentSlide == slidesCount) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

function removeAllActive() {
  images.forEach(function (img) {
    img.classList.remove("active");
  });

  paginationBullets.forEach(function (li) {
    li.classList.remove("active");
  });
}
