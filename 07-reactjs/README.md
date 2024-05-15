# Introduction à React

React est une bibliothèque JavaScript développée par Facebook pour construire des interfaces utilisateur (UI). Elle permet de créer des applications web interactives et dynamiques.

## Concepts de Base

### Composants :

Les composants sont les blocs de construction de base d'une application React. Ils peuvent être des classes ou des fonctions.

Chaque composant peut avoir son propre état et ses propres propriétés (props).

### JSX (JavaScript XML) :

Une syntaxe qui permet de décrire la structure de l'UI de manière déclarative.

Il ressemble à HTML, mais permet d'intégrer des expressions JavaScript.
### Props :

Abréviation de "properties", les props sont des arguments passés aux composants pour les configurer.

Elles sont immuables, c'est-à-dire qu'elles ne peuvent pas être modifiées par le composant qui les reçoit.

### State :

Le state est un objet qui contient des données spécifiques à un composant et qui peuvent changer au fil du temps.

Le state est géré au sein du composant et peut être modifié en utilisant setState (dans les composants de classe) ou la fonction useState (dans les composants fonctionnels).

Création d'un Composant de Base


```jsx
import React from 'react';

function MyComponent(props) {
  return <h1>Hello, {props.name}!</h1>;
}
export default MyComponent;
```

## Composants Fonctionnels et Hooks

Les composants fonctionnels sont des fonctions JavaScript simples qui retournent des éléments React.

Les hooks permettent d'ajouter des fonctionnalités d'état et de cycle de vie aux composants fonctionnels.

* Exemple d'utilisation du hook useState :


```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
  export default Counter;
}

```



* Exemple d'utilisation de useEffect :


```jsx
import React, { useEffect, useState } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  return <p>Seconds: {seconds}</p>;
}
export default Timer;

```

## Gestion des Evénements

Les événements en React sont gérés de manière similaire aux événements DOM, mais avec une syntaxe légèrement différente.


```jsx
function MyButton() {
  function handleClick() {
    alert('Button clicked!');
  }

  return (
    <button onClick={handleClick}>Click me</button>
  );
}
```

## Conclusion

React permet de créer des applications web robustes et maintenables en utilisant des composants réutilisables, des hooks et une gestion efficace de l'état. Avec des outils comme React Router pour la navigation et Redux pour la gestion de l'état global, il est possible de développer des applications complexes de manière structurée et efficace.