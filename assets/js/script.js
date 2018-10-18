$(function(){
  // Math.floor renvoie à l'entier supérieur / Math.random renvoie à un nombre aléatoire
  var valeur = Math.floor(Math.random()*100)+1;
  var compteur = 0; // compteur initialisé à 0
  $("#valider").click(function(){
    // incrémentation du compteur
    compteur++;
    var good = $("#bonChiffre").val();
    // si le chiffre n'est pas bon
    if (isNaN(good) == false) { // on vérifie si c'est bien un chiffre
      // si le chiffre est inférieur au bon chiffre, on affiche c'est plus
      if (valeur > good) {
        alert("C'est plus !");
      // sinon si le chiffre est supérieur au bon chiffre, on affiche c'est moins
      } else if (valeur < good) {
        alert("C'est moins !");
      // sinon on affiche une bonne réponse avec le nombre d'essais
      } else {
        alert("Bravo ! Tu as trouvé le bon chiffre en " + compteur + " fois");
      }
    // sinon on doit donner un nombre
    } else {
      alert("Donne un nombre !");
    }
  });
});
