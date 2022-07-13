
const app = new Vue (
    {
        el:'#root',

        
        data: {  
            randomEmail: [

            ],
        },


        methods: {

            getEmail: function(){
                
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then( (response) => {
                    this.randomEmail.push(response.data.response);
                    console.log(this.randomEmail);
    
                });

            },


        },

        
        created(){
            
            for ( let i = 0; i < 10; i++ ){
                this.getEmail();
            };
        },

    },

);