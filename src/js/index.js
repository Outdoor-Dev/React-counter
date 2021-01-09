//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";
import { ProgressPlugin } from "webpack";

//import your own components
const SimpleCounter = props => {
	return (
		<>
			<div className="container">
				<div className="fourth">{props.digitFour}</div>
				<div className="third">{props.digitThree}</div>
				<div className="second">{props.digitTwo}</div>
				<div className="first">{props.digitOne}</div>
			</div>
		</>
	);
};

SimpleCounter.propTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};
let counter = 0;
setInterval(function() {
	ReactDOM.render(
		<SimpleCounter digitOne={counter.indexOf()} />,
		document.querySelector("#app")
	);
}, 1000);

//render your react application
