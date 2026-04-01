const get_First_Section_Heading = document.querySelector(".first_section_heading");

function first_Section_Heading_Animation(entries, target){
	
	entries.forEach( (entry) => {
		if(entry.isIntersecting){
			entry.target.classList.add("animate_first_section_heading");
		}
	});
	
}


const first_Section_Heading_Animation_API = new IntersectionObserver(first_Section_Heading_Animation);


first_Section_Heading_Animation_API.observe(get_First_Section_Heading);



const wrapper = document.querySelector('.third_section_flex');

let slideWidth = wrapper.clientWidth;

const actualSlides = 3;
const totalItems = actualSlides + 2;

let currentSlideIndex = 1;


// Update slide position
function updateSlide(newIndex) {
    currentSlideIndex = newIndex;
    const offset = -currentSlideIndex * slideWidth;
    wrapper.style.transform = `translateX(${offset}px)`;
}


// Update width on resize
function updateSlideWidth() {
    slideWidth = wrapper.clientWidth;
    updateSlide(currentSlideIndex);
}

window.addEventListener('resize', updateSlideWidth);


// Forward
function nextSlide() {

    updateSlide(currentSlideIndex + 1);

    if (currentSlideIndex === totalItems - 1) {

        setTimeout(() => {

            wrapper.style.transition = 'none';
            updateSlide(1);

            setTimeout(() => {
                wrapper.style.transition = 'transform 0.5s ease-in-out';
            }, 50);

        }, 500);
    }
}


// Backward
function prevSlide() {

    updateSlide(currentSlideIndex - 1);

    if (currentSlideIndex === 0) {

        setTimeout(() => {

            wrapper.style.transition = 'none';
            updateSlide(actualSlides);

            setTimeout(() => {
                wrapper.style.transition = 'transform 0.5s ease-in-out';
            }, 50);

        }, 500);
    }
}


// Auto slide
let next_Slide_Action = setInterval(nextSlide, 4000);


// Initial correct positioning
updateSlide(currentSlideIndex);