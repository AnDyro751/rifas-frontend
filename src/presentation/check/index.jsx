import CheckSerializer from '../../serializers/check'
import RaffleTicketItem from '../raffles/show/ticket'
const CheckPresentation = ({ check, include }) => {

  const checkSerialized = new CheckSerializer(check, include)

  if (checkSerialized.deleted) {
    return (
      <h1>Este boleto se ha eliminado</h1>
    )
  }

  return (
    <section className="py-10 w-10/12">
      <h1 className="font-bold text-3xl">Ticket #{checkSerialized.id}</h1>

      {
        checkSerialized.payed ? (
            <div class="alert alert-success shadow-lg mt-4">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                     viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Boleto pagado. ¡Ya tienes asegurado tu lugar en la rifa!</span>
              </div>
            </div>
          )
          :
          (
            <div class="alert alert-warning shadow-lg mt-4">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                     viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                </svg>
                <span>
                  Este ticket aún no ha sido pagado.
                  <span class="underline ml-1">
                    Sigue las instrucciones de pago aquí
                  </span>
                </span>
              </div>
            </div>
          )
      }

      <h2 className="mt-4">Boletos seleccionados:</h2>

      <div className="flex w-full flex-wrap -ml-4 mt-4">
        {
          checkSerialized.tickets.map((ticket, i) => (
            <RaffleTicketItem
              key={i}
              isSelected={true}
              ticket={ticket}
              handleClick={() => {}}
              handleRemove={() => {}}
            />
          ))
        }
      </div>
    </section>
  )

}

export default CheckPresentation
