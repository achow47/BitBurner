/*Early Hacking Script
- Copy to Target
- Gain Root Access
- Kill Existing Scripts
*/

//Set Arguments for Script
files = ["early-hack.script", "weaken.script"];
threads = args[0];
weakenThreads = args[1]
target = args[2];
moneyThresh = args[3];
securityThresh = args[4];

//SCP Copy the Hacking Files from Home to Target
scp(files, "home", target);
tprint("Files copied successfully.");

//Check for Root Access, if not, NUKE
if (hasRootAccess(target) === false) {
    if (fileExists("BruteSSH.exe", "home")) {
        BruteSSH(target);
    }
    nuke(target);
}

//Execute Early Hack Script
exec("early-hack.script", target, threads, target, moneyThresh, securityThresh);

//Execute Weaken Script
exec("weaken.script", target, weakenThreads, target);

//Print Info
tprint("Script run successfully.")