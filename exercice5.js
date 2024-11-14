    // Fonction récursive pour vérifier si une chaîne est un palindrome
function estPalindrome(str) {
    // Nettoyer la chaîne : supprimer les espaces, la ponctuation et mettre en minuscules
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Fonction récursive interne pour vérifier les caractères aux deux extrémités
    function verifierPalindrome(i, j) {
        // Cas de base : si les indices se croisent ou sont égaux, c'est un palindrome
        if (i >= j) {
            return true;
        }
        // Si les caractères aux indices i et j ne correspondent pas, ce n'est pas un palindrome
        if (str[i] !== str[j]) {
            return false;
        }
        // Appel récursif avec les indices qui se rapprochent
        return verifierPalindrome(i + 1, j - 1);
    }

    // Appeler la fonction interne en passant les indices de début et de fin
    return verifierPalindrome(0, str.length - 1);
}

console.log(estPalindrome("aziza"))
console.log(estPalindrome("hahahaha"))

