import { Dispatch, SetStateAction } from 'react'

export type MobileMenuProps = {
  toggle: boolean
  setToggle: Dispatch<SetStateAction<boolean>>
}
