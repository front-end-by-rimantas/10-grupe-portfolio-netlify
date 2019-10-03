// function renderAchievements() {
//     return;
// }
function renderImages( target, data ) {
    let galleryHTML = '';

    for ( let i=0; i<data.length ; i++) {
        galleryHTML += `
            <div class="item">
                <div>Image: <img src="./img/${data[i].picture}"> </div>
                <div>Title: ${data[i].title}</div>
                <div>Category: ${data[i].category}</div>
            </div>`;
    }

    return document.querySelector(target).innerHTML = galleryHTML;
}

function GalleryFiltering(data) {
    let galleryFilterHTML = '';
    for ( let i=0; i<data.length ; i++) {
        galleryFilterHTML += `<div class="filter-item">${data[i].category}
                              </div>`; 
    }
}