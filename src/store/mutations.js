export default{
    shorterLinkMutation(state, payload){
        state.links.push(payload)
    },
    //used for localstorage
    initialiseLinkList(state){
        if (localStorage.getItem('links')) {
            state.links = JSON.parse(localStorage.links)
        }
    },
    toggleMobileMenuMutation(state){
        state.isMobileMenuOpened = !state.isMobileMenuOpened;
        
        if(state.isMobileMenuOpened){
            document.querySelector('body').style.overflow = 'hidden';
        } else{
            document.querySelector('body').style.overflow = 'auto';
        }
    },
    togglePopupMutation(state){
        state.isErrorPopupOpened = !state.isErrorPopupOpened ;

        if(state.isErrorPopupOpened){
            document.querySelector('body').style.overflow = 'hidden';
        } else{
            document.querySelector('body').style.overflow = 'auto';
        }
    }
}