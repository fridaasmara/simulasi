<template>
    <div class="container-fluid">
        <div class="text-center">
            <h1 class="mt-5">Sedang keluar sistem...</h1>
        </div>
    </div>
</template>

<script setup>
const supabase = useSupabaseClient()
const user = useSupabaseUser()

async function logOut() {
    const { error } = await supabase.auth.signOut()
    if(!error) navigateTo('/login')
}

async function insertLog() {
    const { data, error } = await supabase
        .from('LogActivity')
        .insert({
            username: user.value.user_metadata.username,
            aktivitas: 'Logout'
    })
    if(!error) logOut()
    
}

onMounted(() => {
    insertLog()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kavoon&family=Miltonian+Tattoo&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Red+Rose:wght@300..700&display=swap');

h1 {
    font-family: "Poppins", sans-serif;

}
</style>