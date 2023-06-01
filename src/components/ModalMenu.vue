<template>
    <Transition name="menu-mobile-transition">
        <dialog class="menu-overlay" open v-if="isMobileMenuOpened">
            <div class="menu-mobile">
                <nav class="menu-mobile__menu-section">
                    <ul>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="">Resources</a></li>
                    </ul>
                </nav>
                <nav class="menu-mobile__login-section"> 
                    <ul>
                        <li>
                        <button>Login</button>
                        </li>
                        <li>
                        <button>Sign Up</button>
                        </li>
                    </ul>
                </nav>
            </div>
         </dialog>
    </Transition>
</template>

<script>
import { mapState } from 'vuex'


export default {
 computed:{
    ...mapState(['isMobileMenuOpened'])
 }
}
</script>