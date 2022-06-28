import RaffleSerializer from '../../serializers/raffle'
import { useState } from 'react'

const ShowTicketsPricing = ({ raffle = [] }) => {
  const raffleSerialized = new RaffleSerializer(raffle)

  const [viewMore, setViewMore] = useState(false)

  return (
    <div className="w-full flex flex-wrap space-y-4">
      <div className="w-full flex md:hidden space-y-4 flex-wrap">
        <div className="flex space-x-4 w-full">
          <Item
            title="1 boleto por"
            price={raffleSerialized.one_ticket_price * 1}
          />
          <Item
            title="2 boletos por"
            price={raffleSerialized.two_tickets_price * 2}
          />
        </div>

        <div className="flex space-x-2 w-full">
          <Item
            title="5 boleto por"
            price={raffleSerialized.five_tickets_price * 5}
          />
          <Item
            title="10 boletos por"
            price={raffleSerialized.ten_tickets_price * 10}
          />
        </div>

        <div className="flex space-x-2 w-full">
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
      <div className="w-full hidden space-x-4 md:flex">
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
  <div className="w-6/12 md:w-2/12 stats shadow text-center">
    <div className="stat bg-base-200 p-2 md:p-4 md:rounded-xl rounded">
      <div className="stat-title">{title}</div>
      <div className="stat-value mt-1 text-xl">{price} MXN</div>
    </div>
  </div>
)

export default ShowTicketsPricing
