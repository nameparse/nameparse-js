import NameParse from '../src/index';
import { NAMEPARSE_KEY } from "./env";
test('NameParse: Chris Schuld', async () => {
  const options = { key: NAMEPARSE_KEY };
  const np = new NameParse(options);
  const results = await np.parse("Chris Schuld");
  expect(results.first).toBe("Chris");
  expect(results.last).toBe("Schuld");
});
test('NameParse: Robert Van Loop', async () => {
  const options = { key: NAMEPARSE_KEY };
  const np = new NameParse(options);
  const results = await np.parse("Robert Van Loop");
  expect(results.first).toBe("Robert");
  expect(results.last).toBe("van Loop");
});
test('NameParse (details): Chris Schuld', async () => {
  const options = { key: NAMEPARSE_KEY, details: true };
  const np = new NameParse(options);
  const results = await np.parse("Chris Schuld");
  expect(results.first).toBe("Chris");
  expect(results.last).toBe("Schuld");
  expect(results.details.sur).toBe("Schuld")
});