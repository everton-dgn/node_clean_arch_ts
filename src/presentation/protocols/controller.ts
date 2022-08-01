import { HttpRequest, HttpResponse } from '@src/presentation/protocols'

export interface Controller {
  handle(httpRequest: HttpRequest): Promise<HttpResponse>
}
