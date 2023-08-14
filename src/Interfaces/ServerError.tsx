export interface ServerError {
  request: {
    status?: number;
  };

  response: {
    data: any;
  };
}