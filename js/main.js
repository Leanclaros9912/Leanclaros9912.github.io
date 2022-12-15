document.addEventListener('DOMContentLoaded',() =>{
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel,{
        duration:300,
        dist:-200,
        shift:20,
        padding:50,
        numVisible: 5,
        indicators: true,
        noWrap:true
    });
})
