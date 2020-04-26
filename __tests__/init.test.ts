import NameParse from '../src/index';
import { NAMEPARSE_KEY } from "./env";
test('Initialize NameParse', () => {
    const options = { key: NAMEPARSE_KEY };
    const np = new NameParse(options);
    expect(np).not.toBe(null);
});