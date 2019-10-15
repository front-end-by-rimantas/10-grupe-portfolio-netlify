renderImages('.my-portfolio  .my-portfolio-gallery', images);

document.querySelectorAll('.filter-item').forEach( item => {
    item.addEventListener('click', sortingGallery);
});
renderAchievements( achievements );
renderServices ( services );
renderBlog ( blog );
renderCounter ( counter );

