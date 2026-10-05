document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  var v = function (id) { return document.getElementById(id).value.trim(); };
  var body = 'Name: ' + v('name') + '\n' +
             'Phone: ' + v('phone') + '\n' +
             'Interested in: ' + v('interest') + '\n\n' +
             v('message');
  var href = 'mailto:k16899@gmail.com' +
             '?subject=' + encodeURIComponent('Loan inquiry: ' + v('interest')) +
             '&body=' + encodeURIComponent(body);
  window.location.href = href;
});