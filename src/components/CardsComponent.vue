<template>
  <div class="container">
    <header class="title_pages">
      <h2>DashBoard</h2>
    </header>

    <div class="cards-container">
      <!-- Linha 1 -->
      <div class="cards-row">
        <!-- Card 1 -->
        <div class="my_card">
          <div class="content">
            <h3>Clientes</h3>
            <p class="percentage"><i class="fa fa-arrow-up fa-lg"></i> <span class="green">7%</span></p>
          </div>
          <div class="content">
            <i class="fa fa-users fa-3x"></i>
            <p class="qtd">9570</p>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="my_card">
          <div class="content">
            <h3>Produtos</h3>
            <p class="percentage"><i class="fa fa-arrow-down fa-lg"></i> <span class="red">5%</span></p>
          </div>
          <div class="content">
            <i class="fa fa-box fa-3x"></i>
            <p class="qtd">1245</p>
          </div>
        </div>
      </div>

      <!-- Linha 2 -->
      <div class="cards-row">
        <!-- Card 3 -->
        <div class="my_card">
          <div class="content">
            <h3>Vendas</h3>
            <p class="percentage"><i class="fa fa-arrow-up fa-lg"></i> <span class="green">10%</span></p>
          </div>
          <div class="content">
            <i class="fa fa-store fa-3x"></i>
            <p class="qtd">8500</p>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="my_card">
          <div class="content">
            <h3>Relatórios</h3>
            <p class="percentage"><i class="fa fa-arrow-up fa-lg"></i> <span class="green">15%</span></p>
          </div>
          <div class="content">
            <i class="fa fa-chart-bar fa-3x"></i>
            <p class="qtd">320</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_main';

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title_pages {
  color: black;
  padding: 15px;
  border-radius: 7px;
  margin: 40px 0;
  text-align: center;
  width: 300px; /* Largura do título */
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
}

.cards-row {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 20px; /* Espaçamento entre as linhas de cards */
}

.my_card {
  width: 300px;
  background-color: $purple;
  padding: 15px;
  border-radius: 7px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.my_card .content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.my_card .percentage {
  font-size: 14px; /* Tamanho da fonte do percentual */
}

.my_card .percentage .green {
  color: #2ecc71; /* Cor verde para o percentual */
}

.my_card .percentage .red {
  color: #e74c3c; /* Cor vermelha para o percentual */
}

.my_card .qtd {
  font-size: 24px; 

  }

.my_card i {
  font-size: 3rem; /* Tamanho do ícone */
}
</style>
