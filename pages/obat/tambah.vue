<template>
    <div class="container-flud">
        <h2 class="mt-5 fw-bold">Kelola Obat</h2>
        <div class="row pt-5">
            <div class="col-md-6 offset-md-3">
                <div class="card shadow mb-5">
                    <div class="card-body">
                        <form @submit.prevent="tambahObat" class="p-5">
                            <div class="text-center">
                                <h3 class="mb-4 fw-semibold">Tambah Obat</h3>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Kode Obat</label>
                                <input v-model="form.kode_obat" type="text" class="form-control" id="exampleFormControlInput1">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Nama Obat</label>
                                <input v-model="form.nama_obat" type="text" class="form-control" id="exampleFormControlInput1">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Expired Date</label>
                                <input v-model="form.expired_date" type="date" class="form-control" id="exampleFormControlInput1">
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Jumlah</label>
                                        <input v-model="jumlah" type="number" class="form-control" id="exampleFormControlInput1">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Harga</label>
                                        <input v-model="form.harga" type="number" class="form-control" id="exampleFormControlInput1">
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
const form = ref ({
    kode_obat: "",
    nama_obat: "",
    expired_date: "",
    jumlah: "",
    harga: ""
})

const tambahObat = async () => {
    const { data, error } = await supabase
        .from('Obat')
        .insert ([
            form.value
        ])
    if(!error) navigateTo('/obat')
}
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