# DJU-France

## Description

Cette application permet de récupérer les températures min/max d'une station météo de chaque département de France via OpenWeatherMaps. Puis distribue les données en ajoutant le calcul du degrés-jours unifiés (DJU). Cette application utilise les deux méthodes de calcul des DJU. L'une dite "calcul météo" et l'autre basée sur une température de référence de 18 degrés Celsius.

## Installation

1. Cloner ce dépôt de code à l'aide de la commande git clone
2. Aller dans le répertoire
3. Installer les dépendances en exécutant la commande `npm install`
4. Copier le fichier `env.exemple` en `.env` et ajouter les variables d'environnement nécessaires
5. Lancer les migrations de base de données en exécutant la commande `node ace migration:run`
6. Lancer les seeds en exécutant la commande `node ace db:seed`
7. Lancer l'application en utilisant la commande `node ace serve`

## Utilisation

Une fois l'application lancée, un batch se lance toutes les heures pour récupérer les données météo. L'API est ensuite disponible à l'adresse `127.0.0.1:3333`

## Contributions
Les contributions à ce projet sont les bienvenues. Pour contribuer, veuillez suivre les étapes suivantes :

1. Forkez le dépôt
2. Créez une branche pour votre fonctionnalité ou correction de bug (git checkout -b feature/ma-fonctionnalité)
3. Faites les modifications nécessaires
4. Faites un push de votre branche (git push origin feature/ma-fonctionnalité)
5. Créez une PR à partir de votre branche vers la branche principale du dépôt

Nous apprécions toutes les contributions qui pourraient améliorer cette application.

## License

Ce projet est sous licence WTFPL.