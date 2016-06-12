/**
 * https://github.com/dbushell/Pikaday
 */

var picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'D MMM YYYY',
  onSelect: function () {
    console.log('selected', this.getMoment().format('DD MMMM YYYY'));
  },
  onDraw: function () {
    /**
     * Colors specific days
     */
    [10, 11, 12].forEach(function (e, i) {
      $(`.pika-table td[data-day="${e}"] button`).css('color', 'red');
    });

    console.log('onDraw', picker.getMoment().format('M'));

    var $monthLabel = $('.pika-title .pika-label:first');
    $monthLabel.find('select').remove();
    var month = $monthLabel.text();
    console.log('Current Month:', month);

    var $yearLabel = $('.pika-title .pika-label:eq(1)');
    $yearLabel.find('select').remove();
    var year = $yearLabel.text();
    console.log('Current Year:', year);
  },
  onOpen : function () {
    console.log('onOpen', picker.getMoment().format('M'));
  }
});

$('#datepicker').focus();

