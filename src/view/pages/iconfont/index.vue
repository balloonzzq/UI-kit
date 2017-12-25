<template>
  <div>
    <div v-for="(type, index) in iconArr" :key="index" class="icons-item">
      <Icon :type="type"></Icon>
      <p>{{type}}</p>
    </div>
  </div>
</template>

<script>
  import Icon from '~components/icon'
  const iconString = 'wordfile,windows,windows-o,videocamera,verticleright,verticleleft,user,upload,up,up-square,up-square-o,up-circle,up-circle-o,unlock,unknowfile,totop,team,tagso,tags,tag,tag-o,tablet,swapright,swapleft,swap,stepforward,stepbackward,star-o,star,solution,smile,smile-o,shrink,setting,shoppingcart,sharealt,search,scan,save,rollback,right,right-square-o,right-square,right-circle-o,right-circle,retweet,reload,question,qrcode,question-circle,question-circle-o,pushpin,pushpin-o,pptfile,poweroff,plus,plus-square-o,plus-square,plus-circle,plus-circle-o,play,play-circle-o,piechart,phone,picture,pdffile,pay-circle,pay-circle-o,pause,pause-circle-o,pause-circle,paperclip,notification,mobile,minus,minus-square,minus-square-o,minus-circle,minus-circle-o,message,menuunfold,menufold,meho,meh,mail,logout,lock,link,loading,like,linechart,left,left-square,left-square-o,left-circle-o,left-circle,laptop,jpgfile,info,info-cirlce,info-cirlce-o,inbox,ie,home,heart,heart-o,hdd,github,frown,frown-o,forward,folderopen,folder,filter,fastforward,file,filetext,eye,fastbackward,eye-o,export1,export,exclefile,exclamation,exclamation-circle,enviroment-o,exclamation-circle-o,exception,enviroment,enter,ellipsis,edit,download,down,down-circle-o,down-circle,down-square,down-square-o,doubleright,delete,doubleleft,customerservice,dotchart,dislike,desktop,copy,creditcard,code-square-o,code-square,cloudupload,cloudupload-o,clouddownload-o,clouddownload,cloud,cloud-o,close-circle,close,close-square-o,close-square,circledown-o,close-circle-o,chrome,clock-circle,circledown,clock-circle-o,check-circle,check-circle-o,check,check-square,check-square-o,caretdown,caretup,caretright,caretleft,calendar,camera,camera-o,book,calculator,bars,barchart,barschart,arrowup,banckward,areachart,arrowsalt,arrowright,arrowleft,arrowdown,appstore,android,aliwangwang,appstore-o,apple,apple-o,aliwangwang-o'
  export default {
    data() {
      return {
        iconArr: iconString.split(',')
      }
    },
    components: {
      Icon,
    },
  }
</script>

<style lang="less">
.icons-item {
    float: left;
    margin: 6px 6px 6px 0;
    width: 72px;
    text-align: center;
    list-style: none;
    cursor: pointer;
    height: 100px;
    color: #555;
    transition: all 0.2s ease;
    position: relative;
    padding-top: 10px;

    .zan-icon {
      font-size: 32px;
    }

    p {
      font-size: 12px;
    }
}
</style>
