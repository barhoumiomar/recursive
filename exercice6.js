// Fonction récursive pour calculer a^b (a élevé à la puissance b)
function puissance(a, b) {
    // Cas de base : toute valeur élevée à 0 donne 1
    if (b === 0) {
        return 1;
    }
    // Cas récursif : a^b = a * a^(b-1)
    return a * puissance(a, b - 1);
}

console.log(puissance(5,2))
