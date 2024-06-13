import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Person } from "@mui/icons-material";

const Profile = () => {
	const { id } = useParams();

	const [userData, setUserData] = useState(null);
	const [projects, setProjects] = useState([]);
	const [publications, setPublications] = useState([]);
	const [comments, setComments] = useState([]);

	useEffect(() => {
		// lien de l'api des utilisateurs
		fetch(`http://localhost:8080/users/${id}`)
			.then((response) => response.json())
			.then((data) => setUserData(data))
			.catch((error) => console.error("Error fetching user data:", error));

		fetch("/api/projects")
			.then((response) => response.json())
			.then((data) => setProjects(data))
			.catch((error) => console.error("Error fetching project data:", error));

		fetch("http://localhost:8081/posts/")
			.then((response) => response.json())
			.then((data) => setPublications(data))
			.catch((error) =>
				console.error("Error fetching publication data:", error),
			);
      console.log(publications)

		fetch("/api/comments")
			.then((response) => response.json())
			.then((data) => setComments(data))
			.catch((error) => console.error("Error fetching comment data:", error));
	}, []);

	const formatDate = (dateString) => {
		const date = new Date(dateString);
		return date.toLocaleDateString();
	};

	return (
		<div className="container">
			<div className="user-profile">
				{userData && (
					<>
						{userData.Photo_de_profil ? (
							<img
								src={userData.Photo_de_profil}
								alt="Profile Picture"
								className="profile-picture"
							/>
						) : (
							<Person />
						)}

						<h2>
							{userData.Nom} {userData.Prenom}
						</h2>
						{userData.Titre_Professionnel ? (
							<p>{userData.Titre_Professionnel}</p>
						) : (
							false
						)}
						{userData.Localisation ? <p>{userData.Localisation}</p> : false}
						<button type="button">+ Rejoindre</button>
						<button type="button">+ Suivre</button>
					</>
				)}
			</div>

			<div className="description">
				<h3>Description</h3>
				{}
			</div>

			<div className="projects">
				<h3>Projects</h3>
				<ul>
					{projects.map((project) => (
						<li key={project.Id_Projet}>
							<h4>{project.Nom_du_Projet}</h4>
							<p>{project.Description}</p>
							<p>Date de début: {formatDate(project.Date_debut)}</p>
							<p>Date de fin: {formatDate(project.Date_fin)}</p>
						</li>
					))}
				</ul>
			</div>

			<div className="publications">
				<h3>Publications</h3>
				<ul>
					{publications.length > 0
						? publications.map((publication) => (
								<li key={publication.Id_Publication}>
									<p>{publication.Contenue}</p>
									<p>
										Date de publication:{" "}
										{formatDate(publication.Date_publication)}
									</p>
									{}
								</li>
						  ))
						: false}
				</ul>
			</div>
		</div>
	);
};

export default Profile;
