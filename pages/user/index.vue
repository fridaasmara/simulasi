<template>
    <div class="container-fluid">
        <h2 class="mt-5 fw-bold">Kelola User</h2>
        <p>Menampilkan : 1 user</p>

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
                                        <th>Hapus</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Admin</td>
                                        <td>Frida</td>
                                        <td>Tasikmalaya</td>
                                        <td>081937343932</td>
                                        <td>Admin01</td>
                                        <td>admin01@apotekxyz.com</td>
                                        <td>admin01</td>
                                        <td><i class="bi bi-x-circle text-danger"></i></td>
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