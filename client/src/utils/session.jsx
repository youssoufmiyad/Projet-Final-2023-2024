export const connexion = (user) => {
	sessionStorage.setItem("id", user.ID);

	window.location.replace("../");
};

export const deconnexion = () => {
	sessionStorage.clear();
	window.location.reload();
};