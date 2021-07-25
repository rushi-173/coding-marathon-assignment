import "./Products.css";
import { useStateContext } from "../../context/state-context";
import { ProductCard } from "../index";
import { Sidebar } from "../index";

export const Products = () => {
  const { filteredData } = useStateContext();

  
  return (
    <>
      <div className="wrapper-fluid ">
        <div className="pageLayout">
          <Sidebar />
          <main className="mainSection">
            <div className="products" style={{marginTop: "4rem"}}>
              {filteredData.length > 0 ? (
                filteredData.map((products) => {
                  return <ProductCard key={products.id} products={products} />;
                })
              ) : (
                <h2 className="noProducts">
                  No Products Found In This Category
                </h2>
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
