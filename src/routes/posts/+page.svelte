<script>
    export let data;
    const { posts } = data;
</script>

<h1>Testando API</h1>

{#each posts as post}
    <h2>{post.title}</h2>
    <p>{post.body}</p>
{/each}