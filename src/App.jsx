// import {Email} from "./components/Email.jsx"
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./view/home/Home";
import { TopNavBar } from "./components/TopNavBar.jsx";
import { Form } from "./view/form/Form.jsx";
import { Favorite } from "./view/favorite/Favorite.jsx";

function App() {
  const location = useLocation();

  console.log(location);

  return (
    <div>
      <header>
        <h1>hola</h1>
        
        {location.pathname !== "" && <TopNavBar />}
      </header>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;