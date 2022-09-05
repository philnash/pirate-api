import { PirateApiError, PirateApiHttpError } from "./errors.ts";

async function makeRequest(url: URL): Promise<Response> {
  try {
    return await fetch(url);
  } catch (error) {
    throw new PirateApiError(error.message);
  }
}

export async function request(url: URL) {
  const response = await makeRequest(url);
  if (response.ok) {
    return await response.text();
  } else {
    throw new PirateApiHttpError(response.statusText, response.status);
  }
}
