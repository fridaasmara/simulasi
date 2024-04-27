<template>
    <div class="container-fluid">
        <h2 class="mt-5 fw-bold">Kelola Resep</h2>
        <p>Menampilkan : {{ jmlResep }} resep</p>

        <div class="row d-flex justify-content-center">
            <div class="col-md-7 input">
                <form @submit.prevent="getResep" class="input-group flex-nowrap rounded">
                    <input v-model="keyword" type="search" class="form-control" placeholder="Cari" aria-label="Search" aria-describedby="search-addon"/>
                    <span class="input-group-text bg-white"><i class="bi bi-search search"></i></span> 
                </form>
            </div>
            <div class="col-md-1">
                <div class="text-center">
                    <nuxt-link to="../resep/tambah">
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
                                        <th>No Resep</th>
                                        <th>Tanggal Resep</th>
                                        <th>Nama Pasien</th>
                                        <th>Nama Dokter</th>
                                        <th>Resep Obat</th>
                                        <th>Jumlah</th>
                                        <th>Hapus</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(resep, i) in reseps" :key="i">
                                        <td>{{ i + 1 }}</td>
                                        <td>{{ resep.no_resep }}</td>
                                        <td>{{ resep.tgl_resep }}</td>
                                        <td>{{ resep.nama_pasien }}</td>
                                        <td>{{ resep.nama_dokter }}</td>
                                        <td>{{ resep.resep_obat }}</td>
                                        <td>{{ resep.Obat.nama_obat }}</td>
                                        <td>{{ resep.jumlah_obat }}</td>
                                        <td><button><i class="bi bi-x-circle text-danger"></i></button></td>
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
const supabase = useSupabaseClient()
const obats = ref ([])
const reseps = ref ([])
const jmlResep = ref (0)
const keyword = ref ('')

const getResep = async () => { 
    const { data, error } = await supabase
        .from('Resep')
        .select('*')
        .order('id', { ascending: false })
        .ilike('no_resep', `%${keyword.value}`)
    if(data) reseps.value = data
}

const getjmlResep = async () => {
    const { data, count } = await supabase
    .from('Resep')
    .select('*', { count: 'exact' })
    if(data) jmlResep.value = count;
}

onMounted(() => {
    getResep()
    getjmlResep()
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