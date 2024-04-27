<template>
    <div class="container-fluid">
        <h2 class="mt-5 fw-bold">Kelola Obat</h2>
        <p>Menampilkan : 1 obat</p>

        <div class="row d-flex justify-content-center">
            <div class="col-md-7 input">
                <div class="input-group flex-nowrap rounded">
                    <input type="search" class="form-control" placeholder="Cari" aria-label="Search" aria-describedby="search-addon"/>
                    <span class="input-group-text bg-white"><i class="bi bi-search search"></i></span> 
                </div>
            </div>
            <div class="col-md-1">
                <div class="text-center">
                    <nuxt-link to="../obat/tambah">
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
                                        <th>Kode Obat</th>
                                        <th>Nama Obat</th>
                                        <th>Expired Date</th>
                                        <th>Jumlah</th>
                                        <th>Harga</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(obats, i) in obats" :key="i">
                                        <td>{{ i + 1 }}</td>
                                        <td>{{ obat.kode_obat }}</td>
                                        <td>{{ obat.nama_obat }}</td>
                                        <td>{{ obat.expired_date }}</td>
                                        <td>{{ obat.jumlah }}</td>
                                        <td>{{ obat.harga }}</td>
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
const obats = ref([])

const getObat = async () => { 
    const { data, error } = await supabase
        .from('Obat')
        .select('*')
        .order('id', { ascending: false })
        .ilike('nama_nbat', `%${keyword.value}`)
    if(data) obats.value = data
}
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