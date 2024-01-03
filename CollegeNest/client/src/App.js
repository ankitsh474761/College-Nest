import './App.css';
import { Routes ,Route } from "react-router-dom";
import Home from './Home/Home';
import Contactus from './Contact/Contactus';
import About from './About/About';
import Hostel1 from './Hostel/Hostel1';
import Room1 from './Rooms/Room1';
import Saraswati from './Hostel/Saraswati';
import Parvati from './Hostel/Parvati';
import Pg1 from './Pg/Pg1';
import LoginGoogle from './components/LoginGoogle';
import axios from "axios";
import Deepakpg from './Pg/Deepakpg';
import Suvidhapg from './Pg/Suvidhapg';
import Sharmapg from './Pg/Sharmapg';
import Chauhanpg from './Pg/Chauhanpg';
import ShivShaktipg from './Pg/ShivShaktipg';
import Thakurpg from './Pg/Thakurpg';
import Cd from './Rooms/Cd';
import Kd from './Rooms/Kd';
import GreenBuild from './Rooms/GreenBuild';
import WhiteBuild from './Rooms/WhiteBuild';
import PinkBuild from './Rooms/PinkBuild';
import UmarCottage from './Rooms/UmarCottage';
import Keperate from './Pg/Keperate';
import Ibydenepg from './Pg/Ibydenepg';
import AdminPage from './AccomodationReviews/admin/AdminPage';
import UpdateForm from './AccomodationReviews/admin/UpdateForm';



axios.defaults.baseURL = "http://127.0.0.1:4000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginGoogle />} />
        <Route path="/hostel1" element={<Hostel1 />} />
        <Route path="/romi1" element={<Room1 />} />
        <Route path="/pgs" element={<Pg1 />} />

        <Route path="/adminpage" element={<AdminPage />} />
        <Route path="/adminform" element={<UpdateForm/>} />
        {/* ----------------------------PGS----------------------------------------------------------------- */}
        <Route path="/deepakpg" element={<Deepakpg />} />
        <Route path="/suvidhapg" element={<Suvidhapg />} />
        <Route path="/sharmapg" element={<Sharmapg />} />
        <Route path="/chauhanpg" element={<Chauhanpg />} />
        <Route path="/shivshaktipg" element={<ShivShaktipg />} />
        <Route path="/thakurpg" element={<Thakurpg />} />
        <Route path="/keperate" element={<Keperate />} />

        {/* ----------------------------PGS----------------------------------------------------------------- */}
        <Route path="/cd" element={<Cd />} />
        <Route path="/kd" element={<Kd />} />
        <Route path="/green" element={<GreenBuild />} />
        <Route path="/white" element={<WhiteBuild />} />
        <Route path="/pink" element={<PinkBuild />} />
        <Route path="/umar" element={<UmarCottage />} />
        <Route path="/ibydene" element={<Ibydenepg />} />

        {/* ------------------------------------Hostel -------------------------------------------------- */}
        <Route path="/saraswati" element={<Saraswati />} />
        <Route path="/parvati" element={<Parvati />} />
      </Routes>
    </div>
  );
}

export default App;
