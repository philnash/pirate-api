import { PirateApiHttpError } from "../src/errors.ts";
import { insult, translate } from "../src/pirate-api.ts";
import {
  afterEach,
  assertEquals,
  assertRejects,
  describe,
  it,
  mockFetch,
  unMockFetch,
} from "./test_deps.ts";

describe("pirate-api", () => {
  afterEach(() => {
    unMockFetch();
  });

  const request = new Request("https://pirate.monkeyness.com/api/insult");

  describe("insult", () => {
    it("makes a request to the API and returns a random insult from the API", async () => {
      const randomInsult =
        "Yer face be good fer stoppin' cannonballs, ye poxy, black-spotted lummox! ... Yarr!";
      const mockResponse = new Response(randomInsult, {
        status: 200,
        headers: { "Content-Type": "text/plain" },
      });
      await mockFetch(request, mockResponse);

      const result = await insult();
      assertEquals(result, randomInsult);
    });

    it("throws an HTTP error if the API returns an error", async () => {
      const mockResponse = new Response("Error", {
        status: 500,
        headers: { "Content-Type": "text/plain" },
      });
      await mockFetch(request, mockResponse);

      const error = await assertRejects<PirateApiHttpError>(
        () => insult(),
        PirateApiHttpError,
      );
      assertEquals(error.status, 500);
    });
  });

  describe("translate", () => {
    const originalSentence = "Hello there good sir. How are you today?";
    const url = new URL("https://pirate.monkeyness.com/api/translate");
    url.searchParams.append("english", originalSentence);
    const request = new Request(url);

    it("takes a string and returns a string translation from the API", async () => {
      const mockTranslation = "Ahoy thar good sir. How are ye today?";
      const mockResponse = new Response(mockTranslation, {
        status: 200,
        headers: { "Content-Type": "text/plain" },
      });
      await mockFetch(request, mockResponse);
      const result = await translate(originalSentence);
      assertEquals(result, mockTranslation);
    });

    it("throws an HTTP error if the API returns an error", async () => {
      const mockResponse = new Response("Error", {
        status: 500,
        headers: { "Content-Type": "text/plain" },
      });
      await mockFetch(request, mockResponse);
      const error = await assertRejects<PirateApiHttpError>(
        () => translate(originalSentence),
        PirateApiHttpError,
      );
      assertEquals(error.status, 500);
    });
  });
});
