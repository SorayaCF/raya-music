'use client'
import { useEffect, useState } from 'react'
import { SocialIcon } from 'react-social-icons'

export default function SocialIcons() {
    const [isMatch, setIsMatch] = useState(false)

    useEffect(() => {
        if (window) {
            let mql = window.matchMedia("(max-width: 480px)")
            setIsMatch(mql.matches)
        }
    }, [window])

    return (
        <li className='absolute top-5 md:top-10 right-2 md:right-5 space-y-2 md:space-y-3 flex flex-col items-center justify-center'>
            <ul>
                <SocialIcon style={isMatch && { width: 35, height: 35 }} url='https://soundcloud.com/laura-raya' target="_blank" rel="noopener noreferrer" />
            </ul>
            <ul>
                <SocialIcon style={isMatch && { width: 35, height: 35 }} url='https://www.youtube.com/@rayalamesa/featured' target="_blank" rel="noopener noreferrer" />
            </ul>
            <ul>
                <SocialIcon style={isMatch && { width: 35, height: 35 }} url='https://www.instagram.com/raya.musix/' target="_blank" rel="noopener noreferrer" />
            </ul>
            <ul>
                <SocialIcon style={isMatch && { width: 35, height: 35 }} url="mailto:rayalau@gmail.com" target="_blank" rel="noopener noreferrer" />
            </ul>
        </li>
    )
}