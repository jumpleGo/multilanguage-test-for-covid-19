<template>
  <div id="app">
    <base-navbar />
    <router-view></router-view>
    <license v-if="!policy" class="license" />
  </div>
</template>
<script>
import License from "@/components/License"
import getCountryClass from "@/api/geo"
import BaseNavbar from "@/components/BaseNavbar"
import {mapGetters} from 'vuex'
export default {
  name : "App",
  components : {
    BaseNavbar,
    License
  },
  computed:{
   ...mapGetters({
     policy : 'policy'
   })
  },
  mounted(){
     Promise.resolve(getCountryClass.GetIpInfo()).then(city => {
        this.$store.dispatch('SET_CITY', city);
     });
  },
//   methods : {
//   vkontakte(purl, ptitle, pimg, text){
// 		let url  = 'http://vkontakte.ru/share.php?';
// 		url += 'url='          + encodeURIComponent(purl);
// 		url += '&title='       + encodeURIComponent(ptitle);
// 		url += '&description=' + encodeURIComponent(text);
// 		url += '&image='       + encodeURIComponent(pimg);
// 		url += '&noparse=true';
// 		this.popup(url);
// 	},
// 	odnoklassniki(purl, text) {
// 		let url  = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1';
// 		url += '&st.comments=' + encodeURIComponent(text);
// 		url += '&st._surl='    + encodeURIComponent(purl);
// 		this.popup(url);
// 	},
	
// facebook: function(purl, ptitle, pimg, text) {
// 		let url  = 'http://www.facebook.com/sharer.php?s=100';
// 		url += '&p[title]='     + encodeURIComponent(ptitle);
// 		url += '&p[summary]='   + encodeURIComponent(text);
// 		url += '&p[url]='       + encodeURIComponent(purl);
// 		url += '&p[images][0]=' + encodeURIComponent(pimg);
// 		this.popup(url);
// 	},
// twitter: function(purl, ptitle) {
// 		let url  = 'http://twitter.com/share?';
// 		url += 'text='      + encodeURIComponent(ptitle);
// 		url += '&url='      + encodeURIComponent(purl);
// 		url += '&counturl=' + encodeURIComponent(purl);
// 		this.popup(url);
// 	},
// 	mailru: function(purl, ptitle, pimg, text) {
// 		let url  = 'http://connect.mail.ru/share?';
// 		url += 'url='          + encodeURIComponent(purl);
// 		url += '&title='       + encodeURIComponent(ptitle);
// 		url += '&description=' + encodeURIComponent(text);
// 		url += '&imageurl='    + encodeURIComponent(pimg);
// 		this.popup(url)
// 	},
// popup: function(url) {
// 		window.open(url,'','toolbar=0,status=0,width=626,height=436');
// 	}
//   }
}
</script>

<style lang="scss">
.license{
  width: 320px;
  position: fixed;
  bottom: 30px;
  left : calc((100vw - 320px )/2)

}
#app{
  position: relative;
  font-family: 'Montserrat', sans-serif;
  @media screen and (min-width: 720px) and (max-width: 1920px){
    width: 600px;
    margin-left: calc((100vw - 600px)/2);
    height: 100vh;
  }
}
.covid{
  font-weight: 600;
  text-transform: uppercase;
  color: #08ae4f;
}

.counter {
  #container{
    .item{
      div{
        display: flex;
    justify-content: center;
      }
    }
  }
}
 .head-title{
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 30px;
  }

  .select {
         margin-top: 15px;
         font-size: 20px;
     }
</style>
