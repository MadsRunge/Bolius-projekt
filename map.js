const communes = [
    {
        "Kommune": "Region Hovedstaden",
        "2022K2": 45569
    },
    {
        "Kommune": "Landsdel K�benhavn by",
        "2022K2": 53363
    },
    {
        "Kommune": "K�benhavn",
        "2022K2": 52623
    },
    {
        "Kommune": "Frederiksberg",
        "2022K2": 58582
    },
    {
        "Kommune": "Drag�r",
        "2022K2": ".."
    },
    {
        "Kommune": "T�rnby",
        "2022K2": 38265
    },
    {
        "Kommune":  "Landsdel K�benhavns omegn",
        "2022K2": 36681
    },
    {
        "Kommune": "Albertslund",
        "2022K2": 28164
    },
    {
        "Kommune":  "Ballerup",
        "2022K2": 34202
    },
    {
        "Kommune":  "Br�ndby",
        "2022K2": ".."
    },
    {
        "Kommune": "Gentofte",
        "2022K2": 48092
    },
    {
        "Kommune":  "Gladsaxe",
        "2022K2": 35201
    },
    {
        "Kommune":  "Glostrup",
        "2022K2": 30705
    },
    {
        "Kommune":  "Herlev",
        "2022K2": 30848
    },
    {
        "Kommune":  "Hvidovre",
        "2022K2": 33161
    },
    {
        "Kommune": "H�je-Taastrup",
        "2022K2": 26224
    },
    {
        "Kommune":  "Ish�j",
        "2022K2": 25165
    },
    {
        "Kommune":  "Lyngby-Taarb�k",
        "2022K2": 38425
    },
    {
        "Kommune":  "R�dovre",
        "2022K2": 34033
    },
    {
        "Kommune":  "Vallensb�k",
        "2022K2": 28004
    },
    {
        "Kommune":  "Landsdel Nordsj�lland",
        "2022K2": 30874
    },
    {
        "Kommune":  "Aller�d",
        "2022K2": ".."
    },
    {
        "Kommune":  "Egedal",
        "2022K2": 29200
    },
    {
        "Kommune":  "Fredensborg",
        "2022K2": 21899
    },
    {
        "Kommune":  "Frederikssund",
        "2022K2": 24916
    },
    {
        "Kommune":  "Fures�",
        "2022K2": 29812
    },
    {
        "Kommune":  "Gribskov",
        "2022K2": 33152
    },
    {
        "Kommune":  "Halsn�s",
        "2022K2": ".."
    },
    {
        "Kommune":  "Helsing�r",
        "2022K2": 30435
    },
    {
        "Kommune":  "Hiller�d",
        "2022K2": 28867
    },
    {
        "Kommune":  "H�rsholm",
        "2022K2": 35615
    },
    {
        "Kommune":  "Rudersdal",
        "2022K2": 37453
    },
    {
        "Kommune":  "Landsdel Bornholm",
        "2022K2": 25702
    },
    {
        "Kommune":  "Bornholm",
        "2022K2": 25702
    },
    {
        "Kommune":  "Region Sj�lland",
        "2022K2": 21837
    },
    {
        "Kommune":  "Landsdel �stsj�lland",
        "2022K2": 31447
    },
    {
        "Kommune":  "Greve",
        "2022K2": 33081
    },
    {
        "Kommune": "K�ge",
        "2022K2": 30789
    },
    {
        "Kommune": "Lejre",
        "2022K2": ".."
    },
    {
        "Kommune": "Roskilde",
        "2022K2": 31165
    },
    {
        "Kommune": "Solr�d",
        "2022K2": ".."
    },
    {
        "Kommune": "Landsdel Vest- og Sydsj�lland",
        "2022K2": 15942
    },
    {
        "Kommune": "Faxe",
        "2022K2": ".."
    },
    {
        "Kommune": "Guldborgsund",
        "2022K2": 11527
    },
    {
        "Kommune": "Holb�k",
        "2022K2": 20931
    },
    {
        "Kommune": "Kalundborg",
        "2022K2": ".."
    },
    {
        "Kommune": "Lolland",
        "2022K2": ".."
    },
    {
        "Kommune": "N�stved",
        "2022K2": 16138
    },
    {
        "Kommune": "Odsherred",
        "2022K2": 12419
    },
    {
        "Kommune": "Ringsted",
        "2022K2": 18841
    },
    {
        "Kommune": "Slagelse",
        "2022K2": 14121
    },
    {
        "Kommune": "Sor�",
        "2022K2": ".."
    },
    {
        "Kommune": "Stevns",
        "2022K2": ".."
    },
    {
        "Kommune": "Vordingborg",
        "2022K2": 19881
    },
    {
        "Kommune": "Region Syddanmark",
        "2022K2": 18267
    },
    {
        "Kommune": "Landsdel Fyn",
        "2022K2": 20553
    },
    {
        "Kommune": "Assens",
        "2022K2": ".."
    },
    {
        "Kommune": "Faaborg-Midtfyn",
        "2022K2": ".."
    },
    {
        "Kommune": "Kerteminde",
        "2022K2": ".."
    },
    {
        "Kommune": "Langeland",
        "2022K2": ".."
    },
    {
        "Kommune": "Middelfart",
        "2022K2": 20412
    },
    {
        "Kommune": "Nordfyns",
        "2022K2": ".."
    },
    {
        "Kommune": "Nyborg",
        "2022K2": ".."
    },
    {
        "Kommune": "Odense",
        "2022K2": 23524
    },
    {
        "Kommune": "Svendborg",
        "2022K2": ".."
    },
    {
        "Kommune": "�r�",
        "2022K2": ".."
    },
    {
        "Kommune": "Landsdel Sydjylland",
        "2022K2": 15901
    },
    {
        "Kommune": "Billund",
        "2022K2": ".."
    },
    {
        "Kommune": "Esbjerg",
        "2022K2": 16288
    },
    {
        "Kommune": "Fan�",
        "2022K2": ".."
    },
    {
        "Kommune": "Fredericia",
        "2022K2": 12124
    },
    {
        "Kommune": "Haderslev",
        "2022K2": 12439
    },
    {
        "Kommune": "Kolding",
        "2022K2": 16016
    },
    {
        "Kommune": "S�nderborg",
        "2022K2": 17100
    },
    {
        "Kommune": "T�nder",
        "2022K2": 11687
    },
    {
        "Kommune": "Varde",
        "2022K2": 14434
    },
    {
        "Kommune": "Vejen",
        "2022K2": ".."
    },
    {
        "Kommune": "Vejle",
        "2022K2": 20941
    },
    {
        "Kommune": "Aabenraa",
        "2022K2": ".."
    },
    {
        "Kommune": "Region Midtjylland",
        "2022K2": 28116
    },
    {
        "Kommune": "Landsdel �stjylland",
        "2022K2": 31102
    },
    {
        "Kommune": "Favrskov",
        "2022K2": ".."
    },
    {
        "Kommune": "Hedensted",
        "2022K2": ".."
    },
    {
        "Kommune": "Horsens",
        "2022K2": 16074
    },
    {
        "Kommune": "Norddjurs",
        "2022K2": 9218
    },
    {
        "Kommune": "Odder",
        "2022K2": 16283
    },
    {
        "Kommune": "Randers",
        "2022K2": 10369
    },
    {
        "Kommune": "Sams�",
        "2022K2": ".."
    },
    {
        "Kommune": "Silkeborg",
        "2022K2": 17134
    },
    {
        "Kommune": "Skanderborg",
        "2022K2": 21330
    },
    {
        "Kommune": "Syddjurs",
        "2022K2": 21137
    },
    {
        "Kommune": "�rhus",
        "2022K2": 39384
    },
    {
        "Kommune": "Landsdel Vestjylland",
        "2022K2": 14559
    },
    {
        "Kommune": "Herning",
        "2022K2": 14536
    },
    {
        "Kommune": "Holstebro",
        "2022K2": 12398
    },
    {
        "Kommune": "Ikast-Brande",
        "2022K2": ".."
    },
    {
        "Kommune": "Lemvig",
        "2022K2": ".."
    },
    {
        "Kommune": "Ringk�bing-Skjern",
        "2022K2": 18747
    },
    {
        "Kommune": "Skive",
        "2022K2": ".."
    },
    {
        "Kommune": "Struer",
        "2022K2": ".."
    },
    {
        "Kommune": "Viborg",
        "2022K2": 14299
    },
    {
        "Kommune": "Region Nordjylland",
        "2022K2": 20169
    },
    {
        "Kommune": "Landsdel Nordjylland",
        "2022K2": 20169
    },
    {
        "Kommune": "Br�nderslev",
        "2022K2": ".."
    },
    {
        "Kommune": "Frederikshavn",
        "2022K2": 20983
    },
    {
        "Kommune": "Hj�rring",
        "2022K2": 17668
    },
    {
        "Kommune": "Jammerbugt",
        "2022K2": 16417
    },
    {
        "Kommune": "L�s�",
        "2022K2": ".."
    },
    {
        "Kommune": "Mariagerfjord",
        "2022K2": ".."
    },
    {
        "Kommune": "Mors�",
        "2022K2": ".."
    },
    {
        "Kommune": "Rebild",
        "2022K2": ".."
    },
    {
        "Kommune": "Thisted",
        "2022K2": 14127
    },
    {
        "Kommune": "Vesthimmerlands",
        "2022K2": ".."
    },
    {
        "Kommune": "Aalborg",
        "2022K2": 21124
    }
]


