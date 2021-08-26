// inicializado como array, provavelmente nao deve de ser isto "false"?
export default function authReducer(state = [], action) {
	switch (action.type) {
		case "LOGIN_USER":
			return [...state, { ...action.user }];
		default:
			return state;
	}
}
