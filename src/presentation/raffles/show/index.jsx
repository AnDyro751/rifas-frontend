import RaffleSerializer from '../../../serializers/raffle'
import { useEffect, useState } from 'react'
import RafflesNetwork from '../../../network/api/raffles'
import { useRouter } from 'next/router'
import RaffleTicketItem from './ticket'
import RafflePagination from './pagination'
import { toast } from 'react-hot-toast'

const ShowRafflePresentation = ({ raffle }) => {
  const raffleItem = new RaffleSerializer(raffle)
  const router = useRouter()
  const [tickets, setTickets] = useState([])
  const [loading, setLoading] = useState(true)
  const [pagination, setPagination] = useState({ total_pages: 1, current_page: 1 })

  useEffect(async () => {
    await makeRequest()
    setLoading(false)
  }, [])

  const makeRequest = async (page) => {
    router.query.page = page || router.query.page || 1
    router.push({
      pathname: router.pathname,
      query: router.query
    }, {}, { shallow: true })
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
  return (
    <section>
      <h1>{raffleItem.title}</h1>
      {
        loading && (
          <div>Cargando...</div>
        )
      }
      {
        !loading && (
          <>
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
                    handleClick={() => onHandleClick(ticket)}
                    key={i}
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
          </>
        )
      }
    </section>
  )

}

export default ShowRafflePresentation
