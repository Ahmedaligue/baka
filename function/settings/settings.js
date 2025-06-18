import { watchFile, unwatchFile } from 'fs'
import fs from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

/*
Setting
*/
global.setting = {
 clearSesi: false, // trash cleaner sessions 
 clearTmp: true, // tmp trash cleaner
 addReply: true, // create with thumbnail in message
 idgc: '120363315668824185@g.us' // id gc buat join only
 }

global.info = {
 nomerbot : '212625457341',
 pairingNumber : '212625457341',
 figlet: 'silanalite', // create a start console display
 nomorwa : '212625457341',
 nameown : 'AHMED ALIGUE',
 nomerown : '212625457341',
 packname : 'sticker by ',
 author : 'KABA NIBA',
 namebot : '乂 KABA NIBA',
 wm : 'KABA NIBA',
 stickpack : 'KABA NIBA',
 stickauth : 'KABA NIBABABABABA',
 jid: '@s.whatsapp.net'
}

// Thumbnail 
global.media = {
 ppKosong : 'https://qu.ax/sAMxM.jpeg',
 didyou : 'https://qu.ax/sAMxM.jpeg',
 rulesBot : 'https://qu.ax/sAMxM.jpeg',
 thumbnail : 'https://qu.ax/sAMxM.jpeg',
 thumb : 'https://qu.ax/sAMxM.jpeg',
 logo : 'https://qu.ax/sAMxM.jpeg',
 unReg : 'https://qu.ax/sAMxM.jpeg',
 registrasi : 'https://qu.ax/sAMxM.jpeg',
 confess : 'https://qu.ax/sAMxM.jpeg',
 access : 'https://qu.ax/sAMxM.jpeg',
 tqto : 'https://qu.ax/sAMxM.jpeg',
 spotify : 'https://qu.ax/sAMxM.jpeg',
 weather : 'https://qu.ax/sAMxM.jpeg',
 gempaUrl : 'https://qu.ax/sAMxM.jpeg',
 akses : 'https://qu.ax/sAMxM.jpeg',
 wel : 'https://qu.ax/sAMxM.jpeg',
 good : 'https://qu.ax/sAMxM.jpeg',
 sound: 'https://pomf2.lain.la/f/ymca9u8.opus'
}
// Social media
global.url = {
 sig: 'https://instagram.com/ahmed_aligue',
 sgh:  'https://instagram.com/ahmed_aligue',
 sgc: 'ahmed_aligue'
}
// Donasi
global.payment = {
 psaweria: 'https://saweria.co/mamad',
 ptrakterr: '-',
 pdana: '0823427570'
}
// Info Wait
global.msg = {
 wait: '⏱️ *يرجى التحلي بالصبر*\n\> نحاول تلبية طلبكم ...',
 eror: '🤖 *Information Bot*\n\> Sorry for the inconvenience in using *Silana Ai*. There was an error in the system while executing the command.'
}
 
// api_id web suntik
global.apiId = {
 smm: '4524',
 lapak: '300672'
}

// Apikey
global.api = {
 user: '-', // api_id antinsfw 
 screet: '-', // api_screet nsfw after that, replace it yourself
 uptime: '-',
 xyro: '-',
 lol: 'GataDiosV2',
 smm: '-',
 lapak: '-',
 prodia: '-',
 bing: '1-HLkal9xPklSXn8H_NYBhugb9UnCJKJEzQp4Rk_PxP4xxBCqtm_Os-93cXF8mtFeqde_ZGjnx2C1MM4PCS0gH8mzdX5tJ5aoaDC4G0VruZATWvvOQlHs2UBDNID5PR4MtskWzX69idiBidGDqVwfNBNZYgqb3cgqkLbyEeZnWHxxrhO3es3O8YOI5wd8Y0a31_OiLKTAzwS1ba-wvcBP9khAHrUkuQpzXuoybpwfwpQ'

}
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    nightTeam: "https://api.tioxy.my.id",
    lol: "https://api.lolhumaan.xyz",
    smm: "https://smmnusantara.id",
    lapak: "https://panel.lapaksosmed.com"
}

//Apikey
global.APIKeys = {
    "https://api.xyroinee.xyz": "vRFLiyLPWu",
    "https://api.lolhumaan.xyz": "GataDiosV2"
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
