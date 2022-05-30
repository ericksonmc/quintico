const App = () => {
  const [random, setRandom] = React.useState(false)
  const [categories,] = React.useState([
    { title: '5 Numeros mas Signo', amount: '100.000 USD', main: true },
    { title: '4 Numeros mas Signo', amount: '10.000 USD', main: false },
    { title: '3 Numeros mas Signo', amount: '1000 USD', main: false },
    { title: '2 Numeros mas Signo', amount: '100', main: false },
    { title: '1 Numeros mas Signo', amount: '10', main: false },
    { title: '4 Numeros', amount: '6.000 USD', main: false },
    { title: '3 Numeros', amount: '600  USD', main: false },
    { title: '2 Numeros', amount: '60  USD', main: false },
    { title: '1 Numeros', amount: '6  USD', main: false },
  ])
  const [signs, setSign] = React.useState([
    {
      imagen: "/dist/images/signos/aries.png",
      checked: false,
      code: 1,
      name: 'aries'
    },
    {
      imagen: "/dist/images/signos/tauro.png",
      checked: false,
      code: 2,
      name: 'tauro'
    },
    {
      imagen: "/dist/images/signos/geminis.png",
      checked: false,
      code: 3,
      name: 'geminis'
    },
    {
      imagen: "/dist/images/signos/cancer.png",
      checked: false,
      code: 4,
      name: 'cancer'
    },
    {
      imagen: "/dist/images/signos/leo.png",
      checked: false,
      code: 5,
      name: 'leo'
    },
    {
      imagen: "/dist/images/signos/virgo.png",
      checked: false,
      code: 6,
      name: 'virgo'
    },
    {
      imagen: "/dist/images/signos/libra.png",
      checked: false,
      code: 7,
      name: 'libra'
    },
    {
      imagen: "/dist/images/signos/escorpion.png",
      checked: false,
      code: 8,
      name: 'escorpio'
    },
    {
      imagen: "/dist/images/signos/sagitario.png",
      checked: false,
      code: 9,
      name: 'sagitario'
    },
    {
      imagen: "/dist/images/signos/capricornio.png",
      checked: false,
      code: 10,
      name: 'capricornio'
    },
    {
      imagen: "/dist/images/signos/acuario.png",
      checked: false,
      code: 11,
      name: 'acuario'
    },
    {
      imagen: "/dist/images/signos/piscis.png",
      checked: false,
      code: 12,
      name: 'piscis'
    }
  ])
  const [combination, setCombination] = React.useState('')
  const [bets, setBets] = React.useState([])

  const handleSelectSign = (index) => {
    const a = [...signs]
    console.log(a, a[index].checked)
    a[index].checked = !a[index].checked
    setSign(a)
  }

  const handleSetCombination = (event) => {
    setCombination(event.target.value)
  }

  const handleSelectCombinations = () => {
    if (!combination) sweetAlert('Error', 'Debe Escoger una combination', 'warning')
    if (combination.split('').length != 5) sweetAlert('Error', 'La combinacion deben ser 5 digitos', 'warning')
    if (!handleCheckSign()) sweetAlert('Error', 'Debe seleccionar al menos un signo', 'warning')

    const selectedSigns = signs
      .filter((p) => p.checked)
      .map((item) => { return item.code })
      .reduce((memo, data) => {
        memo.push({ s: data, n: combination, m: 25 })
        return memo;
      }, []);
    setBets(bets.concat(selectedSigns));
    handleClear(null)
  }

  const handleCheckSign = () => {
    return signs.filter((item) => item.checked).length > 0
  }

  const handleClear = (type) => {
    let a = [...signs]
    a.forEach((item) => {
      item.checked = false;
    })
    setSign(a)
    setCombination('')

    if(type ==='complete') setBets([])
  }

  const signName = (code) => {
    console.log(code)
    return signs.filter((sign) => sign.code == code)[0].name
  }

  const sendBetData = () => {
    console.log({jug: JSON.stringify(bets)})
    fetch('/data-to-backend', {
      method: 'POST',
      body: JSON.stringify({jug: bets})
    })
    .then((res)=>{
      handleClear('complete')
    })
  }



  return (
    <section>

      <div className="container-cluid">
        <div className="row justify-content-center">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary" onClick={() => setRandom(true)}>Random</button>
            <button type="button" className="btn btn-secondary" onClick={() => setRandom(false)}>Clasic</button>
          </div>
        </div>
      </div>

      {random
        ?
        <div className="container-cluid">
          <div className="row">
            random
          </div>
        </div>
        :
        <div className="container-fluid contentTaquilla">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="content-combination">
                <div className="row justify-content-center">
                  <div className="combination-boxes">

                    <div className="box">
                      <form name="form" no-validate="false">
                        <label htmlFor="combination" className="combination-label">Jugada</label>
                        <input type="text" className="no-border i-box" maxLength="5" placeholder="00000" value={combination} onChange={handleSetCombination} />
                      </form>
                    </div>


                    <p className="note"><strong>Importante:</strong> Todos los <strong>aciertos</strong> son de <strong>derecha a izquierda</strong></p>
                  </div>
                </div>
              </div>
              <div className="content-signs">
                <div className="row text-center">

                  {signs.map((sign, index) => {
                    return (
                      <div className="sign" key={index}>
                        <label key={index} htmlFor={sign.name} onClick={() => handleSelectSign(index)}>
                          <figure className={sign.checked ? 'active' : ''}>
                            <img src={sign.imagen} alt={sign.name} className="img-responsive" />
                          </figure>
                        </label>
                      </div>
                    )
                  })}

                </div>
                <div className="row text-center">
                  <button className="btn btn-primary" onClick={() => handleSelectCombinations()}>Agregar</button>
                </div>
              </div>

            </div>
            <div className="col-md-4">
              <div className="content-plays">
                <div className="draw-info">
                  <p>Tu Quintico</p>
                  <p>Sorteo N# 1</p>
                  <p>Fecha: 06/07/2022 07:45PM</p>
                  <p>Precio</p>
                </div>

                <div className="plays">
                  <table className="table tableFixHead">
                    <thead>
                      <tr>
                        <td>Combinacion</td>
                        <td>Monto</td>
                      </tr>
                    </thead>
                    <tbody>
                      {bets.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.n} {signName(item.s)}</td>
                            <td>{item.m}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <div className="col-xs-6 text-center">
                  <button type="button" className="btn btn-warning" onClick={() => handleClear('complete')} >Limpiar</button>
                </div>
                <div className="col-xs-6 text-center">
                  <button className="btn btn-primary" onClick={() => sendBetData()}>Vender</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </section>

  )
}

const domContainer = document.querySelector('#taquilla')
const root = ReactDOM.createRoot(domContainer)
root.render(<App />)
