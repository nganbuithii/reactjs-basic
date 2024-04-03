

function YoutubeItem(props) {
    return (
        <div className="ytb-item">
        <img src={props.src} />
        <div className="ytb-title"> {props.title} </div>
        <div className="ytb-author">{props.author}</div>
        <div className="ytb-desc">{props.desc}</div>
        </div>
    );
}
export default YoutubeItem;