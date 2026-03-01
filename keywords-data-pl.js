/**
 * MTG Keywords Data - Polish (Polski)
 * Localized definitions for MTG keywords.
 */

const KEYWORDS_RAW_PL = {
    "Flying": {
        "short": "Nie może być blokowana, chyba że przez kreatury z lataniem lub z zasięgiem (reach).",
        "long": "702.9a Latanie to zdolność uniku. 702.9b Kreatura z lataniem nie może być blokowana poza kreaturami z lataniem i/lub zasięgiem. Kreatura z lataniem może blokować kreatury z lataniem lub bez niego."
    },
    "First strike": {
        "short": "Zadaje obrażenia bojowe przed kreaturami bez pierwszego uderzenia.",
        "long": "702.7a Pierwsze uderzenie to zdolność statyczna modyfikująca zasady kroku obrażeń bojowych. 702.7b Jeśli co najmniej jedna atakująca lub blokująca kreatura ma pierwsze uderzenie lub podwójne uderzenie na początku kroku obrażeń bojowych, tylko te kreatury zadają obrażenia w tym kroku."
    },
    "Double strike": {
        "short": "Zadaje obrażenia zarówno w kroku pierwszego uderzenia, jak i normalnym.",
        "long": "702.4a Podwójne uderzenie to zdolność statyczna modyfikująca zasady kroku obrażeń bojowych. 702.4b Jeśli co najmniej jedna atakująca lub blokująca kreatura ma pierwsze lub podwójne uderzenie, faza otrzymuje drugi krok obrażeń bojowych."
    },
    "Deathtouch": {
        "short": "Dowolna ilość obrażeń zadana kreaturze wystarcza do jej zniszczenia.",
        "long": "702.2a Dotyk śmierci to zdolność statyczna. 702.2b Każda niezerowa ilość obrażeń bojowych przypisanych kreaturze przez źródło z dotykiem śmierci jest uważana za śmiertelną dla celów zniszczenia kreatury."
    },
    "Lifelink": {
        "short": "Obrażenia zadane przez tę kreaturę powodują, że zyskujesz tyle samo życia.",
        "long": "702.15a Więź życia to zdolność statyczna. 702.15b Obrażenia zadane przez źródło z więzią życia powodują, że kontroler tego źródła (lub właściciel, jeśli nie ma kontrolera) zyskuje ilość życia równą zadanym obrażeniom."
    },
    "Haste": {
        "short": "Może atakować i {T} gdy tylko znajdzie się pod Twoją kontrolą.",
        "long": "702.10a Pośpiech to zdolność statyczna. 702.10b Jeśli kreatura ma pośpiech, może atakować nawet jeśli nie była pod kontrolą kontrolera od początku jego ostatniej tury."
    },
    "Trample": {
        "short": "Może zadać nadmiarowe obrażenia graczowi lub planeswalkerowi, którego atakuje.",
        "long": "702.19a Tratowanie to zdolność statyczna modyfikująca zasady przypisywania obrażeń bojowych. 702.19b Kontroler atakującej kreatury z tratowaniem najpierw przypisuje obrażenia kreaturom ją blokującym. Gdy wszystkie blokujące kreatury otrzymają śmiertelne obrażenia, pozostałe obrażenia są przypisywane według wyboru kontrolera między te kreatury a gracza lub planeswalkera, którego kreatura atakuje."
    },
    "Vigilance": {
        "short": "Atakowanie nie powoduje przekręcenia (tap) tej kreatury.",
        "long": "702.20a Czujność to zdolność statyczna. 702.20b Atakowanie nie powoduje przekręcenia kreatury z czujnością."
    },
    "Reach": {
        "short": "Może blokować kreatury z lataniem.",
        "long": "702.17a Zasięg to zdolność statyczna. 702.17b Kreatura z zasięgiem może blokować kreatury z lataniem."
    },
    "Indestructible": {
        "short": "Nie może zostać zniszczona przez obrażenia ani efekty mówiące \"zniszcz\" (destroy).",
        "long": "702.12a Niezniszczalność to zdolność statyczna. 702.12b Permanent z niezniszczalnością nie może zostać zniszczony. Takie permanenty nie są niszczone przez śmiertelne obrażenia i ignorują stanowe akcje sprawdzające śmiertelne obrażenia."
    },
    "Menace": {
        "short": "Nie może być blokowana przez mniej niż dwie kreatury.",
        "long": "702.110a Menace (Zastraszanie) to zdolność uniku. 702.110b Kreatura z menace nie może być blokowana przez mniej niż dwie kreatury."
    },
    "Ward": {
        "short": "Kontruje czary lub zdolności celujące w to, chyba że zostanie opłacony koszt.",
        "long": "702.21a Ward (Danina) to zdolność wyzwalana. \"Ward [koszt]\" oznacza \"Gdy ten permanent stanie się celem czaru lub zdolności kontrolowanej przez przeciwnika, skontruj ten czar lub zdolność, chyba że ten gracz zapłaci [koszt].\""
    },
    "Flash": {
        "short": "Możesz zagrać tę kartę w dowolnym momencie, w którym mógłbyś rzucić czar natychmiastowy (instant).",
        "long": "702.8a Błysk (Flash) to zdolność statyczna działająca w każdej strefie, z której można zagrać kartę. 702.8b \"Błysk\" oznacza \"Możesz zagrać tę kartę w każdym momencie, w którym mógłbyś rzucić czar natychmiastowy.\""
    },
    "Defender": {
        "short": "Ta kreatura nie może atakować.",
        "long": "702.3a Obrońca (Defender) to zdolność statyczna. 702.3b Kreatura z obrońcą nie może atakować."
    },
    "Hexproof": {
        "short": "Nie może być celem czarów ani zdolności kontrolowanych przez Twoich przeciwników.",
        "long": "702.11a Hexproof to zdolność statyczna. 702.11b \"Hexproof\" na permanencie oznacza \"Ten permanent nie może być celem czarów ani zdolności kontrolowanych przez Twoich przeciwników.\""
    },
    "Infect": {
        "short": "Zadaje obrażenia w postaci liczników -1/-1 kreaturom oraz liczników trucizny graczom.",
        "long": "702.90a Infect (Zarażanie) to zdolność statyczna. 702.90b Obrażenia zadane graczowi przez źródło z zarażaniem nie powodują utraty życia; zamiast tego kontroler źródła daje graczowi tyle liczników trucizny."
    },
    "Scry": {
        "short": "Spójrz na N górnych kart talii, połóż dowolną liczbę na spodzie, a resztę na górze.",
        "long": "701.18a \"Wróżenie N\" oznacza podejrzenie N górnych kart talii, a następnie odłożenie dowolnej ich liczby na spód talii w dowolnej kolejności, a reszty na górę talii w dowolnej kolejności."
    },
    "Surveil": {
        "short": "Spójrz na N górnych kart talii, połóż dowolną liczbę na cmentarzu, a resztę na górze.",
        "long": "701.42a \"Inwigilacja N\" oznacza podejrzenie N górnych kart talii, a następnie odłożenie dowolnej ich liczby na cmentarz, a reszty na górę talii w dowolnej kolejności."
    },
    "Mill": {
        "short": "Połóż karty z góry talii bezpośrednio na cmentarz.",
        "long": "701.13a Aby zmielić (mill) N kart, gracz kładzie N górnych kart swojej talii na swój cmentarz."
    },
    "Storm": {
        "short": "Gdy rzucasz ten czar, skopiuj go za każdy czar rzucony przed nim w tej turze.",
        "long": "702.40a Sztorm (Storm) to zdolność wyzwalana działająca na stosie. \"Sztorm\" oznacza \"Gdy rzucasz ten czar, połóż jego kopię na stosie za każdy inny czar rzucony przed nim w tej turze.\""
    },
    "Living weapon": {
        "short": "Gdy to Wyposażenie wejdzie na pole bitwy, stwórz token kreatury 0/0 czarny Germ i załącz to do niego.",
        "long": "702.92a Żywa broń (Living weapon) to zdolność wyzwalana. \"Żywa broń\" oznacza \"Gdy to Wyposażenie wejdzie na pole bitwy, stwórz token kreatury 0/0 czarny Germ, a następnie załącz to Wyposażenie do niego.\""
    },
    "Prowess": {
        "short": "Dostaje +1/+1 do końca tury za każdym razem, gdy rzucasz czar niebędący kreaturą.",
        "long": "702.108a Kunszt (Prowess) to zdolność wyzwalana. \"Kunszt\" oznacza \"Za każdym razem, gdy rzucasz czar niebędący kreaturą, ta kreatura dostaje +1/+1 do końca tury.\""
    },
    "Protection": {
        "short": "Nie może być celem, załączane, blokowane ani otrzymywać obrażeń od źródeł o określonej cechach.",
        "long": "702.16a Ochorna (Protection) to zdolność statyczna. Oznacza: Zapobiegaj wszelkim Obrażeniom od [cecha], nie może być Załączane przez [cecha], nie może być Blokowane przez [cecha], nie może być Celowane przez [cecha]. (DEBT)"
    }
};

const KEYWORDS_DATA_PL = Object.keys(KEYWORDS_RAW_PL).reduce((acc, key) => {
    acc[key.toLowerCase()] = KEYWORDS_RAW_PL[key];
    return acc;
}, {});
