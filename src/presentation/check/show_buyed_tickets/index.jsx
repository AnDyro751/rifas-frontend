import RaffleTicketItem from '../../raffles/show/ticket'
import CheckSerializer from '../../../serializers/check'
import AlertComponent from '../../../components/alert'

const ShowBuyedTickets = ({ check, include }) => {
  const checkSerialized = new CheckSerializer(check, include)
  return (
    <section className="w-full flex justify-center flex-wrap">
      <div className="w-10/12">
        <div className="w-full items-center flex flex-wrap">
          <div className="w-6/12">
            <h1 className="font-bold text-3xl">Ticket #{checkSerialized.id}</h1>
          </div>
          <div className="w-6/12 flex justify-end">
            <AlertComponent
              message="Boleto pagado. ¡Ya tienes asegurado tu lugar en la rifa!"
              type={checkSerialized.payed ? 'success' : 'danger'}
            />
          </div>
        </div>
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
      </div>
    </section>
  )
}
export default ShowBuyedTickets
