<template>
    <div class="container-fluid">

        <div class="row">
            <div class="col">
                <div class="card shadow">
                    <div class="card-body">
                        <div class="text-center">
                            <img src="~/assets/img/logo-apotek.png" alt="logo">
                            <h1 class="fw-bold mt-3">Login</h1>
                            <form action="" class="mt-5 p-3">
                                <div class="mb-3">
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="E-mail">
                                </div>
                                <div class="mb-3">
                                    <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password">
                                </div>
                                <button class="btn btn-primary mt-3">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kavoon&family=Miltonian+Tattoo&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Red+Rose:wght@300..700&display=swap');

.card {
    width: 40rem;
    margin-left: 32rem;
    margin-top: 5rem;
}

img {
    width: 5rem;
    height: 5rem;
}

input {
    font-size: 1.3rem;
}

.btn {
    width: 7rem;
    font-size: 1.5rem;
}

h1, input {
    font-family: "Poppins", sans-serif;

}
</style>