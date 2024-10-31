// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';;
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Header from './Components/Header';

const App = () => {
    return (
        <Router>
            <div className="bg-green-900 text-white">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* Add other routes here */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
