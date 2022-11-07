import type { GlobalContextProps, GlobalContextProviderProps } from '@/context/GlobalContext'
import { createContext, useState } from 'react'

export const GlobalContext = createContext<GlobalContextProps>({
  visiblePageHeader: true,
  setVisiblePageHeader: () => {},
})

const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
  const [visiblePageHeader, setVisiblePageHeader] = useState(true)

  return (
    <GlobalContext.Provider
      value={{
        visiblePageHeader,
        setVisiblePageHeader,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider
