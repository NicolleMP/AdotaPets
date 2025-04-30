<script>
    import Header from "$lib/components/Header.svelte";
    import pet1 from "../lib/assets/pet1.jpg"
</script>

<Header/>

<section class="pet-section">
    <div class="infos-pet">
        <h2>Adote o Thor</h2>
        <img src="{pet1}" alt="Foto do cachorro">
        
        <h3>Detalhes importantes do Thor:</h3>
        <ul>
            <li><strong>Raça:</strong> Labrador Retriever</li>
            <li><strong>Idade:</strong> 1 ano</li>
            <li><strong>Temperamento:</strong> Super calmo</li>
            <li><strong>Porte:</strong> Médio</li>
            <li><strong>Saúde:</strong> Vacinado e castrado</li>
        </ul>
    </div>
</section>

<style>
    :global(body) {
        background-color: #d3d3d3;
    }
    .pet-section {
        display: flex;
        justify-content: center;
        padding: 2rem;
    }
    
    .infos-pet {
        max-width: 600px;
        width: 100%;
        text-align: center;
        background: #f8f8f8;
        padding: 2rem;
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
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
</style>