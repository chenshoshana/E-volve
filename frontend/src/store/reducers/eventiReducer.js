import { eventiService } from '../service/eventiService.js'

const initialState = {
  eventis: []
}

export function eventiReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_EVENTI':
      return { ...state, eventis: action.eventis}
    default:
      return state
  }
}