import { HttpRequest, HttpResponse } from '@src/presentation/protocols/http'

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse | void {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('Missing param: name')
      }
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new Error('Missing param: email')
      }
    }
  }
}
