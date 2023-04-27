<template>
    <div class="shorter-link-container">
        <form class="link-wrapper" @submit.prevent="shorterLinkAction(link)">
        <input class="shorter-link-container--active" type="url" name="url"  placeholder="Shorten a Link here..."
        required v-model="link">
        <p v-if="alreadyExist" class="shorter-link-container__error-message">This link has already been done</p>
        <p v-if="link === ''" class="shorter-link-container__error-message">Please add a link!</p>
        <button class="link-wrapper__btn" type="submit">Shorten it!</button>
    </form>
    </div>
</template>
<script>
export default {
    data(){
        return{
            link:'',
            alreadyExist: false
        }
    },
    watch:{
        link(){
            this.alreadyExist = false;
        }
    },
    computed:{
        linkList(){
            return this.$store.state.links;
        }
    },
    methods: {
        async shorterLinkAction(link){
        try {
            if(!this.linkList.find( element => element.originalLink === link)){
                await this.$store.dispatch('shorterLinkAction', link)
                this.link = "";
            }else{
                this.alreadyExist = true;
                console.log('the link already exists')
            }
           
        } catch (error) {
            console.log('An error was found: ' + error);
        }
        }
    },
}
</script>
<style>
</style>