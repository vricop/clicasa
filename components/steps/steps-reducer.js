import { useReducer } from 'react'

export const ACTIONS = {
  UPDATE_CURRENT_STEP: 'updateCurrentStep',
  ADD_STEP: 'addStep',
}

const REDUCER_ACTIONS = {
  [ACTIONS.ADD_STEP]: (state, { payload: { src, id } }) => ({
    ...state,
    steps: [...state.steps, { src, id }],
  }),
  [ACTIONS.UPDATE_CURRENT_STEP]: (state, { payload: currentStep }) => ({
    ...state,
    currentStep,
  }),
}

const reducer = (state, action) => {
  const reducerAction = REDUCER_ACTIONS[action.type]
  return reducerAction ? reducerAction(state, action) : state
}

export default function useStepsReducer(initialState) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const updateCurrentStep = ({ src, id }) => {
    dispatch({ type: ACTIONS.UPDATE_CURRENT_STEP, payload: { src, id } })
  }

  const addStep = ({ src, id }) => {
    dispatch({ type: ACTIONS.ADD_STEP, payload: { src, id } })
  }

  return {
    state,
    updateCurrentStep,
    addStep,
  }
}
