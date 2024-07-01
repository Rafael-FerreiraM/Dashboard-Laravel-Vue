<template>
    <div class="container">
        <div class="navbar">
            <h3 class="logo"><i class="fa fa-star"></i><span>Logo Marca</span></h3>
            <a class="logout" @click="logout">Sair<span><i class="fa fa-sign-out-alt"></i></span></a>
        </div>

        <div class="sidebar">
            <div class="top">
                <div class="avatar">
                    <span><i class="fa fa-user icon"></i></span>
                </div>

                <div class="info">
                    <p class="name">Rafael Ferreira</p>
                    <span class="status">Online</span>
                </div>
            </div>

            <div class="menu">
                <ul>
                    <li><router-link :to="{name: 'Home'}"><i class="fa fa-home"></i> Início</router-link></li>
                    <li><router-link :to="{name: 'Produtos'}"><i class="fa fa-box"></i> Produtos</router-link></li>
                    <li><router-link :to="{name: 'Home'}"><i class="fa fa-store"></i> Vendas</router-link></li>
                    <li><router-link :to="{name: 'Home'}"><i class="fa fa-chart-bar"></i> Relatórios</router-link></li>
                </ul>
            </div>
        </div>

        <div class="content">
            <header class="title_pages">
                <p>Início</p>
            </header>

            <CardsComponent/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DashboardComponent',
    components: { 
        
    },
    methods: {
        logout() {
            this.$router.push({ name: 'Login' });
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    height: 100vh; 
    overflow: hidden; 
}

.navbar {
    width: 100%;
    background-color: #6b3e99;
    padding: 10px 20px;
    z-index: 1000; 
    position: fixed; 
    top: 0;
    left: 0;
}

.sidebar {
    background-color: #333;
    color: #fff;
    width: 250px;
    padding: 20px;
    height: 100%;
    position: fixed;
    top: 40px; 
    left: 0;
    bottom: 0;
    overflow-y: auto;
}

.sidebar .top {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
}

.sidebar .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    background-color: #fff;
}

.sidebar .avatar span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

.sidebar .icon {
    font-size: 24px;
    color: #333;
}

.sidebar .info {
    margin-left: 10px;
}

.sidebar .name {
    font-size: 18px;
    margin-bottom: 5px;
}

.sidebar .status {
    color: #2ecc71;
    font-weight: bold;
}

.sidebar .menu ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.sidebar .menu ul li {
    padding: 10px 0;
}

.sidebar .menu ul li a {
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
}


.sidebar .menu ul li a:hover {
    text-decoration: none;
    color: #ccc;
}

.content {
    margin-left: 250px; 
    padding: 20px;
    width: calc(100% - 250px); 
}

</style>
