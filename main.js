var app=new Vue(
    {
        el:'#root',
        data: {
            emailRandom:'',
            generatoreEmail:[],
        },
        created(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                while( this.generatoreEmail.length<10){
                   this.emailRandom=response.data.response
                    this.generatoreEmail.push(this.emailRandom)                    
                    console.log(response.data.response) 
                }
            })
        },
        methods:{
           
        }
    }
);