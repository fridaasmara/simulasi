export default defineNuxtRouteMiddleware((to, from) => {
    const user = useSupabaseUser()

    if(user.value?.user_metadata.tipe_user == 'Admin') {
      return
    }

    if(user.value?.user_metadata.tipe_user == 'Apoteker') {
      if(to.name?.toString().includes('obat') || (to.name?.toString().includes('resep'))) {
        return
      } else navigateTo('/')
    }

    if(user.value?.user_metadata.tipe_user == 'Kasir') {
      if(to.name?.toString().includes('transaksi')) {
        return
      } else navigateTo('/')
    }

  })