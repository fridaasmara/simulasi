<template>
    <div class="container-fluid">
        <h2 class="mt-5 fw-bold">Kelola User</h2>
        <p>Menampilkan : {{ jmlUser }} user</p>

        <div class="row d-flex justify-content-center">
            <div class="col-md-7 input">
                <div class="input-group flex-nowrap rounded">
                    <input type="search" class="form-control" placeholder="Cari" aria-label="Search" aria-describedby="search-addon"/>
                    <span class="input-group-text bg-white"><i class="bi bi-search search"></i></span> 
                </div>
            </div>
            <div class="col-md-1">
                <div class="text-center">
                    <nuxt-link to="../user/tambah">
                        <div class="btn add">
                            <i class="bi bi-plus-square fs-2"></i>
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </div>

        <div class="row p-5">
            <div class="col">
                <div class="card p-5 shadow">
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Tipe User</th>
                                        <th>Nama</th>
                                        <th>Alamat</th>
                                        <th>Telepon</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Password</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(user, index) in users">
                                        <td value="#">{{ index + 1 }}</td>
                                        <td>{{ user.tipe_user }}</td>
                                        <td>{{ user.nama }}</td>
                                        <td>{{ user.alamat }}</td>
                                        <td>{{ user.telepon }}</td>
                                        <td>{{ user.username }}</td>
                                        <td>{{ user.email }}</td>
                                        <td>{{ user.password }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta ({
    middleware: 'auth'
})

const supabase = useSupabaseClient()
const user = useSupabaseUser()
const jmlUser = ref(0)
const keyword = ref ('')

const { data: users, refresh } = useAsyncData('users', async () => {
    const { data } = await supabase.from('Users').select().order("id", { ascending: true })

    return data
})

const getjmlUser = async () => {
    const { data, count } = await supabase
    .from('Users')
    .select('*', { count: 'exact' })
    if(data) jmlUser.value = count;
}

onMounted(() => {
    getjmlUser()
})

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kavoon&family=Miltonian+Tattoo&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Red+Rose:wght@300..700&display=swap');


h2, p {
    margin-left: 1rem;
}

.input-group {
    margin-top: 1rem;
}

.btn {
    margin-right: 3rem;
    margin-top: 0.2rem;
    width: 4rem;
    background-color: white;
}

th {
    font-size: 1.3rem;
}

td {
    font-size: 1.2rem;
}

h2, p, th, td {
    font-family: "Poppins", sans-serif;

}
</style>