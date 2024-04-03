import logo from './logo.svg';
import './App.css';


// Tách thành component -> để viết cái chung
function Feature(){
  return (
    <div className='feature'>
      <img src='' alt='' className='feature-img' />
      <h3 className="feature-title"> Heloo bạn </h3>
      <p className='feature-desc'> kurfo23uori34yyt34ot43</p>
    </div>
  )
}
function App() {
  //const name =" Ngan xink"
  return (
    <div>

    {/* Cac feature này được gọi là component */}
    <Feature></Feature>
    <Feature></Feature>
  </div>
  )
  
}

export default App;
