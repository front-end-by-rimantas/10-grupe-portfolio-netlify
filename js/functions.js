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