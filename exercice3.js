// Fonction pour donner des conseils en fonction de la température et de la pluie
function conseillerVetements(temperature, pleut) {
    if (pleut) {
        // Si il pleut
        if (temperature <= 10) {
            return "Il pleut et il fait froid. Portez un imperméable, des bottes de pluie et des vêtements chauds.";
        } else if (temperature > 10 && temperature <= 20) {
            return "Il pleut, mais il ne fait pas trop froid. Portez un imperméable et une veste légère.";
        } else {
            return "Il pleut mais il fait chaud. Portez un imperméable léger ou un parapluie.";
        }
    } else {
        // Si il ne pleut pas
        if (temperature <= 10) {
            return "Il ne pleut pas, mais il fait froid. Portez un manteau chaud et des vêtements d'hiver.";
        } else if (temperature > 10 && temperature <= 20) {
            return "Il ne pleut pas et la température est agréable. Portez une veste légère ou un pull.";
        } else {
            return "Il ne pleut pas et il fait chaud. Portez des vêtements légers et confortables.";
        }
    }
}

console.log(conseillerVetements(9, false))
