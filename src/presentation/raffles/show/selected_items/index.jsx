import RaffleTicketItem from '../ticket'
import RaffleModalCreate from '../modal_create'

const SelectedItems = ({ selectedTickets, onHandleRemove, raffle }) => {


  return (
    <section className="fixed bottom-0 px-2 md:px-12 py-4 bg-white w-full shadow-2xl">
      <div className="mb-2">
        <p className="text-gray-700">Para remover haz click en el boleto</p>
      </div>
      <div className="w-full space-x-2 flex items-center justify-between">
        <div
          className="md:-ml-4 w-6/12 md:w-10/12 flex overflow-x-hidden flex-wrap max-w-full max-h-28 overflow-y-auto"
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
        <RaffleModalCreate
          visible={false}
          selectedTickets={selectedTickets}
          raffle={raffle}
        />
      </div>
    </section>
  )
}
export default SelectedItems
