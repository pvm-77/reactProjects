import deepFreeze from 'deep-freeze'
import noteReducer from './noteReducer'
describe('noteReducer', () => {
    test('returns new state with action NEW_NOTE', () => {
        const state = []
        const action = {
            type: 'NEW_NOTE',
            data: {
                content: 'app state is in redux store',
                important: true,
                id: 1
            }
        }
        deepFreeze(state)
        const newState = noteReducer(state, action)
        expect(newState).toHaveLength(1)
        expect(newState).toContainEqual(action.data)




    })
})