export type ErrorResponse = {
  ok: false;
  message: string;
  values?: Record<string, string>;
};

export type SuccessResponse<T> = {
  ok: true;
  data: T;
};

export type Response<T> = SuccessResponse<T> | ErrorResponse;
