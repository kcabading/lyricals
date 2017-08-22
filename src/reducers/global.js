
const initState = {    
    openDrawer: false    
}
const TOGGLE_MAIN_DRAWER = "TOGGLE_MAIN_DRAWER"
// global
export const toggleDrawer = () => ({type: TOGGLE_MAIN_DRAWER})

export default (state = initState, action) => {    
    switch (action.type) {        
        case TOGGLE_MAIN_DRAWER:
            return {...state, openDrawer: !state.openDrawer}        
        default:
            return state;            
    }
};