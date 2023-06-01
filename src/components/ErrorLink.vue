<template>
    <Transition name="error">
        <dialog class="error__popup" open v-if="isErrorPopupOpened">
            <div class="error__message">
                <h2>
                    Sorry, something went wrong: the link you entered is a disallowed link. Please try with another link. 
                </h2>
                <button @click="closePopup">Close</button>
            </div>
         </dialog>
    </Transition>
</template>

<script>
import { mapState } from 'vuex'


export default {
 computed:{
    ...mapState(['isErrorPopupOpened'])
 },
 methods:{
    closePopup(){
        this.$store.dispatch('togglePopupAction')
    }
 }
}
</script>