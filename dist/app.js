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
    imagen: "/dist/images/signos/aries.png",
    checked: false,
    code: 1,
    name: 'aries'
  }, {
    imagen: "/dist/images/signos/tauro.png",
    checked: false,
    code: 2,
    name: 'tauro'
  }, {
    imagen: "/dist/images/signos/geminis.png",
    checked: false,
    code: 3,
    name: 'geminis'
  }, {
    imagen: "/dist/images/signos/cancer.png",
    checked: false,
    code: 4,
    name: 'cancer'
  }, {
    imagen: "/dist/images/signos/leo.png",
    checked: false,
    code: 5,
    name: 'leo'
  }, {
    imagen: "/dist/images/signos/virgo.png",
    checked: false,
    code: 6,
    name: 'virgo'
  }, {
    imagen: "/dist/images/signos/libra.png",
    checked: false,
    code: 7,
    name: 'libra'
  }, {
    imagen: "/dist/images/signos/escorpion.png",
    checked: false,
    code: 8,
    name: 'escorpio'
  }, {
    imagen: "/dist/images/signos/sagitario.png",
    checked: false,
    code: 9,
    name: 'sagitario'
  }, {
    imagen: "/dist/images/signos/capricornio.png",
    checked: false,
    code: 10,
    name: 'capricornio'
  }, {
    imagen: "/dist/images/signos/acuario.png",
    checked: false,
    code: 11,
    name: 'acuario'
  }, {
    imagen: "/dist/images/signos/piscis.png",
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

  var _React$useState11 = React.useState({ monto: '', fecha: '', numero_sorteo: '' }),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      drawInfo = _React$useState12[0],
      setDrawInfo = _React$useState12[1];

  React.useEffect(function () {
    var data = {
      monto: document.getElementById('montoQuintico').textContent,
      fecha: document.getElementById('fechaQuintico').textContent,
      numero_sorteo: document.getElementById('montoQuintico').textContent
    };
    setDrawInfo(data);
    console.log('data que danlui metio con java', drawInfo, data);
  }, []);

  var handleSelectSign = function handleSelectSign(index) {
    var a = [].concat(_toConsumableArray(signs));
    console.log(a, a[index].checked);
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
      memo.push({ s: data, n: combination, m: 25 });
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
    console.log(code);
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

    fetch('../palmera.jsp', {
      method: 'POST',
      body: prepareData()
    }).then(function (res) {
      handleClear('complete');
      console.log('complete plays');
    });
  };

  var prepareData = function prepareData() {
    var data = new FormData();
    data.append('jug', JSON.stringify(bets));
    data.append('action', 'recarga');
    data.append('tipo', 'tuquintico');
    data.append('monto', bets.reduce(function (memo, data) {
      memo += parseFloat(data.m);return memo;
    }, 0));
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
        { className: 'row justify-content-center' },
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
                'Sorteo N# ',
                React.createElement(
                  'span',
                  { id: 'montoQuintico' },
                  ' N_SORTEO_AQUI '
                )
              ),
              React.createElement(
                'p',
                null,
                'Fecha: ',
                React.createElement(
                  'span',
                  { id: 'fechaQuintico' },
                  ' FECHA_AQUI '
                )
              ),
              React.createElement(
                'p',
                null,
                'Precio: ',
                React.createElement(
                  'span',
                  { id: 'montoQuintico' },
                  ' MONTO_AQUI '
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'plays' },
              React.createElement(
                'table',
                { id: 'tablePlays', className: 'table tableFixHead' },
                React.createElement(
                  'thead',
                  null,
                  React.createElement(
                    'tr',
                    null,
                    React.createElement(
                      'td',
                      null,
                      'Combinacion'
                    ),
                    React.createElement(
                      'td',
                      null,
                      'Signo'
                    ),
                    React.createElement(
                      'td',
                      null,
                      '\xA0'
                    )
                  )
                ),
                React.createElement(
                  'tbody',
                  null,
                  bets.map(function (item, index) {
                    return React.createElement(
                      'tr',
                      { key: index },
                      React.createElement(
                        'td',
                        null,
                        item.n
                      ),
                      React.createElement(
                        'td',
                        null,
                        signName(item.s)
                      ),
                      React.createElement(
                        'td',
                        null,
                        React.createElement('i', { className: 'fa fa-trash text-sanger', onClick: function onClick() {
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
                      { style: { with: '100%' } },
                      'Total:'
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