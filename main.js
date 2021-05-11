let slideIndex = 0;

const slider = document.getElementById('slider');

const slides = document.getElementsByClassName('slide');


const slideControl = document.getElementById('slide-control');
const slideControlItems = document.getElementsByClassName('slide-control-item');

slider.style.marginTop = '-' + slideIndex + '00vh';

setTimeout(() => {
    slideControlItems[slideIndex].classList.add('active');
    slides[slideIndex].classList.add('active');
},500);


Array.from(slideControlItems).forEach((el,index) => {
    el.addEventListener('click',function(){
        if(index === slideIndex) return;

        slideIndex = index;

        let currentSlideControl = document.querySelector('.slide-control-item.active');
        currentSlideControl.classList.remove('active');

        let currentSlide = document.querySelector('.slide.active');
        currentSlide.classList.remove('active');

        setTimeout(() => {
            slider.style.marginTop = '-' + slideIndex + '00vh';
            slideControlItems[slideIndex].classList.add('active');
            slides[slideIndex].classList.add('active');
        },1500);

    });
});

const modal = document.getElementById('modal');
const closeBtn = document.getElementById('modal-close');

closeBtn.onClick = () => {
    modal.style.display = 'none';
}

const moreImages = document.getElementsByClassName('more-images');
const previewImages = document.getElementsByClassName('image-preview');

Array.from(moreImages).forEach(element => {
    element.onClick = () => {

        const imgItems = element.parentNode.getElementByTagName('img');

        Array.from(imgItems).forEach((item,index) => {
            previewImages[index].src = item.src;
        });

        const image = element.querySelector('img');
        modal.style.display = 'block';

        let modalContent = modal.querySelector('.modal-content');
        modalContent.src = image.src;

        const temp = modalContent.cloneNode(true);
        modalContent.parentNode.replaceChild(temp,modalContent);
    }
})