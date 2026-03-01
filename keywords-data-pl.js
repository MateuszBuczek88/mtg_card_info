// Polish Keywords Data
// KEYWORDS_DATA_PL uses the same English keys for lookup
let KEYWORDS_DATA_PL = {};

const KEYWORDS_RAW_PL = {
    // 701. Keyword Actions
    "activate": {
        "short": "Aktywowanie umiejętności polega na umieszczeniu jej na stosie i zapłaceniu jej kosztów.",
        "long": "701.2a Aktywowanie umiejętności aktywowanej polega na umieszczeniu jej na stosie i zapłaceniu jej kosztów, aby ostatecznie mogła zostać rozstrzygnięta i wywołać swój efekt."
    },
    "attach": {
        "short": "Przymocuj Aurę, Ekwipunek lub Fortyfikację do obiektu lub gracza.",
        "long": "701.3a Przymocowanie Aury, Ekwipunku lub Fortyfikacji do obiektu lub gracza oznacza pobranie go z miejsca, w którym się aktualnie znajduje, i umieszczenie go na tym obiekcie lub graczu."
    },
    "behold": {
        "short": "Ujawnij kartę z ręki lub wybierz permanent o określonej jakości.",
        "long": "701.4a „Ujrzyj [jakość]” oznacza „Ujawnij kartę o [jakości] ze swojej ręki lub wybierz permanent o [jakości], który kontrolujesz na polu bitwy”."
    },
    "cast": {
        "short": "Umieść czar na stosie i zapłać jego koszty.",
        "long": "701.5a Rzucenie czaru polega na pobraniu go ze strefy, w której się znajduje (zwykle z ręki), umieszczeniu go na stosie i zapłaceniu jego kosztów."
    },
    "counter": {
        "short": "Anuluj czar lub umiejętność, aby nie został rozstrzygnięty.",
        "long": "701.6a Skontrowanie czaru lub umiejętności oznacza jej anulowanie i usunięcie ze stosu. Nie zostaje rozstrzygnięta i żaden z jej efektów nie następuje."
    },
    "create": {
        "short": "Umieść token na polu bitwy.",
        "long": "701.7a Stworzenie jednego lub więcej tokenów o określonych cechach polega na umieszczeniu określonej liczby tokenów na polu bitwy."
    },
    "destroy": {
        "short": "Przenieś permanent z pola bitwy na cmentarz jego właściciela.",
        "long": "701.8a Zniszczenie permanentu polega na przeniesieniu go z pola bitwy na cmentarz jego właściciela."
    },
    "discard": {
        "short": "Przenieś kartę z ręki na cmentarz.",
        "long": "701.9a Odrzucenie karty polega na przeniesieniu jej z ręki właściciela na jego cmentarz."
    },
    "double": {
        "short": "Zwiększ wartość (życie, siłę, liczniki) do dwukrotności jej obecnej kwoty.",
        "long": "701.10e Podwojenie liczby liczników polega na przyznaniu temu graczowi lub permanentowi tylu liczników, ile już posiada."
    },
    "triple": {
        "short": "Zwiększ wartość do trzykrotności jej obecnej kwoty.",
        "long": "701.11b Potrojenie siły stwora powoduje, że otrzymuje on +X/+0, gdzie X jest dwukrotną wartością jego siły w momencie rozstrzygania umiejętności."
    },
    "exchange": {
        "short": "Zamień kontrolę, sumy życia lub obiekty.",
        "long": "701.12a Czar lub umiejętność może nakazać graczom wymianę czegoś (np. sumy życia lub kontroli nad dwoma permanentami)."
    },
    "exile": {
        "short": "Przenieś obiekt do strefy wygnania.",
        "long": "701.13a Wygnanie obiektu polega na przeniesieniu go do strefy wygnania z miejsca, w którym się znajduje."
    },
    "fight": {
        "short": "Dwa stwory zadają sobie nawzajem obrażenia równe ich sile.",
        "long": "701.14a Każdy z tych stworów zadaje obrażenia równe swojej sile drugiemu stworowi. Nie są to obrażenia walki."
    },
    "goad": {
        "short": "Stwór atakuje, jeśli może, i atakuje gracza innego niż ty, jeśli może.",
        "long": "701.15b Rozjuszony stwór atakuje w każdej walce, jeśli może, i atakuje gracza innego niż kontroler efektu rozjuszenia, jeśli może."
    },
    "investigate": {
        "short": "Stwórz token Poszlaki (artefakt z „{2}, Poświęć: Dobierz kartę”).",
        "long": "701.16a „Zbadaj” oznacza „Stwórz token Poszlaki”."
    },
    "mill": {
        "short": "Przenieś karty z wierzchu biblioteki na cmentarz.",
        "long": "701.17a Aby gracz mógł przemielić określoną liczbę kart, umieszcza tyle samo kart z wierzchu swojej biblioteki na swoim cmentarzu."
    },
    "play": {
        "short": "Umieść ląd na polu bitwy lub rzuć kartę jako czar.",
        "long": "701.18b Zagranie karty oznacza zagranie jej jako lądu lub rzucenie jej jako czaru, w zależności od tego, co jest odpowiednie."
    },
    "regenerate": {
        "short": "Następnym razem, gdy ten obiekt miałby zostać zniszczony, nie zostaje. Zamiast tego, tapnij go i usuń z walki.",
        "long": "701.19a „Zregeneruj [permanent]” oznacza „Następnym razem, gdy [permanent] miałby zostać zniszczony w tej turze, zamiast tego tapnij go i usuń z walki”."
    },
    "reveal": {
        "short": "Pokaż kartę wszystkim graczom.",
        "long": "701.20a Ujawnienie karty polega na pokazaniu jej wszystkim graczom przez krótki czas."
    },
    "sacrifice": {
        "short": "Przenieś kontrolowany przez siebie permanent na cmentarz jego właściciela.",
        "long": "701.21a Poświęcenie permanentu polega na przeniesieniu go z pola bitwy bezpośrednio na cmentarz jego właściciela."
    },
    "scry": {
        "short": "Podglądnij N kart z wierzchu biblioteki, połóż dowolne na spodzie, a resztę na górze.",
        "long": "701.22a „Wróżenie N” oznacza przejrzenie N górnych kart biblioteki, a następnie położenie dowolnej liczby z nich na spodzie, a reszty na górze."
    },
    "search": {
        "short": "Przeszukaj strefę w celu znalezienia określonej karty.",
        "long": "701.23a Przeszukiwanie strefy w celu znalezienia karty polega na przejrzeniu wszystkich kart w tej strefie w celu znalezienia karty pasującej do opisu."
    },
    "shuffle": {
        "short": "Potasuj karty w bibliotece lub stosie.",
        "long": "701.24a Potasowanie biblioteki lub zakrytego stosu kart polega na ich losowym wymieszaniu."
    },
    "surveil": {
        "short": "Podglądnij N kart z wierzchu, połóż dowolne na cmentarzu, a resztę na górze.",
        "long": "701.25a „Inwigilacja N” oznacza przejrzenie N górnych kart biblioteki, a następnie położenie dowolnej ich liczby na cmentarzu, a reszty na górze."
    },
    "tap": {
        "short": "Obróć permanent bokiem, aby pokazać, że został użyty.",
        "long": "701.26a Tapnięcie permanentu polega na obróceniu go bokiem. Nie można go tapnąć ponownie, dopóki nie zostanie odtapowany."
    },
    "untap": {
        "short": "Obróć permanent z powrotem do pionu.",
        "long": "701.26b Odtapowanie permanentu polega na przywróceniu go do pionu."
    },
    "transform": {
        "short": "Odwróć dwustronny permanent na jego drugą stronę.",
        "long": "701.27a Przemiana permanentu polega na odwróceniu go tak, aby jego druga strona była skierowana do góry."
    },
    "convert": {
        "short": "Odwróć dwustronny permanent (mechanika Transformers).",
        "long": "701.28a Konwersja permanentu polega na jego obróceniu tak, aby jego druga strona była skierowana do góry. Postępuje się zgodnie z zasadami przemiany."
    },
    "fateseal": {
        "short": "Podglądnij N kart z wierzchu biblioteki przeciwnika, połóż dowolne na spodzie.",
        "long": "701.29a „Pieczętowanie losu N” oznacza przejrzenie N górnych kart biblioteki przeciwnika, a następnie położenie dowolnej ich liczby na spodzie, a reszty na górze."
    },
    "clash": {
        "short": "Ty i przeciwnik ujawniacie górne karty; najwyższa wartość many wygrywa.",
        "long": "701.30b „Starcie z przeciwnikiem” oznacza „Wybierz przeciwnika. Ty i ten przeciwnik ujawniacie górną kartę swojej biblioteki. Wyższa mana wygrywa”."
    },
    "planeswalk": {
        "short": "Przenieś się na inny plan w grze Planechase.",
        "long": "701.31b Podróż między wymiarami polega na przeniesieniu górnej karty biblioteki planów na spód i odkryciu kolejnej."
    },
    "set in motion": {
        "short": "Aktywuj kartę schematu w grze Archenemy.",
        "long": "701.32b Wprawienie schematu w ruch polega na zdjęciu go z wierzchu talii schematów i odwróceniu go obrazkiem do góry."
    },
    "abandon": {
        "short": "Zdezaktywuj trwający schemat.",
        "long": "701.33b Porzucenie schematu polega na odwróceniu go obrazkiem do dołu i położeniu na spodzie talii schematów."
    },
    "proliferate": {
        "short": "Daj kolejny licznik dowolnej liczbie graczy i/lub permanentów, które już mają liczniki.",
        "long": "701.34a Rozprzestrzenianie oznacza wybranie dowolnej liczby permanentów i/lub graczy z licznikiem i przyznanie każdemu kolejnego licznika każdego rodzaju, jaki posiadają."
    },
    "detain": {
        "short": "Permanent nie może atakować, blokować ani używać umiejętności aktywowanych do twojej następnej tury.",
        "long": "701.35a Do twojej następnej tury ten permanent nie może atakować ani blokować, a jego umiejętności aktywowane nie mogą być aktywowane."
    },
    "populate": {
        "short": "Stwórz token, który jest kopią kontrolowanego przez ciebie tokena stwora.",
        "long": "701.36a Zasiedlanie oznacza wybranie kontrolowanego przez siebie tokena stwora i stworzenie tokena będącego jego kopią."
    },
    "monstrosity": {
        "short": "Jeśli nie jest potworny, połóż na nim N liczników +1/+1 i staje się potworny.",
        "long": "701.37a „Potworność N” oznacza „Jeśli ten permanent nie jest potworny, połóż na nim N liczników +1/+1 i staje się potworny”."
    },
    "vote": {
        "short": "Gracze dokonują wyboru spośród wyników.",
        "long": "701.38a Każdy gracz, zgodnie z kolejnością tur, wybiera jedną z dostępnych opcji."
    },
    "bolster": {
        "short": "Połóż N liczników +1/+1 na stwoże o najmniejszej wytrzymałości.",
        "long": "701.39a Wybierz kontrolowanego przez siebie stwora o najmniejszej wytrzymałości i połóż na nim N liczników +1/+1."
    },
    "manifest": {
        "short": "Połóż górną kartę biblioteki zakrytą jako stwora 2/2. Odkryj za koszt many, jeśli to karta stwora.",
        "long": "701.40a Manifestacja karty polega na odwróceniu jej obrazkiem do dołu. Staje się ona stworem 2/2 bez tekstu."
    },
    "support": {
        "short": "Połóż licznik +1/+1 na każdym z maksymalnie N innych docelowych stworów.",
        "long": "701.41a „Wsparcie N” na permanencie oznacza „Połóż licznik +1/+1 na każdym z maksymalnie N innych docelowych stworów”."
    },
    "meld": {
        "short": "Wygnaj dwie karty i przywróć je jako połączony duży permanent.",
        "long": "701.42a Stopienie to umieszczenie dwóch kart na polu bitwy ich tylnymi stronami skierowanymi do góry i połączenie ich w jeden obiekt."
    },
    "exert": {
        "short": "Wysil permanent, aby nie odtapowywał się w następnym kroku odtapowania w zamian za korzyść.",
        "long": "701.43a Wysilenie permanentu polega na wybraniu, aby nie odtapowywał się on podczas następnego kroku odtapowania."
    },
    "explore": {
        "short": "Ujawnij górną kartę: Jeśli ląd, weź na rękę. W przeciwnym razie połóż licznik +1/+1 na tym stworze.",
        "long": "701.44a Ujawnij górną kartę. Jeśli to ląd, weź na rękę. W przeciwnym razie połóż licznik +1/+1 na stworze i możesz ją zostawić lub odrzucić."
    },
    "assemble": {
        "short": "Umieść Kontrapcję na polu bitwy ze swojej talii Kontrapcji.",
        "long": "701.45a Złożenie to akcja słowa kluczowego, która umieszcza Kontrapcje na polu bitwy (mechanika Un-set)."
    },
    "adapt": {
        "short": "Jeśli brak liczników +1/+1, połóż N liczników +1/+1 na tym permanencie.",
        "long": "701.46a „Adaptacja N” oznacza „Jeśli ten permanent nie ma na sobie liczników +1/+1, połóż na nim N liczników +1/+1”."
    },
    "amass": {
        "short": "Połóż N liczników +1/+1 na Armii lub najpierw stwórz Armię 0/0.",
        "long": "701.47a Jeśli nie kontrolujesz Armii, stwórz token 0/0. Następnie połóż N liczników +1/+1 na Armii, którą kontrolujesz."
    },
    "learn": {
        "short": "Odrzuć, aby dobrać, lub weź kartę Lekcji spoza gry.",
        "long": "701.48a „Nauka” oznacza „Możesz odrzucić kartę. Jeśli to zrobisz, dobierz. W przeciwnym razie ujawnij kartę Lekcji ze swojego sideboardu”."
    },
    "venture into the dungeon": {
        "short": "Przejdź do następnego pokoju lochu lub rozpocznij nowy.",
        "long": "701.49a Wejdź do lochu lub przesuń swój znacznik wyprawy do sąsiedniego pokoju w obecnym lochu."
    },
    "connive": {
        "short": "Dobierz, następnie odrzuć. Odrzucenie karty niebędącej lądem daje licznik +1/+1.",
        "long": "701.50a Dobierz kartę, a następnie odrzuć. Jeśli odrzucona karta nie jest lądem, połóż licznik +1/+1 na permanencie."
    },
    "open an attraction": {
        "short": "Umieść górną kartę talii Atrakcji w grze.",
        "long": "701.51b Przenieś górną kartę ze swojej talii Atrakcji na pole bitwy."
    },
    "roll to visit your attractions": {
        "short": "Rzuć k6, aby zobaczyć, które Atrakcje się aktywują.",
        "long": "701.52a Rzuć sześciościenną kością. Atrakcje z pasującym numerem zostają „odwiedzone”."
    },
    "incubate": {
        "short": "Stwórz token Inkubatora z N licznikami +1/+1 (transformacja za {2}).",
        "long": "701.53a Stwórz token Inkubatora z N licznikami +1/+1. Transformuje się on w stwora Phyrexian 0/0."
    },
    "the ring tempts you": {
        "short": "Wybierz Powiernika Pierścienia i zyskaj kolejny poziom mocy Pierścienia.",
        "long": "701.54a Wybierz stwora, który zostanie twoim Powiernikiem Pierścienia i zyskaj umiejętności z emblematu Pierścienia."
    },
    "face a villainous choice": {
        "short": "Wybierz jeden z dwóch złych wyników oferowanych przez przeciwnika.",
        "long": "701.55a Wybierz między opcją A a opcją B dostarczoną przez czar lub umiejętność."
    },
    "time travel": {
        "short": "Dodaj lub usuń liczniki czasu z permanentów lub zawieszonych kart.",
        "long": "701.56a Wybierz dowolną liczbę permanentów lub zawieszonych kart z licznikami czasu i dodaj lub usuń jeden."
    },
    "discover": {
        "short": "Wygnał karty do czaru niebędącego lądem o MV ≤ N. Rzuć za darmo lub weź na rękę.",
        "long": "701.57a „Odkrycie N” oznacza wygnanie kart do momentu trafienia na kartę inną niż ląd o MV ≤ N. Możesz ją rzucić za darmo lub wziąć na rękę."
    },
    "cloak": {
        "short": "Połóż zakryte jako 2/2 z ward {2}. Odkryj za koszt, jeśli to karta stwora.",
        "long": "701.58a Odwróć kartę obrazkiem do dołu. Jest to stwór 2/2 z ward {2}. Możesz go odkryć za koszt many, jeśli to karta stwora."
    },
    "collect evidence": {
        "short": "Wygnaj karty z cmentarza o łącznym MV ≥ N.",
        "long": "701.59a Wygnaj dowolną liczbę kart ze swojego cmentarza o łącznej wartości many N lub większej."
    },
    "suspect": {
        "short": "Podejrzany stwór ma menace i nie może blokować.",
        "long": "701.60c Podejrzany permanent ma menace i „Ten stwór nie może blokować”."
    },
    "forage": {
        "short": "Wygnaj 3 karty z cmentarza lub poświęć Pożywienie.",
        "long": "701.61a „Żerowanie” oznacza wygnanie trzech kart z cmentarza lub poświęcenie Pożywienia."
    },
    "manifest dread": {
        "short": "Podglądnij 2 górne karty: Jedną zamanifestuj, drugą daj na cmentarz.",
        "long": "701.62a Podglądnij dwie górne karty. Jedną zamanifestuj, a drugą połóż na swoim cmentarzu."
    },
    "endure": {
        "short": "Połóż N liczników +1/+1 na tym lub stwórz token N/N.",
        "long": "701.63a Stwórz token Ducha N/N, chyba że położysz N liczników +1/+1 na tym permanencie."
    },
    "harness": {
        "short": "Oznacz ten permanent jako „okiełznany”, aby odblokować inne umiejętności.",
        "long": "701.64a „Okiełznanie” oznacza, że ten permanent staje się okiełznany, jeśli jeszcze nim nie jest."
    },
    "airbend": {
        "short": "Wygnaj obiekty; właściciel może je rzucić za {2}.",
        "long": "701.65a Wygnaj te obiekty. Właściciel może je rzucić płacąc {2} zamiast kosztu many."
    },
    "earthbend": {
        "short": "Ląd staje się stworem z N licznikami i haste.",
        "long": "701.66a Ląd staje się stworem 0/0 z haste i N licznikami +1/+1."
    },
    "waterbend": {
        "short": "Tapnij artefakty/stwory, aby zapłacić manę ogólną w koszcie.",
        "long": "701.67a Możesz tapnąć nie-tapnięty artefakt lub stwór, który kontrolujesz, za każdą manę ogólną w koszcie."
    },
    "blight": {
        "short": "Połóż N liczników -1/-1 na kontrolowanym przez siebie stwoże.",
        "long": "701.68a „Zaraza N” oznacza położenie N liczników -1/-1 na kontrolowanym przez siebie stwoże."
    },

    // 702. Keyword Abilities
    "deathtouch": {
        "short": "Każda ilość obrażeń, jakie zada on stworowi, wystarczy do jego zniszczenia.",
        "long": "702.2a Deathtouch to umiejętność statyczna. Każde obrażenie walki zadane stworowi jest uważane za zabójcze."
    },
    "defender": {
        "short": "Ten stwór nie może atakować.",
        "long": "702.3a Defender to umiejętność statyczna. Stwór z defenderem nie może atakować."
    },
    "double strike": {
        "short": "Zadaje zarówno obrażenia „first-strike”, jak i zwykłe obrażenia walki.",
        "long": "702.4a Double strike zadaje obrażenia w dwóch różnych krokach zadawania obrażeń walki."
    },
    "enchant": {
        "short": "Określa, co Aura może brać na cel lub do czego może być przyłączona.",
        "long": "702.5a Napisane „Zaczaruj [obiekt]”, definiuje legalne cele i przyłączenia dla Aury."
    },
    "equip": {
        "short": "Przyłącz to do kontrolowanego przez siebie stwora. Aktywuj tylko jako sorcery.",
        "long": "702.6a „[Koszt]: Przyłącz to do docelowego stwora, którego kontrolujesz. Aktywuj tylko jako sorcery”."
    },
    "first strike": {
        "short": "Zadaje obrażenia walki przed stworami bez first strike.",
        "long": "702.7a First strike zadaje obrażenia tylko w pierwszym kroku zadawania obrażeń walki."
    },
    "flash": {
        "short": "Możesz rzucić tę kartę w dowolnym momencie, w którym mógłbyś rzucić czar natychmiastowy.",
        "long": "702.8a Flash oznacza: „Możesz zagrać tę kartę w dowolnym momencie, w którym mógłbyś rzucić czar natychmiastowy”."
    },
    "flying": {
        "short": "Nie może być blokowany, chyba że przez stwory z lataniem lub reach.",
        "long": "702.9a Latanie to umiejętność unikowa. Może być blokowana tylko przez stwory potrafiące latać lub z zasięgiem."
    },
    "haste": {
        "short": "Może atakować i tapować się, gdy tylko znajdzie się pod twoją kontrolą.",
        "long": "702.10a Pośpiech pozwala na natychmiastowe atakowanie i używanie umiejętności wymagających tapnięcia."
    },
    "hexproof": {
        "short": "Nie może być celem czarów ani umiejętności kontrolowanych przez przeciwników.",
        "long": "702.11a „Hexproof” oznacza, że twoi przeciwnicy nie mogą brać na cel tego permanentu ani gracza."
    },
    "indestructible": {
        "short": "Nie może zostać zniszczony przez obrażenia ani efekty mówiące „zniszcz”.",
        "long": "702.12b Permanent z niezniszczalnością nie może zostać zniszczony, w tym przez obrażenia śmiertelne."
    },
    "intimidate": {
        "short": "Nie może być blokowany, chyba że przez stwory-artefakty i/lub stwory dzielące kolor.",
        "long": "702.13a Intimidate to umiejętność unikowa oparta na dzieleniu kolorów lub byciu artefaktem."
    },
    "landwalk": {
        "short": "Nie do zablokowania, jeśli broniący się gracz kontroluje ląd określonego typu.",
        "long": "702.14a Obejmuje Plainswalk, Islandwalk, Swampwalk, Mountainwalk, Forestwalk itp."
    },
    "lifelink": {
        "short": "Obrażenia zadane przez to źródło powodują również zyskanie tylu samo punktów życia.",
        "long": "702.15b Obrażenia zadane przez to źródło powodują, że jego kontroler zyskuje tyle samo życia."
    },
    "protection": {
        "short": "Nie może otrzymywać obrażeń, być oczarowany, ekwipowany, blokowany ani brany na cel przez [jakość].",
        "long": "702.16a Często streszczane jako DEBT: Damage, Enchant, Block, Target."
    },
    "reach": {
        "short": "Może blokować stwory z lataniem.",
        "long": "702.17a Reach pozwala stworowi blokować flaszki, nawet jeśli sam nie potrafi latać."
    },
    "shroud": {
        "short": "Nie może być celem czarów ani umiejętności.",
        "long": "702.18a Shroud uniemożliwia jakiemukolwiek graczowi branie na cel permanentu lub gracza."
    },
    "trample": {
        "short": "Może zadać nadmiarowe obrażenia walki graczowi lub planeswalkerowi, którego atakuje.",
        "long": "702.19a Nadmiarowe obrażenia są przypisywane graczowi/planeswalkerowi po zadaniu śmiertelnych obrażeń blokerom."
    },
    "vigilance": {
        "short": "Atakowanie nie powoduje tapnięcia tego stwora.",
        "long": "702.20a Vigilance pozwala stworowi atakować bez tapowania się."
    },
    "ward": {
        "short": "Kontruje czary wymierzone w ten obiekt, chyba że zostanie zapłacony koszt.",
        "long": "702.21a „Ward [koszt]” kontruje czar lub umiejętność przeciwnika, chyba że zapłaci [koszt]."
    },
    "banding": {
        "short": "Stwory mogą atakować/blokować w grupie i wspólnie przydzielać obrażenia.",
        "long": "702.22a Złożona umiejętność walki grupowej. Kontroler wybiera przydział obrażeń."
    },
    "rampage": {
        "short": "Otrzymuje +N/+N za każdego stwora blokującego go powyżej pierwszego.",
        "long": "702.23a „Rampage N” aktywuje się, gdy stwór jest blokowany przez wiele stworów."
    },
    "cumulative upkeep": {
        "short": "Płać rosnący koszt w każdej turze lub poświęć permanent.",
        "long": "702.24a Połóż licznik wieku w każdym upkeepie, a następnie zapłać koszt za każdy licznik."
    },
    "flanking": {
        "short": "Gdy zostanie zablokowany przez stwora bez flanking, ten stwór otrzymuje -1/-1.",
        "long": "702.25a Flanking aktywuje się w kroku deklarowania blokerów."
    },
    "phasing": {
        "short": "Ten permanent pojawia się i znika z istnienia w każdej turze.",
        "long": "702.26a Permanent wyfazowany jest traktowany tak, jakby nie istniał."
    },
    "buyback": {
        "short": "Zapłać dodatkowy koszt, aby zwrócić czar na rękę po jego rozstrzygnięciu.",
        "long": "702.27a Buyback pozwala na ponowne użycie czaru, jeśli zapłacisz dodatkowy koszt."
    },
    "shadow": {
        "short": "Może blokować lub być blokowany tylko przez stwory z shadow.",
        "long": "702.28a Umiejętność unikowa ograniczająca blokerów i blokowanie."
    },
    "cycling": {
        "short": "Odrzuć tę kartę i zapłać koszt, aby dobrać kartę.",
        "long": "702.29a Umiejętność aktywowana z ręki. Zawiera warianty takie jak typecycling."
    },
    "echo": {
        "short": "Zapłać koszt podczas następnego upkeepu lub go poświęć.",
        "long": "702.30a Umiejętność wyzwalana dla permanentów wprowadzonych od ostatniego upkeepu."
    },
    "horsemanship": {
        "short": "Nie może być blokowany, chyba że przez stwory z horsemanship.",
        "long": "702.31a Umiejętność unikowa podobna do latania, ale specyficzna dla P3K."
    },
    "fading": {
        "short": "Wchodzi z licznikami; poświęć, gdy nie możesz usunąć licznika.",
        "long": "702.32a Ograniczony czas przebywania na polu bitwy przy użyciu liczników fade."
    },
    "kicker": {
        "short": "Zapłać opcjonalny dodatkowy koszt dla bonusowego efektu.",
        "long": "702.33a Koszty kickera są płacone podczas rzucania czaru."
    },
    "flashback": {
        "short": "Możesz rzucić tę kartę ze swojego cmentarza, a następnie ją wygnać.",
        "long": "702.34a Alternatywny koszt rzucenia czaru natychmiastowego lub czaru z cmentarza."
    },
    "madness": {
        "short": "Rzuć tę kartę, gdy ją odrzucasz, za jej koszt madness.",
        "long": "702.35a Umiejętność wyzwalana podczas odrzucania karty."
    },
    "fear": {
        "short": "Nie może być blokowany, chyba że przez stwory-artefakty i/lub czarne stwory.",
        "long": "702.36a Umiejętność unikowa zastąpiona przez intimidate i menace."
    },
    "morph": {
        "short": "Rzuć zakryte jako 2/2 za {3}. Odkryj za koszt morph.",
        "long": "702.37a Zakryte stwory nie mają nazwy ani typów. Obejmuje megamorph."
    },
    "amplify": {
        "short": "Wchodzi z licznikami za każdą ujawnioną z ręki kartę tego samego typu.",
        "long": "702.38a „Amplify N” kładzie liczniki +1/+1 przy wejściu."
    },
    "provoke": {
        "short": "Gdy atakuje, możesz zmusić stwora do zablokowania go.",
        "long": "702.39a Umiejętność wyzwalana, która wymusza blok i odtapowuje cel."
    },
    "storm": {
        "short": "Skopiuj to za każdy czar rzucony przed nim w tej turze.",
        "long": "702.40a Kopie są umieszczane na stosie za każdy poprzedni czar."
    },
    "affinity": {
        "short": "Kosztuje {1} mniej za każdy [typ], który kontrolujesz.",
        "long": "702.41a Statyczna umiejętność redukcji kosztów (np. Affinity for artifacts)."
    },
    "entwine": {
        "short": "Zapłać dodatkowy koszt, aby wybrać wszystkie tryby czaru.",
        "long": "702.42a Wybierz wszystkie tryby zamiast tylko jednego."
    },
    "modular": {
        "short": "Wchodzi z N licznikami; przenosi je na stwora-artefakt, gdy zginie.",
        "long": "702.43a Statyczna i wyzwalana umiejętność dla stworów-artefaktów."
    },
    "sunburst": {
        "short": "Wchodzi z licznikami za każdy kolor many wydany na niego.",
        "long": "702.44a Używa liczników +1/+1 dla stworów, liczników ładunku w przeciwnym razie."
    },
    "bushido": {
        "short": "Otrzymuje +N/+N, gdy blokuje lub staje się blokowany.",
        "long": "702.45a „Bushido N” wyzwala się podczas walki."
    },
    "soulshift": {
        "short": "Gdy zginie, zwróć kartę Ducha o MV N lub mniej na rękę.",
        "long": "702.46a Umiejętność wyzwalana do odzyskiwania kart Duchów."
    },
    "splice": {
        "short": "Dodaj efekt tej karty do innego czaru, płacąc jej koszt.",
        "long": "702.47a Ujawnij przy rzucaniu pasującego czaru, aby dodać tekst i koszt."
    },
    "offering": {
        "short": "Poświęć [typ], aby rzucić z szybkością natychmiastową i redukcją kosztów.",
        "long": "702.48a Zredukowany koszt i flash jako dodatkowa opcja."
    },
    "ninjutsu": {
        "short": "Wymień nie-zablokowanego stwora na tę kartę z ręki.",
        "long": "702.49a Umiejętność aktywowana umożliwiająca wprowadzenie ninja do walki."
    },
    "epic": {
        "short": "Nie możesz rzucać czarów, ale otrzymujesz kopię tego w każdej turze.",
        "long": "702.50a Wysokiego ryzyka, wysokiej nagrody umiejętność czaru natychmiastowego/głównego."
    },
    "convoke": {
        "short": "Twoje stwory mogą pomóc w zapłaceniu kosztu tego czaru.",
        "long": "702.51a Tapnij stwory, aby zapłacić {1} lub jedną manę ich koloru."
    },
    "dredge": {
        "short": "Zwróć to na rękę z cmentarza, mieląc N kart zamiast dobierania.",
        "long": "702.52a Efekt zastępczy dobierania kart, gdy karta jest na cmentarzu."
    },
    "transmute": {
        "short": "Odrzuć to, aby przeszukać bibliotekę w poszukiwaniu karty o tej samej wartości many.",
        "long": "702.53a Umiejętność aktywowana z ręki. Przeszukaj bibliotekę i potasuj ją."
    },
    "bloodthirst": {
        "short": "Wchodzi z N licznikami, jeśli przeciwnik otrzymał obrażenia w tej turze.",
        "long": "702.54a Umiejętność statyczna sprawdzająca wcześniejsze obrażenia."
    },
    "haunt": {
        "short": "Gdy to zginie lub zostanie rozstrzygnięte, „nawiedza” stwora dla późniejszych wyzwalaczy.",
        "long": "702.55a Wygnaj nawiedzając stwora; wyzwala się, gdy ten stwór zginie."
    },
    "replicate": {
        "short": "Zapłać koszt dowolną liczbę razy, aby skopiować czar.",
        "long": "702.56a Dodatkowy koszt pozwalający na stworzenie wielu kopii."
    },
    "forecast": {
        "short": "Ujawnij z ręki podczas upkeepu, aby aktywować specjalny efekt.",
        "long": "702.57a Umiejętność aktywowana ograniczona do upkeepu i ręki."
    },
    "graft": {
        "short": "Wchodzi z licznikami; może przenosić je na stwory, gdy wchodzą na pole bitwy.",
        "long": "702.58a Statyczna i wyzwalana umiejętność dotycząca liczników +1/+1."
    },
    "recover": {
        "short": "Gdy stwór zginie, zapłać koszt, aby zwrócić to z cmentarza.",
        "long": "702.59a Umiejętność wyzwalana z cmentarza; wygnaj, jeśli nie zapłacono."
    },
    "ripple": {
        "short": "Ujawnij N górnych kart: rzuć dowolną o tej samej nazwie za darmo.",
        "long": "702.60a Umiejętność wyzwalana podczas sprawdzania wierzchu biblioteki."
    },
    "split second": {
        "short": "Gracze nie mogą rzucać czarów ani aktywować umiejętności (poza maną), gdy to jest na stosie.",
        "long": "702.61a Zatrzymuje stos do momentu rozstrzygnięcia czaru."
    },
    "suspend": {
        "short": "Wygnaj z licznikami; rzuć, gdy ostatni licznik zostanie usunięty.",
        "long": "702.62a Zapłać inny koszt, aby rzucić czar później."
    },
    "vanishing": {
        "short": "Ograniczony czas na polu bitwy; poświęć, gdy zabraknie liczników.",
        "long": "702.63a Używa liczników czasu w każdym upkeepie."
    },
    "absorb": {
        "short": "Zapobiegaj N obrażeniom za każdym razem, gdy to otrzymuje obrażenia.",
        "long": "702.64a „Absorb N” redukuje otrzymywane obrażenia."
    },
    "aura swap": {
        "short": "Wymień tę Aurę na Aurę z ręki.",
        "long": "702.65a Umiejętność aktywowana dla efektywnej wymiany Aur."
    },
    "delve": {
        "short": "Wygnaj karty z cmentarza, aby pomóc w zapłaceniu za ten czar.",
        "long": "702.66a Każda wygnana karta płaci za {1}."
    },
    "fortify": {
        "short": "Przyłącz to do lądu, który kontrolujesz. Aktywuj tylko jako sorcery.",
        "long": "702.67a Podobne do equip, ale dla lądów i Fortyfikacji."
    },
    "frenzy": {
        "short": "Otrzymuje +N/+0, jeśli atakuje i nie zostanie zablokowany.",
        "long": "702.68a Umiejętność wyzwalana, gdy nie zadeklarowano blokerów."
    },
    "gravestorm": {
        "short": "Skopiuj to za każdy permanent umieszczony na cmentarzu w tej turze.",
        "long": "702.69a Wariant storm oparty na śmierciach/zniszczeniach."
    },
    "poisonous": {
        "short": "Zadaje liczniki trucizny, gdy zada obrażenia walki graczowi.",
        "long": "702.70a „Poisonous N” przyznaje N liczników trucizny."
    },
    "transfigure": {
        "short": "Poświęć to, aby przeszukać bibliotekę w poszukiwaniu stwora o tym samym koszcie many.",
        "long": "702.71a Podobne do transmute, ale z pola bitwy."
    },
    "champion": {
        "short": "Wygnaj inny permanent, aby zachować ten; zwróć go, gdy ten opuści pole bitwy.",
        "long": "702.72a Powiązane umiejętności wyzwalane do ochrony komponentów."
    },
    "changeling": {
        "short": "Ta karta ma wszystkie typy stworów w każdym momencie.",
        "long": "702.73a CDA działająca we wszystkich strefach."
    },
    "evoke": {
        "short": "Rzuć za niższy koszt, ale zostanie poświęcony po wejściu.",
        "long": "702.74a Alternatywny koszt pozwalający tanio uzyskać efekt wejścia."
    },
    "hideaway": {
        "short": "Podglądnij N górnych kart: wygnaj jedną zakrytą, aby rzucić ją później.",
        "long": "702.75a Wchodzi tapnięte. Zwykle powiązane z warunkiem rzucenia."
    },
    "prowl": {
        "short": "Alternatywny koszt, jeśli stwór o wspólnym typie zadał obrażenia walki.",
        "long": "702.76a Alternatywny koszt rzucania o tematyce łotrzykowskiej."
    },
    "reinforce": {
        "short": "Odrzuć to, aby położyć N liczników +1/+1 na stworze.",
        "long": "702.77a Umiejętność aktywowana z ręki."
    },
    "conspire": {
        "short": "Tapnij dwa stwory o wspólnym kolorze, aby skopiować czar.",
        "long": "702.78a Dodatkowy koszt umożliwiający powielenie efektu."
    },
    "persist": {
        "short": "Gdy zginie, jeśli nie ma liczników -1/-1, wróć z licznikiem -1/-1.",
        "long": "702.79a Umiejętność wyzwalana pozwalająca przetrwać jedną śmierć."
    },
    "wither": {
        "short": "Zadaje obrażenia stworom w postaci liczników -1/-1.",
        "long": "702.80a Modyfikuje sposób zadawania obrażeń stworom."
    },
    "retrace": {
        "short": "Rzuć to z cmentarza, odrzucając kartę lądu.",
        "long": "702.81a Możliwość wielokrotnego rzucania czaru z cmentarza."
    },
    "devour": {
        "short": "Poświęć stwory przy wejściu, aby otrzymać liczniki +1/+1.",
        "long": "702.82a „Devour N” mnoży liczniki przez liczbę poświęceń."
    },
    "exalted": {
        "short": "Stwór atakujący samotnie otrzymuje +1/+1 do końca tury.",
        "long": "702.83a Umiejętność wyzwalana przy ataku dokładnie jednym stworem."
    },
    "unearth": {
        "short": "Wróć to z cmentarza z haste; wygnaj na końcu tury.",
        "long": "702.84a Efekt „ostatniej szansy” dla kart stworów."
    },
    "cascade": {
        "short": "Wygnaj karty z wierzchu do tańszego czaru; rzuć go za darmo.",
        "long": "702.85a Potężna umiejętność rzucania łańcuchowego."
    },
    "annihilator": {
        "short": "Gdy atakuje, broniący się gracz poświęca N permanentów.",
        "long": "702.86a „Annihilator N” wyzwala się przy deklaracji ataku."
    },
    "level up": {
        "short": "Zapłać koszt, aby położyć liczniki poziomu dla nowych umiejętności.",
        "long": "702.87a Umiejętność aktywowana dla kart levelerów."
    },
    "rebound": {
        "short": "Jeśli rzucony z ręki, wygnaj go i rzuć ponownie podczas następnego upkeepu.",
        "long": "702.88a Uzyskaj drugie użycie czaru natychmiastowego lub głównego."
    },
    "umbra armor": {
        "short": "Jeśli zaczarowany permanent miałby zostać zniszczony, zniszcz tę Aurę zamiast niego.",
        "long": "702.89a Dawniej Totem Armor. Chroni zaczarowanego stwora."
    },
    "infect": {
        "short": "Zadaje obrażenia jako liczniki -1/-1 stworom i truciznę graczom.",
        "long": "702.90a Łączy mechaniki wither i poisonous."
    },
    "battle cry": {
        "short": "Gdy atakuje, inne atakujące stwory otrzymują +1/+0.",
        "long": "702.91a Wzmacnia resztę twoich sił atakujących."
    },
    "living weapon": {
        "short": "Wchodzi z tokenem Zarodka 0/0 i przyłącza się do niego.",
        "long": "702.92a Ekwipunek, który przynosi własnego stwora."
    },
    "undying": {
        "short": "Gdy zginie, jeśli nie ma liczników +1/+1, wróć z licznikiem +1/+1.",
        "long": "702.93a Umiejętność wyzwalana jak persist, ale z licznikami +1/+1."
    },
    "miracle": {
        "short": "Rzuć za mniej, jeśli to pierwsza karta dobrana w tej turze.",
        "long": "702.94a Wyzwala się w momencie dobrania karty."
    },
    "soulbond": {
        "short": "Połącz tego stwora z innym, aby dzielić umiejętności podczas połączenia.",
        "long": "702.95a Połącz, gdy którykolwiek wchodzi, jeśli kontrolujesz oba i są wolne."
    },
    "overload": {
        "short": "Zmień „cel” na „każdy” w tekście czaru, płacąc więcej.",
        "long": "702.96a Alternatywny koszt czyniący czar globalnym."
    },
    "scavenge": {
        "short": "Wygnaj z cmentarza, aby położyć liczniki +1/+1 na stworze.",
        "long": "702.97a Połóż liczniki równe sile; aktywuj jako sorcery."
    },
    "unleash": {
        "short": "Może wejść z licznikiem +1/+1; nie może blokować, jeśli go ma.",
        "long": "702.98a Stały wybór między większą siłą a obroną."
    },
    "cipher": {
        "short": "Wygnaj na stwoże; gdy zada obrażenia, rzuć kopię tego czaru.",
        "long": "702.99a Kodowanie czaru na stwoże dla wielokrotnego użytku."
    },
    "evolve": {
        "short": "Otrzymuje licznik +1/+1, gdy większy stwór wchodzi pod twoją kontrolę.",
        "long": "702.100a Sprawdza siłę lub wytrzymałość wchodzącego stwora względem własnej."
    },
    "extort": {
        "short": "Zapłać {W/B} przy rzucaniu czaru, aby wyssać 1 życie od każdego przeciwnika.",
        "long": "702.101a Umiejętność wyzwalana wysysająca życie."
    },
    "fuse": {
        "short": "Rzuć obie połówki tej rozdzielonej karty ze swojej ręki.",
        "long": "702.102a Specjalna umiejętność statyczna dla kart rozdzielonych."
    },
    "bestow": {
        "short": "Rzuć jako Aurę przyłączoną do stwora lub jako stwora.",
        "long": "702.103a Mechanika stwora-zaklęcia."
    },
    "tribute": {
        "short": "Przeciwnik wybiera: daj mu liczniki lub wywołaj efekt.",
        "long": "702.104a Wybór efektu zastępczego dla przeciwników."
    },
    "dethrone": {
        "short": "Otrzymuje licznik +1/+1, gdy atakuje gracza z największą ilością życia.",
        "long": "702.105a Zachęca do atakowania lidera."
    },
    "hidden agenda": {
        "short": "Potajemnie nazwij kartę dla korzyści spisku.",
        "long": "702.106a Mechanika draftowania Conspiracy."
    },
    "outlast": {
        "short": "{T}: Połóż licznik +1/+1 na tym. Aktywuj tylko jako sorcery.",
        "long": "702.107a Powolny sposób na wzrost stworów."
    },
    "prowess": {
        "short": "Otrzymuje +1/+1, gdy rzucasz czar niebędący stworem.",
        "long": "702.108a Wyzwalane wzmocnienie za rzucanie czarów innych niż stwory."
    },
    "dash": {
        "short": "Rzuć za mniej z haste; wraca na rękę na końcu tury.",
        "long": "702.109a Szybki alternatywny koszt rzucania."
    },
    "exploit": {
        "short": "Możesz poświęcić stwora dla bonusu, gdy to wchodzi na pole bitwy.",
        "long": "702.110a Umiejętność wyzwalana pozwalająca na poświęcenie."
    },
    "menace": {
        "short": "Nie może być blokowany, chyba że przez dwa lub więcej stworów.",
        "long": "702.111a Umiejętność unikowa wymagająca wielu blokerów."
    },
    "renown": {
        "short": "Otrzymuje liczniki i staje się „wsławiony” po zadaniu obrażeń graczowi.",
        "long": "702.112a Jednorazowa nagroda za trafienie gracza."
    },
    "awaken": {
        "short": "Rzuć i zamień ląd w żywiołaka z licznikami.",
        "long": "702.113a Czar z opcjonalnym kosztem animacji lądu."
    },
    "devoid": {
        "short": "Ta karta nie ma koloru.",
        "long": "702.114a CDA czyniąca obiekt bezbarwnym."
    },
    "ingest": {
        "short": "Wygnaj górną kartę biblioteki, gdy zada obrażenia graczowi.",
        "long": "702.115a Przygotowuje karty dla umiejętności Procesora."
    },
    "myriad": {
        "short": "Gdy atakuje, stwórz atakujące kopie dla każdego innego przeciwnika.",
        "long": "702.116a Umiejętność walki wieloosobowej."
    },
    "surge": {
        "short": "Tańszy koszt, jeśli ty lub kolega z drużyny rzuciliście inny czar w tej turze.",
        "long": "702.117a Koszt rzucania zorientowany na współpracę zespołową."
    },
    "skulk": {
        "short": "Nie może być blokowany przez stwory o większej sile.",
        "long": "702.118a Unik dla małych stworów."
    },
    "emerge": {
        "short": "Rzuć, poświęcając stwora; zredukuj koszt o jego wartość many.",
        "long": "702.119a Transformacyjny alternatywny koszt rzucania."
    },
    "escalate": {
        "short": "Zapłać dodatkowy koszt za każdy wybrany tryb powyżej pierwszego.",
        "long": "702.120a Czar modalny z kosztami za dodatkowe tryby."
    },
    "melee": {
        "short": "Otrzymuje +1/+1 za każdego przeciwnika, którego zaatakowałeś w tej walce.",
        "long": "702.121a Wzmocnienie oparte na szerokości ataku."
    },
    "crew": {
        "short": "Tapnij stwory, aby zamienić ten Pojazd w stwora-artefakt.",
        "long": "702.122a Umiejętność aktywowana do animowania Pojazdów."
    },
    "fabricate": {
        "short": "Wybierz położenie liczników +1/+1 na tym lub stworzenie tokenów Servo 1/1.",
        "long": "702.123a Wybór typu modularnego przy wejściu."
    },
    "partner": {
        "short": "Pozwala dwóm legendarnym kartom służyć jako wspólny dowódca.",
        "long": "702.124a Obejmuje warianty takie jak Partner z [nazwa], Wybierz tło itp."
    },
    "undaunted": {
        "short": "Kosztuje {1} mniej za każdego twojego przeciwnika.",
        "long": "702.125a Redukcja kosztów w grach wieloosobowych."
    },
    "improvise": {
        "short": "Twoje artefakty mogą pomóc w zapłaceniu kosztu tego czaru.",
        "long": "702.126a Tapnij artefakty, aby zapłacić za manę ogólną."
    },
    "aftermath": {
        "short": "Rzuć drugą połowę tej rozdzielonej karty ze swojego cmentarza.",
        "long": "702.127a Wygnaj ją po rzuceniu z cmentarza."
    },
    "embalm": {
        "short": "Wygnaj z cmentarza, aby stworzyć token będący kopią Zombie.",
        "long": "702.128a Stwórz biały token Zombie z cmentarza."
    },
    "eternalize": {
        "short": "Wygnaj z cmentarza, aby stworzyć kopię czarnego Zombie 4/4.",
        "long": "702.129a Podobne do embalm, ale czyni token 4/4 i czarnym."
    },
    "afflict": {
        "short": "Broniący się gracz traci życie, jeśli ten stwór zostanie zablokowany.",
        "long": "702.130a Gwarantowane obrażenia nawet przy zablokowaniu."
    },
    "ascend": {
        "short": "Jeśli masz 10 permanentów, otrzymujesz błogosławieństwo miasta na resztę gry.",
        "long": "702.131a Umiejętność statyczna lub czaru dla stałych korzyści."
    },
    "assist": {
        "short": "Inny gracz może pomóc w zapłaceniu ogólnego kosztu tego czaru.",
        "long": "702.132a Polityczna umiejętność dzielenia kosztów."
    },
    "jump-start": {
        "short": "Rzuć z cmentarza, odrzucając kartę, a następnie wygnaj go.",
        "long": "702.133a Możliwość ponownego rzucenia instanta lub sorcery."
    },
    "mentor": {
        "short": "Podczas ataku połóż licznik +1/+1 na mniejszym atakującym.",
        "long": "702.134a Wzmacnia słabsze stwory w ataku."
    },
    "afterlife": {
        "short": "Gdy to zginie, stwórz N tokenów Ducha 1/1 (czarno-białe).",
        "long": "702.135a Wyzwalacz śmierci dla latających tokenów."
    },
    "riot": {
        "short": "Wchodzi z licznikiem +1/+1 lub z haste.",
        "long": "702.136a Wybór szybkości lub wielkości przy wejściu."
    },
    "spectacle": {
        "short": "Alternatywny koszt, jeśli przeciwnik stracił życie w tej turze.",
        "long": "702.137a Zniżka na rzucanie o tematyce agresywnej."
    },
    "escape": {
        "short": "Rzuć z cmentarza, płacąc manę i wygnać karty.",
        "long": "702.138a Zagrożenie wielokrotnego użytku z cmentarza."
    },
    "companion": {
        "short": "Zacznij z tym poza grą; zapłać {3}, aby wziąć na rękę, jeśli talia pasuje.",
        "long": "702.139a Specjalna mechanika budowania talii poza grą."
    },
    "mutate": {
        "short": "Połącz z nieludzkim stworem, aby zyskać wspólne umiejętności.",
        "long": "702.140a Układaj karty, aby stworzyć złożony permanent."
    },
    "encore": {
        "short": "Wygnaj z cmentarza, aby zaatakować każdego przeciwnika kopiami.",
        "long": "702.141a Tymczasowy wymiatacz kopii z cmentarza."
    },
    "boast": {
        "short": "Aktywuj raz na turę tylko wtedy, gdy ten stwór zaatakował.",
        "long": "702.142a Agresywna, sytuacyjna umiejętność aktywowana."
    },
    "foretell": {
        "short": "Wygnaj z ręki zakryte za {2}, a następnie rzuć za mniej później.",
        "long": "702.143a Rozłóż koszt czaru na dwie tury."
    },
    "demonstrate": {
        "short": "Skopiuj ten czar przy rzucaniu; jeśli to zrobisz, przeciwnik też rzuca kopię.",
        "long": "702.144a Polityczna umiejętność kopiowania czarów."
    },
    "daybound": {
        "short": "Jeśli jest noc, to wchodzi przetransformowane. Przechodzi w noc.",
        "long": "702.145b Mechanika cyklu Dzień/Noc dla permanentów."
    },
    "nightbound": {
        "short": "Jeśli jest dzień, to transformuje się z powrotem na stronę dnia.",
        "long": "702.145e Powrót, gdy zaczyna się dzień."
    },
    "disturb": {
        "short": "Rzuć z cmentarza przetransformowane za jego koszt disturb.",
        "long": "702.146a Zwykle zwraca stwora jako Aurę Ducha."
    },
    "decayed": {
        "short": "Nie może blokować; poświęć go, gdy zaatakuje.",
        "long": "702.147a Słowo kluczowe dla jednorazowych tokenów."
    },
    "cleave": {
        "short": "Rzuć za mniej, aby zignorować tekst w nawiasach kwadratowych w czarze.",
        "long": "702.148a Alternatywny koszt usuwający fragmenty tekstu."
    },
    "training": {
        "short": "Otrzymuje licznik +1/+1, gdy atakuje z większym stworem.",
        "long": "702.149a Odwrotność mentora; mały stwór rośnie."
    },
    "compleated": {
        "short": "Zredukowana lojalność, jeśli zapłacono życie za manę Phyrexian.",
        "long": "702.150a Wady płacenia życiem za planeswalkerów."
    },
    "reconfigure": {
        "short": "Przyłącz do stwora lub odłącz, aby ponownie stać się stworem.",
        "long": "702.151a Stwory-ekwipunki, które mogą być albo ekwipunkiem, albo stworem."
    },
    "blitz": {
        "short": "Rzuć za mniej z haste; poświęć dla dobrania karty, gdy zginie.",
        "long": "702.152a Szybki, samobójczy koszt rzucania."
    },
    "casualty": {
        "short": "Poświęć stwora, aby skopiować ten czar.",
        "long": "702.153a „Casualty N” wymaga poświęcenia stwora o sile N lub większej."
    },
    "enlist": {
        "short": "Tapnij innego stwora, aby dodać jego siłę do tego atakującego.",
        "long": "702.154a Tapuje nieatakującego stwora dla wzmocnienia."
    },
    "read ahead": {
        "short": "Wejdź z licznikami, aby zacząć od dowolnego rozdziału.",
        "long": "702.155a Pomiń wczesne kroki Sagi, wybierając liczbę liczników wiedzy."
    },
    "ravenous": {
        "short": "Wchodzi z X licznikami; dobierz kartę, jeśli X wynosi 5 lub więcej.",
        "long": "702.156a Mechanika Tyranidów dla dużych czarów z X w koszcie."
    },
    "squad": {
        "short": "Zapłać dodatkowy koszt, aby stworzyć wiele tokenów-kopii.",
        "long": "702.157a Zapłać koszt N razy, aby otrzymać N dodatkowych tokenów."
    },
    "space sculptor": {
        "short": "Przypisz segmenty (sektory) do pola bitwy.",
        "long": "702.158a Mechanika Un-set dzieląca pole bitwy."
    },
    "visit": {
        "short": "Wywołaj efekt, gdy wyrzucisz odpowiedni wynik dla tej Atrakcji.",
        "long": "702.159a Wyzwala się, gdy wypadnie jej numer."
    },
    "prototype": {
        "short": "Rzuć z mniejszą siłą/wytrzymałością i mniejszym kosztem many.",
        "long": "702.160a Alternatywna tańsza wersja dużych artefaktów."
    },
    "living metal": {
        "short": "Staje się stworem tylko podczas twojej tury.",
        "long": "702.161a Pojazd, który animuje się automatycznie."
    },
    "more than meets the eye": {
        "short": "Rzuć w formie skonwertowanej (mechanika Transformers).",
        "long": "702.162a Alternatywny koszt wejścia w formie skonwertowanej."
    },
    "for mirrodin!": {
        "short": "Stwórz Rebelianta 2/2 i przyłącz do niego ten ekwipunek.",
        "long": "702.163a Ekwipunek, który sam tworzy i ekwipuje swojego stwora."
    },
    "toxic": {
        "short": "Zadaje liczniki trucizny oprócz zwykłych obrażeń.",
        "long": "702.164a „Toxic N” zadaje N liczników trucizny przy trafieniu."
    },
    "backup": {
        "short": "Przy wejściu daj liczniki i swoje umiejętności innemu stworowi.",
        "long": "702.165a Przenoszalne tymczasowe umiejętności."
    },
    "bargain": {
        "short": "Poświęć artefakt, zaklęcie lub token dla bonusu.",
        "long": "702.166a Opcjonalne poświęcenie dla wzmocnienia czaru."
    },
    "craft": {
        "short": "Wygnaj to i materiały, aby przywrócić przetransformowane.",
        "long": "702.167a Koszt aktywacji transformacji z użyciem materiałów."
    },
    "disguise": {
        "short": "Rzuć zakryte jako 2/2 z ward {2} za {3}.",
        "long": "702.168a Wariant morph z ochroną (ward)."
    },
    "solved": {
        "short": "Korzyść aktywna tak długo, jak ta Sprawa jest rozwiązana.",
        "long": "702.169a Warunkowe umiejętności dla kart Spraw (Case)."
    },
    "plot": {
        "short": "Wygnaj z ręki; rzuć za darmo w późniejszej turze.",
        "long": "702.170a Opóźnione rzucanie z wygnania."
    },
    "saddle": {
        "short": "Tapnij stwory, aby dosiąść i zyskać dodatkowe umiejętności.",
        "long": "702.171a Mechanika wierzchowca dla specjalnych korzyści."
    },
    "spree": {
        "short": "Wybór trybów z dodatkowymi kosztami za każdy tryb.",
        "long": "702.172a Skumulowany koszt czaru modalnego."
    },
    "freerunning": {
        "short": "Tańszy koszt, jeśli zadałeś obrażenia Asasynem lub Dowódcą.",
        "long": "702.173a Tematyczny koszt rzucania z Assassin's Creed."
    },
    "gift": {
        "short": "Zaoferuj korzyść przeciwnikowi w zamian za lepszy czar.",
        "long": "702.174a Opcjonalna korzyść dla przeciwnika (podobna do kickera)."
    },
    "offspring": {
        "short": "Zapłać więcej, aby stworzyć token-kopię 1/1 przy wejściu.",
        "long": "702.175a Małe kopie twoich stworów."
    },
    "impending": {
        "short": "Rzuć za mniej jako nie-stwór z licznikami czasu.",
        "long": "702.176a Zaklęcie, które z czasem staje się stworem."
    },
    "exhaust": {
        "short": "Umiejętność aktywowana, której można użyć tylko raz.",
        "long": "702.177a Jednorazowa umiejętność aktywowana."
    },
    "max speed": {
        "short": "Korzyść aktywna, jeśli twoja szybkość wynosi 4.",
        "long": "702.178a Mechanika progu oparta na szybkości."
    },
    "start your engines!": {
        "short": "Włącz szybkość na resztę gry.",
        "long": "702.179a Mechanika śledzenia szybkości gracza."
    },
    "harmonize": {
        "short": "Rzuć z cmentarza, tapując stwora.",
        "long": "702.180a Alternatywny koszt rzucania z cmentarza."
    },
    "mobilize": {
        "short": "Stwórz tapnięte i atakujące tokeny, gdy to atakuje.",
        "long": "702.181a Generowanie tokenów wyzwalane atakiem."
    },
    "job select": {
        "short": "Stwórz token i przyłącz do niego ten ekwipunek.",
        "long": "702.182a Ekwipunek automatycznie przyłączający się przy wejściu."
    },
    "tiered": {
        "short": "Wybór trybów z różnymi dodatkowymi kosztami.",
        "long": "702.183a Czar modalny z progresją."
    },
    "station": {
        "short": "Tapnij stwory, aby dodać liczniki ładunku.",
        "long": "702.184a Mechanika ładowania przy użyciu innych stworów."
    },
    "warp": {
        "short": "Rzuć za koszt z ręki; wygnaj i przywróć później.",
        "long": "702.185a Mechanika tymczasowego wejścia."
    },
    "infinity": {
        "short": "Symbol nieskończoności umożliwiający potężne umiejętności statyczne.",
        "long": "702.186a Mechanika nieskończonego skalowania (Un-set)."
    },
    "mayhem": {
        "short": "Rzuć z cmentarza, jeśli odrzuciłeś to w tej turze.",
        "long": "702.187a Bonus za odrzucanie/cycling."
    },
    "web-slinging": {
        "short": "Rzuć, zwracając tapniętego stwora na rękę.",
        "long": "702.188a Alternatywny koszt rzucania oparty na powrocie na rękę."
    },
    "firebending": {
        "short": "Dodaj manę, gdy to atakuje; mana nie znika.",
        "long": "702.189a Stały przypływ many wyzwalany atakiem."
    },
    "sneak": {
        "short": "Rzuć z ręki podczas walki za tańszy koszt.",
        "long": "702.190a Wariant ninjutsu dla natychmiastowego wejścia do walki."
    }
};

// Initialize KEYWORDS_DATA_PL for faster lookup
function initKeywordsDataPL() {
    for (const key in KEYWORDS_RAW_PL) {
        KEYWORDS_DATA_PL[key.toLowerCase()] = KEYWORDS_RAW_PL[key];
    }
}

// Auto-init on script load
if (typeof window !== 'undefined') {
    initKeywordsDataPL();
}
