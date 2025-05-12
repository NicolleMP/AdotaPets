<header>
    <div class="logo">
      <a href="/">🐾 AdotaPets</a>
    </div>
  
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">Sobre</a>
        </li>
        <li>
          <a href="/contact">Contato</a>
        </li>
      </ul>
    </nav>
  </header>
  
  <style>
    :global(body) {
    margin: 0;
    padding: 0;
    }

    * {
      text-decoration: none;
      list-style: none;
      border: none;
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background-color: #ff9a76;
    }
  
    .logo a {
      font-size: 1.5rem;
      font-weight: bold;
      color: #fff;
    }
  
    nav ul {
      display: flex;
      gap: 1.5rem;
    }
  
    nav a {
      color: #fff;
      font-weight: 500;
      transition: color 0.3s;
    }
  
    nav a:hover {
      color: #ff6b3b;
    }

  </style>