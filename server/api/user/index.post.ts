import { serverSupabaseServiceRole } from '#supabase/server'

export default eventHandler(async (event) => {
    const supabaseAdmin = serverSupabaseServiceRole(event)
    const body = await readBody (event)

    const { data, error } = await supabaseAdmin.auth.admin.createUser({
        email: body.email,
        password: body.password,
        user_metadata: {
            tipe_user: body.tipe_user,
            nama: body.tipe_user,
            alamat: body.alamat,
            telepon: body.telepon,
            username: body.username
        }
    })

    if(error) throw error

    return data 
})