export const EXAMPLE_REQUEST = 'EXAMPLE_REQUEST';
export const EXAMPLE_SUCCESS = 'EXAMPLE_SUCCESS';
export const EXAMPLE_FAIL = 'EXAMPLE_FAIL';

export function getExampleRequest(data: any) {
  return {
    type: EXAMPLE_REQUEST,
    payload: { data },
  };
}
