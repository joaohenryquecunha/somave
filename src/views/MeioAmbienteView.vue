<template>

<div class="conteiner conteiner-fluid natureza">
        <div>
            <img src="../assets/natureza1.jpg" alt="natureza">
        </div>
    </div>
    <div class="box conteiner conteiner-fluid">
        <div class="card">
            <div class="txt">
                <p>A produção agroindustrial precisa utilizar com responsabilidade os recursos naturais para manter-se ativa
                    ao longo do tempo. Para a Somave, tão importante quanto preservar e recuperar o meio ambiente, é não
                    poluí-lo. Por isso, foram investidos mais de 1 milhão de reais em processos e equipamentos para
                    tratamento de efluentes.</p>
                <p>A Somave possui grandes e complexas estruturas para tratamento de dejetos, acompanhadas rigorosamente por
                    técnicos da própria empresa e dos órgãos ambientais. Além disso, após o abate das aves, todo subproduto
                    do frango é transformado em ração pet por meio de uma fábrica de farinhas. Tudo é largamente
                    aproveitado, o que evita qualquer riscos de poluição ambiental.</p>
                <p>Para manter a água sempre limpa, a Somave possui um flotador e lagoas de tratamento. O flotador é um
                    equipamento que retira a gordura da água por meio de ação microbolhas. A gordura separada da água é
                    transformada em óleo que também é utilizado na indústria pet. Depois de separar os subprodutos e a
                    gordura, a água é encaminhada às lagoas de tratamento. Somente depois de todo esse processo, a água é
                    utilizada na fertirrigação de propriedades rurais, processo este devidamente certificado pelos órgãos
                    ambientais.</p>
                <p>Na Somave, o compromisso com o meio ambiente é permanente.</p>
            </div>
        </div>
    </div>
    <div class="conteinerFoto">
    <div class="imagens">
        <img src="../assets/3000.jpg" alt="3000">
        <img src="../assets/2000.jpg" alt="2000">
        <img src="../assets/1000.jpg" alt="1000">
    </div>
    </div>
</template>


<script>


</script>


<style scoped>

.conteiner {
    width: 100%;
}

.natureza img {
    width: 100%;
    margin-top: 85px;
    margin-bottom: 100px;
}

.box {
    
    width: 95%;
    height: 95%;
    background-color: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-radius: 150px;
    filter: drop-shadow(0px 0px 30px rgb(255, 255, 255));
}

.card {
    border: none;
    width: 70%;
    height: 70%;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;
    color: #073b2c;
    background-color: #fff;
    text-align: center;
    
}

.txt {
    font-size: 40px;  
}

.conteinerFoto {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto;
}
.imagens img{
    margin: 50px;
    filter: drop-shadow(0px 0px 10px rgb(255, 255, 255));
}

@media (max-width: 1900px){
    .natureza img {
        margin-top: 50px;
    }
    
}
@media (max-width: 1248px){
    .natureza img {
        margin-top: 100px;
    }
    
}
@media (max-width: 545px){
    .natureza img {
        margin-top: 120px;
    }
    
}

</style>