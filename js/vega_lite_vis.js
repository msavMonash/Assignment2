var vg_1 = "js/choroplethmap.vg.json";
vegaEmbed("#importMap", vg_1, {"actions": false}).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "js/exportMap.vg.json";
vegaEmbed("#exportMap", vg_2, {"actions": false}).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "js/purpose.vg.json";
vegaEmbed("#purposeBar", vg_3, {"actions": false}).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_4 = "js/condition.vg.json";
vegaEmbed("#conditionBar", vg_4, {"actions": false}).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_5 = "js/classification.vg.json";
vegaEmbed("#sunburst", vg_5, {"actions": false}).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_6 = "js/protection.vg.json";
vegaEmbed("#protection", vg_6, {"actions": false}).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

