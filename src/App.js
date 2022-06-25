
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateArea from "./pages/CreateArea";
import NotFound from "./pages/NotFound";
import TablePage from "./pages/TablePage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
     {/* rutas publicas */}
     <Route path="/" element={<TablePage />}></Route>
     <Route path="/createArea" element={<CreateArea />}></Route>
     
     <Route path="/*" element={<NotFound />}></Route>
     {/* rutas privadas */}
     {/* <Route path="/inicio"  element={ <PrivateRoute permiso={Permiso("user")}> <Inicio /> </PrivateRoute> } ></Route>
     <Route path="/usuario"  element={ <PrivateRoute permiso={Permiso("admin")}> <Usuario /> </PrivateRoute> } ></Route>
     <Route path="/medio"   >
       <Route path="" element={ <PrivateRoute permiso={Permiso("user")}> <Medio /> </PrivateRoute> }/>
       <Route path=":medioId" element={<PrivateRoute permiso={Permiso("user")}><MedioMostrar /></PrivateRoute>} />
     </Route>
     <Route path="/campana"   >
       <Route path="" element={ <PrivateRoute permiso={Permiso("user")}> <Campana /> </PrivateRoute> }/>
       <Route path=":campanaId" element={<PrivateRoute permiso={Permiso("user")}><CampanaMostrar /></PrivateRoute>} />
     </Route> */}

     <Route path="/usuario">
       {/* <Route path=":userId" element={<Usuario />} /> */}
     </Route>

   </Routes>
 </BrowserRouter>
  );
}

export default App;
