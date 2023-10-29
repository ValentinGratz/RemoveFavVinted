document.getElementById('removeFavorites').addEventListener('click', function() {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: removeFavorites,
    });
});

function removeFavorites() {
    const heartIcons = document.querySelectorAll('path[d="M14 1.7C10.82-.35 8 2.74 8 2.74S5.19-.35 2 1.7c-2.93 1.88-2.48 5.86.33 8.5A83.4 83.4 0 0 0 8 15s3.04-2.32 5.67-4.8c2.81-2.64 3.26-6.62.34-8.5"]');

    let totalFavRemoved = 0;
    let errorOccurred = false;

    heartIcons.forEach((heartIcon) => {
        const removeFavoriteButton = findRemoveButton(heartIcon);
        if (removeFavoriteButton) {
            try {
                removeFavoriteButton.click();
                totalFavRemoved++;
            } catch (error) {
                console.error("Erreur lors de la suppression d'un favori :", error);
                errorOccurred = true;
            }
        }
    });

    // Mettez à jour le message d'état dans la fenêtre contextuelle
    const statusMessage = document.getElementById("statusMessage");
    if (errorOccurred) {
        statusMessage.textContent = `Suppression terminée avec des erreurs. Veuillez vérifier la console pour plus d'informations.`;
    } else {
        statusMessage.textContent = `Tous les favoris ont été supprimés avec succès (${totalFavRemoved}).`;
    }
}

function findRemoveButton(heartIcon) {
    // Code pour trouver le bouton de suppression des favoris
    // ... (votre code personnalisé pour trouver le bouton)
}
