define({ "api": [
  {
    "type": "get",
    "url": "/:server/xadmin/users/:type/:usergroup",
    "title": "Request Users With Usergroup",
    "permission": [
      {
        "name": "developer"
      }
    ],
    "name": "users_usergroup",
    "group": "Developer_Endpoints",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "server",
            "description": "<p>Server name.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"sug\"",
              "\"ug\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>Secondary usergroup or usergroup.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "usergroup",
            "description": "<p>Usergroup to search.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "result.users",
            "description": "<p>Users with usergroup.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/xadmin.js",
    "groupTitle": "Developer_Endpoints"
  },
  {
    "type": "get",
    "url": "/:server/xsits/:time/:id",
    "title": "Request xSits Data",
    "permission": [
      {
        "name": "developer"
      }
    ],
    "name": "xsits",
    "group": "Developer_Endpoints",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "server",
            "description": "<p>Server name.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"alltime\"",
              "\"thisweek\"",
              "\"lastweek\""
            ],
            "optional": false,
            "field": "time",
            "description": "<p>Time period to fetch data for.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>User to fetch data for.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Result.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "result.sits",
            "description": "<p>Sits.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.sits.creator",
            "description": "<p>Creator SteamID64.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.sits.claimer",
            "description": "<p>Claimer SteamID64.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.sits.reason",
            "description": "<p>Reason for sit.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.sits.staffonline",
            "description": "<p>Staff online (parse as JSON array!).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.sits.created",
            "description": "<p>Time created (UNIX).</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/xsits.js",
    "groupTitle": "Developer_Endpoints"
  },
  {
    "type": "get",
    "url": "/xsuitelink/:type/:id",
    "title": "Request User xSuite Link",
    "name": "xsuitelink",
    "group": "Discord_Data",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"steam\"",
              "\"discord\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>Type of id, steam or discord.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User SteamID64/DiscordID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.steam",
            "description": "<p>SteamID64.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.discord",
            "description": "<p>DiscordID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.username",
            "description": "<p>Discord Username.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.tag",
            "description": "<p>Discord Tag.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "result.booster",
            "description": "<p>Booster on XYZ Discord.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/discord.js",
    "groupTitle": "Discord_Data"
  },
  {
    "type": "get",
    "url": "/:server/jobtracker/:id/:jobType",
    "title": "Request User Job Tracker Records",
    "name": "jobtracker",
    "group": "Jobtracker_Data",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "server",
            "description": "<p>Server name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User SteamID64.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "allowedValues": [
              "\"pd\"",
              "\"sd\"",
              "\"fbi\"",
              "\"swat\"",
              "\"firerescue\"",
              "\"terrorist\"",
              "\"mafia\""
            ],
            "optional": false,
            "field": "jobType",
            "description": "<p>Jobs to fetch.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Result.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "result.entries",
            "description": "<p>SteamID64.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.entries.id",
            "description": "<p>Entry ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.entries.join",
            "description": "<p>Join Time (Unix).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.entries.leave",
            "description": "<p>Leave Time (Unix).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.entries.job",
            "description": "<p>Job Name.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/jobtracker.js",
    "groupTitle": "Jobtracker_Data"
  },
  {
    "type": "get",
    "url": "/stats",
    "title": "Request Stats",
    "name": "stats",
    "group": "Statistics",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.all_players",
            "description": "<p>Total Players.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.recent_players",
            "description": "<p>Recent Players.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.today_players",
            "description": "<p>Players Today.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.total_steam",
            "description": "<p>Total Steam Members.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.total_discord",
            "description": "<p>Total Discord Members.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.total_playtime",
            "description": "<p>Total Playtime.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/stats.js",
    "groupTitle": "Statistics"
  },
  {
    "type": "get",
    "url": "/:server/badges/:id",
    "title": "Request User Badges",
    "name": "badges",
    "group": "User_Data",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "server",
            "description": "<p>Server name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User SteamID64.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Result.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "result.badges",
            "description": "<p>Badges.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.badges.badge",
            "description": "<p>Badge ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.badges.progress",
            "description": "<p>Progress of badge.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.badges.complete",
            "description": "<p>Is badge complete.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/badges.js",
    "groupTitle": "User_Data"
  },
  {
    "type": "get",
    "url": "/:server/xadmin/bans/:id",
    "title": "Request User Bans",
    "name": "bans",
    "group": "User_Data",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "server",
            "description": "<p>Server name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User SteamID64.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Result.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "result.bans",
            "description": "<p>Bans.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.bans.adminid",
            "description": "<p>Admin SteamID64.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.bans.admin",
            "description": "<p>Admin RPName at time of ban.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.bans.reason",
            "description": "<p>Reason for ban.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.bans.start",
            "description": "<p>Start of ban (UNIX time).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.bans.end",
            "description": "<p>End of ban (UNIX time).</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/xadmin.js",
    "groupTitle": "User_Data"
  },
  {
    "type": "get",
    "url": "/:server/playtime/:id",
    "title": "Request User Playtime",
    "name": "playtime",
    "group": "User_Data",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "server",
            "description": "<p>Server name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User SteamID64.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Result.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.total",
            "description": "<p>Total seconds played.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "result.last",
            "description": "<p>Time last played (UNIX time).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.username",
            "description": "<p>Discord Username.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/playtime.js",
    "groupTitle": "User_Data"
  },
  {
    "type": "get",
    "url": "/:server/xadmin/punishments/:id",
    "title": "Request User Punishments",
    "name": "punishments",
    "group": "User_Data",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "server",
            "description": "<p>Server name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User SteamID64.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Result.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "result.punishments",
            "description": "<p>Punishments.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.punishments.adminid",
            "description": "<p>Admin SteamID64.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.punishments.admin",
            "description": "<p>Admin RPName at time of punishment.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "allowedValues": [
              "\"Gag\"",
              "\"Mute\"",
              "\"Kick\""
            ],
            "optional": false,
            "field": "result.punishments.punishment",
            "description": "<p>Type of punishment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.punishments.reason",
            "description": "<p>Reason for punishment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.punishments.length",
            "description": "<p>Duration of punishment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.punishments.created",
            "description": "<p>Time created (UNIX time).</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/xadmin.js",
    "groupTitle": "User_Data"
  },
  {
    "type": "get",
    "url": "/:server/xadmin/usergroup/:id",
    "title": "Request User Usergroup",
    "name": "usergroup",
    "group": "User_Data",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "server",
            "description": "<p>Server name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User SteamID64.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.usergroup",
            "description": "<p>Users Usergroup.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/xadmin.js",
    "groupTitle": "User_Data"
  },
  {
    "type": "get",
    "url": "/:server/users/:id",
    "title": "Request User DarkRP Info",
    "name": "users",
    "group": "User_Data",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "server",
            "description": "<p>Server name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User SteamID64.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.rpname",
            "description": "<p>RP Name on server.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.wallet",
            "description": "<p>Amount of money on server.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/darkrp.js",
    "groupTitle": "User_Data"
  },
  {
    "type": "get",
    "url": "/:server/xadmin/warns/:id",
    "title": "Request User Warns",
    "name": "warns",
    "group": "User_Data",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "server",
            "description": "<p>Server name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User SteamID64.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Result.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "result.warns",
            "description": "<p>Warns.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.warns.adminid",
            "description": "<p>Admin SteamID64.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.warns.admin",
            "description": "<p>Admin RPName at time of punishment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.warns.time",
            "description": "<p>Time created (UNIX time).</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/xadmin.js",
    "groupTitle": "User_Data"
  },
  {
    "type": "get",
    "url": "/xsuite/profile/:id",
    "title": "Request xSuite Profile",
    "name": "xsuite",
    "group": "User_Data",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User SteamID64.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.name",
            "description": "<p>Name on xSuite.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.avatar",
            "description": "<p>Avatar on xSuite.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.background",
            "description": "<p>Background on xSuite.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.bio",
            "description": "<p>Bio on xSuite.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/profile.js",
    "groupTitle": "User_Data"
  },
  {
    "type": "get",
    "url": "/:server/whitelist/:job",
    "title": "Request Job Information",
    "name": "whitelist",
    "group": "Whitelist_Data",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "server",
            "description": "<p>Server name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "job",
            "description": "<p>Job command (returned by /whitelisted).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.name",
            "description": "<p>The job name.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.category",
            "description": "<p>The job category.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/whitelists.js",
    "groupTitle": "Whitelist_Data"
  },
  {
    "type": "get",
    "url": "/:server/whitelisted/:id",
    "title": "Request Users Whitelists",
    "name": "whitelisted",
    "group": "Whitelist_Data",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "server",
            "description": "<p>Server name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User SteamID64.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "result.whitelists",
            "description": "<p>Jobs user is whitelisted to.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/whitelists.js",
    "groupTitle": "Whitelist_Data"
  },
  {
    "type": "get",
    "url": "/:server/whitelists/:team",
    "title": "Request Whitelisted Users",
    "name": "whitelists",
    "group": "Whitelist_Data",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "server",
            "description": "<p>Server name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "team",
            "description": "<p>Job name.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "result",
            "description": "<p>Result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "result.users",
            "description": "<p>Users whitelisted to job.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/whitelists.js",
    "groupTitle": "Whitelist_Data"
  }
] });
