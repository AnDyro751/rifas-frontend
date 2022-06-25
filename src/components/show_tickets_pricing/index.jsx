import RaffleSerializer from '../../serializers/raffle'

const ShowTicketsPricing = ({ raffle = [] }) => {
  const raffleSerialized = new RaffleSerializer(raffle)

  console.log("RAA", raffleSerialized, "")

  return (
    <div className="w-full flex flex-wrap space-y-4">
      <div className="w-full flex space-x-4">
        <Item
          title="1 boleto por"
          price={raffleSerialized.one_ticket_price * 1}
        />

        <Item
          title="2 boleto por"
          price={raffleSerialized.two_tickets_price * 2}
        />


        <Item
          title="5 boletos por"
          price={raffleSerialized.five_tickets_price * 5}
        />

        <Item
          title="10 boletos por"
          price={raffleSerialized.ten_tickets_price * 10}
        />
      </div>
      <div className="w-full flex space-x-4 justify-center">
        <Item
          title="20 boletos por"
          price={raffleSerialized.twenty_tickets_price * 20}
        />
        <Item
          title="50 boletos por"
          price={raffleSerialized.fifty_tickets_price * 50}
        />
      </div>
    </div>
  )
}

const Item = ({ title = '', price = '' }) => (
  <div className="w-3/12 stats shadow text-center">
    <div className="stat bg-base-200">
      <div className="stat-title">{title}</div>
      <div className="stat-value mt-1">{price} MXN</div>
    </div>
  </div>
)

export default ShowTicketsPricing
