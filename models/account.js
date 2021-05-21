const mongoose = require('mongoose');

const { makeHash } =require('../utils/makeHash');


const AccountSchema = new mongoose.Schema({
    profile : {
        nickname : { type: String, default: 'nonamed' },
        photo: { type: String, default: 'url://photos' },
        rank: { type: Number, default: 0 },
    },
    auth: {
        email: { type : String },
        passwd: { type: String }
    },
    settings : {
        onDarkmode: { type: Boolean, default: false }
    },
    information : {
        firstname: { type: String },
        lastname: { type: String },
        address: { type: String }
    },
    flags : {
        email_vertified: { type: Boolean, default: false }, // ben
        Banned: { type: Boolean, default: false }
    }
});

/**
 * Create Accounts
 */
AccountSchema.statics.createAccount = function (
    email,
    passwd,
    firstname,
    lastname,
    address
) {
    // 새로운 객체를 생성합니다.
    var newAccount = new this({
        auth : {
            email: email,
            passwd: makeHash(passwd)
        },
        information : {
            firstname: firstname,
            lastname: lastname,
            address: address,
        }
    });
    return newAccount.save(); // promise를 반환합니다.
}

/**
 * email로 Account를 찾습니다.
 */
AccountSchema.statics.findByEmail = function( email ) {
    return this.findOne({
        "auth.email" : email
    }).exec();
}

/**
 * 비밀번호가 맞는지 검사합니다.
 * @return {Boolean} 성공시 true 실패시 false
 */
AccountSchema.methods.validatePasswd = function ( passwd )  {
    
    const hashed = makeHash(passwd);
    return this.auth.passwd == hashed;
}

/**
 * information을 업데이트 합니다.
 */
AccountSchema.methods.updateInformation = function ( info ) {
    // 인포메이션을 업데이트 합니다.
    this.information = info;
    return this.save();
}

module.exports = mongoose.model( 'account', AccountSchema );