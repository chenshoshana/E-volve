import { eventiService } from '../service/eventiService'

export function loadEventies() { // Action Creator
    return (dispatch) => {
        return eventiService.query()
            .then(eventis => {
                const action = {
                    type: 'SET_EVENTI',
                    eventis
                }
                dispatch(action)
            })
    }
}