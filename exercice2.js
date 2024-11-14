// Fonction pour déterminer le prix du billet en fonction de l'âge
function calculerPrixBillet(age) {
    let prix;

    if (age <= 12) {
        prix = 10;
    } else if (age >= 13 && age <= 17) {
        prix = 15;
    } else {
        prix = 20;
    }

    return prix;
}
console.log(calculerPrixBillet(21));


