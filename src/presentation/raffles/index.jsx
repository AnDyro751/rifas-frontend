import RaffleItem from './item'

const RafflesPresentation = ({ raffles = [] }) => {
  return (
    <section>
      <h1>Mostrando {raffles.length}</h1>
      {raffles.map((raffle, i) => (
        <RaffleItem raffle={raffle} key={i}/>
      ))}
    </section>
  )
}

export default RafflesPresentation
