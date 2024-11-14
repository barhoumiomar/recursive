// Fonction récursive pour calculer le nième nombre de Fibonacci
function fibonacci(n) {
    // Cas de base : les deux premiers nombres de la séquence de Fibonacci sont 0 et 1
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        // Appel récursif pour les autres termes
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
console.log(fibonacci(14));
