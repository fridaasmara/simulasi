<template>
    <div class="container-flud">
        <h2 class="mt-5 fw-bold">Kelola Obat</h2>
        <div class="row pt-5">
            <div class="col-lg-6 offset-md-3">
                <div class="card shadow mb-5">
                    <div class="card-body">
                        <form action="" class="p-5">
                            <div class="text-center">
                                <h3 class="mb-4 fw-semibold">Tambah Obat</h3>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Kode Obat</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Nama Obat</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Expired Date</label>
                                <input type="date" class="form-control" id="exampleFormControlInput1">
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Jumlah</label>
                                        <input type="number" class="form-control" id="exampleFormControlInput1">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Harga</label>
                                        <input type="number" class="form-control" id="exampleFormControlInput1">
                                    </div>
                                </div>
                            </div>
                            <div class="text-center">
                                <nuxt-link to="/obat">
                                    <button class="btn btn-primary mt-5">Kirim</button>
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