import { v4 as uuid } from 'uuid';
import { loginPage } from '../support/pageObjects/loginPage';
import { GroupOptions, TeamGroupOptions } from '../support/types';
import { groupPage } from '../support/pageObjects/groupPage';

describe('Group Test', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('/');
  });

  it('Should create a group with identities', () => {
    const loginOptions = loginPage.registerMultipleUsers(2);
    const groupOptions: GroupOptions = {
      groupTitle: 'ut_group_' + uuid(),
      groupDescription: 'group description',
    };

    loginPage.giveAdminPrivilege(
      'GroupIdentityCreator',
      loginOptions[0].username,
    );

    cy.login(loginOptions[0]);
    groupPage.createGroup(groupOptions);
    groupPage.addIdentitiesGroup();
    cy.logout();
  });

  it('Should create a team group with identities', () => {
    const loginOptions = loginPage.registerMultipleUsers(1);
    const teamGroupOptions: TeamGroupOptions = {
      groupTitle: 'ut_group_' + uuid(),
      groupDescription: 'group description',
      noOfContestants: '2',
    };

    loginPage.giveAdminPrivilege(
      'GroupIdentityCreator',
      loginOptions[0].username,
    );

    cy.login(loginOptions[0]);
    groupPage.createTeamGroup(teamGroupOptions);
    groupPage.uploadTeamGroups();
    cy.logout();
  });
});
