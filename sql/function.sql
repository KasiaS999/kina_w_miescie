CREATE OR REPLACE FUNCTION kino_walidacja()  RETURNS TRIGGER AS '
BEGIN
  IF LENGTH(NEW.nazwa_kina) = 0 THEN
    RAISE EXCEPTION ''Nie podano nazwy kina.'';
  END IF;
  IF LENGTH(NEW.nazwa_kina) = 0 THEN
    RAISE EXCEPTION ''Nie podano lokalizacji kina.'';
  END IF;
  RETURN NEW;
END;
' LANGUAGE 'plpgsql';

CREATE TRIGGER kino_walidacja BEFORE INSERT OR UPDATE
ON kina.kino FOR EACH ROW EXECUTE PROCEDURE kino_walidacja();


CREATE OR REPLACE FUNCTION film_walidacja() RETURNS TRIGGER AS '
BEGIN
  IF NEW.czas_trwania_minuty <= 0 THEN
    RAISE EXCEPTION ''Czas trwania filmu musi być większy od zera.'';
  END IF;
  IF LENGTH(NEW.tytul) = 0 THEN
    RAISE EXCEPTION ''Nie podano tytulu filmu.'';
  END IF;
  IF LENGTH(NEW.film_dostepny_od) = 0 THEN
    RAISE EXCEPTION ''Nie podano od kiedy film jest dostępny.'';
  END IF;
  IF LENGTH(NEW.film_dostepny_do) = 0 THEN
    RAISE EXCEPTION ''Nie podano do kiedy film jest dostępny.'';
  END IF;
  RETURN NEW;
END;
' LANGUAGE 'plpgsql';

CREATE TRIGGER film_walidacja BEFORE INSERT OR UPDATE
ON kina.film FOR EACH ROW EXECUTE PROCEDURE film_walidacja();



CREATE OR REPLACE FUNCTION seans_walidacja() RETURNS TRIGGER AS '
BEGIN
  IF LENGTH(NEW.godzina_rozpoczecia) = 0 THEN
    RAISE EXCEPTION ''Nie podano godziny rozpoczęcia.'';
  END IF;
  IF LENGTH(NEW.godzina_zakonczenia) = 0 THEN
    RAISE EXCEPTION ''Nie podano godziny zakończenia.'';
  END IF;
  RETURN NEW;
END;
' LANGUAGE 'plpgsql';

CREATE TRIGGER seans_walidacja BEFORE INSERT OR UPDATE
ON kina.seans FOR EACH ROW EXECUTE PROCEDURE seans_walidacja();


CREATE OR REPLACE FUNCTION sala_walidacja() RETURNS TRIGGER AS '
BEGIN
  IF LENGTH(NEW.nazwa) = 0 THEN
    RAISE EXCEPTION ''Nie podano nazwy sali.'';
  END IF;
  IF NEW.ilosc_miejsc_na_sali <= 0 THEN
    RAISE EXCEPTION ''Ilość miejsc na sali musi być większa od zera.'';
  END IF;
  RETURN NEW;
END;
' LANGUAGE 'plpgsql';

CREATE TRIGGER sala_walidacja BEFORE INSERT OR UPDATE
ON kina.sala FOR EACH ROW EXECUTE PROCEDURE sala_walidacja();


CREATE OR REPLACE FUNCTION rzad_walidacja() RETURNS TRIGGER AS '
BEGIN
  IF NEW.numer <= 0 THEN
    RAISE EXCEPTION ''Numeru rzędu musi być większy od zera.'';
  END IF;
  IF NEW.ilosc_siedzen <= 0 THEN
    RAISE EXCEPTION ''Ilość miejsc w rzędzie musi być większa od zera.'';
  END IF;
  RETURN NEW;
END;
' LANGUAGE 'plpgsql';

CREATE TRIGGER rzad_walidacja BEFORE INSERT OR UPDATE
ON kina.rzad FOR EACH ROW EXECUTE PROCEDURE rzad_walidacja();


CREATE OR REPLACE FUNCTION siedzenie_walidacja() RETURNS TRIGGER AS '
BEGIN
  IF NEW.numer_siedzenia <= 0 THEN
    RAISE EXCEPTION ''Numeru siedzenia musi być większy od zera.'';
  END IF;
  RETURN NEW;
END;
' LANGUAGE 'plpgsql';

CREATE TRIGGER siedzenie_walidacja BEFORE INSERT OR UPDATE
ON kina.siedzenie FOR EACH ROW EXECUTE PROCEDURE siedzenie_walidacja();


CREATE OR REPLACE FUNCTION klient_walidacja() RETURNS TRIGGER AS '
BEGIN
  IF LENGTH(NEW.imie) <= 0 THEN
    RAISE EXCEPTION ''Nie podano imienia klienta.'';
  END IF;
  IF LENGTH(NEW.nazwisko) <= 0 THEN
    RAISE EXCEPTION ''Nie podano nazwiska klienta.'';
  END IF;
  IF LENGTH(NEW.email) <= 0 THEN
    RAISE EXCEPTION ''Nie podano e-maila klienta.'';
  END IF;
  RETURN NEW;
END;
' LANGUAGE 'plpgsql';

CREATE TRIGGER klient_walidacja BEFORE INSERT OR UPDATE
ON kina.klient FOR EACH ROW EXECUTE PROCEDURE klient_walidacja();