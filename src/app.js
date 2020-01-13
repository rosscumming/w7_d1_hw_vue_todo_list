import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    el: "#app",
    data: {
      todos: [
        {title: "Clean out the garage", priority: false},
        {title: "Buy new wheels", priority: false},
        {title: "Buy a cat", priority: true},
      ],
      newTodo: {title: "", priority: false}
    },
    methods: {
      saveNewItem: function () {
        this.todos.push(this.newTodo)
        this.newTodo = { title: "", priority: false }
      }
    }
  })
})
