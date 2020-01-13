import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    el: "#app",
    data: {
      todos: [
        "Clean out the garage", "Buy new wheels", "Buy a cat"
      ],
      newTodo: ""
    },
    methods: {
      saveNewItem: function () {
        this.todos.push(this.newTodo)
        this.newTodo = ""
      }
    }
  })
})
