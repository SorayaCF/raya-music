'use client'
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse"
import { useEffect, useState } from "react"

export default function Music() {

  const [isMatch, setIsMatch] = useState(false)

  useEffect(() => {
    if (window) {
      let mql = window.matchMedia("(max-width: 480px)")
      setIsMatch(mql.matches)
    }
  }, [window])

  const items = [
    { url: "bg-[url('/casita.png')]", audio: 'https://soundcloud.com/laura-raya/casita-1', factorX: 0.3, factorY: 0.5 },
    { url: "bg-[url('/animal.png')]", audio: 'https://soundcloud.com/laura-raya/animal-1', factorX: 0.6, factorY: 0.1 },
    { url: "bg-[url('/angel.png')]", audio: 'https://soundcloud.com/laura-raya/angel', factorX: 0.2, factorY: 0.5 },
    { url: "bg-[url('/revelation.png')]", audio: 'https://soundcloud.com/laura-raya/revelation-3', factorX: 0.3, factorY: 0.6 },
    { url: "bg-[url('/monstruo.png')]", audio: 'https://soundcloud.com/laura-raya/monstruo-3', factorX: 0.1, factorY: 0.5 },
    { url: "bg-[url('/mi-centro.png')]", audio: 'https://soundcloud.com/laura-raya/mi-centro-1', factorX: 0.6, factorY: 0.2 }
  ]

  return (
    <MouseParallaxContainer enabled={!isMatch}>
      <div className="py-16 lg:px-32 px-6 bg-gray-950 text-white">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 md:mb-8 z-10">Nuestros temas</h2>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 md:gap-12'>
          {items.map((item, i) =>
            <MouseParallaxChild key={i} factorX={item.factorX} factorY={item.factorY} >
              <div
                onClick={() => window.open(item.audio, '_blank').focus()}
                className={`${item.url} h-80 w-80 rounded-full border border-gray-500 cursor-pointer flex items-center justify-center bg-cover opacity-85 hover:opacity-100 hover:shadow-[0px_0px_8px_8px_rgba(243,244,246,0.4)]`}
              >
                <div className="h-1/4 w-1/4 rounded-full bg-gray-500 flex items-center justify-center shadow-[0px_0px_1px_1px_rgba(17,24,39,0.8)]">
                  <div className="h-5/6 w-5/6 rounded-full bg-gray-500 border border-gray-100 flex items-center justify-center shadow-[0px_0px_0.5px_0.5px_rgba(243,244,246,0.9)]">
                    <div className="h-1/2 w-1/2 rounded-full bg-gray-900 shadow-[0px_0px_1px_1px_rgba(17,24,39,0.8)]" />
                  </div>
                </div>
              </div>
            </MouseParallaxChild>
          )}
        </div>
      </div>
    </MouseParallaxContainer>
  )
}