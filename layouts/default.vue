<template>
    <div class="container-fluid p-0">
        <Header />
        <NavAdmin />
        <slot />
    </div>
</template>

<script setup>

</script>

<style>
body {
    background-image: url("~/assets/img/bg-gradient.png");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>