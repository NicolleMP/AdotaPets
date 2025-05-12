<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import pet1 from "../assets/pet1.jpg"; 

    export let nome;
    export let raca;
    export let idade;
    export let temperamento;
    export let porte;
    export let saude;
</script>

<section class="pet-section">
    <div class="infos-pet">
        <h2>Adote o {nome}</h2>
        <img src={pet1} alt="Foto do pet" />

        <h3>Detalhes importantes:</h3>
        <ul>
            <li><strong>Raça:</strong> {raca}</li>
            <li><strong>Idade:</strong> {idade}</li>
            <li><strong>Temperamento:</strong> {temperamento}</li>
            <li><strong>Porte:</strong> {porte}</li>
            <li><strong>Saúde:</strong> {saude}</li>
        </ul>

        <a href="/formulario">
            <Button>Quero Adotar</Button>
        </a>
    </div>
</section>

<style>
    .pet-section {
        display: flex;
        justify-content: center;
        padding: 2rem;
    }

    .infos-pet {
        max-width: 300px;
        width: 100%;
        text-align: center;
        background: #f8f8f8;
        padding: 2rem;
        border-radius: 10px;
        box-shadow: 0 2px 8px rgb(0, 0, 0);
    }

    .infos-pet img {
        max-width: 300px;
        height: auto;
        border-radius: 8px;
        margin: 1rem auto;
        display: block;
    }

    .infos-pet ul {
        text-align: left;
        display: inline-block;
        margin: 1rem auto;
        padding-left: 20px;
    }

    .infos-pet li {
        margin-bottom: 0.5rem;
    }

    .infos-pet a {
        display: flex;
        align-items: center;
        text-decoration: none;
    }

</style>
