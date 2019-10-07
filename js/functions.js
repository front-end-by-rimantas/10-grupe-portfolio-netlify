// function renderAchievements() {
//     return;
// }
function renderImages(target, data) {
    let galleryFiltering = '';
    for ( let i=0; i<data.length ; i++) {
        galleryFiltering += `<div class="filter-item">${data[i].category}</div>`;
    }

    let galleryContentHTML = '';
    for ( let i=0; i<data.length ; i++) {
        galleryContentHTML += `<div class="item">
                               <div> cattegory ${data[i].category}</div> 
                               <div> title ${data[i].title}</div> 
                               <div>  ${data[i].picture}</div>
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
