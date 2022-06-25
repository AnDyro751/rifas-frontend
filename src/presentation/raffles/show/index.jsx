import RaffleSerializer from '../../../serializers/raffle'
import { useEffect, useState } from 'react'
import RafflesNetwork from '../../../network/api/raffles'
import { useRouter } from 'next/router'
import RaffleTicketItem from './ticket'
import RafflePagination from './pagination'
import { toast } from 'react-hot-toast'
import SelectedItems from './selected_items'
import RaffleBanner from '../banner'
import CountDownComponent from '../../../components/count_down'
import ShowTicketsPricing from '../../../components/show_tickets_pricing'

const ShowRafflePresentation = ({ raffle }) => {
  const raffleItem = new RaffleSerializer(raffle)
  const router = useRouter()
  const [tickets, setTickets] = useState([])
  const [loading, setLoading] = useState(true)
  const [pagination, setPagination] = useState({ total_pages: 1, current_page: 1 })
  const [selectedTickets, setSelectedTickets] = useState([])

  useEffect(async () => {
    await makeRequest(1, false)
    setLoading(false)
  }, [])

  const makeRequest = async (page, shallow = true) => {
    router.query.page = page || router.query.page || 1
    if (shallow) {
      router.push({
        pathname: router.pathname,
        query: router.query
      }, {}, { shallow: true })
    }
    const ticketsResponse = await new RafflesNetwork().get_tickets({
      slug: router.query.slug,
      query: router.query
    })
    if (ticketsResponse.success) {
      setPagination({
        total_pages: ticketsResponse.pagination.total_pages,
        current_page: ticketsResponse.pagination.current_page
      })
      setTickets(ticketsResponse.data)
    }
  }

  const onHandleClick = (ticket) => {
    toast.success(`Boleto #${ticket.attributes?.number} seleccionado`)
    setSelectedTickets([...selectedTickets, ticket])
  }

  const currentPage = () => {
    return parseInt((router.query.page || 1))
  }

  const onHandleNext = async () => {
    const newPage = currentPage() + 1
    await makeRequest(newPage)
    toast.success('Mostrando nuevos boletos')
  }

  const onHandleBack = async () => {
    const newPage = currentPage() <= 1 ? 1 : currentPage() - 1
    await makeRequest(newPage)
    toast.success('Mostrando nuevos boletos')
  }

  const onHandleReset = async () => {
    await makeRequest(1)
    toast.success('Mostrando nuevos boletos')
  }

  const onHandleRemove = (ticket) => {
    setSelectedTickets([...selectedTickets.filter((el) => el.id !== ticket.id)])
    toast.error('Boleto eliminado')
  }

  return (
    <section className="w-full">
      <RaffleBanner raffle={raffle} with_link={false}/>

      <section className="w-full flex justify-center my-12">
        <div className="w-11/12" >
          <ShowTicketsPricing raffle={raffle}/>
        </div>
      </section>

      <section className="w-full my-12 flex justify-center">
        <div className="w-6/12 inline-flex">
          <CountDownComponent
            center
            time={new Date(raffleItem.departure_date).getTime()}
          />
        </div>
      </section>


      {
        selectedTickets.length > 0 && (
          <SelectedItems
            raffle={raffle}
            selectedTickets={selectedTickets}
            onHandleRemove={onHandleRemove}
          />
        )
      }
      {
        loading && (
          <div>Cargando...</div>
        )
      }
      {
        !loading && (
          <div id="tickets">
            <section className="flex justify-center mb-10">
              <RafflePagination
                handleReset={onHandleReset}
                pagination={pagination}
                handleNext={onHandleNext}
                handleBack={onHandleBack}
                raffle={raffle}
              />
            </section>
            <div
              className="py-8 px-8 bg-base-300 flex flex-wrap">
              {
                tickets.map((ticket, i) => (
                  <RaffleTicketItem
                    ticket={ticket}
                    handleRemove={() => onHandleRemove(ticket)}
                    handleClick={() => onHandleClick(ticket)}
                    key={i}
                    isSelected={selectedTickets.find((el) => el.id === ticket.id)}
                  />
                ))
              }
            </div>
            <section className="flex justify-center mt-12">
              <RafflePagination
                pagination={pagination}
                handleReset={onHandleReset}
                handleNext={onHandleNext}
                handleBack={onHandleBack}
                raffle={raffle}
              />
            </section>
          </div>
        )
      }
      <section className="w-full my-12 flex justify-center">
        <div className="w-6/12 inline-flex">
          <CountDownComponent
            center
            time={new Date(raffleItem.departure_date).getTime()}
          />
        </div>
      </section>

      <section className="w-full flex justify-center my-12">
        <div className="w-11/12" >
          <ShowTicketsPricing raffle={raffle}/>
        </div>
      </section>
    </section>
  )

}

export default ShowRafflePresentation
