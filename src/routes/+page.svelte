<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import Header from "$lib/components/Header.svelte";
    import pet1 from "../lib/assets/pet1.jpg";

    function enviarFormulario(event: Event) {
        event.preventDefault();
        alert("Formulário de adoção enviado com sucesso!");
    }
</script>

<Header />

<section class="pet-section">
    <div class="infos-pet">
        <h2>Adote o Thor</h2>
        <img src={pet1} alt="Foto do cachorro" />

        <h3>Detalhes importantes do Thor:</h3>
        <ul>
            <li><strong>Raça:</strong> Labrador Retriever</li>
            <li><strong>Idade:</strong> 1 ano</li>
            <li><strong>Temperamento:</strong> Super calmo</li>
            <li><strong>Porte:</strong> Médio</li>
            <li><strong>Saúde:</strong> Vacinado e castrado</li>
        </ul>

        <form class="formulario" on:submit={enviarFormulario}>
            <h3>Formulário de Adoção</h3>

            <label for="nome">Nome:</label>
            <input type="text" placeholder="Digite seu nome" required />

            <label for="email">Email:</label>
            <input type="email" placeholder="Digite seu email" required />

            <label for="experiencia">Já teve animais antes?</label>
            <select>
                <option>Selecione</option>
                <option>Sim</option>
                <option>Não</option>
            </select>

            <label for="moradia">Tipo de moradia:</label>
            <select>
                <option>Selecione</option>
                <option>Casa</option>
                <option>Apartamento</option>
                <option>Sítio/Chácara</option>
            </select>

            <label for="mensagem">Mensagem:</label>
            <textarea
                rows="4"
                placeholder="Por que você quer adotar o Thor?"
                required
            ></textarea>

            <Button type="submit">Enviar</Button>
        </form>
    </div>
</section>

<!-- Adicionando o Footer -->
<footer class="footer">
    <div class="footer-content">
        <p>© 2025 AdotaPets - Todos os direitos reservados.</p>
        <div class="social-links">
            <a href="#" target="_blank">Facebook</a>
            <a href="#" target="_blank">Instagram</a>
            <a href="#" target="_blank">Twitter</a>
        </div>
    </div>
</footer>

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
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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

    .formulario {
        display: flex;
        flex-direction: column;
        text-align: left;
        gap: 1rem;
    }

    .formulario h3 {
        text-align: center;
        font-size: 1.3rem;
        color: #333;
    }

    .formulario label {
        font-weight: bold;
        color: #333;
    }

    .formulario input,
    .formulario select,
    .formulario textarea {
        border-radius: 6px;
        border: 1px solid #ccc;
        padding: 0.5rem;
        font-size: 1rem;
        background-color: #fff;
    }

    /* Estilos para o Footer */
    .footer {
        background-color: #333;
        color: white;
        padding: 1rem 0;
        text-align: center;
    }

    .footer-content {
        max-width: 1200px;
        margin: 0 auto;
    }

    .social-links a {
        margin: 0 10px;
        color: white;
        text-decoration: none;
    }

    .social-links a:hover {
        text-decoration: underline;
    }
</style>
