
import './App.css';
import  {Routes, Route, Link} from 'react-router-dom'
import './component/bmi'
import './component/gallery'
import './component/chuyendoidodai'
function App() {
  return (
    <div className='wrapper'>
        <Link to="/bmi">BMI</Link>
        <Link to="/gallery">gallery</Link>
        <Link to="/chuyendoidodai">chuyendoidodai</Link>
    </div>
  );
}

export default App;
