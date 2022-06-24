import CheckSerializer from '../../serializers/check'
import RaffleTicketItem from '../raffles/show/ticket'
import RaffleBanner from '../raffles/banner'
import AlertComponent from '../../components/alert'
import ShowBuyedTickets from './show_buyed_tickets'

const CheckPresentation = ({ check, include }) => {

  const checkSerialized = new CheckSerializer(check, include)

  if (checkSerialized.deleted) {
    return (
      <h1>Este boleto se ha eliminado</h1>
    )
  }

  return (
    <section className="py-10 w-full">
      <div className="w-full mb-4">
        <ShowBuyedTickets check={check} include={include}/>
      </div>


      <section className="w-full flex justify-center mt-12 mb-16">
        <div className="w-10/12">
          <h3 className="text-4xl font-bold uppercase">
            Premios de esta rifa
          </h3>
        </div>
      </section>


      <RaffleBanner
        with_link={true}
        raffle={checkSerialized.raffle}
      />

    </section>
  )

}

export default CheckPresentation
