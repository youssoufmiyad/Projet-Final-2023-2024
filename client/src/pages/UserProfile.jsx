import React, { useState, useEffect } from 'eact';
import './App.css';

function Profile() {
  const [userData, setUserData] = useState(null);
  const [projects, setProjects] = useState([]);
  const [publications, setPublications] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    
    fetch('/api/users/current')
     .then(response => response.json()) 
     .then(data => setUserData(data))
     .catch(error => console.error('Error fetching user data:', error));

    
    fetch('/api/projects')
     .then(response => response.json()) 
     .then(data => setProjects(data))
     .catch(error => console.error('Error fetching project data:', error));

    fetch('/api/publications')
     .then(response => response.json()) 
     .then(data => setPublications(data))
     .catch(error => console.error('Error fetching publication data:', error));

    fetch('/api/comments')
     .then(response => response.json()) 
     .then(data => setComments(data))
     .catch(error => console.error('Error fetching comment data:', error));
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
            <img src={userData.Photo_de_profil} alt="Profile Picture" className="profile-picture" />
            <h2>{userData.Nom} {userData.Prenom}</h2>
            <p>{userData.Titre_Professionnel}</p>
            <p>{userData.Localisation}</p>
            <button>+ Rejoindre</button>
            <button>+ Suivre</button>
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
          {publications.map((publication) => (
            <li key={publication.Id_Publication}>
              <p>{publication.Contenue}</p>
              <p>Date de publication: {formatDate(publication.Date_publication)}</p>
              {}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Profile;