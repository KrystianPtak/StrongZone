import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ScrollToTop } from "react-router-scroll-to-top";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Blog from "./pages/Blog";
import BlogId from "./components/BlogContent/Article/Article";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";

function App() {
	const location = useLocation();
	return (
		<>
			<Navbar />
			<AnimatePresence mode="wait" initial={false}>
				<ScrollToTop />
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/faq" element={<Faq />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/blog/:id" element={<BlogId />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</AnimatePresence>
		</>
	);
}

export default App;
