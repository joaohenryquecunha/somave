<template>
    <div>
        <barraInicial />
        <FotosHome />
    </div>

    <div class="card barraProdutos text-white">
        <div class="card-body ">
            <h1>PRODUTOS</h1>
        </div>
    </div>
    <div class="conteiner conteiner-fluid  d-flex m-2 justify-content-center conteinerPrincipal gap-4 flex-wrap " style="width: 100%; ">
        <div class="card luzCard redimensionar" >
            <img src="../assets/proGalo.png" class="card-img-top" alt="progalo">
            <div class="card-body">
                <h5 class="card-title nomeProd">GALO</h5>
                <a href="#" class="btn btn-primary btn-sm nomeProd">CONHECER</a>
            </div>
        </div>
        <div class="card luzCard redimensionar" >
            <img src="../assets/proGalo.png" class="card-img-top" alt="progalo">
            <div class="card-body">
                <h5 class="card-title nomeProd">GALINHA</h5>
                <a href="#" class="btn btn-primary btn-sm nomeProd">CONHECER</a>
            </div>
        </div>
        <div class="card luzCard redimensionar" >
            <img src="../assets/proGalo.png" class="card-img-top" alt="progalo">
            <div class="card-body">
                <h5 class="card-title nomeProd">GALO</h5>
                <a href="#" class="btn btn-primary btn-sm nomeProd">CONHECER</a>
            </div>
        </div>
        <div class="card luzCard redimensionar" >
            <img src="../assets/proGalo.png" class="card-img-top" alt="progalo">
            <div class="card-body">
                <h5 class="card-title nomeProd">GALO</h5>
                <a href="#" class="btn btn-primary btn-sm nomeProd">CONHECER</a>
            </div>
        </div>
    </div>

    <div class="botaoClasses">
        <a href="/meioambiente" class="btn btn-success botaoClasses">CONHEÇA</a>
    </div>
    <div class="card fundo1  text-white">
        <div class="card-body ">
            <h1>MEIO AMBIENTE</h1>
        </div>
    </div>
    <div class="MB1 ">
        <img src="../assets/meioAmbiente.jpg" alt="meioAmbiente">
    </div>

    <div class="botaoClasses1">
        <a href="/receitas" class="btn btn-success botaoClasses1">CONHEÇA</a>
    </div>
    <div class="card fundo2  text-white">
        <div class="card-body ">
            <h1>RECEITAS</h1>
        </div>
    </div>
    <div class="ContReceitas">
        <img src="../assets/assado.jpg" alt="receita">
    </div>

    <div class="botaoClasses2">
        <a href="/quemsomos" class="btn btn-success">CONHEÇA</a>
    </div>
    <div class="card fundo3  text-white">
        <div class="card-body ">
            <h1>QUEM SOMOS</h1>
        </div>
    </div>
    <div class="conteiner4 conteiner-fluid">
        <div class="texto">
            <h1>SOMAVE</h1>
            <h3>CONHEÇA MAIS SOBRE NÓS</h3>
        </div>
    </div>
</template>

<script setup>
import barraInicial from '../components/BarraInicial.vue'
import FotosHome from '../components/FotosHome.vue';

</script>

<style>
body { 
    margin: 10px;
    background-color: #000000;
}

.nomeProd {
    display: flex;
    justify-content: center;
    color: #fff;
}

.barraProdutos {
    top:-80px;
    align-items: center;
    width: 100%;
    background-image: linear-gradient(rgb(255, 123, 0), red);
    border: none;
    border-radius: 0px 0px 900px 900px;
    filter: drop-shadow(0px 0px 10px rgb(255, 94, 0));
}

.luzCard {
    filter: drop-shadow(0px 0px 10px rgb(255, 255, 255));
}

/*sessão meio ambiente*/
.fundo1 {
    top: -100px;
    align-items: center;
    background-image: linear-gradient(rgb(0, 255, 21), rgb(18, 163, 42));
    border: none;
    border-radius: 0px 0px 1000px 1000px;
    filter: drop-shadow(0px 0px 10px rgb(0, 255, 0));
}

.MB1 img {
    position: relative;
    top: -120px;
    width: 100%;
    z-index: -1;
    border-radius: 10px 10px 100px 100px;
    filter: drop-shadow(0px 0px 4px rgb(255, 255, 255));   
}
.MB1 {
    top: 50px;
}

