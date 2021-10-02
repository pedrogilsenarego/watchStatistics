import React, { useState } from "react";
import "./styles.scss";
import Typist from "react-typist";
import { useSelector } from "react-redux";

const mapState = (state) => ({
	currentUser: state.user.currentUser
});

const Welcoming = ({ children }) => {
	const { currentUser } = useSelector(mapState);
	const [hideModal, setHideModal] = useState(false);

	const toggleModal = () => setHideModal(!hideModal);

	if (hideModal) return null;

	const { displayName, userVotes } = currentUser
		? currentUser
		: { displayName: "friend" };

	return (
		<div className="container" onClick={() => toggleModal()}>
			<div className="content">
				<Typist cursor={{ show: false }}>
					<Typist.Delay ms={500} />
					<h1>&lt;h1&gt; Welcome {displayName} &lt;/h1&gt; </h1>
				</Typist>
				{!currentUser && (
					<Typist cursor={{ show: false }}>
						<Typist.Delay ms={2500} />
						<p>
							&lt;body&gt; My name is Pedro Sena Rego. <br />
							<Typist.Delay ms={800} />
							These are my projects &lt;/body&gt;{" "}
							<Typist.Backspace count={20} delay={200} />
							your projects &lt;/body&gt;
						</p>
						<Typist.Delay ms={1500} />
						<p>
							&lt;body&gt; To visit{" "}
							<span style={{ color: "#FFA500", fontWeight: "bold" }}>
								WHATCHSTATISTICS
							</span>{" "}
							you must be Logged In&lt;/body&gt;
						</p>
					</Typist>
				)}
				{currentUser && (
					<Typist cursor={{ show: false }}>
						<Typist.Delay ms={3000} />
						<p>
							&lt;body&gt; It is great to see you again <br />
							<Typist.Delay ms={500} />
							You have voted on {userVotes.length - 1} watches so far
							&lt;/body&gt;{" "}
						</p>
					</Typist>
				)}
			</div>
		</div>
	);
};

export default Welcoming;
