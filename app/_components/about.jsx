'use client'
import { useInView } from "react-intersection-observer"

export default function About() {
    const { ref, inView } = useInView({
        threshold: 0.5,
    })
    const paragraphOne = 'RAYA es un grupo de electropop con toques de otros géneros que, con su propio estilo, se ha lanzado a la piscina del panorama musical.'.split(' ')
    const paragraphTwo = 'Desde Barcelona, Andrés Ponce y Laura Raya disfrutan cada oportunidad que tienen para crear y experimentar con la música que les hace vibrar.'.split(' ')
    const paragraphThree = 'Se presentan con una producción cuidadosamente elaborada, una fusión de sintetizadores pulsantes, ritmos bailables y letras muy personales.'.split(' ')
    const paragraphFour = 'Actualmente, continúan trabajando para lanzar sus propios temas en diversas plataformas digitales, y sus maquetas ya están disponibles en SoundCloud.'.split(' ')
    const paragraphFive = 'En sus conciertos, combinan su música con la de otros artistas que los inspiran, como Delaporte, Zahara y Rigoberta Bandini, entre otros.'.split(' ')

    return (
        <div className="h-fit py-16 px-24 bg-gray-100 text-gray-900">
            <div className="grid md:grid-cols-3 place-items-center gap-8">
                <img ref={ref} src="/raya.png" alt="Raya Band Photo" className="hover:scale-110 duration-1000 h-80 rounded-full" />
                <div className='space-y-4 col-span-2'>
                    <h2 className="text-4xl font-bold mb-8">Acerca de nosotros</h2>
                    <div className='space-y-4'>
                        <p className="text-lg leading-relaxed">
                            {paragraphOne.map((word, index) => (
                                <span
                                    key={index}
                                    className={`inline-block transform transition-transform duration-500 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
                                    style={{ transitionDelay: `${index * Math.random() * 5}ms` }}
                                >
                                    {word}&nbsp;
                                </span>
                            ))}
                        </p >
                        <p className="text-lg leading-relaxed">
                            {paragraphTwo.map((word, index) => (
                                <span
                                    key={index}
                                    className={`inline-block transform transition-transform duration-500 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
                                    style={{ transitionDelay: `${index * Math.random() * 10}ms` }}
                                >
                                    {word}&nbsp;
                                </span>
                            ))}
                        </p>
                        <p className="text-lg leading-relaxed">
                            {paragraphThree.map((word, index) => (
                                <span
                                    key={index}
                                    className={`inline-block transform transition-transform duration-500 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                    style={{ transitionDelay: `${index * Math.random() * 10}ms` }}
                                >
                                    {word}&nbsp;
                                </span>
                            ))}
                        </p>
                        <p className="text-lg leading-relaxed">
                            {paragraphFour.map((word, index) => (
                                <span
                                    key={index}
                                    className={`inline-block transform transition-transform duration-500 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
                                    style={{ transitionDelay: `${index * Math.random() * 10}ms` }}
                                >
                                   {word}&nbsp;
                                </span>
                            ))}
                        </p>
                        <p className="text-lg leading-relaxed">
                            {paragraphFive.map((word, index) => (
                                <span
                                    key={index}
                                    className={`inline-block transform transition-transform duration-500 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
                                    style={{ transitionDelay: `${index * Math.random() * 10}ms` }}
                                >
                                   {word}&nbsp;
                                </span>
                            ))}
                        </p>
                    </div >
                </div>
            </div>
        </div>
    );
}
