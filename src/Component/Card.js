import './card.css';
const Card=(props)=>{
    return(<div className="boxx">
    <div className="Date">
        <p className="text">{props.Date}</p>
    </div>
    <div className="Box">
      <div className="clock">
        <p className="text t">{props.Time}</p> 
      </div>
    </div>
    <div className="foot">
        <p className="text">Created by Satya 😁 !!</p>
    </div>
</div>);
}
export default Card;