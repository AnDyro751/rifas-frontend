import RaffleSerializer from './raffle'

class CheckSerializer {

  constructor (check = {}, include = []) {
    this.id = check.attributes?.bank_uuid || ''
    this.number = check.attributes?.number || ''
    this.deleted = check.attributes?.deleted || false
    this.payed = check.attributes?.payed || false
    this.payment_quantity  = check.attributes?.payment_quantity
    this.tickets = include.filter((el) => el.type === 'ticket') || []
    this.raffle = new RaffleSerializer(include.find((el) => el.type === 'raffle'))
  }

}

export default CheckSerializer
