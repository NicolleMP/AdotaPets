<script lang="ts">
    import pet1 from "../lib/assets/pet1.jpg";
    import pet3 from "../lib/assets/pet3.jpeg";
    import pet2 from "../lib/assets/pet2.jpeg";
    import Header from "$lib/components/Header.svelte";
    import CardsPets from "$lib/components/CardsPets.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Banner from '$lib/components/Banner.svelte';

</script>

<Header />

<Banner />

<div class="cards-container">
    <CardsPets
        nome="Thor"
        imagem={pet1}
        raca="Labrador Retriever"
        idade="1 ano"
        temperamento="Super calmo"
        porte="Médio"
        saude="Vacinado e castrado"
    />

    <CardsPets
        nome="Luna"
        raca="Poodle"
        imagem={pet3}
        idade="3 anos"
        temperamento="Brincalhona e carinhosa"
        porte="Pequeno"
        saude="Vacinada, castrada e vermifugada"
    />

    <CardsPets
        nome="Max"
        imagem={pet2}
        raca="Pastor Alemão"
        idade="2 anos"
        temperamento="Protetor e inteligente"
        porte="Grande"
        saude="Vacinado e vermifugado"
    />
</div>

<Footer />

<style>
    :global(body) {
        background-color: #d3d3d3;
        margin: 0;
    }

    .cards-container {
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;
        justify-content: center;
        padding: 2rem;
    }

</style>
