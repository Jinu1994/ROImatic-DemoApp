<template>
 
  <div id="app" >
      <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
       
    <div class="row">
    <div class="col-md-12 top-header">
    
       <h6>Hello, I am Roimatic helper, would like to ask you few more questions before you can go ahead and create your first campaign</h6>
     
  
  </div>
  </div>
  <div class="row main-container">
      <div class="col-md-7">
                <div class="card sub-container">
                  <div class="card-header">
                    <strong>Roimatic chat</strong> <button class="btn-success call-back-button"><span class="fa fa-phone"></span> Schedule a callback</button>
                  </div>
                  <botChat v-on:new-property='onNewProperty'></botChat>
                  
              </div>
              
              </div>
              <div class="col-md-5">
                 <div class="card sub-container ">
                  <div class="card-header">
                    <strong>Summary</strong>
                  </div>
                  <div class="card-body summary-data">
                    <ul class="list-group list-group-flush" >
                      <li class="list-group-item" ><label class=" col-md-6 text-muted">Business Category</label> <span> Home Contractors/LandScapers </span></li>
                      <li class="list-group-item" ><label class=" col-md-6 text-muted">Business Sub-Category</label> <span> Air Conditioning </span></li>
                      <li class="list-group-item"><strong >Campaign</strong></li>
                      <li class="list-group-item"> 
                        <ul class="list-group list-group-flush" v-for="property in campaignProperties" :key="property.key">
                            <li class="list-group-item"><label class=" col-md-6 text-muted">{{property.key}}</label> <span> {{property.value}} </span></li>
                      </ul>
                      </li>
                    </ul>
                  </div>
              </div>
            </div>
      </div>
    </div>
  
</template>
<script>

  import '../css/botchat.css'
  import botChat from './bot.vue'

  export default {
  
    name: 'app',
  
    data:function(){
      return {
      campaignProperties:[]
      };
    },
    components:{
      botChat
    },
    methods:{
      onNewProperty:function(property){
          this.campaignProperties.push(property);
      }
    }
  }
</script>
