import { GlobalContext } from '@/context/GlobalContext'
import { useContext } from 'react'

const useGlobalContext = () => useContext(GlobalContext)

export default useGlobalContext
