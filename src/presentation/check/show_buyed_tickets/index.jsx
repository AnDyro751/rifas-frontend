import RaffleTicketItem from '../../raffles/show/ticket'
import CheckSerializer from '../../../serializers/check'
import AlertComponent from '../../../components/alert'
import ButtonInstructions from '../../../components/button_instructions'

const ShowBuyedTickets = ({ check, include }) => {
  const checkSerialized = new CheckSerializer(check, include)

  const alertMessage = () => {
    if (checkSerialized.payed) {
      return 'Boleto pagado. ¡Ya tienes asegurado tu lugar en la rifa!'
    }
    return 'Aún no has pagado tu boleto 😰. '
  }

  return (
    <section className="w-full flex justify-center flex-wrap">
      <div className="w-11/12 md:w-10/12">
        <div className="w-full items-center flex flex-wrap">
          <div className="w-full md:w-6/12">
            <h1 className="font-bold text-3xl">Ticket #{checkSerialized.id}</h1>
          </div>
          <div className="w-full md:w-6/12 flex justify-end md:mt-0 mt-4">
            <AlertComponent
              message={alertMessage()}
              type={checkSerialized.payed ? 'success' : 'danger'}
            >
              {
                !checkSerialized.payed && (
                  <ButtonInstructions check={check}>
                    <label htmlFor="instructions" className="btn btn-sm btn-primary">
                      Instrucciones de pago aquí
                    </label>
                  </ButtonInstructions>
                )
              }
            </AlertComponent>
          </div>
        </div>
        <h2 className="mt-8 md:mt-4 font-bold">Boletos seleccionados:</h2>
        <div className="flex w-full flex-wrap md:-ml-4 mt-4">
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
      </div>
    </section>
  )
}
export default ShowBuyedTickets
