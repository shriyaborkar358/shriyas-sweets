import React from "react";
import "./Home.css";
import SweetCard from "../../components/SweetCard/SweetCard";
import { PRODUCT, SHOP_NAME, SUB_TITILE, THEME} from "../../config/data.js";

function Home() {

  return (
    <div>
      <h1 className="sweet-center-heading" style={{color:THEME.heading, margin:0}}>{SHOP_NAME}</h1>
      <p className="sweet-center-subheading" style={{color: THEME.heading}}>{SUB_TITILE}</p>
      <div className="sweetcard-main-container">
        {PRODUCT.map((sweetcake) => {
          return (
            <SweetCard
              image={sweetcake.image}
              title={sweetcake.title}
              description={sweetcake.description}
              IsVeg={sweetcake.IsVeg}
              price={sweetcake.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
