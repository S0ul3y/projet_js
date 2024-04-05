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
    function addTask(titre, dateDebut, priorite, statut) {
        // Ajouter la tâche au tableau
        addTaskToTable(titre, dateDebut, priorite, statut);

        // Sauvegarder la tâche localement
        saveTaskLocally(titre, dateDebut, priorite, statut);

        // Vider les champs de saisie
        $("#Tache").val("");
        $("#date").val("");
        $("#priorite").val("");
    }

    // Fonction pour ajouter une tâche au tableau
    function addTaskToTable(titre, dateDebut, priorite, statut) {
        var newRow = $("<tr>");
        newRow.append("<td>" + titre + "</td>");
        newRow.append("<td>" + dateDebut + "</td>");
        newRow.append("<td>" + priorite + "</td>");
        newRow.append("<td>" + statut + "</td>"); // Colonne pour l'état de la tâche

        // Colonne pour les actions (boutons Supprimer et Modifier)
        var actionsCell = $("<td>");
        actionsCell.append("<button class='supprimer'><i class='fas fa-trash'></i></button>");
        actionsCell.append("<button class='modifier'><i class='fa-solid fa-pen-to-square'></i></button>");

        // actionsCell.append("<button class='modifier'>Modifier</button>");
        newRow.append(actionsCell);

        $("#tableauTaches").append(newRow);
    }

    // Fonction pour sauvegarder une tâche localement
    function saveTaskLocally(titre, dateDebut, priorite, statut) {
        var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push({ titre: titre, dateDebut: dateDebut, priorite: priorite, statut: statut });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Événement de clic sur le bouton "Ajouter"
    $("#Ajouter").click(function() {
        var titre = $("#Tache").val();
        var dateDebut = $("#date").val();
        var priorite = $("#priorite").val();
        var statut = "En cours"; // Nouvelle tâche est initialement en cours

        // Ajouter la tâche
        addTask(titre, dateDebut, priorite, statut);
    });

    // Charger les tâches sauvegardées lors du chargement de la page
    function loadTasks() {
        var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach(function(task) {
            addTaskToTable(task.titre, task.dateDebut, task.priorite, task.statut);
        });
    }

    // Appel à la fonction pour charger les tâches sauvegardées
    loadTasks();
});







// $(document).ready(function() {
//     // Fonction pour ajouter une tâche au tableau et au stockage local
//     function addTask(titre, dateDebut, priorite) {
//         // Ajouter la tâche au tableau
//         addTaskToTable(titre, dateDebut, priorite);

//         // Sauvegarder la tâche localement
//         saveTaskLocally(titre, dateDebut, priorite);

//         // Vider les champs de saisie
//         $("#Tache").val("");
//         $("#date").val("");
//         $("#priorite").val("");
//     }

//     // Fonction pour ajouter une tâche au tableau
//     function addTaskToTable(titre, dateDebut, priorite) {
//         var newRow = $("<tr>");
//         newRow.append("<td>" + titre + "</td>");
//         newRow.append("<td>" + dateDebut + "</td>");
//         newRow.append("<td>" + priorite + "</td>");
//         // newRow.append("<td>" + <i class="fa-duotone fa-loader"></i> + "</td>");

//         $("#tableauTaches").append(newRow);
//     }

//     // Fonction pour sauvegarder une tâche localement
//     function saveTaskLocally(titre, dateDebut, priorite) {
//         var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//         tasks.push({ titre: titre, dateDebut: dateDebut, priorite: priorite });
//         localStorage.setItem("tasks", JSON.stringify(tasks));
//     }

//     // Événement de clic sur le bouton "Ajouter"
//     $("#Ajouter").click(function() {
//         var titre = $("#Tache").val();
//         var dateDebut = $("#date").val();
//         var priorite = $("#priorite").val();

//         // Ajouter la tâche
//         addTask(titre, dateDebut, priorite);
//     });

//     // Charger les tâches sauvegardées lors du chargement de la page
//     function loadTasks() {
//         var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//         tasks.forEach(function(task) {
//             addTaskToTable(task.titre, task.dateDebut, task.priorite);
//         });
//     }

//     // Appel à la fonction pour charger les tâches sauvegardées
//     loadTasks();
// });











