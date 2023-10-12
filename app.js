const app = Vue.createApp({
    data(){
        return {
            url: 'http://www.thenetninja.co.uk',
            showBooks:true,
            books: [
                {tittle: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg'},
                {tittle: 'The of kings', author: 'brandon sanderson', img: 'assets/2.jpg'},
                {tittle: 'The final empire', author: 'patrick rothfuss', img: 'assets/3.jpg'}
            ]
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
    }
}) 
app.mount('#app')