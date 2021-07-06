const Web3 = require('web3')
const web3 = new Web3('https://mainnet.infura.io/v3/2266649ceab549b18bd643fa3b9064f7')
const abi = require('./abi.json')


const testAddresses = [
    '0x0a472Aa1e917AC161419dcD153831829EFD42936',
    '0x000000000000000000000000000000000000dEaD',
    '0x10111D16485aa71D2f2BfFBD294DCACbaE79c1d4',
    '0x11111D16485aa71D2f2BfFBD294DCACbaE79c1d4',
    '0x25d4ba0b43ce3b1805906060f8bd74868d37388e',//TODO: catch all exceptions and add error logs!!!

    '0xa1faa113cbE53436Df28FF0aEe54275c13B40975',//ALPHA
    '0x903bEF1736CDdf2A537176cf3C64579C3867A881',//ICHI.FARM
    '0x90D702f071d2af33032943137AD0aB4280705817',
    '0x7Ef1081Ecc8b5B5B130656a41d4cE4f89dBBCC8c',//compounder
    '0x6006FC2a849fEdABa8330ce36F5133DE01F96189',
    '0xB8c77482e45F1F44dE1745F52C74426C631bDD52',//BNB
    '0xD850942eF8811f2A866692A623011bDE52a462C1',
    '0x6B3595068778DD592e39A122f4f5a5cF09C90fE2',//sushi
    '0xdf2c7238198ad8b389666574f2d8bc411a4b7428',//token with EOA owner (mainframe)
    '0x05f4a42e251f2d52b8ed15E9FEdAacFcEF1FAD27',
    '0x0b1724cc9fda0186911ef6a75949e9c0d3f0f2f3',
    '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',//UNISWAP

    '0xaec076c43acc2e0db807ee4d63bd8d48a24643e4',
    '0xb49180d443dc4ca6028de0031ac09337891fd8ce',
    '0xce6cf9da3cd2ca4d6f7bcd4ee4335232386d8809',
    '0x01957911244e546ce519fbac6f798958fafadb41',//selfdestructed
    '0x76173df7aceeeb990839dc0c359c4a3ec1e01da7',
    '0x7573aca378b8417623cad233954fde810cad9fb4',
    '0xc3858ea3c634691143aee216f3e832db9165889a',
]


const main = async () => {
    const mass = []

    
    for(let i = 0; i > testAddresses.length; i++) { 
        const address = testAddresses[i]
        const contract_instance = new web3.eth.Contract(abi, address)
        const res = {}
        
        res.address = address
   
        res.symbol = await contract_instance.methods.symbol().call().catch(console.log)  
        res.decimals= await contract_instance.methods.decimals().call().catch(console.log)
        res.name= await contract_instance.methods.name().call().catch(console.log)
        res.totalSupply = await contract_instance.methods.totalSupply().call().catch(console.log)
        
        mass.push(res) 
        
    }
    // console.log (mass.length)
    console.table(mass)
}
main()






