//slider function data
const sliderData = [
    {
        sliderImage: '/images/Slider-bg/bg1.png',
        title: 'Best In Town',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium numquam provident ullam itaque unde aliquid, rem vero delectus doloribus necessitatibus labore adipisci qui corporis quidem doloremque, quod, porro explicabo autem.'
    },
    {
        sliderImage: '/images/Slider-bg/bg2.png',
        title: 'Best In Town',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium numquam provident ullam itaque unde aliquid, rem vero delectus doloribus necessitatibus labore adipisci qui corporis quidem doloremque, quod, porro explicabo autem.'
    },
    {
        sliderImage: '/images/Slider-bg/bg3.png',
        title: 'Best In Town',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium numquam provident ullam itaque unde aliquid, rem vero delectus doloribus necessitatibus labore adipisci qui corporis quidem doloremque, quod, porro explicabo autem.'
    },
    {
        sliderImage: '/images/Slider-bg/bg4.png',
        title: 'Best In Town',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium numquam provident ullam itaque unde aliquid, rem vero delectus doloribus necessitatibus labore adipisci qui corporis quidem doloremque, quod, porro explicabo autem.'
    },
]

const sliderTitle = document.getElementById('slider-title')
const sliderDesc = document.getElementById('slider-desc')
const sliderImg = document.getElementById('slider-img')
const nextSlideBtn = document.getElementById('next')
const prevSlideBtn = document.getElementById('prev')

let currentSlide = 0;


function showSlides() {
    sliderTitle.textContent = sliderData[currentSlide].title;
    sliderDesc.textContent = sliderData[currentSlide].desc;
    sliderImg.src = sliderData[currentSlide].sliderImage;
}
showSlides();


nextSlideBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % sliderData.length;
    showSlides();
})

prevSlideBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + sliderData.length) % sliderData.length;
    showSlides()
})



// testimonial slider
const testimonialData = [
    {
        quote: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nobis aperiam ut perspiciatis, quia quod sunt maxime iure blanditiis accusamus mollitia delectus molestias obcaecati, distinctio fugiat alias, et molestiae. Modi!",
        profileImg: '/images/p1.jpg',
        username: "Cruszy Blink",
    },
    {
        quote: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nobis aperiam ut perspiciatis, quia quod sunt maxime iure blanditiis accusamus mollitia delectus molestias obcaecati, distinctio fugiat alias, et molestiae. Modi!",
        profileImg: '/images/p1.jpg',
        username: "C. Ronaldo",
    },
    {
        quote: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nobis aperiam ut perspiciatis, quia quod sunt maxime iure blanditiis accusamus mollitia delectus molestias obcaecati, distinctio fugiat alias, et molestiae. Modi!",
        profileImg: '/images/p1.jpg',
        username: " Jude Bellingham",
    },
]


const reviewQuote = document.getElementById('quote')
const profilePic = document.getElementById('profile-img')
const username = document.getElementById('username')
const nextBtn = document.getElementById('nextBtn')
const prevBtn = document.getElementById('prevBtn')

let currentReviewSlide = 0;


function testimonialSlide() {
    quote.textContent = testimonialData[currentReviewSlide].quote;
    username.textContent = testimonialData[currentReviewSlide].username;
    profilePic.src = testimonialData[currentReviewSlide].profileImg;
}
testimonialSlide();


nextBtn.addEventListener('click', () => {
    currentReviewSlide = (currentReviewSlide + 1) % testimonialData.length;
    testimonialSlide();
});

prevBtn.addEventListener('click', () => {
    currentReviewSlide = (currentReviewSlide - 1 + testimonialData.length) % testimonialData.length;
    testimonialSlide();
});
