class CheckSerializer {

  constructor (check = {}, include = []) {
    this.id = check.attributes?.bank_uuid || ''
    this.number = check.attributes?.number || ''
    this.deleted = check.attributes?.deleted || false
    this.payed = check.attributes?.payed || false
    this.tickets = include.filter((el) => el.type === 'ticket') || []
  }

}

export default CheckSerializer
