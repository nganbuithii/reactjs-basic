
import './App.css';
import { YoutubeData } from './YoutubeData';
import YoutubeItem from './components/Youtube/YoutubeItem';
import YoutubeList from './components/Youtube/YoutubeList';
function App() {
  // Example: RENDER LIST
  // const numbers = [1,2,3,4,5,6];
  // const double = numbers.map((item) => item * 2);
  // console.log(double);
  //console.log(YoutubeData);
  const name= " Ngan"
  return (
    <YoutubeList>
      {/* Children 
      prop. children : truyền ở giữa component*/}
      <h1>rùhefijfwi43</h1>
      { name}
    </YoutubeList>
  )
  
}


export default App;
