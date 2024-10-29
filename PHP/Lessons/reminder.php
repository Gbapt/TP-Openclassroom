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
 // Version 2
<?php $chickenRecipesEnabled = true; ?>

<?php if ($chickenRecipesEnabled): ?> // <!-- Ne pas oublier le ":" -->

<h1>Liste des recettes à base de poulet</h1>

<?php endif; ?> //<!-- Ni le ";" après le endif -->


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


////////////////
// Les tableaux
////////////////

// Version sans tableau
<?php
// Premier utilisateur
$userName1 = 'Mickaël Andrieu';
$userEmail1 = 'mickael.andrieu@exemple.com';
$userPassword1 = 'S3cr3t';
$userAge1 = 34;

// Deuxième utilisatrice
$userName2 = 'Laurène Castor';
$userEmail2 = 'laurene.castor@exemple.com';
$userPassword2 = 'P4ssW0rD';
$userAge2 = 28;
?>

//Version avec tableau
<?php
$user1 = ['Mickaël Andrieu', 'email', 'S3cr3t', 34];

echo $user1[0]; // "Mickaël Andrieu"
echo $user1[1]; // "email"
echo $user1[3]; // 34
?>

// COnstruire des tableaux de tableaux
<?php
$mickael = ['Mickaël Andrieu', 'mickael.andrieu@exemple.com', 'S3cr3t', 34];
$mathieu = ['Mathieu Nebra', 'mathieu.nebra@exemple.com', 'devine', 33];
$laurene = ['Laurène Castor', 'laurene.castor@exemple.com', 'P4ssw0rD', 28];

$users = [$mickael, $mathieu, $laurene];

echo $users[1][1]; // "mathieu.nebra@exemple.com"


////////////////
// Boucle while 
////////////////

// Structure d'une boucle while (= tant que ...)
<?php
while ($isValid) {
    // instructions à exécuter dans la boucle
}
?>

// Exemple 1: boucle while
<?php
$lines = 1; // $lines vaut 1

while ($lines <= 100) { // TANT QUE $lines est inférieur ou égal à 100 sa boucle
    echo 'Je ne dois pas regarder les mouches voler quand j\'apprends le PHP.<br />'; // ici on affiche le message à chaque foois que l'on boucle
    $lines++; // $lines = $lines + 1 // ici on incrémente la valeur de + 1 à chaque fin de boucle
}
?>

// Exemple 2: boucle while
<?php
$lines = 1;

while ($lines <= 100)
{
    echo 'Ceci est la ligne n°' . $lines . '<br />';
    $lines++;
}
?>

<!--

Ceci est la ligne n°1
Ceci est la ligne n°2
...
-->

// Exemple d'une boucle while dans un tableau :
<?php
$users = [
    [
        'full_name' => 'Mickaël Andrieu',
        'email' => 'mickael.andrieu@exemple.com',
        'age' => 34,
    ],
    [
        'full_name' => 'Mathieu Nebra',
        'email' => 'mathieu.nebra@exemple.com',
        'age' => 34,
    ],
    [
        'full_name' => 'Laurène Castor',
        'email' => 'laurene.castor@exemple.com',
        'age' => 28,
    ],
];
$lines = 3; // nombre d'utilisateurs dans le tableau
$counter = 0;
while ($counter < $lines) {
    echo $users[$counter]['full_name'] . ' ' . $users[$counter]['email'] . '<br />';
    $counter++;
}


//////////////
// Boucle for
//////////////

// Structure d'une boucle for
<?php for ($i = 0; $i < 5; $i++): ?>
    <p>Itération <?php echo $i; ?></p>
<?php endfor; ?>

//Exemple d'une boucle for :
<?php

$recipes = [
    [
        'title' => 'Cassoulet',
        'author' => 'mickael.andrieu@exemple.com',
    ],
    [
        'title' => 'Couscous',
        'author' => 'mickael.andrieu@exemple.com',
    ],
    [
        'title' => 'Escalope milanaise',
        'author' => 'mathieu.nebra@exemple.com',
    ],
    [
        'title' => 'Salade Romaine',
        'author' => 'laurene.castor@exemple.com',
    ],
];
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Affichage des recettes</title>
</head>
<body>
    <ul>
        <?php for ($lines = 0; $lines <= 3; $lines++) : ?>
            <li><?php echo $recipes[$lines]['title'] . ' (' . $recipes[$lines]['author'] . ')'; ?></li>
        <?php endfor; ?>
    </ul>
</body>
</html>


/* 
Comment savoir lequel choisir ? while  ou for ?

- 'while' est plus simple et plus flexible : on peut faire tous les types de boucles avec, mais on peut oublier de faire certaines étapes, comme l'incrémentation de la variable.

- 'for' est bien adapté quand on doit compter le nombre de fois que l'on répète les instructions, et il permet de ne pas oublier de faire l'incrémentation pour augmenter la valeur de la variable !

Si vous hésitez entre les deux, il suffit simplement de vous poser la question suivante : « Est-ce que je sais d'avance combien de fois je veux que mes instructions soient répétées ? ».

Si la réponse est oui, alors la boucle for  est tout indiquée.

Sinon, alors il vaut mieux utiliser la boucle while .
*/


/////////////////
//Boucle foreach
/////////////////

// foreach passe en revue chaque ligne du tableau. Lors de chaque passage, elle met la valeur de cette ligne dans une variable temporaire (par exemple $element  ).

//Exemple 1 :
<?php

// Déclaration du tableau des recettes
$recipes = [
    ['Cassoulet','[...]','mickael.andrieu@exemple.com',true,],
    ['Couscous','[...]','mickael.andrieu@exemple.com',false,],
];

foreach ($recipes as $recipe) {
    echo $recipe[0]; // Affichera Cassoulet, puis Couscous
}

//Exemple 2 :
<?php
$recipe = [
    'title' => 'Cassoulet',
    'recipe' => 'Etape 1 : des flageolets, Etape 2 : ...',
    'author' => 'mickael.andrieu@exemple.com',
    'enabled' => true,
];

foreach ($recipe as $value) {
    echo $value;
}
/**
 * AFFICHE
 * CassouletEtape 1 : des flageolets, Etape 2 : ...mickael.andrieu@exemple.com1
 */

//  Exemple 2 :
<?php

$recipes = [
    [
        'title' => 'Cassoulet',
        'recipe' => '',
        'author' => 'mickael.andrieu@exemple.com',
        'is_enabled' => true,
    ],
    [
        'title' => 'Couscous',
        'recipe' => '',
        'author' => 'mickael.andrieu@exemple.com',
        'is_enabled' => false,
    ],
    [
        'title' => 'Escalope milanaise',
        'recipe' => '',
        'author' => 'mathieu.nebra@exemple.com',
        'is_enabled' => true,
    ],
    [
        'title' => 'Salade Romaine',
        'recipe' => '',
        'author' => 'laurene.castor@exemple.com',
        'is_enabled' => false,
    ],
];

foreach($recipes as $recipe) {
    echo $recipe['title'] . ' contribué(e) par : ' . $recipe['author'] . PHP_EOL; 
}
//Résultat
// Cassoulet contribué(e) par : mickael.andrieu@exemple.com
// Couscous contribué(e) par : mickael.andrieu@exemple.com
// Escalope milanaise contribué(e) par : mathieu.nebra@exemple.com
// Salade Romaine contribué(e) par : laurene.castor@exemple.com