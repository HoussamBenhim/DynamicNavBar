import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from './context'
import { links } from './data'

function SubMenu() {
  const { isSubMenuOpen, page, location } = useGlobalContext()
  const container = useRef(null)
  useEffect(() => {
    const { center, bottom } = location
    const submenu = container.current
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
  }, [location])
  return (
    <div
      className={`${isSubMenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      <div className='text-center mt-2'>Product</div>
      <div className='flex flex-row justify-between'>
        <div className='p-4 mt-2'>link 1</div>
        <div className='p-4 mt-2'>link 1</div>
        <div className='p-4 mt-2'>link 1</div>
      </div>
    </div>
  )
}

export default SubMenu

/*
.hero {
  position: relative;
  min-height: 100vh;
  margin-top: -5rem;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
}
*/
