export default class RaffleSerializer {
  constructor (raffle) {
    this.title = raffle.attributes?.title || ''
    this.id = raffle.attributes?.id || ''
    this.reward = raffle.attributes?.reward || ''
    this.description = raffle.attributes?.description || ''
  }
}
