<template>
    <div class="navbar">
        <div class="container">
            <h3 class="logo"><i class="fa fa-star"></i><span>LaraVue DashBoard</span></h3>
            <a class="logout" @click="logout">Sair<span><i class="fa fa-sign-out-alt"></i></span></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBarComponent',
    methods: {
        logout() {
            this.$router.push({ name: 'Login' });
        }
    }
}
</script>

<style scoped>
body {
    margin: 0;
}

.navbar {
    width: 100%;
    background-color: #333;
    color: #fff;
    padding: 10px 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    text-align: center;
    border-bottom: 1px solid transparent;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}

.logo {
    color: #fff;
    display: flex;
    align-items: center;

    i {
        font-size: 24px;
        margin-right: 10px;
    }

    span {
        font-size: 18px;
    }
}

.logout {
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    cursor: pointer; 
    &:hover {
        color: lighten($white, 20%);
    }

    span {
        margin-left: 8px;
    }
}
</style>
