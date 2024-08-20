import '../componnt products/productApp.css'
import ProductData from "./productData";
function Productlsit (){
    let product = ProductData.map((product)=>{
        return(<>
        <div className="card" key={product.title}>
            <p>{product.id}</p>
            <h1>{product.title}</h1>
            <img src={product.image} alt=""/>
            <p>{product.description}</p>
        </div>
        </>)
    })
        return (
        <>
        <div className="productLisr">
        {product }
        </div>
        </>
    )
}
export default Productlsit ;