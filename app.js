const app = Vue.createApp({
    data(){
        return {
            showBooks:true,
            books: [
                {tittle: 'name of the wind', author: 'patrick rothfuss'},
                {tittle: 'The of kings', author: 'brandon sanderson'},
                {tittle: 'The final empire', author: 'patrick rothfuss'}
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