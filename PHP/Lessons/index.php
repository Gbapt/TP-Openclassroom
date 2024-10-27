<!-- Affiche 'Hello World' -->
<?php
echo "Hello world";
?>

<!-- Ajoute la date actuelle à la suite de la phrase -->
<p>Aujourd'hui nous sommes le <?php echo date('d/m/Y h:i:s'); ?>.</p>


<?php
$userAge = 17; // La variable est créée et vaut 17
$userAge = 23; // La variable est modifiée et vaut 23
$userAge = 55; // La variable est modifiée et vaut 55
?>


<?php
$variable = "Mon \"nom\" est Mathieu";
?>

<!-- int -->
<?php
$userAge = 17;
?>

<!-- float -->
<?php
$price = 57.3;
?>

<!-- booléen (true / false) -->
<?php
$isAuthor = true;
$isAdministrator = false;
?>

<!-- null -->
<?php
$noValue = NULL;
?>


<?php
$fullname = "Mathieu Nebra"; // Créer une variable (fullname) avec une valeur (Mathieu Nebra) de type 'string'
echo $fullname; // Affiche le contenu de la variable fullname (Mathieu Nebra)
?>


<?php
    $fullname = "Mathieu Nebra";
    echo "Bonjour {$fullname} et bienvenue sur le site !"; // Un exemple de concatenation d'une chaine de caractère avec une variable
?>


<?php
$number = 2 + 4; // $number prend la valeur 6
$number = 5 - 1; // $number prend la valeur 4
$number = 3 * 5; // $number prend la valeur 15
$number = 10 / 2; // $number prend la valeur 5

// Allez on rajoute un peu de difficulté
$number = 3 * 5 + 1; // $number prend la valeur 16
$number = (1 + 2) * 2; // $number prend la valeur 6
?>


<?php
$number = 10;
$result = ($number + 5) * $number; // $result prend la valeur 150 (10 +5(*10))
?>


<!-- 
=== Est égal à 

> Est supérieur à

< Est inférieur à

>= Est supérieur ou égal à

<= Est inférieur ou égal à

!== Est différent de
-->

<?php
$isAllowedToEnter = "Oui";

// SI on a l'autorisation d'entrer
if ($isAllowedToEnter === "Oui") {
    // instructions à exécuter quand on est autorisé à entrer
} // SINON SI on n'a pas l'autorisation d'entrer
elseif ($isAllowedToEnter === "Non") {
    // instructions à exécuter quand on n'est pas autorisé à entrer
} // SINON (la variable ne contient ni Oui ni Non, on ne peut pas agir)
else {
    echo "Euh, je ne comprends pas ton choix, tu peux me le rappeler s'il te plaît ?";
}
?>


<!--
AND (Et) s'écrit : &&
OR (Ou) s'écrit : ||
-->

<?php
$isEnabled = true;
$isOwner = false;
$isAdmin = true;

if (($isEnabled && $isOwner) || $isAdmin) {
    echo 'Accès à la recette validé ✅';
} else {
    echo 'Accès à la recette interdit ! ❌';
}

///////////////////////////////////////
// Deux façons d'écrire les conditions:
///////////////////////////////////////

// Version1
<?php
$chickenRecipesEnabled = true;

if ($chickenRecipesEnabled) {
    echo '<h1>Liste des recettes à base de poulet</h1>';
}
?>
 // V
 ersion 2
<?php $chickenRecipesEnabled = true; ?>

<?php if ($chickenRecipesEnabled): ?> <!-- Ne pas oublier le ":" -->

<h1>Liste des recettes à base de poulet</h1>

<?php endif; ?><!-- Ni le ";" après le endif -->


///////////////////
//Condition switch
///////////////////

// Version if / elseif
<?php
$grade = 16;

if ($grade === 0) {
    echo "Il faudra revoir tout le cours !";
}

elseif ($grade === 5) {
    echo "Tu dois réviser plusieurs chapitres";
}

elseif ($grade === 7) {
    echo "Il te manque quelques révisions pour atteindre la moyenne";
}

elseif ($grade === 10) {
    echo "Tu as pile poil la moyenne, c'est un peu juste…";
}

elseif ($grade === 12) {
    echo "Tu es assez bon";
}

elseif ($grade === 16) {
    echo "Tu te débrouilles très bien !";
}

elseif ($grade === 20) {
    echo "Excellent travail, c'est parfait !";
}

else {
    echo "Désolé, je n'ai pas de message à afficher pour cette note";
}
?>

// Version switch
<?php
$grade = 10;

switch ($grade) // on indique sur quelle variable on travaille
{ 
    case 0: // dans le cas où $grade vaut 0
        echo "Il faudra revoir tout le cours !";
    break;
    
    case 5: // dans le cas où $grade vaut 5
        echo "Tu dois réviser plusieurs modules";
    break;
    
    case 7: // dans le cas où $grade vaut 7
        echo "Il te manque quelques révisions pour atteindre la moyenne ";
    break;
    
    case 10: // etc. etc.
        echo "Tu as pile poil la moyenne, c'est un peu juste…";
    break;
    
    case 12:
        echo "Tu es assez bon";
    break;
    
    case 16:
        echo "Tu te débrouilles très bien !";
    break;
    
    case 20:
        echo "Excellent travail, c'est parfait !";
    break;
    
    default:
        echo "Désolé, je n'ai pas de message à afficher pour cette note";
}
?>


/////////////////
// Les ternaires
/////////////////

<?php // Version classique
$userAge = 24;

if ($userAge >= 18) {
	$isAdult = true;
}
else {
	$isAdult = false;
}
?>

<?php // Version ternaires (conditions condensées)
$userAge = 24;

$isAdult = ($userAge >= 18) ? true : false;

// Ou mieux, dans ce cas précis
$isAdult = ($userAge >= 18);
?>