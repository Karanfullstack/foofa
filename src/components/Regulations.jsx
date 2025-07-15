import React from "react";
import logo from "../assets/App-Icon.svg";

const Regulamin = () => {
    return (
        <div className="bg-black text-white min-h-screen px-4 py-8 font-hubspot">
            <div className="max-w-5xl mx-auto">
                {/* Header section with logo and title */}
                <div className="text-center mb-8">
                    <img src={logo} alt="Foova Logo" className="mx-auto w-40" />
                    <h1 className="text-3xl mt-4 font-bold">REGULAMIN GRY INTERNETOWEJ</h1>
                    <h2 className="text-2xl mt-2 font-semibold">FOOVA FAN CENTER</h2>
                    <p className="text-sm text-gray-400 mt-2">
                        Data wprowadzenia aktualnego regulaminu: 15.07.2025
                    </p>
                </div>

                {/* Main content area  */}
                <div className="space-y-6 text-base leading-relaxed whitespace-pre-wrap">
                    {/* WSTĘP section */}
                    <h3 className="text-xl font-semibold">WSTĘP</h3>
                    <p>
                        Niniejszy regulamin określa zasady uczestnictwa w grze internetowej „Foova
                        Fan Center” utrzymywanej, dostarczanej i obsługiwanej przez Foova Prosta
                        Spółka Akcyjna z siedzibą w Warszawie przy Alei „Solidarności” 68/121
                        (00-240 Warszawa), wpisanej do Krajowego Rejestru Sądowego przez Sąd
                        Rejonowy dla m.st. Warszawy w Warszawie, XII Wydział Gospodarczy KRS pod
                        numerem KRS: 0001138962, NIP: 5253024832, REGON: 540208461 (dalej „
                        Regulamin ”).
                    </p>
                    <p>
                        Regulamin niniejszy stanowi regulamin świadczenia usług drogą elektroniczną
                        w rozumieniu ustawy z dnia 18.07.2002 r. (dalej „ UŚUDE ”).
                    </p>

                    {/* DEFINICJE section */}
                    <h3 className="text-xl font-semibold">DEFINICJE</h3>
                    <p>Sformułowania użyte w niniejszym Regulaminie mają następujące znaczenie:</p>
                    <ul className="list-disc pl-6">
                        <li>
                            <strong className="text-blue-400">Gra</strong> – gra internetowa FOOVA
                            FAN CENTER, polegająca na analitycznym wyborze prawidłowego wyniku
                            (dokładnego wyniku meczu lub zwycięzcy lub też remisu meczu) prawdziwego
                            meczu piłki nożnej proponowanego do wyboru przez Organizatora i
                            wybranego przez Gracza oraz w wersji wyłącznie z użyciem Konta Premium,
                            udzielenia prawidłowych odpowiedzi na pytania przedstawione przez
                            Organizatora w trakcie prawdziwego meczu piłki nożnej, dostępna pod
                            adresem internetowym foova.org lub z wykorzystaniem aplikacji Foova Fan
                            Center którą dostarcza i obsługuje Organizator,
                        </li>
                        <li>
                            <strong className="text-blue-400">Gracz</strong> - osoba fizyczna, która
                            ukończyła 18 rok życia, posiadająca pełną zdolność do czynności
                            prawnych, która zarejestrowała Konto,
                        </li>
                        <li>
                            <strong className="text-blue-400">Konto</strong> - struktura
                            informatyczna w Grze dostarczana przez Organizatora, która pozwala
                            Graczowi na korzystanie z Gry,
                        </li>
                        <li>
                            <strong className="text-blue-400">Konto Premium</strong> - struktura
                            informatyczna w Grze dostarczana przez Organizatora, która pozwala
                            Graczowi na korzystanie z Gry w szerszym zakresie, aniżeli wyłącznie w
                            zakresie Konta, tj. w zakresie możliwości udzielenia prawidłowych
                            odpowiedzi na pytania przedstawione przez Organizatora w trakcie
                            prawdziwego meczu piłki nożnej, za opłatą dokonaną na rzecz
                            Organizatora; zakres uprawnień w ramach Konta Premium określa pkt V
                            Regulaminu,
                        </li>
                        <li>
                            <strong className="text-blue-400">Nagroda</strong> - świadczenie
                            rzeczowe, pieniężne lub niematerialne przyznawane Graczowi przez
                            Organizatora za zajęcie odpowiedniego miejsca, w wybranej klasyfikacji.
                            Nagroda jest przyznawana zgodnie z postanowieniami Regulaminu.
                        </li>
                        <li>
                            <strong className="text-blue-400">Organizator</strong> - Foova Prosta
                            Spółka Akcyjna z siedzibą w Warszawie przy Alei Solidarności 68/121
                            (00-240 Warszawa), wpisanej do Krajowego Rejestru Sądowego przez Sąd
                            Rejonowy dla m.st. Warszawy w Warszawie, XII Wydział Gospodarczy KRS pod
                            numerem KRS: 0001138962, NIP: 5253024832, REGON: 540208461,
                        </li>
                        <li>
                            <strong className="text-blue-400">Strona Internetowa, Aplikacja</strong>{" "}
                            – struktura informatyczna umożliwiająca Graczowi korzystanie z Gry,
                        </li>
                        <li>
                            <strong className="text-blue-400">Umowa o korzystanie z Gry</strong> –
                            umowa zawierana między Organizatorem a Graczem z chwilą założenia przez
                            Gracza Konta lub Konta Premium.
                        </li>
                    </ul>

                    {/* POSTANOWIENIA OGÓLNE section */}
                    <h3 className="text-xl font-semibold">POSTANOWIENIA OGÓLNE</h3>
                    <p>
                        Regulamin określa sposób korzystania z Gry przez Gracza, prawa i obowiązki
                        Gracza oraz Organizatora związane z korzystaniem z Gry, zasady płatności za
                        dodatkowe elementy w Grze, w tym za Konto Premium oraz zasady wyłączenia
                        odpowiedzialności Organizatora z tytułu korzystania przez Gracza z Gry.
                    </p>
                    <p>
                        Do korzystania z Gry konieczne jest spełnienie następujących warunków
                        technicznych przez komputer lub smartfon Gracza:
                    </p>
                    <ul className="list-disc pl-6">
                        <li>dostęp do Internetu,</li>
                        <li>posiadanie aktywnego adresu e-mail,</li>
                        <li>standardowy system operacyjny,</li>
                        <li>
                            standardowa przeglądarka internetowa z włączoną obsługą plików cookies
                            (Google Chrome, Mozilla Firefox, Microsoft Edge).
                        </li>
                    </ul>
                    <p>
                        Z uwagi na przygotowanie Gry wyłącznie w polskiej wersji językowej, Gra
                        adresowana jest do użytkowników polskojęzycznych.
                    </p>
                    <p>
                        Organizator oświadcza, że Gra nie jest: grą losową, loterią fantową,
                        zakładem wzajemnym, loterią promocyjną, jak również nie jest grą, w której
                        wynik jest zależny od przypadku w żadnej z form przewidzianych w ustawie z
                        dnia 19 listopada 2009 r. o grach hazardowych (tekst jedn. Dz. U. z 2022 r.,
                        poz. 888, z późn. zm.).
                    </p>
                    <p>
                        Organizator jest odpowiedzialny za przeprowadzenie Gry, udostępnianie Strony
                        Internetowej oraz Aplikacji, wyłonienie zwycięzców Gry, a także przekazanie
                        Nagród których jest fundatorem, na rzecz zwycięzców Gry.
                    </p>
                    <p>Fundatorem Nagród jest Organizator.</p>

                    {/* UCZESTNICTWO W GRZE section */}
                    <h3 className="text-xl font-semibold">UCZESTNICTWO W GRZE</h3>
                    <p>
                        W Grze mogą wziąć udział Gracze, którzy zarejestrowali się oraz posiadają
                        aktywne Konto na Stronie Internetowej lub Aplikacji.
                    </p>
                    <p>
                        Z udziału w Grze nie są wykluczeni pracownicy i współpracownicy Organizatora
                        a także członkowie ich rodzin, tj. małżonkowie, rodzice i rodzeństwo, lecz
                        osobom tym nie przysługuje prawo do Nagród, a ewentualne zajęcie przez nich
                        miejsc premiowanych Nagrodami, nie będzie miało wpływu na uzyskanie prawa do
                        Nagród dla innych Graczy.
                    </p>
                    <p>
                        W przypadku zajęcia miejsc premiowanych Nagrodami przez osoby, którym prawo
                        do Nagród nie przysługuje, Nagroda za zajęcie tego miejsca przysługuje
                        osobie następnej w kolejności.
                    </p>
                    <p>Warunkami niezbędnymi do wzięcia udziału w Grze są:</p>
                    <ul className="list-disc pl-6">
                        <li>
                            spełnienie warunków technicznych określonych w pkt III ust. 2
                            Regulaminu,
                        </li>
                        <li>
                            zarejestrowanie się na Stronie Internetowej lub Aplikacji i posiadanie
                            aktywnego Konta,
                        </li>
                        <li>zapoznanie się przez Gracza z Regulaminem i zaakceptowanie go.</li>
                    </ul>
                    <p>
                        Gracz może na swoim Koncie udostępnić fotografie lub grafiki w miejscu do
                        tego przeznaczonym (avatar Gracza – zdjęcie profilowe).
                    </p>
                    <p>Gracz udostępniając fotografie lub grafiki nie może:</p>
                    <ul className="list-disc pl-6">
                        <li>
                            podszywać się pod inną osobę ani podawać nieprecyzyjnych informacji,
                        </li>
                        <li>
                            postępować w sposób niezgodny z prawem, wprowadzający w błąd, oszukańczy
                            ani realizować nielegalnych bądź bezprawnych celów.
                        </li>
                        <li>
                            naruszać (ani pomagać innym osobom w naruszaniu czy zachęcać inne osoby
                            do naruszania) ani podejmować prób naruszania Regulaminu,
                        </li>
                        <li>
                            publikować prywatnych bądź poufnych informacji innej osoby bez jej zgody
                            ani podejmować żadnych działań naruszających prawa innej osoby, w tym
                            prawa własności intelektualnej (np. naruszenie prawa autorskiego,
                            naruszenie prawa do znaku towarowego, podróbki lub towary pirackie).
                        </li>
                    </ul>
                    <p>
                        Gracz w odniesieniu do fotografii lub grafik udziela Organizatorowi pozwoleń
                        wymaganych do tego, by udostępniać Grę, w tym udziela:
                    </p>
                    <ul className="list-disc pl-6">
                        <li>licencji na ich używanie,</li>
                        <li>
                            pozwolenia na wykorzystanie nazwy Gracza oraz jego zdjęcia profilowego.
                        </li>
                    </ul>
                    <p>
                        Dołączając do Gry, Gracz dodaje swój niepowtarzalny w Grze pseudonim oraz
                        datę urodzenia.
                    </p>
                    <p>
                        Gracz może podać swój numer telefonu. Podanie numeru telefonu umożliwia
                        Graczowi otrzymywanie powiadomień o wydarzeniach w Grze.
                    </p>
                    <p>
                        Dołączając do Gry, Gracz może wyrazić dobrowolną zgodę na otrzymywanie od
                        Organizatora – na dane kontaktowe podane w formularzu zgłoszeniowym do Gry -
                        informacji o nowych grach organizowanych przez Organizatora.
                    </p>
                    <p>
                        Gracz może wycofać udzieloną zgodę w każdym czasie, np. poprzez edycję
                        udzielonych zgód w ustawieniach swojego Konta na Stronie Internetowej lub
                        Aplikacji.
                    </p>
                    <p>
                        Zadaniem Gracza jest jednokrotny wybór na cały sezon rozgrywkowy, na
                        zasadach określonych poniżej w Regulaminie, ulubionego klubu występującego w
                        najwyższej klasie rozgrywkowej w Polsce w piłce nożnej w sezonie 2025/2026,
                        a następnie, na podstawie posiadanej wiedzy, przed rozpoczęciem meczu,
                        którego dotyczy wybór, wskazanie rozstrzygnięcia meczu (wygrana, remis albo
                        przegrana) albo też dokładnego wyniku meczu wszystkich klubów występujących
                        w najwyższej klasie rozgrywkowej w Polsce w piłce nożnej w sezonie
                        2025/2026.
                    </p>
                    <p>Zmiana klubu możliwa jest wyłącznie po zakończeniu sezonu rozgrywkowego.</p>
                    <p>
                        Gracz w swoim profilu użytkownika będzie mógł zapoznać się ze swoją historią
                        Gry, w tym będzie mógł zweryfikować swoje odpowiedzi.
                    </p>
                    <p>Gracz będzie mógł również zobaczyć swoje miejsce w klasyfikacji.</p>
                    <p>Gracz może przystąpić do Gry w każdym momencie trwania Gry.</p>

                    {/* UCZESTNICTWO W GRZE PREMIUM section */}
                    <h3 className="text-xl font-semibold">UCZESTNICTWO W GRZE PREMIUM</h3>
                    <p>
                        Zadaniem Gracza posiadającego Konto Premium jest wybór, na zasadach
                        określonych poniżej w Regulaminie, ulubionego zespołu występującego w
                        najwyższej klasie rozgrywkowej w Polsce w piłce nożnej w sezonie 2025/2026,.
                    </p>
                    <p>
                        Oprócz uprawnień, o których mowa w pkt IV powyżej, Gracz posiadający Konto
                        Premium na podstawie posiadanej wiedzy, przed rozpoczęciem meczu, którego
                        dotyczy wybór, będzie miał możliwość wskazania rozstrzygnięcia
                        poszczególnych zdarzeń w trakcie meczów w odniesieniu do wszystkich meczów
                        rozgrywanych w każdej kolejce rozgrywkowej sezonu 2025/2026, w najwyższej
                        klasie rozgrywkowej w Polsce w piłce nożnej oraz udzielenia odpowiedzi na
                        pytania w trakcie ww. meczów piłki nożnej. Liczba pytań zadawanych w trakcie
                        meczów piłki nożnej uzależniona jest od przebiegu prawdziwego meczu piłki
                        nożnej.
                    </p>
                    <p>
                        Pytania dot. poszczególnych zdarzeń w trakcie meczów zadawane są wyłącznie w
                        trakcie meczów i trwają przez ograniczony okres czasu wyznaczany przez
                        Organizatora.
                    </p>
                    <p>
                        Po upływie wyznaczonego czasu Gracz nie będzie miał możliwości udzielenia
                        odpowiedzi na zadane pytanie.
                    </p>
                    <p>
                        Organizator nie gwarantuje minimalnej, ani maksymalnej liczby pytań w
                        trakcie każdego meczu.
                    </p>
                    <p>
                        Gracz aby mógł udzielić odpowiedzi na zadane pytania w trakcie ww. meczów
                        piłki nożnej musi posiadać włączone powiadomienia lub obserwować ekran
                        meczowy Gry.
                    </p>
                    <p>
                        Do uzyskania dostępu do Konta Premium Gracz musi dokonać płatności na rzecz
                        Organizatora kwoty w wysokości, która zostanie wskazana na Stronie
                        Internetowej i Aplikacji.
                    </p>

                    {/* ZASADY DOKONYWANIA PŁATNOŚCI CELEM URUCHOMIENIA KONTA PREMIUM section */}
                    <h3 className="text-xl font-semibold">
                        ZASADY DOKONYWANIA PŁATNOŚCI CELEM URUCHOMIENIA KONTA PREMIUM
                    </h3>
                    <p>
                        Płatności w Grze będą przyjmowane i obsługiwane przez Stripe, Inc., Stripe
                        Payments Company, (dalej: „ Obsługujący Płatności ”), działającą w
                        porozumieniu z Organizatorem – za pośrednictwem serwisu foova.org
                    </p>
                    <p>
                        Płatności mogą dokonywać wyłącznie osoby uprawnione do posługiwania się
                        danym instrumentem, w oparciu o który następuje realizacja płatności, w
                        szczególności daną kartą płatniczą może posługiwać się wyłącznie jej
                        uprawniony posiadacz.
                    </p>
                    <p>
                        Wykryte przypadki nadużyć będą zgłaszane bezpośrednio do właściwych
                        wydziałów Policji.
                    </p>
                    <p>
                        Organizator udostępnia Graczom odpowiedni formularz transakcji. Dane z
                        formularza są automatycznie przekazywane do Obsługującego Płatności.
                    </p>
                    <p>
                        W celu dokonania płatności Gracz powinien potwierdzić dokonanie płatności na
                        stronie internetowej foova.org.
                    </p>
                    <p>
                        W przypadku dokonywania jakichkolwiek zmian w formularzu płatności
                        udostępnionym na tych stronach i automatycznie uzupełnionym przez foova.org
                        płatność może nie zostać zrealizowana.
                    </p>
                    <p>
                        Reklamacje dotyczące płatności składane przez Graczy powinny być kierowane
                        bezpośrednio do Organizatora.
                    </p>
                    <p>
                        Reklamacje Organizator rozpatrzy w pierwszej kolejności we własnym zakresie.
                        W przypadku ustalenia, że przyczyny reklamacji nie leżą po Organizatora, ten
                        przekaże reklamację do Obsługującego Płatności.
                    </p>

                    {/* ZASADY GRY section */}
                    <h3 className="text-xl font-semibold">ZASADY GRY</h3>
                    <p>Za poprawne wskazanie dokładnego wyniku meczu Gracz otrzyma 10 punktów.</p>
                    <p>
                        Za poprawne wskazanie rozstrzygnięcia meczu (wygrana, remis albo przegrana)
                        Gracz otrzyma 5 punktów.
                    </p>
                    <p>
                        Za udzielenie poprawnej odpowiedzi na pytanie zadane w trakcie meczu w
                        odniesieniu do Graczy posiadających Konto Premium, Gracz otrzyma 2 punkty.
                    </p>
                    <p>
                        Punkty zostaną naliczone Graczowi po zakończeniu meczu, we wskazaniu wyniku
                        lub zdarzenia lub w odpowiedzi na pytanie, w którym brał udział, na
                        podstawie danych publikowanych przez Stats Perform dostarczany przez STATS
                        LLC opartych na przebiegu prawdziwego meczu.
                    </p>
                    <p>
                        Dane te są weryfikowane i mogą ulec zmianie w trakcie i po danej kolejce
                        rozgrywek.
                    </p>
                    <p>
                        Dla potrzeb Gry punktacja umieszczona na Stronie Internetowej i Aplikacji
                        jest ostateczna, z zastrzeżeniem prawa do złożenia reklamacji zgodnie z pkt
                        XV Regulaminu.
                    </p>
                    <p>
                        O zdarzeniach w Grze decyduje tylko i wyłącznie Organizator. Statystyki
                        dostępne są na stronie internetowej:
                        https://optaplayerstats.statsperform.com.
                    </p>

                    {/* KLASYFIKACJA section */}
                    <h3 className="text-xl font-semibold">KLASYFIKACJA</h3>
                    <p>
                        Klasyfikacja sezonowa obejmuje wszystkich Graczy i przedstawia łączną liczbę
                        zdobytych punktów w Grze.
                    </p>
                    <p>
                        Zwycięzcą klasyfikacji sezonowej zostaje Gracz, który zdobędzie największą
                        łączną liczbę punktów na koniec Gry, tj. na dzień 31 maja 2026 r.
                    </p>
                    <p>
                        Klasyfikacja miesiąca obejmuje Graczy, którzy uczestniczyli w Grze w
                        określonym miesiącu kalendarzowym i przedstawia zdobyte punkty przez Gracza
                        w danym miesiącu kalendarzowym.
                    </p>
                    <p>
                        Zwycięzcą klasyfikacji miesięcznej zostaje Gracz, który zdobędzie największą
                        łączną liczbę punktów w danym miesiącu kalendarzowym.
                    </p>
                    <p>
                        W przypadku równej liczby punktów w danym miesiącu kalendarzowym o
                        kolejności i wyższym miejscu decyduje najwyższy wynik zebranych punktów
                        przez danego Gracza w jednym meczu w danym miesiącu kalendarzowym w
                        porównaniu do Gracza, posiadającego ten sam wynik punktów.
                    </p>
                    <p>
                        Klasyfikacja klubowa obejmuje Graczy, którzy uczestniczyli w Grze dokonując
                        wyboru poszczególnego klubu piłkarskiego i przedstawia łączną liczbę
                        zdobytych punktów w Grze.
                    </p>
                    <p>
                        Zwycięzcą klasyfikacji klubowej zostaje Gracz, który zdobędzie największą
                        łączną liczbę punktów w Grze tj. na dzień 31 maja 2026 r.
                    </p>
                    <p>
                        Do wyników klasyfikacji klubowej wchodzą predykcję dotyczące wszystkich
                        meczów, które są dostępne w Grze, w których Gracz brał udział.
                    </p>

                    {/* NAGRODY section */}
                    <h3 className="text-xl font-semibold">NAGRODY</h3>
                    <p>Nagrody będą przyznawane według kolejności w danej klasyfikacji.</p>
                    <p>
                        Nagrodami dla Graczy w klasyfikacji miesięcznej, którzy na koniec miesiąca
                        kalendarzowego, zdobyli w tym miesiącu kalendarzowym największą łączną
                        liczbę punktów w klasyfikacji miesięcznej są:
                    </p>
                    <ul className="list-decimal pl-6">
                        <li>
                            miejsce: Smartfon APPLE iPhone 16 Pro 5G 128GB 6.3" 120Hz Tytan
                            naturalny (o wartości 4.600 zł brutto)
                        </li>
                        <li>
                            miejsce: Laptop ASUS Vivobook 15.6" i3-1315U 16GB RAM 512GB SSD Windows
                            11 Home (o wartości 2.300 zł brutto)
                        </li>
                        <li>
                            miejsce: Słuchawki dokanałowe APPLE AirPods Pro II ANC Biały (o wartości
                            1030 zł brutto)
                        </li>
                    </ul>
                    <p>
                        Łączna wartość Nagród w klasyfikacji miesięcznej, wynosi 7.930 zł (słownie:
                        siedem tysięcy dziewięćset trzydzieści złotych) brutto dla każdego miesiąca,
                        w którym przyznawane są nagrody.
                    </p>
                    <p>
                        Gracz nie ma możliwości wymiany danej Nagrody na inną. Żadna Nagroda nie
                        podlega wymianie na odpowiadającą jej wartość pieniężną.Nagrodzeni Gracze, w
                        tym zwycięzcy poszczególnych klasyfikacji, są zwani w Regulaminie
                        „Laureatami”.
                    </p>
                    <p>
                        Nagrody w Grze podlegają opodatkowaniu zgodnie z treścią ustawy z dnia 26
                        lipca 1991 r. o podatku dochodowym od osób fizycznych (tekst jedn. Dz. U. z
                        2021 r., poz. 1128, z późn. zm.; dalej: „Ustawa o podatku dochodowym od osób
                        fizycznych”).
                    </p>
                    <p>
                        Art. 30 ust. 1 pkt 2 Ustawy o podatku dochodowym od osób fizycznych
                        przewiduje obowiązek zapłaty podatku dochodowego w zryczałtowanej wysokości
                        10 % wartości wygranej lub nagrody, z tytułu wygranych w konkursach, grach i
                        zakładach wzajemnych lub nagród związanych ze sprzedażą premiową, uzyskanych
                        w państwie członkowskim Unii Europejskiej lub innym państwie należącym do
                        Europejskiego Obszaru Gospodarczego.
                    </p>
                    <p>
                        Kwotę potrąconego podatku od Nagrody odprowadzi Organizator do właściwego
                        Urzędu Skarbowego w wykonaniu obowiązku wynikającego z art. 41 ust. 4 Ustawy
                        o podatku dochodowym od osób fizycznych.
                    </p>
                    <p>
                        Wartość Nagrody w Grze zostanie za każdym razem podwyższona o dodatkową
                        nagrodę pieniężną.
                    </p>
                    <p>
                        Wartość dodatkowej nagrody pieniężnej podlegać będzie opodatkowaniu według
                        zasad określonych w art. 30 ust. 1 pkt 2 Ustawy o podatku dochodowym od osób
                        fizycznych.
                    </p>
                    <p>
                        Dodatkowa nagroda pieniężna podwyższy wartość Nagrody o wysokość
                        zryczałtowanego podatku dochodowego od osób fizycznych według stawki 10%
                        należnego od łącznej wartości Nagrody, z uwzględnieniem dodatkowej nagrody
                        pieniężnej.
                    </p>
                    <p>
                        Wartość dodatkowej nagrody pieniężnej ustalać się będzie w wysokości ok.
                        11,11% bazowej wartości Nagrody.
                    </p>
                    <p>
                        Wartość dodatkowej nagrody pieniężnej zostanie zaliczona na poczet należnego
                        podatku zryczałtowanego, na co Laureat wyraża zgodę przystępując do Gry.
                    </p>
                    <p>
                        W czasie trwania Gry mogą pojawić się dodatkowe informacje o Nagrodach,
                        których fundatorem oraz przekazującym będzie Organizator.
                    </p>
                    <p>
                        Każdorazowo będą one zawierały również informacje, których rankingów
                        dotyczą.
                    </p>

                    {/* ZASADY PRZYZNAWANIA NAGRÓD section */}
                    <h3 className="text-xl font-semibold">ZASADY PRZYZNAWANIA NAGRÓD</h3>
                    <p>Organizator jest zobowiązany do weryfikacji danych osobowych Laureatów.</p>
                    <p>
                        Organizator weryfikuje wyniki Gry, tworzy ranking zwycięzców i publikuje na
                        Stronie Internetowej i Aplikacji listę Laureatów obejmującą następujące
                        dane: imię, nazwisko i nazwa Gracza, w ciągu 14 dni roboczych po zakończeniu
                        Gry lub każdego interwału rankingów czasowych (np. miesięczne, itp.).
                    </p>
                    <p>
                        Gracz wyraża zgodę, w przypadku wygrania Nagrody w Grze, na publikację
                        swojego imienia i nazwiska na Stronie Internetowej i Aplikacji wraz z
                        informacją o Nagrodzie.
                    </p>
                    <p>
                        Po weryfikacji wyników zgodnie z ust. 1 i 2 powyżej, w ciągu 30 dni
                        roboczych od opublikowania listy Laureatów, Organizator prześle Laureatom
                        wiadomość pocztą e-mail, w której zostaną poproszeni o przesłanie swoich
                        danych, tj. imię i nazwisko, adres zamieszkania oraz numer telefonu celem
                        ułatwienia kontaktu.
                    </p>
                    <p>
                        Gracz jest zobowiązany w ciągu 14 dni roboczych od dnia otrzymania
                        wiadomości e-mail wysłać wskazane powyżej dane Organizatorowi na adres
                        e-mail Organizatora, z którego przesłana została wiadomość informująca o
                        zwycięstwie i wygraniu Nagrody.
                    </p>
                    <p>Podanie tych danych jest konieczne dla wydania Nagrody.</p>
                    <p>
                        Szczegóły dotyczące przekazania Nagród Laureatom, w tym sposób, miejsce i
                        termin wydania Nagród wydawanych przez Organizatora, zostaną uzgodnione z
                        Laureatem, przy czym przekazanie Nagrody nastąpi najpóźniej w terminie 60
                        dni kalendarzowych od dnia poinformowania Laureata o wygranej w Grze (z
                        zastrzeżeniem odmiennych postanowień niniejszego Regulaminu dotyczących
                        określonych Nagród).
                    </p>
                    <p>
                        Podanie przez Laureata nieprawidłowych danych lub zmiana danych
                        uniemożliwiająca identyfikację Gracza, któremu przyznano Nagrodę, może
                        skutkować wykluczeniem danego Gracza z Gry.
                    </p>
                    <p>
                        W przypadku zmiany danych, Gracz jest zobowiązany niezwłocznie poinformować
                        Organizatora o tym fakcie poprzez np. wysłanie wiadomości na adres e-mail
                        wskazany przez Organizatora.
                    </p>
                    <p>
                        W przypadku nieprzesłania przez Laureata danych wskazanych w ust. 3 powyżej
                        w wymaganym terminie – Laureat traci prawo do Nagrody.
                    </p>
                    <p>
                        Laureat nie jest uprawniony do przenoszenia praw do Nagrody na osoby
                        trzecie.
                    </p>
                    <p>
                        Nagrody zostaną przekazane Laureatom w formie przesyłki kurierskiej na
                        wskazane przez Laureatów adresy korespondencyjne, w terminie do 30
                        (trzydzieści) dni roboczych od dnia otrzymania przez Organizatora na
                        wskazany powyżej adres e-mail wiadomości obejmującej dane wskazane w ust. 3
                        powyżej. Potwierdzeniem odbioru nagrody przez Laureata będzie pokwitowanie
                        odbioru nagrody przez Laureata.
                    </p>

                    {/* ZMIANY W GRZE I PRZERWY TECHNICZNE section */}
                    <h3 className="text-xl font-semibold">ZMIANY W GRZE I PRZERWY TECHNICZNE</h3>
                    <p>
                        Organizator zastrzega sobie prawo wprowadzania w Grze modyfikacji w czasie
                        trwania Umowy o Korzystanie z Gry.
                    </p>
                    <p>
                        Modyfikacje te mogą polegać na zmianie interface Gry, ale nie mogą dotyczyć
                        zasad Gry.
                    </p>
                    <p>
                        O każdej zmianie w Grze, Gracz zostanie poinformowany za pomocą wiadomości
                        na adres e-mail, którego Gracz użył do zarejestrowania swojego Konta.
                    </p>
                    <p>
                        Organizator zastrzega sobie prawo czasowego i przejściowego zawieszenia
                        możliwości korzystania z Gry w celach modernizacyjnych i konserwacyjnych
                        (tzw. przerwa technologiczna).
                    </p>
                    <p>
                        Organizator dołoży wszelkich starań, aby przerwy te odbywały się w godzinach
                        nocnych, a dodatkowo, aby nie przypadały w trakcie odbywającego się meczu
                        Ekstraklasy O każdej planowanej przez Organizatora przerwie technologicznej,
                        Gracz zostanie poinformowany za pomocą wiadomości e-mail z wykorzystaniem
                        którego Gracz zarejestrował swoje Konto.
                    </p>
                    <p>
                        Po zakończeniu przerwy technologicznej, Gracz będzie mógł wznowić
                        korzystanie z Gry na takim samym etapie, w jakim znajdował się w chwili
                        rozpoczęcia przerwy technologicznej.
                    </p>

                    {/* CZAS TRWANIA I WYPOWIEDZENIE UMOWY O KORZYSTANIE Z GRY section */}
                    <h3 className="text-xl font-semibold">
                        CZAS TRWANIA I WYPOWIEDZENIE UMOWY O KORZYSTANIE Z GRY
                    </h3>
                    <p>
                        Umowa o Korzystanie z Gry zawierana jest na czas określony, do upływu
                        wszystkich terminów określonych w pkt X Regulaminu po dniu 31 maja 2025 r.
                    </p>
                    <p>
                        Gracz może wypowiedzieć Umowę o Korzystanie z Gry ze skutkiem
                        natychmiastowym w każdej chwili poprzez usunięcie Konta lub – odpowiednio =-
                        Konta Premium w Grze.
                    </p>
                    <p>
                        Organizator może wypowiedzieć Umowę o Korzystanie z Gry z zachowaniem
                        14-dniowego okresu wypowiedzenia w sytuacji, gdy planuje zakończyć
                        funkcjonowanie Gry.
                    </p>
                    <p>
                        Oświadczenie o wypowiedzeniu wraz z informacją o dacie zakończenia
                        funkcjonowania Gry zostanie Graczowi wysłane w formie wiadomości e-mail na
                        adres poczty elektronicznej przypisany do Konta.
                    </p>
                    <p>
                        Wraz z upływem terminu wypowiedzenia, Konto oraz – odpowiednio – Konto
                        Premium Gracza zostanie usunięte.
                    </p>

                    {/* ZAKAZ UMIESZCZANIA TREŚCI BEZPRAWNYCH section */}
                    <h3 className="text-xl font-semibold">ZAKAZ UMIESZCZANIA TREŚCI BEZPRAWNYCH</h3>
                    <p>Niedozwolone jest umieszczanie w Grze treści o charakterze bezprawnym.</p>
                    <p>
                        Organizator nie ponosi odpowiedzialności za treść ani poprawność danych oraz
                        informacji wprowadzonych przez Gracza do Gry, ani za treść i poprawność
                        danych oraz informacji wprowadzonych przez Gracza do Gry.
                    </p>
                    <p>
                        W razie otrzymania urzędowego zawiadomienia lub uzyskania wiarygodnej
                        wiadomości o bezprawnym charakterze danych umieszczonych w Grze przez Gracza
                        lub związanej z tymi danymi działalności, Organizator niezwłocznie
                        uniemożliwi dostęp do tych danych.
                    </p>
                    <p>
                        W przypadku umieszczenia przez Gracza danych bezprawnych w Grze, Organizator
                        będzie uprawniony do natychmiastowego zablokowania dostępu Graczowi do Gry
                        oraz żądania naprawienia szkody wynikłej z naruszeń zobowiązań Gracza.
                    </p>
                    <p>
                        Organizator ma prawo żądać usunięcia danych Gracza, jeżeli naruszają one
                        prawo lub prawa osób trzecich.
                    </p>
                    <p>
                        Gracz obowiązany jest wykonać żądanie określone w zdaniu powyżej pod rygorem
                        zablokowania dostępu do Gry.
                    </p>

                    {/* ODPOWIEDZIALNOŚĆ section */}
                    <h3 className="text-xl font-semibold">ODPOWIEDZIALNOŚĆ</h3>
                    <p>
                        Żadne postanowienie Regulaminu nie ogranicza ani nie wyłącza
                        odpowiedzialności Organizatora z jakiegokolwiek tytułu, którego zgodnie z
                        prawem Organizator nie ma prawa wyłączyć.
                    </p>
                    <p>
                        Organizator nie ponosi odpowiedzialności za niemożliwość lub utrudnienia w
                        korzystaniu z Strony Internetowej lub Aplikacji, wynikające z przyczyn
                        leżących po stronie Gracza, w szczególności za utratę przez Gracza lub
                        wejście w posiadanie przez osoby trzecie (niezależnie od sposobu) jego hasła
                        do Konta lub – odpowiednio – Konta Premium, lub nie spełnienie warunków
                        technicznych, o których mowa w niniejszym Regulaminie.
                    </p>
                    <p>
                        Organizator nie ponosi odpowiedzialności za niewykonanie ani nienależyte
                        wykonywanie przez Gracza obowiązków wynikających z powszechnie
                        obowiązujących przepisów prawa, Regulaminu, Umowy o Korzystanie z Gry.
                    </p>
                    <p>
                        Organizator nie ponosi odpowiedzialności z tytułu szkód spowodowanych
                        działaniami lub zaniechaniami Gracza, w szczególności za korzystanie przez
                        nich ze Strony Internetowej lub Aplikacji w sposób niezgodny z
                        obowiązującymi przepisami prawa lub Regulaminem.
                    </p>

                    {/* REKLAMACJE section */}
                    <h3 className="text-xl font-semibold">REKLAMACJE</h3>
                    <p>Każdy Gracz może złożyć u Organizatora reklamację w związku z Grą.</p>
                    <p>
                        Reklamacje można składać w formie pisemnej na adres Organizatora Foova
                        Prosta Spółka Akcyjna z siedzibą w Warszawie przy Alei „Solidarności” 68/121
                        (00-240 Warszawa), z podaniem korespondencyjnego adresu zwrotnego, na który
                        zostanie przesłana odpowiedź lub w formie elektronicznej na adres e-mail:
                        contact@foova.org
                    </p>
                    <p>
                        Reklamacja powinna zawierać: imię i nazwisko oraz adres do korespondencji
                        osoby zgłaszającej reklamację, jak również dokładny opis powodu reklamacji
                        oraz zgłaszanego żądania.
                    </p>
                    <p>
                        Reklamacje można składać przez cały czas trwania Gry oraz nie później niż do
                        14 dni po opublikowaniu listy Laureatów.
                    </p>
                    <p>
                        O zachowaniu terminu złożenia reklamacji decyduje data stempla pocztowego,
                        data nadania przesyłki kurierskiej zawierającej reklamację lub data
                        zarejestrowania wpływu na serwer wiadomości e-mail zawierającej w swej
                        treści reklamację.
                    </p>
                    <p>Organizator rozpatrzy reklamację w ciągu 14 dni od daty jej otrzymania.</p>
                    <p>
                        O rozpatrzeniu reklamacji Organizator poinformuje Gracza, który złożył
                        reklamację w formie pisemnej, listem poleconym nadanym na adres zwrotny
                        Gracza niezwłocznie po jej rozpatrzeniu oraz dodatkowo drogą elektroniczną.
                    </p>
                    <p>
                        Dla reklamacji złożonych w formie elektronicznej odpowiedź zostanie
                        przesłana wyłącznie w formie elektronicznej.
                    </p>
                    <p>
                        Uczestnikowi przysługuje prawo dochodzenia nieuwzględnionych roszczeń na
                        drodze postępowania sądowego przed miejscowo właściwym sądem powszechnym.
                    </p>

                    {/* DANE OSOBOWE I PLIKI COOKIES section */}
                    <h3 className="text-xl font-semibold">DANE OSOBOWE I PLIKI COOKIES</h3>
                    <p>
                        Administratorem danych osobowych Graczy korzystających z Gry, jest
                        Organizator. Dane osobowe Graczy przetwarzane są w celu umożliwienia udziału
                        w Grze dostępnych za pośrednictwem Strony Internetowej i Aplikacji, obsługi
                        płatności, rozliczenia Gry i wydania Nagród, obsługi reklamacji, realizacji
                        obowiązków prawnych Organizatora oraz w celu dochodzenia i obrony roszczeń.
                    </p>
                    <p>
                        W przypadku wyrażenia odpowiednich zgód, dane będą przetwarzane także w
                        celach marketingowych, w tym informowania o konkursach oraz w celach
                        marketingowych partnerów biznesowych Organizatora.
                    </p>
                    <p>
                        Więcej informacji na temat przetwarzania danych osobowych Graczy, w tym
                        informacja o przysługujących im prawach, znajduje się w{" "}
                        <span className="font-bold">___________</span> (Please insert the link to
                        your full privacy policy page if it exists separately, or remove this
                        placeholder).
                    </p>
                    <p>
                        Organizator gwarantuje poufność wszelkich udostępnionych mu danych
                        osobowych.
                    </p>
                    <p>
                        Organizator wykorzystuje pliki cookies (ciasteczka), czyli niewielkie
                        informacje tekstowe, przechowywane na urządzeniu końcowym Gracza (np.
                        komputerze, tablecie, smartfonie).
                    </p>
                    <p>Cookies mogą być odczytywane przez system teleinformatyczny Organizatora.</p>

                    {/* USUNIĘCIA KONTA section */}
                    <h3 className="text-xl font-semibold">USUNIĘCIA KONTA</h3>
                    <p>
                        Gracz może w każdej chwili usunąć swoje Konto z Gry składając oświadczenie o
                        wypowiedzeniu Umowy o korzystanie z Gry wysyłając go na adres:
                        contact@foova.org Po otrzymaniu oświadczenia Organizator usunie Konto Gracza
                        niezwłocznie, jednak nie później niż w okresie 14 dni.
                    </p>
                    <p>
                        Usunięcie Konta Gracza powoduje, iż dalsze świadczenie usług przeznaczonych
                        dla Gracza jest niemożliwe.
                    </p>
                    <p>
                        Po usunięciu Konta Organizator może korzystać z zamieszczonych w Grze treści
                        zamieszczonych przez Gracza poprzez utrwalanie, zwielokrotnianie i ich
                        udostępnianie w sieciach informatycznych i teleinformatycznych, w tym w
                        sieci Internet, także w taki sposób, aby każdy miał do nich dostęp w
                        wybranym przez siebie miejscu i czasie, w innych niż wskazane przez Gracza
                        częściach Gry.
                    </p>
                    <p>
                        Treści mogą być wykorzystywane przez Organizator po ich uprzednim
                        zanonimizowaniu.
                    </p>
                    <p>
                        Gracz zobowiązuje się do niewykonywania osobistych praw autorskich do
                        treści, w szczególności w zakresie oznaczenia utworu swoim imieniem i
                        nazwiskiem lub nazwą użytkownika.
                    </p>
                    <p>
                        Graczowi nie przysługuje wynagrodzenie za umożliwienie Organizatorowi
                        korzystania z tych treści.
                    </p>
                    <p>
                        Niezależnie od uprawnienia przyznanego Organizatorowi na podstawie
                        niniejszego ustępu, Gracz może samodzielnie korzystać z tych treści.
                    </p>
                    <p>
                        Organizator posiada prawo do zawieszenia lub usunięcia Konta Gracza wedle
                        własnego uznania, uniemożliwiając lub ograniczając w ten sposób dostęp do
                        poszczególnych lub wszystkich usług, treści, materiałów i zasobów Gry, w
                        szczególności jeżeli Gracz dopuści się łamania Regulaminu, powszechnie
                        obowiązujących przepisów prawa, zasad współżycia społecznego lub działa na
                        szkodę Organizatora, uzasadnionego interesu Organizatora oraz podmiotów
                        trzecich współpracujących Organizatorem.
                    </p>

                    {/* POSTANOWIENIA KOŃCOWE section */}
                    <h3 className="text-xl font-semibold">POSTANOWIENIA KOŃCOWE</h3>
                    <p>
                        Organizator zastrzega sobie możliwość dokonywania zmian w Regulaminie, z
                        zastrzeżeniem postanowień kolejnych ustępów.
                    </p>
                    <p>
                        Organizator jest uprawniony do zmiany Regulaminu w przypadku konieczności
                        uwzględnienia zmian przepisów prawa, celem doprecyzowania postanowień
                        budzących wątpliwości Graczy lub lepszej ich ochrony, o ile nie spowoduje to
                        pogorszenia warunków uczestnictwa w Grze i zmiany podstawowych zasad Gry.
                    </p>
                    <p>Zmiany w Regulaminie nie będą naruszać praw nabytych przez Graczy.</p>
                    <p>
                        Informacja o zmianie Regulaminu zostanie opublikowana na Stronie
                        Internetowej oraz Aplikacji oraz zostanie przesłana e-mailem wszystkim
                        Graczom, którzy zgłosili swój udział w Grze przed dniem dokonania zmiany
                        Regulaminu.
                    </p>
                    <p>
                        Jeżeli przed proponowaną datą wejścia w życie zmian Regulaminu, Gracz nie
                        zgłosi Organizatorowi sprzeciwu wobec tych zmian, uznaje się, że Gracz
                        zaakceptował zmieniony Regulamin.
                    </p>
                    <p>
                        Gracz ma prawo, przed datą proponowanego wejścia w życie zmian Regulaminu,
                        usunąć Konto lub – odpowiednio – Konto Premium w Grze.
                    </p>
                    <p>
                        W przypadku, gdy Gracz zgłosi sprzeciw wobec zmian, ale nie usunie Konta lub
                        – odpowiednio – Konta Premium w Grze, Umowa o Korzystanie z Gry wygasa z
                        dniem poprzedzającym wejście w życie zmienionego Regulaminu, a Konto lub –
                        odpowiednio – Konto Premium Gracza zostaje automatycznie usunięte.
                    </p>
                    <p>
                        W przypadku przełożenia, powtórzenia, unieważnienia meczu, oraz w innych
                        sytuacjach nieuwzględnionych w Regulaminie, decyzję o tym, jak przyznawane
                        są punkty i których klasyfikacji dotyczą, Organizator podejmie po
                        wcześniejszym zapoznaniu się z decyzją organizatora rozgrywek.
                    </p>
                    <p>
                        W sprawach nieuregulowanych Regulaminem mają zastosowanie odpowiednie
                        powszechnie obowiązujące przepisy prawa.
                    </p>
                    <p>
                        Regulamin wchodzi w życie po opublikowaniu na Stronie Internetowej oraz
                        Aplikacji.
                    </p>
                    <p>
                        Postanowienia Regulaminu nie naruszają praw Graczy będących konsumentami
                        wynikających z obowiązujących przepisów prawa, które stosuje się w pierwszej
                        kolejności, przed postanowieniami Regulaminu.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Regulamin;
