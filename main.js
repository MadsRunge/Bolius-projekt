
const ctx4 = document.querySelector('#chart').getContext('2d');
ctx4.canvas.width = 1
ctx4.canvas.height = 1
const chartAOS = new Chart(ctx4, {
    type: 'line',
    data: {
        labels: ["2000", "2001", "2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022"],
        datasets: [{
            label: 'Bolig - Gennensnitlige pris pr. m2',
            data: [10204, 11523, 12525, 13491,14710,17304,22654,22371,20633,16799,17970,18577,17461,18429,19439,21261,23270,25146,27416,27544,28678,32105,34469],
            borderColor: ['red'],
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
                    text: 'Hours'
                },
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                position: "bottom"
            },
            title: {
                display: true,
                text: 'Aircraft out of service due to birdstrikes'
            }
        }
    },
});
