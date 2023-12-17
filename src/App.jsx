// import {Email} from "./components/Email.jsx"
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./view/home/Home";
import { TopNavBar } from "./components/TopNavBar.jsx";
import { Form } from "./view/form/Form.jsx";
import { Favorite } from "./view/favorite/Favorite.jsx";
import { LeftSideBar } from "./view/leftSideBar/LeftSideBar.jsx";
import { User } from "./view/user/User.jsx";
function App() {
  const location = useLocation();

  console.log(location);

  return (
    <div className=" " style={{ boxSizing: "border-box" }}>
      <header className="flex items-center justify-center flex-1 min-h-full w-full">
        <div className="w-full max-w-[1920px]  mx-[40px]">
          {location.pathname !== "/sing-up" && <TopNavBar />}
        </div>
      </header>
      <div className="flex items-center justify-center flex-1 min-h-full w-full">
        <div className="flex mx-10 max-w-[1920px] ">
          <div className="sticky top-0">
            {location.pathname !== "/sing-up" && <LeftSideBar />}
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/review" element={<Favorite />} />
            <Route path="/sing-up" element={<User />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
