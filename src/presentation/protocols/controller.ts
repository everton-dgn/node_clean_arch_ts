import { HttpRequest, HttpResponse } from '@src/presentation/protocols/http'

export interface Controller {
  handle(httpRequest: HttpRequest): HttpResponse | void
}
