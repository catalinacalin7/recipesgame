Echipa 3 : MEOWTEAM
Membri : Calin Catalina & Neculai Vlad

Domeniu : Entertaiment
Produs : Joc "MemoRecipes"

Descriere produs :

	Jocul "MemoRecipes" este un joc perfect pentru cei ce sa cunoasca
cat mai multe retete noi. Este un mini joc de memorie, in care jucatorul
trebuie sa tasteze sau sa zica ingredinte care apartin unui tip de mancare
afisat random la ecran. 
	Jocul are 3 pagini HTML:
	1) indexstart.html, unde jucatorul poate apasa pe butonul "start
joc" si il redirectioneaza la urmatoarea pagina html:
	2) index.html, contine jocul propriu zis, are 2 div-uri, continand
2 pagini, care se alerneaza de la visible la hidden si invers. Prima pagina
care e la inceput vizibila este pagina in care jucatorul poate alege
chef-ul lui preferat cu care va juca. A doua pagina care se face de la hidden
la visible cand e ales chef-ul si apare jocul propriu zis.
	Random apare un tip de mancare pe ecran si jucatorul trebuie sa
tasteze sau sa zica ingredinte ce fac parte din reteta mancarii. La fiecare
cuvant corect spus, primeste +150 cuvinte la scor, care duce la cresterea nivelului.
In dependenta de nivelul la care se afla, creste numarul de ingrediente care trebuie 
spuse, crescand astfel dificultatea. Cand jucatorul spune un ingredient gresit,
scade numarul de vieti, care initial e egal cu 5. Nivelul creste o data la 500 puncte
de scor acumulate.
	Daca jucatorul a pierdut toate vietile, este redirectionat in a alta pagina
html:
	3) gameOver.html, care are un buton de retry, care redirectioneaza din nou
la pagina index.html

	Pe langa cele 3 pagini html, mai avem un fisier JavaScript(main.js), care
contine logica din spate a jocului. Avem acolo mai multe functii, care construiesc
flow-ul jocului, ce sunt apelate sau in interiorul javascriptului sau la clicul
butoanelor din paginile html.
	De asemenea, mai exista un fisier css, style.css.
	Pentru retinerea retetelor, folosim un map de seturi, unde cheia e tipul
de mancare si valoarea e setul care contine doar chei cu ingredintele aferente.
	Pentru speech recognition folosim API-ul "annyang!", care este o librarie
mica de javascript care ne ajuta pentru inregistrarea ingredientelor spune de
jucator.
	


	Pentru rulare :
		Copiere de pe git-ul aferent echipei noastre cu "git clone"
		Pornire serverul "http-server"(instalare pachete daca e necesar)
		Accesarea unei plaje afisate in terminal dupa pornirea serverului(adresa publica
		ca sa mearga speech recognition)


