export default class RaffleSerializer {
  constructor (raffle, include = []) {
    this.title = raffle?.attributes?.title || ''
    this.id = raffle?.attributes?.id || ''
    this.reward = raffle?.attributes?.reward || ''
    this.description = raffle?.attributes?.description || ''
    this.tickets = include.filter((el) => el.type === 'ticket') || []
    this.one_ticket_price = raffle?.attributes?.one_ticket_price
    this.two_tickets_price = raffle?.attributes?.two_tickets_price
    this.five_tickets_price = raffle?.attributes?.five_tickets_price
    this.ten_tickets_price = raffle?.attributes?.ten_tickets_price
    this.twenty_tickets_price = raffle?.attributes?.twenty_tickets_price
    this.fifty_tickets_price = raffle?.attributes?.fifty_tickets_price
    this.hundred_tickets_price = raffle?.attributes?.hundred_tickets_price
    this.cover_urls = raffle?.attributes?.cover_urls || []
  }
}
