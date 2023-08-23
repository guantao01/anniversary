/* ��������������֮�� www.lanrenzhijia.com */
$(document).ready(function(){


  var playlist = [{
      title:"Hidden",
      artist:"Miaow",
      mp3:"http://demo.lanrenzhijia.com/2014/music0917/images/i1.mp3",
      //oga:"http://www.jplayer.org/audio/ogg/Miaow-02-Hidden.ogg",
      poster: "http://33.media.tumblr.com/0b35eb42176eedbf4a96e52efa760875/tumblr_mxp7a0v3fr1rqx86wo1_500.png"
    },{
      title:"Cro Magnon Man",
      artist:"The Stark Palace",
      mp3:"http://demo.lanrenzhijia.com/2014/music0917/images/i2.mp3",
      //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
      poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
    },{
      title:"不要忘记我爱你",
      mp3: "https://od.lk/s/NDBfNzE5NTY5NzFf/%E4%B8%8D%E8%A6%81%E5%BF%98%E8%AE%B0%E6%88%91%E7%88%B1%E4%BD%A0.m4a",
      // oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg",
      poster: "http://31.media.tumblr.com/810b1125a8b9e9f192d009ef58dceb07/tumblr_nbe8wsmKuz1rknpqyo1_500.jpg"
  },{
    title:"暗示分离",
    artist:"Guan",
    mp3:"https://od.lk/s/NDBfNzE5NTcwMDlf/%E6%9A%97%E7%A4%BA%E5%88%86%E7%A6%BB.m4a",
    //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
  },{
    title:"不该",
    artist:"The Stark Palace",
    mp3:"https://od.lk/s/NDBfNzE5NTY5NzBf/%E4%B8%8D%E8%AF%A5.m4a",
    //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
  },{
    title:"爱你",
    artist:"Guan",
    mp3:"https://od.lk/s/NDBfNzE5NTcwMDdf/%E7%88%B1%E4%BD%A07.25.m4a",
    //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
  },{
    title:"安静",
    artist:"Guan",
    mp3:"https://od.lk/s/NDBfNzE5NTcwMDhf/%E5%AE%89%E9%9D%99.7.23.m4a",
    //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
  },{
    title:"不分手的恋爱",
    artist:"Guan",
    mp3:"https://od.lk/s/NDBfNzE5NTcwMTBf/%E4%B8%8D%E5%88%86%E6%89%8B%E7%9A%84%E6%81%8B%E7%88%B1.7.24.m4a",
    //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
  },{
    title:"大眠",
    artist:"Guan",
    mp3:"https://od.lk/s/NDBfNzE5NTY5NzJf/%E5%A4%A7%E7%9C%A0.7.21.m4a",
    //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
  },{
    title:"等不到你",
    artist:"Guan",
    mp3:"https://od.lk/s/NDBfNzE5NTY5NzNf/%E7%AD%89%E4%B8%8D%E5%88%B0%E4%BD%A0.m4a",
    //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
  },{
    title:"等你下课",
    artist:"Guan",
    mp3:"https://od.lk/s/NDBfNzE5NTY5NzRf/%E7%AD%89%E4%BD%A0%E4%B8%8B%E8%AF%BE.7.14.m4a",
    //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
  },{
    title:"第三人称",
    artist:"Guan",
    mp3:"https://od.lk/s/NDBfNzE5NTY5NzVf/%E7%AC%AC%E4%B8%89%E4%BA%BA%E7%A8%B1.7.10.m4a",
    //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
  },{
    title:"恶作剧",
    artist:"Guan",
    mp3:"https://od.lk/s/NDBfNzE5NTY5NzZf/%E6%81%B6%E4%BD%9C%E5%89%A7.7.11.m4a",
    //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
  },{
    title:"敢爱敢做",
    artist:"Guan",
    mp3:"https://od.lk/s/NDBfNzE5NTY5Nzdf/%E6%95%A2%E7%88%B1%E6%95%A2%E5%81%9A.m4a",
    //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
  },{
    title:"和你在一起",
    artist:"Guan",
    mp3:"https://od.lk/s/NDBfNzE5NTY5Nzhf/%E5%92%8C%E4%BD%A0%E5%9C%A8%E4%B8%80%E8%B5%B7.7.12.m4a",
    //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
  },{
    title:"红玫瑰",
    artist:"Guan",
    mp3:"https://od.lk/s/NDBfNzE5NTY5Nzlf/%E7%BA%A2%E7%8E%AB%E7%91%B0%20.7.20.m4a",
    //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
  },{
    title:"花海",
    artist:"Guan",
    mp3:"https://od.lk/s/NDBfNzE5NTY5ODBf/%E8%8A%B1%E6%B5%B7.8.4.m4a",
    //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
  },{
    title:"可不可以",
    artist:"Guan",
    mp3:"https://od.lk/s/NDBfNzE5NTY5ODJf/%E5%8F%AF%E4%B8%8D%E5%8F%AF%E4%BB%A5.%207.9.m4a",
    //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
  },{
    title:"狂恋你",
    artist:"Guan",
    mp3:"https://od.lk/s/NDBfNzE5NTY5ODNf/%E7%8B%82%E6%81%8B%E4%BD%A07.17.m4a",
    //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
  },{
    title:"慢慢",
    artist:"Guan",
    mp3:"https://od.lk/s/NDBfNzE5NTY5ODRf/%E6%85%A2%E6%85%A27.26.m4a",
    //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
  },{
    title:"偏爱",
    artist:"Guan",
    mp3:"https://od.lk/s/NDBfNzE5NTY5ODVf/%E5%81%8F%E7%88%B17.31.m4a",
    //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
  },{
    title:"凄美地",
    artist:"Guan",
    mp3:"https://od.lk/s/NDBfNzE5NTY5ODZf/%E5%87%84%E7%BE%8E%E5%9C%B0.7.13.m4a",
    //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
  },{
    title:"晴天",
    artist:"Guan",
    mp3:"https://od.lk/s/NDBfNzE5NTY5ODdf/%E6%99%B4%E5%A4%A9.7.25.m4a",
    //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
  },{
    title:"如果呢",
    artist:"Guan",
    mp3:"https://od.lk/s/NDBfNzE5NTY5ODhf/%E5%A6%82%E6%9E%9C%E5%91%A2.7.19.m4a",
    //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
  },{
    title:"生生世世爱",
    artist:"Guan",
    mp3:"https://od.lk/s/NDBfNzE5NTY5ODlf/%E7%94%9F%E7%94%9F%E4%B8%96%E4%B8%96%E7%88%B1.8.1.m4a",
    //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
  },{
    title:"水星记",
    artist:"Guan",
    mp3:"https://od.lk/s/NDBfNzE5NTY5OTBf/%E6%B0%B4%E6%98%9F%E8%AE%B0.8.2.m4a",
    //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
  },{
    title:"说好的幸福呢",
    artist:"Guan",
    mp3:"https://od.lk/s/NDBfNzE5NTY5OTFf/%E8%AF%B4%E5%A5%BD%E7%9A%84%E5%B9%B8%E7%A6%8F%E5%91%A2%20.7.20.m4a",
    //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
  },{
    title:"说说话",
    artist:"Guan",
    mp3:"https://od.lk/s/NDBfNzE5NTY5OTJf/%E8%AF%B4%E8%AF%B4%E8%AF%9D.7.21.m4a",
    //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
  },{
    title:"天若有情",
    artist:"Guan",
    mp3:"https://od.lk/s/NDBfNzE5NTY5OTRf/%E5%A4%A9%E8%8B%A5%E6%9C%89%E6%83%857.18.m4a",
    //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
  },{
    title:"我爱的姑娘她在远方",
    artist:"Guan",
    mp3:"https://od.lk/s/NDBfNzE5NTY5OTVf/%E6%88%91%E7%88%B1%E7%9A%84%E5%A7%91%E5%A8%98%E4%BB%96%E5%9C%A8%E8%BF%9C%E6%96%B9.8.8.m4a",
    //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
  },{
    title:"我想念",
    artist:"Guan",
    mp3:"https://od.lk/s/NDBfNzE5NTY5OTZf/%E6%88%91%E6%83%B3%E5%BF%B5.7.28.m4a",
    //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
  },{
    title:"嚣张",
    artist:"Guan",
    mp3:"https://od.lk/s/NDBfNzE5NTY5OTdf/%E5%9A%A3%E5%BC%A0.7.18.m4a",
    //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
  },{
    title:"小情歌",
    artist:"Guan",
    mp3:"https://od.lk/s/NDBfNzE5NTY5OThf/%E5%B0%8F%E6%83%85%E6%AD%8C.m4a",
    //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
  },{
    title:"形容",
    artist:"Guan",
    mp3:"https://od.lk/s/NDBfNzE5NTY5OTlf/%E5%BD%A2%E5%AE%B9.7.10.m4a",
    //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
  },{
    title:"一程山路",
    artist:"Guan",
    mp3:"https://od.lk/s/NDBfNzE5NTcwMDJf/%E4%B8%80%E7%A8%8B%E5%B1%B1%E8%B7%AF.7.21.m4a",
    //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
  },{
    title:"再见你好",
    artist:"Guan",
    mp3:"https://od.lk/s/NDBfNzE5NTcwMDNf/%E5%86%8D%E8%A7%81%E4%BD%A0%E5%A5%BD.715.m4a",
    //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
  },{
    title:"这一生关于你的风景",
    artist:"Guan",
    mp3:"https://od.lk/s/NDBfNzE5NTcwMDVf/%E8%BF%99%E4%B8%80%E7%94%9F%E5%85%B3%E4%BA%8E%E4%BD%A0%E7%9A%84%E9%A3%8E%E6%99%AF-%E5%BC%A0%E7%86%A0.m4a",
    //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
  },{
    title:"执迷不悟",
    artist:"Guan",
    mp3:"https://od.lk/s/NDBfNzE5NTcwMDZf/%E6%89%A7%E8%BF%B7%E4%B8%8D%E6%82%9F%207.9.m4a",
    //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
  },{
    title:"特别的人",
    artist:"Guan",
    mp3:"https://od.lk/s/NDBfNzE5NTY5OTNf/%E7%89%B9%E5%88%AB%E7%9A%84%E4%BA%BA.7.25.m4a",
    //oga:"http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg",
    poster: "http://33.media.tumblr.com/bf9dc125a47dcca91ce5b3575bc3ba92/tumblr_nbmb3j8nU51sq3g2zo1_500.png"
  }];
  
  var cssSelector = {
    jPlayer: "#jquery_jplayer",
    cssSelectorAncestor: ".music-player"
  };
  
  var options = {
    swfPath: "http://cdnjs.cloudflare.com/ajax/libs/jplayer/2.6.4/jquery.jplayer/Jplayer.swf",
    supplied: "ogv, m4v, oga, mp3"
  };
  
  var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);
  
});
