import React from 'react';
import './App.css';
import Header from './Components/Header';
import Walking from './Components/Walking';
import ChartContainer from './ChartContainer';
import SecondChartContainer from './SecondChartContainer/SecondChartContainer';
import duinen from './assets/duinen.png';
import klok from './assets/klokicon.svg';

function App() {
    return (
        <div>
            <Header />
            <div className="container">
                <img className="duinen" src={duinen} alt=""></img>
                <p className="imgcaption">Het dorp Kats op Noord-Beveland, Zeeland. © Daniel Niessen</p>
                <div className="artikelbeschrijving">
                    <h3>13 OKT 2021 ·</h3>
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
                    Belangrijke publieke voorzieningen verschralen in een hoog tempo. Zo sloot een op de tien
                    basisscholen, verdwenen tientallen politieposten en wonen steeds meer Nederlanders niet in de buurt
                    van een ziekenhuis of ov-verbinding. Follow the Money en De Groene Amsterdammer onderzoeken ‘de
                    zichtbare overheid’. Die blijkt vooral aan de randen van Nederland steeds minder gemakkelijk te
                    vinden. ‘Er wordt schandalig met ons omgegaan.’
                </p>
                <p className="artikeltekst">
                    Het Zeeuwse Kats, een klein dorp aan de oostkant van het eiland Noord-Beveland, beleefde AD 2013 een
                    kleine ramp. De basisschool sloot en de 450 inwoners kwamen zo voor het eerst in bijna vier eeuwen
                    zonder school te zitten. De dichtstbijzijnde ligt nu vijf kilometer verderop. ‘Bij het ontstaan van
                    Kats in 1598 had je herenboeren en mensen die op het veld werkten,’ vertelt de journalist Jan
                    Schuurman Hess (PvdA) over zijn woonplaats. Vanuit zijn werkkamer met boekenkasten en een
                    gerieflijke leesfauteuil heeft hij weids uitzicht over de akkers en graslanden van Noord-Beveland.
                    ‘Er waren twee dingen die destijds als eerste werden opgericht,’ zegt hij. ‘Dat was de school, en
                    pas daarna de kerk. Vanaf het begin van de 17e eeuw was hier onderwijs. En nu is er geen onderwijs
                    meer.’
                </p>
                <Walking />
                <p className="artikeltekst">
                    Het Zeeuwse Kats, een klein dorp aan de oostkant van het eiland Noord-Beveland, beleefde AD 2013 een
                    kleine ramp. De basisschool sloot en de 450 inwoners kwamen zo voor het eerst in bijna vier eeuwen
                    zonder school te zitten. De dichtstbijzijnde ligt nu vijf kilometer verderop. ‘Bij het ontstaan van
                    Kats in 1598 had je herenboeren en mensen die op het veld werkten,’ vertelt de journalist Jan
                    Schuurman Hess (PvdA) over zijn woonplaats. Vanuit zijn werkkamer met boekenkasten en een
                    gerieflijke leesfauteuil heeft hij weids uitzicht over de akkers en graslanden van Noord-Beveland.
                    ‘Er waren twee dingen die destijds als eerste werden opgericht,’ zegt hij. ‘Dat was de school, en
                    pas daarna de kerk. Vanaf het begin van de 17e eeuw was hier onderwijs. En nu is er geen onderwijs
                    meer.’
                </p>
                <SecondChartContainer />
                <p className="artikeltekst">
                    Het Zeeuwse Kats, een klein dorp aan de oostkant van het eiland Noord-Beveland, beleefde AD 2013 een
                    kleine ramp. De basisschool sloot en de 450 inwoners kwamen zo voor het eerst in bijna vier eeuwen
                    zonder school te zitten. De dichtstbijzijnde ligt nu vijf kilometer verderop. ‘Bij het ontstaan van
                    Kats in 1598 had je herenboeren en mensen die op het veld werkten,’ vertelt de journalist Jan
                    Schuurman Hess (PvdA) over zijn woonplaats. Vanuit zijn werkkamer met boekenkasten en een
                    gerieflijke leesfauteuil heeft hij weids uitzicht over de akkers en graslanden van Noord-Beveland.
                    ‘Er waren twee dingen die destijds als eerste werden opgericht,’ zegt hij. ‘Dat was de school, en
                    pas daarna de kerk. Vanaf het begin van de 17e eeuw was hier onderwijs. En nu is er geen onderwijs
                    meer.’
                </p>
                <ChartContainer />
            </div>
        </div>
    );
}

export default App;
