import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="bg-white text-green-900 p-4 pb-10 flex justify-between items-center text-2xl ">
            <div className="flex items-center">
                <img src="https://placehold.co/50x50" alt="Petani GO logo" className="h-10 mr-3" />
                <span className="font-bold text-2xl ml-20">Petani GO</span>
            </div>
            <nav className="flex items-center space-x-20 p=20">
                <Link to="/" className="hover:text-green-700 transition font-poppins">Tentang Kami</Link>
                <div className="relative">
                    <button 
                        onClick={toggleDropdown} 
                        className="flex items-center hover:text-green-700 focus:outline-none transition"
                    >
                        <span>Artikel</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-1 h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute left-0 mt-2 bg-green-700 shadow-lg rounded-lg z-10">
                            <Link to="/modules/module1" className="block px-4 py-2 hover:bg-green-100 text-white transition">Pengetahuan</Link>
                            <Link to="/modules/module2" className="block px-4 py-2 hover:bg-green-100 text-white transition">Budidaya tani</Link>
                            <Link to="/modules/module3" className="block px-4 py-2 hover:bg-green-100 text-white transition">Solusi Masalah</Link>
                        </div>
                    )}
                </div>
                <Link to="/news" className="hover:text-green-700 transition">Berita</Link>
                <Link to="/articles" className="hover:text-green-700 transition">Modul</Link>
                <Link to="/forum" className="hover:text-green-700 transition">Forum Diskusi</Link>
            </nav>
            <button className="bg-green-700 text-white px-4 py-10 rounded-3xl transition h-20 -mt-10 text-xl">Login</button>
        </header>
    );
};

export default Header;
