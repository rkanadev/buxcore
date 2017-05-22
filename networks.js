var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('20c6edf2'),
  //addressVersion: 0x3c,
  //privKeyVersion: 0x95,
  addressVersion: 26,
  privKeyVersion: 155,
  //P2SHVersion: 0x3c,
  P2SHVersion: 26,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('e339b965425904c15cfc81968617ec0246da98bd212ec07c2891218f4d0d0000'),
    merkle_root: hex('62871020f6bc233fb1df06901061be04696ece351350e980645412a8de336a5d'),
    height: 0,
    nonce: 644649,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1490278158,
    bits: 520159231,
  },
  dnsSeeds: [
    '185.69.55.38',
	'194.135.80.127',
	'185.69.54.62'
  ],
  defaultClientPort: 25950
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18333
};
