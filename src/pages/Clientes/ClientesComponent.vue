<template>
   <DashboardComponent>
   <div class="content-pages">
    <slot name="slot-pages"></slot>
     <header class="title_pages">
      <p>Clientes</p>
     </header>


     </div>
      
    </DashboardComponent>
  </template>
  
  <script>
  import DashboardComponent from '../Dashboard/DashboardComponent';
  
  export default {
    name: 'ClientesComponent',
    components: {
     DashboardComponent,
    }
  }
  </script>

  
  <style lang="scss" scoped>
  
  </style>
  