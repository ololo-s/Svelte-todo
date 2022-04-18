<script lang="ts">
    class Todo {
        constructor(
           public text = '',
           public completed = false
        ) {}
    }

    let todos: Todo[] = JSON.parse(localStorage.getItem('todos')) || [new Todo()];

    function addTodo() {
        todos = todos.concat({completed: false, text: ''});
    }

    function deleteCompleted() {
        todos = todos.filter(item => !item.completed);
    }

    $: incomplete = todos.filter(item => !item.completed).length - 1;
    $: localStorage.setItem('todos', JSON.stringify(todos));
</script>

<!--Ctrl+Alt+L formatting code-->

<div class="form">
  <form>
    {#each todos as todo}
      <div>
        <input type="checkbox" bind:checked={todo.completed} disabled={todo.text===''}>
        <input type="text" placeholder="Add a new todo" bind:value={todo.text} disabled={todo.completed}>
      </div>
    {/each}
    <div class="btn">
      <button on:click|preventDefault={addTodo} disabled={!todos[todos.length - 1].text}>Add</button>
      <button on:click|preventDefault={deleteCompleted} disabled={todos.length < 2}>Delete completed</button>
    </div>
  </form>
  {#if incomplete > 0}
    <p>Left {incomplete} todo(s)</p>
  {:else}
    <p>Done!</p>
  {/if}
</div>

<style>
    form {
        margin-top: -54px;
        max-width: 840px;
        display: flex;
        flex-direction: column;
    }

    input {
        padding: 8px;
    }
    input[type=checkbox] {
        opacity: 100%;
        border: 2px solid #ddd;
        display: inline-block;
        vertical-align: middle;
        width: 18px;
        height: 18px;
    }

    input[type=text] {
        display: inline-block;
        width: 70%;
        border-radius: 5px;
        letter-spacing: 1px;
        padding-left: 10px;
    }

    button {
        display: block;
        background-color: #fff;
        min-width: 25%;
        border-radius: 5px;
        margin: 0 10px;
        box-shadow: #999999 1px 1px;
    }

    button:disabled {
        color: #6e6e6e;
        letter-spacing: 1px;
    }

    .btn {
        display: flex;
        justify-content: center;
    }

    button:first-child {
        background-image: linear-gradient(to bottom right, #57ddff, #c058f3);
        opacity: 60%;
        color: #000;
    }

    p {
        display: inline-block;
        padding: 5px 110px;
        background-color: #c0bfbf;
        color: #fff;
        letter-spacing: 1px;
        margin-top: 40px;
        font-size: 18px;
    }
</style>