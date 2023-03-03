# Check Sites

Vérification de l'état des sites et services AfricTivistes

## Sites

Les sites sont dans le fichier data/site.csv

Ajouter votre site comme suite

```csv
url,code
https://adresse-url,http-code

```

> Trouver le code http de l'adresse url avec la commande suivante

```shell
curl -s -o /dev/null -I -w "%{http_code}" https://africtivistes.org
```

## Issues

Lors de la vérification de l'état des sites en cas de problème détecté un issue est crée.

Consulter les [issues](https://github.com/AfricTivistes/check-sites/issues) pour en savoir davantage.
