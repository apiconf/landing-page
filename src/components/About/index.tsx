import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useIsVisible } from "../../hooks";
import aboutStyles from "./about.module.css";

const About = () => {
  const h2Ref = useRef(null);
  const subtitleRef = useRef(null);
  const row2Ref = useRef(null);
  const isH2Visible = useIsVisible(h2Ref);
  const isSubtitleVisible = useIsVisible(subtitleRef);
  const isRow2Visible = useIsVisible(row2Ref);
  const [endpointIndex, setEndpointIndex] = useState(1);
  const [subsectionIndex, _setSubsectionIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setEndpointIndex(prevIndex => (prevIndex % 4) + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [endpointIndex]);

  return (
    <section id="about" className={aboutStyles.aboutCont}>
      <div className={`${aboutStyles.row_one} flex items-center`}>
        <div className={aboutStyles.headerCont}>
          <motion.h2
            ref={h2Ref}
            className={aboutStyles.head1}
            initial={{ y: 32 }}
            animate={{ y: isH2Visible ? 0 : 32 }}
            transition={{
              duration: 1,
              ease: [0, 0, 0.25, 1],
            }}
          >
            At API Conf 2024, we're creating a melting pot of diverse ideas,
            backgrounds, and aspirations.
          </motion.h2>
        </div>
        <div className={aboutStyles.headerCont}>
          <motion.p
            ref={subtitleRef}
            className={aboutStyles.para1}
            initial={{ y: 32 }}
            animate={{ y: isSubtitleVisible ? 0 : 32 }}
            transition={{
              duration: 1,
              ease: [0, 0, 0.25, 1],
              delay: 0.2,
            }}
          >
            Join us at API Conf Lagos 2024 to network with industry leaders, engage in hands-on learning through workshops and live 
            demos, and explore innovative solutions driven by APIs across various sectors, including fintech and health tech. This event
            is an excellent opportunity for tech professionals to connect with top minds, gain practical skills
            and discover the latest advancements in API technology - all in one dynamic setting.
          </motion.p>
        </div>
      </div>
      <motion.div
        ref={row2Ref}
        className={`${aboutStyles.row_two} ${aboutStyles.row_two_p}`}
        initial={{ y: 32 }}
        animate={{ y: isRow2Visible ? 0 : 32 }}
        transition={{
          duration: 1,
          ease: [0, 0, 0.25, 1],
          delay: 0.4,
        }}
      >
        <div
          className={`${aboutStyles.row_two_col} ${aboutStyles.row_two_col_one}`}
        >
          <div className={aboutStyles.buttons}>
            <div
              className={`group ${aboutStyles.button} ${aboutStyles.custom_transition} hover:bg-white focus:bg-white ${subsectionIndex === 1 ? 'bg-white' : ''} shadow-sm`}
              onClick={() => setEndpointIndex(1)}
            >
              <div
                className={`${aboutStyles.buttonIcons} ${aboutStyles.custom_transition} group-hover:bg-[#E1EF9A] group-hover:p-1 group-focus:bg-[#E1EF9A]  ${subsectionIndex === 1 ? 'bg-[#E1EF9A] p-1' : ''}`}
              >
                <svg
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={`{${aboutStyles.custom_transition} fill-[#D9D9D9] group-hover:fill-[#ffffff] group-focus:fill-[#ffffff]  ${subsectionIndex === 1 ? 'fill-[#ffffff]' : ''}`}
                    d="M8.50002 10.6667C8.50002 9.95946 8.78097 9.28119 9.28107 8.78109C9.78117 8.28099 10.4594 8.00004 11.1667 8.00004C11.8739 8.00004 12.5522 8.28099 13.0523 8.78109C13.5524 9.28119 13.8334 9.95946 13.8334 10.6667C13.8334 11.374 13.5524 12.0522 13.0523 12.5523C12.5522 13.0524 11.8739 13.3334 11.1667 13.3334C10.4594 13.3334 9.78117 13.0524 9.28107 12.5523C8.78097 12.0522 8.50002 11.374 8.50002 10.6667ZM11.1667 5.33337C9.7522 5.33337 8.39564 5.89528 7.39545 6.89547C6.39526 7.89566 5.83335 9.25222 5.83335 10.6667C5.83335 12.0812 6.39526 13.4377 7.39545 14.4379C8.39564 15.4381 9.7522 16 11.1667 16C12.5812 16 13.9377 15.4381 14.9379 14.4379C15.9381 13.4377 16.5 12.0812 16.5 10.6667C16.5 9.25222 15.9381 7.89566 14.9379 6.89547C13.9377 5.89528 12.5812 5.33337 11.1667 5.33337ZM21.8334 12C21.8334 11.6464 21.9738 11.3073 22.2239 11.0572C22.4739 10.8072 22.8131 10.6667 23.1667 10.6667C23.5203 10.6667 23.8594 10.8072 24.1095 11.0572C24.3595 11.3073 24.5 11.6464 24.5 12C24.5 12.3537 24.3595 12.6928 24.1095 12.9428C23.8594 13.1929 23.5203 13.3334 23.1667 13.3334C22.8131 13.3334 22.4739 13.1929 22.2239 12.9428C21.9738 12.6928 21.8334 12.3537 21.8334 12ZM23.1667 8.00004C22.1058 8.00004 21.0884 8.42147 20.3383 9.17161C19.5881 9.92176 19.1667 10.9392 19.1667 12C19.1667 13.0609 19.5881 14.0783 20.3383 14.8285C21.0884 15.5786 22.1058 16 23.1667 16C24.2276 16 25.245 15.5786 25.9951 14.8285C26.7453 14.0783 27.1667 13.0609 27.1667 12C27.1667 10.9392 26.7453 9.92176 25.9951 9.17161C25.245 8.42147 24.2276 8.00004 23.1667 8.00004ZM3.16669 22C3.16669 20.16 4.66002 18.6667 6.50002 18.6667H15.8334C17.6734 18.6667 19.1667 20.16 19.1667 22V22.128C19.1646 22.2252 19.1575 22.3223 19.1454 22.4187C19.1219 22.6524 19.0818 22.8841 19.0254 23.112C18.8466 23.85 18.525 24.5457 18.0787 25.16C16.948 26.7147 14.8414 28 11.1667 28C7.49202 28 5.38535 26.7147 4.25469 25.16C3.67 24.3528 3.30269 23.4088 3.18802 22.4187C3.1773 22.3212 3.17019 22.2234 3.16669 22.1254V22.0827V22ZM5.83335 22.0694C5.8444 22.2096 5.8667 22.3487 5.90002 22.4854C5.97202 22.7867 6.11869 23.1894 6.41202 23.592C6.94535 24.328 8.17202 25.3334 11.1667 25.3334C14.1587 25.3334 15.3854 24.328 15.9214 23.592C16.2441 23.1448 16.4437 22.6207 16.5 22.072V22C16.5 21.8232 16.4298 21.6537 16.3048 21.5286C16.1797 21.4036 16.0102 21.3334 15.8334 21.3334H6.50002C6.32321 21.3334 6.15364 21.4036 6.02862 21.5286C5.90359 21.6537 5.83335 21.8232 5.83335 22V22.0694ZM23.164 26.6667C22.3271 26.675 21.4921 26.5855 20.676 26.4C21.1636 25.6303 21.5095 24.7796 21.6974 23.888C22.1107 23.9574 22.596 24 23.164 24C25.5374 24 26.4387 23.2747 26.7907 22.8347C26.9864 22.5911 27.1151 22.3006 27.164 21.992V21.9787C27.1585 21.8056 27.0858 21.6415 26.9614 21.521C26.8369 21.4006 26.6705 21.3333 26.4974 21.3334H21.796C21.6909 20.3791 21.357 19.4643 20.8227 18.6667H26.5C28.34 18.6667 29.8334 20.16 29.8334 22V22.0454C29.831 22.1283 29.8248 22.211 29.8147 22.2934C29.7088 23.1003 29.3842 23.863 28.876 24.4987C27.892 25.7254 26.1294 26.6667 23.1667 26.6667"
                  />
                </svg>
              </div>
              <span
                className={`${aboutStyles.buttonText} ${aboutStyles.custom_transition} group-hover:text-[#1F1F1F] group-focus:text-[#1F1F1F]  ${subsectionIndex === 1 ? 'text-[#1F1F1F]' : ''}`}
              >
                People
              </span>
            </div>
            <div
              className={`group ${aboutStyles.button} ${aboutStyles.custom_transition}`}
              // hover:bg-white focus:bg-white
            >
              <div
                className={`${aboutStyles.buttonIcons} ${aboutStyles.custom_transition}`}
                // group-hover:bg-[#E1EF9A] group-hover:p-1 group-focus:bg-[#E1EF9A]
              >
                <svg
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={`{${aboutStyles.custom_transition} stroke-[#D9D9D9]`}
                    // group-hover:stroke-[#ffffff] group-focus:stroke-[#ffffff]
                    d="M11.1666 9.66671C11.1666 11.0812 11.7285 12.4378 12.7287 13.4379C13.7289 14.4381 15.0855 15 16.5 15C17.9145 15 19.271 14.4381 20.2712 13.4379C21.2714 12.4378 21.8333 11.0812 21.8333 9.66671C21.8333 8.25222 21.2714 6.89567 20.2712 5.89547C19.271 4.89528 17.9145 4.33337 16.5 4.33337C15.0855 4.33337 13.7289 4.89528 12.7287 5.89547C11.7285 6.89567 11.1666 8.25222 11.1666 9.66671ZM3.83331 23C3.83331 24.4145 4.39522 25.7711 5.39541 26.7713C6.3956 27.7715 7.75216 28.3334 9.16665 28.3334C10.5811 28.3334 11.9377 27.7715 12.9379 26.7713C13.9381 25.7711 14.5 24.4145 14.5 23C14.5 21.5856 13.9381 20.229 12.9379 19.2288C11.9377 18.2286 10.5811 17.6667 9.16665 17.6667C7.75216 17.6667 6.3956 18.2286 5.39541 19.2288C4.39522 20.229 3.83331 21.5856 3.83331 23ZM18.5 23C18.5 24.4145 19.0619 25.7711 20.0621 26.7713C21.0623 27.7715 22.4188 28.3334 23.8333 28.3334C25.2478 28.3334 26.6044 27.7715 27.6045 26.7713C28.6047 25.7711 29.1666 24.4145 29.1666 23C29.1666 21.5856 28.6047 20.229 27.6045 19.2288C26.6044 18.2286 25.2478 17.6667 23.8333 17.6667C22.4188 17.6667 21.0623 18.2286 20.0621 19.2288C19.0619 20.229 18.5 21.5856 18.5 23Z"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span
                className={`${aboutStyles.buttonText} ${aboutStyles.custom_transition}`}
                // group-hover:text-[#1F1F1F] group-focus:text-[#1F1F1F]
              >
                <span>Colle</span>
                <span className="hidden sm:block">ctions</span>
                <span className="block sm:hidden">...</span>
              </span>
            </div>
            <div
              className={`group ${aboutStyles.button} ${aboutStyles.custom_transition}`}
              // hover:bg-white focus:bg-white
            >
              <div
                className={`${aboutStyles.buttonIcons} ${aboutStyles.custom_transition}`}
                // group-hover:bg-[#E1EF9A] group-hover:p-1 group-focus:bg-[#E1EF9A]
              >
                <svg
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={`{${aboutStyles.custom_transition} stroke-[#D9D9D9]`}
                    // group-hover:stroke-[#ffffff] group-focus:stroke-[#ffffff]
                    d="M11.1666 9.66671C11.1666 11.0812 11.7285 12.4378 12.7287 13.4379C13.7289 14.4381 15.0855 15 16.5 15C17.9145 15 19.271 14.4381 20.2712 13.4379C21.2714 12.4378 21.8333 11.0812 21.8333 9.66671C21.8333 8.25222 21.2714 6.89567 20.2712 5.89547C19.271 4.89528 17.9145 4.33337 16.5 4.33337C15.0855 4.33337 13.7289 4.89528 12.7287 5.89547C11.7285 6.89567 11.1666 8.25222 11.1666 9.66671ZM3.83331 23C3.83331 24.4145 4.39522 25.7711 5.39541 26.7713C6.3956 27.7715 7.75216 28.3334 9.16665 28.3334C10.5811 28.3334 11.9377 27.7715 12.9379 26.7713C13.9381 25.7711 14.5 24.4145 14.5 23C14.5 21.5856 13.9381 20.229 12.9379 19.2288C11.9377 18.2286 10.5811 17.6667 9.16665 17.6667C7.75216 17.6667 6.3956 18.2286 5.39541 19.2288C4.39522 20.229 3.83331 21.5856 3.83331 23ZM18.5 23C18.5 24.4145 19.0619 25.7711 20.0621 26.7713C21.0623 27.7715 22.4188 28.3334 23.8333 28.3334C25.2478 28.3334 26.6044 27.7715 27.6045 26.7713C28.6047 25.7711 29.1666 24.4145 29.1666 23C29.1666 21.5856 28.6047 20.229 27.6045 19.2288C26.6044 18.2286 25.2478 17.6667 23.8333 17.6667C22.4188 17.6667 21.0623 18.2286 20.0621 19.2288C19.0619 20.229 18.5 21.5856 18.5 23Z"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span
                className={`${aboutStyles.buttonText} ${aboutStyles.custom_transition}`}
                // group-hover:text-[#1F1F1F] group-focus:text-[#1F1F1F]
              >
                APIs
              </span>
            </div>
            <div 
              className={`group ${aboutStyles.button} ${aboutStyles.custom_transition}`}
            // hover:bg-white focus:bg-white
            >
              
              <div
                className={`${aboutStyles.buttonIcons} ${aboutStyles.custom_transition} `}
                // group-hover:bg-[#E1EF9A] group-hover:p-1 group-focus:bg-[#E1EF9A]
              >
                <svg
                  className={`{${aboutStyles.custom_transition} fill-[#D9D9D9]`}
                  // group-hover:fill-[#ffffff] group-focus:fill-[#ffffff]
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  text-lg sm:
                  <path d="M18.18 4.00001C11.3933 3.81335 5.83333 9.26668 5.83333 16H3.44667C2.84667 16 2.55333 16.72 2.98 17.1333L6.7 20.8667C6.96667 21.1333 7.38 21.1333 7.64667 20.8667L11.3667 17.1333C11.4588 17.0394 11.5211 16.9202 11.5456 16.7909C11.5701 16.6616 11.5558 16.5279 11.5045 16.4067C11.4531 16.2855 11.3671 16.1822 11.2571 16.1098C11.1472 16.0374 11.0183 15.9992 10.8867 16H8.5C8.5 10.8 12.74 6.60001 17.9667 6.66668C22.9267 6.73335 27.1 10.9067 27.1667 15.8667C27.2333 21.08 23.0333 25.3333 17.8333 25.3333C15.6867 25.3333 13.7 24.6 12.1267 23.36C11.8713 23.1588 11.5509 23.0585 11.2264 23.0782C10.9018 23.0979 10.5959 23.2361 10.3667 23.4667C9.80667 24.0267 9.84667 24.9733 10.4733 25.4533C12.5682 27.11 15.1626 28.0077 17.8333 28C24.5667 28 30.02 22.44 29.8333 15.6533C29.66 9.40001 24.4333 4.17335 18.18 4.00001ZM17.5 10.6667C16.9533 10.6667 16.5 11.12 16.5 11.6667V16.5733C16.5 17.04 16.7533 17.48 17.1533 17.72L21.3133 20.1867C21.7933 20.4667 22.4067 20.3067 22.6867 19.84C22.9667 19.36 22.8067 18.7467 22.34 18.4667L18.5 16.1867V11.6533C18.5 11.12 18.0467 10.6667 17.5 10.6667Z" />
                </svg>
              </div>
              <span
                className={`${aboutStyles.buttonText} ${aboutStyles.custom_transition}`}
                // group-hover:text-[#1F1F1F] group-focus:text-[#1F1F1F]
              >
                History
              </span>
            </div>
          </div>
          <div className={aboutStyles.api_calls}>
            <div className='cursor-pointer' onClick={() => setEndpointIndex(1)}>
              <motion.div className='relative flex justify-start items-center'>
                <span className={`rounded-[32px] font-bold h-[30px] px-4 py-1.5 transition-all duration-500 flex items-center justify-center  ${endpointIndex === 1 ? 'bg-[#E1EF9A] text-[#1F1F1F] w-[62px]' : 'bg-[#ECC89D] text-[#ffffff] w-[72px]'} `}>
                  {endpointIndex === 1 ? 'GET' : 'POST'}
                </span>
              </motion.div>
              <div className={aboutStyles.api_url}>
                <p className={`${endpointIndex === 1 ? 'text-[#1F1F1F]' : 'text-[#D9D9D9]'} transition-all duration-500 `}>
                  <span>apiconf.net/api/</span>
                  <span>...</span>
                </p>
              </div>
              <h3 className={aboutStyles.builder}>The Visionaries</h3>
            </div>
            <div className='cursor-pointer' onClick={() => setEndpointIndex(2)}>
              <motion.div className='relative flex justify-start items-center'>
                <span className={`rounded-[32px] font-bold h-[30px] px-4 py-1.5 transition-all duration-500 flex items-center justify-center  ${endpointIndex === 2 ? 'bg-[#E1EF9A] text-[#1F1F1F] w-[62px]' : 'bg-[#ECC89D] text-[#ffffff] w-[72px]'} `}>
                  {endpointIndex === 2 ? 'GET' : 'POST'}
                </span>
              </motion.div>
              <div className={aboutStyles.api_url}>
                <p className={`${endpointIndex === 2 ? 'text-[#1F1F1F]' : 'text-[#D9D9D9]'} transition-all duration-500 `}>
                  <span>apiconf.net/api/</span>
                  <span>...</span>
                </p>
              </div>
              <h3 className={aboutStyles.builder}>The Connectors</h3>
            </div>
            <div className='cursor-pointer' onClick={() => setEndpointIndex(3)}>
              <motion.div initial={{ width: endpointIndex === 1 ? '72px' : '62px' }} animate={{ width: endpointIndex === 1 ? '62px' : '72px' }} transition={{ delay: 0, duration: 0.3, type: "just" }} className='relative flex justify-start items-center'>
                <span className={`rounded-[32px] font-bold h-[30px] px-4 py-1.5 transition-all duration-500 flex items-center justify-center  ${endpointIndex === 3 ? 'bg-[#E1EF9A] text-[#1F1F1F] w-[62px]' : 'bg-[#ECC89D] text-[#ffffff] w-[72px]'} `}>
                  {endpointIndex === 3 ? 'GET' : 'POST'}
                </span>
              </motion.div>
              <div className={aboutStyles.api_url}>
                <p className={`${endpointIndex === 3 ? 'text-[#1F1F1F]' : 'text-[#D9D9D9]'} transition-all duration-500`}>
                  <span>apiconf.net/api/</span>
                  <span>...</span>
                </p>
              </div>
              <h3 className={aboutStyles.builder}>The Builders</h3>
            </div>
            <div className='cursor-pointer' onClick={() => setEndpointIndex(4)}>
              <motion.div className='relative flex justify-start items-center'>
                <span className={`rounded-[32px] font-bold h-[30px] px-4 py-1.5 transition-all duration-500 flex items-center justify-center  ${endpointIndex === 4 ? 'bg-[#E1EF9A] text-[#1F1F1F] w-[62px]' : 'bg-[#ECC89D] text-[#ffffff] w-[72px]'} `}>
                  {endpointIndex === 4 ? 'GET' : 'POST'}
                </span>
              </motion.div>
              <div className={aboutStyles.api_url}>
                <p className={`${endpointIndex === 4 ? 'text-[#1F1F1F]' : 'text-[#D9D9D9]'} transition-all duration-500`}>
                  <span>apiconf.net/api/</span>
                  <span>...</span>
                </p>
              </div>
              <h3 className={aboutStyles.builder}>The Curious Minds</h3>
            </div>

          </div>
        </div>
        <motion.div
          initial={{ height: '470px' }} animate={{ height: endpointIndex === 4 || endpointIndex === 2 ? '520px' : endpointIndex === 1 ? '500px' : '470px' }}
          className={`${aboutStyles.row_two_col} ${aboutStyles.row_two_col_two} h-auto relative`}
        >
          <div className='flex flex-col justify-start items-start h-auto w-full relative'>
            <div className={`flex flex-col gap-6 justify-between absolute left-0 top-0 w-full h-full transition-opacity duration-300 ${endpointIndex === 1 ? 'opacity-100' : 'opacity-0'}`}>
              <div>
                <h3 className={aboutStyles.head3_one}>The Connectors</h3>
              </div>
              <div>
                <h3 className={aboutStyles.head3}>Industry Influencers</h3>
                <p className={aboutStyles.para_dark}>
                  They don't just observe the trends; they set them. With vast followers, these individuals have the power
                  to amplify messages and shape opinions.
                </p>
              </div>
              <div>
                <h3 className={aboutStyles.head3}>API Vendors and Solution Providers</h3>
                <p className={aboutStyles.para_dark}>
                  The entities that provide the tools, platforms, and solutions which
                  developers and companies rely upon. They're always on the prowl for new partnerships, collaborations, and opportunities.
                </p>
              </div>
            </div>
            <div className={`flex flex-col gap-6 justify-between absolute left-0 top-0 w-full h-full transition-opacity duration-300 ${endpointIndex === 2 ? 'opacity-100' : 'opacity-0'}`}>
              <div>
                <h3 className={aboutStyles.head3_one}>The Visionaries</h3>
              </div>
              <div>
                <h3 className={aboutStyles.head3}>Tech Strategists & Decision Makers</h3>
                <p className={aboutStyles.para_dark}>
                  Senior management and executives who see the larger picture. They gauge market trends, forecast future trajectories,
                  and make pivotal decisions that shape the tech landscape.
                </p>
              </div>
              <div>
                <h3 className={aboutStyles.head3}>Startup Founders</h3>
                <p className={aboutStyles.para_dark}>
                  The problem solvers who embark on the challenging journey of turning visions into reality. They're always on the lookout for
                  leveraging APIs to offer innovative solutions to everyday problems.
                </p>
              </div>
            </div>
            <div className={`flex flex-col gap-6 justify-between absolute left-0 top-0 w-full h-full transition-opacity duration-300 ${endpointIndex === 3 ? 'opacity-100' : 'opacity-0'}`}>
              <div>
                <h3 className={aboutStyles.head3_one}>The Builders</h3>
              </div>
              <div>
                <h3 className={aboutStyles.head3}>Seasoned Developers</h3>
                <p className={aboutStyles.para_dark}>
                  Expertise in software development and experience in harnessing the
                  power of APIs for intricate integrations and solutions.
                </p>
              </div>
              <div>
                <h3 className={aboutStyles.head3}>Emerging Tech Talents</h3>
                <p className={aboutStyles.para_dark}>
                  Young and enthusiastic coders eager to explore the vast world of
                  APIs, bringing fresh perspectives and innovative approaches.
                </p>
              </div>
            </div>
            <div className={`flex flex-col gap-6 justify-between absolute left-0 top-0 w-full h-full transition-opacity duration-300 ${endpointIndex === 4 ? 'opacity-100' : 'opacity-0'}`}>
              <div>
                <h3 className={aboutStyles.head3_one}>The Curious Minds</h3>
              </div>
              <div>
                <h3 className={aboutStyles.head3}>Enthusiasts</h3>
                <p className={aboutStyles.para_dark}>
                  Individuals who, while not directly involved in hands-on development,
                  are intrigued by the potential and prospects of APIs,
                  They could be from adjacent sectors like marketing, finance,
                  or design, keen to understand how APIs influence their domains.
                </p>
              </div>
              <div>
                <h3 className={aboutStyles.head3}>Coding Newbies</h3>
                <p className={aboutStyles.para_dark}>
                  They bring a blend of curiousity and ambition, while their journey in the tech world
                  has just begun, their aspirations are sky-high. They're here to learn, network and get inspired.
                </p>
              </div>
            </div>


          </div>
        </motion.div>
      </motion.div>
      <div className={aboutStyles.bottom_glow}></div>
    </section >
  );
};
export default About;