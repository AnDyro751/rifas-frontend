import CheckSerializer from '../../serializers/check'
import RaffleBanner from '../raffles/banner'
import ShowBuyedTickets from './show_buyed_tickets'
import CountDownComponent from '../../components/count_down'

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
        <ShowBuyedTickets
          check={check}
          include={include}
        />
      </div>


      <section className="flex justify-center">
        <div className="w-11/12 md:w-10/12 flex items-center md:flex-nowrap flex-wrap justify-between">
          <div className="flex justify-center w-full md:w-6/12">
            <div className="w-full">
              <CountDownComponent
                time={new Date(checkSerialized.raffle.departure_date).getTime()}
              />
            </div>
          </div>
          <div className="flex justify-end w-full mt-8 border-t-gray-500 border-t-2 md:w-2/12">
            <div className="w-full flex justify-end">
              <div className="stats shadow w-full">
                <div className="stat place-items-center">
                  <div className="stat-title">
                    {checkSerialized.payed ? 'Total pagado' : 'Total a pagar'}
                  </div>
                  <div className="stat-value mt-1">{checkSerialized.payment_quantity} MXN</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center mt-12 md:mb-16 mb-8">
        <div className="w-11/12 md:w-10/12">
          <h3 className="text-2xl md:text-4xl font-bold uppercase">
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
