import { useEffect } from "react"
  
export const useAsync = (
  setLoading,
  asyncFunction,
  successFunction,
  errorFunction,
  dependencies = []
) => {
  useEffect(() => {
    setLoading(true)

    let isActive = true 

    asyncFunction().then(res => {
      if(isActive) successFunction && successFunction(res)
    }).catch(error => {
      if(isActive) errorFunction && errorFunction(error)
    }).finally(() => {
      setLoading(false)
    })

    return () => {
      isActive = false
    }
  }, dependencies)
}