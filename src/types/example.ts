export interface typeInitialState {
  requestStatus: string;
  exampleErrors: object;
  data: any;
  categories: any[] | null;
}

export interface PayloadType {
  data: string;
}

export interface actionType {
  payload?: PayloadType;
  type: any;
}
