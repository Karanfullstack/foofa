// src/pages/PrivacyPolicy.jsx
import React from "react";
import logo from "../assets/App-Icon.svg"; // Adjust path if needed

const PrivacyPolicy = () => {
    return (
        <div className="bg-black text-white min-h-screen px-4 py-8 font-hubspot">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-8">
                    <img src={logo} alt="Foova Logo" className="mx-auto w-40" />
                    <h1 className="text-3xl mt-4 font-bold">Polityka Prywatności</h1>
                    <p className="text-sm text-gray-400 mt-2">
                        Data wprowadzenia aktualnej polityki: 15.07.2025
                    </p>
                </div>

                <div className="space-y-6 text-base leading-relaxed whitespace-pre-wrap">
                    <p>
                        <strong>POLITYKA PRYWATNOŚCI Foova Prosta Spółka Akcyjna</strong>
                    </p>

                    <h2 className="text-xl font-semibold">1. Administrator danych osobowych</h2>
                    <p>
                        Administratorem Państwa danych osobowych jest Foova Prosta Spółka Akcyjna z
                        siedzibą w Warszawie Alei „Solidarności” 68/121 (00-240 Warszawa), wpisanej
                        do Krajowego Rejestru Sądowego przez Sąd Rejonowy dla m.st. Warszawy w
                        Warszawie, XII Wydział Gospodarczy KRS pod numerem KRS: 0001138962, NIP:
                        5253024832, REGON: 540208461 (dalej: „Foova” lub „my”). Z Administratorem
                        jest możliwy kontakt w formie pisemnej na adres Administratora lub w formie
                        elektronicznej na adres e-mail: rodo@foova.org.
                    </p>

                    <h2 className="text-xl font-semibold">2. Jakie dane przetwarzamy?</h2>
                    <p>
                        Dane osobowe pozyskujemy bezpośrednio od Państwa, zarówno podczas
                        korzystania ze strony internetowej, rozpatrywania zapytań oraz realizacji
                        konkursu. Podanie tych danych jest dobrowolne, ale ich niepodanie może
                        oznaczać brak możliwości założenia konta w tym wzięcia udziału w grze
                        internetowej FOOVA FAN CENTER.
                    </p>
                    <p>Przetwarzamy następujące kategorie danych:</p>
                    <ul className="list-disc pl-6">
                        <li>
                            dane identyfikacyjne: imię, nazwisko, nick w aplikacji, numer Konta lub
                            Konta Premium,
                        </li>
                        <li>
                            dane kontaktowe: e-mail, numer telefonu (w razie potrzeby wysyłki
                            nagród),
                        </li>
                        <li>dane rozliczeniowe w tym dane płatności,</li>
                        <li>
                            dane związane z aktywnością w Grze: historia predykcji, punktów,
                            avatar(zdjęcie),
                        </li>
                        <li>inne dane dobrowolnie podane w formularzach lub Grze.</li>
                    </ul>

                    <h2 className="text-xl font-semibold">
                        3. Cele i podstawy przetwarzania danych
                    </h2>
                    <p>Cel przetwarzania / Podstawa prawna:</p>
                    <ul className="list-disc pl-6">
                        <li>
                            Rejestracja i obsługa Konta lub Konta Premium – Art. 6 ust. 1 lit. b)
                            RODO
                        </li>
                        <li>
                            Realizacja zasad Gry (rankingi, nagrody) – Art. 6 ust. 1 lit. b) RODO
                        </li>
                        <li>Obsługa płatności – Art. 6 ust. 1 lit. b) RODO</li>
                        <li>
                            Obsługa reklamacji oraz dochodzenie roszczeń – Art. 6 ust. 1 lit. c) i
                            f) RODO
                        </li>
                        <li>
                            Przestrzeganie obowiązków prawnych (np. podatkowych) – Art. 6 ust. 1
                            lit. c) RODO
                        </li>
                        <li>
                            Prowadzenie działań marketingowych, jeśli wyrażono zgodę – Art. 6 ust. 1
                            lit. a) RODO
                        </li>
                        <li>Wysyłka powiadomień push – Art. 6 ust. 1 lit. a) RODO</li>
                    </ul>

                    <h2 className="text-xl font-semibold">4. Odbiorcy danych</h2>
                    <p>
                        Dane mogą być udostępniane: podmiotom obsługującym płatności, świadczącym
                        usługi IT, firmom kurierskim oraz organom podatkowym. Nie przekazujemy
                        danych poza EOG bez odpowiednich zabezpieczeń.
                    </p>

                    <h2 className="text-xl font-semibold">5. Jak długo przechowujemy dane?</h2>
                    <p>
                        Dane przetwarzamy przez okres trwania Umowy o Korzystanie z Gry oraz przez 6
                        lat po jej zakończeniu. Dane przetwarzane na podstawie zgody – do jej
                        wycofania.
                    </p>

                    <h2 className="text-xl font-semibold">6. Przysługujące Państwu prawa</h2>
                    <p>
                        Masz prawo dostępu, sprostowania, usunięcia danych, ograniczenia
                        przetwarzania, przeniesienia danych, wycofania zgody i wniesienia skargi do
                        organu nadzorczego.
                    </p>

                    <h2 className="text-xl font-semibold">7. Linki do stron</h2>
                    <p>
                        Strona może zawierać linki do innych serwisów. Zalecamy zapoznanie się z ich
                        politykami prywatności.
                    </p>

                    <h2 className="text-xl font-semibold">8. Powiadomienia push i profilowanie</h2>
                    <p>Powiadomienia push są niezbędne do korzystania z funkcji Predykcji Live.</p>

                    <h2 className="text-xl font-semibold">9. Zmiany Polityki Prywatności</h2>
                    <p>
                        Polityka prywatności może być aktualizowana wraz z rozwojem serwisu. Prosimy
                        o śledzenie zmian.
                    </p>

                    <h2 className="text-2xl font-bold">POLITYKA PLIKÓW COOKIES</h2>

                    <h3 className="text-lg font-semibold mt-4">1. Co to są pliki cookies?</h3>
                    <p>
                        Cookies to małe pliki tekstowe zapisywane na Państwa urządzeniu. Umożliwiają
                        prawidłowe działanie serwisu, zapamiętywanie ustawień i analizę korzystania
                        z serwisu.
                    </p>

                    <h3 className="text-lg font-semibold mt-4">2. Jakich cookies używamy?</h3>
                    <ul className="list-disc pl-6">
                        <li>Niezbędne – logowanie, nawigacja</li>
                        <li>Funkcjonalne – ustawienia</li>
                        <li>Analityczne – np. Google Analytics</li>
                    </ul>

                    <h3 className="text-lg font-semibold mt-4">3. Jak zarządzać cookies?</h3>
                    <p>
                        Można zmienić ustawienia przeglądarki, aby ograniczyć lub wyłączyć cookies.
                        Może to wpłynąć na funkcjonalność serwisu.
                    </p>

                    <h3 className="text-lg font-semibold mt-4">4. Kontakt</h3>
                    <p>
                        Kontakt ws. cookies:{" "}
                        <a href="mailto:rodo@foova.org" className="underline text-blue-400">
                            rodo@foova.org
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
