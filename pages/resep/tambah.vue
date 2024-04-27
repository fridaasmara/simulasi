<template>
    <div class="container-flud">
        <h2 class="mt-5 fw-bold">Kelola Resep</h2>
        <div class="row pt-5">
            <div class="col-lg-6 offset-md-3">
                <div class="card shadow mb-5">
                    <div class="card-body">
                        <form @submit.prevent="tambahResep" action="" class="p-5">
                            <div class="text-center">
                                <h3 class="mb-4 fw-semibold">Tambah Resep</h3>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">No Resep</label>
                                <input v-model="form.no_resep" type="text" class="form-control" id="exampleFormControlInput1">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Tanggal Resep</label>
                                <input v-model="form.tgl_resep" type="date" class="form-control" id="exampleFormControlInput1">
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
                                        <input v-model="form.resep_obat" type="text" class="form-control" id="exampleFormControlInput1">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Jumlah</label>
                                        <input v-model="form.jumlah" type="number" class="form-control" id="exampleFormControlInput1">
                                    </div>
                                </div>
                            </div>
                            <div class="text-center">
                                <nuxt-link to="/obat">
                                    <button type="submit" class="btn btn-primary mt-5">Kirim</button>
                                </nuxt-link>
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
const form = ({
    tgl_resep: "",
    no_resep: "",
    nama_pasien: "",
    nama_dokter: "",
    resep_obat: "",
    jumlah: ""
})

const tambahResep = async () => {
    const { error } = await supabase
        .from('Resep')
        .insert([
            form.value
        ])

    if(!error) navigateTo('/resep')
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kavoon&family=Miltonian+Tattoo&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Red+Rose:wght@300..700&display=swap');


label {
    font-size: 1.3rem;
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