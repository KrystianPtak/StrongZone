import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	const closeNav = () => {
		setIsOpen(!isOpen);
	};

	const [navBgc, setNavBgc] = useState(false);

	useEffect(() => {
		const changeBgc = () => {
			setNavBgc(window.scrollY > 10);
		};
		window.addEventListener("scroll", changeBgc);

		return () => {
			window.removeEventListener("scroll", changeBgc);
		};
	}, []);

	return (
		<nav className={navBgc ? "navbar navbar__bgc" : "navbar"}>
			<div className="navbar__container container">
				<Link to="/" className="navbar__logo">
					<p className="navbar__logo-text">StrongZone</p>
				</Link>
				<ul
					className={
						isOpen ? "navbar__links navbar__links-active" : "navbar__links"
					}
				>
					<li>
						<NavLink className="navbar__link" to="/" onClick={closeNav}>
							HOME
						</NavLink>
					</li>
					<li>
						<NavLink className="navbar__link" to="/about" onClick={closeNav}>
							ABOUT
						</NavLink>
					</li>
					<li>
						<NavLink className="navbar__link" to="/faq" onClick={closeNav}>
							FAQ
						</NavLink>
					</li>
					<li>
						<NavLink className="navbar__link" to="/blog" onClick={closeNav}>
							BLOG
						</NavLink>
					</li>
					<li>
						<NavLink className="navbar__link" to="/contact" onClick={closeNav}>
							CONTACT
						</NavLink>
					</li>
				</ul>
				<div className="navbar__hamburger" onClick={handleClick}>
					{isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
