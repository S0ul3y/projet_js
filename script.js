var listZone = document.getElementById("listZone")
var ListeTache = document.getElementById("ListeTache")
var formZone = document.getElementById("formZone")
var Ajout = document.getElementById("Ajout")

listZone.style.display = "none";

ListeTache.addEventListener("click", function() {
    formZone.style.display = "none";
    listZone.style.display = "block";
});

Ajout.addEventListener("click", function() {
    listZone.style.display = "none";
    formZone.style.display = "flex";
   
});


$(document).ready(function() {

    // Fonction pour ajouter une tâche au tableau et au stockage local
    function ajouterTache(titre, dateDebut, priorite, statut) {
        // Afficher la liste et masquer le formulaire
        $("#listZone").show();
        $("#formZone").hide();
      // Ajouter la tâche au tableau
      ajouterTacheAuTableau(titre, dateDebut, priorite, statut);
  
      // Sauvegarder la tâche localement
      sauvegarderTacheLocalement(titre, dateDebut, priorite, statut);
  
      // Vider les champs de saisie
      $("#Tache").val("");
      $("#date").val("");
      $("#priorite").val("");
    }
  
    // Fonction pour ajouter une tâche au tableau
    function ajouterTacheAuTableau(titre, dateDebut, priorite, statut) {
      var nouvelleLigne = $("<tr>");
      nouvelleLigne.append("<td>" + titre + "</td>");
      nouvelleLigne.append("<td>" + dateDebut + "</td>");
      nouvelleLigne.append("<td>" + priorite + "</td>");
      nouvelleLigne.append("<td class='statut'>" + statut + "</td>");
    //   nouvelleLigne.append("<td>" + statut + "</td>"); // Colonne pour l'état de la tâche
  
        // Gestionnaire d'événements pour le changement de statut
    $(document).on("click", ".statut", function() {
        var statutCell = $(this);
        var currentIcon = statutCell.html();
        var nextIcon;

        // Changer l'icône de la flèche à la croix ou vice versa
        if (currentIcon === '<i class="fa-solid fa-spinner"></i>') {
            nextIcon = '<i class="fa-solid fa-check"></i>';
        } else if (currentIcon === '<i class="fa-solid fa-check"></i>') {
            nextIcon = '<i class="fa-solid fa-spinner"></i>';
        } 
        // else {
        //     nextIcon = '<i class="fa-solid fa-spinner"></i>'; // Définir l'icône par défaut comme la flèche
        // }

        statutCell.html(nextIcon);
    });




      // Colonne pour les actions (boutons Supprimer et Modifier)
      var celluleActions = $("<td>");
      celluleActions.append("<button class='supprimer'><i class='fas fa-trash'></i></button>");
      // celluleActions.append("<button class='modifier'><i class='fa-solid fa-pen-to-square'></i></button>");
  
      // celluleActions.append("<button class='modifier'>Modifier</button>");
      nouvelleLigne.append(celluleActions);
  
      $("#tableauTaches").append(nouvelleLigne);

// Gestionnaire d'événements pour le bouton "Supprimer"
$(".supprimer").click(function() {
    var $ligne = $(this).closest("tr");
    $ligne.addClass("ligne-tache");
    // Supprimer la ligne entière de la tâche après l'animation
    setTimeout(function() {
      $ligne.remove();
  
      // Récupérer les tâches sauvegardées depuis le stockage local
      var taches = JSON.parse(localStorage.getItem("taches")) || [];
  
      // Récupérer l'indice de la tâche à supprimer en fonction du bouton "Supprimer" cliqué
      var index = $ligne.index();
  
      // Supprimer la tâche correspondante du tableau des tâches
      taches.splice(index, 1);
  
      // Sauvegarder la liste mise à jour dans le stockage local
      localStorage.setItem("taches", JSON.stringify(taches));
    }, 500); // 500 millisecondes = durée de l'animation
  });
  

    }
  
    // Fonction pour sauvegarder une tâche localement
    function sauvegarderTacheLocalement(titre, dateDebut, priorite, statut) {
      var taches = JSON.parse(localStorage.getItem("taches")) || [];
      taches.push({ titre: titre, dateDebut: dateDebut, priorite: priorite, statut: statut });
      localStorage.setItem("taches", JSON.stringify(taches));
    }
  
    // Événement de clic sur le bouton "Ajouter"
    $("#Ajouter").click(function() {
      var titre = $("#Tache").val();
      var dateDebut = $("#date").val();
      var priorite = $("#priorite").val();
      var statut = '<i class="fa-solid fa-spinner"></i>'; // Nouvelle tâche est initialement en cours
  
      // Ajouter la tâche
      ajouterTache(titre, dateDebut, priorite, statut);
    });
  
    // Charger les tâches sauvegardées lors du chargement de la page
    function chargerTaches() {
      var taches = JSON.parse(localStorage.getItem("taches")) || [];
      taches.forEach(function(tache) {
        ajouterTacheAuTableau(tache.titre, tache.dateDebut, tache.priorite, tache.statut);
      });
    }
  
    // Appel à la fonction pour charger les tâches sauvegardées
    chargerTaches();
  });
  
