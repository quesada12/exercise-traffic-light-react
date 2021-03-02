import React, { useState, useEffect } from "react";
import "../../styles/style.css";

export function TrafficLight() {
	const [light, setLight] = useState("");
	const [redLight, setRed] = useState("light redOff");
	const [orangeLight, setOrange] = useState("light orangeOff");
	const [greenLight, setGreen] = useState("light greenOff");

	useEffect(() => {
		if (light == "red") {
			setRed("light redOn");
			setOrange("light orangeOff");
			setGreen("light greenOff");
		}
		if (light == "orange") {
			setRed("light redOff");
			setOrange("light orangeOn");
			setGreen("light greenOff");
		}
		if (light == "green") {
			setRed("light redOff");
			setOrange("light orangeOff");
			setGreen("light greenOn");
		}
	});

	return (
		<div className="container d-flex flex-column align-items-center mt-3">
			<div className="cable"></div>
			<div className="trafficLight">
				<div className={redLight} onClick={() => setLight("red")}></div>
				<div
					className={orangeLight}
					onClick={() => setLight("orange")}></div>
				<div
					className={greenLight}
					onClick={() => setLight("green")}></div>
			</div>
		</div>
	);
}
