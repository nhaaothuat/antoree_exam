

const Navbar = () => {
     return (
          <header className="bg-white">
               <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                         <div className="md:flex md:items-center md:gap-12">
                              <a className="block text-teal-600" href="/">
                                   <span className="sr-only">Home</span>
                                   <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M33.724 36.5809C37.7426 32.5622 40.0003 27.1118 40.0003 21.4286C40.0003 15.7454 37.7426 10.2949 33.724 6.27629C29.7054 2.25765 24.2549 1.02188e-06 18.5717 0C12.8885 -1.02188e-06 7.43807 2.25764 3.41943 6.27628L10.4905 13.3473C11.6063 14.4631 13.4081 14.4074 14.8276 13.7181C15.9836 13.1568 17.2622 12.8571 18.5717 12.8571C20.845 12.8571 23.0252 13.7602 24.6326 15.3677C26.2401 16.9751 27.1431 19.1553 27.1431 21.4286C27.1431 22.7381 26.8435 24.0167 26.2822 25.1727C25.5929 26.5922 25.5372 28.394 26.6529 29.5098L33.724 36.5809Z" fill="#297AFF"></path>
                                        <path d="M30 40H19.5098C17.9943 40 16.5408 39.398 15.4692 38.3263L1.67368 24.5308C0.60204 23.4592 0 22.0057 0 20.4902V10L30 40Z" fill="#34C2FF"></path>
                                        <path d="M10.7143 39.9999H4.28571C1.91878 39.9999 0 38.0812 0 35.7142V29.2856L10.7143 39.9999Z" fill="#34C2FF"></path>
                                   </svg>
                              </a>
                         </div>

                         <div className="hidden md:block">
                              <nav aria-label="Global">
                                   <ul className="flex items-center gap-6 text-sm">
                                        <li>
                                             <a className="text-gray-500 transition hover:text-gray-500/75" href="/"> Home </a>
                                        </li>

                                        <li>
                                             <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Careers </a>
                                        </li>

                                        <li>
                                             <a className="text-gray-500 transition hover:text-gray-500/75" href="/history"> History </a>
                                        </li>


                                        <li>
                                             <a className="text-gray-500 transition hover:text-gray-500/75" href="/search"> Find </a>
                                        </li>
                                   </ul>
                              </nav>
                         </div>

                         <div className="flex items-center gap-4">
                              <div className="sm:flex sm:gap-4">
                                   <a
                                        className="rounded-md bg-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                                        href="#"
                                   >
                                        Login
                                   </a>

                                   <div className="hidden sm:flex">
                                        <a
                                             className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-blue-500"
                                             href="#"
                                        >
                                             Register
                                        </a>
                                   </div>
                              </div>

                              <div className="block md:hidden">
                                   <button
                                        className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                                   >
                                        <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             className="size-5"
                                             fill="none"
                                             viewBox="0 0 24 24"
                                             stroke="currentColor"
                                             strokeWidth="2"
                                        >
                                             <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>
          </header>
     )
}

export default Navbar
