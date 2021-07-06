'use strict';

let attemptsEl = document.getElementById('attempts');
let containerEl = document.getElementById('container');
let leftImgEl = document.getElementById('leftImg');
let middleImgEl = document.getElementById('middleImg');
let rightImgEl = document.getElementById('rightImg');
let ulEl = document.getElementById('results');

const btn2 = document.querySelector("button");
let catalogs = [];
let attempts = 1;
let maxAttempts = 25;
let catalogsName =[];
let votes = [];
let views = [];
let comeImg = [];
function catalogImage(catalogName) {

    this.cName = catalogName.split('.')[0];
    this.img = 'images/' + catalogName;
    this.votes = 0;
    this.views = 0;
    catalogsName.push(this.cName);
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

    while (leftIndex === rightIndex || rightIndex === middleIndex || leftIndex ===middleIndex || comeImg.includes(leftIndex) || comeImg.includes(rightIndex) || comeImg.includes(middleIndex)) {
        leftIndex = randomIndex();
        rightIndex = randomIndex();
        middleIndex = randomIndex();
    }
    comeImg = [];
    comeImg.push(leftIndex);
    comeImg.push(rightIndex);
    comeImg.push(middleIndex);

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

} else { function show() {
    let h3 = document.createElement("h3");
    h3.textContent = "RESULTS";
    btn1.appendChild(h3);



for (let i = 0; i < catalogs.length; i++) {
    let liEl = document.createElement('li');
    liEl.textContent = `${catalogs[i].cName} has ${catalogs[i].votes} votes and ${catalogs[i].views} views .`
    ulEl.appendChild(liEl);
    votes.push(catalogs[i].votes);
    views.push(catalogs[i].views);
}
        leftImgEl.removeEventListener('click', handelClicks);
        middleImgEl.removeEventListener('click', handelClicks); 
        rightImgEl.removeEventListener('click', handelClicks);
        chartRender();
}
btn2.onclick = show;
}
attempts++;
}


function chartRender(){

    let ctx = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: catalogsName,
            datasets: [{
                label: '# of Votes',
                data: votes,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                   
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                 
                ],
                borderWidth: 2
            },   
            {
                label: '# of views',
                data: views,
                backgroundColor: [
                    'rgba(155, 199, 120, 0.2)',
                ],
                borderColor: [
                    'rgba(200, 70, 210, 0.2)',
                ],
                borderWidth: 2
        
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


}