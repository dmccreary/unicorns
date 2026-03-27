// Education Technology Adoption Lag - Horizontal Bar Chart
// Shows how long it takes schools to adopt widely available technology

document.addEventListener('DOMContentLoaded', function () {
    const main = document.querySelector('main');

    // Create a container for the chart
    const container = document.createElement('div');
    container.style.position = 'relative';
    container.style.width = '100%';
    container.style.maxWidth = '900px';
    container.style.height = '500px';
    container.style.margin = '20px auto';
    main.appendChild(container);

    // Create the canvas
    const canvas = document.createElement('canvas');
    canvas.id = 'chart';
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    // Data
    const technologies = ['Generative AI', 'Smartphones', 'Internet', 'Calculator'];
    const availableYears = [2022, 2007, 1995, 1972];
    const currentYear = 2026;

    // Years from availability to mainstream adoption (or current year if ongoing)
    const adoptionYears = [null, null, 10, 23]; // null = not yet adopted
    const resistanceYears = [4, 19, null, null]; // ongoing resistance (years so far)

    // For the chart: blue bars show completed adoption, red bars show ongoing resistance
    // Calculator: 23 years adoption (completed)
    // Internet: 10 years adoption (completed)
    // Smartphones: 19+ years resistance (ongoing)
    // Generative AI: 4+ years resistance (ongoing)

    const adoptionData = [0, 0, 10, 23];
    const resistanceData = [4, 19, 0, 0];

    // Create striped pattern for ongoing resistance bars
    function createStripedPattern(baseColor) {
        const patternCanvas = document.createElement('canvas');
        patternCanvas.width = 16;
        patternCanvas.height = 16;
        const pctx = patternCanvas.getContext('2d');

        pctx.fillStyle = baseColor;
        pctx.fillRect(0, 0, 16, 16);

        pctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        pctx.lineWidth = 3;
        pctx.beginPath();
        pctx.moveTo(-4, 16);
        pctx.lineTo(16, -4);
        pctx.moveTo(-4, 32);
        pctx.lineTo(32, -4);
        pctx.stroke();

        return ctx.createPattern(patternCanvas, 'repeat');
    }

    const stripedRed = createStripedPattern('rgba(220, 80, 70, 0.85)');

    // Annotation plugin for the "Now (2026)" vertical line
    const nowLinePlugin = {
        id: 'nowLine',
        afterDraw: function (chart) {
            const xScale = chart.scales.x;
            const yScale = chart.scales.y;
            const ctx = chart.ctx;

            // Draw vertical line at the max relevant value position
            // We want to mark "now" contextually
            // The max bar value shown is 23, so we just draw a subtle annotation
            // Actually, let's skip the vertical line since x-axis is "years from availability"
            // and "now" differs per technology. Instead, add text annotations on bars.
        }
    };

    // Custom plugin to draw labels on bars
    const barLabelsPlugin = {
        id: 'barLabels',
        afterDatasetsDraw: function (chart) {
            const ctx = chart.ctx;
            ctx.save();
            ctx.font = '12px Arial';
            ctx.textBaseline = 'middle';

            chart.data.datasets.forEach(function (dataset, datasetIndex) {
                const meta = chart.getDatasetMeta(datasetIndex);
                meta.data.forEach(function (bar, index) {
                    const value = dataset.data[index];
                    if (value === 0) return;

                    const barWidth = bar.width;
                    const label = dataset.labels ? dataset.labels[index] : '';

                    if (label && barWidth > 60) {
                        ctx.fillStyle = '#ffffff';
                        ctx.textAlign = 'center';
                        const xPos = bar.x - barWidth / 2;
                        ctx.fillText(label, xPos, bar.y);
                    }
                });
            });

            ctx.restore();
        }
    };

    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: technologies,
            datasets: [
                {
                    label: 'Years to adoption',
                    data: adoptionData,
                    backgroundColor: 'rgba(54, 120, 200, 0.85)',
                    borderColor: 'rgba(54, 120, 200, 1)',
                    borderWidth: 1,
                    barPercentage: 0.7,
                    categoryPercentage: 0.8
                },
                {
                    label: 'Resistance phase (ongoing)',
                    data: resistanceData,
                    backgroundColor: stripedRed,
                    borderColor: 'rgba(220, 80, 70, 1)',
                    borderWidth: 1,
                    barPercentage: 0.7,
                    categoryPercentage: 0.8
                }
            ]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {
                    top: 10,
                    right: 80,
                    bottom: 10,
                    left: 10
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    max: 30,
                    title: {
                        display: true,
                        text: 'Years from Public Availability',
                        font: { size: 14, weight: 'bold' },
                        color: '#333'
                    },
                    ticks: {
                        stepSize: 5,
                        font: { size: 12 },
                        color: '#555'
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.08)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Technology',
                        font: { size: 14, weight: 'bold' },
                        color: '#333'
                    },
                    ticks: {
                        font: { size: 13, weight: 'bold' },
                        color: '#333'
                    },
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Education Technology Adoption Lag',
                    font: { size: 18, weight: 'bold' },
                    color: '#222',
                    padding: { top: 10, bottom: 20 }
                },
                subtitle: {
                    display: true,
                    text: 'Time from public availability to mainstream classroom adoption',
                    font: { size: 13 },
                    color: '#666',
                    padding: { bottom: 15 }
                },
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        font: { size: 12 },
                        color: '#444',
                        padding: 20,
                        usePointStyle: true,
                        pointStyle: 'rectRounded'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleFont: { size: 14, weight: 'bold' },
                    bodyFont: { size: 13 },
                    padding: 12,
                    cornerRadius: 6,
                    callbacks: {
                        title: function (items) {
                            return items[0].label;
                        },
                        label: function (item) {
                            const techIndex = item.dataIndex;
                            const year = availableYears[techIndex];
                            const value = item.raw;

                            if (value === 0) return null;

                            if (item.datasetIndex === 0) {
                                return 'Adopted after ' + value + ' years (available ' + year + ')';
                            } else {
                                return 'Still resisting: ' + value + '+ years and counting (available ' + year + ')';
                            }
                        }
                    }
                }
            }
        },
        plugins: [
            {
                id: 'barAnnotations',
                afterDatasetsDraw: function (chart) {
                    const ctx = chart.ctx;
                    ctx.save();

                    const annotations = {
                        0: { text: '4+ yrs', suffix: '(ongoing)', dataset: 1 },
                        1: { text: '19+ yrs', suffix: '(ongoing)', dataset: 1 },
                        2: { text: '10 yrs', suffix: '(adopted 2005)', dataset: 0 },
                        3: { text: '23 yrs', suffix: '(adopted 1995)', dataset: 0 }
                    };

                    Object.keys(annotations).forEach(function (index) {
                        const ann = annotations[index];
                        const meta = chart.getDatasetMeta(ann.dataset);
                        const bar = meta.data[index];

                        if (!bar) return;

                        const value = chart.data.datasets[ann.dataset].data[index];
                        if (value === 0) return;

                        // Draw label to the right of the bar
                        ctx.font = 'bold 12px Arial';
                        ctx.fillStyle = '#333';
                        ctx.textAlign = 'left';
                        ctx.textBaseline = 'middle';
                        ctx.fillText(ann.text, bar.x + 8, bar.y - 7);

                        ctx.font = '11px Arial';
                        ctx.fillStyle = '#777';
                        ctx.fillText(ann.suffix, bar.x + 8, bar.y + 8);
                    });

                    ctx.restore();
                }
            }
        ]
    });
});
