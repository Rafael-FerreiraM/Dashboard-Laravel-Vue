<template>
  <div class="lists">
    <div class="top">
      <p><strong>{{ description }}</strong> <span class="badge badge-info">{{ data.length }}</span></p>
      <hr>
    </div>

    <div class="content">
      <table class="table my_table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">{{ columns[0] }}</th>
            <th scope="col">{{ columns[1] }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in data" :key="user.id">
            <th scope="row">{{ user.id }}</th>
            <td><p class="users">{{ user.name }}</p></td>
            <td><p class="users">{{ user.email }}</p></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListsComponent',
  props: {
    data: Array,
    description: String,
    columns: Array,
  }
}
</script>

<style scoped>
.lists {
  width: 100%;
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
}

.lists .top {
  background-color: #f0f0f0;
  padding: 10px;
  text-align: center;
}

.lists .top p {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  
}

.lists .top p .badge-info {
  background-color: green;
}

.lists .content {
  padding: 10px;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.table th {
  background-color: #343a40;
  color: #fff;
}

.table tbody tr:hover {
  background-color: #f0f0f0;
}

.users {
  font-size: 12px;
}
</style>
