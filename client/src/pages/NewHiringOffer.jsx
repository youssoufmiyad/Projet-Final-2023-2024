import React, { useState, useEffect } from 'eact';
import axios from 'axios';

function NewHiringOffer() {
  const [project, setProject] = useState({});
  const [members, setMembers] = useState([]);
  const [opportunities, setOpportunities] = useState([]);
  const [followed, setFollowed] = useState(false);

  useEffect(() => {
    const projectId = window.location.pathname.split('/').pop();
    axios.get(`/api/projects/${projectId}`)
     .then(response => {
        setProject(response.data);
      })
     .catch(error => {
        console.error(error);
      });

    axios.get(`/api/projects/${projectId}/members`)
     .then(response => {
        setMembers(response.data);
      })
     .catch(error => {
        console.error(error);
      });

    axios.get(`/api/projects/${projectId}/opportunities`)
     .then(response => {
        setOpportunities(response.data);
      })
     .catch(error => {
        console.error(error);
      });

    axios.get(`/api/users/${userId}/following/${projectId}`)
     .then(response => {
        setFollowed(response.data.following);
      })
     .catch(error => {
        console.error(error);
      });
  }, []);

  const handleJoin = () => {
    axios.post(`/api/projects/${project.id}/join`)
     .then(response => {
        setMembers([...members, { id: response.data.id, name: response.data.name }]);
      })
     .catch(error => {
        console.error(error);
      });
  };

  const handleFollow = () => {
    axios.post(`/api/users/${userId}/follow/${project.id}`)
     .then(response => {
        setFollowed(true);
      })
     .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <header>
        <div className="logo">LOGO</div>
        <div className="search-bar">
          <input type="text" placeholder="Trouvez votre prochain projet" />
          <button><img src="search-icon.svg" alt="Search" /></button>
        </div>
        <div className="user-profile">
          <img src="user-profile.jpg" alt="User Profile" />
          <img src="notification-icon.svg" alt="Notifications" />
        </div>
        <button className="new-project-button">+ NOUVEAU PROJET</button>
      </header>

      <main>
        <section className="project-details">
          <div className="container">
            <h2 className="section-title">Section 10</h2>
            <div className="project-banner">
              <img src={project.banner} alt="Project Banner" />
            </div>
            <div className="project-info">
              <h3>{project.name}</h3>
              <ul>
                <li>Type de projet : {project.type}</li>
                <li>Nombre de membres : {members.length}</li>
                <li>Localisation : {project.location}</li>
              </ul>
              <button className="join-button" onClick={handleJoin}>+ Rejoindre</button>
              <button className="follow-button" onClick={handleFollow}>+ Suivre</button>
            </div>
          </div>
        </section>

        <section className="project-description">
          <div className="container">
            <h3>Description</h3>
            <div className="description-content">
              {project.description}
            </div>
          </div>
        </section>

        <section className="project-opportunities">
          <div className="container">
            <h3>Opportunités</h3>
            <div className="opportunities-content">
              {opportunities.map(opportunity => (
                <div key={opportunity.id} className="opportunity">
                  <h4>{opportunity.title}</h4>
                  <p>{opportunity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2023 Your Company Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default NewHiringOffer;