<template>
    <div class="conteiner d-grid conteiner-fluid fundoBF">
        <a href=""><img src="../assets/svg/facebook.svg" alt="facebook">      FACEBOOK</a>
        <a href=""><img src="../assets/svg/instagram.svg" alt="instagram">      INSTAGRAM</a>
        <a href=""><img src="../assets/svg/linkedin.svg" alt="linkedin">      LINKEDIN</a>
    </div>

</template>

<style>

.fundoBF {
    position: relative;
    justify-content: flex-start;
    background-color: #fff;
    width: 100%;
    height: 300px;
}
.fundoBF a {
    text-decoration: none;
    margin-top: 20px;
    margin-left: 10px;
    color: #000;   
}
.fundoBF a :hover {
  filter:drop-shadow(0px 0px 10px rgb(218, 8, 8));
}

</style>