import "./Map.scss";

const Map = () => {
	return (
		<div className="map">
			<iframe
				className="map__frame"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57582.64373583609!2d-73.99197981424413!3d40.6670296664691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fff19a85523%3A0x71500441f3b2c337!2sOwl&#39;s%20Head%20Park!5e0!3m2!1spl!2spl!4v1696409486045!5m2!1spl!2spl"
				width="600"
				height="450"
				allowFullScreen=""
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
				title="New York"
			></iframe>
		</div>
	);
};

export default Map;
