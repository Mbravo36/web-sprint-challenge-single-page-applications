import React from "react";

function NewOrder({details}){
    if (!details) {
        return <h3>Working fetching your order details...</h3>
      }
      return(
        <div>
        <h2>{details.name}</h2>
        <p>size:{details.size}</p>
        <p>pepperoni:{details.pepperoni}</p>
        <p>ham:{details.ham}</p>
        <p>meatballs:{details.meatballs}</p>
        <p>mushrooms:{details.mushrooms}</p>
        <p>special:{details.special}</p>
        {
        !!details.toppings && !!details.toppings.length &&
        <div>
          Toppings:
          <ul>
            {details.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      }
        </div>
    )
}
export default NewOrder;