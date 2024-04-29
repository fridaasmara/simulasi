<template>
    <div class="container-fluid p-0">
        <Header />
        
        <span v-if="user">
            <NavAdmin v-if="user.user_metadata.tipe_user === 'Admin'" />
            <NavApoteker v-if="user.user_metadata.tipe_user === 'Apoteker'" />
            <NavKasir v-if="user.user_metadata.tipe_user === 'Kasir'" />
        </span>

        <slot />
    </div>
</template>

<script setup>
const user = useSupabaseUser()

</script>

<style>
body {
    background-image: url("~/assets/img/bg-gradient.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>