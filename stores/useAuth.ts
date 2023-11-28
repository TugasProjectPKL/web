import { useToast } from "vue-toastification"
import { type Database } from "~/database.types"

export const useAuth = defineStore('auth',{
    state:()=>({
        email:"",
        password:"",
        fullName:""
    }),
    actions:{
        async signInWithEmail(){
            const supabase = useSupabaseClient<Database>()
            const router = useRouter()
            const toast = useToast()

            if(this.email == "" || this.email.length < 1){
                toast.error("Email tidak boleh kosong")
                return
            }

            if(this.password == "" || this.password.length < 1){
                toast.error("Email tidak boleh kosong")
                return
            }

            const data = await supabase.auth.signInWithPassword({
                email:this.email,
                password:this.password
            })

           
            if(data.error){
                toast.error(data.error.message)
                return
            }

            if(data.data){
                toast.success("Login berhasil")
                this.email = ""
                this.password = ""
                router.replace("/")
                return
            }
        },

        async signUpWithEmail(){
            const supabase = useSupabaseClient<Database>()
            const router = useRouter()
            const toast = useToast()

            if(this.email == "" || this.email.length < 1){
                toast.error("Email tidak boleh kosong")
                return
            }

            if(this.password == "" || this.password.length < 1){
                toast.error("Email tidak boleh kosong")
                return
            }

            if(this.fullName == "" || this.fullName.length < 1){
                toast.error("Nama lengkap tidak boleh kosong")
                return
            }

            const data = await supabase.auth.signUp({
                email:this.email,
                password:this.password,
                options:{
                    data:{
                        fullName:this.fullName
                    }
                }
            })

            if(data.error){
                toast.error(data.error.message)
                return
            }

            if(data.data ){
                toast.success("Register berhasil")
                this.email = ""
                this.password = ""
                this.fullName = ""
                router.replace({path:"/"})
                return
            }

        
        }
    }
})