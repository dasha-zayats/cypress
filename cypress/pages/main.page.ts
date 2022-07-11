export class MainPage {
    visit(){
        cy.visit("http://10.10.14.16/");
    }
    login(phone: string, password: string){
        cy.get('input[id="phone"]').type(phone);
        cy.get('input[id="password"]').type(password);
    }
}
