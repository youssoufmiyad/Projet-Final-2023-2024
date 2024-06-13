const express = require("express");
const bodyParser = require("body-parser");
const pool = require("../db/connect");

const router = express.Router();

// AUTHENTIFICATION
router.get("/", async (req, res) => {
	const sql = "SELECT * from Utilisateur";
	try {
		const [rows] = await pool.query(sql);
		if (!rows.length) return res.status(204).json({ message: "empty list" });
		return res.status(200).json({ users: rows });
	} catch (error) {
		return res.status(500).json({ message: error });
	}
});

router.get("/:id", getUser, (req, res) => {
	res.json(res.user);
});

router.post("/", bodyParser.json(), async (req, res) => {
	// const { username, email, password } = req.body;
	console.log(req.body);

	try {
		const sql =
			"INSERT INTO Utilisateur (Nom, Prenom, Email, Mot_de_passe) VALUES (?, ?, ?, ?)";
		await pool.query(sql, [
			req.body.firstname,
			req.body.lastname,
			req.body.email,
			req.body.password,
		]);
	} catch (error) {
		return res.status(404).json({ message: error.message });
	}

	return res.status(201).json({ message: "user has been created" });
});

router.patch("/:id", bodyParser.json(), getUser, async (req, res) => {
	if (req.body.firstname != null) {
		res.user.firstname = req.body.firstname;
	}
	if (req.body.lastname != null) {
		res.user.lastname = req.body.lastname;
	}
	if (req.body.email != null) {
		res.user.email = req.body.email;
	}
	if (req.body.password != null) {
		res.user.password = req.body.password;
	}

	if (!res.user) return res.status(404).json({ message: "user not found" });

	const sql =
		"UPDATE Utilisateur SET Prenom = ? , Nom = ?, Email = ?, Mot_de_passe = ? WHERE id = ?";
	await pool.query(sql, [
		req.body.firstname,
		req.body.lastname,
		req.body.email,
		req.body.password,
		req.params.id,
	]);

	return res.status(201).json({ message: "user has been updated" });
});

router.delete("/:id", getUser, async (req, res) => {
	if (!req.params.id)
		return res.status(400).json({ message: "Id is required" });

	if (!res.user) return res.status(404).json({ message: "user not found" });

	const sql = "DELETE FROM Utilisateur WHERE id = ?";
	await pool.query(sql, [req.params.id]);

	return res.status(200).json({ message: "user has been deleted" });
});

// MIDDLEWARE
async function getUser(req, res, next) {
	const sql = "SELECT * FROM Utilisateur WHERE id = ?";
	const [rows] = await pool.query(sql, [req.params.id]);

	res.user = rows[0];
	next();
}

// RELATIONS
router.get("/:id/relations", async (req, res) => {
	const sql =
		"SELECT * FROM relations WHERE Id_Utilisateur_1 = ? OR Id_Utilisateur_2 = ?";
	try {
		const [rows] = await pool.query(sql, [req.params.id, req.params.id]);
		if (!rows.length) return res.status(204).json({ message: "empty list" });
		return res.status(200).json({ relations: rows });
	} catch (error) {
		return res.status(500).json({ message: error });
	}
});

router.get("/:id1/follows/:id2", async (req, res) => {
	const sql =
		"SELECT * FROM Relations WHERE Id_Utilisateur1 = ? AND Id_Utilisateur2 = ? AND Follows = 1";
	try {
		const [rows] = await pool.query(sql, [req.params.id1, req.params.id2]);
		if (!rows.length) return res.status(204).json({ isFollowing : 0});
		return res.status(200).json({ isFollowing: rows[0].Follows });
	} catch (error) {
		return res.status(500).json({ message: error });
	}
});

module.exports = router;
