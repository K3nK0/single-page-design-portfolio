const discoverProfile = [
    document.querySelector('.container-photo-profile img'),
    document.querySelector('.container-presentation h2'),
    document.querySelector('.container-presentation p'),
    document.querySelector('.container-presentation .link-consultation')
]

const discoverMyWork = [
    document.querySelector('.my-work h3'),
    document.querySelector('.slider'),
    document.querySelector('.btns-slider')
]

const discoverConsultation = [
    document.querySelector('.consultation'),
    document.querySelector('.left-consultation h2'),
    document.querySelector('.left-consultation p')
]

const animatedContents = [
    ...discoverProfile,
    ...discoverMyWork,
    ...discoverConsultation
]

const intersectionObserver = new IntersectionObserver(handleIntersect, {rootMargin: "-20%"});

animatedContents.forEach(el => intersectionObserver.observe(el))

function handleIntersect(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active');
            intersectionObserver.unobserve(entry.target)
        }
    })
}

