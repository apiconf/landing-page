import image3D from '../assets/3D-Image.png'
import conf2024 from '../assets/conf-2024.png'
import arrow from '../assets/arrow-icon.svg'

const Footer = () => {
  return (
    <footer className="bg-[#2F20BF] overflow-hidden relative grid grid-cols-[1fr,_max-content] grid-rows-[max-content,_1fr,_max-content] text-white capitalize pl-6 gap-y-8 gap-x-4 sm:grid-rows-[repeat(3,_auto)] sm:grid-cols-[max-content,_1fr] sm:gap-y-4 sm:gap-x-12 sm:p-4 lg:p-[4%]">
      <h2 className="font-bold text-[3rem] font-sans leading-[1] text-end rotate-180 sm:rotate-0 sm:text-start sm:text-[5rem] sm:mb-4 md:text-8xl lg:text-9xl min-[1250px]:text-[10rem]">
        API Conference
      </h2>
      <ul className="mt-12 mb-4 sm:mt-0 sm:mb-0">
        s
        <li className="flex items-center gap-2">
          <a href="#">about API conference</a>
          <img
            className="w-4 rotate-[-45deg] opacity-80"
            src={arrow}
            alt="arrow-icon"
          />
        </li>
        <li className="flex items-center gap-2">
          <a href="#">something </a>
          <img
            className="w-4 rotate-[-45deg] opacity-80"
            src={arrow}
            alt="arrow-icon"
          />
        </li>
        <li className="flex items-center gap-2">
          <a href="#">something </a>
          <img
            className="w-4 rotate-[-45deg] opacity-80"
            src={arrow}
            alt="arrow-icon"
          />
        </li>
        <li className="flex items-center gap-2">
          <a href="#">speakers </a>
          <img
            className="w-4 rotate-[-45deg] opacity-80"
            src={arrow}
            alt="arrow-icon"
          />
        </li>
      </ul>
      <img
        className="logo my-auto sm:my-0"
        src={conf2024}
        alt="api_conference_logo"
      />
      <div className="mb-12 sm:mb-0">
        <p>made with love,</p>
        <p>2024 API conference team</p>
      </div>
      <img
        src={image3D}
        className="absolute w-[240px] inset-[auto_-45px_-30px_auto] lg:inset-[auto_150px_-10px_auto] lg:w-[300px]"
        alt="api-conf"
      />
    </footer>
  )
}

export default Footer
