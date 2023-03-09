import { createSlice } from '@reduxjs/toolkit'

import { CounterState } from '../../interfaces'

const initialState: CounterState = {
    isOpenMenu: false
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleSideMenu: (state) => {
            state.isOpenMenu = !state.isOpenMenu
        }
    },
})

export const { 
    toggleSideMenu 
} = uiSlice.actions

export default uiSlice.reducer
