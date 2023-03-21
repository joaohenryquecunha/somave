<template >

<div class="conteiner conteiner-fluid qualidade">
    <img src="../assets/qualidade3.jpg" alt="qualidade">
    <h1><p>A QUALIDADE DO PRODUTO EM PRIMEIRO LUGAR, SEMPRE!</p></h1>
    <div class="box conteiner conteiner-fluid">
        <div class="card">
            <div class="txt">
                <p>A Somave é uma empresa que tem um forte compromisso com a segurança alimentar e a qualidade dos seus produtos. A empresa implementa controles de qualidade rigorosos em todas as etapas do processo de produção, desde a seleção das matérias-primas até a distribuição dos produtos finais.</p>
                <p>A Somave utiliza tecnologias avançadas para garantir a qualidade e segurança dos seus produtos, incluindo sistemas de rastreamento que permitem a identificação precisa da origem de cada ingrediente utilizado na produção. Além disso, a empresa realiza constantes testes de qualidade e segurança em seus produtos, tanto em laboratório quanto em condições reais de uso.</p>
                <p>A empresa também se preocupa em atender às normas e regulamentações em relação à segurança alimentar, garantindo assim que seus produtos estejam sempre em conformidade com as leis e padrões seguidos.</p>
                <p>Em resumo, a Somave é uma empresa comprometida com a qualidade e segurança alimentar de seus produtos, que utiliza tecnologias avançadas e controles rigorosos de qualidade para garantir a excelência de seus produtos.</p>
            </div>
        </div>
    </div>
</div>
<div class="imagemFinal justify-content-center">
    <img src="../assets/Armazenagem1.jpg" alt="armazenagem">
</div>
</template>

<script>

</script>


<style scoped>
.qualidade img {
    width: 100%;  
}

.imagemFinal img {
    border-radius: 150px 80px 150px 80px;
    justify-content: center;
    align-items: center; 
    width: 100%;
    padding: 50px;
}
.qualidade h1 {
    text-align: center;
    margin-top: 100px;
    margin-bottom: 150px;
    font-size: 50px;
    color: #fff;
    filter:drop-shadow(0px 0px 20px rgb(255, 255, 255));
}

.box {
    color: red;
    width: 90%;
    height: 90%;
    background-color: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-radius: 150px;
    filter: drop-shadow(0px 0px 10px rgb(255, 255, 255));
}

.card {
    border: none;
    width: 85%;
    height: 85%;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;
    background-color: #fff;
    
}

.txt {
    text-align: center;
    color: #f10303;
    font-size: 40px;
    filter: drop-shadow(0px 0px 10px rgb(255, 72, 0));
}
@media (max-width: 1900px){
    .qualidade img {
        margin-top: 50px;
    }
    
}
@media (max-width: 1248px){
    .qualidade img {
        margin-top: 80px;
    }
    
}
@media (max-width: 545px){
    .qualidade img {
        margin-top: 120px;
    }
    
}



</style>