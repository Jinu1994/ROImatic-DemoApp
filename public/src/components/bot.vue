<template>
 <div class="card-body" id="bot">
                   
   </div>
</template>

<script>
export default {
    name: 'bot-chat',
    mounted:function(){
        var self=this;

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

  BotChat.App({
    botConnection: botConnection,
    user: user,
    bot: { id: 'botid' },
    resize: 'detect'
  }, document.getElementById("bot"));

  
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
        .filter(activity => activity.type === 'event' && activity.text=='summary-data')
        .subscribe(
            event=>{
                console.log(event.value);
               this.$emit('new-property',event.value);
            }
        );

    },
    data() {
  
      return {}
  
    }
  }
</script>