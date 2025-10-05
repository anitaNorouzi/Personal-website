
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import CurvedTriangle from "./components/CurvedTriangle";
// import leatherTexture from "./assets/images/leather.png";
import HomePage from "./components/pages/HomePage.tsx";
import AcademicPage from "./components/pages/AcademicPage.tsx";
import Professional from "./components/pages/ProfessionalPage.tsx";
import ContactPage from "./components/pages/ContactPage.tsx";


function App() {
  
  // const TextureBackground = ({ texture, children }) => (
  //   <div
  //     className="w-full h-64 bg-center bg-repeat"
  //     style={{
  //       backgroundImage: `url(${leatherTexture})`,
  //       backgroundSize: "200px 200px", // or 'contain', or any pixel/rem size
  //     }}
  //   >
  //     <h2 className="text-white p-6">Tiled leather texture</h2>
  //   </div>
  // );

  return (
    <BrowserRouter>
      <div className="bg-black w-full h-12 flex fixed top-0 left-0 z-30">
        <div className="bg-notebookCover w-full h-12 mt-12 flex">
          <nav className="grid grid-cols-4 ml-32 gap-0 pt-1 font-edu text-notebookCoverDark text-lg ">
            <Link
              to="/"
              className="relative bg-green-300 w-32 h-11 rounded-t-xl  flex items-center justify-center"
            >
              <h3 className="">Home</h3>
              <div
                className="absolute rounded-t-xl top-0 h-full w-32 z-50 pointer-events-none 
          shadow-[5px_0_10px_-2px_rgba(0,0,0,0.5)]"
              ></div>
            </Link>

            <Link
              to="/academic"
              className="relative bg-blue-300 w-32 h-11 rounded-t-xl flex items-center justify-center"
            >
              <h3 className="">Academic</h3>
              <div
                className="absolute rounded-t-xl top-0 h-full w-32 z-50 pointer-events-none 
          shadow-[5px_0_10px_-2px_rgba(0,0,0,0.5)]"
              ></div>
            </Link>

            <Link
              to="/professional"
              className="relative bg-rose-400 w-32 h-11 rounded-t-xl flex items-center justify-center  "
            >
              <h3 className="">Professional</h3>
              <div
                className="absolute rounded-t-xl top-0 h-full w-32 z-50 pointer-events-none 
          shadow-[5px_0_10px_-2px_rgba(0,0,0,0.5)]"
              ></div>
            </Link>

            <Link
              to="/contact"
              className="relative bg-yellow-200 w-32 h-11 rounded-t-xl flex items-center justify-center"
            >
              <h3 className="">Contact</h3>
              <div
                className="absolute rounded-t-xl top-0 h-full w-32 z-50 pointer-events-none 
          shadow-[5px_0_10px_-2px_rgba(0,0,0,0.5)]"
              ></div>
            </Link>
          </nav>
          <div className="absolute top-24 left-0">
            <div className="bg-notebookCover h-screen w-14 -z-10"></div>
          </div>
          <div className=" top-24 absolute left-14">
            {" "}
            <CurvedTriangle color="#705220" w={20} h={20} />
          </div>
          <div className=" top-24 absolute  right-14 rotate-90 origin-center z-30 ">
            {" "}
            <CurvedTriangle color="#705220" w={20} h={20} />
          </div>

          <div className="absolute top-24 right-0">
            <div className="bg-notebookCover h-screen w-14 -z-10 "></div>
          </div>
          <div className="absolute top-12 right-0 rotate-90 origin-center  ">
            {" "}
            <CurvedTriangle />
          </div>
          <div className="absolute top-12 ">
            {" "}
            <CurvedTriangle />
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/academic" element={<AcademicPage></AcademicPage>}></Route>
        <Route path="/professional" element={<Professional></Professional>}></Route>
        <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
