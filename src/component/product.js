
import { Button } from "react-bootstrap";

import Product_card from "../data/product_data";

const Products=()=> {
    const listItems = Product_card.map((item)=>{
        return(
        <div className='card' key={item.id}>
            <div className='card_img'>
             <img src={item.thumb} alt='product_img'/>
            </div>
            <div className='card_header'>
                <h2>{item.product_name}</h2>
                <p>{item.discription}</p>
                <p className='price'>{item.price} <span>{item.currency}</span></p>
               <div> <Button variant="contained" color="dark">
  ADD TO BASKET
</Button></div>
            </div>
        </div>)
    })

    return(
        <div className='products-container'>

             {listItems}  

        </div>
    )



}
export default Products