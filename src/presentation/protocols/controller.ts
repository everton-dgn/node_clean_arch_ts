import { HttpRequest, HttpResponse } from '@src/presentation/protocols'

export interface Controller {
  handle(httpRequest: HttpRequest): HttpResponse | void
}
