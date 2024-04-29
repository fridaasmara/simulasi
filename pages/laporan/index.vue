<template>
    <div class="container-fluid">
        <h2 class="mt-5 fw-bold">Kelola Laporan</h2>
        <div class="text-center">
            <h4 class="mt-5 fw-semibold">Laporan Penjualan</h4>
        </div>
        <div class="row mt-5 d-flex">
            <div class="col-md-2">
                <p class="mt-3">Per tanggal</p>
            </div>
            <div class="col-md-2">
                <div class="input-group flex-nowrap rounded">
                    <input type="date" class="form-control" placeholder="Cari" aria-label="Search" aria-describedby="search-addon"/>
                </div>
            </div>
            <div class="col-md-3">
                <div class="text-center">
                    <nuxt-link to="../obat/tambah">
                        <button class="btn bg-primary text-white">
                            Cari
                        </button>
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
                                        <th>Tanggal Transaksi</th>
                                        <th>Total Bayar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(laporan, i) in laporans" :key="i">
                                        <td>{{ i + 1 }}</td>
                                        <td>{{ laporan.tgl_transaksi }}</td>
                                        <td>{{ laporan.total_bayar }}</td>
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
definePageMeta({
    middleware: 'auth'
})

const supabase = useSupabaseClient()
const laporans = ref([])

async function getlaporans () {
    const { data, error } = await supabase 
        .from('Transaksi')
        .select('*')
        .order('id', { ascending: false })
    if(data) laporans.value = data
}

onMounted (() => getlaporans())
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kavoon&family=Miltonian+Tattoo&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Red+Rose:wght@300..700&display=swap');

h2 {
    margin-left: 1rem;
}

.input-group {
    margin-top: 1rem;
}

p {
    margin-left: 5rem;
}

p, .btn {
    font-size: 1.5rem;

}
.btn {
    margin-right: 18rem;
    margin-top: 0.5rem;
    width: 7rem;
}

th {
    font-size: 1.3rem;
}

td {
    font-size: 1.2rem;
}

h2, h4, p, th, td .btn {
    font-family: "Poppins", sans-serif;

}
</style>