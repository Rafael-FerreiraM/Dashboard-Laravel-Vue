<template>
  <DashboardComponent>
      <template v-slot:slot-pages>
          <div class="content-pages">

            <header class="title_pages">
              <p>Produtos</p>
            </header>
            
          </div>
      </template>
  </DashboardComponent>
</template>

<script>
import DashboardComponent from '../Dashboard/DashboardComponent.vue';

export default {
  name: 'ProdutosComponent',
  components: { 
      DashboardComponent
  }
}
</script>

<style lang="scss" src="./style.scss">

</style>
