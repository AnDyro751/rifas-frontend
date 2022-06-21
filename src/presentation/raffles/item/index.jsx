import RaffleSerializer from '../../../serializers/raffle'
import Link from 'next/link'

const RaffleItem = ({ raffle }) => {
  const raffleItem = new RaffleSerializer(raffle)
  return (
    <article>
      <p>Rifa:</p>
      <Link href={`/rifas/${raffleItem.id}`}>
        <a>{raffleItem.title}</a>
      </Link>
      <p>{raffleItem.reward}</p>
    </article>
  )
}

export default RaffleItem
