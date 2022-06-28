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
          <div className="stats shadow flex border-2 border-gray-500">
            <div className="stat place-items-center p-2 md:px-0">
              <div className="stat-title text-sm md:text-base">Días</div>
              <div className="stat-value text-4xl mt-2">{days}</div>
            </div>

            <div className="stat place-items-center p-2 md:px-0">
              <div className="stat-title text-sm md:text-base">Horas</div>
              <div className="stat-value mt-2">{hours}</div>
            </div>

            <div className="stat place-items-center p-2 md:px-0">
              <div className="stat-title text-sm md:text-base">Minutos</div>
              <div className="stat-value text-secondary mt-2">{minutes}</div>
            </div>

            <div className="stat place-items-center p-2 md:px-0">
              <div className="stat-title text-sm md:text-base">Segundos</div>
              <div className="stat-value mt-2">{seconds}</div>
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
