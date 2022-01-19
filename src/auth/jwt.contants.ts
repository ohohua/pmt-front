// eslint-disable-next-line @typescript-eslint/no-var-requires
const CryptoJS = require('crypto-js');

export const jwtContants = {
  secret: 'json_web_token_secret_key',
};

export const decrypt = (key, iv, encryptedVal) => {
  // 统一将传入的字符串转成UTF8编码
  const encryptedHexStr = CryptoJS.enc.Hex.parse(encryptedVal);
  const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  const keyHex = CryptoJS.enc.Utf8.parse(key); // 秘钥
  const ivHex = CryptoJS.enc.Utf8.parse(iv); // 偏移量
  const decrypt = CryptoJS.AES.decrypt(srcs, keyHex, {
    iv: ivHex,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
};
