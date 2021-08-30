import React, { Component } from "react";

import { signInWithGoogle } from "../../services/Firebase/config/utils";

class SignIn extends Component {
	handleSubmit = async (e) => {
		e.preventDefault();
	};

	render() {
		return (
			<div className="Signin">
				<h1> Login</h1>
				<form onSubmit={this.handleSubmit}>
					<div>
						<button onCLick={signInWithGoogle}>Google</button>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
