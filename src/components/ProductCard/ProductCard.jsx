import "./ProductCard.css";

export const ProductCard = ({ products }) => {
  return (
   <div className="card" key={products.id}>
      <div className="cardTop">
        <img src={products.image} alt={products.name} className="cardImage" />
      </div>
      <div className="cardBody">
          
      <h2 className="productCategory">{products.brand}</h2>
            <h1 className="productName">{products.name}</h1>
          
        <h3 className="productPrice">Rs {products.price} <span style={{color: "#ccc", textDecoration: "line-through",fontSize: "1rem"}}>Rs. {products.originalPrice}</span> <span style={{color: "#fff" , backgroundColor: "#76FF03", padding: "0rem 0.2rem", textDecoration: "line-through", fontSize: "0.9rem"}}>{Math.floor(100 - (products.price / products.originalPrice) * 100)}% OFF</span> </h3><br/>
        <small>size - {products.size}  </small>
      </div>
      <button style={{backgroundColor: "#ff7e1d", color: "white", width:"100%", padding: "0.5rem", }}>Add To Cart</button>
    </div> 
  );
};
