// Perpetual Beta Product Lifecycle - Dual Line Chart
// Compares traditional software maturity vs perpetual beta products
document.addEventListener('DOMContentLoaded', function () {
    document.body.style.backgroundColor = 'aliceblue';
    const main = document.querySelector('main');

    // Create container for responsive sizing
    const container = document.createElement('div');
    container.style.position = 'relative';
    container.style.width = '100%';
    container.style.maxWidth = '900px';
    container.style.height = '500px';
    container.style.margin = '0 auto';
    main.appendChild(container);

    const canvas = document.createElement('canvas');
    canvas.id = 'chart';
    container.appendChild(canvas);

    const labels = [
        'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5',
        'Year 6', 'Year 7', 'Year 8', 'Year 9', 'Year 10'
    ];

    const traditionalData = [10, 25, 55, 80, 90, 92, 93, 95, 93, 88];
    const betaData = [10, 22, 38, 42, 48, 40, 50, 45, 55, 48];

    // Custom plugin to draw the horizontal threshold line
    const thresholdLinePlugin = {
        id: 'thresholdLine',
        afterDraw: function (chart) {
            const ctx = chart.ctx;
            const yScale = chart.scales.y;
            const xScale = chart.scales.x;
            const yPixel = yScale.getPixelForValue(80);

            ctx.save();
            ctx.beginPath();
            ctx.setLineDash([8, 6]);
            ctx.strokeStyle = 'rgba(220, 50, 50, 0.8)';
            ctx.lineWidth = 2;
            ctx.moveTo(xScale.left, yPixel);
            ctx.lineTo(xScale.right, yPixel);
            ctx.stroke();

            // Label for the threshold line
            ctx.setLineDash([]);
            ctx.fillStyle = 'rgba(220, 50, 50, 0.9)';
            ctx.font = '12px Arial';
            ctx.textAlign = 'right';
            ctx.fillText('Minimum viable shipping threshold (80%)', xScale.right, yPixel - 8);
            ctx.restore();
        }
    };

    // Custom plugin to draw annotations at key data points
    const annotationsPlugin = {
        id: 'customAnnotations',
        afterDraw: function (chart) {
            const ctx = chart.ctx;
            const meta0 = chart.getDatasetMeta(0); // Traditional
            const meta1 = chart.getDatasetMeta(1); // Beta

            ctx.save();
            ctx.font = '11px Arial';
            ctx.textAlign = 'center';

            // Annotation: Traditional crosses threshold at Year 4
            const tradPoint = meta0.data[3];
            if (tradPoint) {
                ctx.fillStyle = 'rgba(54, 100, 180, 0.9)';
                ctx.fillText('Crosses threshold', tradPoint.x, tradPoint.y - 14);
                ctx.fillText('at Year 4', tradPoint.x, tradPoint.y - 2);
            }

            // Annotation: Traditional peak at Year 8
            const peakPoint = meta0.data[7];
            if (peakPoint) {
                ctx.fillStyle = 'rgba(54, 100, 180, 0.9)';
                ctx.fillText('Peak maturity', peakPoint.x, peakPoint.y - 14);
            }

            // Annotation: Beta never ships at Year 10
            const betaEnd = meta1.data[9];
            if (betaEnd) {
                ctx.fillStyle = 'rgba(190, 160, 40, 0.9)';
                ctx.fillText('Still in beta', betaEnd.x, betaEnd.y + 20);
                ctx.fillText('(forever)', betaEnd.x, betaEnd.y + 32);
            }

            // Annotation: Beta dip at Year 6
            const betaDip = meta1.data[5];
            if (betaDip) {
                ctx.fillStyle = 'rgba(190, 160, 40, 0.9)';
                ctx.fillText('Pivot', betaDip.x, betaDip.y + 20);
            }

            ctx.restore();
        }
    };

    new Chart(canvas, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Traditional Software',
                    data: traditionalData,
                    borderColor: 'rgba(54, 100, 180, 1)',
                    backgroundColor: 'rgba(54, 100, 180, 0.1)',
                    borderWidth: 3,
                    pointRadius: 5,
                    pointHoverRadius: 8,
                    pointBackgroundColor: 'rgba(54, 100, 180, 1)',
                    fill: false,
                    tension: 0.3
                },
                {
                    label: 'Perpetual Beta Product',
                    data: betaData,
                    borderColor: 'rgba(210, 170, 30, 1)',
                    backgroundColor: 'rgba(210, 170, 30, 0.1)',
                    borderWidth: 3,
                    borderDash: [10, 5],
                    pointRadius: 5,
                    pointHoverRadius: 8,
                    pointBackgroundColor: 'rgba(210, 170, 30, 1)',
                    pointStyle: 'triangle',
                    fill: false,
                    tension: 0.3
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Perpetual Beta Product Lifecycle',
                    font: { size: 18, weight: 'bold' },
                    padding: { bottom: 10 }
                },
                subtitle: {
                    display: true,
                    text: 'Why some products never actually ship',
                    font: { size: 13, style: 'italic' },
                    padding: { bottom: 20 }
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        padding: 20,
                        font: { size: 13 }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return context.dataset.label + ': ' + context.parsed.y + '% maturity';
                        },
                        afterLabel: function (context) {
                            if (context.datasetIndex === 1 && context.parsed.y < 80) {
                                return '(Not yet shippable)';
                            }
                            if (context.datasetIndex === 0 && context.parsed.y >= 80) {
                                return '(Shippable)';
                            }
                            return '';
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Time',
                        font: { size: 14, weight: 'bold' }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Product Maturity (%)',
                        font: { size: 14, weight: 'bold' }
                    },
                    min: 0,
                    max: 100,
                    ticks: {
                        callback: function (value) {
                            return value + '%';
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                }
            }
        },
        plugins: [thresholdLinePlugin, annotationsPlugin]
    });
});
