import React from 'react'

const Footer = () => {
  return (
    <div id='footer'>
        <footer className="footer bg-white relative pt-1 border-b-2 border-blue-700">
      <div className="container mx-auto px-6">

        <div className="sm:flex sm:mt-8">
          <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mb-2">Debian India</span>
              <span className="my-2"><a href="https://debian.org.in/" className="text-rose-800  text-md hover:text-rose-600">Website</a></span>
              <span className="my-2"><a href="mailto:debian-dug-in@lists.debian.org" className="text-rose-800  text-md hover:text-rose-600">Email</a></span>
              <span className="my-2"><a href="https://matrix.to/#/#debian-in:matrix.debian.social" className="text-rose-800  text-md hover:text-rose-600">Matrix</a></span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">Sait</span>
              <span className="my-2"><a href="https://sait-opal.vercel.app/" className="text-rose-800 text-md hover:text-rose-600">Website</a></span>
              {/* <span className="my-2"><a href="#" className="text-rose-800  text-md hover:text-rose-600">link 1</a></span>
              <span className="my-2"><a href="#" className="text-rose-800 text-md hover:text-rose-600">link 1</a></span> */}
            </div>
            {/* <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2"></span>
              <span className="my-2"><a href="#" className="text-rose-800  text-md hover:text-rose-600">link 1</a></span>
              <span className="my-2"><a href="#" className="text-rose-800  text-md hover:text-rose-600">link 1</a></span>
              <span className="my-2"><a href="#" className="text-rose-800  text-md hover:text-rose-600">link 1</a></span>
            </div> */}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-rose-800 font-bold mb-2">
                ©MiniDebConf Kochi'23
            </p>
          </div>
        </div>
      </div>
    </footer></div>
  )
}

export default Footer