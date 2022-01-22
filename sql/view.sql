CREATE VIEW filmy_seansu AS
SELECT s.id_seans, f.tytul, f.id_film, s.godzina_rozpoczecia, s.godzina_zakonczenia
FROM kina.seans s 
JOIN kina.film f ON s.id_film = f.id_film
ORDER BY s.id_seans;


CREATE VIEW filmy_w_kinie AS 
SELECT f.tytul, k.nazwa_kina, k.id_kino, f.id_film, se.godzina_rozpoczecia, se.id_seans
FROM kina.kino k 
JOIN kina.sala s ON k.id_kino = s.id_kino
JOIN kina.seans se ON se.id_sala = s.id_sala
JOIN kina.film f ON se.id_film = f.id_film
ORDER BY se.id_seans;

CREATE VIEW siedzenia_na_seansie AS
SELECT se.id_seans, si.id_siedzenie, si.numer_siedzenia,rz.id_rzad, rz.numer
FROM kina.seans se 
JOIN kina.sala s ON se.id_sala = s.id_sala
JOIN kina.rzad rz ON s.id_sala = rz.id_sala
JOIN kina.siedzenie si ON rz.id_rzad = si.id_rzad
ORDER BY se.id_seans;


CREATE VIEW zarezerwowane_siedzenia_na_seansie AS 
SELECT s.id_seans, si.numer_siedzenia, si.id_siedzenie, si.id_rzad, rz.numer
FROM kina.siedzenie si
JOIN kina.rezerwacja r ON r.id_siedzenie = si.id_siedzenie
JOIN kina.seans s ON r.id_seans = s.id_seans
JOIN kina.rzad rz ON si.id_rzad = rz.id_rzad 
ORDER BY s.id_seans;


CREATE VIEW wszystkie_siedzenia AS 
SELECT s.id_seans, s.numer_siedzenia, s.id_siedzenie, s.id_rzad, s.numer, r.siedzenie_standard, r.siedzenie_premium, r.kanapa
FROM siedzenia_na_seansie s
JOIN kina.siedzenie si ON s.id_siedzenie = si.id_siedzenie
JOIN kina.rodzaj_siedzenia r ON si.id_rodzaj_siedzenia = r.id_rodzaj_siedzenia
ORDER BY id_siedzenie;


CREATE VIEW wszystkie_siedzenia_info AS 
SELECT w.id_seans, w.id_siedzenie, w.numer_siedzenia, w.numer, s.nazwa, w.siedzenie_standard, w.siedzenie_premium, w.kanapa
FROM wszystkie_siedzenia w
JOIN kina.rzad r ON r.id_rzad = w.id_rzad
JOIN kina.sala s ON s.id_sala = r.id_sala;


CREATE VIEW zarezerwowane_siedzenia_info AS 
SELECT z.id_seans, z.id_siedzenie, z.numer_siedzenia, z.numer, s.nazwa, r.siedzenie_standard, r.siedzenie_premium, r.kanapa
FROM zarezerwowane_siedzenia_na_seansie z
JOIN kina.rzad rz ON rz.id_rzad = z.id_rzad
JOIN kina.sala s ON s.id_sala = rz.id_sala
JOIN kina.siedzenie si ON si.id_siedzenie = z.id_siedzenie
JOIN kina.rodzaj_siedzenia r ON si.id_rodzaj_siedzenia = r.id_rodzaj_siedzenia;


CREATE VIEW ilosc_zarezerwowanych_siedzen_seans AS
SELECT id_seans, count(id_siedzenie) ilosc
FROM  zarezerwowane_siedzenia_na_seansie 
GROUP BY id_seans;
 
CREATE VIEW sale_z_kinami AS 
SELECT s.id_sala, s.nazwa, s.ilosc_miejsc_na_sali, k.nazwa_kina, k.id_kino
FROM kina.sala s
JOIN kina.kino k ON k.id_kino = s.id_kino; 


CREATE VIEW klienci_na_seansie AS
SELECT k.id_klient, k.imie, k.nazwisko, k.email, s.id_seans
FROM kina.klient k 
JOIN kina.rezerwacja r ON r.id_klient = k.id_klient
JOIN kina.seans s ON r.id_seans = s.id_seans;  


CREATE VIEW seanse_w_kinie AS 
SELECT k.nazwa_kina, se.id_seans, se.godzina_rozpoczecia, se.godzina_zakonczenia, f.tytul, k.id_kino
FROM kina.kino k
JOIN kina.sala s ON k.id_kino = s.id_kino
JOIN kina.seans se ON se.id_sala = s.id_sala
JOIN kina.film f ON f.id_film = se.id_film;


CREATE VIEW klienci_w_kinie AS 
SELECT s.id_kino, s.nazwa_kina, COUNT(k.id_klient) ilosc
FROM seanse_w_kinie s 
JOIN klienci_na_seansie k ON k.id_seans = s.id_seans
GROUP BY s.id_kino, s.nazwa_kina;


CREATE VIEW ilosc_klientow_seans AS 
SELECT k.id_seans, COUNT(k.id_klient) ilosc, f.godzina_rozpoczecia, f.tytul, s.nazwa_kina
FROM klienci_na_seansie k 
JOIN filmy_seansu f ON f.id_seans = k.id_seans
JOIN seanse_w_kinie s ON s.id_seans = k.id_seans
GROUP BY k.id_seans, f.godzina_rozpoczecia, f.tytul, s.nazwa_kina;


CREATE VIEW ilosc_seans_w_kinie AS
SELECT id_kino, nazwa_kina, COUNT(id_seans) ilosc
FROM seanse_w_kinie
GROUP BY id_kino, nazwa_kina;

