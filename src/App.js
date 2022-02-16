import axios from 'axios';
import { BrowserRouter , Route } from 'react-router-dom';
import './App.css';
import Featured from './components/Featured/Featured';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import SignUp from './components/SignUp/SignUp';

const App = () => {
    
    return (
        <div>
            <Navbar />
            <Hero />
            <Featured />
            <SignUp />
            <Footer />
        </div>
    )
}

export default App;