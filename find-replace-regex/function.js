var out$ = $('#divOut');

// Plug in the Replace button
$('#btnReplace').unbind('click').click(function (e) {
    var txtWhat$ = $('#txtReplaceWhat');
    var txtWith$ = $('#txtReplaceWith');
    var txtReplace$ = $('#txtReplaceText');

    var r = new RegExp(txtWhat$.val(), "g");

    // Delimit for HTML out
    var output = txtReplace$.val().replace(r, txtWith$.val()).replace(/\</g, "&lt;").replace(/\>/g, "&gt;").replace(/\&/g, "&amp;");

    // Always needs to be the last thing
    output = output.replace(/\n/g, "<br />");
    out$.html(output);
});

// Plug in the Clear button
$('#btnClear').unbind('click').click(function (e) {
    if (confirm('Clear ALL fields?')) {
        $('.replace, textarea').val('');
        out$.html('');
        $('#txtReplaceWhat').trigger('focus');
    }
});

// Plug in the Cycle button
$('#btnCycle').unbind('click').click(function (e) {
    var msg = "Copy the Output and place it into the Input field?";
    if (confirm(msg)) {
        var fullOut = out$.html().replace(/\<br\>/g, "\n");
        $('#txtReplaceText').val(fullOut);
    }
});

// Prettify our labels with <div> wrapper
$('label').wrap('<div class="label-wrapper" ></div>');
