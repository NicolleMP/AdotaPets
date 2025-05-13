<script lang="ts">
    import { onMount } from "svelte";
    let current = 0;

    const images = [
        "/src/lib/assets/imagemBanner1.jpeg",
        "/src/lib/assets/imagemBanner2.jpeg",
        "/src/lib/assets/imagemBanner.jpeg",
    ];

    let interval: number;

    onMount(() => {
        interval = setInterval(() => {
            current = (current + 1) % images.length;
        }, 3000);

        return () => clearInterval(interval);
    });

    function avancarImagem() {
        current = (current + 1) % images.length;
    }

    function voltarImagem() {
        current = (current - 1 + images.length) % images.length;
    }
</script>


<div class="banner-container">
    <button class="arrow left" on:click={() => voltarImagem()}>&#10094;</button>
    <button class="arrow right" on:click={() => avancarImagem()} >&#10095;</button>

    {#each images as img, index}
        <img
            src={img}
            alt="Banner"
            class="banner-image {index === current ? 'active' : ''}"
        />
    {/each}
</div>

<style>
    
    .banner-container {
        width: 100%;
        height: 400px;
        overflow: hidden;
        position: relative;
    }

    .banner-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: opacity 0.5s ease-in-out;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
    }

    .active {
        opacity: 1;
        z-index: 1;
    }

    .arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 2rem;
        background-color: rgba(0, 0, 0, 0.4);
        color: white;
        border: none;
        padding: 0.5rem 1rem;
        cursor: pointer;
        z-index: 2;
        transition: 0.3s;
    }

    .arrow:hover {
        background-color: rgba(0, 0, 0, 0.7);
    }

    .arrow.left {
        left: 10px;
    }

    .arrow.right {
        right: 10px;
    }
</style>
