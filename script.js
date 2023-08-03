const discoverProfile = [
    document.querySelector('.container-photo-profile img'),
    document.querySelector('.container-presentation h2'),
    document.querySelector('.container-presentation p'),
    document.querySelector('.container-presentation .link-consultation')
]

const animatedContents = [
    ...discoverProfile
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