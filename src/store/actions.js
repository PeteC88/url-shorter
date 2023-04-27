import axios from "axios"

export default{
    async shorterLinkAction ({commit}, userLink){
        try{
            const data = await axios.get(
                `https://api.shrtco.de/v2/shorten?url=${userLink}`
            )

            const linkList = {
                id: new Date().toISOString(),
                originalLink :userLink, 
                shortLink: data.data.result.short_link,
                copied: false
            }
            commit('shorterLinkMutation', linkList)
        }catch(error){
            console.log(error);
        }
    }
}