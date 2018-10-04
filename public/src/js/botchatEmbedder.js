// import {BotChat} from './botchat'
const params = BotChat.queryParams(location.search);
var user = {
  id: 'user-id',
  name: 'ROIMatic User'
};

  const botConnection = new BotChat.DirectLine({
        domain: params['domain'],
        secret: "9ByOEdqqmKM.cwA.nCM.FKv3qf-ikC9TDNPWSGW4YDZay5yBweT2zN5DN3JMwCE",
        token: params['t'],
        webSocket: params['webSocket'] && params['webSocket'] === 'true' // defaults to true
      });

    

  botConnection
            .postActivity({
                from: user,
                name: 'requestWelcomeDialog',
                type: 'event',
                value: ''
            })
            .subscribe(function (id) {
                console.log('"trigger requestWelcomeDialog" sent');
            });

botConnection.activity$
.filter(activity => activity.type === 'event')
.subscribe(
    event=>{
      console.log(event.value);
    }
);
