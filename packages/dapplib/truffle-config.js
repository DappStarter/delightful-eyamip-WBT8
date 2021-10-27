require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom solution mansion creek stick mad grace slam forget split'; 
let testAccounts = [
"0x39768ef61dc9929de753bd8830640db99f347b25e3939cf37abc7a1d0ce5fce7",
"0x672a41d4dd132615043c63d4b2530ac25dea7a98b832385e68d687bcbe79fa11",
"0x8bb0bc8768a6fcfabfc305035a42717063c17e85a5c0fb21312b6a908d869f1f",
"0x6a79398816e020df7aed2de7bd5754cd576bf6f0f720f206a891cfec45bc004d",
"0x307cb0b5f05defdd2fbb147cf7e38bb2356998a4fe84dd175606c1089ec40e61",
"0x5d1db7618f787d01ca99004ff60f841aff3d28b30bbc78ce85622b805e315b6b",
"0x96f77b21bbad948ac7e6b65d4c01de85ff3f7dfe95e9839643ade6eeabecce40",
"0xe27a5df3259715e3864115ac2088ad8c3151f8fe4b18f69d1bb8ebd56beb6685",
"0x8e9a0c07db8938b7d17e10a7e89eeeb26f232abbb86ea6476e9ac6ff33df3f15",
"0x64bb1a830b27751a764ffce2e27ac2540ea086b24a09567cac24dbc35456da0f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


