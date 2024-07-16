import Login_po from "../../support/pageobject/orangehrm/loginpage";
import Logout_po from "../../support/pageobject/orangehrm/logout";
import Link_po from "../../support/pageobject/orangehrm/link_po";

describe('', () => {

    const login = new Login_po;
    const logout = new Logout_po;
    const link = new Link_po;


    it('test 1', () => {

        login.EnterURL();
        login.Login();

        link.linkclick('Admin');

        logout.logout();
        
    });
});