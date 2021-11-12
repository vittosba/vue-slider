/*
 * Vue Slider
 */

const app = new Vue({
    el: '#root',
    data: {
        slides: [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title:
                    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            },
        ],
        activeSlide: 0,
    },
    created: function() {
		let self = this;
        console.log(this);
		setInterval(function() {
            if(self.activeSlide === self.slides.length - 1? self.activeSlide = 0 : self.activeSlide++);
        }, 3000);
	},
    methods: {
        prevSlide() {
            if(this.activeSlide === 0? this.activeSlide = this.slides.length - 1 : this.activeSlide--);
        },
        nextSlide() {
            if(this.activeSlide === this.slides.length - 1? this.activeSlide = 0 : this.activeSlide++);
        },
        setSlide(indexSlide) {
            this.activeSlide = indexSlide;
        },
        // timer() {
        //     setInterval( function() {
        //         console.log(this.activeSlide);
        //     }, 3000);
        // }
    }
})