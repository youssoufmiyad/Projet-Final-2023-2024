# API Publications

Je vous présente mon API sur le thème des valeureux guerrier de l'espace : les jedis.

Cette API a été testé avec l'aide de postman.

## Routes

### *GET* /
Renvoi la liste de toutess les publications postées.

#### Réponse : 
*Code :* 200 OK
```json

"users": [
        {
            "ID": 1,
            "Nom": "Miyad",
            "Prenom": "YOUSSOUF ALI",
            "Email": "youssoufmiyad@gmail.com",
            "Mot_de_passe": "-638564411-1920175962-473897144-787641463-444063167-4230384951194721206884667419",
            "Photo_de_profil": null,
            "Titre_Professionnel": null
        },
        {
            "ID": 2,
            "Nom": "Alexis",
            "Prenom": "Cazin",
            "Email": "alexis.cazin@mail.com",
            "Mot_de_passe": "-638564411-1920175962-473897144-787641463-444063167-4230384951194721206884667419",
            "Photo_de_profil": null,
            "Titre_Professionnel": null
        }
]
```

### *POST* /
*Parametres :*
```json
{
    "Nom": "[Text]",
    "Prenom": "[Date]",
    "Email": "[Number]",
    "Mot_de_passe": "[Text]",
    "Photo_de_profil": "[Binary file]",
    "Titre_Professionnel": "[Text]"
}
```

Enregistre les données de l'utilisateur.

*Exemples :*
```json
{
    "Nom": "Hakimi",
    "Prenom": "Achraf",
    "Email": "achraf.hakimi@mail.com",
    "Mot_de_passe": "-638564411-1920175962-473027144-787641463-444063167-4230384951194721206884667419",
    "Photo_de_profil": null,
    "Titre_Professionnel": null
}

```

#### Réponse : 
*Code :* 200 OK Message : "user has been created"

### *GET* /{id}
Renvoi l'utilisateur inscrit à l'identifiant {id}.

#### Réponse :
Exemple : /posts/8

*Code :* 200 OK
```json
{
    "ID": 8,
    "Nom": "Alexis",
    "Prenom": "Cazin",
    "Email": "alexis.cazin@mail.com",
    "Mot_de_passe": "-638564411-1920175962-473897144-787641463-444063167-4230384951194721206884667419",
    "Photo_de_profil": null,
    "Titre_Professionnel": null
}
```

### *PATCH* /{id}
*Parametres :*
```json
{
    "Nom": "[Text]",
    "Prenom": "[Date]",
    "Email": "[Number]",
    "Mot_de_passe": "[Text]",
    "Photo_de_profil": "[Binary file]",
    "Titre_Professionnel": "[Text]"
}
```

Modifie les données de l'utilisateur inscrit à l'identifiant {id}.

#### Réponse :
*Code :* 200 OK Message : "user has been updated"

### *DELETE* /{id}
Supprime un utilisateur de la base de données.


#### Réponse :
*Code :* 200 OK Message : "user has been deleted"

### *GET* /{id}/relations

Renvoi toutes les relations de l'utilisateur (les utilisateurs qui suive et les utilisateurs suivi)

Exemple : /1/relations

*Code :* 200 OK

```json
"relations": [
        {
            "Id_Utilisateur1": 1,
            "Id_Utilisateur2": 2,
            "Follows": 0
        },
        {
            "Id_Utilisateur1": 2,
            "Id_Utilisateur2": 1,
            "Follows": 1
        },
        {
            "Id_Utilisateur1": 1,
            "Id_Utilisateur2": 8,
            "Follows": 1
        }
    ]
```

### *GET* /{id1}/follows/{id2}

Renvoi si oui ou non l'utilisateur à l'id {id1} suis l'utilisateur à l'id {id2}

Exemple : /1/follows/8

*Code :* 200 OK

```json
{
    "isFollowing": 1
}
```

### *POST* /{id1}/change-follow/{id2}

Change l'état de la relation entre l'utilisateur à l'id {id1} suis l'utilisateur à l'id {id2}

*Code :* 200 OK Message: 'follow status changed"