.botaoClasses a{
    border: none;
    background-color: rgb(62, 196, 91);
    top: -380px;
    display: flex;
    justify-content: center;
    filter: drop-shadow(0px 0px 2px rgb(255, 255, 255));
}


/*sessão receitas*/
.fundo2 {
    align-items: center;
    background-image: linear-gradient(rgb(255, 0, 242), rgb(163, 18, 144));
    border: none;
    border-radius: 0px 0px 900px 900px;
    top: -160px;
    filter: drop-shadow(0px 0px 10px rgb(255, 0, 255));
}
.botaoClasses1 a{
    border: none;
    background-color: rgb(153, 35, 133);
    display: flex;
    position: relative;
    justify-content: center;
    filter: drop-shadow(0px 0px 2px rgb(255, 255, 255));
}

.ContReceitas {
    top: 50px;
    margin-top: -80px;   
}
.ContReceitas img {
    position: relative;
    top: -90px;
    width: 100%;
    z-index: -1;
    border-radius: 10px 10px 100px 100px;
    filter: drop-shadow(0px 0px 4px rgb(255, 255, 255));
}
/*sessão quem somos*/

.botaoClasses2 a{
    border: none;
    background-color: rgb(60, 62, 211);
    top: -200px;
    display: flex;
    position: relative;
    justify-content: center;

}

.fundo3 {
    align-items: center;
    background-image: linear-gradient(rgb(0, 204, 255), rgb(40, 18, 163));
    border: none;
    border-radius: 0px 0px 900px 900px;
    top: -130px;
    z-index: 1;
    filter: drop-shadow(0px 0px 10px rgb(0, 153, 255));
}

.conteiner4 {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    top: -60px;
    width: 100%;
    height: 300px;
    background: radial-gradient(#3d3b3b, #000, rgb(11, 11, 61));
    margin-top: -80px;
    border-radius: 10px 10px 100px 100px;
    filter: drop-shadow(0px 0px 2px rgb(255, 255, 255));
}
.texto {
    position: relative;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.texto h3 {
    position: relative;
    justify-content: center;
    align-items: center;
    bottom: -60px;
    width: 100%;
    color: #fff;
}

.texto h1 {
    font-size: 50px;
    position: relative;
    justify-content: center;
    border-radius: 70px 0px 70px 0px;
    bottom: -70px;
    color: #fff;
    background-color: rgb(255, 0, 0);
    filter: drop-shadow(0px 0px 20px rgb(255, 255, 255));
}

.redimensionar{
    margin: 0 auto;
}


@media (max-width: 1900px){
    
    .fundo1{
        top: 70px;
        z-index: 1; 
        height: 150px;  
    }
    .MB1 img {
        top: 50px;   
    }
    .botaoClasses a {
        margin-top: 150px;
        margin-bottom: -140px;
    }
    .botaoClasses1 a {
        margin-top: 150px;
        margin-bottom: -140px;
    }
    .fundo2 {
        height: 150px;
        top: 70px;
        z-index: 1;
    }
    .ContReceitas {
        margin-top: 150px;
    }
    .botaoClasses2 a {
        margin-top: 200px;
        margin-bottom: -140px;
    }
    
    .texto h3{
        margin-top: 20px;
        margin-bottom: 100px;
        justify-content: center;
        text-align: center;
    }
}
@media (max-width: 1400px){
    
    .fundo1{
        top: 70px;
        z-index: 1; 
        height: 150px;  
    }
    .MB1 img {
        top: 50px;   
    }
    .botaoClasses a {
        margin-top: 150px;
        margin-bottom: -140px;
    }
    .botaoClasses1 a {
        margin-top: 150px;
        margin-bottom: -140px;
    }
    .fundo2 {
        height: 150px;
        top: 70px;
        z-index: 1;
    }
    .ContReceitas {
        margin-top: 150px;
    }
    .botaoClasses2 a {
        margin-top: 200px;
        margin-bottom: -140px;
    }
    
    .texto h3{
        margin-top: 20px;
        margin-bottom: 100px;
        justify-content: center;
        text-align: center;
    }
}

</style>