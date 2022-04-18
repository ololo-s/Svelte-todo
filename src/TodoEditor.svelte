<script lang="ts">
    import TodoItem from "./TodoItem.svelte";
    import Todo, {load, save} from "./Todo";

    let todos: Todo[] = load() || [new Todo()];

    function addTodo() {
        todos = todos.concat(new Todo());
    }

    function deleteCompleted() {
        todos = todos.filter(item => !item.completed);
    }

    $: incomplete = todos.filter(item => !item.completed).length - 1;
    $: save(todos)
</script>

<!--Ctrl+Alt+L formatting code-->

<div class="form">
  <form>
    {#each todos as todo}
      <TodoItem bind:todo/>
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