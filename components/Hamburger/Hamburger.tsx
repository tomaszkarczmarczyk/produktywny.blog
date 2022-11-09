import MobileMenu from '@/components/MobileMenu'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'

const Hamburger = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <button onClick={() => setToggle(!toggle)} className="focus-2 md:hidden">
        {toggle ? <XMarkIcon className="h-10 w-10 text-white" /> : <Bars3Icon className="h-10 w-10 text-white" />}
      </button>

      {toggle && <MobileMenu toggle={toggle} setToggle={setToggle} />}
    </>
  )
}

export default Hamburger
