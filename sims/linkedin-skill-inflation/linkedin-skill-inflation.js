// LinkedIn Skill Inflation Tracker - Chart.js MicroSim
// Dual-line chart showing the growing gap between AI skill claims and actual job demand

document.addEventListener('DOMContentLoaded', function () {
    // Create canvas inside <main>
    const main = document.querySelector('main');
    main.style.width = '100%';
    main.style.maxWidth = '900px';
    main.style.height = '500px';
    main.style.margin = '0 auto';
    main.style.padding = '10px';

    const canvas = document.createElement('canvas');
    canvas.id = 'chart';
    main.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    const labels = ['2020', '2021', '2022', '2023', '2024', '2025'];

    const profilesData = [0, 20, 50, 200, 350, 480];
    const jobsData = [0, 15, 40, 90, 130, 160];

    const goldColor = 'rgb(255, 193, 7)';
    const goldFill = 'rgba(255, 193, 7, 0.25)';
    const blueColor = 'rgb(54, 162, 235)';

    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'LinkedIn profiles claiming AI skills',
                    data: profilesData,
                    borderColor: goldColor,
                    backgroundColor: goldFill,
                    borderWidth: 3,
                    pointRadius: 5,
                    pointHoverRadius: 8,
                    pointBackgroundColor: goldColor,
                    tension: 0.3,
                    fill: '+1'  // Fill down to the next dataset
                },
                {
                    label: 'Job postings requiring AI skills',
                    data: jobsData,
                    borderColor: blueColor,
                    backgroundColor: 'rgba(54, 162, 235, 0.1)',
                    borderWidth: 3,
                    pointRadius: 5,
                    pointHoverRadius: 8,
                    pointBackgroundColor: blueColor,
                    tension: 0.3,
                    fill: false
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
                    text: 'LinkedIn Skill Inflation Tracker',
                    font: { size: 18, weight: 'bold' },
                    padding: { bottom: 10 }
                },
                subtitle: {
                    display: true,
                    text: 'Percentage growth from 2020 baseline',
                    font: { size: 13, style: 'italic' },
                    padding: { bottom: 15 }
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return context.dataset.label + ': ' + context.parsed.y + '%';
                        },
                        afterBody: function (tooltipItems) {
                            if (tooltipItems.length === 2) {
                                const gap = tooltipItems[0].parsed.y - tooltipItems[1].parsed.y;
                                if (gap > 0) {
                                    return '\nInflation Gap: ' + gap + ' percentage points';
                                }
                            }
                            return '';
                        }
                    }
                },
                legend: {
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        padding: 20,
                        font: { size: 12 }
                    }
                },
                filler: {
                    propagate: false
                },
                // Custom plugin for annotations
                annotation: undefined
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Year',
                        font: { size: 14 }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Growth from 2020 Baseline (%)',
                        font: { size: 14 }
                    },
                    min: 0,
                    max: 550,
                    ticks: {
                        callback: function (value) {
                            return value + '%';
                        },
                        stepSize: 50
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                }
            }
        },
        plugins: [{
            id: 'customAnnotations',
            afterDraw: function (chart) {
                const ctx = chart.ctx;
                const xScale = chart.scales.x;
                const yScale = chart.scales.y;

                // ChatGPT release annotation (Nov 2022, between index 2 and 3)
                const chatGptX = xScale.getPixelForValue(2) + (xScale.getPixelForValue(3) - xScale.getPixelForValue(2)) * 0.8;
                const arrowTopY = yScale.getPixelForValue(280);
                const arrowBottomY = yScale.getPixelForValue(60);

                // Dashed vertical line
                ctx.save();
                ctx.setLineDash([5, 5]);
                ctx.strokeStyle = 'rgba(220, 53, 69, 0.6)';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(chatGptX, arrowTopY);
                ctx.lineTo(chatGptX, arrowBottomY);
                ctx.stroke();
                ctx.restore();

                // Arrow head pointing down
                ctx.save();
                ctx.fillStyle = 'rgba(220, 53, 69, 0.7)';
                ctx.beginPath();
                ctx.moveTo(chatGptX, arrowBottomY);
                ctx.lineTo(chatGptX - 6, arrowBottomY - 12);
                ctx.lineTo(chatGptX + 6, arrowBottomY - 12);
                ctx.closePath();
                ctx.fill();
                ctx.restore();

                // Label for ChatGPT release
                ctx.save();
                ctx.fillStyle = 'rgba(220, 53, 69, 0.85)';
                ctx.font = 'bold 11px Arial';
                ctx.textAlign = 'center';
                ctx.fillText('ChatGPT releases', chatGptX, arrowTopY - 10);
                ctx.fillText('(Nov 2022)', chatGptX, arrowTopY + 4);
                ctx.restore();

                // "The Inflation Gap" label at 2025
                const gapX = xScale.getPixelForValue(5);
                const profilesY = yScale.getPixelForValue(480);
                const jobsY = yScale.getPixelForValue(160);
                const midY = (profilesY + jobsY) / 2;

                ctx.save();
                ctx.fillStyle = 'rgba(180, 140, 0, 0.9)';
                ctx.font = 'bold 13px Arial';
                ctx.textAlign = 'right';
                ctx.fillText('The Inflation', gapX - 12, midY - 8);
                ctx.fillText('Gap: 320 pts', gapX - 12, midY + 8);
                ctx.restore();

                // Bracket for the gap
                ctx.save();
                ctx.strokeStyle = 'rgba(180, 140, 0, 0.6)';
                ctx.lineWidth = 2;
                ctx.beginPath();
                // Top tick
                ctx.moveTo(gapX - 6, profilesY + 4);
                ctx.lineTo(gapX + 2, profilesY + 4);
                // Vertical line
                ctx.moveTo(gapX - 2, profilesY + 4);
                ctx.lineTo(gapX - 2, jobsY - 4);
                // Bottom tick
                ctx.moveTo(gapX - 6, jobsY - 4);
                ctx.lineTo(gapX + 2, jobsY - 4);
                ctx.stroke();
                ctx.restore();
            }
        }]
    });
});
