<template>
    <div class="container-flud">
        <h2 class="mt-5 fw-bold">Kelola User</h2>
        <div class="row pt-5">
            <div class="col-md-6 offset-md-3">
                <div class="card shadow mb-5">
                    <div class="card-body">
                        <form @submit.prevent="tambahUser" class="p-5">
                            <div class="text-center">
                                <h3 class="mb-4 fw-semibold">Tambah User</h3>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1"  class="form-label">Tipe User</label>
                                <select v-model="form.tipe_user" class="form-select" aria-label="Default select example">
                                    <option value=""></option>
                                    <option value="Admin">Admin</option>
                                    <option value="Apoteker">Apoteker</option>
                                    <option value="Kasir">Kasir</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1"  class="form-label">Nama</label>
                                <input v-model="form.nama" type="text" class="form-control">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1"  class="form-label">Alamat</label>
                                <input v-model="form.alamat" type="text" class="form-control">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1"  class="form-label">Telepon</label>
                                <input v-model="form.telepon" type="number" class="form-control">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1"  class="form-label">Username</label>
                                <input v-model="form.username" type="text" class="form-control">
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1"  class="form-label">Email</label>
                                        <input v-model="form.email" type="email" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1"  class="form-label">Password</label>
                                        <input v-model="form.password" type="password" class="form-control">
                                    </div>
                                </div>
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn btn-primary mt-5">Kirim</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const supabase = useSupabaseClient()
const form = ref({
    tipe_user: "",
    nama: "",
    alamat: "",
    telepon: "",
    username: "",
    email: "",
    password: "",
})

async function tambahUser() {
    // console.log(form.value)

    const { data, error } = await supabase.auth.signUp({
        email: form.value.email,
        password: form.value.password,
        options: {
            data: {
                tipe_user: form.value.tipe_user,
                nama: form.value.nama,
                alamat: form.value.alamat,
                telepon: form.value.telepon,
                username: form.value.username
            }
        }
    })

    if(data) {
        insertUser()
    }
    // if(error) throw error
}

// async function createUser() {
//     const { data } = await $fetch('/api/user', {
//         method: POST,
//         body: {
//             tipe_user: form.value.tipe_user,
//             nama: from.value.nama,
//             alamat: form.value.alamat,
//             telepon: form.value.telepon,
//             username: form.username.username,
//             email: form.value.email,
//             password: form.value.password
//         },  
//     })
//     insertUser(data.user)
// }

async function insertUser() {
  const { error } = await supabase.from("Users").insert({
    id: user.value.id,
    tipe_user: form.value.tipe_user,
    nama: from.value.nama,
    alamat: form.value.alamat,
    telepon: form.value.telepon,
    username: form.value.username,
    email: form.value.email,
    password: form.value.password,
  });
  if (error) throw error;
  if (data) navigateTo("/login");
}

// async function insertUser(dataUser) {
//     const { error } = await supabase.from('Users').insert({
//         id: userData.id,
//         tipe_user: form.value.tipe_user,
//         nama: from.value.nama,
//         alamat: form.value.alamat,
//         telepon: form.value.telepon,
//         username: form.username.username,
//         email: form.value.email,
//         password: form.value.password
//     })

//     if(!error) throw error
//     else {
//         navigateTo('/user')
//     }
// }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kavoon&family=Miltonian+Tattoo&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Red+Rose:wght@300..700&display=swap');


h2 {
    margin-left: 1rem;
}

label {
    font-size: 1.3rem;
}

.btn {
    font-size: 1.5rem;
    width: 8rem;
}

h2, h3, label, .btn {
    font-family: "Poppins", sans-serif;

}
</style>