var app=new Vue(
    {
        el:'#root',
        data: {
            generatoreEmail:[]
        },
        created(){
            for(let i=0; i<10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                        this.generatoreEmail.push(response.data.response)       
                })
            }
             console.log( this.generatoreEmail) 
        },
        methods:{
           
        }
    }
);