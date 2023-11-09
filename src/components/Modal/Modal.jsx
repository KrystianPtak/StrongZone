import "./Modal.scss";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InputMask from "react-input-mask";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ open, onClose }) => {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");
	const [isMessageSent, setIsMessageSent] = useState(false);

	const clearFormAndCloseModal = useCallback(() => {
		setName("");
		setPhone("");
		setMessage("");
		onClose();
	}, [onClose]);

	useEffect(() => {
		if (isMessageSent && name && phone) {
			const timer = setTimeout(() => {
				setIsMessageSent(false);
				clearFormAndCloseModal();
			}, 3000);

			return () => clearTimeout(timer);
		}
	}, [isMessageSent, name, phone, clearFormAndCloseModal]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (name && phone) {
			setMessage("Your message was sent successfully!");
			setIsMessageSent(true);

			const timer = setTimeout(() => {
				setIsMessageSent(false);
				clearFormAndCloseModal();
			}, 3000);

			return () => clearTimeout(timer);
		} else {
			setMessage("*All fields are required.");
			setIsMessageSent(true);

			const timer = setTimeout(() => {
				setMessage("");
				setIsMessageSent(false);
			}, 3000);

			return () => clearTimeout(timer);
		}
	};

	const handleClose = () => {
		clearFormAndCloseModal();
	};

	return (
		<AnimatePresence>
			{open && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					key="modal"
					onClick={handleClose}
					className="modal__overlay"
				>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 0 }}
						transition={{ duration: 1, type: "spring", bounce: 0.5 }}
						onClick={(e) => e.stopPropagation()}
						className="modal"
					>
						<h2 className="modal__title">REQUEST A CALLBACK</h2>
						<p className="modal__text">
							We can call you in 30 seconds, just enter your number
						</p>
						<form onSubmit={handleSubmit} className="modal__form">
							<input
								type="text"
								placeholder="Name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="modal__input"
							/>
							<InputMask
								mask="999-999-999"
								maskChar="_"
								type="tel"
								placeholder="Your Phone"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								className="modal__input"
							/>
							{isMessageSent && <p>{message}</p>}
							<button type="submit" className="modal__btn">
								Send
							</button>
						</form>
						<p onClick={handleClose} className="modal__close">
							<AiOutlineClose />
						</p>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default Modal;
