export default{
    shorterLinkMutation(state, payload){
        state.links.push(payload)
    },
    //used for localstorage
    initialiseLinkList(state){
        if (localStorage.getItem('links')) {
            state.links = JSON.parse(localStorage.links)
        }
    }
}