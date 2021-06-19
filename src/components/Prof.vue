<template>
    <h1 :user='user' v-if="user && user.utilisateur == 'Professeur' "> HEY Prof wasup {{user.nom}} {{user.email}} </h1>
</template>



<script>

import axios from 'axios'

export default {
    name : 'Prof',
    
   data(){
        return {
            user :null,
        }
    },
    created() {
        axios.get('http://127.0.0.1:8000/api/user', {
            headers : {
                Authorization : 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(res => {console.log(res.data.name) ; this.user = res.data })

    },
}

</script>


<style scoped>

</style>