/*Get Server Info
- hostname
- security
- money // max money
 */

target = args[0];
serverRam = getServerRam(target);

//Hostname
tprint("Server hostname: " + getHostname());

//Security
tprint("Current security: " + getServerSecurityLevel(target));

// Current Money
tprint("Current Money: " + getServerMoneyAvailable(target));

// Max Money
tprint("Max Money: " + getServerMaxMoney(target));

//Server Ram
tprint("Server Ram: " + serverRam[1] + "/" + serverRam[0]);