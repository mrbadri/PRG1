import React from "react";
import Logo from '@/public/assets/images/logo.svg'
import Image from "next/image";
import Routes from 'const/routes'
import CustomButton from 'components/button'
const Navigation = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
      <>
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3">
          <div className="w-full px-4 mx-auto flex flex-wrap lg:flex-row-reverse items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <a
                className="text-sm font-bold leading-relaxed inline-block py-2 whitespace-nowrap uppercase text-white"
                href="#pablo"
              >
                <Image src={Logo}/>
              </a>
              <button
                className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                Menu
              </button>
            </div>
            <div
              className={
                "lg:flex lg:flex-row-reverse justify-between flex-grow items-center" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:mx-auto">
                {Routes.map(item => (
                    <li className="nav-item group/nav" key={item.name}>
                  <a
                    className="pt-3 py-2 flex items-center text-xs first-letter:uppercase leading-snug text-dark hover:opacity-75"
                    href={item.route}
                  >
                    <span className="group-hover/nav:border-b-2 group-hover/nav:border-primary-500 group-hover/nav:text-primary-500 border-b-2 border-transparent" >{item.label}</span>
                  </a>
                </li>
                ))}
              </ul>
              <CustomButton className='shadow-md shadow-info-300 border-none' icon={<>Icon</>}><span className="text-white">My Account</span></CustomButton>
            </div>
          </div>
        </nav>
      </>
    );
}
export default Navigation;