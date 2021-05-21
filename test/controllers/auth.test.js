/*******************************************************************************
* File Name      : auth.test.js                                                *
* Created Date   : Saturday, May 1st 2021, 1:43:56 pm                          *
* Author         : Hwang SanHo                                                 *
* Email          : tksgh1000@naver.com                                         *
* Copyright (c) 2021 San Form Co.                                              *
*******************************************************************************/

// Description : auth controller를 test 합니다.

const request = require('supertest');
const app = require('../../app');
// setup db
require('../../bin/db');


describe('auth API를 테스트합니다.', () => {
    const route = '/auth';
    // ! test를 할경우 DB안에 데이터가 저장됨!
    // test('test registerPost', () => {
    //     // test registerPost
    //     var url = route + '/register';
        
    // const POST = {
    //     email: { type: "email" },
    //     passwd: { type: "string" },
    //     firstname: { type: "string", max:100 },
    //     lastname: { type: "string", max:100 },
    //     address: { type: "string", min: 10, max:100 }
    // };

    // var res = await request(app)
    // .post(url)
    // .set('Accept', 'application/json')
    // .send(POST);
    // });

    test('test loginPost', async () => {
        var url = route + '/login';
        // const schema = {
        //     email: { type: "email" },
        //     passwd: { type: "string" }
        // }
        const POST = {
            "email": 'dumy@dumy.com',
            "passwd": 'passwd'
        }

        var res = await request(app).post(url).set('Accept', 'application/json')
        .type('application/json').send(POST);

        console.log( res.body ); 
        expect( res.status ).toBe(200);
    });


});
