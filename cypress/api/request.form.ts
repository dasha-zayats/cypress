import { appConfig } from "./app.config";

export class JsonRequest {
    protected requestData: Partial<Cypress.RequestOptions> = {};

    public method(method: string) {
        this.requestData.method = method;
        return this;
    }
    public url(url: string): this {
        this.requestData.url = url.startsWith("/")
            ? appConfig.baseUrl + url
            : appConfig.baseUrl + "/" + url;
        return this;
    }
    public body(body: string | object): this {
        this.requestData.body = body;
        return this;
    }
    public qs(obj: object): this {
        this.requestData.qs = obj;
        return this;
    }
    public send() {
        const options: Partial<Cypress.RequestOptions> = this.requestData;
        return cy.request(options);
    }
}
