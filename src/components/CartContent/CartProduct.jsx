import React, { useContext } from "react";
import { CartContext } from "../ShopContext/ShopContext";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const CartProduct = (props) => {
	const { id, img, name, price } = props;
	const { items, addToCart, removeFromCart, singleProductAmount } =
		useContext(CartContext);
	const itemInfo = items[id];
	return (
		<>
			<tr className="cart__tr" key={id}>
				<td>
					<img className="cart__img" src={img} alt={name} />
				</td>
				<td className="cart__name">{name}</td>
				<td className="cart__price">${price}</td>
				<td className="cart__action">
					<button
						className="cart__action-btn"
						onClick={() => removeFromCart(id)}
					>
						<AiOutlineMinus className="cart__action-icon" />
					</button>
					<span className="cart__action-quantity">{itemInfo}</span>
					<button className="cart__action-btn" onClick={() => addToCart(id)}>
						<AiOutlinePlus className="cart__action-icon" />
					</button>
				</td>
				<td className="cart__total">${singleProductAmount(id)}</td>
			</tr>
		</>
	);
};

export default CartProduct;
