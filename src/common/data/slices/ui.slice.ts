import { createSlice } from '@reduxjs/toolkit'

import { CounterState } from '../../interfaces'

const initialState: CounterState = {
    isOpenMenu: false,
    isOpenCart: false
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        
        toggleSideMenu: (state) => {
            state.isOpenMenu = !state.isOpenMenu
        },

        toggleCart: (state) => {
            state.isOpenCart = !state.isOpenCart
        }

    },
})

export const { 
    toggleSideMenu,
    toggleCart
} = uiSlice.actions

export default uiSlice.reducer
