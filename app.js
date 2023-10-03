const app = Vue.createApp({
    data(){
        return {
            showBooks:true,
            title: 'The Final Empire',
            author: 'Brandon sanderson',
            age: 45
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        }
    }
}) 
app.mount('#app')