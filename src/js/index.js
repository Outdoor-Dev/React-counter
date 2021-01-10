//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
const SimpleCounter = props => {
	return (
		<>
			<div className="container">
				<div>
					<i className="fas fa-hourglass-half" />
				</div>
				<div className="sixth"> {props.digitSix % 10}</div>
				<div className="fifth"> {props.digitFive % 10}</div>
				<div className="fourth">{props.digitFour % 10}</div>
				<div className="third">{props.digitThree % 10}</div>
				<div className="second">{props.digitTwo % 10}</div>
				<div className="first">{props.digitOne % 10}</div>
			</div>
		</>
	);
};

SimpleCounter.propTypes = {
	digitSix: PropTypes.number,
	digitFive: PropTypes.number,
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};
let counter = 0;
setInterval(function() {
	const six = Math.floor(counter / 100000);
	const five = Math.floor(counter / 10000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);

	counter++;
	ReactDOM.render(
		<SimpleCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
			digitFive={five}
			digitSix={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);

//render your react application
