export const state = () => ({
    theme: 'dark',
})
  
  export const mutations = {
    toggleTheme (state){
        if(process.browser){

            localStorage.theme = (state.theme === 'light') ? 'dark' : 'light'

            state.theme = localStorage.theme
        }

      },
    getInitialTheme(state){
        if(process.browser){

            if(!localStorage.theme) localStorage.theme = 'dark';
            
            state.theme = localStorage.theme
            
        }
    }  
  }
