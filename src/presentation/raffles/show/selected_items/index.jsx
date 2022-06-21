import RaffleTicketItem from '../ticket'
import RaffleSerializer from '../../../../serializers/raffle'
import calculatePrice from './calculatePrice'

const SelectedItems = ({ selectedTickets, onHandleRemove, raffle }) => {
  const raffleSerialized = new RaffleSerializer(raffle)

  return (
    <section className="fixed bottom-0 px-12 py-4 bg-white w-full shadow-2xl">
      <div className="mb-2">
        <p className="text-gray-700">Para remover haz click en el boleto</p>
      </div>
      <div className="w-full space-x-2 flex items-center">
        <div
          className="-ml-4 w-10/12 flex overflow-x-hidden flex-wrap max-w-full max-h-28 overflow-y-auto"
        >
          {selectedTickets.map((ticket, i) => (
            <RaffleTicketItem
              handleRemove={() => onHandleRemove(ticket)}
              ticket={ticket}
              key={i}
              removed
              isSelected={selectedTickets.find((el) => el.id === ticket.id)}
            />
          ))}
        </div>
        <div className="w-2/12 flex flex-wrap justify-end">
          <div className="w-full">
            <button className="btn btn-primary w-full">Apartar {selectedTickets.length} boletos</button>
          </div>
          <div className="w-full mt-2 text-center">
            <p className="font-bold">${calculatePrice(selectedTickets, raffleSerialized)} MXN</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default SelectedItems
