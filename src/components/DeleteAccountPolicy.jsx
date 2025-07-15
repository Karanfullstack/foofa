import logo from "../assets/App-Icon.svg";

const DeleteAccountPolicy = () => {
    return (
        <div className="bg-black text-white min-h-screen px-4 py-8 font-hubspot">
            <div className="max-w-5xl mx-auto">
                {/* Header section with logo and title */}
                <div className="text-center mb-8">
                    <img src={logo} alt="Foova Logo" className="mx-auto w-40" />
                    <h1 className="text-3xl mt-4 font-bold">
                        USUNIĘCIE KONTA W APLIKACJI FOOVA FAN CENTER
                    </h1>
                    <p className="text-sm text-gray-400 mt-2">Data aktualizacji: 15.07.2025</p>
                </div>

                {/* Main content area */}
                <div className="space-y-6 text-base leading-relaxed whitespace-pre-wrap">
                    <p>
                        Jeśli chcesz usunąć swoje konto użytkownika w aplikacji FOOVA Fan Center,
                        prosimy o przesłanie wiadomości e-mail z prośbą o usunięcie konta na adres:{" "}
                        <a href="mailto:support@foova.org" className="underline text-blue-400">
                            support@foova.org
                        </a>
                        .
                    </p>

                    <h3 className="text-xl font-semibold">W treści wiadomości należy podać:</h3>
                    <ul className="list-disc pl-6">
                        <li>nazwę użytkownika (nick),</li>
                        <li>adres e-mail powiązany z kontem,</li>
                        <li>jednoznaczne żądanie usunięcia konta.</li>
                    </ul>

                    <p>
                        Po otrzymaniu Twojej prośby, przeprowadzimy weryfikację tożsamości i
                        rozpoczniemy proces trwałego usunięcia konta oraz powiązanych z nim danych
                        osobowych, zgodnie z naszą Polityką Prywatności oraz art. 17 RODO. Proces
                        ten może potrwać do 14 dni roboczych.
                    </p>

                    <h3 className="text-xl font-semibold">
                        Usunięcie konta jest nieodwracalne i oznacza:
                    </h3>
                    <ul className="list-disc pl-6">
                        <li>utratę historii predykcji i punktów,</li>
                        <li>brak możliwości odbioru nieprzyznanych jeszcze nagród,</li>
                        <li>trwałe zakończenie udziału w grze.</li>
                    </ul>

                    <p>Dziękujemy za korzystanie z aplikacji FOOVA Fan Center.</p>
                </div>
            </div>
        </div>
    );
};

export default DeleteAccountPolicy;
