import RaffleTicketItem from '../ticket'
import RaffleSerializer from '../../../../serializers/raffle'

const SelectedItems = ({ selectedTickets, onHandleRemove, raffle }) => {
  console.log(raffle, 'RAFFLEI')
  const raffleSerialized = new RaffleSerializer(raffle)
  const getPrice = () => {
    const lengthItems = selectedTickets.length
    let value = raffleSerialized.one_ticket_price
    if (lengthItems === 1) {
      value = raffleSerialized.one_ticket_price
    } else if (lengthItems >= 5 && lengthItems < 10) {
      value = raffleSerialized.five_tickets_price
    } else if (lengthItems >= 10 && lengthItems < 20) {
      value = raffleSerialized.ten_tickets_price
    } else if (lengthItems >= 20 && lengthItems < 50) {
      value = raffleSerialized.twenty_tickets_price
    } else if (lengthItems >= 50 && lengthItems < 100) {
      value = raffleSerialized.fifty_tickets_price
    } else if (lengthItems >= 100) {
      value = raffleSerialized.hundred_tickets_price
    } else {
      value = raffleSerialized.one_ticket_price
    }
    return value
  }
  const calculatePrice = () => {
    console.log(getPrice(), 'JA')
    return getPrice() * selectedTickets.length
  }
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
            <p className="font-bold">${calculatePrice()} MXN</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default SelectedItems
