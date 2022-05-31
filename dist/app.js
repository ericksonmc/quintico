var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var App = function App() {
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      random = _React$useState2[0],
      setRandom = _React$useState2[1];

  var _React$useState3 = React.useState([{ title: '5 Numeros mas Signo', amount: '100.000 USD', main: true }, { title: '4 Numeros mas Signo', amount: '10.000 USD', main: false }, { title: '3 Numeros mas Signo', amount: '1000 USD', main: false }, { title: '2 Numeros mas Signo', amount: '100', main: false }, { title: '1 Numeros mas Signo', amount: '10', main: false }, { title: '4 Numeros', amount: '6.000 USD', main: false }, { title: '3 Numeros', amount: '600  USD', main: false }, { title: '2 Numeros', amount: '60  USD', main: false }, { title: '1 Numeros', amount: '6  USD', main: false }]),
      _React$useState4 = _slicedToArray(_React$useState3, 1),
      categories = _React$useState4[0];

  var _React$useState5 = React.useState([{
    imagen: "./quintico-main/dist/images/signos/esferas/aries.png",
    checked: false,
    code: 1,
    name: 'aries'
  }, {
    imagen: "./quintico-main/dist/images/signos/esferas/tauro.png",
    checked: false,
    code: 2,
    name: 'tauro'
  }, {
    imagen: "./quintico-main/dist/images/signos/esferas/geminis.png",
    checked: false,
    code: 3,
    name: 'geminis'
  }, {
    imagen: "./quintico-main/dist/images/signos/esferas/cancer.png",
    checked: false,
    code: 4,
    name: 'cancer'
  }, {
    imagen: "./quintico-main/dist/images/signos/esferas/leo.png",
    checked: false,
    code: 5,
    name: 'leo'
  }, {
    imagen: "./quintico-main/dist/images/signos/esferas/virgo.png",
    checked: false,
    code: 6,
    name: 'virgo'
  }, {
    imagen: "./quintico-main/dist/images/signos/esferas/libra.png",
    checked: false,
    code: 7,
    name: 'libra'
  }, {
    imagen: "./quintico-main/dist/images/signos/esferas/escorpio.png",
    checked: false,
    code: 8,
    name: 'escorpio'
  }, {
    imagen: "./quintico-main/dist/images/signos/esferas/sagitario.png",
    checked: false,
    code: 9,
    name: 'sagitario'
  }, {
    imagen: "./quintico-main/dist/images/signos/esferas/capricornio.png",
    checked: false,
    code: 10,
    name: 'capricornio'
  }, {
    imagen: "./quintico-main/dist/images/signos/esferas/acuario.png",
    checked: false,
    code: 11,
    name: 'acuario'
  }, {
    imagen: "./quintico-main/dist/images/signos/esferas/piscis.png",
    checked: false,
    code: 12,
    name: 'piscis'
  }]),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      signs = _React$useState6[0],
      setSign = _React$useState6[1];

  var _React$useState7 = React.useState(''),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      combination = _React$useState8[0],
      setCombination = _React$useState8[1];

  var _React$useState9 = React.useState([]),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      bets = _React$useState10[0],
      setBets = _React$useState10[1];

  var _React$useState11 = React.useState(JSON.parse(sessionStorage.getItem('info_tuquintico'))),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      quintico = _React$useState12[0],
      setQuintico = _React$useState12[1];

  var _React$useState13 = React.useState(0),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      total = _React$useState14[0],
      setTotal = _React$useState14[1];

  React.useEffect(function () {
    var totalPlays = bets.reduce(function (memo, data) {
      memo += parseFloat(data.m);
      return memo;
    }, 0);
    setTotal(totalPlays);
  }, [bets]);

  var handleSelectSign = function handleSelectSign(index) {
    var a = [].concat(_toConsumableArray(signs));
    a[index].checked = !a[index].checked;
    setSign(a);
  };

  var handleSetCombination = function handleSetCombination(event) {
    setCombination(event.target.value);
  };

  var handleSelectCombinations = function handleSelectCombinations() {
    if (!combination) {
      sweetAlert('Error', 'Debe Escoger una combination', 'warning');
      return;
    }
    if (combination.split('').length != 5) {
      sweetAlert('Error', 'La combinacion deben ser 5 digitos', 'warning');
      return;
    }
    if (!handleCheckSign()) {
      sweetAlert('Error', 'Debe seleccionar al menos un signo', 'warning');
      return;
    }

    var selectedSigns = signs.filter(function (p) {
      return p.checked;
    }).map(function (item) {
      return item.code;
    }).reduce(function (memo, data) {
      memo.push({ s: data, n: combination, m: quintico.monto_quintico });
      return memo;
    }, []);
    setBets(bets.concat(selectedSigns));
    handleClear(null);
  };

  var handleCheckSign = function handleCheckSign() {
    return signs.filter(function (item) {
      return item.checked;
    }).length > 0;
  };

  var handleClear = function handleClear(type) {
    var a = [].concat(_toConsumableArray(signs));
    a.forEach(function (item) {
      item.checked = false;
    });
    setSign(a);
    setCombination('');

    if (type === 'complete') setBets([]);
  };

  var signName = function signName(code) {
    return signs.filter(function (sign) {
      return sign.code == code;
    })[0].name;
  };

  var sendBetData = function sendBetData() {
    var copyBets = [].concat(_toConsumableArray(bets));
    copyBets.map(function (bet, i) {
      return bet.i = i;
    });
    setBets(copyBets);

    fetch('../palmera.jsp').then(function (res) {
      return res.json();
    }).then(function (result) {
      console.log(result);
    }, function (error) {
      console.log('Hubo un error', error);
    });
  };

  var prepareData = function prepareData() {
    var data = new FormData();
    data.append('jug', JSON.stringify(bets));
    data.append('action', 'recarga');
    data.append('tipo', 'tuquintico');
    data.append('cedula', document.getElementById('cedulaH').value);
    data.append('telefono', document.getElementById('telefonoH').value);
    data.append('banco_id', document.getElementById('bancoH').value);
    data.append('monto', total);
    data.append('modo', 'web');
    data.append('numero', '0');

    return data;
  };

  var handleDelete = function handleDelete(index) {
    a = [].concat(_toConsumableArray(bets));
    a.splice(index, 1);
    setBets(a);
  };

  return React.createElement(
    'section',
    null,
    React.createElement(
      'div',
      { className: 'container-cluid' },
      React.createElement(
        'div',
        { className: 'row text-center' },
        React.createElement(
          'div',
          { className: 'btn-group', role: 'group', 'aria-label': 'Basic example' },
          React.createElement(
            'button',
            { type: 'button', className: 'btn btn-secondary', onClick: function onClick() {
                return setRandom(true);
              } },
            'Random'
          ),
          React.createElement(
            'button',
            { type: 'button', className: 'btn btn-secondary', onClick: function onClick() {
                return setRandom(false);
              } },
            'Clasic'
          )
        )
      )
    ),
    random ? React.createElement(
      'div',
      { className: 'container-cluid' },
      React.createElement(
        'div',
        { className: 'row' },
        'random'
      )
    ) : React.createElement(
      'div',
      { className: 'container-fluid contentTaquilla' },
      React.createElement(
        'div',
        { className: 'row justify-content-center' },
        React.createElement(
          'div',
          { className: 'col-md-8' },
          React.createElement(
            'div',
            { className: 'content-combination' },
            React.createElement(
              'div',
              { className: 'row justify-content-center' },
              React.createElement(
                'div',
                { className: 'combination-boxes' },
                React.createElement(
                  'div',
                  { className: 'box' },
                  React.createElement(
                    'form',
                    { name: 'form', 'no-validate': 'false' },
                    React.createElement(
                      'label',
                      { htmlFor: 'combination', className: 'combination-label' },
                      'Jugada'
                    ),
                    React.createElement('input', { type: 'text', className: 'no-border i-box', maxLength: '5', placeholder: '00000', value: combination, onChange: handleSetCombination })
                  )
                ),
                React.createElement(
                  'p',
                  { className: 'note' },
                  React.createElement(
                    'strong',
                    null,
                    'Importante:'
                  ),
                  ' Todos los ',
                  React.createElement(
                    'strong',
                    null,
                    'aciertos'
                  ),
                  ' son de ',
                  React.createElement(
                    'strong',
                    null,
                    'derecha a izquierda'
                  )
                )
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'content-signs' },
            React.createElement(
              'div',
              { className: 'row text-center' },
              signs.map(function (sign, index) {
                return React.createElement(
                  'div',
                  { className: 'sign', key: index },
                  React.createElement(
                    'label',
                    { key: index, htmlFor: sign.name, onClick: function onClick() {
                        return handleSelectSign(index);
                      } },
                    React.createElement(
                      'figure',
                      { className: sign.checked ? 'active' : '' },
                      React.createElement('img', { src: sign.imagen, alt: sign.name, className: 'img-responsive' })
                    )
                  )
                );
              })
            ),
            React.createElement(
              'div',
              { className: 'row text-center' },
              React.createElement(
                'button',
                { className: 'btn btn-primary', onClick: function onClick() {
                    return handleSelectCombinations();
                  } },
                'Agregar'
              )
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'col-md-4' },
          React.createElement(
            'div',
            { className: 'content-plays' },
            React.createElement(
              'div',
              { className: 'draw-info' },
              React.createElement(
                'p',
                null,
                'Tu Quintico'
              ),
              React.createElement(
                'p',
                null,
                'Sorteo # ',
                React.createElement(
                  'span',
                  { id: 'montoQuintico' },
                  ' ',
                  quintico.sorteo_quintico,
                  ' '
                )
              ),
              React.createElement(
                'p',
                null,
                'Fecha: ',
                React.createElement(
                  'span',
                  { id: 'fechaQuintico' },
                  ' ',
                  quintico.fecha_sorteo_quintico,
                  ' '
                )
              ),
              React.createElement(
                'p',
                null,
                'Precio: ',
                React.createElement(
                  'span',
                  { id: 'montoQuintico' },
                  ' ',
                  parseFloat(quintico.monto_quintico),
                  ' Bs. '
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'plays' },
              React.createElement(
                'table',
                { className: 'table tableFixHead tablePlays' },
                React.createElement(
                  'thead',
                  { className: 'tablePlaysThead' },
                  React.createElement(
                    'tr',
                    { className: 'tablePlaysTr' },
                    React.createElement(
                      'td',
                      { className: 'tablePlaysTd' },
                      'Combinacion'
                    ),
                    React.createElement(
                      'td',
                      { className: 'tablePlaysTd' },
                      'Signo'
                    ),
                    React.createElement(
                      'td',
                      { className: 'tablePlaysTd' },
                      '\xA0'
                    )
                  )
                ),
                React.createElement(
                  'tbody',
                  { className: 'tablePlaysTbody' },
                  bets.map(function (item, index) {
                    return React.createElement(
                      'tr',
                      { className: 'tablePlaysTrTbody', key: index },
                      React.createElement(
                        'td',
                        { className: 'tablePlaysTbodyTd' },
                        item.n
                      ),
                      React.createElement(
                        'td',
                        { className: 'tablePlaysTbodyTd' },
                        signName(item.s)
                      ),
                      React.createElement(
                        'td',
                        { className: 'tablePlaysTbodyTd' },
                        React.createElement('i', { className: 'fa fa-trash text-danger pointer', onClick: function onClick() {
                            return handleDelete(index);
                          } })
                      )
                    );
                  })
                ),
                React.createElement(
                  'tfoot',
                  null,
                  React.createElement(
                    'tr',
                    null,
                    React.createElement(
                      'td',
                      { style: { with: '100%', textAlign: 'right' } },
                      'Total: ',
                      total
                    )
                  )
                )
              )
            )
          ),
          React.createElement(
            'div',
            null,
            React.createElement(
              'div',
              { className: 'col-xs-6 text-center' },
              React.createElement(
                'button',
                { type: 'button', className: 'btn btn-warning', onClick: function onClick() {
                    return handleClear('complete');
                  } },
                'Limpiar'
              )
            ),
            React.createElement(
              'div',
              { className: 'col-xs-6 text-center' },
              React.createElement(
                'button',
                { className: 'btn btn-primary', onClick: function onClick() {
                    return sendBetData();
                  } },
                'Vender'
              )
            )
          )
        )
      )
    )
  );
};

var domContainer = document.querySelector('#taquilla');
var root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(App, null));