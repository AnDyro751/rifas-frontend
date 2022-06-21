import { useRouter } from 'next/router'

const RafflePagination = ({ raffle, pagination, handleNext, handleBack, handleReset }) => {
  const router = useRouter()

  return (
    <div className="btn-group">
      <button className="btn"
              disabled={parseInt((router.query.page || 1)) === 1}
              onClick={handleBack}
      >
        «
      </button>
      <button
        onClick={handleReset}
        className="btn">Página {router.query.page || 1} de {pagination.total_pages}</button>
      <button
        disabled={parseInt((router.query.page || 1)) === pagination.total_pages}
        onClick={handleNext}
        className="btn">»
      </button>
    </div>
  )

}

export default RafflePagination
