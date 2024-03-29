import "./productList.css";
import Product from "../product/product";
import { products } from "../../data";

const ProductList = () => {
    return ( 
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">My Projects</h1>
                <p className="pl-desc">These are some of my demo projects.</p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link}/>
                ))}
            </div>
            
        </div>
     ); 
};
 
export default ProductList;