'use strict';

let attemptsEl = document.getElementById('attempts');
let containerEl = document.getElementById('container');
let leftImgEl = document.getElementById('leftImg');
let middleImgEl = document.getElementById('middleImg');
let rightImgEl = document.getElementById('rightImg');
let ulEl = document.getElementById('results');

let catalogs = [];
let attempts = 1;
let maxAttempts = 25;



function catalogImage(catalogName) {

    this.cName = catalogName.split('.')[0];
    this.img = 'images/' + catalogName;
    this.votes = 0;
    this.views = 0;
    catalogs.push(this);
}

let catalogsImages = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg',
 'chair.jpg', 'cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg',
 'sweep.png','tauntaun.jpg','unicorn.jpg','water-can.jpg','wine-glass.jpg'];

 function randomIndex(){

    return Math.floor(Math.random() * catalogs.length);
 }

 for (let i = 0; i < catalogsImages.length; i++) {
   new catalogImage(catalogsImages[i]);
}

let leftIndex;
let middleIndex;
let rightIndex;
function renderRandomImg() {

   leftIndex= randomIndex();
   middleIndex= randomIndex();
   rightIndex= randomIndex();

    while (leftIndex === rightIndex || rightIndex === middleIndex || leftIndex ===middleIndex) {
        leftIndex = randomIndex();
        rightIndex = randomIndex();
    }

    leftImgEl.setAttribute('src', catalogs[leftIndex].img);
    middleImgEl.setAttribute('src', catalogs[middleIndex].img);
    rightImgEl.setAttribute('src', catalogs[rightIndex].img);

    leftImgEl.setAttribute('alt', catalogs[leftIndex].gName);
    middleImgEl.setAttribute('alt', catalogs[middleIndex].gName);
    rightImgEl.setAttribute('alt', catalogs[rightIndex].gName);

    leftImgEl.setAttribute('title', catalogs[leftIndex].gName);
    middleImgEl.setAttribute('title', catalogs[middleIndex].gName);
    rightImgEl.setAttribute('title', catalogs[rightIndex].gName);

    catalogs[leftIndex].views++;
    catalogs[middleIndex].views++;
    catalogs[rightIndex].views++;
}

renderRandomImg();

leftImgEl.addEventListener('click', handelClicks);
middleImgEl.addEventListener('click', handelClicks);
rightImgEl.addEventListener('click', handelClicks);

function handelClicks(event) {

    if (attempts <= maxAttempts) {
  let clickedImg = event.target.id;
  if (clickedImg === 'leftImg') {
    catalogs[leftIndex].votes++;

}else if  (clickedImg === 'middleImg') {
    catalogs[middleIndex].votes++;
}else if (clickedImg === 'rightImg') {
    catalogs[rightIndex].votes++;
}
renderRandomImg();

} else { let ulEl = document.getElementById('results');
for (let i = 0; i < catalogs.length; i++) {
    let liEl = document.createElement('li');
    liEl.textContent = `${catalogs[i].cName} has ${catalogs[i].votes} votes and ${catalogs[i].views} views .`
    ulEl.appendChild(liEl);

}
        leftImgEl.removeEventListener('click', handelClicks);
        middleImgEl.removeEventListener('click', handelClicks); 
        rightImgEl.removeEventListener('click', handelClicks);
}
attempts++;
}
