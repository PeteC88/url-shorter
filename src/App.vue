<template>
  <ErrorLink />
  <TheHeader />
  <Homepage />
  <TheFooter />
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import Homepage from './pages/Homepage.vue';
import TheFooter from './components/TheFooter.vue';
import ErrorLink from './components/ErrorLink.vue';

export default {
  name: 'App',
  components: {
    ErrorLink,
    TheHeader,
    Homepage,
    TheFooter
  },
  data(){
    return{
      
    }
  },
  computed:{
   
  },
  //to retreive the localStorage from the store.
  beforeMount() {
    //commit the mutation
    this.$store.commit('initialiseLinkList')
}, 
}
</script>

<style lang="scss">
 @import 'assets/scss/main.scss';


</style>
