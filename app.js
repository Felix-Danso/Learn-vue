const app = Vue.createApp({
    data(){
        return {
            url: 'http://www.thenetninja.co.uk',
            showBooks:true,
            books: [
                {title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg', isFav: true},
                {title: 'The of kings', author: 'brandon sanderson', img: 'assets/2.jpg', isFav: false},
                {title: 'The final empire', author: 'patrick rothfuss', img: 'assets/3.jpg', isFav: true}
            ]
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        toggleFav(book){
            book.isFav = !book.isFav
        }
    }
}) 
app.mount('#app')