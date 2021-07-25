import "./Sidebar.css";
import { useStateContext } from "../../context/state-context";

export const Sidebar = () => {
  const { state, dispatch } = useStateContext();

  const sizes = ["S", "M", "L"];
  const idealFor = ["men", "women"];
  const brands = [
    "SCOTT INTERNATIONAL",
    "Seven Rocks",
    "GIRLS SHOPPIE",
    "Denaayu",
  ];

  const sortHandler = (e) => {
    if (e.target.value === "low_to_high") {
      dispatch({ type: "SORT_BY_LOW_TO_HIGH", payload: e.target.value });
    } else {
      dispatch({ type: "SORT_BY_HIGH_TO_LOW", payload: e.target.value });
    }
  };

	return (
		<aside className="sidebar">
      <h2 className="sidebarTitle" style={{marginTop:"1rem"}}>Sort By</h2>
      <select
        className="sortSelect"
        value={state.priceSort}
        onChange={(e) => sortHandler(e)}
      >
        <option value="high_to_low">Price: High to Low</option>
        <option value="low_to_high">Price: Low to High</option>
      </select><br/><hr/><br/>
			<div className="titleWithBtn">
				<h2 className="sidebarTitle">Filters</h2>
				<button
					onClick={() => dispatch({ type: "CLEAR_FILTER" })}
          style={{backgroundColor: "#ff7e1d", color: "white",  padding: "0.2rem 0rem", }}
				>
					Clear filter
				</button>
			</div>
			<div style={{marginBottom:"2rem"}}>
				<h2 className="sidebarTitle">Brands</h2>
				<div className="sidebarCollection">
					{brands.map((brand) => {
						return (
							<div className="sidebarLists" key={brand}>
								<input
									type="checkbox"
									checked={state.filters.sortByBrand.includes(brand)}
									onChange={() => {
										dispatch({ type: "SORT_BY_BRAND", payload: brand });
									}}
								></input>
								<label>{brand}</label>
							</div>
						);
					})}
				</div>
			</div>
			<div style={{marginBottom:"2rem"}}>
				<h2 className="sidebarTitle">Sizes</h2>
				<div className="sidebarCollection">
					{sizes.map((sizes) => {
						return (
							<div className="sidebarLists" key={sizes}>
								<input
									type="checkbox"
									checked={state.filters.sortBySize.includes(sizes)}
									onChange={() => {
										dispatch({ type: "SORT_BY_SIZES", payload: sizes });
									}}
								></input>
								<label>{sizes}</label>
							</div>
						);
					})}
				</div>
			</div>
			<div style={{marginBottom:"2rem"}}>
				<h2 className="sidebarTitle">Ideal For</h2>
				<div className="sidebarCollection">
					{idealFor.map((idealFor) => {
						return (
							<div className="sidebarLists" key={idealFor}>
								<input
									type="checkbox"
									checked={state.filters.sortByIdealFor.includes(idealFor)}
									onChange={() => {
										dispatch({ type: "SORT_BY_IDEAL_FOR", payload: idealFor });
									}}
								></input>
								<label>{idealFor}</label>
							</div>
						);
					})}
				</div>
			</div>
		</aside>
	);
};
