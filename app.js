const app = Vue.createApp({
    data(){
        return {
            title: 'The Final Empire',
            author: 'Brandon sanderson',
            age: 45
        }
    },
    methods: {
        changeTitle(){
         this.title = 'Word of Randian'
        }
    }
}) 
app.mount('#app')