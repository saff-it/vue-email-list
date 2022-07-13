
const app = new Vue (
    {
        el:'#root',

        
        data: {  
            randomEmail: [

            ],
        },


        methods: {

            getEmail: function(){
                for ( let i = 0; i < 10; i++ ){
                    
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then( (response) => {
                    this.randomEmail.push(response.data.response);
                    console.log(this.randomEmail);
                    });
                };
            },
        },

        created() {
            this.getEmail();
        },
        
    },
);


