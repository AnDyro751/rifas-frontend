const getPrice = (selectedTickets, raffleSerialized) => {
  const lengthItems = selectedTickets.length
  let value = raffleSerialized.one_ticket_price
  if (lengthItems === 1) {
    value = raffleSerialized.one_ticket_price
  } else if (lengthItems >= 2 && lengthItems < 5) {
    value = raffleSerialized.two_tickets_price
  } else if (lengthItems >= 5 && lengthItems < 10) {
    value = raffleSerialized.five_tickets_price
  } else if (lengthItems >= 10 && lengthItems < 20) {
    value = raffleSerialized.ten_tickets_price
  } else if (lengthItems >= 20 && lengthItems < 50) {
    value = raffleSerialized.twenty_tickets_price
  } else if (lengthItems >= 50 && lengthItems < 100) {
    value = raffleSerialized.fifty_tickets_price
  } else if (lengthItems >= 100) {
    value = raffleSerialized.hundred_tickets_price
  } else {
    value = raffleSerialized.one_ticket_price
  }
  return value
}
const calculatePrice = (selectedTickets, raffleSerialized) => {
  return getPrice(selectedTickets, raffleSerialized) * selectedTickets.length
}

export default calculatePrice
