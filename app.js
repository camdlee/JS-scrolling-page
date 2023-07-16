// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels


// ********** set date ************
const date = document.getElementById('date')
date.innerHTML = new Date().getFullYear()

// ********** close links ************
const linksContainer = document.querySelector('.links-container');
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

// nav toggle event listener
navToggle.addEventListener('click', ()=>{
    // linksContainer.classList.toggle('show-links')
    // get height of navbar containers & links and assigning them to variables
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    // console.log(linksHeight)

    // if statement to toggle the container height
    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`
    } else {
        linksContainer.style.height = 0;
    };
});

// ********** fixed navbar ************
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link')
window.addEventListener('scroll', () => {
    console.log(window.pageYOffset);
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight){
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav')
    }

});

// ********** smooth scroll ************
// select links
