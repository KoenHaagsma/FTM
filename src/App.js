import React from 'react';
import './App.css';
import Header from './Components/Header';
import Walking from './Components/Walking';
import ChartContainer from './ChartContainer';
import SecondChartContainer from './SecondChartContainer/SecondChartContainer';
import duinen from './assets/hero_image.png';
import klok from './assets/klokicon.svg';
import copy from './assets/copy.png';

function App() {
    return (
        <div>
            <Header />
            <div className="container">
                <img className="duinen" src={duinen} alt=""></img>
                <p className="imgcaption">
                    <a href="https://www.groene.nl/auteur/coen-van-de-ven" target="_blank" rel="noreferrer">
                        Coen van de Ven
                    </a>{' '}
                    beeld Milo
                </p>
                <div className="artikelbeschrijving">
                    <h3>16 Januari 2022 ·</h3>
                    <img src={klok} alt=""></img>
                    <h3> 15 MIN</h3>
                </div>
                <h1>Het platteland verliest zijn voorzieningen en dat vergroot de ongelijkheid</h1>
                <div className="schrijvers">
                    <h3>CAROLIN JASCHECK</h3>
                    <h3>JABIR TISOUDALI</h3>
                    <h3>KOEN HAAGSMA</h3>
                </div>
                <p className="inleidingp">
                    De afgelopen decennia zijn er veel gemeentelijke voorzieningen verdwenen door bezuinigingen of omdat
                    gemeenten zijn gefuseerd of gesplitst. Denk aan zwembaden, postkantoren, politiebureau's,
                    gemeentehuizen, scholen en bibliotheken. Zo sloot een op de tien basisscholen, verdwenen tientallen
                    politieposten en wonen steeds meer nederlanders niet in de buurt van de ziekenhuis of ov-verbinding.
                    Dat blijkt volgens de metingen van CBS. Die doet jaarlijks (2007-20219) metingen over de gemiddelde
                    afstanden die mensen in buurten, wijken en gemeenten moeten afleggen.
                </p>
                <p className="artikeltekst">
                    De zichtbare overheid verdwijnt uit Nederland. Dat blijkt uit onderzoek van De Groene Amsterdammer
                    en Follow the Money. Een gezamenlijke turf-actie van beide redacties – op basis van papieren en
                    digitale archieven, stapels rapporten, opgevraagde cijfers bij overheidsinstanties en
                    CBS-statistieken – laat zien dat overheidsvoorzieningen sinds de jaren tachtig afnemen. Zo sloten er
                    in de afgelopen 25 jaar 1410 basisscholen, liepen de afstanden tot ziekenhuizen op en halveerde het
                    aantal rechtbanken. Het aantal bibliotheeklocaties kromp in de afgelopen tien jaar met 28 procent.
                </p>
                <p className="artikeltekst">
                    Tussen 1997 en 2021 sluiten in totaal 1410 basisscholen. 178 plaatsen verliezen hun enige
                    basisschool. In 2021 zijn er nog 6200 over in Nederland.
                </p>
                <p className="artikeltekst">
                    Tot 2012 schommelt het aantal sluitingen tussen de 30 en 50, maar daarna worden het er rap meer. Het
                    zijn de jaren waarin de overheid een bijna genadeloze efficiëntie nastreeft.
                </p>
                <Walking />
                <p className="artikeltekst fix">
                    De Tweede Kamer grijpt in en vraagt staatssecretaris Sander Dekker ervoor te zorgen dat elk dorp
                    altijd ten minste één school overhoudt. Daarop legt Dekker het advies van de Onderwijsraad naast
                    zich neer, maar hij trekt voor kleine scholen wel een deel van hun extra vergoeding in: uit de
                    zogeheten kleinescholentoeslag worden middelen ingezet om fusies en samenwerkingen te stimuleren. In
                    de jaren met Sander Dekker op Onderwijs, Cultuur en Wetenschap (2012-2017) sluiten gemiddeld 100
                    basisscholen per jaar: dubbel zoveel als alle andere jaren waarover data bekend zijn. De sluitingen
                    hebben wel effect. De overheidsuitgaven aan basisonderwijs nemen in 2014 kortstondig een duik. Vanaf
                    2015 stijgen de uitgaven weer elk jaar, blijkt uit gegevens van het CBS.
                </p>
                <p className="artikeltekst">
                    De basisschool is één publieke voorziening die uit het zicht verdwijnt, maar tussen 2007 en 2019
                    zijn er meer op grotere afstand gekomen. De huisarts of huisartsenpost bijvoorbeeld, ziekenhuizen
                    met een polikliniek, havo/vwo-scholen en bibliotheken.
                </p>
                <p className="artikeltekst">
                    Kim Putters, directeur van het Sociaal en Cultureel Planbureau (SCP) in Den Haag, ziet als een van
                    de oorzaken dat wereldwijd steeds meer mensen van het platteland naar de steden trekken. Dit zorgt
                    ervoor dat de mensen die achterblijven ook steeds meer problemen ervaren in de leefomgeving, zorg en
                    onderwijs. Dat is een trend die doorzet de komende tijd, zegt hij. ‘Maar er is ook een
                    tegenbeweging, zeker in een klein land als Nederland: want de steden trekken dit ook niet.’
                </p>
                <img className="copy" src={copy} alt=""></img>
                <p className="imgcaption">
                    Afbeelding @{' '}
                    <a
                        href="https://www.groene.nl/artikel/hoe-den-haag-uit-nederland-verdween"
                        target="_blank"
                        rel="noreferrer"
                    >
                        https://www.groene.nl/artikel/hoe-den-haag-uit-nederland-verdween
                    </a>
                </p>
                <p className="artikeltekst">
                    Al gebeurt het niet overal in hetzelfde tempo. Plattelandsregio’s zagen hun toegang tot
                    voorzieningen sneller dalen dan Randstedelingen of de bewoners van groeikernen als Zwolle en
                    Eindhoven. Met name Oost-Groningen, Zeeland, Drenthe en grote delen van Friesland leverden flink in
                    – met sociale onrust tot gevolg. Niet alleen was de neergang van voorzieningen in grote stedelijke
                    gebieden kleiner, in drie Nederlandse regio’s werd het zelfs ietsje beter. In de Gooi en
                    Vechtstreek, een aantal zuidelijke gemeenten in Zuid-Holland en het groeigebied rondom Zwolle vonden
                    mensen gemiddeld juist sneller een huisarts, ziekenhuis, school of bibliotheek.
                </p>
                <SecondChartContainer />
                <p className="artikeltekst">
                    De commissaris denkt dat de rek eruit is, mede door de gemeentelijke herindelingen in Groningen. ‘We
                    hebben nu een heel overzichtelijk bosje gemeenten met een kolossale hoeveelheid vierkante
                    kilometers. Daar ontstaat een democratisch tekort, namelijk de nabijheid. Veel gemeenschappelijke
                    regelingen tussen gemeenten zijn opgeruimd, want het is één gemeente geworden, maar dan is het
                    opeens heel ver rijden naar allerlei voorzieningen.’
                </p>
                <p className="artikeltekst">
                    De woede heeft Den Haag al lang bereikt. Wanneer Caroline van der Plas van de BoerBurgerBeweging
                    zegt op te komen voor ‘mensen op het platteland die moeten smeken of alsjeblieft de bibliotheek of
                    het zwembad mag openblijven’, dan legt ze de vinger op een pijnlijke trend die al decennia gaande
                    is. De bibliotheek is juist op het platteland verdwenen of verruild voor ‘afhaalpunten’. Tussen 1999
                    en nu groeide het aantal vrijwilligers van 6760 tot 22.627 – die groep is drie keer zo groot als het
                    aantal betaalde krachten. Lange tijd werd het niet opgemerkt. Bewoners onderhielden vaker zelf het
                    kerkhof of knipten het groen. De piepkleine Prinses Margrietschool in het midden van het dorp Kats
                    werd steeds belangrijker als de plek waar het allemaal gebeurde: het plaatselijke krantje werd er
                    gedrukt, er werden muziek- en toneellessen gegeven en in het aanpalende gymnastieklokaal kwamen niet
                    alleen kinderen maar ook de badmintonvereniging en sportende ouderen.
                </p>
                <ChartContainer />
                <p className="artikeltekst">
                    Niet alleen voor de BoerBurgerBeweging is het afbrokkelende platteland een thema, op de fractiekamer
                    van Forum voor Democratie slingert het essay Microfobie van Kamerlid Pepijn van Houwelingen rond,
                    waarin hij van leer trekt tegen fusies, herindelingen en schaalvergrotingen die voorzieningen bij
                    burgers hebben weggehaald.
                </p>
                <p className="quote">
                    ‘Men verliest de controle op een stuk van het eigen leven en wordt in dat opzicht dus ook minder
                    vrij.’
                </p>
                <p className="artikeltekst">
                    Vraagstukken over voorzieningen worden steeds meer een vraagstuk over gelijke behandeling, stellen
                    ook Annemarie Kok en Caspar van den Berg. Zij sluiten hun rapport over regionaal onbehagen af met
                    een oplossing: tuig een ‘bijdetijds stelsel van generieke voorzieningen’ op. Heel concreet: heropen
                    op grote schaal bibliotheken, met ook een ontmoetingsfunctie. Investeer juist wel in betaalbaar
                    openbaar vervoer, in snel internet en in wijkagenten. Bied in heel het land laagdrempelige basale
                    geestelijke gezondheidszorg aan. Verrijk elke gemeente met bemenste loketten voor hulp bij
                    papierwerk. ‘Het is tijd om hier op een vrij principiële manier naar te kijken’, zegt Van den Berg.
                    ‘Als je echt iets wil doen aan het onbehagen, doe het dan onorthodox en geef het signaal af dat je
                    als overheid er in heel Nederland bent.’
                </p>
                <div className="bronnen">
                    <h3>Bronnen</h3>
                    <ul>
                        <li>
                            <a rel="noreferrer" href="https://www.cbs.nl/nl-nl/cijfers/detail/80305ned" target="_blank">
                                Verschraling voorzieningen in Nederlandse gemeenten - CBS
                            </a>
                        </li>
                        <li>
                            <a
                                rel="noreferrer"
                                href="https://www.ftm.nl/artikelen/verschraling-platteland"
                                target="_blank"
                            >
                                Het platteland verliest zijn voorzieningen en dat vergroot de ongelijkheid - Follow The
                                Money
                            </a>
                        </li>
                        <li>
                            <a
                                rel="noreferrer"
                                href="https://www.groene.nl/artikel/hoe-den-haag-uit-nederland-verdween"
                                target="_blank"
                            >
                                Hoe Den Haag uit Nederland verdween - De Groene Amsterdammer
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
