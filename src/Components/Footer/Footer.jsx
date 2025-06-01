import React from 'react'
import { Link } from 'react-router-dom'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import x from '../../assets/x.png'
import email from '../../assets/email.png'
import google from '../../assets/google.png'
import app from '../../assets/apple.png'
import text from '../../assets/text.png'
import arrow from '../../assets/arrow.png'


function Footer() {


  return (
    <footer className='fixed bottom-0 right-[0.25px] bg-zinc-900 w-screen h-[500px]'>
        <div className='mx-10'>
            <div className='md:flex md:justify-between mt-[37px]'>
                <div className='md:mb-20 mx-10 my-[60px]'>
                    <a>
                        <img src={text} alt='text'/>
                    </a>
                </div>
            </div>
    <div className='mx-6 fixed bottom-[220px]'>
            {/* Top Section with Input and Arrow */}
      <div className="flex items-center gap-4 mb-4">
        <span className="text-gray-300 text-lg"></span>
        <input
          type="text"
          placeholder="Discover What’s New First!"
          className="bg-transparent border-none text-sm text-white outline-none flex-1"
        />
        <button className="bg-blue-900 fixed left-[310px] text-white w-[50px] h-8 rounded-3xl flex items-center justify-center">
          <a><img src={arrow} alt='arrow'/></a>
        </button>
      </div>
        {/* Line under the input */}
      <hr className="border-gray-300 mb-6 w-[289px] mx-3" />

         {/* Social Icons */}
      <div className="flex justify-center py-5 fixed left-[70px] gap-4">
        <a>
            <img src={facebook} alt="Facebook" className="w-8 h-8" />
        </a>
          <a>
            <img src={instagram} alt="Instagram" className="w-8 h-8" />
        </a>
          <a>
            <img src={x} alt="Twitter" className="w-8 h-8" />
        </a>
          <a>
            <img src={email} alt="Email" className="w-8 h-8" />
        </a>
      </div>
      </div>
            {/* grid Section with Links */}
            <div className='grid grid-cols-4 px-4 mr-72 sm:gap-0 sm:grid-cols-5'>
                <div>
                <h2 className='text-white font-md ml-[450px] fixed bottom-[380px]'>Products</h2>
                <ul className='text-white text-xs ml-[450px]'>
                    <li className='mb-4 text-nowrap fixed bottom-[336px]'>Floor Tiles</li>
                    <li className='mb-4 text-nowrap fixed bottom-[303px]'>Wall Tiles</li>
                    <li className='mb-4 text-nowrap fixed bottom-[270px]'>Residential Tiles</li>
                    <li className='mb-4 text-nowrap fixed bottom-[237px]'>Commercial Tiles</li>
                    <li className='mb-4 text-nowrap fixed bottom-[202px]'>Outer Tiles</li>
                </ul>
            </div>

            <div>
                <h2 className='text-white font-md ml-[450px] fixed bottom-[380px]'>Company</h2>
                <ul className='text-white text-xs ml-[450px]'>
                    <li className='mb-4 text-nowrap fixed bottom-[336px]'>About Us</li>
                    <li className='mb-4 text-nowrap fixed bottom-[303px]'>Privacy Policy</li>
                    <li className='mb-4 text-nowrap fixed bottom-[270px]'>Terms & Conditions</li>
                    <li className='mb-4 text-nowrap fixed bottom-[237px]'>Contact Us</li>
                </ul>
            </div>

            <div>
                <h2 className='text-white font-md ml-[450px] fixed bottom-[380px]'>Quick Links</h2>
                <ul className='text-white text-xs ml-[450px]'>
                    <li className='mb-4 text-nowrap fixed bottom-[336px]'>Catalogue</li>
                    <li className='mb-4 text-nowrap fixed bottom-[303px]'>where To Buy</li>
                    <li className='mb-4 text-nowrap fixed bottom-[270px]'>Tile Visualizer</li>
                    <li className='mb-4 text-nowrap fixed bottom-[237px]'>Virtual Showroom</li>
                </ul>
            </div>

            <div>
                <h2 className='text-white font-md ml-[450px] fixed bottom-[380px]'>Download App</h2>
                <ul className='text-white text-xs ml-[450px]'>
                    <a href="https://play.google.com/store/games?hl=en_IN" target="_blank" rel="noopener noreferrer" >
                        <img src={google} alt="Google Play" className="w-[120px] h-10 fixed bottom-[320px]" />
                    </a>
                     <a href="https://www.apple.com/in/app-store/" target="_blank" rel="noopener noreferrer">
                        <img src={app} alt="App Store" className="w-[120px] h-10 fixed bottom-[260px]" />
                    </a>
                </ul>
            </div>
            </div>
        </div>
         {/* Line under the input */}
      <hr className="border-gray-500 fixed bottom-[60px] w-full" />
      <p className='text-white mt-[223px] font-sans justify-center items-between text-xs'>Kajaria Ceramics Limited © All Rights Reserved | Disclaimer | Caution Notice </p>
    </footer>
  )
}

export default Footer