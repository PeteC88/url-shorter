<template>
    <div class="shorter-link-container" id="shorter-link">
        <form class="link-wrapper" @submit.prevent="shorterLinkAction(link)">
        <input :class="{'shorter-link-container--active ': emptyInputs || alreadyExist}" type="url" name="url"  placeholder="Shorten a Link here..."
        v-model="link">
        <p v-if="alreadyExist" class="shorter-link-container__error-message">This link has already been done</p>
        <p v-if="emptyInputs" class="shorter-link-container__error-message">Please add a link!</p>
        <button class="link-wrapper__btn" type="submit">Shorten it!</button>
    </form>
    </div>

</template>
<script>

export default {

    data(){
        return{
            link:'',
            alreadyExist: false,
            isEmptySubmit: false
        }
    },
    watch:{
        link(){
            this.alreadyExist = false;
            if(!this.link){
                this.isEmptySubmit = false;
            }
        }
    },
    computed:{
        linkList(){
            return this.$store.state.links;
        },
        emptyInputs(){
            return this.isEmptySubmit && this.link === "";
        }
    },
    methods: {
        async shorterLinkAction(link){
        try {
            if(!this.link){
                this.isEmptySubmit = true;
                this.alreadyExist = false;
            }else if(this.linkList.find( element => element.originalLink === link)){
                this.alreadyExist = true;
                this.isEmptySubmit =false;
            }else {
                await this.$store.dispatch('shorterLinkAction', link)
                this.link = "";
                this.isEmptySubmit =false;
                this.alreadyExist = false;
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