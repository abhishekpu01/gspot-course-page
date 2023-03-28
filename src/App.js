import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowCard from './components/ShowCard';
import MyNav from './components/MyNav';
import Middle from './components/Middle';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <MyNav/>
    <Middle/>
    <ShowCard/>
    <Footer/>
    </>
  );
}

export default App;
