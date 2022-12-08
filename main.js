const ctx = document.querySelector('#chart').getContext('2d');
ctx.canvas.width = 1
ctx.canvas.height = 1
const chartPrice = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["2000", "2001", "2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022"],
        datasets: [{
            label: "Danmark",
            data: [10204, 11523, 12525, 13491,14710,17304,22654,22371,20633,16799,17970,18577,17461,18429,19439,21261,23270,25146,27416,27544,28678,32105,34469],
            borderColor: ['#EE5C47'],
        },
        ]

    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'År 2000-2022'
                },
                grid: {
                    display: false
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Gennemsnitlige Pris pr. M2'
                },
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                position: "top"
            },
            title: {
                display: true,
                text: 'Udvikling i kvadratmeterpris for hele landet',
                font:{
                    size: 24,
                    style: "italic",
                }

            }
        }
    },
});

const ctx2 = document.querySelector('#compare').getContext('2d');
ctx2.canvas.width = 1
ctx2.canvas.height = 1
const chart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Sammenligningsgraf',
            data: [10,10],
        }]
    }
});
