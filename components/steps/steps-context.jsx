import { createContext, useContext, useRef } from 'react'

const StepsContext = createContext()
const { Provider } = StepsContext
export const useStepsProvider = () => useContext(StepsContext)

export const StepsProvider = ({ children }) => {
  const imageRef = useRef(null)
  const stepsRef = useRef(null)

  const updateCurrentActiveStep = ({ currentTarget: step }) => {
    const image = step.querySelector('.step__thumbnail img')

    // 1. Change the image
    imageRef.current.src = image.src

    // 2. Add `data-active` to the current step
    stepsRef.current.querySelectorAll('.step').forEach(currentStep => {
      if (currentStep.id === step.id) {
        currentStep.setAttribute('data-active', '')
      } else {
        currentStep.removeAttribute('data-active')
      }
    })
  }

  return (
    <Provider value={{ updateCurrentActiveStep, stepsRef, imageRef }}>
      {children}
    </Provider>
  )
}
