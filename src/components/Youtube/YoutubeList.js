import { YoutubeData } from "../../YoutubeData"
import YoutubeItem from "./YoutubeItem"

function YoutubeList(props) {
    
    return (
        <div className='ytb-list'>

    {/* Đổ dữ liệu ra */}
    {props.children}
    {YoutubeData.map((item, index) => (
      // Duyệt ra các phần tử
      //<div key={item.id}>Hello {index+1} </div>
        <YoutubeItem key={item.id} src={item.src} title={item.title} desc={item.desc}></YoutubeItem>

        ))}
    </div>
    )
}

export default YoutubeList;


