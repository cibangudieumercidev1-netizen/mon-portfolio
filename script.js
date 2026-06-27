// === PAGE ACCUEIL : Gestion du bouton portfolio ===
const boutonAccueil = document.getElementById('btn-portfolio');

// On vérifie si le bouton existe sur la page actuelle
if (boutonAccueil) {
    boutonAccueil.addEventListener('click', () => {
        // Optionnel : tu peux laisser ou enlever l'alerte
    });
}


// === PAGE PORTFOLIO : Système de filtrage ===
const boutonsFiltre = document.querySelectorAll('.btn-filtre');
const cartesProjets = document.querySelectorAll('.carte-projet');

// On vérifie s'il y a des boutons de filtre sur la page actuelle
if (boutonsFiltre.length > 0) {
    boutonsFiltre.forEach(bouton => {
        bouton.addEventListener('click', () => {
            
            // 1. Gérer l'état "actif" des boutons
            const boutonActif = document.querySelector('.btn-filtre.active');
            if (boutonActif) {
                boutonActif.classList.remove('active');
            }
            bouton.classList.add('active');
            
            // 2. Filtrer les projets
            const cible = bouton.getAttribute('data-cible');
            
            cartesProjets.forEach(carte => {
                if (cible === 'tous' || carte.classList.contains(cible)) {
                    carte.style.display = 'block'; // Affiche
                } else {
                    carte.style.display = 'none';  // Cache
                }
            });
        });
    });
}
// === GESTION DU FORMULAIRE DE CONTACT ===
const formulaire = document.getElementById('form-contact');

if (formulaire) {
    formulaire.addEventListener('submit', (e) => {
        e.preventDefault(); // Empêche la page de se recharger
        
        // Récupération du nom de l'utilisateur
        const nomUtilisateur = document.getElementById('nom').value;
        
        // Message de remerciement personnalisé
        alert(`Merci ${nomUtilisateur} ! Votre message a bien été simulé. Dès que le site sera hébergé, il sera envoyé sur ma boîte mail ! 😉`);
        
        // On vide le formulaire
        formulaire.reset();
    });
}
// === GESTION DU MODE SOMBRE / CLAIR ===
const boutonTheme = document.getElementById('theme-toggle');

if (boutonTheme) {
    boutonTheme.addEventListener('click', () => {
        // La méthode .toggle() ajoute la classe si elle n'existe pas, ou l'enlève si elle y est déjà !
        document.body.classList.toggle('light-theme');
    });
}

