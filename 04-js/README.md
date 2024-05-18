# JS

Le JavaScript est un langage de programmation qui permet de rendre des pages Web dynamiques. Ce dynamisme se manifeste très souvent par des comportements programmables qui permettent à la page Web de se comporter différemment lorsque telle ou telle autre chose survient.

L'exemple le plus simple que l'on va faire sera de créer une page dont l'arrière plan change à chaque clic.

Premièrement examinons les différents briques de bases pour pouvoir construire un tel programme.

Tout d'abord, les outils nécessaires:

* Un **éditeur** pour écrire notre code source
* Un **navigateur** pour interpréter (afficher)

## Les bases du JS

### Les variables

Une variable sert à stocker une valeur utile pour le programme lors de son fonctionnement.

Pour créer une variable, nous utilisons le mot clé `let`.

Il existe plusieurs type de données:

* Numérique
* Booléen
* String
* Object
* Array

Pour résumer, retenons ceux-là ! Ils feront le taff presque 90% du temps.

```js
let sentence = "Bienvenue au FODR"
console.log(sentence)

let name = "Moustapha"
let age = 10
console.log(name, "a", age, "ans")

let values = [12, 45, 89]
console.log(values[0])

let person = {
    name: 'Moustapha',
    city: 'Mamou',
    dob: '1999-05-17',
}

console.log(person.age)
console.log(person['city'])
console.log(person.dob)
```

Alors, la console est certes un endroit où l'on peut expérimenter, mais ce n'est pas adapté pour écrire des script.

Alors, nous allons résoudre notre premier projet, changer dynamiquement l'arrière plan.

**Source Code:** [Random Color Generator](ColorGenerator.html)

### Conditions & Boucles

Lorsque vous programmez en JS, il arrive très souvent de vouloir automatiser des tâches, répéter et controller le flux d'exécution.

Les **conditions** permettent de controller le flow de notre programme, alors il existe principalement trois façons:

* `if else`
* `switch`
* `ternary`

Les opérateurs de comparation et aussi logiques permettent d'exprimer les conditions.

Les **boucles** permettent quant à elles de repéter des actions, ou alors un bloc d'instructions.

**Exemple**

```js
// prenons une liste de personnes:
const persons = [
    {
        nom: 'Moustapha',
        dob: '12-12-1999',
    },
    {
        nom: 'Oury',
        dob: '12-05-2000',
    },
    {
        nom: 'Aïssatou',
        dob: '05-20-2001',
    },
    {
        nom: 'Moustapha',
        dob: '17-07-2000',
    },
]

// Liste de tous le monde
for(let i = 0; i < persons.length; i++)
{
    console.log(`${i + 1}: ${persons[i].nom} (${persons[i].dob})`)
}

// Liste des personnes nées à partir de 2000
for(let i = 0; i < persons.length; i++)
{
    if(persons[i].dob >= '01/01/2000')
    {
        console.log(`${i + 1}: ${persons[i].nom} (${persons[i].dob})`)
    }
}
```

Maintenant essayons de réaliser un petit programme qui va simuler une roulette.

Code Source: [TP Roulette](roulette.html)

## Browser APIs

Les navigateurs de nos jours embarquent des pour la plupart des API qui permettent d'effectuer des opérations beaucoup plus complexes qu'il aurait été impossible ou bien très difficile les années précédentes.

* DOM
* Canva & WebGL
* Storage
* Géolocalisatin
* Fetch
* etc.

