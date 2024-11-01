document.addEventListener('DOMContentLoaded', function () {
    const indicators_carousel_1 = document.querySelectorAll('#home-carousel-1 button[data-carousel-slide-to]');
    const indicators_carousel_2 = document.querySelectorAll('#home-carousel-2 button[data-carousel-slide-to]');
    const indicators_force_carousel_1 = document.querySelectorAll('#force-carousel-1 button[data-carousel-slide-to]');

    // Fonction pour mettre à jour le style du bouton actif
    function updateActiveIndicator(list_indicator) {
        list_indicator.forEach((indicator) => {
            const isActive = indicator.getAttribute('aria-current') === 'true';
            if (isActive) {
                indicator.classList.add('!bg-amber-500');
                indicator.classList.remove('!bg-gray-300');
            } else {
                indicator.classList.add('!bg-gray-300');
                indicator.classList.remove('!bg-amber-500');
            }
        });
    }

    // Observer les changements de l'attribut 'aria-current' sur les boutons
    const observer1 = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'aria-current') {
                updateActiveIndicator(indicators_carousel_1);
                console.log("Hello");
            }
        });
    });
    const observer2 = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'aria-current') {
                updateActiveIndicator(indicators_carousel_2);
                console.log("Hello");
            }
        });
    });
    const observer3 = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'aria-current') {
                updateActiveIndicator(indicators_force_carousel_1);
            }
        });
    });

    // Configurer l'observation pour chaque bouton
    indicators_carousel_1.forEach((indicator) => {
        observer1.observe(indicator, { attributes: true });
    });
    indicators_carousel_2.forEach((indicator) => {
        observer2.observe(indicator, { attributes: true });
    });
    indicators_force_carousel_1.forEach((indicator) => {
        observer3.observe(indicator, { attributes: true });
    });

    // Initialiser l'état de l'indicateur actif au chargement
    updateActiveIndicator(indicators_carousel_1);
    updateActiveIndicator(indicators_carousel_2);
    updateActiveIndicator(indicators_force_carousel_1);



    /** --------------------------- GALERIE ------------------------------- */
    const galeries = document.querySelectorAll(".galerie");
    galeries.forEach((galerie)=>{
        galerie.addEventListener('mouseover',(e)=>{
            const galItem = galerie.querySelector('.galerie-item');
            galItem.classList.remove("hidden");
            galItem.classList.add("flex");
        });
    });
    galeries.forEach((galerie)=>{
        galerie.addEventListener('mouseout',(e)=>{
            const galItem = galerie.querySelector('.galerie-item');
            galItem.classList.remove("flex");
            galItem.classList.add("hidden");
        });
    });
});

