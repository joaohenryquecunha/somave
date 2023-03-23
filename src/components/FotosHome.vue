<template>

    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
      <div class="carousel-indicators ">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner bordas">
        <div class="carousel-item active ">
          <img src="../assets/s01.png" class="d-block w-100" alt="s01">
        </div>
        <div class="carousel-item">
          <img src="../assets/s02.jpg" class="d-block w-100" alt="s02">
        </div>
        <div class="carousel-item">
          <img src="../assets/s03.png" class="d-block w-100" alt="s03">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    
    </template>


<style>

.bordas{
  border-radius: 0px 0px 50px 50px; 
  margin-top: 56px;
  filter: drop-shadow(0px 0px 10px rgb(255, 255, 255));
}

@media (max-width:1900px) {
  .bordas {
    margin-top: 100px;
  }
}
  @media (max-width:1248px) {
  .bordas {
    margin-top: 140px;
  }
}
@media (max-width:980px) {
  .bordas {
    margin-top: 80px;
  }
}
@media (max-width:544px) {
  .bordas {
    margin-top: 70px;
    margin-bottom: 80px;
  }
}


</style>