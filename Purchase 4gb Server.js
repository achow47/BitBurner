/*Purchase Server
- purchase server to hack target, 25 instances
*/

files = ["early-hack.script", "weaken.script"];
pservRam = args[0];
hackThreads = args[1];
weakenThreads = args[2];
target = args[3];
moneyThresh = args[4];
securityThresh = args[5];

i = 0;
while(i < 25) {
    if (getServerMoneyAvailable("home") > 220000) {
        hostname = purchaseServer("pserv" + pservRam + "gb-" + target + "-" + i, pservRam);
        scp(files, "home", hostname);
        exec("early-hack.script", hostname, hackThreads, target, moneyThresh, securityThresh);
        exec("weaken.script", hostname, weakenThreads, target);
        tprint("Purchased and executed scripts on " + hostname + ".");
        ++i;
    }
}