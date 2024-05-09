export const connexion = (user) => {
	sessionStorage.setItem("id", user._id);
	sessionStorage.setItem("username", user.username);
	sessionStorage.setItem("email", user.email);
	sessionStorage.setItem("password", user.password);

	window.location.replace("../");
};

export const deconnexion = () => {
	sessionStorage.clear();
	window.location.reload();
};