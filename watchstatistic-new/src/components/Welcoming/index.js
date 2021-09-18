import React from "react";
import "./styles.scss";
import Typist from "react-typist";
import { useSelector } from "react-redux";

const mapState = (state) => ({
	currentUser: state.user.currentUser
});

const Welcoming = ({ hideModal, toggleModal, children }) => {
	const { currentUser } = useSelector(mapState);
	if (hideModal) return null;

	const { displayName } = currentUser ? currentUser : { displayName: "friend" };

	return (
		<div className="container" onClick={() => toggleModal()}>
			<div className="content">
				<Typist cursor={{ show: false }}>
					<Typist.Delay ms={500} />
					<h1>&lt;h1&gt; Welcome {displayName} &lt;/h1&gt; </h1>
				</Typist>
				<Typist cursor={{ show: false }}>
					<Typist.Delay ms={2500} />
					<p>
						&lt;body&gt; My name is Pedro Sena Rego. <br />
						These are my projects &lt;/body&gt;{" "}
					</p>
				</Typist>
			</div>
		</div>
	);
};

export default Welcoming;
