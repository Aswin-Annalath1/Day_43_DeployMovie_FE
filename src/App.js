import { useState } from 'react';
import './App.css';
import MovieSection from './Components/Movie/MovieSection';
import Navbar from './Components/Navbar';
import ColorSection from './Components/Color/ColorSection';
import { Route, Routes } from 'react-router-dom';
import { movie } from './Utils/Constants';
import MovieInfo from './Components/Movie/Movieinfo';
import AddMovie from './Components/Movie/AddMovie';
import EditForm from './Components/Movie/EditForm';
import NavbarMUI from './Components/NavbarMUI';
import MovieCardMUI from './Components/Movie/MovieCardMUI';
import TicTacToe from './Components/TicTacToeGame/TicTacToe';
import Theme from './Components/PropDrilling/Theme';
import ThemeContext from './Components/UseContext/ThemeContext';
import Classprofile from './Components/ClassComponent/ClassProfile';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './Utils/store';
import CartPage from './Components/Movie/CartPage';
import Formik from './Components/Formik/Formik';
import AddMovieFormik from './Components/Formik/AddMovieFormik';
import AddMovieFormikMUI from './Components/Formik/AddMovieFormikMUI';




function App() {
  const [cart,setCart]=useState(0)

  // Created variable to update mode by click and also to change name in navbar
  const [mode,setMode]=useState("light")
  // imported code of dark mode function
  const darkTheme = createTheme({
    palette: {
      mode:mode,
    },
  });
  
  return (
    
    <>
    <Provider store={store}>

    {/* This should Wrap entire code to change light and dark mode */}
    <ThemeProvider theme={darkTheme}>
    {/* display */}
    {/* <Navbar cart={cart}/>  // passing mode and setmode to navbar to change name*/}
    <NavbarMUI mode={mode} setMode={setMode}/>
    

    {/* add the functionality */}
    <Routes>
                                     {/* making props to pass this */}
      <Route path="/" element={<MovieSection cart={cart} setCart={setCart} />}/> 

      {/* //add color section  */}
      <Route path="/addcolor" element={<ColorSection/>}/>

      {/* adding movieinfo */}            
                                                  {/* movieList is passed as props here */}
      <Route path="/movies/:id" element={<MovieInfo />}/>
                      {/* now the path is dynamic in nature(:id) */}

      {/*  Calling Add Movie  */}
      <Route path="/addmovie" element={<AddMovie />}/>

      {/* calling for edit button */}
                      {/* id is made dynamic in nature */}
      <Route path="/edit/:id" element={<EditForm />} />

      {/* TicTacToe Calling */}
      <Route path="/tictactoe" element={<TicTacToe/>} />

      {/* PropDrilling-Theme */}
      <Route path="/propdrilling" element={<Theme/>} />

      {/* UseContext calling */}
      <Route path="/useContext" element={<ThemeContext/>} />

      {/* Class Component Calling  */}
      <Route path="/classcomponent" element={<Classprofile/>} />

      {/* Calling cartPage */}
      <Route path="/cart" element={<CartPage/>} />

      {/* Calling Formik */}
      <Route path="/formik" element={<Formik/>} />

      {/* AddMovieFormik called. */}
      <Route path="/addmovieformik" element={<AddMovieFormikMUI/>} />

    </Routes>
    </ThemeProvider>
    
    </Provider>
    </>
  );
}

export default App;
