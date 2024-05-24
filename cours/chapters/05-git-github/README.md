# Git & GitHub

## Git

Git est un système de contrôle de version distribué qui permet de suivre les modifications apportées aux fichiers et de collaborer avec d'autres développeurs.

Installation : Git peut être installé via le site officiel git-scm.com.

Configuration initiale :

```bash
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@example.com"
```
### Commandes de base :


**git init :** Initialise un nouveau dépôt Git.
**git clone <url> :** Clone un dépôt distant.
git status : Vérifie l'état des fichiers dans le répertoire de travail.
**git add <fichier> :** Ajoute des fichiers à l'index (staging area).
**git commit -m "Message" :** Enregistre les modifications dans l'historique du projet.
**git push :** Envoie les commits vers un dépôt distant.
**git pull :** Récupère et fusionne les modifications depuis un dépôt distant.
**git branch :** Liste, crée ou supprime des branches.
**git checkout <branche> :** Change de branche ou restaure des fichiers.
**git merge <branche> :** Fusionne une branche dans la branche courante.
**git log :** Affiche l'historique des commits.

## GitHub

GitHub est une plateforme de gestion de projets et de partage de code qui utilise Git pour le contrôle de version.

Création de compte : Inscrivez-vous sur GitHub et créez un dépôt.

Interaction avec GitHub :

* Créer un dépôt :

Via l'interface web ou avec git init suivi de git remote add origin <url>.

* Collaborer :

Fork : Copiez le dépôt d'un autre utilisateur sur votre compte.
Pull Request (PR) : Proposez des modifications sur un dépôt.
Issues : Suivre les bogues et les fonctionnalités.
Actions : Automatiser les workflows avec CI/CD.

* Cloner un dépôt :

```bash
git clone https://github.com/nom-utilisateur/nom-depot.git
```

* Synchronisation :

**git remote add origin <url> :** Ajoute un dépôt distant.
**git push -u origin master :** Pousse les commits sur la branche master.
**git fetch :** Récupère les changements sans fusionner.
**git pull :** Récupère et fusionne les changements.

## Concepts avancés

Branches : Utilisées pour travailler sur des fonctionnalités indépendantes sans affecter la branche principale.

```bash
git branch nouvelle-branche
git checkout nouvelle-branche
```

Merge : Combinaison des changements de différentes branches.

```bash
git checkout master
git merge nouvelle-branche
```

Rebase : Applique une suite de commits sur une autre base.

```bash
git rebase master
```

Résolution de conflits : Parfois nécessaire lors des fusions ou des rebases.

Stash : Sauvegarde temporaire des modifications non commises.

```bash
git stash
git stash apply
```

En maîtrisant Git et GitHub, vous pouvez gérer efficacement les versions de votre code et collaborer avec d'autres développeurs de manière fluide.

## Conclusion

En conclusion, Git et GitHub sont des outils essentiels pour la gestion de versions et la collaboration en développement logiciel. Git permet de suivre l'historique des modifications et de travailler en parallèle sur différentes fonctionnalités grâce à son système de branches. GitHub enrichit cette expérience en offrant une plateforme collaborative où les développeurs peuvent partager leur code, gérer des projets, et automatiser des workflows. En combinant Git et GitHub, vous pouvez non seulement améliorer votre productivité, mais aussi garantir une meilleure qualité de code grâce à une gestion structurée et collaborative.