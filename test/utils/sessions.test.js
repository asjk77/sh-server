/*******************************************************************************
* File Name      : sessions.test.js                                            *
* Created Date   : Saturday, May 1st 2021, 5:29:02 pm                          *
* Author         : Hwang SanHo                                                 *
* Email          : tksgh1000@naver.com                                         *
* Copyright (c) 2021 San Form Co.                                              *
*******************************************************************************/

// Description :
const sessionUtils = require('../../utils/sessions');

describe('sessions test', () => {
    const s = {};

    test('Test Logins', () => {
        const account = { 
            _id : 1000,
            profile : {
                nickname : "test",
                photo: " dsf",
                rank: 1
            }
        };
        sessionUtils.login(s, account);
        expect( s.LoginInfo ).toEqual( account );

        // test isLogined 
        expect( sessionUtils.isLogined(s)).toEqual( true );
        // session isNot Logined 
        expect ( sessionUtils.isNotLogined(s)).toEqual( false );
        sessionUtils.logout(s);

        expect( s.LoginInfo ).toBeUndefined();
    });

});