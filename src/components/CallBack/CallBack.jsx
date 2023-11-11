import "./CallBack.scss";
import Modal from "../Modal/Modal";
import { FaPhoneVolume } from "react-icons/fa6";
import { useState } from "react";

const CallBack = () => {
	const [openModal, setOpenModal] = useState(false);

	return (
		<section className="callBack">
			<h2 className="callBack__title">
				We Are Professional And Expert In Fitness
			</h2>
			<FaPhoneVolume className="callBack__icon" />
			<p className="callBack__text">Request a FREE call back</p>
			<p>Our team is here to assist you with any questions you may have.</p>
			<button className="callBack__btn" onClick={() => setOpenModal(true)}>
				Send Request
			</button>
			<Modal open={openModal} onClose={() => setOpenModal(false)} />
		</section>
	);
};

export default CallBack;
