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