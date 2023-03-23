import { useEffect, useState } from "react";
import {Route, Routes} from "react-router-dom"

import { Footer } from "./components/common/Footer/Footer";
import { Header } from "./components/common/Header/Header";
import { Home } from "./components/Home/Home";
import { Tours } from "./components/Tours/Tours";
import * as tourServivice from './services/tourService';

function App() {
    // const [tours, setTours] = useState([]);
    

    // useEffect(() => {
    //     tourServivice.getAll()
    //         .then(result => {
    //             setTours(result)
    //         })
    // }, [])


    return (
        <div className="App">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/tours" element={<Tours tours={tours} />}/> */}
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App;
