import React from 'react'
import links from './data'
import { useGlobalContext } from './context'

function NavBar() {
  const { isSideBarOpen, toggelSideBar, openSubMenu, closeSubMenu } =
    useGlobalContext()
  const displaySubMenu = (e) => {
    const page = e.target.textContent
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = tempBtn.bottom - 3
    openSubMenu(page, { center, bottom })
    if (!e.target.classList.contains('hero-links')) {
      closeSubMenu()
    }
  }
  return (
    <div>
      {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
      <nav
        className='bg-transparent z-10 border-2 border-black'
        onMouseOver={(e) => displaySubMenu(e)}
      >
        <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 '>
          <div className='relative flex items-center justify-between h-16'>
            <div className='absolute inset-y-0 left-0 flex items-center sm:hidden '>
              {/* <!-- Mobile menu button--> */}
              <button
                type='button'
                className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                aria-controls='mobile-menu'
                aria-expanded='false'
                onClick={toggelSideBar}
              >
                <span className='sr-only'>Open main menu</span>
                {/* <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          --> */}
                <svg
                  className={`${
                    isSideBarOpen ? 'hidden h-6 w-6' : 'block h-6 w-6'
                  }`}
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
                {/* <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          --> */}
                <svg
                  className={`${
                    isSideBarOpen ? 'block h-6 w-6' : 'hidden h-6 w-6'
                  }`}
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-between '>
              <div className='flex-shrink-0 flex items-center'>
                <img
                  className='block lg:hidden h-8 w-auto'
                  src='https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500'
                  alt='Workflow'
                />
                <img
                  className='hidden lg:block h-8 w-auto'
                  src='https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=500'
                  alt='Workflow'
                />
              </div>
              <div className='hero-links  hidden sm:block sm:ml-6 '>
                <div className='flex space-x-10 '>
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  <a
                    href='#'
                    className='hero-links text-gray-900   px-3 py-2 rounded-md text-sm font-medium'
                    aria-current='page'
                    onMouseOver={(e) => openSubMenu(e)}
                  >
                    Products
                  </a>

                  <a
                    href='#'
                    className='hero-links text-gray-900  px-3 py-2 rounded-md text-sm font-medium'
                    onMouseOver={(e) => openSubMenu(e)}
                  >
                    Developers
                  </a>

                  <a
                    href='#'
                    className='hero-links text-gray-900  px-3 py-2 rounded-md text-sm font-medium'
                    onMouseOver={(e) => openSubMenu(e)}
                  >
                    Company
                  </a>
                </div>
              </div>
              <div className='hidden sm:block'>
                <button className='text-white bg-gray-900 hover:bg-gray-300 hover:text-gray-900 px-3 py-2 rounded-sm text-sm font-medium'>
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
