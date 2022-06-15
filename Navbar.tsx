import Link from 'next/link'
import React from 'react'

import Image from 'next/image';

import { FaDiscord, FaEye, FaGreaterThan, FaHeart, FaInstagram, FaMoon, FaRedditAlien, FaSearch, FaTiktok, FaTwitter, FaUser, FaYoutube } from 'react-icons/fa';
import { ImGift, ImMusic } from 'react-icons/im';
import { BsMouse2Fill } from 'react-icons/bs';
import { GiVirtualMarker } from 'react-icons/gi';
import { BiHomeHeart, BiWorld, BiCollection } from 'react-icons/bi';
import {
  MdSportsFootball,
  MdBusinessCenter,
  MdOutlinePhotoCamera,
} from 'react-icons/md';
import { ImCompass2 } from 'react-icons/im'
import { FiSettings } from 'react-icons/fi'
import { AiOutlineRight } from 'react-icons/ai';
import { CgLoadbarSound } from 'react-icons/cg'
import { GrResources } from 'react-icons/gr'
import Web3 from 'web3';
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider';


const provider_options = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: '0x79CaD4751101974321D9924a7854a365Fe8FEA4d'
    },
  },
}

if (typeof window !== "undefined") {
  const web3modal = new Web3Modal({
    network: 'mainnet',
    cacheProvider: true,
    providerOptions: provider_options,
  })
}

if (typeof window !== 'undefined') {
  const sidebar: any = document.getElementById('sidebar')
  document.onclick = function (e: any) {
    if (e.target.id !== 'wallet' && e.target.id !== 'sidebar') {
      sidebar.classList.remove('active')
    }
  }
}

