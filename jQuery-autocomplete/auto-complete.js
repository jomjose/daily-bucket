var data = [{
    "label": "Aragorn"
}, {
    "label": "Arwen"
}, {
    "label": "Bilbo Baggins"
}, {
    "label": "Boromir"
}, {
    "label": "Frodo Baggins"
}, {
    "label": "Gandalf"
}, {
    "label": "Gimli"
}, {
    "label": "Gollum"
}, {
    "label": "Legolas"
}, {
    "label": "Meriadoc Merry Brandybuck"
}, {
    "label": "Peregrin Pippin Took"
}, {
    "label": "Samwise Gamgee"
}];
$(function () {
    $("#search").autocomplete({
        source: data
    });
});
