<template>
    <div class="list-container">
        <div  class="item-container" v-for="link in linkList" :key="link.id">
            <div class="original-link"><p>{{link.originalLink}}</p></div>
            <div class="short-link"><p ref="shortLink">{{link.shortLink}}</p></div>
            <button class="copy-btn" :class="{'copy-btn--active': link.copied}" ref="copyButton" @click="copyNewLinkToClipboard(link.shortLink, link.id)">{{link.copied ? "Copied!" : "Copy"}}</button>
    </div>
    </div>
    
</template>
<script>
export default{
    data(){
        return {
            copiedText: 'Copied!',
            copiedLink:''
           
        }
    },
    computed:{
        linkList(){
            return this.$store.state.links;
        }
    },
    methods:{
         copyNewLinkToClipboard(text, id){
            navigator.clipboard.writeText(text); 
            let foundItem = this.linkList.find(link => link.id == id);
            this.linkList.forEach(link => link.copied = false)
            foundItem.copied = true;
            
            
     }
    }
}
</script>
