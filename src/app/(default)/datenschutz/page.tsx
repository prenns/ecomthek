export const metadata = {
    title: 'Datenschutzerklärung | Ecomthek',
    description: '',
};

export default function PrivacyPage() {
    return (
        <>

            <section className="bg-white dark:bg-gray-900">
                <div className="max-w-screen-xl px-4 py-8 mx-auto sm:pb-16">
                    <div className="flex flex-col gap-12 lg:flex-row lg:items-start xl:gap-20">

                        <div className="flex-1 min-w-0">
                            <>
                                <h1 className="text-3xl font-bold mb-8 text-foreground">Datenschutzerklärung</h1>
                                <div className="bg-muted/50 p-6 rounded-lg mb-8" aria-label="table of contents">
                                    <h2 className="text-xl font-semibold mb-4 text-foreground">Inhaltsverzeichnis</h2>
                                    <strong style={{ paddingLeft: "0rem" }}>
                                        1.
                                        <a
                                            className="text-primary hover:text-primary/80 transition-colors"
                                            href="#zugriffsdaten_und_hosting"
                                        >
                                            {" "}
                                            Zugriffsdaten und Hosting
                                        </a>
                                    </strong>
                                    <br />
                                    <strong style={{ paddingLeft: "1rem" }}>
                                        <a
                                            style={{ color: "inherit !important" }}
                                            href="#hosting"
                                        >
                                            {" "}
                                            Hosting
                                        </a>
                                    </strong>
                                    <br />
                                    <strong style={{ paddingLeft: "0rem" }}>
                                        2.
                                        <a
                                            style={{ color: "inherit !important" }}
                                            href="#datenverarbeitung_zur_vertragsabwicklung_und_zur_kontaktaufnahme"
                                        >
                                            {" "}
                                            Datenverarbeitung zur Vertragsabwicklung und zur Kontaktaufnahme
                                        </a>
                                    </strong>
                                    <br />
                                    <strong style={{ paddingLeft: "1rem" }}>
                                        2.1
                                        <a
                                            style={{ color: "inherit !important" }}
                                            href="#datenverarbeitung_zur_vertragsabwicklung"

                                        >
                                            {" "}
                                            Datenverarbeitung zur Vertragsabwicklung
                                        </a>
                                    </strong>
                                    <br />
                                    <strong style={{ paddingLeft: "1rem" }}>
                                        2.2
                                        <a
                                            style={{ color: "inherit !important" }}
                                            href="#kundenkonto"

                                        >
                                            {" "}
                                            Kundenkonto
                                        </a>
                                    </strong>
                                    <br />
                                    <strong style={{ paddingLeft: "1rem" }}>
                                        2.3
                                        <a
                                            style={{ color: "inherit !important" }}
                                            href="#kontaktaufnahme"

                                        >
                                            {" "}
                                            Kontaktaufnahme
                                        </a>
                                    </strong>
                                    <br />
                                    <strong style={{ paddingLeft: "0rem" }}>
                                        3.
                                        <a
                                            style={{ color: "inherit !important" }}
                                            href="#datenverarbeitung_zum_zwecke_der_versandabwicklung"

                                        >
                                            {" "}
                                            Datenverarbeitung zum Zwecke der Versandabwicklung
                                        </a>
                                    </strong>
                                    <br />
                                    <strong style={{ paddingLeft: "0rem" }}>
                                        4.
                                        <a
                                            style={{ color: "inherit !important" }}
                                            href="#datenverarbeitung_zur_zahlungsabwicklung"

                                        >
                                            {" "}
                                            Datenverarbeitung zur Zahlungsabwicklung
                                        </a>
                                    </strong>
                                    <br />
                                    <strong style={{ paddingLeft: "1rem" }}>
                                        4.1
                                        <a
                                            style={{ color: "inherit !important" }}
                                            href="#datenverarbeitung_zur_transaktionsabwicklung"

                                        >
                                            {" "}
                                            Datenverarbeitung zur Transaktionsabwicklung
                                        </a>
                                    </strong>
                                    <br />
                                    <strong style={{ paddingLeft: "1rem" }}>
                                        4.2
                                        <a
                                            style={{ color: "inherit !important" }}
                                            href="#datenverarbeitung_zum_zwecke_der_betrugsprävention_und_der_optimierung_unserer_zahlungsprozesse"

                                        >
                                            {" "}
                                            Datenverarbeitung zum Zwecke der Betrugsprävention und der Optimierung
                                            unserer Zahlungsprozesse
                                        </a>
                                    </strong>
                                    <br />
                                    <strong style={{ paddingLeft: "0rem" }}>
                                        5.
                                        <a
                                            style={{ color: "inherit !important" }}
                                            href="#cookies_und_weitere_technologien"

                                        >
                                            {" "}
                                            Cookies und weitere Technologien
                                        </a>
                                    </strong>
                                    <br />
                                    <strong style={{ paddingLeft: "1rem" }}>
                                        5.1
                                        <a
                                            style={{ color: "inherit !important" }}
                                            href="#allgemeine_informationen"

                                        >
                                            {" "}
                                            Allgemeine Informationen
                                        </a>
                                    </strong>
                                    <br />
                                    <strong style={{ paddingLeft: "1rem" }}>
                                        5.2
                                        <a
                                            style={{ color: "inherit !important" }}
                                            href="#einsatz_von_usercentrics_consent_management_plattform_zur_verwaltung_von_einwilligungen"


                                        >
                                            {" "}
                                            Einsatz von Usercentrics Consent Management Plattform zur Verwaltung von
                                            Einwilligungen
                                        </a>
                                    </strong>
                                    <br />
                                    <strong style={{ paddingLeft: "0rem" }}>
                                        6.
                                        <a
                                            style={{ color: "inherit !important" }}
                                            href="#einsatz_von_cookies_und_anderen_technologien"

                                        >
                                            {" "}
                                            Einsatz von Cookies und anderen Technologien
                                        </a>
                                    </strong>
                                    <br />
                                    <strong style={{ paddingLeft: "1rem" }}>
                                        6.1
                                        <a
                                            style={{ color: "inherit !important" }}
                                            href="#einsatz_von_google-diensten"

                                        >
                                            {" "}
                                            Einsatz von Google-Diensten
                                        </a>
                                    </strong>
                                    <br />
                                    <strong style={{ paddingLeft: "1rem" }}>
                                        6.2
                                        <a
                                            style={{ color: "inherit !important" }}
                                            href="#einsatz_von_facebook-diensten"

                                        >
                                            {" "}
                                            Einsatz von Facebook-Diensten
                                        </a>
                                    </strong>
                                    <br />
                                    <strong style={{ paddingLeft: "0rem" }}>
                                        7.
                                        <a
                                            style={{ color: "inherit !important" }}
                                            href="#social_media"


                                        >
                                            {" "}
                                            Social Media
                                        </a>
                                    </strong>
                                    <br />
                                    <strong style={{ paddingLeft: "1rem" }}>
                                        7.1
                                        <a
                                            style={{ color: "inherit !important" }}
                                            href="#social_buttons_von_facebook_(by_meta),_x_(ehemals:_twitter),_instagram_(by_meta),_pinterest,_whatsapp"

                                        >
                                            {" "}
                                            Social Buttons von Facebook (by Meta), X (ehemals: Twitter), Instagram
                                            (by Meta), Pinterest, Whatsapp
                                        </a>
                                    </strong>
                                    <br />
                                    <strong style={{ paddingLeft: "1rem" }}>
                                        7.2
                                        <a
                                            style={{ color: "inherit !important" }}
                                            href="#unsere_onlinepräsenz_auf_facebook_(by_meta),_x_(ehemals:_twitter)_,_instagram_(by_meta),_youtube,_pinterest,_linkedin,_xing"

                                        >
                                            {" "}
                                            Unsere Onlinepräsenz auf Facebook (by Meta), X (ehemals: Twitter) ,
                                            Instagram (by Meta), Youtube, Pinterest, LinkedIn, Xing
                                        </a>
                                    </strong>
                                    <br />
                                    <strong style={{ paddingLeft: "0rem" }}>
                                        8.
                                        <a
                                            style={{ color: "inherit !important" }}
                                            href="#kontaktmöglichkeiten_und_ihre_rechte"

                                        >
                                            {" "}
                                            Kontaktmöglichkeiten und Ihre Rechte
                                        </a>
                                    </strong>
                                    <br />
                                    <strong style={{ paddingLeft: "1rem" }}>
                                        8.1
                                        <a
                                            style={{ color: "inherit !important" }}
                                            href="#ihre_rechte"

                                        >
                                            {" "}
                                            Ihre Rechte
                                        </a>
                                    </strong>
                                    <br />
                                    <strong style={{ paddingLeft: "1rem" }}>
                                        8.2
                                        <a
                                            style={{ color: "inherit !important" }}
                                            href="#kontaktmöglichkeiten"

                                        >
                                            {" "}
                                            Kontaktmöglichkeiten
                                        </a>
                                    </strong>
                                    <br />
                                </div>
                                <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-lg mb-8">
                                    <p className="text-foreground">
                                        <strong className="text-lg">Verantwortlicher für die Datenverarbeitung ist:</strong>
                                        <br /> WUNDERklein GmbH
                                        <br /> Rudolf Diesel-Straße 26/Top 4<br /> 2700 Wiener Neustadt
                                        <br /> Österreich
                                        <br /> Email: datenschutz@ecomthek.com
                                    </p>
                                </div>
                                <p>
                                    Wir freuen uns über Ihr Interesse an unserem Online-Shop. Der Schutz Ihrer
                                    Privatsphäre ist für uns sehr wichtig. Nachstehend informieren wir Sie
                                    ausführlich über den Umgang mit Ihren Daten. Die Verarbeitung Ihrer Daten
                                    erfolgt auf der Grundlage der DSGVO sowie gemäß § 165 Abs. 3 TKG
                                    (Österreich).
                                </p>
                                <h2 id="zugriffsdaten_und_hosting" className="text-2xl font-bold mt-12 mb-6 text-foreground border-b border-border pb-2">1. Zugriffsdaten und Hosting</h2>
                                <p className="mb-6 text-muted-foreground leading-relaxed">
                                    Sie können unsere Webseiten besuchen, ohne Angaben zu Ihrer Person zu
                                    machen. Bei jedem Aufruf einer Webseite speichert der Webserver lediglich
                                    automatisch ein sogenanntes Server-Logfile, das z.B. den Namen der
                                    angeforderten Datei, Ihre IP-Adresse, Datum und Uhrzeit des Abrufs,
                                    übertragene Datenmenge und den anfragenden Provider (Zugriffsdaten) enthält
                                    und den Abruf dokumentiert. Diese Zugriffsdaten werden ausschließlich zum
                                    Zwecke der Sicherstellung eines störungsfreien Betriebs der Seite sowie der
                                    Verbesserung unseres Angebots ausgewertet. Dies dient der Wahrung unserer im
                                    Rahmen einer Interessensabwägung überwiegenden berechtigten Interessen an
                                    einer korrekten Darstellung unseres Angebots gemäß Art. 6 Abs. 1 S. 1 lit. f
                                    DSGVO. Alle Zugriffsdaten werden spätestens sieben Tage nach Ende Ihres
                                    Seitenbesuchs gelöscht.
                                </p>
                                <h3 id="hosting" className="text-xl font-semibold mt-8 mb-4 text-foreground">Hosting</h3>
                                <p className="mb-6 text-muted-foreground leading-relaxed">
                                    Die Dienste zum Hosting und zur Darstellung der Webseite werden teilweise
                                    durch unsere Dienstleister im Rahmen einer Verarbeitung in unserem Auftrag
                                    erbracht. Soweit im Rahmen der vorliegenden Datenschutzerklärung nichts
                                    anderes erläutert wird, werden alle Zugriffsdaten sowie alle Daten, die in
                                    dafür vorgesehenen Formularen auf dieser Webseite erhoben werden, auf ihren
                                    Servern verarbeitet. Bei Fragen zu unseren Dienstleistern und der Grundlage
                                    unserer Zusammenarbeit mit ihnen wenden Sie sich bitte an die in dieser
                                    Datenschutzerklärung beschriebenen Kontaktmöglichkeit.
                                </p>
                                <p>
                                    Unsere Dienstleister sitzen und/oder verwenden Server in folgenden Ländern,
                                    für die die Europäische Kommission durch Beschluss ein angemessenes
                                    Datenschutzniveau festgestellt hat: Vereinigtes Königreich
                                </p>
                                <h2 id="datenverarbeitung_zur_vertragsabwicklung_und_zur_kontaktaufnahme" className="text-2xl font-bold mt-12 mb-6 text-foreground border-b border-border pb-2">
                                    2. Datenverarbeitung zur Vertragsabwicklung und zur Kontaktaufnahme
                                </h2>
                                <h3 id="datenverarbeitung_zur_vertragsabwicklung" className="text-xl font-semibold mt-8 mb-4 text-foreground">
                                    2.1 Datenverarbeitung zur Vertragsabwicklung
                                </h3>
                                <p>
                                    Zum Zwecke der Vertragsabwicklung (inkl. Anfragen zu und Abwicklung von ggf.
                                    bestehenden Gewährleistungs- und Leistungsstörungsansprüchen sowie etwaiger
                                    gesetzlicher Aktualisierungspflichten) gemäß Art. 6 Abs. 1 S. 1 lit. b DSGVO
                                    erheben wir personenbezogene Daten, wenn Sie uns diese im Rahmen Ihrer
                                    Bestellung freiwillig mitteilen. Pflichtfelder werden als solche
                                    gekennzeichnet, da wir in diesen Fällen die Daten zwingend zur
                                    Vertragsabwicklung benötigen und wir ohne deren Angabe die Bestellung nicht
                                    versenden können. Welche Daten erhoben werden, ist aus den jeweiligen
                                    Eingabeformularen ersichtlich.{" "}
                                </p>{" "}
                                <p>
                                    Weitere Informationen zu der Verarbeitung Ihrer Daten, insbesondere zu der
                                    Weitergabe an unsere Dienstleister zum Zwecke der Bestellungs-, Zahlungs-
                                    und Versandabwicklung, finden Sie in den nachfolgenden Abschnitten dieser
                                    Datenschutzerklärung. Nach vollständiger Abwicklung des Vertrages werden
                                    Ihre Daten für die weitere Verarbeitung eingeschränkt und nach Ablauf der
                                    steuer- und handelsrechtlichen Aufbewahrungsfristen gemäß Art. 6 Abs. 1 S. 1
                                    lit. c DSGVO gelöscht, sofern Sie nicht ausdrücklich in eine weitere Nutzung
                                    Ihrer Daten gemäß Art. 6 Abs. 1 S. 1 lit. a DSGVO eingewilligt haben oder
                                    wir uns eine darüber hinausgehende Datenverwendung vorbehalten, die
                                    gesetzlich erlaubt ist und über die wir Sie in dieser Erklärung informieren.
                                </p>
                                <h3 id="kundenkonto" className="text-xl font-semibold mt-8 mb-4 text-foreground">2.2 Kundenkonto</h3>
                                <p>
                                    Soweit Sie hierzu Ihre Einwilligung nach Art. 6 Abs. 1 S. 1 lit. a DSGVO
                                    erteilt haben, indem Sie sich für die Eröffnung eines Kundenkontos
                                    entscheiden, verwenden wir Ihre Daten zum Zwecke der Kundenkontoeröffnung
                                    sowie zur Speicherung Ihrer Daten für weitere zukünftige Bestellungen auf
                                    unserer Webseite. Die Löschung Ihres Kundenkontos ist jederzeit möglich und
                                    kann entweder durch eine Nachricht an die in dieser Datenschutzerklärung
                                    beschriebene Kontaktmöglichkeit oder über eine dafür vorgesehene Funktion im
                                    Kundenkonto erfolgen. Nach Löschung Ihres Kundenkontos werden Ihre Daten
                                    gelöscht, sofern Sie nicht ausdrücklich in eine weitere Nutzung Ihrer Daten
                                    gemäß Art. 6 Abs. 1 S. 1 lit. a DSGVO eingewilligt haben oder wir uns eine
                                    darüber hinausgehende Datenverwendung vorbehalten, die gesetzlich erlaubt
                                    ist und über die wir Sie in dieser Erklärung informieren.
                                </p>
                                <h3 id="kontaktaufnahme" className="text-xl font-semibold mt-8 mb-4 text-foreground">2.3 Kontaktaufnahme</h3>
                                <p>
                                    Im Rahmen der Kundenkommunikation erheben wir zur Bearbeitung Ihrer Anfragen
                                    gemäß Art. 6 Abs. 1 S. 1 lit. b DSGVO personenbezogene Daten, wenn Sie uns
                                    diese bei einer Kontaktaufnahme mit uns (z.B. per Kontaktformular oder
                                    E-Mail) freiwillig mitteilen. Pflichtfelder werden als solche
                                    gekennzeichnet, da wir in diesen Fällen die Daten zwingend zur Bearbeitung
                                    Ihrer Kontaktaufnahme benötigen. Welche Daten erhoben werden, ist aus den
                                    jeweiligen Eingabeformularen ersichtlich. Nach vollständiger Bearbeitung
                                    Ihrer Anfrage werden Ihre Daten gelöscht, sofern Sie nicht ausdrücklich in
                                    eine weitere Nutzung Ihrer Daten gemäß Art. 6 Abs. 1 S. 1 lit. a DSGVO
                                    eingewilligt haben oder wir uns eine darüber hinausgehende Datenverwendung
                                    vorbehalten, die gesetzlich erlaubt ist und über die wir Sie in dieser
                                    Erklärung informieren.
                                </p>
                                <h2 id="datenverarbeitung_zum_zwecke_der_versandabwicklung">
                                    3.&nbsp;Datenverarbeitung zum Zwecke der Versandabwicklung{" "}
                                </h2>
                                <p>
                                    Zur Vertragserfüllung gemäß Art. 6 Abs. 1 S. 1 lit. b DSGVO geben wir Ihre
                                    Daten an den mit der Lieferung beauftragten Versanddienstleister weiter,
                                    soweit dies zur Lieferung bestellter Waren erforderlich ist. Bei Fragen zu
                                    unseren Dienstleistern und der Grundlage unserer Zusammenarbeit mit ihnen
                                    wenden Sie sich bitte an die in dieser Datenschutzerklärung beschriebene
                                    Kontaktmöglichkeit.
                                </p>
                                <h2 id="datenverarbeitung_zur_zahlungsabwicklung">
                                    4.&nbsp;Datenverarbeitung zur Zahlungsabwicklung{" "}
                                </h2>
                                <p>
                                    Bei der Abwicklung von Zahlungen in unserem Online-Shop arbeiten wir mit
                                    diesen Partnern zusammen: technische Dienstleister, Kreditinstitute,
                                    Zahlungsdienstleister.
                                </p>
                                <h3 id="datenverarbeitung_zur_transaktionsabwicklung" className="text-xl font-semibold mt-8 mb-4 text-foreground">
                                    4.1 Datenverarbeitung zur Transaktionsabwicklung
                                </h3>
                                <p>
                                    Je nach ausgewählter Zahlungsart geben wir die für die Abwicklung der
                                    Zahlungstransaktion notwendigen Daten an unsere technischen Dienstleister,
                                    die im Rahmen einer Auftragsverarbeitung für uns tätig sind, oder an die
                                    beauftragten Kreditinstitute oder an den ausgewählten Zahlungsdienstleister
                                    weiter, soweit dies zur Abwicklung der Zahlung erforderlich ist. Dies dient
                                    der Vertragserfüllung gemäß Art. 6 Abs. 1 S. 1 lit. b DSGVO. Zum Teil
                                    erheben die Zahlungsdienstleister die für die Abwicklung der Zahlung
                                    erforderlichen Daten selbst, z. B. auf ihrer eigenen Webseite oder über eine
                                    technische Einbindung im Bestellprozess. Es gilt insoweit die
                                    Datenschutzerklärung des jeweiligen Zahlungsdienstleisters.
                                    <br /> Bei Fragen zu unseren Partnern für die Zahlungsabwicklung und der
                                    Grundlage unserer Zusammenarbeit mit ihnen wenden Sie sich bitte an die in
                                    dieser Datenschutzerklärung beschriebenen Kontaktmöglichkeit.
                                </p>
                                <h3 id="datenverarbeitung_zum_zwecke_der_betrugsprävention_und_der_optimierung_unserer_zahlungsprozesse" className="text-xl font-semibold mt-8 mb-4 text-foreground">
                                    4.2 Datenverarbeitung zum Zwecke der Betrugsprävention und der Optimierung unserer Zahlungsprozesse
                                </h3>
                                <p>
                                    Gegebenenfalls geben wir unseren Dienstleistern weitere Daten, die sie
                                    zusammen mit den für die Abwicklung der Zahlung notwendigen Daten als unsere
                                    Auftragsverarbeiter zum Zwecke der Betrugsprävention und der Optimierung
                                    unserer Zahlungsprozesse (z.B. Rechnungsstellung, Abwicklung von
                                    angefochtenen Zahlungen, Unterstützung der Buchhaltung) verwenden. Dies
                                    dient gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO der Wahrung unserer im Rahmen
                                    einer Interessensabwägung überwiegenden berechtigten Interessen an unserer
                                    Absicherung gegen Betrug bzw. an einem effizienten Zahlungsmanagement.
                                </p>
                                <h2 id="cookies_und_weitere_technologien">
                                    5.&nbsp;Cookies und weitere Technologien
                                </h2>
                                <h3 id="allgemeine_informationen" className="text-xl font-semibold mt-8 mb-4 text-foreground">5.1 Allgemeine Informationen</h3>
                                <p>
                                    Um den Besuch unserer Webseite attraktiv zu gestalten und die Nutzung
                                    bestimmter Funktionen zu ermöglichen, verwenden wir auf verschiedenen Seiten
                                    Technologien einschließlich sogenannter Cookies.
                                    <br /> Cookies sind kleine Textdateien, die automatisch auf Ihrem Endgerät
                                    gespeichert werden. Einige der von uns verwendeten Cookies werden nach Ende
                                    der Browser-Sitzung, also nach Schließen Ihres Browsers, wieder gelöscht
                                    (sog. Sitzungs-Cookies). Andere Cookies verbleiben auf Ihrem Endgerät und
                                    ermöglichen uns, Ihren Browser beim nächsten Besuch wiederzuerkennen
                                    (persistente Cookies). Die Dauer der Speicherung können Sie der Übersicht in
                                    den Cookie-Einstellungen Ihres Webbrowsers entnehmen.
                                </p>{" "}
                                <p>
                                    <strong>Schutz der Privatsphäre bei Endgeräten</strong>
                                </p>{" "}
                                <p>
                                    Bei Nutzung unseres Online-Angebots setzen wir unbedingt notwendige
                                    Technologien ein, um den ausdrücklich gewünschten Telemediendienst zur
                                    Verfügung stellen zu können. Die Speicherung von Informationen in Ihrem
                                    Endgerät oder der Zugriff auf Informationen, die bereits in Ihrem Endgerät
                                    gespeichert sind, bedürfen insoweit keiner Einwilligung.
                                </p>
                                <p>
                                    Bei nicht unbedingt erforderlichen Funktionen bedarf die Speicherung von
                                    Informationen in Ihrem Endgerät oder der Zugriff auf Informationen, die
                                    bereits in Ihrem Endgerät gespeichert sind, Ihrer Einwilligung. Wir weisen
                                    Sie darauf hin, dass bei Nichterteilung der Einwilligung ggf. Teile der
                                    Webseite nicht uneingeschränkt nutzbar sein können. Ihre etwaig erteilten
                                    Einwilligungen bleiben solange bestehen, bis Sie die jeweiligen
                                    Einstellungen in Ihrem Endgerät anpassen oder zurücksetzen.
                                </p>
                                <p>
                                    <strong>
                                        Etwaig nachgelagerte Datenverarbeitung durch Cookies und weitere
                                        Technologien
                                    </strong>
                                </p>{" "}
                                <p>
                                    Wir verwenden solche Technologien, die für die Nutzung bestimmter Funktionen
                                    unserer Webseite (z.B. Warenkorbfunktion) zwingend erforderlich sind. Durch
                                    diese Technologien werden IP-Adresse, Zeitpunkt des Besuchs, Geräte- und
                                    Browser-Informationen sowie Informationen zu Ihrer Nutzung unserer Webseite
                                    (z. B. Informationen zum Inhalt des Warenkorbs) erhoben und verarbeitet.
                                    Dies dient im Rahmen einer Interessensabwägung überwiegenden berechtigten
                                    Interessen an einer optimierten Darstellung unseres Angebots gemäß Art. 6
                                    Abs. 1 S. 1 lit. f DSGVO und erfolgt gemäß den gesetzlichen Bestimmungen des
                                    § 165 Abs. 3 TKG (Österreich).
                                </p>
                                <p>
                                    Zudem verwenden wir Technologien zur Erfüllung der rechtlichen
                                    Verpflichtungen, denen wir unterliegen (z.B. um Einwilligungen in die
                                    Verarbeitung Ihrer personenbezogenen Daten nachweisen zu können) sowie zu
                                    Webanalyse und Online-Marketing. Weitere Informationen hierzu einschließlich
                                    der jeweiligen Rechtsgrundlage für die Datenverarbeitung finden Sie in den
                                    nachfolgenden Abschnitten dieser Datenschutzerklärung.
                                </p>
                                <p>
                                    Gegebenenfalls verwenden wir darüber hinaus Technologien, die in dieser
                                    Datenschutzerklärung nicht einzeln aufgelistet sind. Nähere Informationen zu
                                    diesen Technologien einschließlich der jeweiligen Rechtsgrundlage für die
                                    Datenverarbeitung finden Sie auf der Usercentrics Plattform.
                                </p>
                                <p>
                                    Diese erreichen Sie unter diesem Link:
                                    www.ecomthek.com/cookie-einstellungen.
                                </p>
                                <p>
                                    <strong>Welche Arten von Cookies werden verwendet?</strong>
                                </p>
                                <p>
                                    <strong>Analytische- / Leistungs – Cookies: </strong>Diese Cookies
                                    ermöglichen es anonymisierte Daten über das Nutzungsverhalten unserer
                                    Besucher zu sammeln. Diese werden von uns dann ausgewertet, um bspw. die
                                    Funktionalität der Webseite zu verbessern und Ihnen interessante Angebote
                                    anzuzeigen.
                                </p>
                                <p>
                                    <strong>Notwendige Cookies:</strong> Diese Cookies sind notwendig, um den
                                    Betrieb unserer Webseite zu ermöglichen. Dazu gehören bspw. Cookies, die es
                                    Ihnen ermöglichen, sich in den Kundebereich einzuloggen, oder etwas in den
                                    Warenkorb zu legen.
                                </p>
                                <p>
                                    <strong>Marketing - Cookies: </strong>Diese Cookies erfassen Ihren Besuch
                                    auf unserer Website, die Seiten, die Sie besucht haben und die Links, die
                                    Sie ausgeführt haben. Wir werden diese Informationen benutzen, um unsere
                                    Website und die Werbung, die Sie angezeigt bekommen, auf Ihre Interessen
                                    zuzuschneiden.
                                </p>
                                <p>
                                    <strong>Funktional - Cookies</strong>: Diese Cookies werden für bestimmte
                                    Funktionalitäten unserer Webseite verwendet, z.B. um einen besseren
                                    Navigationsfluss auf unsere Webseite vorzuschlagen, Ihnen personalisierte
                                    und relevante Informationen aufzuzeigen (bspw. „interessensbasierte
                                    Werbeanzeigen“)
                                </p>
                                <p>
                                    <strong>Cookie-Einstellungen</strong>{" "}
                                </p>
                                <p>
                                    Die Cookie-Einstellungen für Ihren Browser finden Sie unter den folgenden
                                    Links:{" "}
                                    <a
                                        href="https://support.microsoft.com/de-de/help/4027947/microsoft-edge-delete-cookies"
                                        target="_blank"
                                    >
                                        Microsoft Edge™
                                    </a>{" "}
                                    /{" "}
                                    <a
                                        href="https://support.apple.com/de-de/guide/safari/sfri11471/12.0/mac/10.14"
                                        target="_blank"
                                    >
                                        Safari™
                                    </a>{" "}
                                    /{" "}
                                    <a
                                        href="https://support.google.com/chrome/answer/95647?hl=de&hlrm=en"
                                        target="_blank"
                                    >
                                        Chrome™
                                    </a>{" "}
                                    /{" "}
                                    <a
                                        href="https://support.mozilla.org/de/kb/cookies-informationen-websites-auf-ihrem-computer"
                                        target="_blank"
                                    >
                                        Firefox™
                                    </a>{" "}
                                    /{" "}
                                    <a
                                        href="https://help.opera.com/de/latest/web-preferences/#cookies"
                                        target="_blank"
                                    >
                                        Opera™
                                    </a>
                                </p>{" "}
                                <p>
                                    Soweit Sie in die Verwendung der Technologien gemäß Art. 6 Abs. 1 S. 1 lit.
                                    a DSGVO eingewilligt haben, können Sie Ihre Einwilligung jederzeit
                                    widerrufen durch eine Nachricht an die in der Datenschutzerklärung
                                    beschriebenen Kontaktmöglichkeit. Alternativ können Sie auch folgenden Link
                                    aufrufen: www.ecomthek.com/cookie-einstellungen. Bei der Nichtannahme von
                                    Cookies kann die Funktionalität unserer Webseite eingeschränkt sein.
                                </p>
                                <h3 id="einsatz_von_usercentrics_consent_management_plattform_zur_verwaltung_von_einwilligungen" className="text-xl font-semibold mt-8 mb-4 text-foreground">
                                    5.2 Einsatz von Usercentrics Consent Management Plattform zur Verwaltung von Einwilligungen
                                </h3>
                                <p>
                                    Auf unserer Webseite setzen wir die{" "}
                                    <a href="https://usercentrics.com/de/" target="_blank">
                                        Usercentrics Consent Management Plattform
                                    </a>{" "}
                                    („Usercentrics“) ein, um Sie über die Cookies und die anderen Technologien
                                    zu informieren, die wir auf unserer Webseite verwenden, sowie Ihre
                                    gegebenenfalls gesetzlich erforderliche Einwilligung in die Verarbeitung
                                    Ihrer personenbezogenen Daten durch diese Technologien einzuholen, zu
                                    verwalten und zu dokumentieren. Dies ist gemäß Art. 6 Abs. 1 S. 1 lit. c
                                    DSGVO zur Erfüllung unserer rechtlichen Verpflichtung gemäß Art. 7 Abs. 1
                                    DSGVO erforderlich, Ihre Einwilligung in die Verarbeitung Ihrer
                                    personenbezogenen Daten nachweisen zu können, der wir unterliegen.
                                    Usercentrics ist ein Angebot der Usercentrics GmbH, Sendlinger Straße 7,
                                    80331 München, Deutschland die in unserem Auftrag Ihre Daten verarbeitet.
                                    Bei Besuch unserer Webseite speichert der Webserver von Usersentrics ein
                                    sogenanntes Server-Logfile, das auch Ihre anonymisierte IP-Adresse, Datum
                                    und Uhrzeit des Besuchs, Geräte- und Browser-Informationen sowie
                                    Informationen zu Ihrem Einwilligungsverhalten enthält. Ihre Daten werden
                                    nach drei Jahren gelöscht, sofern Sie nicht ausdrücklich in eine weitere
                                    Nutzung Ihrer Daten gemäß Art. 6 Abs. 1 S. 1 lit. a DSGVO eingewilligt haben
                                    oder wir uns eine darüber hinausgehende Datenverwendung vorbehalten, die
                                    gesetzlich erlaubt ist und über die wir Sie in dieser Erklärung informieren.
                                </p>{" "}
                                <p>
                                    Unsere Dienstleister sitzen und/oder verwenden Server in folgenden Ländern,
                                    für die die Europäische Kommission durch Beschluss ein angemessenes
                                    Datenschutzniveau festgestellt hat: USA.
                                    <br /> <br /> Der Angemessenheitsbeschluss für die USA gilt als Grundlage
                                    für die Drittlandsübermittlung, soweit der jeweilige Dienstleister
                                    zertifiziert ist. Eine Zertifizierung liegt vor.
                                </p>
                                <h2 id="einsatz_von_cookies_und_anderen_technologien">
                                    6.&nbsp;Einsatz von Cookies und anderen Technologien{" "}
                                </h2>
                                <p>
                                    Wir verwenden auf unserer Webseite die nachfolgenden Cookies und andere
                                    Technologien von Drittanbietern. Soweit bei den einzelnen Technologien
                                    nichts Abweichendes angegeben ist, erfolgt dies auf Grundlage Ihrer
                                    Einwilligung nach Art. 6 Abs. 1 S. 1 lit. a DSGVO. Nach Zweckfortfall und
                                    Ende des Einsatzes der jeweiligen Technologie durch uns werden die in diesem
                                    Zusammenhang erhobenen Daten gelöscht. Sie können Ihre Einwilligung
                                    jederzeit mit Wirkung für die Zukunft widerrufen. Weitere Informationen zu
                                    Ihren Widerrufsmöglichkeiten finden Sie in dem Abschnitt &quot;Cookies und
                                    weitere Technologien&quot;. Weitere Informationen einschließlich der Grundlage
                                    unserer Zusammenarbeit mit den einzelnen Anbietern finden Sie bei den
                                    einzelnen Technologien. Bei Fragen zu den Anbietern und der Grundlage
                                    unserer Zusammenarbeit mit ihnen wenden Sie sich bitte an die in dieser
                                    Datenschutzerklärung beschriebenen Kontaktmöglichkeit.
                                </p>
                                <h3 id="einsatz_von_google-diensten" className="text-xl font-semibold mt-8 mb-4 text-foreground">
                                    6.1 Einsatz von Google-Diensten
                                </h3>
                                <p>
                                    Wir verwenden die nachfolgend dargestellten Technologien der Google Ireland
                                    Ltd., Gordon House, Barrow Street, Dublin 4, Irland („Google“). Die durch
                                    die Google Technologien automatisch erhobenen Informationen über Ihre
                                    Nutzung unserer Webseite werden in der Regel an einen Server der Google LLC,
                                    1600 Amphitheatre Parkway Mountain View, CA 94043, USA übertragen und dort
                                    gespeichert. Soweit bei den einzelnen Technologien nichts Abweichendes
                                    angeben ist, erfolgt die Datenverarbeitung auf Grundlage einer für die
                                    jeweilige Technologie geschlossenen Vereinbarung zwischen gemeinsam
                                    Verantwortlichen gemäß Art. 26 DSGVO. Weitergehende Informationen über die
                                    Datenverarbeitung durch Google finden Sie in den{" "}
                                    <a href="https://policies.google.com/privacy?hl=de" target="_blank">
                                        Datenschutzhinweisen von Google
                                    </a>
                                    .
                                </p>{" "}
                                <p>
                                    Unsere Dienstleister sitzen und/oder verwenden Server in Ländern außerhalb
                                    der EU und des EWR, für die die Europäische Kommission durch Beschluss ein
                                    angemessenes Datenschutzniveau festgestellt hat.
                                </p>{" "}
                                <p>
                                    Unsere Dienstleister sitzen und/oder verwenden Server in Ländern außerhalb
                                    der EU und des EWR. Für diese Länder liegt kein Angemessenheitsbeschluss der
                                    Europäischen Kommission vor. Unsere Zusammenarbeit mit ihnen stützt sich auf
                                    Standarddatenschutzklauseln der Europäischen Kommission.&nbsp;
                                </p>
                                <h4 id="google_analytics" className="text-lg font-semibold mt-6 mb-3 text-muted-foreground">Google Analytics</h4>
                                <p>
                                    Zum Zweck der Webseitenanalyse werden mit Google Analytics Daten
                                    (IP-Adresse, Zeitpunkt des Besuchs, Geräte- und Browser-Informationen sowie
                                    Informationen zu Ihrer Nutzung unserer Webseite) automatisch erhoben und
                                    gespeichert, aus denen unter Verwendung von Pseudonymen Nutzungsprofile
                                    erstellt werden. Hierzu können Cookies eingesetzt werden. Wenn Sie unsere
                                    Webseite aus der EU besuchen, wird Ihre IP-Adresse auf einem Server mit
                                    Stand in der EU zur Ableitung von Standortdaten gespeichert und danach
                                    sofort gelöscht, bevor der Traffic zur Verarbeitung auf weiteren Servern von
                                    Google weitergeleitet wird. Die Datenverarbeitung erfolgt auf Grundlage
                                    einer Vereinbarung über die Auftragsverarbeitung durch Google.
                                </p>
                                <p>
                                    Zum Zwecke der optimierten Vermarktung unserer Webseite haben wir die
                                    <strong>
                                        {" "}
                                        Datenfreigabeeinstellungen für &quot;Google-Produkte und -Dienste&quot;{" "}
                                    </strong>
                                    aktiviert. So kann Google auf die von Google Analytics erhobenen und
                                    verarbeiteten Daten zugreifen und anschließend zur Verbesserung der
                                    Google-Dienste verwenden. Die Datenfreigabe an Google im Rahmen dieser
                                    Datenfreigabeeinstellungen erfolgt auf Grundlage einer zusätzlichen
                                    Vereinbarung zwischen Verantwortlichen. Wir haben keinen Einfluss auf die
                                    anschließende Datenverarbeitung durch Google.
                                </p>
                                <p>
                                    Zum Zwecke der optimierten Vermarktung unserer Webseite nutzen wir die sog.{" "}
                                    <strong>User-ID-Funktion</strong>. Mithilfe dieser Funktion können wir Ihren
                                    Interaktionsdaten einer oder mehreren Sitzungen auf unseren
                                    Online-Auftritten eine eindeutige, permanente ID zuweisen und somit Ihr
                                    Nutzerverhalten geräte- und sitzungsüberübergreifend analysieren.
                                </p>
                                <p>
                                    Zur Webanalyse wird durch die Erweiterungsfunktion von Google Analytics{" "}
                                    <strong>Google Signals</strong> ein sog. „Cross-Device Tracking“ ermöglicht.
                                    Soweit Ihre internetfähigen Geräte mit Ihrem Google-Konto verknüpft sind und
                                    Sie die Einstellung „personalisierte Werbung“ in Ihrem Google Konto
                                    aktiviert haben, kann Google Berichte über Ihr Nutzungsverhalten (insb. die
                                    geräteübergreifenden Nutzerzahlen) erstellen, auch wenn Sie Ihr Endgerät
                                    wechseln. Eine Verarbeitung von personenbezogenen Daten durch uns findet
                                    insoweit nicht statt, wir erhalten lediglich auf Basis von Google Signals
                                    erstellte Statistiken.
                                </p>
                                <h4 id="youtube_video_plugin" className="text-lg font-semibold mt-6 mb-3 text-muted-foreground">YouTube Video Plugin</h4>
                                <p>
                                    Zur Einbindung von Inhalten Dritter werden über das YouTube Video Plugin in
                                    dem von uns verwendeten erweiterten Datenschutzmodus Daten (IP-Adresse,
                                    Zeitpunkt des Besuchs, Geräte- und Browser-Informationen) erhoben, an Google
                                    übermittelt und anschließend von Google verarbeitet, nur wenn sie ein Video
                                    abspielen.
                                </p>
                                <h4 id="google_fonts" className="text-lg font-semibold mt-6 mb-3 text-muted-foreground">Google Fonts</h4>
                                <p>
                                    Zur einheitlichen Darstellung der Inhalte auf unserer Webseite werden durch
                                    den Script Code „Google Fonts“ Daten (IP-Adresse, Zeitpunkt des Besuchs,
                                    Geräte- und Browser-Informationen) erhoben, an Google übermittelt und
                                    anschließend von Google verarbeitet. Wir haben keinen Einfluss auf diese
                                    anschließende Datenverarbeitung.
                                </p>
                                <h4 id="google_tag_manager" className="text-lg font-semibold mt-6 mb-3 text-muted-foreground">Google Tag Manager</h4>
                                <p>
                                    Durch den Google Tag Manager können wir verschiedene Codes und Dienste auf
                                    unserer Webseite verwalten. Bei der Implementierung der einzelnen Tags
                                    verarbeitet Google unter Umständen auch personenbezogene Daten (z.B. IP
                                    Adresse, Online-Kennungen (u.a. Cookies)). Die Datenverarbeitung erfolgt auf
                                    Grundlage einer Vereinbarung über die Auftragsverarbeitung durch Google.{" "}
                                </p>{" "}
                                <p>
                                    Durch den Einsatz des Google Tag Managers lässt sich eine Einbindung
                                    verschiedener Dienste/Technologien erreichen. <br /> Sofern Sie den Einsatz
                                    einzelner Trackingdienste nicht wünschen und diese daher deaktiviert haben,
                                    bleibt die Deaktivierung für alle betroffenen Tracking-Tags bestehen, die
                                    durch den Google Tag Manager eingebunden werden.{" "}
                                </p>
                                <h3 id="einsatz_von_facebook-diensten" className="text-xl font-semibold mt-8 mb-4 text-foreground">
                                    6.2 Einsatz von Facebook-Diensten
                                </h3>
                                <h4 id="einsatz_von_facebook_pixel" className="text-lg font-semibold mt-6 mb-3 text-muted-foreground">Einsatz von Facebook Pixel</h4>
                                <p>
                                    Wir verwenden das Facebook Pixel im Rahmen der nachfolgend dargestellten
                                    Technologien der{" "}
                                    <a href="http://de-de.facebook.com/facebookdublin/" target="_blank">
                                        Meta Platforms Ireland Ltd.
                                    </a>
                                    , Block J, Serpentine Avenue, Dublin 4, Irland („Facebook (by Meta)“ bzw.
                                    “Meta Platforms Ireland“). Mit dem Facebook Pixel werden Daten (IP-Adresse,
                                    Zeitpunkt des Besuchs, Geräte- und Browser-Informationen sowie Informationen
                                    zu Ihrer Nutzung unserer Webseite anhand von uns vorgegebenen Ereignissen
                                    wie z.B. Besuch einer Webseite oder Newsletteranmeldung) automatisch erhoben
                                    und gespeichert, aus denen unter Verwendung von Pseudonymen Nutzungsprofile
                                    erstellt werden. Im Rahmen des sog. erweiterten Datenabgleichs werden
                                    darüber hinaus Informationen zu Abgleichzwecken gehasht erhoben und
                                    gespeichert, mit denen Einzelpersonen identifiziert werden können (z.B.
                                    Namen, E-Mail-Adressen und Telefonnummern). Hierzu wird bei Besuch unserer
                                    Webseite durch das Facebook Pixel automatisch ein Cookie gesetzt, das
                                    automatisch mittels einer pseudonymen CookieID eine Wiedererkennung Ihres
                                    Browsers beim Besuch anderer Webseiten ermöglicht. Facebook (by Meta) wird
                                    diese Informationen mit weiteren Daten aus Ihrem Facebook-Konto
                                    zusammenführen und benutzen, um Reports über die Webseitenaktivitäten
                                    zusammenzustellen und um weitere mit der Webseitennutzung verbundene
                                    Dienstleistungen, insbesondere personalisierte und gruppenbasierte Werbung
                                    zu erbringen.
                                    <br /> Die durch die Facebook (by Meta) Technologien automatisch erhobenen
                                    Informationen über Ihre Nutzung unserer Webseite werden in der Regel an
                                    einen Server der Meta Platforms, Inc., 1601 Willow Road, Menlo Park,
                                    California 94025, USA übertragen und dort gespeichert. Weitergehende
                                    Informationen über die Datenverarbeitung durch Facebook finden Sie in den{" "}
                                    <a
                                        href="https://de-de.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0"
                                        target="_blank"
                                    >
                                        Datenschutzhinweisen von Facebook (by Meta)
                                    </a>
                                    . Unsere Dienstleister sitzen und/oder verwenden Server in folgenden
                                    Ländern, für die die Europäische Kommission durch Beschluss ein angemessenes
                                    Datenschutzniveau festgestellt hat: USA, Kanada, Japan, Südkorea,
                                    Neuseeland, Vereinigtes Königreich, Argentinien. Der
                                    Angemessenheitsbeschluss für die USA gilt als Grundlage für die
                                    Drittlandsübermittlung, soweit der jeweilige Dienstleister zertifiziert ist.
                                    Eine Zertifizierung liegt vor. Unsere Dienstleister sitzen und/oder
                                    verwenden Server in diesen Ländern: Australien, Hongkong, Indien,
                                    Indonesien, Malaysia, Singapur, Thailand, Taiwan, Brasilien, Mexiko. <br />{" "}
                                    Für diese Länder liegt kein Angemessenheitsbeschluss der Europäischen
                                    Kommission vor. Unsere Zusammenarbeit mit ihnen stützt sich auf diese
                                    Garantien:&nbsp; Standarddatenschutzklauseln der Europäischen Kommission.
                                </p>
                                <h4 id="facebook_analysen" className="text-lg font-semibold mt-6 mb-3 text-muted-foreground">Facebook Analysen</h4>
                                <p>
                                    Im Rahmen der Facebook Business-Tools werden aus den mit dem Facebook Pixel
                                    erhobenen Daten über Ihre Nutzung unserer Webseite Statistiken über
                                    Besucheraktivitäten auf unserer Webseite erstellt. Die Datenverarbeitung
                                    erfolgt auf Grundlage einer Vereinbarung über die Auftragsverarbeitung durch
                                    Facebook (by Meta). Ihre Analyse dient der optimalen Darstellung und
                                    Vermarktung unserer Webseite.{" "}
                                </p>
                                <h4 id="facebook_ads" className="text-lg font-semibold mt-6 mb-3 text-muted-foreground">Facebook Ads</h4>
                                <p>
                                    Über Facebook Ads werben wir für diese Website auf Facebook (by Meta) sowie
                                    auf anderen Plattformen. Wir bestimmen die Parameter der jeweiligen
                                    Werbekampagne. Für die genaue Umsetzung, insbesondere die Entscheidung über
                                    die Platzierung der Anzeigen bei einzelnen Nutzern, ist Facebook (by Meta)
                                    verantwortlich. Soweit bei den einzelnen Technologien nichts Abweichendes
                                    angeben ist, erfolgt die Datenverarbeitung auf Grundlage einer Vereinbarung
                                    zwischen gemeinsam Verantwortlichen gemäß Art. 26 DSGVO. Die gemeinsame
                                    Verantwortlichkeit beschränkt sich auf die Erhebung der Daten und ihre
                                    Übermittlung an Meta Platforms Ireland. Die anschließende Datenverarbeitung
                                    durch Meta Platforms Ireland ist hiervon nicht erfasst.
                                </p>
                                <p>
                                    Auf Grundlage der über Facebook Pixel erstellten Statistiken über
                                    Besucheraktivitäten auf unserer Webseite betreiben wir über Facebook{" "}
                                    <strong>Custom Audience</strong> gruppenbasierte Werbung auf Facebook, indem
                                    wir die Merkmale der jeweiligen Zielgruppe bestimmen. Im Rahmen des zur
                                    Bestimmung der jeweiligen Zielgruppe stattfindenden erweiterten
                                    Datenabgleichs (s.o.) handelt Facebook (by Meta) als unser
                                    Auftragsverarbeiter.
                                </p>
                                <p>
                                    Auf Grundlage der vom Facebook Pixel gesetzten pseudonymen Cookie-ID und der
                                    erhobenen Daten über Ihr Nutzungsverhaltens auf unserer Webseite betreiben
                                    wir über Facebook Pixel <strong>Remarketing</strong> personalisierte
                                    Werbung.
                                </p>
                                <p>
                                    Über Facebook Pixel <strong>Conversions </strong>messen wir zur Webanalyse
                                    und Ereignisverfolgung Ihr nachfolgendes Nutzungsverhalten, wenn Sie über
                                    eine Werbeanzeige von Facebook Ads unsere Website gelangt sind. Die
                                    Datenverarbeitung erfolgt auf Grundlage einer Vereinbarung über die
                                    Auftragsverarbeitung durch Facebook (by Meta).
                                </p>
                                <h2 id="social_media">7.&nbsp;Social Media</h2>
                                <h3 id="social_buttons_von_facebook_(by_meta),_x_(ehemals:_twitter),_instagram_(by_meta),_pinterest,_whatsapp" className="text-xl font-semibold mt-8 mb-4 text-foreground">
                                    7.1 Social Buttons von Facebook (by Meta), X (ehemals: Twitter), Instagram (by Meta), Pinterest, Whatsapp
                                </h3>
                                <p>
                                    Auf unserer Webseite werden Social Buttons von sozialen Netzwerken
                                    verwendet. Diese sind lediglich als HTML-Links in die Seite eingebunden, so
                                    dass beim Aufruf unserer Webseite noch keine Verbindung mit den Servern des
                                    jeweiligen Anbieters hergestellt wird. Klicken Sie auf einen der Buttons,
                                    öffnet sich die Webseite des jeweiligen sozialen Netzwerks in einem neuen
                                    Fenster Ihres Browsers Dort können Sie z.B. den Like- oder Share-Button
                                    betätigen.
                                </p>
                                <h3 id="unsere_onlinepräsenz_auf_facebook_(by_meta),_x_(ehemals:_twitter)_,_instagram_(by_meta),_youtube,_pinterest,_linkedin,_xing" className="text-xl font-semibold mt-8 mb-4 text-foreground">
                                    7.2 Unsere Onlinepräsenz auf Facebook (by Meta), X (ehemals: Twitter), Instagram (by Meta), Youtube, Pinterest, LinkedIn, Xing
                                </h3>
                                <p>
                                    Soweit Sie hierzu Ihre Einwilligung nach Art. 6 Abs. 1 S. 1 lit. a DSGVO
                                    gegenüber dem jeweiligen Social Media Betreiber erteilt haben, werden bei
                                    Besuch unserer Onlinepräsenzen auf den in der oben genannten sozialen Medien
                                    Ihre Daten für Marktforschungs- und Werbezwecke automatisch erhoben und
                                    gespeichert, aus denen unter Verwendung von Pseudonymen Nutzungsprofile
                                    erstellt werden. Diese können verwendet werden, um z.B. Werbeanzeigen
                                    innerhalb und außerhalb der Plattformen zu schalten, die mutmaßlich Ihren
                                    Interessen entsprechen. Hierzu werden im Regelfall Cookies eingesetzt. Die
                                    detaillierten Informationen zur Verarbeitung und Nutzung der Daten durch den
                                    jeweiligen Social Media Betreiber sowie eine Kontaktmöglichkeit und Ihre
                                    diesbezüglichen Rechte und Einstellungsmöglichkeiten zum Schutz Ihrer
                                    Privatsphäre, entnehmen Sie bitte den unten verlinkten Datenschutzhinweisen
                                    der Anbieter. Sollten Sie diesbezüglich dennoch Hilfe benötigen, können Sie
                                    sich an uns wenden.
                                </p>
                                <p>
                                    <a href="http://www.facebook.com/about/privacy/">
                                        <strong>Facebook </strong>(by Meta)
                                    </a>{" "}
                                    ist ein Angebot der Meta Platforms Ireland Ltd., Block J, Serpentine Avenue,
                                    Dublin 4, Irland („Meta Platforms Ireland“). Die durch Meta Platforms
                                    Ireland automatisch erhobenen Informationen über Ihre Nutzung unserer
                                    Online-Präsenz auf Facebook (by Meta) werden in der Regel an einen Server
                                    der Meta Platforms, Inc., 1601 Willow Road, Menlo Park, California 94025,
                                    USA übertragen und dort gespeichert. Die Datenverarbeitung im Rahmen des
                                    Besuchs einer Facebook (by Meta) Fanpage erfolgt auf Grundlage einer
                                    Vereinbarung zwischen gemeinsam Verantwortlichen gemäß Art. 26 DSGVO.
                                    Weitere Informationen (Informationen zu Insights-Daten) finden Sie{" "}
                                    <a
                                        href="https://www.facebook.com/legal/terms/information_about_page_insights_data"
                                        target="_blank"
                                    >
                                        hier
                                    </a>
                                    .
                                </p>{" "}
                                <p>
                                    Unsere Dienstleister sitzen und/oder verwenden Server in folgenden Ländern,
                                    für die die Europäische Kommission durch Beschluss ein angemessenes
                                    Datenschutzniveau festgestellt hat: USA, Kanada, Japan, Südkorea,
                                    Neuseeland, Vereinigtes Königreich, Argentinien.
                                </p>{" "}
                                <p>
                                    Der Angemessenheitsbeschluss für die USA gilt als Grundlage für die
                                    Drittlandsübermittlung, soweit der jeweilige Dienstleister zertifiziert ist.
                                    Eine Zertifizierung liegt vor.
                                </p>{" "}
                                <p>
                                    Unsere Dienstleister sitzen und/oder verwenden Server in diesen Ländern:
                                    Australien, Hongkong, Indien, Indonesien, Malaysia, Singapur, Thailand,
                                    Taiwan, Brasilien, Mexiko.
                                    <br /> Für diese Länder liegt kein Angemessenheitsbeschluss der Europäischen
                                    Kommission vor. Unsere Zusammenarbeit mit ihnen stützt sich auf diese
                                    Garantien:&nbsp; Standarddatenschutzklauseln der Europäischen Kommission.
                                </p>
                                <p>
                                    <a href="http://twitter.com/de/privacy" target="_blank">
                                        <strong>X</strong>
                                    </a>{" "}
                                    ist ein Angebot der Twitter International Unlimited Company, One Cumberland
                                    Place, Fenian Street, Dublin 2, D02 AX07, Irland („X“). Die von X
                                    automatisch erhobenen Informationen über Ihre Nutzung unserer Online-Präsenz
                                    auf X werden in der Regel an einen Server der X Corp., 1355 Market Street,
                                    Suite 900, San Francisco, CA 94103, USA übertragen und dort gespeichert.
                                </p>{" "}
                                <p>
                                    Unsere Dienstleister sitzen und/oder verwenden Server in Ländern außerhalb
                                    der EU und des EWR, für die die Europäische Kommission durch Beschluss ein
                                    angemessenes Datenschutzniveau festgestellt hat.
                                </p>{" "}
                                <p>
                                    Unsere Dienstleister sitzen und/oder verwenden Server in Ländern außerhalb
                                    der EU und des EWR. Für diese Länder liegt kein Angemessenheitsbeschluss der
                                    Europäischen Kommission vor. Unsere Zusammenarbeit mit ihnen stützt sich auf
                                    Standarddatenschutzklauseln der Europäischen Kommission.&nbsp;
                                </p>
                                <p>
                                    <a href="http://help.instagram.com/519522125107875" target="_blank">
                                        <strong>Instagram</strong> (by Meta)
                                    </a>{" "}
                                    ist ein Angebot der Meta Platforms Ireland Ltd., Block J, Serpentine Avenue,
                                    Dublin 4, Irland („Meta Platforms Ireland“) Die durch Meta Platforms Ireland
                                    automatisch erhobenen Informationen über Ihre Nutzung unserer Online-Präsenz
                                    auf Instagram werden in der Regel an einen Server der Meta Platforms, Inc.,
                                    1601 Willow Road, Menlo Park, CA 94025, USA, Menlo Park, California 94025,
                                    USA übertragen und dort gespeichert. Die Datenverarbeitung im Rahmen des
                                    Besuchs einer Instagram (by Meta) Fanpage erfolgt auf Grundlage einer
                                    Vereinbarung zwischen gemeinsam Verantwortlichen gemäß Art. 26 DSGVO.
                                    Weitere Informationen (Informationen zu Insights-Daten) finden Sie{" "}
                                    <a
                                        href="https://www.facebook.com/legal/terms/information_about_page_insights_data"
                                        target="_blank"
                                    >
                                        hier
                                    </a>
                                    .
                                </p>{" "}
                                <p>
                                    Unsere Dienstleister sitzen und/oder verwenden Server in folgenden Ländern,
                                    für die die Europäische Kommission durch Beschluss ein angemessenes
                                    Datenschutzniveau festgestellt hat: USA, Kanada, Japan, Südkorea,
                                    Neuseeland, Vereinigtes Königreich, Argentinien.
                                </p>{" "}
                                <p>
                                    Der Angemessenheitsbeschluss für die USA gilt als Grundlage für die
                                    Drittlandsübermittlung, soweit der jeweilige Dienstleister zertifiziert ist.
                                    Eine Zertifizierung liegt vor.
                                </p>{" "}
                                <p>
                                    Unsere Dienstleister sitzen und/oder verwenden Server in diesen Ländern:
                                    Australien, Hongkong, Indien, Indonesien, Malaysia, Singapur, Thailand,
                                    Taiwan, Brasilien, Mexiko.
                                    <br /> Für diese Länder liegt kein Angemessenheitsbeschluss der Europäischen
                                    Kommission vor. Unsere Zusammenarbeit mit Ihnen stützt sich auf diese
                                    Garantien: Standarddatenschutzklauseln der Europäischen Kommission.
                                </p>
                                <p>
                                    <a href="https://policies.google.com/privacy?hl=de" target="_blank">
                                        <strong>YouTube</strong>
                                    </a>{" "}
                                    ist ein Angebot der Google Ireland Ltd., Gordon House, Barrow Street, Dublin
                                    4, Irland („Google“). Die von Google automatisch erhobenen Informationen
                                    über Ihre Nutzung unserer Online-Präsenz auf YouTube werden in der Regel an
                                    einen Server der Google LLC, 1600 Amphitheatre Parkway Mountain View, CA
                                    94043, USA übertragen und dort gespeichert.
                                </p>{" "}
                                <p>
                                    Unsere Dienstleister sitzen und/oder verwenden Server in Ländern außerhalb
                                    der EU und des EWR, für die die Europäische Kommission durch Beschluss ein
                                    angemessenes Datenschutzniveau festgestellt hat.
                                </p>{" "}
                                <p>
                                    Unsere Dienstleister sitzen und/oder verwenden Server in Ländern außerhalb
                                    der EU und des EWR. Für diese Länder liegt kein Angemessenheitsbeschluss der
                                    Europäischen Kommission vor. Unsere Zusammenarbeit mit ihnen stützt sich auf
                                    Standarddatenschutzklauseln der Europäischen Kommission.&nbsp;
                                </p>
                                <p>
                                    <a href="https://policy.pinterest.com/de/privacy-policy" target="_blank">
                                        <strong>Pinterest </strong>
                                    </a>
                                    ist ein Angebot der Pinterest Europe Ltd., Palmerston House, 2nd Floor,
                                    Fenian Street, Dublin 2, Irland („Pinterest“). Die von Pinterest automatisch
                                    erhobenen Informationen über Ihre Nutzung unserer Online-Präsenz auf
                                    Pinterest werden in der Regel an einen Server der Pinterest, Inc., 505
                                    Brannan St., San Francisco, CA 94107, USA übertragen und dort gespeichert.
                                </p>{" "}
                                <p>
                                    Unsere Dienstleister sitzen und/oder verwenden Server in Ländern außerhalb
                                    der EU und des EWR, für die die Europäische Kommission durch Beschluss ein
                                    angemessenes Datenschutzniveau festgestellt hat.
                                </p>{" "}
                                <p>
                                    Unsere Dienstleister sitzen und/oder verwenden Server in Ländern außerhalb
                                    der EU und des EWR. Für diese Länder liegt kein Angemessenheitsbeschluss der
                                    Europäischen Kommission vor. Unsere Zusammenarbeit mit ihnen stützt sich auf
                                    Standarddatenschutzklauseln der Europäischen Kommission.&nbsp;
                                </p>
                                <p>
                                    <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank">
                                        <strong>LinkedIn </strong>
                                    </a>
                                    ist ein Angebot der LinkedIn Ireland Unlimited Company, Wilton Place, Dublin
                                    2, Irland („LinkedIn“). Die von LinkedIn automatisch erhobenen Informationen
                                    über Ihre Nutzung unserer Online-Präsenz auf LinkedIn werden in der Regel an
                                    einen Server der LinkedIn Corporation, 1000 W. Maude Avenue, Sunnyvale, CA
                                    94085, USA übertragen und dort gespeichert.
                                </p>{" "}
                                <p>
                                    Unsere Dienstleister sitzen und/oder verwenden Server in folgenden Ländern,
                                    für die die Europäische Kommission durch Beschluss ein angemessenes
                                    Datenschutzniveau festgestellt hat: USA.
                                </p>{" "}
                                <p>
                                    Der Angemessenheitsbeschluss für die USA gilt als Grundlage für die
                                    Drittlandsübermittlung, soweit der jeweilige Dienstleister zertifiziert ist.
                                    Eine Zertifizierung liegt vor.
                                </p>
                                <p>
                                    <a href="https://privacy.xing.com/de/datenschutzerklaerung" target="_blank">
                                        <strong>Xing </strong>
                                    </a>
                                    ist ein Angebot der New Work SE, Am Strandkai 1, 20457, Hamburg,
                                    Deutschland.
                                </p>
                                <h2 id="kontaktmöglichkeiten_und_ihre_rechte">
                                    8.&nbsp;Kontaktmöglichkeiten und Ihre Rechte
                                </h2>
                                <h3 id="ihre_rechte" className="text-xl font-semibold mt-8 mb-4 text-foreground">8.1 Ihre Rechte</h3>
                                <p>Als Betroffener haben Sie folgende Rechte:</p>{" "}
                                <ul>
                                    {" "}
                                    <li>
                                        gemäß Art. 15 DSGVO das Recht, in dem dort bezeichneten Umfang Auskunft
                                        über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen;
                                    </li>{" "}
                                    <li>
                                        gemäß Art. 16 DSGVO das Recht, unverzüglich die Berichtigung unrichtiger
                                        oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten
                                        zu verlangen;
                                    </li>{" "}
                                    <li>
                                        gemäß Art. 17 DSGVO das Recht, die Löschung Ihrer bei uns gespeicherten
                                        personenbezogenen Daten zu verlangen, soweit nicht die weitere
                                        Verarbeitung{" "}
                                        <ul>
                                            {" "}
                                            <li>
                                                zur Ausübung des Rechts auf freie Meinungsäußerung und Information;
                                            </li>{" "}
                                            <li>zur Erfüllung einer rechtlichen Verpflichtung;</li>{" "}
                                            <li>aus Gründen des öffentlichen Interesses oder</li>{" "}
                                            <li>
                                                zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
                                                erforderlich ist;
                                            </li>{" "}
                                        </ul>{" "}
                                    </li>{" "}
                                    <li>
                                        gemäß Art. 18 DSGVO das Recht, die Einschränkung der Verarbeitung Ihrer
                                        personenbezogenen Daten zu verlangen, soweit{" "}
                                        <ul>
                                            {" "}
                                            <li>die Richtigkeit der Daten von Ihnen bestritten wird;</li>{" "}
                                            <li>
                                                die Verarbeitung unrechtmäßig ist, Sie aber deren Löschung ablehnen;
                                            </li>{" "}
                                            <li>
                                                wir die Daten nicht mehr benötigen, Sie diese jedoch zur
                                                Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
                                                benötigen oder
                                            </li>{" "}
                                            <li>
                                                Sie gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung eingelegt
                                                haben;
                                            </li>{" "}
                                        </ul>{" "}
                                    </li>{" "}
                                    <li>
                                        gemäß Art. 20 DSGVO das Recht, Ihre personenbezogenen Daten, die Sie uns
                                        bereitgestellt haben, in einem strukturierten, gängigen und
                                        maschinenlesbaren Format zu erhalten oder die Übermittlung an einen
                                        anderen Verantwortlichen zu verlangen;
                                    </li>{" "}
                                    <li>
                                        gemäß Art. 77 DSGVO das Recht, sich bei einer Aufsichtsbehörde zu
                                        beschweren. In der Regel können Sie sich hierfür an die Aufsichtsbehörde
                                        Ihres üblichen Aufenthaltsortes oder Arbeitsplatzes oder unseres
                                        Unternehmenssitzes wenden.
                                    </li>{" "}
                                </ul>
                                <table border={1} cellPadding={1} cellSpacing={1} style={{ width: "100%" }}>
                                    
                                    <tbody>
                                    
                                        <tr>
                                   
                                            <td>
                                   
                                                <p>
                                                    <strong>Widerspruchsrecht</strong>
                                                </p>
                                                <p>
                                                    Soweit wir zur Wahrung unserer im Rahmen einer Interessensabwägung
                                                    überwiegenden berechtigten Interessen personenbezogene Daten wie
                                                    oben erläutert verarbeiten, können Sie dieser Verarbeitung mit
                                                    Wirkung für die Zukunft widersprechen. Erfolgt die Verarbeitung zu
                                                    Zwecken des Direktmarketings, können Sie dieses Recht jederzeit wie
                                                    oben beschrieben ausüben. Soweit die Verarbeitung zu anderen Zwecken
                                                    erfolgt, steht Ihnen ein Widerspruchsrecht nur bei Vorliegen von
                                                    Gründen, die sich aus Ihrer besonderen Situation ergeben, zu.
                                                </p>
                                                <p>
                                                    Nach Ausübung Ihres Widerspruchsrechts werden wir Ihre
                                                    personenbezogenen Daten nicht weiter zu diesen Zwecken verarbeiten,
                                                    es sei denn, wir können zwingende schutzwürdige Gründe für die
                                                    Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten
                                                    überwiegen, oder wenn die Verarbeitung der Geltendmachung, Ausübung
                                                    oder Verteidigung von Rechtsansprüchen dient
                                                </p>
                                                <p>
                                                    Dies gilt nicht, wenn die Verarbeitung zu Zwecken des
                                                    Direktmarketings erfolgt. Dann werden wir Ihre personenbezogenen
                                                    Daten nicht weiter zu diesem Zweck verarbeiten.
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h3 id="kontaktmöglichkeiten" className="text-xl font-semibold mt-8 mb-4 text-foreground">8.2 Kontaktmöglichkeiten</h3>
                                <p>
                                    Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen
                                    Daten, bei Auskünften, Berichtigung, Einschränkung oder Löschung von Daten
                                    sowie Widerruf erteilter Einwilligungen oder Widerspruch gegen eine
                                    bestimmte Datenverwendung wenden Sie sich bitte direkt an uns über die
                                    Kontaktdaten in unserem Impressum.
                                </p>
                            </>



                        </div>

                    </div>
                </div>
            </section>
        </>

    );
}