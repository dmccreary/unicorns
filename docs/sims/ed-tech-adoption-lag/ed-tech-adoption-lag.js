// Education Technology Adoption Lag - Horizontal Bar Chart
// Shows how long it takes schools to adopt widely available technology
// Data loaded from data.json

document.addEventListener('DOMContentLoaded', function () {
    document.body.style.backgroundColor = 'aliceblue';
    const main = document.querySelector('main');

    fetch('data.json')
        .then(function (response) { return response.json(); })
        .then(function (data) { buildChart(main, data); });
});

function buildChart(main, data) {
    var techs = data.technologies;
    var views = data.views;

    // Extract arrays from grouped data
    var labels = techs.map(function (t) { return t.name; });
    var availableYears = techs.map(function (t) { return t.availableYear; });
    var adoptionData = techs.map(function (t) { return t.years.adopted; });
    var resistanceData = techs.map(function (t) { return t.years.resistance; });
    var adoptionPctData = techs.map(function (t) { return t.percent.adopted; });
    var resistancePctData = techs.map(function (t) { return t.percent.resistance; });
    var descriptions = techs.map(function (t) { return t.description || ''; });

    // Build annotation lookup objects from data
    function buildAnnotations(view) {
        var annotations = {};
        techs.forEach(function (t, i) {
            var ann = t.annotation[view];
            annotations[i] = {
                text: ann.text,
                suffix: ann.suffix,
                dataset: ann.bar === 'adopted' ? 0 : 1
            };
        });
        return annotations;
    }
    var yearsAnnotations = buildAnnotations('years');
    var pctAnnotations = buildAnnotations('percent');

    var showingYears = true;

    // --- Build DOM ---

    var wrapper = document.createElement('div');
    wrapper.style.maxWidth = '900px';
    wrapper.style.margin = '0 auto';
    main.appendChild(wrapper);

    // Title
    var title = document.createElement('div');
    title.textContent = data.title;
    title.style.textAlign = 'center';
    title.style.fontSize = '20px';
    title.style.fontWeight = 'bold';
    title.style.color = '#222';
    title.style.padding = '2px 0 2px 0';
    wrapper.appendChild(title);

    // Subtitle
    var subtitle = document.createElement('div');
    subtitle.textContent = views.years.subtitle;
    subtitle.style.textAlign = 'center';
    subtitle.style.fontSize = '13px';
    subtitle.style.color = '#666';
    subtitle.style.padding = '0 0 6px 0';
    wrapper.appendChild(subtitle);

    // Folder tabs
    var tabBar = document.createElement('div');
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
    var container = document.createElement('div');
    container.style.position = 'relative';
    container.style.width = '100%';
    container.style.height = '520px';
    container.style.borderTop = '2px solid #bbb';
    wrapper.appendChild(container);

    var canvas = document.createElement('canvas');
    canvas.id = 'chart';
    container.appendChild(canvas);

    var ctx = canvas.getContext('2d');

    // Striped pattern for resistance bars
    function createStripedPattern(baseColor) {
        var patternCanvas = document.createElement('canvas');
        patternCanvas.width = 16;
        patternCanvas.height = 16;
        var pctx = patternCanvas.getContext('2d');

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

    var stripedRed = createStripedPattern('rgba(220, 80, 70, 0.85)');

    // "Now" vertical line plugin — years view only
    var nowLinePlugin = {
        id: 'nowLine',
        afterDatasetsDraw: function (chart) {
            if (!showingYears) return;

            var xScale = chart.scales.x;
            var yScale = chart.scales.y;
            var drawCtx = chart.ctx;

            var allValues = adoptionData.concat(resistanceData).filter(function (v) { return v > 0; });
            var maxVal = Math.max.apply(null, allValues);
            var xPos = xScale.getPixelForValue(maxVal);

            drawCtx.save();
            drawCtx.setLineDash([5, 4]);
            drawCtx.strokeStyle = 'rgba(100, 100, 100, 0.6)';
            drawCtx.lineWidth = 1.5;
            drawCtx.beginPath();
            drawCtx.moveTo(xPos, yScale.top);
            drawCtx.lineTo(xPos, yScale.bottom);
            drawCtx.stroke();

            drawCtx.setLineDash([]);
            drawCtx.font = 'bold 11px Arial';
            drawCtx.fillStyle = '#666';
            drawCtx.textAlign = 'center';
            drawCtx.fillText('Longest lag: ' + maxVal + ' yrs', xPos, yScale.top - 6);
            drawCtx.restore();
        }
    };

    // Bar annotation plugin
    var barAnnotationsPlugin = {
        id: 'barAnnotations',
        afterDatasetsDraw: function (chart) {
            var drawCtx = chart.ctx;
            drawCtx.save();

            var annotations = showingYears ? yearsAnnotations : pctAnnotations;
            var xScale = chart.scales.x;

            Object.keys(annotations).forEach(function (index) {
                var ann = annotations[index];
                var meta = chart.getDatasetMeta(ann.dataset);
                var bar = meta.data[index];
                if (!bar) return;

                var value = chart.data.datasets[ann.dataset].data[index];
                var anchorX = value === 0 ? xScale.getPixelForValue(0) : bar.x;

                drawCtx.font = 'bold 12px Arial';
                drawCtx.fillStyle = '#333';
                drawCtx.textAlign = 'left';
                drawCtx.textBaseline = 'middle';
                drawCtx.fillText(ann.text, anchorX + 8, bar.y - 7);

                drawCtx.font = '11px Arial';
                drawCtx.fillStyle = '#777';
                drawCtx.fillText(ann.suffix, anchorX + 8, bar.y + 8);
            });

            drawCtx.restore();
        }
    };

    // Create chart
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: views.years.adoptedLabel,
                    data: adoptionData.slice(),
                    backgroundColor: 'rgba(54, 120, 200, 0.85)',
                    borderColor: 'rgba(54, 120, 200, 1)',
                    borderWidth: 1,
                    barPercentage: 0.7,
                    categoryPercentage: 0.8
                },
                {
                    label: views.years.resistanceLabel,
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
            interaction: {
                mode: 'index',
                axis: 'y',
                intersect: false
            },
            layout: {
                padding: { top: 10, right: 200, bottom: 10, left: 10 }
            },
            scales: {
                x: {
                    stacked: true,
                    beginAtZero: true,
                    max: views.years.xMax,
                    title: {
                        display: true,
                        text: views.years.xAxisLabel,
                        font: { size: 14, weight: 'bold' },
                        color: '#333'
                    },
                    ticks: {
                        stepSize: views.years.xStep,
                        font: { size: 12 },
                        color: '#555'
                    },
                    grid: { color: 'rgba(0, 0, 0, 0.08)' }
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
                    grid: { display: false }
                }
            },
            plugins: {
                title: { display: false },
                subtitle: { display: false },
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
                    backgroundColor: 'rgba(0, 0, 0, 0.85)',
                    titleFont: { size: 14, weight: 'bold' },
                    bodyFont: { size: 12 },
                    padding: 14,
                    cornerRadius: 6,
                    maxWidth: 350,
                    position: 'nearest',
                    xAlign: 'left',
                    yAlign: 'center',
                    callbacks: {
                        title: function (items) {
                            var idx = items[0].dataIndex;
                            return items[0].label + ' (available ' + availableYears[idx] + ')';
                        },
                        label: function (item) {
                            var value = item.raw;
                            if (value === 0) return null;

                            if (showingYears) {
                                return item.datasetIndex === 0
                                    ? 'Adopted after ' + value + ' years'
                                    : 'Still resisting: ' + value + '+ years and counting';
                            } else {
                                return item.datasetIndex === 0
                                    ? value + '% of schools have adopted'
                                    : value + '% have not adopted';
                            }
                        },
                        afterBody: function (items) {
                            var desc = descriptions[items[0].dataIndex];
                            if (!desc) return [];
                            // Word-wrap description to ~50 chars per line
                            var words = desc.split(' ');
                            var lines = [];
                            var line = '';
                            for (var i = 0; i < words.length; i++) {
                                if (line.length + words[i].length + 1 > 50) {
                                    lines.push(line);
                                    line = words[i];
                                } else {
                                    line = line ? line + ' ' + words[i] : words[i];
                                }
                            }
                            if (line) lines.push(line);
                            lines.unshift('');
                            return lines;
                        }
                    }
                }
            }
        },
        plugins: [nowLinePlugin, barAnnotationsPlugin]
    });

    // Tab click handlers
    function applyView(view) {
        var v = views[view];
        var isYears = view === 'years';
        subtitle.textContent = v.subtitle;
        chart.data.datasets[0].data = (isYears ? adoptionData : adoptionPctData).slice();
        chart.data.datasets[1].data = (isYears ? resistanceData : resistancePctData).slice();
        chart.data.datasets[0].label = v.adoptedLabel;
        chart.data.datasets[1].label = v.resistanceLabel;
        chart.options.scales.x.max = v.xMax;
        chart.options.scales.x.title.text = v.xAxisLabel;
        chart.options.scales.x.ticks.stepSize = v.xStep;
        chart.update();
    }

    tabYears.addEventListener('click', function () {
        if (showingYears) return;
        showingYears = true;
        setActiveTab(tabYears);
        applyView('years');
    });

    tabPct.addEventListener('click', function () {
        if (!showingYears) return;
        showingYears = false;
        setActiveTab(tabPct);
        applyView('percent');
    });
}
