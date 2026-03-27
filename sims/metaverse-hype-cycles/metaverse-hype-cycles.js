// Metaverse Hype Cycles - Multi-line Chart
// Four generations of VR/metaverse hype, each following the same pattern
document.addEventListener('DOMContentLoaded', function () {
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
        'Year 0', 'Year 1', 'Year 2', 'Year 3', 'Year 4',
        'Year 5', 'Year 6', 'Year 7', 'Year 8'
    ];

    const vr90sData = [5, 15, 35, 45, 25, 12, 10, 10, 10];
    const secondLifeData = [5, 20, 40, 55, 30, 10, 8, 10, 12];
    const oculusData = [5, 25, 50, 65, 35, 20, 22, 25, 28];
    const metaData = [5, 40, 75, 95, 45, 25, 28, 30, 32];

    // Custom plugin to draw "Peak hype" annotation at Year 3
    const peakHypePlugin = {
        id: 'peakHypeAnnotation',
        afterDraw: function (chart) {
            const ctx = chart.ctx;
            const xScale = chart.scales.x;
            const yScale = chart.scales.y;

            // Vertical dashed line at Year 3 (index 3)
            const xPixel = xScale.getPixelForValue(3);

            ctx.save();
            ctx.beginPath();
            ctx.setLineDash([6, 4]);
            ctx.strokeStyle = 'rgba(120, 120, 120, 0.5)';
            ctx.lineWidth = 1.5;
            ctx.moveTo(xPixel, yScale.top);
            ctx.lineTo(xPixel, yScale.bottom);
            ctx.stroke();

            // Label
            ctx.setLineDash([]);
            ctx.fillStyle = 'rgba(80, 80, 80, 0.9)';
            ctx.font = 'bold 13px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('Peak hype', xPixel, yScale.top - 6);

            // Arrow pointing down from label
            ctx.beginPath();
            ctx.moveTo(xPixel, yScale.top + 2);
            ctx.lineTo(xPixel - 5, yScale.top + 10);
            ctx.lineTo(xPixel + 5, yScale.top + 10);
            ctx.closePath();
            ctx.fillStyle = 'rgba(80, 80, 80, 0.7)';
            ctx.fill();

            ctx.restore();
        }
    };

    new Chart(canvas, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: '1990s VR',
                    data: vr90sData,
                    borderColor: 'rgba(150, 150, 150, 1)',
                    backgroundColor: 'rgba(150, 150, 150, 0.05)',
                    borderWidth: 2,
                    borderDash: [4, 4],
                    pointRadius: 4,
                    pointHoverRadius: 7,
                    pointBackgroundColor: 'rgba(150, 150, 150, 1)',
                    pointStyle: 'circle',
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'Second Life',
                    data: secondLifeData,
                    borderColor: 'rgba(54, 100, 200, 1)',
                    backgroundColor: 'rgba(54, 100, 200, 0.05)',
                    borderWidth: 2,
                    borderDash: [8, 4],
                    pointRadius: 4,
                    pointHoverRadius: 7,
                    pointBackgroundColor: 'rgba(54, 100, 200, 1)',
                    pointStyle: 'rect',
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'Oculus Era',
                    data: oculusData,
                    borderColor: 'rgba(50, 160, 80, 1)',
                    backgroundColor: 'rgba(50, 160, 80, 0.05)',
                    borderWidth: 2,
                    borderDash: [8, 4],
                    pointRadius: 4,
                    pointHoverRadius: 7,
                    pointBackgroundColor: 'rgba(50, 160, 80, 1)',
                    pointStyle: 'triangle',
                    fill: false,
                    tension: 0.4
                },
                {
                    label: "Meta's Metaverse",
                    data: metaData,
                    borderColor: 'rgba(210, 170, 30, 1)',
                    backgroundColor: 'rgba(210, 170, 30, 0.08)',
                    borderWidth: 4,
                    pointRadius: 5,
                    pointHoverRadius: 9,
                    pointBackgroundColor: 'rgba(210, 170, 30, 1)',
                    pointStyle: 'star',
                    fill: false,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: { top: 25 }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Metaverse Hype Cycles: A Recurring Pattern',
                    font: { size: 18, weight: 'bold' },
                    padding: { bottom: 4 }
                },
                subtitle: {
                    display: true,
                    text: 'Four generations of immersive technology hype, same trajectory every time',
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
                            return context.dataset.label + ': ' + context.parsed.y + ' hype intensity';
                        },
                        afterLabel: function (context) {
                            const idx = context.dataIndex;
                            if (idx === 3) {
                                return '(Peak of inflated expectations)';
                            }
                            if (idx === 4 || idx === 5) {
                                return '(Trough of disillusionment)';
                            }
                            if (idx >= 6) {
                                return '(Plateau of residual optimism)';
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
                        text: 'Years Within Cycle',
                        font: { size: 14, weight: 'bold' }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Hype Intensity',
                        font: { size: 14, weight: 'bold' }
                    },
                    min: 0,
                    max: 100,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                }
            }
        },
        plugins: [peakHypePlugin]
    });
});
