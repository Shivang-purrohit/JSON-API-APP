import AddDetails from "./compo/AddDetails";
import Main from "./compo/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./compo/Navbar";
import Footer from "./compo/Footer";


function App() {
  return (
  <>

<BrowserRouter>
<Navbar/>

<Routes>
  <Route path="/" element={<Main/>}/>
  <Route path="/adddetails" element={<AddDetails/>}/>
  
</Routes>
<Footer/>
</BrowserRouter>

 
  
  </>



  );
}


export default App;
