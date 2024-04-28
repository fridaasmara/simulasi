<template>
    <div class="container-flud">
        <h2 class="mt-5 fw-bold">Kelola Resep</h2>
        <div class="row pt-5">
            <div class="col-md-6 offset-md-3">
                <div class="card shadow mb-5 p-5">
                    <div class="card-body">
                        <form @submit.prevent="tambahResep" class="rounded">
                            <div class="text-center">
                                <h3 class="mb-4 fw-semibold">Tambah Resep</h3>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">No Resep</label>
                                <input v-model="form.no_resep" type="text" class="form-control" id="exampleFormControlInput1">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Nama Pasien</label>
                                <input v-model="form.nama_pasien" type="text" class="form-control" id="exampleFormControlInput1">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Nama Dokter</label>
                                <input v-model="form.nama_dokter" type="text" class="form-control" id="exampleFormControlInput1">
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Resep Obat</label>
                                        <select v-model="form.resep_obat" class="form-select" aria-label="Default select example">
                                            <option v-for="obat in obats" :value="obat.id">{{ obat.nama_obat }}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Jumlah</label>
                                        <input v-model="form.jumlah_obat" type="number" class="form-control" id="exampleFormControlInput1">
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
const obats = ref ([])
const form = ref ({
    no_resep: "",
    nama_pasien: "",
    nama_dokter: "",
    resep_obat: "",
    jumlah_obat: ""
})

const tambahResep = async () => {
    const { error } = await supabase
        .from('Resep')
        .insert([
            form.value
        ])
    console.log(error)
    if(!error) navigateTo('/resep')
}

async function selectObat() {
    const { data, error } = await supabase.from('Obat').select()
    if(data) obats.value = data
}

onMounted(() => {
    selectObat()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kavoon&family=Miltonian+Tattoo&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Red+Rose:wght@300..700&display=swap');


label {
    font-size: 1.2rem;
}

h2 {
    margin-left: 1rem;
}

.btn {
    font-size: 1.5rem;
    width: 8rem;
}

h2, h3, label, .btn {
    font-family: "Poppins", sans-serif;

}
</style>