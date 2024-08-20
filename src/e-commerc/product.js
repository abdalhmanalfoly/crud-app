import { Link } from 'react-router-dom';
import './slide.css';

function Product(props){
    const {data} = props ;
    return(
        <>
                <div className="card  ">
  <img src={data.image} className="im" alt=""/>
  <div className="card-body">
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text tx">{data.description}</p>
    <h4 className="card-text">{data.price}$</h4>
    
    <Link className="btn btn-primary" to={`/product/${data.id}`}>details</Link>
  </div>
  </div>
        </>
    )
}
export default Product