/*******************************************************************************
* File Name      : account.test.js                                             *
* Created Date   : Thursday, April 29th 2021, 5:13:08 pm                       *
* Author         : Hwang SanHo                                                 *
* Email          : tksgh1000@naver.com                                         *
* Copyright (c) 2021 San Form Co.                                              *
*******************************************************************************/


// setup DB;
require("../../bin/db");
const AccountModel = require('../../models/account' );


describe('Test AccountModel', () => {
    // test('Test createAccount', async (Account) => {
    //     const newAccount = await AccountModel.createAccount(
    //         'dumy@dumy.com',
    //         'passwd',
    //         'firstname',
    //         'lastname',
    //         'address',
    //     ); 
    //     expect(newAccount).toBeDefined();

    //     });

    test('Test findByEmail ', async () => {
        // dumy test
        var account = await AccountModel.findByEmail('ANYTHING');
        expect( account ).toBeNull();

        account = await AccountModel.findByEmail('dumy@dumy.com');
        expect( account._id).toBeDefined(); // 찾을 경우  object 를 반환
        
    });

    test('Test validatePasswd', async () => {
        // dumy test

        var ac = await AccountModel.findByEmail('dumy@dumy.com');
        var result = ac.validatePasswd('passwd');
        // 결과값은 true 아니면 false
        expect( result ).toBe( true );
        // 같아야함! 
    });

    test('Test Update', async () => {
        var ac = await AccountModel.findByEmail('dumy@dumy.com');
        ac.profile.nickname = 'test';

        await ac.save();

        var updated_ac = await AccountModel.findByEmail('dumy@dumy.com');

        expect( updated_ac.profile.nickname ).toEqual( 'test' );
    })

    test('Test updateInformation', async () => {
        var ac = await AccountModel.findByEmail('dumy@dumy.com');

        const infoSchema = {
            firstname: 'firstname_test',
            lastname: 'last_name_test',
            address: 'address_test'
        };

        await ac.updateInformation( infoSchema );

        var newAc = await AccountModel.findByEmail('dumy@dumy.com');

        // ! 이런식으로 코드 구성시 오류 발생 가능 성 존재 { $init : false 가 추가됨..}
        // expect( newAc.information ).toEqual( infoSchema );

        expect( newAc.information.firstname ).toEqual( infoSchema.firstname );
        expect( newAc.information.lastname ).toEqual( infoSchema.lastname );
        expect( newAc.information.address ).toEqual( infoSchema.address );
    });

});