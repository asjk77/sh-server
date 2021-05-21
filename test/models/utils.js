/*******************************************************************************
* File Name      : utils.js                                                    *
* Created Date   : Monday, May 17th 2021, 6:50:59 pm                           *
* Author         : Hwang SanHo                                                 *
* Email          : tksgh1000@naver.com                                         *
* Copyright (c) 2021 San Form Co.                                              *
*******************************************************************************/

const AccountModel = require("../../models/account");

// Description :
// dummyAccount를 반환합니다.
exports.getDummyAccount = () => {
    return AccountModel.findByEmail('dumy@dumy.com');
}
