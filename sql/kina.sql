CREATE SCHEMA kina;



CREATE TABLE kina.kino (
                id_kino INTEGER NOT NULL,
                nazwa_kina VARCHAR(255) NOT NULL,
                lokalizacja VARCHAR(255) NOT NULL,
                CONSTRAINT kino_id PRIMARY KEY (id_kino)
);


CREATE TABLE kina.film (
                id_film INTEGER NOT NULL,
                czas_trwania_minuty INTEGER NOT NULL,
                tytul VARCHAR(255) NOT NULL,
                film_dostepny_od VARCHAR(50),
                film_dostepny_do VARCHAR(50),
                CONSTRAINT film_id PRIMARY KEY (id_film)
);


CREATE TABLE kina.sala (
                id_sala INTEGER NOT NULL,
                nazwa VARCHAR(50),
                ilosc_miejsc_na_sali INTEGER NOT NULL,
                id_kino INTEGER NOT NULL,
                CONSTRAINT sala_id PRIMARY KEY (id_sala)
);


CREATE TABLE kina.seans (
                id_seans INTEGER NOT NULL,
                id_film INTEGER NOT NULL,
                godzina_rozpoczecia VARCHAR(10) NOT NULL,
                godzina_zakonczenia VARCHAR(10) NOT NULL,
                id_sala INTEGER NOT NULL,
                CONSTRAINT seans_id PRIMARY KEY (id_seans, id_film)
);


CREATE TABLE kina.rzad (
                id_rzad INTEGER NOT NULL,
                id_sala INTEGER NOT NULL,
                numer INTEGER NOT NULL,
                ilosc_siedzen INTEGER NOT NULL,
                CONSTRAINT rzad_id PRIMARY KEY (id_rzad)
);


CREATE TABLE kina.rodzaj_siedzenia (
                id_rodzaj_siedzenia INTEGER NOT NULL,
                siedzenie_standard BOOLEAN,
                siedzenie_premium BOOLEAN,
                kanapa BOOLEAN,
                CONSTRAINT rodzaj_siedzenia_id PRIMARY KEY (id_rodzaj_siedzenia)
);


CREATE TABLE kina.siedzenie (
                id_siedzenie  INTEGER NOT NULL,
                id_rzad INTEGER NOT NULL,
                numer_siedzenia INTEGER NOT NULL,
                id_rodzaj_siedzenia INTEGER NOT NULL,
                CONSTRAINT siedzenie_id PRIMARY KEY (id_siedzenie , id_rzad)
);


CREATE TABLE kina.klient (
                id_klient INTEGER NOT NULL,
                imie VARCHAR(30),
                nazwisko VARCHAR(30),
                email VARCHAR(40),
                CONSTRAINT klient_id PRIMARY KEY (id_klient)
);


CREATE TABLE kina.rezerwacja (
                id_rezerwacja INTEGER NOT NULL,
                id_seans INTEGER NOT NULL,
                id_siedzenie  INTEGER NOT NULL,
                id_klient INTEGER NOT NULL,
                CONSTRAINT rezerwacja_id PRIMARY KEY (id_rezerwacja)
);


ALTER TABLE kina.sala ADD CONSTRAINT kina_sala_fk
FOREIGN KEY (id_kino)
REFERENCES kina.kino (id_kino)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE kina.seans ADD CONSTRAINT film_seans_fk
FOREIGN KEY (id_film)
REFERENCES kina.film (id_film)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE kina.rzad ADD CONSTRAINT sala_rzad_fk
FOREIGN KEY (id_sala)
REFERENCES kina.sala (id_sala)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE kina.seans ADD CONSTRAINT sala_seans_fk
FOREIGN KEY (id_sala)
REFERENCES kina.sala (id_sala)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE kina.rezerwacja ADD CONSTRAINT seans_rezerwacja_fk
FOREIGN KEY (id_seans)
REFERENCES kina.seans (id_seans)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE kina.siedzenie ADD CONSTRAINT rzad_siedzenie_fk
FOREIGN KEY (id_rzad)
REFERENCES kina.rzad (id_rzad)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE kina.siedzenie ADD CONSTRAINT rodzaj_siedzenia_siedzenie_fk
FOREIGN KEY (id_rodzaj_siedzenia)
REFERENCES kina.rodzaj_siedzenia (id_rodzaj_siedzenia)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE kina.rezerwacja ADD CONSTRAINT siedzenie_rezerwacja_fk
FOREIGN KEY (id_siedzenie )
REFERENCES kina.siedzenie (id_siedzenie )
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;

ALTER TABLE kina.rezerwacja ADD CONSTRAINT klient_rezerwacja_fk
FOREIGN KEY (id_klient)
REFERENCES kina.klient (id_klient)
ON DELETE NO ACTION
ON UPDATE NO ACTION
NOT DEFERRABLE;