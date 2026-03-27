// Unicorn Valuation Growth — Dual-axis bar and line chart
// Chart.js 4.x MicroSim

document.addEventListener('DOMContentLoaded', function () {

    // --- Setup DOM elements ---
    const main = document.querySelector('main');

    const container = document.createElement('div');
    container.style.position = 'relative';
    container.style.width = '100%';
    container.style.maxWidth = '860px';
    container.style.height = '520px';
    container.style.margin = '0 auto';
    main.appendChild(container);

    const canvas = document.createElement('canvas');
    canvas.id = 'chart';
    container.appendChild(canvas);

    // Toggle button
    const controls = document.createElement('div');
    controls.style.textAlign = 'center';
    controls.style.marginTop = '12px';
    main.appendChild(controls);

    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = 'Switch to Log Scale';
    toggleBtn.style.padding = '8px 18px';
    toggleBtn.style.fontSize = '14px';
    toggleBtn.style.cursor = 'pointer';
    toggleBtn.style.border = '1px solid #888';
    toggleBtn.style.borderRadius = '4px';
    toggleBtn.style.background = '#f5f5f5';
    controls.appendChild(toggleBtn);

    // --- Data ---
    const labels = ['2013', '2015', '2018', '2021', '2024'];
    const unicornCounts = [39, 80, 260, 900, 1200];
    const valuations = [0.1, 0.25, 0.84, 2.8, 4.7];

    // --- Colors ---
    const barColor = 'rgba(54, 162, 235, 0.8)';
    const barBorder = 'rgba(54, 162, 235, 1)';
    const lineColor = 'rgba(255, 193, 7, 1)';
    const lineFill = 'rgba(255, 193, 7, 0.15)';

    // --- Custom plugin: annotations ---
    const annotationPlugin = {
        id: 'unicornAnnotations',
        afterDraw(chart) {
            const ctx = chart.ctx;
            const xAxis = chart.scales.x;
            const yLeft = chart.scales.y;
            const chartArea = chart.chartArea;

            ctx.save();

            // --- Shaded ZIRP bubble region (between 2018 and 2021) ---
            // We shade from midpoint of 2018-2021 bar to midpoint of 2021-2024
            const x2018 = xAxis.getPixelForValue(2); // index 2 = 2018
            const x2021 = xAxis.getPixelForValue(3); // index 3 = 2021
            const midBefore = (xAxis.getPixelForValue(1) + x2018) / 2 + (x2018 - xAxis.getPixelForValue(1)) * 0.3;

            // Shade the region around 2021
            const shadeLeft = (x2018 + x2021) / 2;
            const shadeRight = (x2021 + xAxis.getPixelForValue(4)) / 2;

            ctx.fillStyle = 'rgba(255, 99, 132, 0.08)';
            ctx.fillRect(shadeLeft, chartArea.top, shadeRight - shadeLeft, chartArea.bottom - chartArea.top);

            // ZIRP bubble label
            ctx.fillStyle = 'rgba(180, 60, 80, 0.7)';
            ctx.font = 'italic 12px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('ZIRP bubble', (shadeLeft + shadeRight) / 2, chartArea.top + 18);

            // --- Arrow annotation at 2013 ---
            const x2013 = xAxis.getPixelForValue(0);
            const y2013bar = yLeft.getPixelForValue(unicornCounts[0]);
            const arrowStartY = y2013bar - 60;

            ctx.strokeStyle = '#555';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(x2013, arrowStartY);
            ctx.lineTo(x2013, y2013bar - 8);
            ctx.stroke();

            // Arrowhead
            ctx.fillStyle = '#555';
            ctx.beginPath();
            ctx.moveTo(x2013 - 4, y2013bar - 12);
            ctx.lineTo(x2013 + 4, y2013bar - 12);
            ctx.lineTo(x2013, y2013bar - 4);
            ctx.closePath();
            ctx.fill();

            // Label
            ctx.fillStyle = '#333';
            ctx.font = '11px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('Aileen Lee coins', x2013, arrowStartY - 18);
            ctx.fillText('the term', x2013, arrowStartY - 5);

            // --- Arrow annotation at 2024 ---
            const x2024 = xAxis.getPixelForValue(4);
            const yRight = chart.scales.y1;
            const y2024line = yRight.getPixelForValue(valuations[4]);
            const arrow2StartY = y2024line + 60;

            ctx.strokeStyle = 'rgba(180, 140, 0, 0.9)';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(x2024, arrow2StartY);
            ctx.lineTo(x2024, y2024line + 8);
            ctx.stroke();

            // Arrowhead
            ctx.fillStyle = 'rgba(180, 140, 0, 0.9)';
            ctx.beginPath();
            ctx.moveTo(x2024 - 4, y2024line + 12);
            ctx.lineTo(x2024 + 4, y2024line + 12);
            ctx.lineTo(x2024, y2024line + 4);
            ctx.closePath();
            ctx.fill();

            // Label
            ctx.fillStyle = '#8a6d00';
            ctx.font = 'bold 11px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('$4.7T — more than', x2024, arrow2StartY + 14);
            ctx.fillText("Germany's GDP", x2024, arrow2StartY + 27);

            ctx.restore();
        }
    };

    // --- Create chart ---
    const ctx = canvas.getContext('2d');
    let useLog = false;

    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Number of Unicorns',
                    data: unicornCounts,
                    backgroundColor: barColor,
                    borderColor: barBorder,
                    borderWidth: 1,
                    yAxisID: 'y',
                    order: 2
                },
                {
                    label: 'Combined Valuation ($T)',
                    data: valuations,
                    type: 'line',
                    borderColor: lineColor,
                    backgroundColor: lineFill,
                    pointBackgroundColor: lineColor,
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8,
                    borderWidth: 3,
                    fill: false,
                    tension: 0.3,
                    yAxisID: 'y1',
                    order: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Global Unicorn Startup Growth (2013–2024)',
                    font: { size: 18, weight: 'bold' },
                    padding: { top: 10, bottom: 20 },
                    color: '#333'
                },
                subtitle: {
                    display: true,
                    text: 'A $4.7 trillion metaphor, presented without irony.',
                    font: { size: 13, style: 'italic' },
                    color: '#777',
                    padding: { bottom: 16 }
                },
                tooltip: {
                    backgroundColor: 'rgba(30, 30, 30, 0.92)',
                    titleFont: { size: 14 },
                    bodyFont: { size: 13 },
                    padding: 12,
                    cornerRadius: 6,
                    callbacks: {
                        label: function (context) {
                            if (context.dataset.yAxisID === 'y') {
                                return 'Unicorns: ' + context.parsed.y.toLocaleString();
                            } else {
                                return 'Valuation: $' + context.parsed.y.toFixed(2) + 'T';
                            }
                        }
                    }
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        font: { size: 13 },
                        usePointStyle: true,
                        pointStyleWidth: 16
                    }
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: {
                        font: { size: 13, weight: 'bold' },
                        color: '#444'
                    }
                },
                y: {
                    type: 'linear',
                    position: 'left',
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Unicorns',
                        font: { size: 13, weight: 'bold' },
                        color: barBorder
                    },
                    ticks: {
                        color: barBorder,
                        font: { size: 12 },
                        callback: function (value) {
                            return value.toLocaleString();
                        }
                    },
                    grid: {
                        color: 'rgba(54, 162, 235, 0.1)'
                    }
                },
                y1: {
                    type: 'linear',
                    position: 'right',
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Combined Valuation ($T USD)',
                        font: { size: 13, weight: 'bold' },
                        color: 'rgba(180, 140, 0, 1)'
                    },
                    ticks: {
                        color: 'rgba(180, 140, 0, 1)',
                        font: { size: 12 },
                        callback: function (value) {
                            return '$' + value.toFixed(1) + 'T';
                        }
                    },
                    grid: {
                        drawOnChartArea: false
                    }
                }
            }
        },
        plugins: [annotationPlugin]
    });

    // --- Toggle linear / log scale ---
    toggleBtn.addEventListener('click', function () {
        useLog = !useLog;
        toggleBtn.textContent = useLog ? 'Switch to Linear Scale' : 'Switch to Log Scale';

        chart.options.scales.y.type = useLog ? 'logarithmic' : 'linear';
        chart.options.scales.y1.type = useLog ? 'logarithmic' : 'linear';

        if (useLog) {
            chart.options.scales.y.beginAtZero = false;
            chart.options.scales.y1.beginAtZero = false;
            chart.options.scales.y.min = 10;
            chart.options.scales.y1.min = 0.05;
        } else {
            chart.options.scales.y.beginAtZero = true;
            chart.options.scales.y1.beginAtZero = true;
            delete chart.options.scales.y.min;
            delete chart.options.scales.y1.min;
        }

        chart.update();
    });
});
