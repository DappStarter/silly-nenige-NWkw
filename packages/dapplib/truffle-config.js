require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture street crawl rifle coconut gown light army giant'; 
let testAccounts = [
"0xcc1cd54ac21bb05ca6a0304eea82989e10ec3cc551f74f92badfcbe5e521b0a0",
"0x4fdf2f9598dc6db228a7e6de29901632914d7f356514c613c92adcead854886c",
"0x01807247b4a0aca88d088d0465c8e667296ba937613ecb92d7ea39c0cfb91bbd",
"0xf96ef76afdb8dfeb2b32eaa892d985315b93cdc73cd8c5a6e224043bf27a807a",
"0xd5ff7ff47413e2d319b0206cdb4fbab1348169e63ee657341761921ef3721776",
"0x723047e2d6490b8677de1edda189037f44616bf34a6c8c4f6f39fccf8fa07024",
"0xd8fea55bea318c85858518a85c40682a033c5f343cb5985b1e17e103c3bdea10",
"0x16bc70947d3d49ef7379dfeb49488c6ea333bd679389e412bab1c33eac7caede",
"0x9fd2dcd6a8d026ab46c402725e3092fdec1686434aafd178416152215c15cbd1",
"0xa6ae23ed43bfa39560df3dae3436188aa4603332b6a40ef5350eb35a42dd1b01"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

