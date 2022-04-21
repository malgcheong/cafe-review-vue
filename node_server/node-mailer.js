const nodemailer = require("nodemailer");
const KEY='hyovely1234'

const email={
    // "host":"smtp.mailtrap.io",
    // "port":"2525",
    // "secure":false,
    service:"Gmail",
    auth:{
        "user":"ryu8701@gmail.com",
        "pass":""
    }
}



const send = async(data)=>{
    
    nodemailer.createTransport(email).sendMail(data,function(error,info){
        if(error){
            console.log(error);
        }else{
            console.log(info);
            return info.response;
        }
    })
};

const content={
    from:"ryu8701@gmail.com",
    to:"ryu8701@naver.com",
    subject:"[Cafe Community] 본인 인증을 위한 인증코드 안내메일입니다.",
    text:"본인 확인을 위해 아래의 인증코드를 화면에 입력해주세요.\n"+KEY
}
const getAddress=function(address){
    content.to=address
    send(content)
}
send(content)