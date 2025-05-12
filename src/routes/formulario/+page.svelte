<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";

function enviarFormulario(event: Event) {
        event.preventDefault();
        alert("Formulário de adoção enviado com sucesso!");
    }
</script>

<Header/>

<div class="form-container">
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

<Footer/>

<style> 
    .formulario {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 4rem;
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
        align-items: center;
        border-radius: 6px;
        border: 1px solid #ccc;
        padding: 0.5rem;
        font-size: 1rem;
        background-color: #fff;
    }
</style>