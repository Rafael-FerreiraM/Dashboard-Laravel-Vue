<template>
  <DashboardComponent>
    <template v-slot:slot-pages>
      <div class="content-pages">
        <header class="title_pages">
       
        </header>
        <CardsComponent />
        <div class="lists-container">
          <ListsComponent :data="clients" :description="'Clientes'" :columns="['Nome', 'E-mail']" />
          <ListsComponent :data="products" :description="'Produtos'" :columns="['Nome', 'Valor']" />
        </div>
      </div>
    </template>
  </DashboardComponent>
</template>

<script>
import DashboardComponent from '../Dashboard/DashboardComponent.vue';
import CardsComponent from '../../components/CardsComponent.vue';
import ListsComponent from '../../components/ListsComponent.vue';
import axios from 'axios';

export default {
  name: 'HomeComponent',
  data() {
    return {
      clients: [],
      products: [],
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      try {
        const response = await axios.get('/home'); 

        if (response.status === 200) {
          this.clients = response.data.clients;
          this.products = response.data.products;
        } else {
          console.log('Ocorreu um erro na API');
        }
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    }
  },
  components: {
    DashboardComponent,
    CardsComponent,
    ListsComponent
  }
};
</script>

<style lang="scss" scoped>
@import './style.scss';

.content-pages {
  display: flex;
  flex-direction: column;
}

.lists-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.lists {
  flex: 1;
  margin: 0 10px;
}

.lists:first-child {
  margin-left: 0;
}

.lists:last-child {
  margin-right: 0;
}
</style>