// $(document).ready(function() {
//     // Fonction pour ajouter une tâche au tableau
//     function addTaskToTable(titre, dateDebut, priorite) {
//         var newRow = $("<tr>");
//         newRow.append("<td>" + titre + "</td>");
//         newRow.append("<td>" + dateDebut + "</td>");
//         newRow.append("<td>" + priorite + "</td>");

//         $("#tableauTaches").append(newRow);
//     }

//     // Événement de clic sur le bouton "Ajouter"
//     $("#Ajouter").click(function() {
//         var titre = $("#Tache").val();
//         var dateDebut = $("#date").val();
//         var priorite = $("#priorite").val();

//         // Ajouter la tâche au tableau
//         addTaskToTable(titre, dateDebut, priorite);
//     });
// });








// $(document).ready(function() {
//     // Charger les tâches sauvegardées
//     loadTasks();

//     // Ajouter une tâche
//     $("#Ajouter").click(function() {
//         var titre = $("#Tache").val();
//         var dateDebut = $("#date").val();
//         var priorite = $("#priorite").val();

//         // Ajouter la tâche au tableau
//         addTaskToTable(titre, dateDebut, priorite);

//         // Sauvegarder la tâche
//         saveTask(titre, dateDebut, priorite);

//         // Réinitialiser les champs
//         $("#Tache").val("");
//         $("#date").val("");
//         $("#priorite").val("");
//     });

//     function addTaskToTable(titre, dateDebut, priorite) {
//         var newRow = $("<tr>");
//         newRow.append("<td>" + titre + "</td>");
//         newRow.append("<td>" + dateDebut + "</td>");
//         newRow.append("<td>" + priorite + "</td>");

//         $("#tableauBody").append(newRow);
//     }

//     function saveTask(titre, dateDebut, priorite) {
//         var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//         tasks.push({ titre: titre, dateDebut: dateDebut, priorite: priorite });
//         localStorage.setItem("tasks", JSON.stringify(tasks));
//     }

//     function loadTasks() {
//         var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//         tasks.forEach(function(task) {
//             addTaskToTable(task.titre, task.dateDebut, task.priorite);
//         });
//     }
// });



// // Fonction pour ajouter une nouvelle tâche
// function ajouterTache() {
//     // Récupérer les valeurs des champs de saisie
//     const titre = document.getElementById("saisieTache").value;
//     const dateDebut = document.getElementById("date").value;
//     const priorite = document.getElementById("priorite").value;
    
    

//     // Créer un nouvel élément de ligne pour le tableau
//     const ligne = document.createElement("tr");
  
//     // Créer les cellules pour le titre, la date de début, la priorité et le statut
//     const celluleTitre = document.createElement("td");
//     celluleTitre.textContent = titre;
  
//     const celluleDateDebut = document.createElement("td");
//     celluleDateDebut.textContent = dateDebut;
  
//     const cellulePriorite = document.createElement("td");
//     cellulePriorite.textContent = priorite;
  
//     const celluleStatut = document.createElement("td");
//     celluleStatut.textContent = "En cours";
  
//     // Créer un bouton de suppression
//     const boutonSupprimer = document.createElement("button");
//     boutonSupprimer.textContent = "Supprimer";
//     boutonSupprimer.addEventListener("click", supprimerTache);
  
//     // Ajouter les cellules et le bouton à la ligne
//     ligne.appendChild(celluleTitre);
//     ligne.appendChild(celluleDateDebut);
//     ligne.appendChild(cellulePriorite);
//     ligne.appendChild(celluleStatut);
//     ligne.appendChild(boutonSupprimer);
  
//     // Ajouter la ligne au tableau
//     document.getElementById("tableauTaches").appendChild(ligne);
//   }
  
//   // Fonction pour supprimer une tâche
//   function supprimerTache(event) {
//     // Récupérer la ligne de la tâche à supprimer
//     const ligne = event.target.parentNode;
  
//     // Supprimer la ligne du tableau
//     ligne.parentNode.removeChild(ligne);
//   }
  
//   // Ecouter l'événement "click" sur le bouton "Ajouter"
//   document.getElementById("Ajouter").addEventListener("click", ajouterTache);
  