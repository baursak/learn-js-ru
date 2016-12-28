window.onload = function () {
    var tables = document.getElementsByTagName('table');
    if (tables.length > 1) {
        alert('There are more than 2 tables. Game over');
        return;
    }
    var labels = tables[0].getElementsByTagName('label');
    var sum = labels.length;
    alert('There are ' + sum + ' elements with "label" tag');
};