todos = [
    {
        text: 'Learn JavaScript',
        done: true
    },
    {
        text: 'Learn Vue',
        done: false
    }
]
const todosApp = {
    data() {
        return {
            todos: window.todos,
            newTodo: {
                done: false
            }
        }
    }, 
    methods: {
        addTodo: function() {
            if (!this.newTodo.text){
                alert('Escreva uma tarefa para adicionar!');
                return;
            }
            this.todos.push(this.newTodo);
            this.newTodo = {};
        },
        toggleDone: function(todo){
            todo.done = !todo.done;
        }
    }
}

Vue.createApp(todosApp).mount('#app');