export const BASE_URL = "http://localhost:8000/api/v1";

export default function constructFromUrl(endpoint) {
  return `${BASE_URL}/${endpoint}`;
}
