<script lang="ts">
    import Todo from "./Todo";
    import {createEventDispatcher} from "svelte";
    export let todo: Todo;
    const dispatch = createEventDispatcher();
</script>

<div>
  <input type="checkbox" bind:checked={todo.completed} disabled={todo.text === ''}>
  <input type="text" placeholder="Add a new todo" bind:value={todo.text} disabled={todo.completed}>
  <button type="button" on:click={() => dispatch('delete')}>&times;</button>
</div>
<style>

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
</style>