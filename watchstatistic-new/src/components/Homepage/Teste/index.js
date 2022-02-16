import React from "react";
import "./styles.scss";

const Teste = () => {
	return (
		<div>
			<div className="mainContainer">
				<div className="container2">
					<p className="text">1</p>
					<p className="text">2</p>
					<p className="text">3</p>
					<p className="text">4</p>
				</div>
				<div className="container3">
					<p className="text" style={{ backgroundColor: "green" }}>
						11
					</p>
					<p className="text">12</p>
					<p className="text">13</p>
				</div>
			</div>
			<div className="footer">
				<p>teste this shit</p>
				<p>teste this shit</p>
			</div>
		</div>
	);
};

export default Teste;
