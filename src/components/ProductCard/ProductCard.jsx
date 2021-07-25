import "./ProductCard.css";

export const ProductCard = ({ products }) => {
  return (
   <div className="card" key={products.id}>
      <div className="cardTop">
        <img src={products.image} alt={products.name} className="cardImage" />
      </div>
      <div className="cardBody">
          
            <h1 className="productName">{products.name}</h1>
            <h2 className="productCategory">{products.brand}</h2>
          
        <h3 className="productPrice">Rs {products.price}</h3><br/>
        <small>size - {products.size} </small>
      </div>
      <button style={{backgroundColor: "#ff7e1d", color: "white", width:"100%", padding: "0.5rem", }}>Add To Cart</button>
    </div> 
  );
};
