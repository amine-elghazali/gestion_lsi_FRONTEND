<template>
    <h1 :user='user' v-if="user && user.utilisateur == 'Etudiant'"> HEY Etudiant wasup {{user.nom}} {{user.email}} </h1>
</template>



<script>

import axios from 'axios'

export default {
    name : 'Etudiant',
    
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