<template>
    <nav class="navbar navbar-expand-lg bg-transparent sticky-top shadow p-3">
        <div class="container-fluid">
            <i class="bi bi-cash-coin fs-1"></i>
            <h1 class="navbar-brand fw-bold">Kasir</h1>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <nuxt-link to="/" class="nav-link" :class="{ active: route.name == '/' }">Home</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link to="/transaksi" class="nav-link" :class="{ active: route.name == 'transaksi' }">Transaksi</nuxt-link>
                </li>
                <li class="nav-item">
                    <nuxt-link to="/logout" class="nav-link text-danger">Logout</nuxt-link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
const route = useRoute()

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kavoon&family=Miltonian+Tattoo&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Red+Rose:wght@300..700&display=swap');


.nav-item {
font-size: 1rem;
margin-right: 2rem;
}

h1 {
margin-top: 0.5rem;
margin-left: 1.5rem;
font-size: 2rem;

}

i {
margin-left: 2rem;
}

h1, .nav-item {
font-family: "Poppins", sans-serif;

}

</style>