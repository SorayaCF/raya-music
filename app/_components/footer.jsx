import { SocialIcon } from 'react-social-icons'

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-900 py-4 px-3">
            <div className="container mx-auto text-center">
                <li className='flex space-x-2 items-center justify-center'>
                <ul>
                <p>&copy; {new Date().getFullYear()} Raya. Todos los derechos reservados.</p>
                </ul>
                <ul>
                    <SocialIcon style={{ height: 30, width: 30 }} url='https://soundcloud.com/laura-raya' target="_blank" rel="noopener noreferrer" />
                </ul>
                <ul>
                    <SocialIcon style={{ height: 30, width: 30 }} url='https://www.youtube.com/@rayalamesa/featured' target="_blank" rel="noopener noreferrer" />
                </ul>
                <ul>
                    <SocialIcon style={{ height: 30, width: 30 }} url='https://www.instagram.com/raya.musix/' target="_blank" rel="noopener noreferrer"/>
                </ul>
                <ul>
                    <SocialIcon style={{ height: 30, width: 30 }} url="mailto:rayalau@gmail.com" target="_blank" rel="noopener noreferrer"/>
                </ul>
            </li>
            </div>
        </footer>
    );
}
