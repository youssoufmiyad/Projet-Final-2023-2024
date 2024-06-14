# API Publications

Cette API a été testé avec l'aide de postman.

## Routes

### *GET* /
Renvoi la liste de toutess les publications postées.

#### Réponse : 
*Code :* 200 OK
```json
"posts": [
        {
            "Id_Publication": 1,
            "Contenue": "Super belle journée",
            "Date_publication": "2024-06-12T00:00:00.000Z",
            "Id_Utilisateur": 1,
            "Image": null
        },
        {
            "Id_Publication": 2,
            "Contenue": "Quelle horrible journée",
            "Date_publication": "2024-06-12T00:00:00.000Z",
            "Id_Utilisateur": 1,
            "Image": null
        },
        {
            "Id_Publication": 3,
            "Contenue": "Journée mitigée aujourd'hui",
            "Date_publication": "2024-06-12T00:00:00.000Z",
            "Id_Utilisateur": 1,
            "Image": null
        },
]
```

### *POST* /
*Parametres :*
```json
{
    "Contenue": "[Text]",
    "Date_publication": "[Date]",
    "Id_Utilisateur": "[Number]",
    "Image": "[Binary file]"}
```

Enregistre les données du post.

*Exemples :*
```json
{
    "Contenue": "Je suis nouveau ici bonsoir.",
    "Date_publication": "2024-08-12T00:00:00.000Z",
    "Id_Utilisateur": 4,
    "image": null}
```

#### Réponse : 
*Code :* 200 OK Message : "Post has been created"

### *GET* /{id}
Renvoi le post inscrit à l'identifiant {id}.

#### Réponse :
Exemple : /posts/1

*Code :* 200 OK
```json
{
    "Id_Publication": 1,
    "Contenue": "tt faire comme l'ancien",
    "Date_publication": "2024-06-12T00:00:00.000Z",
    "Id_Utilisateur": 1,
    "Image": null}
```

### *PATCH* /{id}
*Parametres :*
```json
{
    "Contenue": "[Text]",
    "Date_publication": "[Date]",
    "Id_Utilisateur": "[Number]",
    "Image": "[Binary file]"}
```

Modifie les données du post inscrit à l'identifiant {id}.

#### Réponse :
*Code :* 200 OK Message : "Post has been updated"

### *DELETE* /{id}
Supprime un post de la base de données.


#### Réponse :
*Code :* 200 OK Message : "Post has been deleted"
