/**
 * https://github.com/dbushell/Pikaday
 */

var picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'D MMM YYYY',
  onSelect: function () {
    console.log(this.getMoment().format('Do MMMM YYYY'));
  },
  onDraw: function () {
    /**
     * Colors specific days
     */
    [10, 11, 12].forEach(function (e, i) {
      $(`.pika-table td[data-day="${e}"] button`).css('color', 'red');
    });
  }
});


$('#datepicker').focus();
