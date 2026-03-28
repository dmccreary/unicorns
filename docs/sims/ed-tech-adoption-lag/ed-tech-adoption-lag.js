// Education Technology Adoption Lag - Horizontal Bar Chart
// Shows how long it takes schools to adopt widely available technology

document.addEventListener('DOMContentLoaded', function () {
    document.body.style.backgroundColor = 'aliceblue';
    const main = document.querySelector('main');

    // Create wrapper
    const wrapper = document.createElement('div');
    wrapper.style.maxWidth = '900px';
    wrapper.style.margin = '0 auto';
    main.appendChild(wrapper);

    // Title at the very top
    const title = document.createElement('div');
    title.textContent = 'Education Technology Adoption Lag';
    title.style.textAlign = 'center';
    title.style.fontSize = '20px';
    title.style.fontWeight = 'bold';
    title.style.color = '#222';
    title.style.padding = '2px 0 2px 0';
    wrapper.appendChild(title);

    // Subtitle
    const subtitle = document.createElement('div');
    subtitle.id = 'chart-subtitle';
    subtitle.textContent = 'Time from public availability to mainstream classroom adoption';
    subtitle.style.textAlign = 'center';
    subtitle.style.fontSize = '13px';
    subtitle.style.color = '#666';
    subtitle.style.padding = '0 0 6px 0';
    wrapper.appendChild(subtitle);

    // Folder tabs below subtitle
    const tabBar = document.createElement('div');
    tabBar.style.display = 'flex';
    tabBar.style.justifyContent = 'center';
    tabBar.style.gap = '0';
    tabBar.style.marginBottom = '-1px';
    tabBar.style.position = 'relative';
    tabBar.style.zIndex = '1';
    wrapper.appendChild(tabBar);

    function createTab(label, isActive) {
        var tab = document.createElement('button');
        tab.textContent = label;
        tab.style.padding = '10px 24px';
        tab.style.fontSize = '14px';
        tab.style.fontWeight = 'bold';
        tab.style.cursor = 'pointer';
        tab.style.border = '2px solid #bbb';
        tab.style.borderBottom = isActive ? '2px solid aliceblue' : '2px solid #bbb';
        tab.style.borderRadius = '8px 8px 0 0';
        tab.style.backgroundColor = isActive ? 'aliceblue' : '#e0e0e0';
        tab.style.color = isActive ? '#222' : '#666';
        tab.style.marginRight = '-1px';
        tab.style.outline = 'none';
        tab.style.transition = 'background-color 0.15s';
        return tab;
    }

    var tabYears = createTab('Availability to Mainstream', true);
    var tabPct = createTab('Adoption Rates', false);
    tabBar.appendChild(tabYears);
    tabBar.appendChild(tabPct);

    function setActiveTab(activeTab) {
        [tabYears, tabPct].forEach(function (tab) {
            var isActive = tab === activeTab;
            tab.style.backgroundColor = isActive ? 'aliceblue' : '#e0e0e0';
            tab.style.color = isActive ? '#222' : '#666';
            tab.style.borderBottom = isActive ? '2px solid aliceblue' : '2px solid #bbb';
        });
    }

    // Chart container
    const container = document.createElement('div');
    container.style.position = 'relative';
    container.style.width = '100%';
    container.style.height = '520px';
    container.style.borderTop = '2px solid #bbb';
    wrapper.appendChild(container);

    const canvas = document.createElement('canvas');
    canvas.id = 'chart';
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    // Data — 6 technologies
    const technologies = [
        'Intelligent Textbooks', 'MicroSims', 'Generative AI',
        'Smartphones', 'Internet', 'Calculator'
    ];
    const availableYears = [2023, 2023, 2022, 2007, 1995, 1972];

    // "Years" view data
    const adoptionData =    [0, 0, 0, 0, 10, 23];
    const resistanceData =  [3, 3, 4, 19, 0,  0];

    // "Percentage of schools adopting" view data
    const adoptionPctData =    [0,  0,  0,  0,  95, 100];
    const resistancePctData =  [0,  0,  12, 35, 0,  0];

    // Annotations for each view
    const yearsAnnotations = {
        0: { text: '3+ yrs (predicted)', suffix: '(released in 2025)', dataset: 1 },
        1: { text: '3+ yrs (predicted)', suffix: '(released in 2024)', dataset: 1 },
        2: { text: '4+ yrs (predicted)', suffix: '(ChatGPT released in Dec. 2022)', dataset: 1 },
        3: { text: '19+ yrs', suffix: '(ongoing)', dataset: 1 },
        4: { text: '10 yrs', suffix: '(adopted 2005)', dataset: 0 },
        5: { text: '23 yrs', suffix: 'Now required for SAT/ACT', dataset: 0 }
    };

    const pctAnnotations = {
        0: { text: '0.1%', suffix: 'Few schools have heard of Intelligent Textbooks', dataset: 1 },
        1: { text: '0.1%', suffix: 'Few schools have heard of MicroSims', dataset: 1 },
        2: { text: '12%', suffix: 'Most schools still in committee phase', dataset: 1 },
        3: { text: '35%', suffix: '(still debating policies)', dataset: 1 },
        4: { text: '95%', suffix: '(mainstream since 2005)', dataset: 0 },
        5: { text: '100%', suffix: 'Now required for SAT/ACT', dataset: 0 }
    };

    let showingYears = true;

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

    // "Now" vertical line plugin — only shown in "years" view
    const nowLinePlugin = {
        id: 'nowLine',
        afterDatasetsDraw: function (chart) {
            if (!showingYears) return;

            const xScale = chart.scales.x;
            const yScale = chart.scales.y;
            const ctx = chart.ctx;

            ctx.save();
            ctx.setLineDash([5, 4]);
            ctx.strokeStyle = 'rgba(100, 100, 100, 0.6)';
            ctx.lineWidth = 1.5;

            var nowValues = [];
            resistanceData.forEach(function (val) {
                if (val > 0) nowValues.push(val);
            });
            adoptionData.forEach(function (val) {
                if (val > 0) nowValues.push(val);
            });
            var maxVal = Math.max.apply(null, nowValues);
            var xPos = xScale.getPixelForValue(maxVal);

            ctx.beginPath();
            ctx.moveTo(xPos, yScale.top);
            ctx.lineTo(xPos, yScale.bottom);
            ctx.stroke();

            ctx.setLineDash([]);
            ctx.font = 'bold 11px Arial';
            ctx.fillStyle = '#666';
            ctx.textAlign = 'center';
            ctx.fillText('Longest lag: ' + maxVal + ' yrs', xPos, yScale.top - 6);

            ctx.restore();
        }
    };

    // Custom plugin to draw annotations on bars (and for zero-value items)
    const barAnnotationsPlugin = {
        id: 'barAnnotations',
        afterDatasetsDraw: function (chart) {
            const ctx = chart.ctx;
            ctx.save();

            var annotations = showingYears ? yearsAnnotations : pctAnnotations;
            const xScale = chart.scales.x;

            Object.keys(annotations).forEach(function (index) {
                var ann = annotations[index];
                var meta = chart.getDatasetMeta(ann.dataset);
                var bar = meta.data[index];

                if (!bar) return;

                var value = chart.data.datasets[ann.dataset].data[index];

                // For zero-value bars, anchor annotation at x=0
                var anchorX = value === 0 ? xScale.getPixelForValue(0) : bar.x;

                ctx.font = 'bold 12px Arial';
                ctx.fillStyle = '#333';
                ctx.textAlign = 'left';
                ctx.textBaseline = 'middle';
                ctx.fillText(ann.text, anchorX + 8, bar.y - 7);

                ctx.font = '11px Arial';
                ctx.fillStyle = '#777';
                ctx.fillText(ann.suffix, anchorX + 8, bar.y + 8);
            });

            ctx.restore();
        }
    };

    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: technologies,
            datasets: [
                {
                    label: 'Years to adoption',
                    data: adoptionData.slice(),
                    backgroundColor: 'rgba(54, 120, 200, 0.85)',
                    borderColor: 'rgba(54, 120, 200, 1)',
                    borderWidth: 1,
                    barPercentage: 0.7,
                    categoryPercentage: 0.8
                },
                {
                    label: 'Resistance phase (ongoing)',
                    data: resistanceData.slice(),
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
                    right: 200,
                    bottom: 10,
                    left: 10
                }
            },
            scales: {
                x: {
                    stacked: true,
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
                    stacked: true,
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
                    display: false
                },
                subtitle: {
                    display: false
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
                            var techIndex = item.dataIndex;
                            var year = availableYears[techIndex];
                            var value = item.raw;

                            if (value === 0) return null;

                            if (showingYears) {
                                if (item.datasetIndex === 0) {
                                    return 'Adopted after ' + value + ' years (available ' + year + ')';
                                } else {
                                    return 'Still resisting: ' + value + '+ years and counting (available ' + year + ')';
                                }
                            } else {
                                if (item.datasetIndex === 0) {
                                    return value + '% of schools have adopted (available ' + year + ')';
                                } else {
                                    return 'Only ' + value + '% of schools adopting (available ' + year + ')';
                                }
                            }
                        }
                    }
                }
            }
        },
        plugins: [nowLinePlugin, barAnnotationsPlugin]
    });

    // Tab click handlers
    function switchToYears() {
        if (showingYears) return;
        showingYears = true;
        setActiveTab(tabYears);
        subtitle.textContent = 'Time from public availability to mainstream classroom adoption';
        chart.data.datasets[0].data = adoptionData.slice();
        chart.data.datasets[1].data = resistanceData.slice();
        chart.data.datasets[0].label = 'Years to adoption';
        chart.data.datasets[1].label = 'Resistance phase (ongoing)';
        chart.options.scales.x.max = 30;
        chart.options.scales.x.title.text = 'Years from Public Availability';
        chart.options.scales.x.ticks.stepSize = 5;
        chart.update();
    }

    function switchToPct() {
        if (!showingYears) return;
        showingYears = false;
        setActiveTab(tabPct);
        subtitle.textContent = 'Current adoption rates across educational institutions';
        chart.data.datasets[0].data = adoptionPctData.slice();
        chart.data.datasets[1].data = resistancePctData.slice();
        chart.data.datasets[0].label = '% of schools adopted';
        chart.data.datasets[1].label = '% of schools adopting (ongoing)';
        chart.options.scales.x.max = 110;
        chart.options.scales.x.title.text = 'Percentage of Schools Adopting';
        chart.options.scales.x.ticks.stepSize = 20;
        chart.update();
    }

    tabYears.addEventListener('click', switchToYears);
    tabPct.addEventListener('click', switchToPct);
});
