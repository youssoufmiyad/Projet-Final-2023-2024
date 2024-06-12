CREATE TABLE Projet (
    Id_Projet INT PRIMARY KEY,
    Nom_du_Projet VARCHAR(255),
    Description TEXT,
    Date_debut DATE,
    Date_fin DATE,
    Id_Utilisateur INT
);


CREATE TABLE Utilisateur (
    Id_Utilisateur INT PRIMARY KEY,
    Nom VARCHAR(255),
    Prenom VARCHAR(255),
    Email VARCHAR(255),
    Mot_de_passe VARCHAR(255),
    Photo_de_profil BLOB,
    Titre_Professionnel VARCHAR(255)
);


CREATE TABLE Publication (
    Id_Publication INT PRIMARY KEY,
    Contenue TEXT,
    Date_publication DATE,
    Id_Utilisateur INT,
    FOREIGN KEY (Id_Utilisateur) REFERENCES Utilisateur(Id_Utilisateur)
);


CREATE TABLE Commentaire (
    Id_Commentaire INT PRIMARY KEY,
    Contenu TEXT,
    Date_commentaire DATE,
    Id_Publication INT,
    Id_Utilisateur INT,
    FOREIGN KEY (Id_Publication) REFERENCES Publication(Id_Publication),
    FOREIGN KEY (Id_Utilisateur) REFERENCES Utilisateur(Id_Utilisateur)
);


CREATE TABLE Participation (
    Id_Participation INT PRIMARY KEY,
    Id_Projet INT,
    Id_Utilisateur INT,
    Role VARCHAR(255),
    Date_Adhesion DATE,
    FOREIGN KEY (Id_Projet) REFERENCES Projet(Id_Projet),
    FOREIGN KEY (Id_Utilisateur) REFERENCES Utilisateur(Id_Utilisateur)
);


CREATE TABLE Like (
    Id_Like INT PRIMARY KEY,
    Id_Publication INT,
    Id_Utilisateur INT,
    FOREIGN KEY (Id_Publication) REFERENCES Publication(Id_Publication),
    FOREIGN KEY (Id_Utilisateur) REFERENCES Utilisateur(Id_Utilisateur)
);


CREATE TABLE Follow (
    Id_Follow INT PRIMARY KEY,
    Id_Utilisateur1 INT,
    Id_Utilisateur2 INT,
    FOREIGN KEY (Id_Utilisateur1) REFERENCES Utilisateur(Id_Utilisateur),
    FOREIGN KEY (Id_Utilisateur2) REFERENCES Utilisateur(Id_Utilisateur)
);