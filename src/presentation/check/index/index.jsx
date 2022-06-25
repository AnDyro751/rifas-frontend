import { useState } from 'react'
import { toast } from 'react-hot-toast'
import fetcher from '../../../utils/fetcher'
import ChecksNetwork from '../../../network/api/checks'
import { useRouter } from 'next/router'
import CheckSerializer from '../../../serializers/check'
import InputComponent from '../../../components/form/input'
import ChecksRoutes from '../../../../routes/backend/checks_routes'

const CheckPresentation = () => {
  const [ticket, setTicket] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!ticket) {
      setError('Ingresa un número de ticket')
      toast.error('Ingresa un número de ticket')
      return
    }
    setLoading(true)
    const response = await fetcher({
      url: new ChecksRoutes().get({
        slug: ticket
      })
    })
    setLoading(false)

    if (response.success) {
      const checkSerialized = new CheckSerializer(response.data)
      return await router.push(`/b/${checkSerialized.id}`)
    }

    response.errors.map((error) => (
      toast.error(error)
    ))

  }

  const handleChange = (e) => {
    const value = e.target.value
    setTicket(e.target.value)
    if (value.length <= 0) {
      setError('Ingresa un número de ticket')
    } else {
      setError('')
    }
  }

  return (
    <section
      className="w-full flex justify-center"
    >
      <div className="w-4/12">
        <h1 className="text-3xl font-bold my-12">Consulta el status de tu boleto</h1>

        <form
          onSubmit={onSubmit}
        >
          <InputComponent
            value={ticket}
            error={error}
            onChange={(e) => {
              handleChange(e)
            }}
            id="ticket"
            label="Ticket"
            placeholder="Ej: 524f4-40"
            name="ticket"
          />

          <div className="divider"/>
          <div className="flex w-full justify-end">
            <button
              disabled={loading || error}
              type="submit"
              className={`btn btn-primary ${loading ? 'loading' : ''}`}
            >
              Consultar boleto
            </button>
          </div>
        </form>
      </div>

    </section>
  )
}

export default CheckPresentation
