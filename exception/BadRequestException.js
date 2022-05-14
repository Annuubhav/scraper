class BadRequestException extends Error {
  constructor (message = 'Bad request params') {
    super(message)
    this.name = 'BadRequestException'
  }
}

module.exports = BadRequestException
