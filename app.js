const App = {
    data() {
        return {
            
            title: 'Список заметок',
            placeholderString: 'Введите название заметки',
            imputvalue: '',
            notes: ['zametka1', 'zametka2']
        }
    },
    methods: {
        
        
        addNewNote(){
            if (this.imputvalue !==''){
            this.notes.push(this.imputvalue)
            this.imputvalue = ''
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        deleteNote(index){
            this.notes.splice(index, 1)
        }
    },
    computed: {
        dobleCompt() {
            return this.notes.length * 2
        }
    },
    watch: {
        imputvalue(value) {
            if (value.length > 10) {
                this.imputvalue =   ''
            }
        }
    }
}

Vue.createApp(App).mount('#app')

