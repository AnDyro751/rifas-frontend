import { useEffect, useState } from 'react'
import classNames from 'classnames'

const RaffleTicketItem = ({ ticket, handleClick, handleRemove, removed = false, isSelected = false }) => {
  const [selected, setSelected] = useState(isSelected)
  const taken = ticket.attributes?.taken
  const itemClass = classNames({
    'px-2 w-12 h-12 items-center flex justify-center rounded text-center mb-2 mr-2': true,
    'bg-black text-white cursor-pointer': !taken,
    'bg-gray-500 text-gray-600 select-none cursor-not-allowed': taken && !selected,
    'bg-green-600 text-white shadow-lg cursor-pointer': selected
  })

  useEffect(() => {
    setSelected(isSelected)
  }, [isSelected])

  return (
    <button
      disabled={ticket.attributes?.taken}
      onClick={() => {
        if (!ticket.attributes?.taken) {
          setSelected(!selected)
          if (selected || removed) {
            handleRemove()
          } else {
            handleClick ? handleClick() : null
          }
        }
      }}
      className={itemClass}
    >
      <p>{ticket.attributes?.number}</p>
    </button>
  )

}

export default RaffleTicketItem