const Navbar = () => {

  return (

    
    <div>
      <header>
        {/* Navbar for  mobile device */}
        <div className='sm:hidden flex w-full justify-between items-center shadow-md shadow-black p-3 bg-white z-50' >
          <p className='text-primary logo font-bold'>SmartXNFT</p>

          <div className='sm:hidden  flex justify-between items-center'>
            <FaSearch className='mr-6' />
            <div id='toggle' onClick={()=>{
               const toggle: any = document.getElementById('toggle')
               toggle.classList.toggle('active')
            }}>
              <div className="first"></div>
              <div className="second"></div>
              <div className="third"></div>
            </div>
          </div>
        </div>

        {/* sidebar for mobile device */}
        <div id="sidebar2" className=' w-full sm:hidden  bg-white'>
          <aside className='mt-16  border-black'
          >
            <div className=' px-6'>
              <div style={{ border: '0.5px solid rgb(228, 223, 223)', borderRadius: '10px', marginTop: '40px' }}>

                <div className=' flex items-center justify-between p-3'>
                  <div className='flex items-center'>
                    <ImCompass2 className='text-2xl' />
                    <p className='ml-3'>Explore</p>
                  </div>
                  <div>
                    <AiOutlineRight />
                  </div>
                </div>
                <div className=' flex items-center justify-between p-3'>
                  <div className='flex items-center'>
                    <CgLoadbarSound className='text-2xl border border-black rounded-full' />
                    <p className='ml-3'>Status</p>
                  </div>
                  <div>
                    <AiOutlineRight />
                  </div>
                </div>
                <div className=' flex items-center justify-between p-3'>
                  <div className='flex items-center'>
                    <GrResources className='text-2xl' />
                    <p className='ml-3'>Resources</p>
                  </div>
                  <div>
                    <AiOutlineRight />
                  </div>
                </div>
                <div className=' flex items-center justify-between p-3'>
                  <div className='flex items-center'>
                    <FaMoon className='text-2xl' />
                    <p className='ml-3'>Night Mode</p>

                  </div>
                  <div>
                    <AiOutlineRight />
                  </div>
                </div>


              </div>
            </div>
          </aside>
        </div>


        {/* Navbar for larger device */}

        <div className=' hidden fixed w-full  sm:flex justify-between items-center shadow-md shadow-black p-3 bg-white z-50 ' >
          <p className='text-primary logo font-bold'>SmartXNFT</p>


          <div className='flex items-center border border-gray-400 p-2 w-2/5 rounded-md'>
            <FaSearch className='text-gray-400' />
            <input className='w-full ml-3 outline-none' placeholder='Search..' type="text" />
          </div>
          <div className='flex justify-end items-center '>
            <div className='mx-2 dropdown'>
              <button className='dropbtn  font-bold  text-gray-700 hover:text-black border-none'>Explore</button>
              <div className='dropdown-content'>
                <div className='bg-white round'>
                  <div>
                    <Link href='#'>
                      <a href='#'>
                        <div className='flex items-center'>
                          <ImGift className='text-primary  ' />
                          <p className='ml-2 '>All NFTs</p>
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link href='#'>
                      <a href='#'>
                        <div className='flex items-center'>
                          <BiHomeHeart className='text-primary' />
                          <p className='ml-2'>Arts</p>
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link href='#'>
                      <a href='#'>
                        <div className='flex items-center'>
                          <BiCollection className='text-primary' />
                          <p className='ml-2'>Collectibles</p>
                        </div>
                      </a>
                    </Link>
                  </div>

                  <div>
                    <Link href='#'>
                      <a href='#'>
                        <div className='flex items-center'>
                          <BiWorld className='text-primary' />
                          <p className='ml-2'>Domain Names</p>
                        </div>
                      </a>
                    </Link>
                  </div>

                  <div>
                    <Link href='#'>
                      <a href='#'>
                        <div className='flex items-center'>
                          <ImMusic className='text-primary' />
                          <p className='ml-2'>Music</p>
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link href='#'>
                      <a href='#'>
                        <div className='ml-0 flex items-center'>
                          <MdOutlinePhotoCamera className='text-primary text-xl' />
                          <p className='ml-2'>Photography</p>
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link href='#'>
                      <a href='#'>
                        <div className='flex items-center'>
                          <MdSportsFootball className='text-primary' />
                          <p className='ml-2'>Sports</p>
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link href='#'>
                      <a href='#'>
                        <div className='flex items-center'>
                          <MdBusinessCenter className='text-primary' />
                          <p className='ml-2'>Trading Cards</p>
                        </div>
                      </a>
                    </Link>
                  </div>

                  <div>
                    <Link href='#'>
                      <a href='#'>
                        <div className='flex items-center'>
                          <BsMouse2Fill className='text-primary' />
                          <p className='ml-2'>Utility</p>
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link href='#'>
                      <a href='#'>
                        <div className='flex items-center'>
                          <GiVirtualMarker className='text-primary' />
                          <p className='ml-2'>Virtual Worlds</p>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
            <div className='mx-2 dropdown'>
              <button className='dropbtn  font-bold  text-gray-700 hover:text-black border-none'>Status</button>
              <div className=' dropdown-content '>
                <div className='bg-white round'>
                  <a href='#'>Ranking</a>
                  <a href='#'>Activities</a>
                </div>
              </div>
            </div>
            <div className='mx-2 dropdown'>
              <button className='dropbtn  font-bold  text-gray-700 hover:text-black border-none'>Resourse</button>
              <div>
                <div className='dropdown-content' >

                  <div className='bg-white round'>
                    <Link href='#'>
                      <a href='#'>Help Center</a>
                    </Link>
                    <Link href='#'>
                      <a href='#'>Platform status</a>
                    </Link>
                    <Link href='#'>
                      <a href='#'>Patterns</a>
                    </Link>
                    <Link href='#'>
                      <a href='#'>Gas-Free Marketplace</a>
                    </Link>
                    <Link href='#'>
                      <a href='#'>Taxes</a>
                    </Link>
                    <Link href='#'>
                      <a href='#'>Docs</a>
                    </Link>
                    <Link href='#'>
                      <a href='#'>Newsletter</a>
                    </Link>

                    <Link href='#'>
                      <a className='border border-b-gray-300' href='#'>Blogs</a>
                    </Link>

                    <span className='flex pl-2 py-3'>

                      <a style={{ padding: '0px 4px', border: 'none', fontSize: '22px', color: 'gray' }} href='#'>
                        <FaTwitter />
                      </a>


                      <a style={{ padding: '0px 4px', border: 'none', fontSize: '22px', color: 'gray' }} href='#'>
                        <FaInstagram />
                      </a>
                      <a style={{ padding: '0px 4px', border: 'none', fontSize: '22px', color: 'gray' }} href='#'>
                        <FaDiscord />
                      </a>
                      <a style={{ padding: '0px 4px', border: 'none', fontSize: '22px', color: 'gray' }} href='#'>
                        <FaYoutube />
                      </a>
                      <a style={{ padding: '0px 4px', border: 'none', fontSize: '22px', color: 'gray' }} href='#'>
                        <FaTiktok />
                      </a>
                      <a style={{ padding: '0px 4px', border: 'none', fontSize: '22px', color: 'gray' }} href='#'>
                        <FaRedditAlien />
                      </a>
                    </span>
                  </div>

                </div>
              </div>
            </div>
            <div className='mx-2'>
              <button className='dropbtn  font-bold  text-gray-700 hover:text-black border-none'>Creat</button>
            </div>
            <div className='mx-2 dropdown'>
              <button className='dropbtn  font-bold  text-gray-700 hover:text-black border-none'>
                <svg
                  stroke='currentColor'
                  fill='none'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='cursor-pointer  hover:text-black'
                  height='24'
                  width='24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'></path>
                  <circle cx='12' cy='7' r='4'></circle>
                </svg>
              </button>
              <div style={{ padding: '19px', right: '-25px' }} className='dropdown-content right-0'>
                <div className='bg-white round'>
                  <div>
                    <Link href='#'>
                      <a href='#'>
                        <div className='flex items-center'>
                          <FaUser className='text-primary  ' />
                          <p className='ml-2'>Profile</p>
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link href='#'>
                      <a href='#'>
                        <div className='flex items-center'>
                          <FaHeart className='text-primary' />
                          <p className='ml-2'>Favorites</p>
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link href='#'>
                      <a href='#'>
                        <div className='flex items-center'>
                          <FaEye className='text-primary' />
                          <p className='ml-2'>Watchlist</p>
                        </div>
                      </a>
                    </Link>
                  </div>

                  <div>
                    <Link href='#'>
                      <a href='#'>
                        <div className='flex items-center'>
                          <BiWorld className='text-primary' />
                          <p className='ml-2'>My collections</p>
                        </div>
                      </a>
                    </Link>
                  </div>

                  <div>
                    <Link href='#'>
                      <a href='#'>
                        <div className='flex items-center'>
                          <FiSettings className='text-primary' />
                          <p className='ml-2'>Setting</p>
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link href='#'>
                      <a href='#'>
                        <div className='ml-0 flex items-center'>
                          <FaMoon className='text-primary text-xl' />
                          <p className='ml-2'>Night Mode</p>


                        </div>
                      </a>
                    </Link>
                  </div>
                </div>


              </div>
            </div>
            <div className='mx-2 dropdown'>
              <button className='flex items-center dropbtn  font-bold  text-gray-700 hover:text-black border-none'>
                <svg

                onClick={()=>{
                    const sidebar: any = document.getElementById('sidebar')
                    sidebar.classList.toggle('active')
                  
                }}
                  id='wallet'
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0.3'
                  viewBox='0 0 24 24'
                  height='24'
                  width='24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M20 3H5C3.346 3 2 4.346 2 6v12c0 1.654 1.346 3 3 3h15c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM5 19c-.552 0-1-.449-1-1V6c0-.551.448-1 1-1h15v3h-6c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h6.001v3H5zm15-9v4h-6v-4h6z'></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* sidebar for larger device */}



      <div id="sidebar">
        <aside>
          <div className='flex items-center ml-4 mt-5'>

            <p>
              <FaUser className='rounded-full border border-gray-800 bg-black p-1 text-3xl text-white' />
            </p>
            <p className='ml-2 text-lg font-extrabold '>My Wallet</p>
          </div>
          <hr className='my-6' />
          <div className=' px-6'>
            <p className='my-6 text-md text-gray-600'>
              Connect with one of our  <br /> available{' '}
              <span className='font-extrabold text-primary '>wallet</span>{' '}
              providers or create a new one.
            </p>

            <div style={{ border: '0.5px solid rgb(228, 223, 223)', borderRadius: '10px', marginTop: '40px' }}>
              <div onClick={async () => {
                
                const provider = await web3modal.connect();
                const web3 = new Web3(provider)
           
              }} className='flex items-center    wallets justify-between'>
                <div className=' flex items-center  px-3 py-4 text-md font-extrabold '>
                  <Image
                    src='/metamask-fox.svg'
                    height={25}
                    width={25}
                    alt='metamask'
                  ></Image>
                  <p className='ml-3'>Metamask</p>
                </div>
                <p className='relative right-3 text-xs text-white rounded-md py-1 px-2 bg mr-2'>Popular</p>
              </div>
              <div className=' flex items-center    px-3 py-4 text-md font-bold wallets'>
                <Image
                  src='/walletlink.webp'
                  height={25}
                  width={25}
                  alt='metamask'
                ></Image>
                <p className='ml-3'>Coinbase Wallet</p>
              </div>
              <div className=' flex items-center   px-3 py-4 text-md font-bold wallets'>
                <Image
                  src='/walletconnect.webp'
                  height={25}
                  width={25}
                  alt='metamask'
                ></Image>
                <p className='ml-3'> WalletConnect</p>
              </div>
              <div className='flex items-center    wallets justify-between'>
                <div className=' flex items-center px-3 py-4 text-md font-bold '>
                  <Image
                    src='/phantom.svg'
                    height={25}
                    width={25}
                    alt='metamask'
                  ></Image>
                  <p className='ml-3'>Phantom</p>
                </div>
                <p className='relative right-3  text-xs text-white rounded-md py-1 px-2 bg mr-2'>Popular</p>
              </div>
              <div className=' text-center   px-3 py-4 text-md font-bold text-gray-500 '>

                <p className='ml-3'>Show more option</p>
              </div>
            </div>
          </div>
        </aside>
      </div>








    </div>
  )
}

export default Navbar