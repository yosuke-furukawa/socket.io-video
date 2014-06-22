(function() {
  var UserMedia = {};
  navigator.getUserMedia  = navigator.getUserMedia || navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia || navigator.msGetUserMedia;
  UserMedia.check = function() {
    if (!navigator.getUserMedia) {
      alert("Not supported browser...");
    }
  };

  window.URL = window.URL || window.webkitURL;
  UserMedia.onSuccess = null;
  UserMedia.onError = null;

  UserMedia.play = function(){
    if (!UserMedia.onSuccess) {
      console.error("Please set UserMedia.onSuccess function");
    }
    if (!UserMedia.onError) {
      console.error("Please set UserMedia.onError function");
    }
    navigator.getUserMedia({
      video: {
        mandatory: {
          maxWidth: 320,
          maxHeight: 240
        }
      }
    }, UserMedia.onSuccess, UserMedia.onError);
  };

  window.UserMedia = UserMedia;
}());
