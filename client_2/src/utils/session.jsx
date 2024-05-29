export const connexion = (user) => {
	localStorage.setItem("id", user._id);
	localStorage.setItem("username", user.username);
	localStorage.setItem("email", user.email);
	localStorage.setItem("password", user.password);

	window.location.replace("../");
};

export const deconnexion = () => {
	localStorage.clear();
	
	window.location.reload();
};