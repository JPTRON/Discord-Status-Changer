const fs = require("fs");
const axios = require("axios");

const status = JSON.parse(fs.readFileSync('status.json'));

const delay = ms => new Promise(res => setTimeout(res, ms));

change2();
change();

async function change()
{
    console.log("Connected");
    for(var i = 0; i < status.length; i++)
    {    
        axios.default.patch(
            "https://discordapp.com/api/v6/users/@me/settings",
            {
              custom_status: {
                text: status[i],
              },
            },
            {
              headers: {
                authorization: "YOUR_TOKEN",
              },
            }
          );
        if(i === status.length - 1)
        {
            i = -1;
        } 
        await delay(15000);
    }
}

async function change2()
{
    var stats = ["online", "idle", "dnd"];

    for(var i = 0; i < stats.length; i++)
    {    
        axios.default.patch(
            "https://discordapp.com/api/v6/users/@me/settings",
            {
            status: stats[i]
            },
            {
              headers: {
                authorization: "YOUR_TOKEN",
              },
            }
          );
        if(i === stats.length - 1)
        {
            i = -1;
        } 
        await delay(15000);
    }
}
