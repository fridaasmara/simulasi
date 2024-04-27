<template>
    <div class="container-fluid">

        <div class="row justify-content-center">
            <div class="col-4">
                <div class="card shadow">
                    <div class="card-body">
                        <div class="text-center">
                            <img src="~/assets/img/logo-apotek.png" alt="logo">
                            <h1 class="fw-bold mt-3">Login</h1>
                            <form @submit.prevent="signIn" class="mt-5 p-3">
                                <div class="mb-3">
                                    <input v-model="email" type="email" class="form-control" placeholder="E-mail">
                                </div>
                                <div class="mb-3">
                                    <input v-model="password" type="password" class="form-control" placeholder="Password">
                                </div>
                                <button type="submit" class="btn btn-primary mt-3">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const supabase = useSupabaseClient()
const email = ref ('')
const password = ref ('')

async function signIn () {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value,
    })
    if (error) throw error
    if (data) {
        navigateTo ("/")
        const user = useSupabaseUser()
        insertLog(user)
    }
}

async function insertLog(user) {
    const { error } = await supabase
    .from('LogActivity')
    .insert({
        aktivitas: 'Login',
        username: user.value.user_metadata.username
    })
    if (error) throw error
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kavoon&family=Miltonian+Tattoo&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Red+Rose:wght@300..700&display=swap');

.card {
    margin-top: 5rem;
}

img {
    width: 5rem;
    height: 5rem;
}

input {
    font-size: 1.3rem;
}

.btn {
    width: 7rem;
    font-size: 1.5rem;
}

h1, input {
    font-family: "Poppins", sans-serif;

}
</style>