(function() {
  var BinaryUtil = {};
  BinaryUtil.base64ToBlob = function(base64) {
    var tmp = base64.split(',');
    var binary = window.atob(tmp[1]);
    var mime = tmp[0].split(':')[1].split(';')[0];
    var arr = new Uint8Array(binary.length);
    for (var i = 0; i < binary.length; i++) {
      arr[i] = binary.charCodeAt(i);
    }
    var blob = new Blob([arr], { type: mime });
    return blob;
  };
  BinaryUtil.arrayBufferToBase64 = function(buffer) {
    var binary = ''
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };
  window.BinaryUtil = BinaryUtil;
}());
