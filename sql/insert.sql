
INSERT INTO kina.kino ( id_kino, nazwa_kina, lokalizacja) VALUES
(1,'Sokolik', 'Bolesława Chrobrego 8'),
(2,'Podkarpackie', 'Czekoladowa 98a'),
(3,'ArtiKino', 'Teodora Winiarskiego 100c'),
(4,'Luna', 'Rynek 60'),
(5,'Alga', 'Paprotna 99');


INSERT INTO kina.film ( id_film, czas_trwania_minuty, tytul, film_dostepny_od, film_dostepny_do) VALUES
(1, 120, 'Niemy Krzyk', '17.01', '15.03' ),
(2, 106, 'Honorata', '14.02', '17.03' ),
(3, 112, 'Na uklady mamy rady', '09.04', '29.04' ),
(4, 78, 'Wiejskie historie', '30.03', '24.05' ),
(5, 98, 'Kikimora', '13.02', '16.04' ),
(6, 154, 'Bazyliszek', '20.01', '15.03' );


INSERT INTO kina.seans ( id_seans, id_film, godzina_rozpoczecia, godzina_zakonczenia) VALUES
(1, 1, '17:30', '19:50'),
(2, 1, '20:10', '22:30'),
(3, 2, '10:00', '12:50'),
(4, 2, '13:00', '14:50'), 
(5, 2, '15:00', '16:50'),
(6, 3, '17:30', '19:50'),
(7, 3, '17:30', '19:50'),
(8, 4, '10:30', '12:10'),
(9, 4, '12:30', '14:20'),
(10, 5, '16:00', '18:00'),
(11, 5, '18:10', '20:10'),
(12, 5, '21:00', '23:00'), 
(13, 6, '10:00', '12:50'),
(14, 6, '13:00', '15:50'),
(15, 6, '20:10', '22:40');

INSERT INTO kina.sala (id_sala, nazwa, ilosc_miejsc_na_sali, id_kino) VALUES
(1,'Pizza', 200, 1),
(2,'Grazie', 250, 1),
(3,'Pensare', 50, 1),
(4,'Non capisco', 100, 2),
(5,'Pizza', 200, 2),
(6,'Pensare', 50, 2),
(7,'Ciao!', 300, 3),
(8,'Pensare', 50, 3),
(9,'Non capisco', 100, 3),
(10,'Pizza', 200, 4),
(11,'Pizza', 200, 4),
(12,'Ciao!', 300, 4),
(13,'Grazie', 250, 5),
(14,'Ciao!', 300, 5),
(15,'Pizza', 200, 5);

INSERT INTO kina.rzad (id_rzad, id_sala, numer, ilosc_siedzen) VALUES
(1, 1, 1, 50),
(2, 1, 2, 50),
(3, 1, 3, 50),
(4, 1, 4, 50),
(5, 2, 1, 50),
(6, 2, 2, 50),
(7, 2, 3, 50),
(8, 2, 4, 50),
(9, 2, 5, 50),
(10, 3, 1, 50),
(11, 4, 1, 25),
(12, 4, 2, 25),
(13, 4, 3, 25),
(14, 4, 4, 25),
(15, 5, 1, 100),
(16, 5, 2, 100),
(17, 6, 1, 50),
(18, 7, 1, 100),
(19, 7, 2, 100),
(20, 7, 3, 100),
(21, 8, 1, 50),
(22, 9, 1, 100),
(23, 10, 1, 75),
(24, 10, 2, 75),
(25, 10, 3, 50),
(26, 11, 4, 60),
(27, 11, 5, 60),
(28, 11, 1, 80),
(29, 13, 1, 125),
(30, 13, 2, 125),
(31, 14, 1, 100),
(32, 14, 2, 100),
(33, 14, 3, 100),
(34, 15, 1, 100),
(35, 15, 2, 100);

INSERT INTO kina.rodzaj_siedzenia (id_rodzaj_siedzenia, siedzenie_standard, siedzenie_premium, kanapa) VALUES
(1, TRUE, FALSE, FALSE),
(2, FALSE, TRUE, FALSE),
(3, FALSE, FALSE, TRUE);

INSERT INTO kina.siedzenie (id_siedzenie, id_rzad, numer_siedzenia, id_rodzaj_siedzenia) VALUES
(1, 1, 1, 1),
(2, 1, 2, 1),
(3, 1, 3, 1),
(4, 1, 4, 2),
(5, 1, 5, 2),
(6, 1, 6, 2),
(7, 1, 7, 2),
(8, 1, 8, 3),
(9, 1, 9, 3),
(10, 1, 10, 3),
(11, 2, 1, 1),
(12, 2, 2, 1),
(13, 2, 3, 1),
(14, 2, 4, 1),
(15, 2, 5, 2),
(16, 2, 6, 2),
(17, 2, 7, 3),
(18, 3, 1, 3),
(19, 3, 2, 3),
(20, 3, 3, 3),
(21, 3, 4, 1),
(22, 3, 5, 1),
(23, 4, 1, 1),
(24, 4, 2, 1),
(25, 4, 3, 1),
(26, 4, 4, 1),
(27, 4, 5, 1),
(28, 5, 1, 2),
(29, 5, 2, 2),
(30, 5, 3, 2),
(31, 5, 4, 2),
(32, 5, 5, 2);


INSERT INTO kina.klient (id_klient, imie, nazwisko, email) VALUES
(1, 'Anna', 'Anacka', 'ana@pocztex.pl'),
(2, 'Wioletta', 'Cirowa', 'wci@mail.pl'),
(3, 'Fiona', 'Gyra', 'gyra@mail.com'),
(4, 'Henryk', 'Wopil', 'wop@pp.pl'),
(5, 'Hugon', 'Hreet', 'ana@il.it'),
(6, 'Wojciech', 'Tilek', 'www@wq.eu'),
(7, 'Iga', 'Port', 'ort@ypl.pi'),
(8, 'Agata', 'Witac', 'wita@wpo.ty'),
(9, 'Lucjan', 'Syr', 'syr@grr.po'),
(10, 'Przemysław', 'Lurew', 'rew@ytt.rr');


INSERT INTO kina.rezerwacja (id_rezerwacja, id_seans, id_siedzenie, id_klient) VALUES
(1, 1, 1, 1),
(2, 1, 2, 2),
(3, 3, 10, 7),
(4, 6, 11, 8),
(5, 3, 12, 9),
(6, 13, 30, 5),
(7, 12, 30, 4);