import { useEffect, useState } from "react";
import {Route, Routes} from "react-router-dom"

import { Footer } from "./components/common/Footer/Footer";
import { Header } from "./components/common/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { TourDetail } from "./components/TourDetails/TourDetail";
import { Tours } from "./components/Tours/Tours";
import { AuthProvider } from './contexts/authContext'
import * as tourService from './services/tourService';
import { Create } from "./components/CreateTour/CreateTour";
import { Logout } from "./components/Logout/Logout";
import { Delete } from "./components/Delete/Delete";

function App() {
    const [tours, setTours] = useState([]);
    

    useEffect(() => {
        tourService.getAll()
            .then(result => {
                setTours(Object.values(result))
            })
    }, [])


    return (
        <div className="App">
            <AuthProvider>
                <Header />
                        <main>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/tours" element={<Tours tours={tours} />}/>
                                <Route path="/tours/:tourId" element={<TourDetail />} />
                                <Route path="/login" element={<Login />}/>
                                <Route path="/register" element={<Register />} />
                                <Route path="/create" element={<Create />} />
                                <Route path="/logout" element={<Logout />} />
                                <Route path='/delete/:tourId' element={<Delete />} />
                                {/* Todo: edit button route */}
                            </Routes>
                        </main>  
                <Footer />
            </AuthProvider>
        </div>
        
    )
}

export default App;
