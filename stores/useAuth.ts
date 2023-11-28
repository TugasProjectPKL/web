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
            const data = await supabase.auth.signInWithPassword({
                email:this.email,
                password:this.password
            })

            if(data.error){
                //todo: error
            }

            if(data.data != null){
                router.push({path:"/"})
            
            }
            
        },

        async signUpWithEmail(){
            const supabase = useSupabaseClient<Database>()
            const router = useRouter()

            const data = await supabase.auth.signUp({
                email:this.email,
                password:this.password
            })

            if(data.error){
                //todo : error
            }

            if(data.data != null){
                router.push({path:"/"})
            }

        
        }
    }
})