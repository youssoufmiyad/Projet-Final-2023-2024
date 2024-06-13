const express = require("express");
const bodyParser = require("body-parser");
const pool = require("../db/connect");

const router = express.Router();

router.get("/", async (req, res) => {
	const sql = "SELECT * from Publication";
	try {
		const [rows] = await pool.query(sql);
		if (!rows.length) return res.status(204).json({ message: "empty list" });
		return res.status(200).json({ posts: rows });

	} catch (error) {
		return res.status(500).json({ message: error });
	}

});

router.get("/:id", getPost, (req, res) => {
	res.json(res.post);
});

router.post("/", bodyParser.json(), async (req, res) => {
	console.log(req.body);

	try {
		const sql =
			"INSERT INTO Publication (Id_Publication, Contenue, Date_publication, Id_Publication, Image) VALUES (?, ?, ?, ?, ?)";
		await pool.query(sql, [
			req.body.postId,
			req.body.content,
			req.body.date,
			req.body.userId,
			req.body.image
		]);
	} catch (error) {
		return res.status(404).json({ message: error.message });
	}

	return res.status(201).json({ message: "Post has been created" });
});

router.patch("/:id", bodyParser.json(), getPost, async (req, res) => {
	if (req.body.postId != null) {
		res.post.postId = req.body.postId;
	}
	if (req.body.content != null) {
		res.post.content = req.body.content;
	}
	if (req.body.date != null) {
		res.post.date = req.body.date;
	}
	if (req.body.userId != null) {
		res.post.userId = req.body.userId;
	}
	if (req.body.image != null) {
		res.post.image = req.body.image;
	}

	if (!res.post) return res.status(404).json({ message: "Post not found" });

	const sql =
		"UPDATE Publication SET Contenue = ?, Date_publication = ?, Image = ? WHERE Id_Publication = ?";
	await pool.query(sql, [
		req.body.content,
		req.body.date,
		req.body.image,
		req.params.id,

	]);

	return res.status(201).json({ message: "Post has been updated" });
});

router.delete("/:id", getPost, async (req, res) => {
	if (!req.params.id)
		return res.status(400).json({ message: "Id is required" });

	if (!res.post) return res.status(404).json({ message: "Post not found" });

	const sql = "DELETE FROM Publication WHERE id = ?";
	await pool.query(sql, [req.params.id]);

	return res.status(200).json({ message: "Post has been deleted" });
});

// MIDDLEWARE
async function getPost(req, res, next) {
	const sql = "SELECT * FROM Publication WHERE id = ?";
	const [rows] = await pool.query(sql, [req.params.id]);

	res.post = rows[0];
	next();
}

module.exports = router;
