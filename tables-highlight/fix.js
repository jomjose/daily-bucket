function firefoxFix() {
    if (/firefox/.test(window.navigator.userAgent.toLowerCase())) {
        var tds = document.getElementsByTagName('td'),
            ths = document.getElementsByTagName('th');
        for (var index = 0; index < tds.length; index++) {
            tds[index].innerHTML = '<div class="ff-fix">' + tds[index].innerHTML + '</div>';
        };
        for (var index = 0; index < ths.length; index++) {
            ths[index].innerHTML =
                '<div class="' + ths[index].className + '">' + ths[index].innerHTML + '</div>';
            ths[index].className = '';
        };
        var style = '<style>' + 'td, th { padding: 0 !important; }' + 'td:hover::before, td:hover::after { background-color: transparent !important; }' + '</style>';
        document.head.insertAdjacentHTML('beforeEnd', style);
    };
};

firefoxFix();
