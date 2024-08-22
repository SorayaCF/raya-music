import SocialIcons from "./social-icons"

export default function Intro() {

    return (
        <div className="min-h-screen bg-cover bg-center relative animate-fade-right animate-duration-[3000ms]" style={{ backgroundImage: "url('/concert-hall.jpg')" }}>
            <div className="bg-black bg-opacity-50 min-h-screen flex flex-col justify-center items-center text-center gap-12">
                <img src="/logo-white.png" alt="Raya Band Logo" className="w-2/3 md:w-3/12 animate-fade-down animate-duration-[3000ms]" />
                <div className='animate-fade-up animate-duration-[3000ms] flex flex-col items-center space-y-3'>
                    <p className="text-gray-300 text-lg md:text-xl px-4">
                        Descubre lo último de tu grupo favorito.
                    </p>
                    <a href='https://soundcloud.com/laura-raya' target='_blank'>
                        <button className="dark:bg-gradient-to-r bg-gradient-to-r hover:from-teal-500 hover:to-blue-500 dark:from-pink-500 dark:to-orange-500 from-pink-500 to-orange-500 text-white px-6 py-3 rounded-full text-lg flex gap-2 items-center">
                            <div>Escuchar en SoundCloud</div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
          <SocialIcons />
        </div>
    )
}