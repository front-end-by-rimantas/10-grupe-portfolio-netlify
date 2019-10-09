
// function renderAchievements() {
//     return;
// }















































































// MY PORTFOLIO JS STARTS HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function renderImages(target, data) {
    let galleryFiltering = '';
    let uniqueGalleryFilters = [];

    for ( let i=0; i<data.length ; i++) {
        let galleryCategory = data[i].category;
        if (uniqueGalleryFilters.indexOf(galleryCategory) === -1) {
            uniqueGalleryFilters.push(galleryCategory);

        }
    
    }
    for ( let i=0; i<uniqueGalleryFilters.length ; i++) {
        galleryFiltering += `<div class="filter-item">${uniqueGalleryFilters[i]}</div>`;
    }

    let galleryContentHTML = '';
    for ( let i=0; i<data.length ; i++) {
        galleryContentHTML += `<div class="item">
                               <div> cattegory ${data[i].category}</div> 
                               <div> title ${data[i].title}</div> 
                               <div> <img src ="./img/${data[i].picture}"></div>
                              </div>`;
    }
    let FullGallery = `<div class="gallery-filter">
                       <div class="filter-item">All</div>
                       ${galleryFiltering}
                        </div>
                        <div class="item-list">
                        <div class="item"></div>
                        ${galleryContentHTML}
                        </div>`;

    return document.querySelector(target).innerHTML = FullGallery;
}

function sortingGallery(event) {
    const category = event.target.innerText;
   
     
}


// MY PORTFOLIO JS ENDS HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function renderAchievements() {
    return;
}


function renderServices( data ) {
    let HTML = '';



for ( let i=0; i<6; i++ ) {
    HTML += `<div class="item-services">
                <div class="icon-services">
                    <i class="fas fa-${data[i].icon}"></i>
                </div>
                <h4>${data[i].title}</h4>
                <p>${data[i].text}</p>
            </div>`;
}

let SERVICES = ` <div class="title-white">
                <h3><span>my</span> services</h3>
            </div>
            ${HTML}`;  
    return document.getElementById('services').innerHTML = SERVICES;
}

function renderBlog( data ) {
    let HTML = '';

for ( let i=0; i<3; i++ ) {
    HTML += `<div class="item-blog">
    <div class="img-absolute">
        <a href="#">${data[i].name}</a>
    </div>
    <div class="img-blog">
        <img src="${data[i].image}" alt="picture 1">
    </div>
    <div class="content-blog">
        <a href="#">
        <h4>${data[i].title}</h4>
        </a>
        <p>${data[i].text}</p>
        <div class="info-client">
        <img src="${data[i].icon}" alt="face 1">
        <p>By: Jack Daniel | 25 june 2017</p>
        </div>
    </div>
</div>`;
}
let BLOG = ` <div class="title">
                <h3><span>latest</span> blog</h3>
            </div>
            ${HTML}`;  
    return document.getElementById('blog').innerHTML = BLOG;
}



function renderCounter( data ) {
    let HTML = '';

for ( let i=0; i<4; i++ ) {
    HTML += `<div class="item-counter">
                <div class="icon-counter">
                    <i class="fas fa-${data[i].icon}"></i>
                </div>
                <p>${data[i].text}</p>
                <h4>${data[i].title}</h4>
            </div>`;
}
 
    return document.getElementById('counter').innerHTML = HTML;
}

