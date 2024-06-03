export const getUsers = async (setUsers) => {
	const url = "http://localhost:8080/users";
	const options = {
		method: "GET",
	};
	const response = await fetch(url, options);
	const data = await response.json();
	setUsers(data.users);
};
