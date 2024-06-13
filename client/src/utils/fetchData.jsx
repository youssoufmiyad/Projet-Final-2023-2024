import hashPassword from "./hashPassword";

export const createUser = async (firstName, lastname, email, password) => {
	const hashPWD = hashPassword(password);
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			firstname: firstName,
			lastname: lastName,
			email: email,
			password: hashPWD,
		}),
	};
	const response = await fetch("http://localhost:8080/users", requestOptions);
	window.location.replace("../");
};

export const getUsers = async (setUsers) => {
	const url = "http://localhost:8080/users";
	const options = {
		method: "GET",
	};
	const response = await fetch(url, options);
	const data = await response.json();
	setUsers(data.users);
};

export const getUser = async (setUser, id) => {
	const url = `http://localhost:8080/users/${id}`;
	const options = {
		method: "GET",
	};
	const response = await fetch(url, options);
	const data = await response.json();
	console.log(data);
	setUser(data);
};

export const getPosts = async (setPosts) => {
	const url = "http://localhost:8081/posts";
	const options = {
		method: "GET",
	};
	const response = await fetch(url, options);
	const data = await response.json();
	setPosts(data.posts);
};

export const publishPost = async (userId, content, image) => {
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			userId: userId,
			content: content,
			image: image,
			date: new Date().toISOString().slice(0, 19).replace("T", " "),
		}),
	};
	const response = await fetch("http://localhost:8081/posts", requestOptions);
};

export const getRelations = async (setRelations, id) => {
	const url = `http://localhost:8080/users/${id}/relations`;
	const options = {
		method: "GET",
	};
	const response = await fetch(url, options);
	const data = await response.json();
	console.log(data);
	setRelations(data);
};

export const follows = async (id1, id2) => {
	// test si l'user 1 follow l'user 2
	const url = `http://localhost:8081/users/${id1}/follows/${id2}`;
	const options = {
		method: "GET",
	};
	await fetch(url, options);
	return await response.json().isFollowing;
};

export const areMutuals = async (id1, id2) => {
	const user1Follows = follows(id1, id2);
	const user2Follows = follows(id2, id1);

	return user1Follows + user2Follows === 2;
};

export const toggleFollow = (id1, id2) => {};
