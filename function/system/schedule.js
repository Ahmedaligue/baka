import cron from "node-cron";

async function delay(ms) {
                return new Promise((resolve, reject) => setTimeout(resolve, ms)
     ) }
     

export async function schedule(db, conn) {
    let bot = db.data.settings[conn.user.jid]

    cron.schedule('0 0 0 * * *', async () => { // schedule to run at 12:00 AM every day
        let data = Object.keys(db.data.users);
        let grup = Object.keys(db.data.chats).filter(v => v.endsWith('@g.us'));

        let user = db.data.users;

        for (let usr of data) {
            if (user[usr].limit < 7) {
                user[usr].limit = 20;
            }
        }

        for (let gc of grup) {
            await conn.reply(gc, '```تم استعادة جميع limit الخاصة بكم \n>اتمنى ان تستمتيعوا بالبوت```', null);
            await delay(5000)
        }
    }, {
        scheduled: true,
        timezone: "Africa/Casablanca"
    });
}
