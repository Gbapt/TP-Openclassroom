<?php
$recettes = [
  [
    "titre" => "Cassoulet",
    "auteur" =>  "Prosper Montagné"
  ],
  [
    "titre" => "Paëlla",
    "auteur" => "Alberto Herraiz"
  ],
  [
    "titre" => "Taboulé",
    "auteur" => "Yotam Ottolenghi"
  ],
  [
    "titre" => "Cassoulet",
    "auteur" => "Renato Gualandi"
  ],
];
?>

<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exercice 1</title>
</head>
<body>
  <ul>
    <?php for ($lignes = 0; $lignes <= 3; $lignes++) : ?>
      <li><?php echo $recettes[$lignes]["titre"] . " - " . $recettes[$lignes]["auteur"]; ?></li>
    <?php endfor; ?>
  </ul>
</body>
</html>