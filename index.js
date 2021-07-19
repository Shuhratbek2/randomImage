const { Telegraf } = require("telegraf");
// const Extra = require("telegraf/extra")
const dotenv = require("dotenv");
dotenv.config();
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command('/help', cxt => {
    // console.log(cxt.message.message_id);
    // console.log(cxt.chat)
    // console.log(JSON.stringify(cxt.tg));
    // cxt.replyWithHTML(`${cxt.message.message_id}`)
    // cxt.getChatMember(cxt.chat.id)
})


// {"update":
// {"update_id":504465933,"message":{"message_id":697,"from":{"id":643428965,"is_bot":false,"first_name":"Shuhrat","username":"Suhayl_2020","language_code":"ru"},"chat":{"id":643428965,"first_name":"Shuhrat","username":"Suhayl_2020","type":"private"},"date":1626664874,"text":"/help","entities":[{"offset":0,"length":5,"type":"bot_command"}]}},"tg":{"token":"1846161114:AAE3pEoJBZC7V-PZFL2IrN2dPrap_5yuUPw","options":{"apiRoot":"https://api.telegram.org","apiMode":"bot","webhookReply":true,"agent":{"_events":{},"_eventsCount":2,"defaultPort":443,"protocol":"https:","options":{"keepAlive":true,"keepAliveMsecs":10000,"path":null},"requests":{},"sockets":{},"freeSockets":{"api.telegram.org:443::::::::::::::::::":[{"_tlsOptions":{"pipe":false,"secureContext":{"context":{}},"isServer":false,"requestCert":true,"rejectUnauthorized":true},"_secureEstablished":true,"_securePending":false,"_newSessionPending":false,"_controlReleased":true,"secureConnecting":false,"_SNICallback":null,"servername":"api.telegram.org","alpnProtocol":false,"authorized":true,"authorizationError":null,"encrypted":true,"_events":{"close":[null,null,null]},"_eventsCount":9,"connecting":false,"_hadError":false,"_parent":null,"_host":"api.telegram.org","_readableState":{"objectMode":false,"highWaterMark":16384,"buffer":{"head":null,"tail":null,"length":0},"length":0,"pipes":[],"flowing":true,"ended":false,"endEmitted":false,"reading":true,"sync":false,"needReadable":true,"emittedReadable":false,"readableListening":false,"resumeScheduled":false,"errorEmitted":false,"emitClose":false,"autoDestroy":false,"destroyed":false,"errored":null,"closed":false,"closeEmitted":false,"defaultEncoding":"utf8","awaitDrainWriters":null,"multiAwaitDrain":false,"readingMore":false,"decoder":null,"encoding":null},"_writableState":{"objectMode":false,"highWaterMark":16384,"finalCalled":false,"needDrain":false,"ending":false,"ended":false,"finished":false,"destroyed":false,"decodeStrings":false,"defaultEncoding":"utf8","length":0,"writing":false,"corked":0,"sync":false,"bufferProcessing":false,"writecb":null,"writelen":0,"afterWriteTickInfo":null,"buffered":[],"bufferedIndex":0,"allBuffers":true,"allNoop":true,"pendingcb":0,"prefinished":false,"errorEmitted":false,"emitClose":false,"autoDestroy":false,"errored":null,"closed":false,"closeEmitted":false,"writable":true},"allowHalfOpen":false,"_sockname":null,"_pendingData":null,"_pendingEncoding":"","_server":null,"ssl":{"_parent":{"reading":true,"onconnection":null},"_secureContext":{"context":{}},"reading":true},"_requestCert":true,"_rejectUnauthorized":true,"parser":null,"_httpMessage":null,"timeout":0}]},"keepAliveMsecs":10000,"keepAlive":true,"maxSockets":null,"maxFreeSockets":256,"scheduling":"fifo","maxTotalSockets":null,"totalSocketCount":0,"maxCachedSessions":100,"_sessionCache":{"map

// update_id: 504465922,
// message: {
//   message_id: 680,
//   from: {
//     id: 643428965,
//     is_bot: false,
//     first_name: 'Shuhrat',
//     username: 'Suhayl_2020',
//     language_code: 'ru'
//   },
//   chat: {
//     id: 643428965,
//     first_name: 'Shuhrat',
//     username: 'Suhayl_2020',
//     type: 'private'
//   },
//   date: 1626662974,
//   text: '/help',
//   entities: [ [Object] ]
// }
// }






