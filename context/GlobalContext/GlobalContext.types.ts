import type { Dispatch, ReactNode, SetStateAction } from 'react'

export type GlobalContextProps = {
  visiblePageHeader: boolean
  setVisiblePageHeader: Dispatch<SetStateAction<boolean>>
}

export type GlobalContextProviderProps = {
  children: ReactNode
}
