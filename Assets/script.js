let i = new Date();

$(document).ready(function() {
    var container = $('.container');

    function timeformat(i) {
        if (i === 12) {
            return '12PM';
        }
        if (i > 12) {
            return `${i - 12}PM`;
        }
yaaaaaaaaaaaaaaa
        return `${i}AM`
    }

    for (let i = 9; i < 18; i++) {
        const timeblock = $('<div>')
        .attr('id', `hour-${i}`)
        .addclass('row time-block past');

        timeblock.append($('<div>').addclass('col-md-1hour').text(formatTime(i)));
        timeblock.append($('<textarea>').addclass('col-md-10 description'));
        timeblock.append(
            $('<button>')
            .addclass('btn saveBtn col-md-1')
            .append($('<i>').addclass('fas fa-save'))
        );

        container.append(timeBlock);
    
    }
});