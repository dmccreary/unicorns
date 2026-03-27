// Modern Unicorn Economy - Horizontal Bar Chart
// Shows unicorn counts by sector, sorted descending
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

    // Data sorted by value descending
    const rawData = [
        { label: 'Fintech', value: 180 },
        { label: 'AI/ML', value: 165 },
        { label: 'E-commerce', value: 120 },
        { label: 'Health Tech', value: 95 },
        { label: 'SaaS', value: 85 },
        { label: 'Cybersecurity', value: 60 },
        { label: 'EdTech', value: 45 },
        { label: 'Crypto/Web3', value: 40 }
    ];

    const totalUnicorns = rawData.reduce(function (sum, d) { return sum + d.value; }, 0);
    const labels = rawData.map(function (d) { return d.label; });
    const values = rawData.map(function (d) { return d.value; });

    // Generate gradient colors from gold to blue
    const colorStops = rawData.map(function (d, i) {
        const t = i / (rawData.length - 1);
        const r = Math.round(210 * (1 - t) + 54 * t);
        const g = Math.round(170 * (1 - t) + 100 * t);
        const b = Math.round(30 * (1 - t) + 200 * t);
        return 'rgba(' + r + ', ' + g + ', ' + b + ', 0.85)';
    });

    const borderColors = rawData.map(function (d, i) {
        const t = i / (rawData.length - 1);
        const r = Math.round(190 * (1 - t) + 40 * t);
        const g = Math.round(150 * (1 - t) + 80 * t);
        const b = Math.round(20 * (1 - t) + 180 * t);
        return 'rgba(' + r + ', ' + g + ', ' + b + ', 1)';
    });

    new Chart(canvas, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Number of Unicorns',
                data: values,
                backgroundColor: colorStops,
                borderColor: borderColors,
                borderWidth: 2,
                borderRadius: 4,
                barPercentage: 0.7
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'The Modern Unicorn Economy by Sector',
                    font: { size: 18, weight: 'bold' },
                    padding: { bottom: 4 }
                },
                subtitle: {
                    display: true,
                    text: 'Number of billion-dollar startups by industry (' + totalUnicorns + ' total)',
                    font: { size: 13, style: 'italic' },
                    padding: { bottom: 20 }
                },
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const count = context.parsed.x;
                            const pct = ((count / totalUnicorns) * 100).toFixed(1);
                            return count + ' unicorns (' + pct + '% of total)';
                        },
                        afterLabel: function (context) {
                            const count = context.parsed.x;
                            const valuation = (count * 2.3).toFixed(0);
                            return 'Est. combined valuation: $' + valuation + 'B';
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Number of Unicorns',
                        font: { size: 14, weight: 'bold' }
                    },
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                y: {
                    title: {
                        display: false
                    },
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: { size: 13, weight: 'bold' }
                    }
                }
            }
        }
    });
});
