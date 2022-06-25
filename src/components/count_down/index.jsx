import Countdown from 'react-countdown'

const CountDownComponent = ({ time, center }) => {

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <h1>Esta rifa ya fue completada</h1>
    } else {
      // Render a countdown
      return (
        <div className={`w-full ${center ? "text-center" : ""}`}>
          <h3 className="text-3xl font-bold my-8">Esta rifa finaliza en:</h3>
          <div className="stats shadow">

            <div className="stat place-items-center">
              <div className="stat-title">Días</div>
              <div className="stat-value">{days}</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">Horas</div>
              <div className="stat-value">{hours}</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">Minutos</div>
              <div className="stat-value text-secondary">{minutes}</div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">Segundos</div>
              <div className="stat-value">{seconds}</div>
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <Countdown
      date={time}
      renderer={renderer}
    />
  )
}

export default CountDownComponent
