<template>
  <header>
    <nav class="navbar navbar-dark bg-dark fixed-top conteiner conteiner-fluid">
      <div class="conteiner container-fluid logoOficial ">
        <a href="/"><img src="../assets/oficial1.jpg" alt="oficial1" style="width: 70px;"></a>
        <div class="fraseTitulo conteiner-fluid">
          <h1>SOMAVE É TUDO DE BOM</h1>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">MENU</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
              aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <button type="button" class="btn btn-outline-secondary btnMenu"><a class="nav-link"
                    href="/">HOME</a></button>
              </li>
              <li class="nav-item">
                <button type="button" class="btn btn-outline-secondary btnMenu"><a class="nav-link"
                    href="/meioambiente">MEIO AMBIENTE</a></button>
              </li>
              <li class="nav-item">
                <button type="button" class="btn btn-outline-secondary btnMenu"><a class="nav-link"
                    href="/exportacao">EXPORTAÇÕES</a></button>
              </li>
              <li class="nav-item">
                <button type="button" class="btn btn-outline-secondary btnMenu"><a class="nav-link"
                    href="/receita">RECEITAS</a></button>
              </li>
              <li class="nav-item">
                <button type="button" class="btn btn-outline-secondary btnMenu"><a class="nav-link"
                    href="/qualidade">QUALIDADE</a></button>
              </li>
              <li class="nav-item">
                <button type="button" class="btn btn-outline-secondary btnMenu"><a class="nav-link" href="/quemsomos">QUEM
                    SOMOS</a></button>
              </li>
              <li class="nav-item dropdown">
              </li>
            </ul>
            <form class="d-flex mt-3" role="search">
              <input class="form-control me-2" type="search" placeholder="PROCURAR" aria-label="Search">
              <button class="btn btn-success" type="submit">PROCURAR</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>


<style >
.fraseTitulo {
  margin-top: 15px;
  width:40%;
  color: #ffffff;
  font-family: 'Courier New', Courier, monospace;
  filter: drop-shadow(0px 0px 20px rgb(255, 255, 255));
}
.fraseTitulo h1{
  display: flex;
  position: relative;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 100%;
  font-size:auto;
}

.btnMenu {
  width: 100%;
  margin-top: 10px;
}

a :hover {
  filter: drop-shadow(0px 0px 20px rgb(255, 255, 255));
}


.logoOficial a img {
  border-radius: 10px;
  
}


</style>