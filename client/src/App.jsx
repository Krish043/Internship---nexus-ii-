// import { useState } from 'react'
// import Signup from './Signup'
// import Login from './Login'
// import Home from './Home'
// import Details from './Details'
// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import './App.css'

// function Main() {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

//   const handleRegisterClick = () => {
//     navigate('/register');
//   };

//   const handleLoginClick = () => {
//     navigate('/login');
//   }

//   const handleLogoutClick = () => {
//     navigate('/')
//     setIsLoggedIn(false);
//   }

//   return (
//     <>
//     <div className="nav">
//       <div>
//         LOGO
//       </div>
//       <ul>
//         <li>Home</li>
//         <li>About</li>
//         <li>Contact</li>
//         {isLoggedIn ? (
//           <li onClick={handleLogoutClick}>Logout</li>
//         ) : (
//           <>
//             <li onClick={handleRegisterClick}>Sign up</li>
//             <li onClick={handleLoginClick}>Sign in</li>
//           </>
//         )}
//       </ul>
//     </div>
//       <div className="centered">
//         <div className="container">
//           {isLoggedIn ? (
//             <div className="title">
//             FLAVOUR FUSION
//             </div>
//           ):(
//             <div className="title">
//               R E S T A U R A N T
//           </div>
//           )}
          
//             <Details isLoggedIn={isLoggedIn} />
//         </div>
//       </div>
//       <Routes>
//         <Route path='/register' element={<Signup />} />
//         <Route path='/login' element={<Login onLogin={() => setIsLoggedIn(true)} />} />
//         <Route path='/home' element={<Home />} />
//       </Routes>
//     </>
//   )
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Main />
//     </BrowserRouter>
//   )
// }

// export default App;


import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import Details from './Details';
import './App.css';

function Main() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogoutClick = () => {
    navigate('/');
    setIsLoggedIn(false);
  };

  return (
    <>
      <div className="nav">
        <div>
          LOGO
        </div>
        <ul>
          <li onClick={() => navigate('/')}>Home</li>
          <li>About</li>
          <li>Contact</li>
          {isLoggedIn ? (
            <li onClick={handleLogoutClick}>Logout</li>
          ) : (
            <>
              <li onClick={handleRegisterClick}>Sign up</li>
              <li onClick={handleLoginClick}>Sign in</li>
            </>
          )}
        </ul>
      </div>
      <div className={`centered ${isLoggedIn ? 'loggedInBackground' : 'loggedOutBackground'}`}>
        <div className="container">
          <div className="title">
            {isLoggedIn ? 'FLAVOUR FUSION' : 'R E S T A U R A N T'}
          </div>
          <Details isLoggedIn={isLoggedIn} />
        </div>
      </div>
      <Routes>
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login onLogin={() => setIsLoggedIn(true)} />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
