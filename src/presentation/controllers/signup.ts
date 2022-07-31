import { MissingParamError } from '@src/presentation/errors/missing-param-error'
import { HttpRequest, HttpResponse } from '@src/presentation/protocols/http'

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse | void {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamError('name')
      }
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissingParamError('email')
      }
    }
  }
}