// obunachilar sonini aniqlash

let obunachilar = [];
let userName = [];

bot.start(cxt => {
    let chat_id = cxt.chat.id;
    if (!obunachilar.includes(chat_id)) {
        obunachilar.push(chat_id);
        userName.push(cxt.chat.username);

    }
    cxt.replyWithHTML(`Assalomu aleykum Men tasodifiy rasm ulashuvchi botman \n 
/random buyrug'i orqali sizga tasodifiy rasm yuboraman , \n
/size 500x500 - kabi buyruq orqali siz istagan o'lchadan rasm yuboraman\n
/album - yordamida bir nechta rasmlar to'plamini oling!~
    `)
})



bot.command("/statika", cxt => {
            cxt.botInfo.can_read_all_group_messages = true;
            // console.log(cxt);
            if (cxt.chat.id === 643428965) {
                cxt.replyWithHTML(`Botning obunachilari ${obunachilar.length}`);
                cxt.replyWithHTML(`botdan foydalnagan Foydalanuvchilar ro'yhati  ${
                        
                            userName.map(val =>{
                                return `\n <b> @`+ val +`</b>`;
                            }).join()
                        }`)
                }
})


// boshlang'ich rasmning o'lchamlar
let width = 1080;
let height = 1080;

let urlImage = `https://picsum.photos/${width}/${height}/?random`;
// const urlConst = urlImage;
const URLrasm = { url: `${urlImage}` };
bot.command("/random", cxt => {
    width = 1080;
    height = 1080;
    // urlConst = urlImage;
    cxt.replyWithPhoto(URLrasm, { caption: `${width}x${height}` })
})


bot.command("/size", cxt => {
            let text = cxt.message.text.toLowerCase();
            let arr = text.split(" ");
            // console.log(arr);
            if (arr.length === 2) {
                        let size1 = arr[1].split("x");
                        // console.log(size1);
                        width = isNaN(+size1[0]) ? width : size1[0];
                        height = isNaN(+size1[1]) ? height : size1[1];
                        // console.log(text, arr[1], size1);
                        // console.log(width, height );

                        return  cxt.replyWithPhoto({url: `${`https://picsum.photos/${width}/${height}/?random`}` }, { caption: `${width}x${height}`     
                        )
            }
            //         Ava - 640x640
            // Post - 1080x1080
            // bot.telegram.sendPhoto(cxt.chat.id, `https://picsum.photos/500/500/?random`)
            // let urlImage = `https://picsum.photos/${width}/${height}/?random`;
            // const urlConst;
            // urlConst = `https://picsum.photos/${width}/${height}/?random`;
            cxt.replyWithPhoto({
                        url: `${`https://picsum.photos/${width}/${height}/?random`}`
            }, { caption: `${width}x${height}` }
            //, parse_mode: 'Markdown' }
            
            )
            // console.log(widht, heigth);
    })
    // bot.start()

bot.on(/\/start (\w+)/, ctx => {
    let arr = ctx.match[1].split("x");
    console.log(ctx.match[1], arr[0])
    bot.telegram.sendPhoto(cxt.chat.id, `https://picsum.photos/500/500/?random`)
        // cxt.replyWithPhoto({
        //     url: `https://picsum.photos/${+arr[0]}/${+arr[1]}/?random`
        // })
})


bot.command('album', (ctx) => {
    let url = "https://picsum.photos/200/500/?random"
    ctx.replyWithMediaGroup([
        // {
        //     media: 'AgADBAADXME4GxQXZAc6zcjjVhXkE9FAuxkABAIQ3xv265UJKGYEAAEC',
        //     caption: 'From file_id',
        //     type: 'photo'
        // },
        // {
        //     media: `${url}`,
        //     caption: 'From URL',
        //     type: 'photo'
        // },
        {
            media: { url: `${url}` },
            caption: 'Piped from URL',
            type: 'photo'
        },
        {
            media: { url: `${url}` },
            caption: 'Piped from URL',
            type: 'photo'
        },
        {
            media: { url: `${url}` },
            caption: 'Piped from URL',
            type: 'photo'
        },
        // {
        //     media: `${url}`,
        //     caption: 'From URL',
        //     type: 'photo'
        // },
        {
            media: { url: `${url}` },
            caption: 'Piped from URL',
            type: 'photo'
        }


        
    ])
})



// bot.on("text", image())

bot.launch()