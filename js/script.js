
const app = new Vue (
    {
        el:'#root',

        
        data: {  
            randomEmail: '',
        },


        methods: {

            funzione: function(){
                

            },


        },

        
        created(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then( (response) => {
                this.randomEmail = response.data.response;
                console.log(this.randomEmail);

            });
        }

    },

);