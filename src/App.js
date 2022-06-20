import './App.css';
import Header from './componets/Header/Header';
import Shop from './componets/Shop/Shop';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Review from './componets/Review/Review';
import Manage from './componets/Manage/Manage';

function App() {
  return (
    <div>
      <Router>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/review' element={<Review/>} />
          <Route path='/manage' element={<Manage/>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
