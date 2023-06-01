<template>
    <div class="container">
        <TheBanner />
        <ShorterLink />
        <link-list-container>
           
        </link-list-container>
        <Statistics />
        <BoostLink />
    </div>
</template>
<style lang="scss">
$primary-color: red;
.btn{
    border: 1px solid black;
    display: inline-block;
    padding: 1rem;
}
</style>
<script>
import {mapState} from 'vuex';
import TheBanner from '../components/TheBanner.vue';
import ShorterLink from '../components/ShorterLink.vue';
import LinkListContainer from '../components/LinkListContainer.vue';
import Statistics from '../components/Statistics.vue';
import BoostLink from '../components/BoostLink.vue';


export default {
    components:{
        TheBanner,
        ShorterLink,
        LinkListContainer,
        Statistics,
        BoostLink,
   
    },
    data(){
        return {
            index:0,
            phrase:'',
            nom: "Ciccarello",
            prenom: "Pietro"
        }
    },
    computed:{
        ...mapState(['link']),
    },
    methods:{
     consoleNom(){
        console.log(this.nom)
     }
    }
}
</script>
