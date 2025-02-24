module.exports = {
  game: 'arma3', // arma3, arma2oa, arma2, arma1, cwa, ofpresistance, ofp
  path: '/home/arma/.steam/steamcmd/arma3',
  port: 3000,
  host: '0.0.0.0', // Can be either an IP or a Hostname
  type: 'linux', // Can be either linux, windows or wine
  additionalConfigurationOptions: '', // Additional configuration options appended to server.cfg file
  parameters: [ // Additional startup parameters used by all servers
    '-noSound',
    '-world=empty'
  ],
  serverMods: [ // Mods used exclusively by server and not shared with clients
    '@fam',
  ],
  admins: [], // add steam IDs here to enable #login without password
  auth: { // If both username and password is set, HTTP Basic Auth will be used. You may use an array to specify more than one user.
    username: 'admin', // Username for HTTP Basic Auth
    password: 'admin123', // Password for HTTP Basic Auth
  },
  prefix: "", // Prefix to all server names
  suffix: "", // Suffix to all server names
  logFormat: "dev", // expressjs/morgan log format
};
