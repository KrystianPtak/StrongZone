import { FaMapLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { LuMails } from "react-icons/lu";

const boxData = [
	{
		id: 1,
		link: "https://maps.app.goo.gl/jKPN2oKWiUrcJuuD9",
		icon: <FaMapLocationDot />,
		boxTitle: "Address",
		details: "38 Park Avenue New York",
		target: "_blank",
	},
	{
		id: 2,
		link: "tel:+1231234567890",
		icon: <FaPhoneVolume />,
		boxTitle: "Call Us",
		details: "(123)  1234 567 890",
	},
	{
		id: 3,
		link: "mailto:przykladowy@email.com",
		icon: <LuMails />,
		boxTitle: "Email Us",
		details: "strongZone@gmail.com",
	},
];

export default boxData;
