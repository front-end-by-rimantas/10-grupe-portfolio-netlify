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
