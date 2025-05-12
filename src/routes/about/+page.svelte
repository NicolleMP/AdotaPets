<script>
  import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
</script>

<Header/>

<div class="about">
        <h1>Quem somos?</h1>
        <p>
            Somos um grupo de pessoas apaixonadas por animais que decidiu agir diante da 
            triste realidade do abandono. Criamos este espaço para conectar cães 
            e gatos resgatados a lares cheios de amor e responsabilidade. 
            Acreditamos que todo animal merece uma segunda chance — e que juntos podemos 
            reduzir a superlotação de canis, lares temporários e ONGs.
        </p>

        <h1>Nossa missão</h1>
        <p>
            Nossa missão é resgatar, cuidar e encontrar novos lares para animais que foram abandonados ou sofreram maus-tratos.
            Trabalhamos com dedicação para garantir que cada pet receba amor, atenção médica e um futuro digno. 
            Buscamos transformar histórias de sofrimento em histórias de esperança, promovendo a adoção consciente
            e criando uma comunidade mais compassiva e informada sobre a importância do bem-estar animal.
        </p>

        <h1>Como ajudar</h1>
        <p>
            Existem muitas formas de contribuir com essa causa! Você pode adotar um animal, tornar-se um lar temporário,
            apadrinhar um pet, doar ração, cobertores ou medicamentos, ou até mesmo ajudar com trabalho voluntário.
            Compartilhar nossos posts e divulgar os animais disponíveis para adoção também faz uma grande diferença.
            Cada pequena ação conta — juntos, podemos transformar o destino de muitos animais! 
        </p>
</div>

<Footer/>

<style>
    :global(body){
        background-color: #d3d3d3;
    }

    .about {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
        line-height: 1.6;
        background-color: #fdfdfd;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }

    .about h1 {
        font-size: 1.8rem;
        margin-bottom: 0.5rem;
        color: #2d2d2d;
        border-left: 4px solid #ff7f50;
        padding-left: 0.6rem;
}

    .about p {
        font-size: 1rem;
        color: #4a4a4a;
        margin-bottom: 2rem;
}
</style>