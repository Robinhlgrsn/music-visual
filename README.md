# music-visual

## Beskrivning:
I mitt projekt kan man spela musik och välja mellan olika fototeman. 

Genom mitt Express Api kan man ladda upp, redigera och ta bort låtar från servern. 
I headern finns en dropdown där du kan välja fototema utifrån ett antal katergorier som hämtas från ett externt API(https://unsplash.com/).
--
## Endpoints
I root-mappen ligger en endpoints.rest fil där du kan testa mitt Express APIs endpoints.
Eftersom 'DELETE' är beroende av att ta bort en fil som hör ihop med datan vi vill ta bort kommer den kasta ett fel, eftersom den inte kan hitta filen, men datan tas fortfarande bort.

## För att köra projeket:
- Stå i projektets root-mapp och öppna terminalen och kör
 ```npm install;```
 ```npm run watch```
- servern körs på port 3000 och klienten port 8080.

Länk till GitHub: https://github.com/Robinhlgrsn/music-visual.git
