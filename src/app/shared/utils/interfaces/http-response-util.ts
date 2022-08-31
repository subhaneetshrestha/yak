export interface IHttpResponse {
  success(response: Response, data: any, message?: string): Response;
  error(response: Response, error: any): Response;
}
