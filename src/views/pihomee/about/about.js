
// export default {
//   data() {
//     return {
//       slide: 0,
//       sliding: null
//     }
//   },
//   methods: {
//     onSlideStart(slide) {
//       this.sliding = true
//     },
//     onSlideEnd(slide) {
//       this.sliding = false
//     }
//   }
// }
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})