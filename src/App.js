
import './App.css';
import { YoutubeData } from './YoutubeData';

function App() {
  // Example: RENDER LIST
  // const numbers = [1,2,3,4,5,6];
  // const double = numbers.map((item) => item * 2);
  // console.log(double);
  //console.log(YoutubeData);

  return (
    <div className='ytb-list'>

    {/* Đổ dữ liệu ra */}
    {YoutubeData.map((item, index) => (
      // Duyệt ra các phần tử
      //<div key={item.id}>Hello {index+1} </div>
      <YoutubeItem key={item.id} src={item.src} title={item.title} desc={item.desc}></YoutubeItem>

    ))}

    {/* <YoutubeItem src="https://cdn.dribbble.com/users/664697/screenshots/3207635/media/d8b25359a7ea951790187a8d2bf953fd.png?resize=800x600&vertical=center" title="Học lập trình" desc="mô tả cách học lập trình dễ hiểu" author="BTNgan"></YoutubeItem>
    <YoutubeItem src="https://cdn.dribbble.com/users/664697/screenshots/3207635/media/d8b25359a7ea951790187a8d2bf953fd.png?resize=800x600&vertical=center" title="Học lập trình" desc="mô tả cách học lập trình dễ hiểu" author="BTNgan"></YoutubeItem>
    <YoutubeItem src="https://cdn.dribbble.com/users/664697/screenshots/3207635/media/d8b25359a7ea951790187a8d2bf953fd.png?resize=800x600&vertical=center" title="Học lập trình" desc="mô tả cách học lập trình dễ hiểu" author="BTNgan"></YoutubeItem>
    <YoutubeItem src="https://cdn.dribbble.com/users/664697/screenshots/3207635/media/d8b25359a7ea951790187a8d2bf953fd.png?resize=800x600&vertical=center" title="Học lập trình" desc="mô tả cách học lập trình dễ hiểu" author="BTNgan"></YoutubeItem>
    <YoutubeItem src="https://cdn.dribbble.com/users/664697/screenshots/3207635/media/d8b25359a7ea951790187a8d2bf953fd.png?resize=800x600&vertical=center" title="Học lập trình" desc="mô tả cách học lập trình dễ hiểu" author="BTNgan"></YoutubeItem>
    <YoutubeItem src="https://cdn.dribbble.com/users/664697/screenshots/3207635/media/d8b25359a7ea951790187a8d2bf953fd.png?resize=800x600&vertical=center" title="Học lập trình" desc="mô tả cách học lập trình dễ hiểu" author="BTNgan"></YoutubeItem> */}
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
