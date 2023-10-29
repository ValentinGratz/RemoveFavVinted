# RemoveFavVinted

## Description
Extension chrome qui permet de supprimer automatiquement les favoris des articles marqués comme 'vendu' sur Vinted.

## Version actuelle
Version 1.1.0

:warning:
 **Extension chrome non encore testée**


## Changelog
 1.1.0 : Version de base (première version) 
         Amélioration mineure, ajout du code et de l'icon

## Prompt chatgpt utilisé
le manifest.json : 
```
{
  "manifest_version": 3,
  "name": "Supprimer Favoris Vinted",
  "version": "1.0",
  "description": "Supprime automatiquement les favoris des articles marqués comme 'vendu' sur Vinted.",
  "permissions": [
    "activeTab"
  ],
  "action": {
    "default_popup": "popup.html",
    "default_icon": {
      "16": "icon-16.png",
      "48": "icon-48.png",
      "128": "icon-128.png"
    }
  },
  "icons": {
    "16": "icon-16.png",
    "48": "icon-48.png",
    "128": "icon-128.png"
  },
  "content_scripts": [
    {
      "matches": ["*://www.vinted.fr/*"],
      "js": ["content.js"]
    }
  ],
  "permissions": [
    "storage",
    "activeTab"
  ]
}

```
- Créez les icônes de l'extension : Créez trois icônes d'extension aux tailles 16x16, 48x48 et 128x128 pixels, et placez-les dans le même dossier que manifest.json.

- Créez un fichier popup.html : Créez un fichier popup.html dans le même dossier que manifest.json avec le contenu suivant :
```
<!DOCTYPE html>
<html>
  <body>
    <button id="removeFavorites">Supprimer les favoris</button>
    <script src="popup.js"></script>
  </body>
</html>
```
 - Créez un fichier popup.js : Créez un fichier popup.js dans le même dossier que popup.html avec le contenu suivant :
```
document.getElementById('removeFavorites').addEventListener('click', function() {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: removeFavorites,
  });
});

function removeFavorites() {
  const heartIcons = document.querySelectorAll('path[d="M14 1.7C10.82-.35 8 2.74 8 2.74S5.19-.35 2 1.7c-2.93 1.88-2.48 5.86.33 8.5A83.4 83.4 0 0 0 8 15s3.04-2.32 5.67-4.8c2.81-2.64 3.26-6.62.34-8.5"]');

  heartIcons.forEach((heartIcon) => {
    // Trouvez le bouton de suppression des favoris (il peut être un parent ou un élément voisin du cœur SVG)
    const removeFavoriteButton = /* Code pour trouver le bouton associé au cœur SVG */;
    if (removeFavoriteButton) {
      removeFavoriteButton.click(); // Simulez un clic pour supprimer le favori
    }
  });
}
```
 - Créez un fichier content.js : Créez un fichier content.js dans le même dossier que manifest.json avec le contenu suivant :
```
// Vous n'avez pas besoin d'y ajouter du code spécifique pour cibler les éléments du cœur SVG, car le code est inclus dans le fichier popup.js.
```
- Chargez l'extension dans Chrome : Allez dans la page chrome://extensions/, activez le "Mode développeur", puis cliquez sur "Charger l'extension non empaquetée" pour sélectionner le dossier de votre extension.
- Utilisez l'extension : L'icône de votre extension apparaîtra dans la barre d'outils de Chrome. Lorsque vous visitez une page Vinted, cliquez sur l'icône pour ouvrir la fenêtre contextuelle de l'extension, puis cliquez sur le bouton "Supprimer les favoris" pour supprimer les favoris des articles marqués comme "vendu".

N'oubliez pas d'adapter le script pour trouver le bouton de suppression des favoris associé au cœur SVG, car cela dépendra de la structure réelle de la page Vinted. Assurez-vous également de respecter les politiques d'utilisation de Vinted et d'utiliser cette extension de manière éthique.

le code path de l'émoji coeur pour les favoris de vinted : 
```
<path d="M14 1.7C10.82-.35 8 2.74 8 2.74S5.19-.35 2 1.7c-2.93 1.88-2.48 5.86.33 8.5A83.4 83.4 0 0 0 8 15s3.04-2.32 5.67-4.8c2.81-2.64 3.26-6.62.34-8.5"></path>
```
la div utilisée et 
```
div class="web_ui__Cell__cell web_ui__Cell__narrow web_ui__Cell__success"
```
