import fs from "fs";
import fetch from "node-fetch";
import moment from "moment-timezone";
import axios from "axios";
import speed from "performance-now";

let handler = (m) => m;
handler.all = async function (m) {
  let name = await conn.getName(m.sender);
  let pp =
    "https://qu.ax/sAMxM.jpeg";
  let fotonyu = "https://qu.ax/sAMxM.jpeg";
  try {
    //pp = await this.profilePictureUrl(m.sender, "image");
    //Error profilePictureUrl No work again
  } catch (e) {
    console.error(e);
  } finally {
    global.emror = "https://qu.ax/sAMxM.jpeg";

    global.doc = pickRandom([
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      "application/msword",
      "application/pdf",
    ]);
    global.fsizedoc = pickRandom([2000, 3000, 2023000, 2024000]);

    // modul
    global.axios = (await import("axios")).default;
    global.fetch = (await import("node-fetch")).default;
    global.cheerio = (await import("cheerio")).default;
    global.fs = (await import("fs")).default;

    let timestamp = speed();
    let latensi = speed() - timestamp;
    let ms = await latensi.toFixed(4);
    const _uptime = process.uptime() * 1000;

    // هذا لمنشئ/مالك الأمر
    global.kontak2 = [
      [
        owner[0],
        await conn.getName(owner[0] + "212625457341@s.whatsapp.net"),
        "BAKA BOT",
        "https://whatsapp.com",
        true,
      ],
    ];

    global.fkon = {
      key: {
        fromMe: false,
        participant: m.sender,
        ...(m.chat
          ? {
              remoteJid: "BROADCAST GROUP",
            }
          : {}),
      },
      message: {
        contactMessage: {
          displayName: `${name}`,
          vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
        },
      },
    };

    global.fVerif = {
      key: {
        participant: "0@s.whatsapp.net",
        remoteJid: "0@s.whatsapp.net",
      },
      message: {
        conversation: `_${global.namebot} تم التحقق عن طريق الواتساب_`,
      },
    };

    // pesan sementara
    global.ephemeral = "86400";

    global.ucapan = ucapan();
    global.botdate = date();

    global.adReply = {
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 1,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: "1203632858477392@newsletter",
          serverMessageId: 103,
          newsletterName: `BAKAAAAANERUUUU`,
        },
        externalAdReply: {
          showAdAttribution: true,
          title: namebot,
          body: ucapan(),
          previewType: "VIDEO",
          thumbnailUrl: logo,
          sourceUrl: "https://instagram.com/ahmed_aligue",
        },
      },
    };

    global.fakeig = {
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          title: namebot,
          body: ucapan(),
          thumbnailUrl: pp,
          sourceUrl: sig,
        },
      },
    };
  }
};

export default handler;

function date() {
  let d = new Date(new Date() + 3600000);
  let locale = "id";
  let week = d.toLocaleDateString(locale, {
    weekday: "long",
  });
  let date = d.toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  let tgl = `${week}, ${date}`;
  return tgl;
}

function ucapan() {
  const time = moment.tz("Africa/Casablanca").format("HH");
  let res = "baka";
  if (time >= 4) {
    res = "baka";
  }
  if (time > 10) {
    res = "baka";
  }
  if (time >= 15) {
    res = "baka";
  }
  if (time >= 18) {
    res = "baka";
  }
  return res;
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}
