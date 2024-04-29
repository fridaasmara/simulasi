<template>
    <div class="container-fluid">
        <div class="text-center mt-5">
            <h1>Halo <span v-if="user"><bold>{{ user.user_metadata.tipe_user }}</bold></span></h1>
            <h2>Selamat Datang</h2>
            <img src="~/assets/img/img-index.png" alt="img" class="mt-5">
        </div>
    </div>
</template>

<script setup>
const user = useSupabaseUser()
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kavoon&family=Miltonian+Tattoo&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Red+Rose:wght@300..700&display=swap');

img {
    width: 20rem;
}
h1, h2 {
    font-family: "Poppins", sans-serif;

}
</style>