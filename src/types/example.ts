export interface typeInitialState {
  requestStatus: string;
  exampleErrors?: object;
  data?: any;
}

export interface PayloadType {
  data?: string;
}

export interface actionType {
  payload?: PayloadType;
  type: any;
}
