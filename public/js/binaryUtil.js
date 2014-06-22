(function() {
  var BinaryUtil = {};

  // Base64 transforms to Binary
  BinaryUtil.base64ToBinary = function(base64) {
    var binary = window.atob(base64.split(',')[1]);
    return binary;
  };

  // Binary transforms to Base64
  BinaryUtil.binaryToBase64 = function(binary) {
    var base64 = window.btoa(binary);
    return "base64,"+base64;
  };

  // Base64 transforms to Blob
  BinaryUtil.base64ToBlob = function(base64) {
    var binary = window.atob(base64.split(',')[1]);
    var mime = tmp[0].split(':')[1].split(';')[0];
    var arr = new Uint8Array(binary.length);
    for (var i = 0; i < binary.length; i++) {
      arr[i] = binary.charCodeAt(i);
    }
    var blob = new Blob([arr], { type: mime });
    return blob;
  };

  // ArrayBuffer transforms to Base64
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