/*fetch("json kvm2 2kvartal 2022 færdig.json")
    .then(response => response.json())
    .then(json => {
        console.log(json);
    });
*/
const map = L.map('map').setView([56, 11.6], 7);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// get color depending on population density value
function getColor(labelEnglish) {
    if(labelEnglish === "") {
        return '#800026'
    }
}




let popupKvmPris = []
let popupKommune = []
function onEachFeature(feature, layer) {
    layer.on({
        click: function(feature, a, b) {

                const clickedKommune = feature.sourceTarget.feature.properties.label_dk;
                console.log(feature.sourceTarget.feature.properties.label_dk);
                popupKommune = clickedKommune
                layer.setStyle({
                    fillColor: '#FF0000'
                });

                for (let i = 0; i < communes.length; i++) {
                    if (popupKommune === communes[i].Kommune) {
                        popupKvmPris = communes[i]["2022K2"]
                        console.log(popupKvmPris)
                    }

                }
        }
    });
}

/* global statesData */
L.geoJson(kommuneData, {
    style: function (feature) {
        return {
            weight: 1,
            fillColor: getColor(feature.properties.label_en)

        };
    },
    onEachFeature: onEachFeature,
}).addTo(map);
    let popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Du har klikket på " + popupKommune + "<br>" + popupKommune + " har en gennemsnitlig kvm2 pris på " + popupKvmPris + " DKK")
        .openOn(map);
}

map.on('click', onMapClick);
