import React, { useState } from "react";

function NewProject() {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [invitedFriends, setInvitedFriends] = useState([]);
  const [presentationImage, setPresentationImage] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);

  const handleProjectNameChange = (event) => {
    setProjectName(event.target.value);
  };

  const handleProjectDescriptionChange = (event) => {
    setProjectDescription(event.target.value);
  };

  const handleAddFriend = (event) => {
    setInvitedFriends([...invitedFriends, event.target.value]);
  };

  const handlePresentationImageChange = (event) => {
    setPresentationImage(event.target.files[0]);
  };

  const handleBannerImageChange = (event) => {
    setBannerImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form data to the server
    console.log("Form submitted:", {
      projectName,
      projectDescription,
      invitedFriends,
      presentationImage,
      bannerImage,
    });
  };

  return (
    <div className="new-project-form">
      <h2>NOUVEAU PROJET</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="project-name">Nom du projet:</label>
          <input
            type="text"
            id="project-name"
            value={projectName}
            onChange={handleProjectNameChange}
          />
        </div>
        <div>
          <label htmlFor="project-description">Description:</label>
          <textarea
            id="project-description"
            value={projectDescription}
            onChange={handleProjectDescriptionChange}
          />
        </div>
        <div>
          <label htmlFor="invited-friends">Envoyer des invitations:</label>
          <input
            type="text"
            id="invited-friends"
            placeholder="Ami 1, Ami 2, ..."
            onChange={handleAddFriend}
          />
          <ul>
            {invitedFriends.map((friend, index) => (
              <li key={index}>{friend}</li>
            ))}
          </ul>
        </div>
        <div>
          <label htmlFor="presentation-image">
            Photo de présentation:
          </label>
          <input
            type="file"
            id="presentation-image"
            accept="image/*"
            onChange={handlePresentationImageChange}
          />
        </div>
        <div>
          <label htmlFor="banner-image">Bannière:</label>
          <input
            type="file"
            id="banner-image"
            accept="image/*"
            onChange={handleBannerImageChange}
          />
        </div>
        <button type="submit">Poster</button>
      </form>
    </div>
  );
}

export default NewProject;
