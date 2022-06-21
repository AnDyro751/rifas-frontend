const RaffleTicketItem = ({ ticket, handleClick }) => {

  return (
    <button
      disabled={ticket.attributes?.taken}
      onClick={() => {
        if (!ticket.attributes?.taken) {
          handleClick()
        }
      }}
      className={`
        ${ticket.attributes?.taken ? 'bg-gray-500 text-gray-600 select-none cursor-not-allowed' : 'bg-black text-white cursor-pointer'}
         px-2 w-12 h-12 items-center flex justify-center rounded text-center mb-2 ml-4
         `}
    >
      <p>{ticket.attributes?.number}</p>
    </button>
  )

}

export default RaffleTicketItem
