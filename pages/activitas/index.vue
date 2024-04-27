<template>
    <div class="container-fluid">
        <h2 class="mt-5 fw-bold">Log Activity</h2>
        <p>Menampilkan : {{ jmlLogAct }} activitas</p>

        <div class="row p-5">
            <div class="col">
                <div class="card p-5 shadow">
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Tanggal</th>
                                        <th>Waktu</th>
                                        <th>Username</th>
                                        <th>Activitas</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(log, i) in logs" :key="i">
                                        <td>{{ i + 1 }}</td>
                                        <td>{{ log.tanggal }}</td>
                                        <td>{{ log.waktu }}</td>
                                        <td>{{ log.username }}</td>
                                        <td>{{ log.aktivitas }}</td>
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

const logs = ref([])
const jmlLogAct = ref (0)

async function getLog() {
    const { data, error } = await supabase
        .from('LogActivity')
        .select('*')
        .order('id', { ascending: false })
    if(data) logs.value = data
}

const getjmlLogAct = async () => {
    const { data, count } = await supabase
    .from('LogActivity')
    .select('*', { count: 'exact' })
    if(data) jmlLogAct.value = count;
}

onMounted(() => {
    getLog()
    getjmlLogAct()
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