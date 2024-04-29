<template>
    <div class="container-flud">
        <h2 class="mt-5 fw-bold">Kelola Transaksi</h2>
        <div class="row pt-5">
            <div class="col-md-6 offset-md-3">
                <div class="card shadow mb-5">
                    <div class="card-body">
                        <form @submit.prevent="tambahTransaksi" class="p-5">
                            <div class="text-center">
                                <h3 class="mb-4 fw-semibold">Tambah Transaski</h3>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">No Transaksi</label>
                                <input v-model="form.no_transaksi" type="number" class="form-control" id="exampleFormControlInput1">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Tipe Resep</label>
                                <select v-model="form.tipe_resep" class="form-select" aria-label="Default select example">
                                    <option value=""></option>
                                    <option value="Resep">Resep</option>
                                    <option value="Non-resep">Non-resep</option>
                                </select>
                            </div>
                            <div v-if="form.tipe_resep == 'Resep'" class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">No Resep</label>
                                    <select v-model="form.id_resep" class="form-select" aria-label="Default select example">
                                        <option disable value=" "></option>
                                        <option v-for="resep in reseps" :value="resep.id">{{ resep.no_resep }}</option>
                                    </select>
                            </div>
                            <div v-if="form.tipe_resep == 'Resep'" class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Nama Pasien</label>
                                <select v-model="form.id_resep" class="form-select" aria-label="Default select example">
                                    <option disable value=" "></option>
                                    <option v-for="resep in reseps" :value="resep.id">{{ resep.nama_pasien }}</option>
                                </select>
                            </div>
                            <div v-if="form.tipe_resep == 'Resep'" class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Nama Dokter</label>
                                <select v-model="form.id_resep" class="form-select" aria-label="Default select example">
                                    <option disable value=" "></option>
                                    <option v-for="resep in reseps" :value="resep.id">{{ resep.nama_dokter }}</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Resep Obat</label>
                                <select v-model="form.id_obat" @change="ambilObat(form.id)" class="form-select" aria-label="Default select example">
                                    <option disable value=" "></option>
                                    <option v-for="obat in obats" :value="obat.id">{{ obat.nama_obat }}</option>
                                </select>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Jumlah</label>
                                        <input v-model="form.quantitas" type="number" class="form-control" id="exampleFormControlInput1">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Harga</label>
                                        <input v-model="tempHarga.harga" type="text" class="form-control" id="exampleFormControlInput1" readonly>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-5">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label fw-semibold fs-5">Total Bayar</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <input v-model="form.total_bayar" type="number" class="form-control" id="exampleFormControlInput1" readonly>
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
definePageMeta ({
    middleware: 'auth'
})

const supabase = useSupabaseClient()
const tempHarga = ref({})
const harga = ref(0)
const total = computed(() => form.value.quantitas * harga.value)
const obats = ref ([])
const reseps = ref ([])
const form = ref ({
    no_transaksi: "",
    tipe_resep: "",
    id_resep: "",
    id_obat: "",
    quantitas: 0,
    total_bayar: total
})

const tambahTransaksi = async () => {
    const { error } = await supabase
        .from('Transaksi')
        .insert([
            form.value
        ])
        console.log(form.value)
    if(!error) navigateTo ('/transaksi')
}

async function selectObat() {
    const { data, error } = await supabase.from("Obat").select()
    if(data) obats.value = data
}

async function ambilObat(id) {
    const { data, error } = await supabase.from("Obat").select().eq("id", id).maybeSingle()
    if(data) {
        tempHarga.value = data
        form.harga.value = tempHarga.harga
    }
}

async function selectResep() {
    const { data, error } = await supabase.from("Resep").select()
    if(data) reseps.value = data
}

onMounted(() => {
    selectObat()
    selectResep()
})
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