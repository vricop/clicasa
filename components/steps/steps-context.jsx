import { createContext, useContext, useEffect } from 'react'
import useStepsReducer from './steps-reducer'

const StepsContext = createContext()
const { Provider } = StepsContext
export const useStepsProvider = () => useContext(StepsContext)

export const StepsProvider = ({ children }) => {
  const { state, ...actions } = useStepsReducer({
    steps: [],
    currentStep: {},
  })

  useEffect(() => {
    if (state.steps.length >= 1) {
      actions.updateCurrentStep(state.steps[0])
    }
  }, [state.steps])

  return (
    <Provider
      value={{
        ...state,
        ...actions,
      }}>
      {children}
    </Provider>
  )
}
