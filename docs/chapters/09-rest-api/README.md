# Introduction aux API REST

Une API (Application Programming Interface) est un ensemble de règles qui permet à des applications de communiquer entre elles. REST (Representational State Transfer) est un style architectural pour concevoir des API.


## Concepts Clés des API REST

### Ressources

Définition : Une ressource est toute information qui peut être nommée, telle qu'un document ou une image.
Identifiant : Chaque ressource est identifiée par un URI (Uniform Resource Identifier). Par exemple : https://api.exemple.com/utilisateurs/123.

### Verbes HTTP

**GET** : Récupérer une ressource.
**POST** : Créer une nouvelle ressource.
**PUT** : Mettre à jour une ressource existante.
**DELETE** : Supprimer une ressource.
**PATCH** : Mettre à jour partiellement une ressource.


### Statuts HTTP :

**200 OK** : La requête a réussi.
**201 Created** : Une ressource a été créée.
**204 No Content** : La requête a réussi mais ne retourne aucune ressource.
**400 Bad Request** : La requête est invalide.
**401 Unauthorized** : Authentification nécessaire.
**404 Not Found** : Ressource non trouvée.
**500 Internal Server Error** : Erreur côté serveur.

### Exemples de Requêtes REST
* Récupérer tous les utilisateurs :

```
GET /utilisateurs
```

* Récupérer un utilisateur spécifique :

```
GET /utilisateurs/123
```

* Créer un nouvel utilisateur :


```
POST /utilisateurs
{
  "nom": "John Doe",
  "email": "john.doe@example.com"
}
```

* Mettre à jour un utilisateur existant :

```
PUT /utilisateurs/123
{
  "nom": "Jane Doe",
  "email": "jane.doe@example.com"
}
```

* Supprimer un utilisateur :


```
DELETE /utilisateurs/123
```

## Bonnes Pratiques

* **Versionnement :** Inclure une version dans l'URL de l'API (par exemple, v1, v2).
* **Utilisation du JSON :** JSON est le format de choix pour les réponses et les requêtes car il est léger et largement utilisé.
* **Sécurité :** Utiliser HTTPS pour sécuriser les communications et les jetons d'authentification (comme OAuth).
* **Documentation :** Fournir une documentation claire et détaillée pour aider les développeurs à comprendre et utiliser l'API.


## Conclusion

Les API REST sont essentielles pour la communication entre les applications dans un environnement distribué. En suivant les principes REST et les bonnes pratiques, on peut créer des API robustes, flexibles et faciles à maintenir