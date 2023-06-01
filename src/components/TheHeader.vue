<template>
   <div class="menu-bar">
      <div class="header">
      <div class="header__left">
        <img src="../assets/imgs/logo.svg" alt="logo">
        <nav class="header__left-nav">
           <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>Resources</li>
           </ul>
        </nav>
     </div>
     <div class="header__right">
         <div class="burger" @click="toggleMobileMenu">
            <div class="burger-menu"></div>
         </div>
      <nav class="header__right-nav"> 
         <ul>
            <li>
               <button class="header__btn-secondary">Login</button>
            </li>
            <li>
               <button class="header__btn-primary">Sign Up</button>
            </li>
         </ul>
      </nav>
     </div>
   </div>
   </div>
   <ModalMenu />
  </template>

<script>
   import { mapState } from 'vuex';
   import ModalMenu from './ModalMenu.vue';

   export default {
      components:{
         ModalMenu
      },
      data(){
         return {

         }
      },
      computed:{
         ...mapState(['isMobileMenuOpened'])
      },
      methods:{
         toggleMobileMenu(){
            this.$store.dispatch('toggleMobileMenuAction');
         }
      }
   }
</script>