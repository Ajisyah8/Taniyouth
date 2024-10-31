const Footer = () => {
    return (
        <footer className="bg-green-800 text-white p-8">
            <div className="flex justify-between items-center">
                <div>
                    <img src="https://placehold.co/50x50" alt="Petani GO logo" className="h-10 mb-4" />
                    <p>Petani GO</p>
                    <p>Jl. Contoh Alamat No. 123, Kota Contoh, Indonesia</p>
                    <p>Email: info@petanigo.com</p>
                    <p>Telepon: +62 123 4567 890</p>
                </div>
                <div className="space-y-2">
                    <h3 className="font-bold">Navigasi</h3>
                    <a href="#" className="block hover:text-green-400">Tantangan</a>
                    <a href="#" className="block hover:text-green-400">Artikel</a>
                    <a href="#" className="block hover:text-green-400">Berita</a>
                    <a href="#" className="block hover:text-green-400">Modul</a>
                    <a href="#" className="block hover:text-green-400">Forum Online</a>
                </div>
                <div className="space-y-2">
                    <h3 className="font-bold">Ikuti Kami</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-green-400"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="hover:text-green-400"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="hover:text-green-400"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="hover:text-green-400"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
