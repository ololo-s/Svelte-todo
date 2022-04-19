<script lang="ts">
    import TodoEditor from "./TodoEditor.svelte";
</script>

<div class="container">
  <header>
    <h1>TODO</h1>
  </header>
  <main>
    <TodoEditor/>
  </main>
  <footer>
    <p>That's all</p>
  </footer>
</div>

<style>

    main {
        text-align: center;
        padding: 1em;
        min-height: 100vh;
    }

    .container {
        max-width: 840px;
        margin: 0 auto;
        background-color: #f4f4f4;
    }

    header {
        padding: 5%;
        background-image: linear-gradient(to bottom right, #57ddff, #c058f3);
    }

    h1 {
        color: #fff;
        text-transform: uppercase;
        font-size: 3em;
        letter-spacing: 5px;
        line-height: 150%;
        font-weight: 600;
        text-shadow: #999999 1px 1px;
    }

    p {
        font-size: 14px;
        text-align: center;
        font-weight: 600;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>