import "./App.css";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Article } from "./components/Article";
import { Blog } from "./components/Blog";
import Contact from './components/Contact';
import {Apropos} from './components/Apropos';
import { Articlep } from "./components/Articlep";
import { Articlem } from "./components/Articlem";
import { Articles } from "./components/Articles";
import { Articler } from "./components/Articler";
import { Avenir } from "./components/Avenir";
import { Cancer } from "./components/Cancer";
import Login from './components/Login';
import Loginadmin from './components/Loginadmin';
import ContactTable from './components/ContactTable';
import UserTable from './components/UserTable';
import StatisticsCard from './components/StatisticsCard';
import ArticleTable from './components/ArticleTable';
import {Dashboard} from './components/Dashboard';
import Profile from './components/Profile';
import Register from './components/Register';
import  Notfaund  from "./components/Notfaund";
import MainLayout from "./Layout/MainLayout";

function App() {
  return (
    <>
      <Router>
       

        
          <Routes>
            
        <Route path="/" element={<MainLayout />} >

            <Route path="/" element={<Home />} />
            <Route path="/Article" element={<Article />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Apropos" element={<Apropos />} />
            <Route path="/Articlep" element={<Articlep />} />
            <Route path="/Articlem" element={<Articlem />} />
            <Route path="/Articles" element={<Articles />} />
            <Route path="/Articler" element={<Articler />} />
            <Route path="/Avenir" element={<Avenir />} />
            <Route path="/Cancer" element={<Cancer />} />
            <Route path="/Profile" element={<Profile />} />

        </Route>
        <Route path="/Dashboard" element={<Dashboard />} >

         <Route path="ContactTable" element={<ContactTable />} />
         <Route path="UserTable" element={<UserTable />} />
         <Route path="ArticleTable" element={<ArticleTable />} />
         <Route path="StatisticsCard" element={<StatisticsCard />} />

         </Route>
        
            <Route path="/Login" element={<Login />} />
            <Route path="/Loginadmin" element={<Loginadmin />} />
            <Route path="/ContactTable" element={<ContactTable />} />
            <Route path="/UserTable" element={<UserTable />} />
            <Route path="/ArticleTable" element={<ArticleTable/>} />
            <Route path="/Dashboard" element={<Dashboard />}/>
            <Route path="/Register" element={<Register />} />
            <Route path="/Notfaund" element={<Notfaund />} />


          </Routes>

        
        
          
         
      </Router>
  </>
  );
}

export default App;
