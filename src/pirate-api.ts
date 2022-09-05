import { request } from "./http.ts";

const baseUrl = "https://pirate.monkeyness.com/api";

export async function insult(): Promise<string> {
  const url = new URL(`${baseUrl}/insult`);
  return await request(url);
}
export async function translate(text: string): Promise<string> {
  const url = new URL(`${baseUrl}/translate`);
  url.searchParams.append("english", text);
  return await request(url);
}
