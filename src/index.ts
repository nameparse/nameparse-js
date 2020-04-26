import * as https from "https";

export interface NameParseOptions {
    key: string;
    details?: boolean;
}

export interface ParseResultDetails {
    given: string;
    sur: string;
    middle: string;
    title: string;
    initials: string;
    suffix: string;
    precursor: string;
}

export interface ParseResult {
    id: string;
    name: string;
    first: string;
    last: string;
    middle: string;
    details: ParseResultDetails;
    cached: boolean;
}

class NameParse {
    private _key = "";
    private _details = false;
    constructor(options: NameParseOptions) {
        this._key = options.key;
        this._details = options.details || false;
    }

    public async parse(name: string): Promise<ParseResult> {
        return new Promise((resolve) => https.get({
            hostname: "api.nameparse.com",
            method: "GET",
            path: "/parse?name=" + encodeURI(name) + (this._details ? "&details=true" : ""),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-api-key': this._key
            }
        }, response => {
            let body = '';
            response.on('data', chunk => body += chunk);
            response.on('end', () => {
                resolve(JSON.parse(body));
            });
        }));
    };
}
export default NameParse;