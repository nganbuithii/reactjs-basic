import logo from './logo.svg';
import './App.css';


// Tách thành component -> để viết cái chung
// Feature là con component
function Feature(){
  return (
    <div className='feature'>
      <img src='' alt='' className='feature-img' />
      <h3 className="feature-title"> Heloo bạn </h3>
      <p className='feature-desc'> kurfo23uori34yyt34ot43</p>
    </div>
  )
}
// prop là cái gi?
// là thuộc tính
// App là cha component
function App() {
  //const name =" Ngan xink"
  return (
    <div>

    <YoutubeItem src="https://cdn.dribbble.com/users/664697/screenshots/3207635/media/d8b25359a7ea951790187a8d2bf953fd.png?resize=800x600&vertical=center" title="Học lập trình" desc="mô tả cách học lập trình dễ hiểu" author="BTNgan"></YoutubeItem>
  </div>
  )
  
}

function YoutubeItem(props){
  return (
    <div className='ytb-item'>
      <img src={props.src} />
      <div className='ytb-title'>  {props.title} </div>
      <div className='ytb-author'>{props.author}</div>
      <div className='ytb-desc'>{props.desc}</div>
      
    </div>
  )
}
export default App;
