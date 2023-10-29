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

        // Insérez le code pour trouver le bouton ici
        const removeFavoriteButton = findRemoveButton(heartIcon);

        if (removeFavoriteButton) {
            removeFavoriteButton.click(); // Simulez un clic pour supprimer le favori
        }
    });

    // Fonction pour trouver le bouton de suppression des favoris en remontant dans la hiérarchie des éléments
    function findRemoveButton(heartIcon) {
        let element = heartIcon;
        while (element) {
            // Insérez ici le code pour trouver le bouton de suppression des favoris
            // Par exemple, recherchez un parent contenant le bouton ou cherchez parmi les éléments voisins
            // Si vous trouvez le bouton, retournez-le
            // Si vous atteignez le haut de la hiérarchie sans trouver le bouton, retournez null

            // Exemple générique : recherchez un parent avec la classe "remove-button-container"
            if (element.classList.contains("remove-button-container")) {
                return element.querySelector(".remove-button");
            }

            element = element.parentElement;
        }
        return null;
    }
}

