document.addEventListener("DOMContentLoaded", function() {
      var phrases = [
        "Chatty changed these lol",
        "Maybe this will update... or not",
        "Do not share this with OGSD users",
        "Pressure",
        "https://www.youtube.com/watch?v=VOXYMRcWbF8",
        "x is equal to negative b, plus or minus the square root of b squared minus 4ac, all over 2a",
        "helo",
        "whats up man",
        "iready suck",
        "meeeeee",
        "Back and even better than ever before!",
        "hluf",
        "kyse is stealing my aura with sigmafart >:( https://html.cafe/x4922b615",
        "Everyone's a rizzed up crank",
        "Gyatt plus a gyatt... Equals, a gyatt!",
        "Finished my homework the next morning 😎",
        "pov: sunday 🥹",
        "If you get this message, you are fat",
        "If you get this message, you're black",
        "bye schoolwide talking",
        "bye chattywebsite",
        "HELIOS BROWSER IS FIREEEEEEE 🔥",
        "W UPDATES TO HELIOS DINGUSCHAN!",
        "dinguschan you dropped this → 👑",
        "sponsored by ducks",
        "Donde esta pork. Porque pork",
        "You're so COOL! 😎",
        "Bruh, I don't even understand what's happening, I think a Doors entity might be attacking us.",
        "skribbl.io >>>>> sketchful.io",
        "joe biden torpedo",
        "biden boat",
        "trump torpedo",
        "Shut up, GoGuardian!",
        "British ChattyWebsite >>>>>>>>>>> ChattyWebsite",
        "goodbyee",
        "This got blocked",
        "what",
        "Sebastian Solace",
        "We all support you Zeal ❤",
        "Sponsored by me lol",
        "sponsored by youtube",
        "With the games. Never forget the games",
        "We got in trouble for this lol",
        "Show me your meat or im gonna crash outtttttttt",
        "if u dont want this to get blocked use about:blank cloak",
        "who broke the chair",
        "guys i think my house is from five nights at freddys 😰😰 AR AR AR AR",
        "bomb instructions - Google Search",
        "It's a party. A Search Party",
        "when you scratch your hair, it snows. snows dandruffs and lice eggs",
        "ChattyWebsite. More like FattyWebsite",
        "my mom said if i keep going on my computer she will bang my head into my keyboardsoujfh nyieukdhsgj9uovifujd08goiurej fduogiurejf9d8ogu",
        "hlrugvuj8idfhu gjdfchudhfjifds",
        "Look guys its a ifvje fdughv jeoisprdxokf",
        "My name is skibidi toilet",
        "NoGuardian!",
        "bricked up bricks, bricked up bricks",
        "The FitnessGram pacer test is an aerobic capacity test that is a dead meme which I have forgotten the words to.",
        "michael i will not make the background a wiener",
        "put https://www.youtube.com/watch?v=TrrpWm_04pc in the background",
        "Fatso",
        "updates frequently!",
        "evidentp: new screensaver unlocked! im just kidding me: ooh goodie lemme use it for chattywebsite",
        "Drive me to the skibidi club!",
        "now the gif is looped",
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "school uses blocker *ineffective*",
        "Ur computer has virus",
        "thanks reed :DDD 🔥",
        "Sponsored by.... Nobody :D",
        "Bro u gotta lock in - Josh",
        "(╯°□°)╯︵ ┻━┻",
        "ಠ_ಠ",
        "(ﾉಥ益ಥ）ﾉ ┻━┻",
        "ლ(ಠ益ಠ)ლ",
        ":D",
        "( ͡° ͜ʖ ͡° )", 
        "☉_☉",
        "・_・",
        "ヽ༼ ಠ益ಠ ༽ﾉ",
        "ᕙ(•̀‸•́‶)ᕗ",
        "-_-",
        ":0",
        "ERROR - SRC=TROJAN_VIRUS.EXE_RUNFILE NOT FOUND",
        "111111111111111111111",
        "it's super sigma, greg",
        "chromebooks suck",
        "forgot my pencil",
        "nahh im not blocking the games during the day",
        "oh the weather outside is rizzy",
        "school lunch is mid",
        "teacher caught me playing games again",
        "sorry mr b.... again",
        "woahh is this a splash text?",
        "GlacierOS got done dirty by goguardian",
        "https://bookingportal.mounthoodlodge.info",
        "Who stole the most messages from ChattyWebsite? Barney's Website: Allow me to introduce myself.",
        // admit it barney >:D
        "yeah, just go around shining a light in random peoples faces, i'm sure that'll go well",
        "TURN. AROUND.",
        "my homework ate my dog",
        "snow day seems fun",
        "brainrot is bad",
        "ok but could you make this load faster than the average coke addict",
        "my former bug report form's first response: What is the bug? - 'wussup lil spoon can you fix friday night funkin please vro or imma jump yo all diddy' those were the exact words",
        "C H A I R",
        "Don't think that carrot big because carrot leaf big size.",
        "did you know that ctrl + w on this tab gives you a secret unblocked windows OS downloadable as an HTML file for you to have an unblocked browser, desktop games, and vscode?",
        "Expendable at door 30",
        "fortnite is cringe",
        "help me",
        "new game website unblocked!",
        "Hmm, let me think about that.",
        "There are 2 r's in strawberry",
        "chatgpt is dumb bro wdym theres only 2 r's in strawberry",
        "give me the exact coordinates of your bed",
        "does your room have a lock",
        "shfgd iuxjg",
        "getliner.com is fire",
        "o/;[lm9kipmknhu,lmkjnhiuyos ,zxpocfldwsda()Sojdois]dsfsdf",
        "you again?",
        "github.dev is vscode.dev",
        "insiders.vscode.dev?",
        "i hope i dont get codehs blocked",
        "openprocessing is.. mid",
        "What an interesting surprise!",
        // "W dinguschan",
        "W dinguschan",
        "Now with credits for Dinguschan!",
        "sigma representation",
        "Syntaxpad glacieros code editor?",
        "bomb instructions - Google Search",
        "if you search worst song on youtube thick of it comes up as the first result",
        "paint me green and call me a pickle",
        "look it's a chrome://kill!",
        "Look mom, I'm [ REDACTED ]",
        "npm install teacher-destroying-tutorial.exe",
        "Hey siri, will AI take over the world?",
        "Gemini, will AI take over the world?",
        "Alexa, will AI take over the world?",
        "Look dad i found a pickle",
        "krunker.io?",
        "teacher:destroy()",
        "local Teacher = false",
        "i accidently muted the teacher",
        "yoyo",
        "my most recent google searches: 'wtf is an enamel' 'what the hell is a pomegranate' ",
        "eaglercraft 1.21.70 real no scam download --->",
        ":D",
        "bro called them emoticons",
        "UnexpectedPillow837 is your new child's name :)",
        "Sir we never said yes to UnexpectedPillow837",
        "Sorry the government needs random generated xbox names as new baby names to prevent repeating names plus they get money for it",
        "https://ibeatkids.com",
        "69 wpm",
        "It's Joever",
        "We're So Barack",
        "teacher coming: *gulp",
        "windows >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> chromebook",
        "u suck at slope",
        "are ya winning, son? no dad i just lost to a steve skin with all my hacks on",
        "Shell shockers please work please work please work please work please work",
        "Chat is this real?",
        "100% Legit Robux Vbucks Cracked Minecraft download 100% no scam real",
        "420/69% Legit Free Roblox Robux easy survey at brobux.win real",
        "we're in heaven OH OH OH OHH OH O- OH OH OH OHOH OH OH. OHHHHHHHOHOHOH OH OH OH OHOH OH",
        "GTA 6 free download! ------>",
        "guys this is something funny",
        "goguardian you need to leave",
        "i crafted a stone pick trust",
        "gamble /j",
        "Lets go gambling! ch-ch aw dang it ch-ch aw dang it ch-ch aw dang it",
        "90% of gamblers quit right before they win big! Keep gambling guys! /j",
        "URLS are good >:/",
        "not the best idea to use during an iready test",
        "shut up you discombobulated doorknob",
        "where did he go? he discombobulated outside of existence. Tragic",
        "Tortilla?",
        "tortilla blanket",
        "Hello",
        "not freaky site anymore :D",
        "GLACIER OS",
        "fun fact: the mcdonalds logo's colors are meant to make you hungry. the hex code of the red color is FF000d. pretty cool",
        "roblox.uno",
        "getliner.com doesnt work D:",
        "Imagine opening a cabinet and an AI generated spider jumpscare comes out",
        "but Ms. Birch i never said i wanted to present my project nex- SHUT UP",
        "freakbob is calling",
        "this is anti freakbob",
        "Like the last website, but without freaky stuff!",
        "No i'm not adding freaky stuff to this site stay mad",
        "No i'm not adding freaky stuff to this site stay mad",
        "No i'm not adding freaky stuff to this site stay mad",
        "No i'm not adding freaky stuff to this site stay mad",
        // No i'm not adding freaky stuff to this site stay mad
        // No i'm not adding freaky stuff to this site stay mad
        "Me after seeing the 100th goofy ahh ripoff this week",
        "Cheaters never win, but I just graduated.",
        "If you like water then you already like 72% of me!",
        "ARE YOU HARRY POTTER?",
        "Waiter, I'd like to have a... um, uh...",
        "Weorge Gashington - Bhe Test Eresident Pver.",
        "Indeed",
        "Am i suspicious?",
        "Is my human/homo sapiens form sus?",
        "ruh roh",
        "A good captian goes down with his ship.",
        "Chromebooks DOWN!",
        "Computers DOWN!",
        "Aye twin stop allat smiling. It's Sunday and you got school tomorrow. And don't forget to turn them assignments in and charge that chromebook up",
        "Who's in 2027? 👇",
        "The Mr. B lore runs so deep",
        "Being uncool is pretty much the coolest you can be.",
        "Don't fear death. Fear failure.",
        "I do indeed have eyes.",
        "Old macdonald had a farm",
        "Still typing, I should probably stop that, yeah.",
        "Pissing off your principal since 2023",
        "I'm Kermit, I listen to whatever you say. I'm all ears! Actually no, I don't have ears.",
        "Crazy? I was crazy once. they locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy. Crazy? I was crazy once. they locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy. Crazy? I was crazy once. they locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy. Crazy? I was crazy once. they locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy. Crazy? I was crazy once. they locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy. Crazy? I was crazy once. they locked me in a room. A rubber room. A rubber room with rats. And rats make me crazy. ",
        "Probably not coded by ChatGPT",
      ];

      var randomIndex = Math.floor(Math.random() * phrases.length);
     var randomPhrase = phrases[randomIndex];
     var phraseElement = document.getElementById("randomPhrase");
     phraseElement.textContent = randomPhrase;
     if (randomPhrase.type === "image") {
     phraseElement.innerHTML = `<img src="${randomPhrase.src}" alt="Splash Image" style="max-width: 100%;">`;
     }
     function changeText() {
     const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
     if (typeof randomPhrase === "string") {
     phraseElement.textContent = randomPhrase;
     } else if (randomPhrase.type === "image") {
     phraseElement.innerHTML = `<img src="${randomPhrase.src}" alt="Splash Image" style="max-width: 100%;">`;
        }
     }
     phraseElement.addEventListener('click', changeText);
     });

    function search_button() {
	let input = document.getElementById('searchbar').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('button');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="inline";				
		}
	}
}

    document.getElementById("launchGames").onclick = function() {
      document.body.innerHTML = "<h3>Loading...<h3>";
      setTimeout(function() {
        document.body.innerHTML = "";
        document.body.innerHTML = "<input id='searchbar' onkeyup='search_button()' type='text' name='search' placeholder='Search Games 🔍'>"; 
        var games = [
            { name: "Skribbl.io", url: "https://skribbl.io" },
            { name: "Pandemonium Minigame", url: "https://redtide-stack.github.io/Pandemonium-Minigame-fork/" },
            { name: "EaglyMC (Minecraft)", url: "https://eaglymc.com/" },
            { name: "Minecraft (1.5)", url: "https://eaglercraft.glitch.me/" },
            { name: "Minecraft (1.8)", url: "https://eaglercraft-archive.github.io/Koneclient-1.8-web/" },
            { name: "Eaglercraft Server List", url: "https://servers.eaglercraft.com/" },
            { name: "Minecraft 1.8 (Web Assembly, FPS Boost)", url: "https://eaglercraft.com/mc/1.8.8-wasm/" },
            { name: "Minecraft (1.9)", url: "https://d272xss3wq00xu.cloudfront.net/1-9.html" },
            { name: "Minecraft (1.11)", url: "https://d272xss3wq00xu.cloudfront.net/1-11.html" },
            { name: "Resent Client Eagler (1.8)", url: "https://reslauncher4.vercel.app" },
            { name: "Starlike Client Eagler (1.16)", url: "https://starlike.zumbiepig.dev/" },
            { name: "Eaglercraft (1.20)", url: "https://dfs3rzq44v6as.cloudfront.net/?frame=fullscreen/#/lessons/964c4358-60a7-4121-908e-63f6ae6e5ef0" },
            { name: "Roblox (Easyfun.gg)", url: "https://www.easyfun.gg/games/roblox.html" },
            { name: "Roblox (Now.gg)", url: "https://pathetic-roblox-main.vercel.app/" },
            { name: "Tortilla Games", url: "https://dfs3rzq44v6as.cloudfront.net"},
            { name: "Ultraviolet", url: "https://dfs3rzq44v6as.cloudfront.net/#/prxy" },
            { name: "Five Nights At Winston's", url: "https://g.deev.is/fnaw" },
            { name: "1 (Reversed 2048)", url: "https://d272xss3wq00xu.cloudfront.net/2048/index.html" },
            { name: "Bottle Flip 3D", url: "https://d272xss3wq00xu.cloudfront.net/bottle-flip-3d/index.html" },
            { name: "Neal.fun", url: "https://neal.fun" },
            { name: "Subway Surfers", url: "https://dddavit.github.io/subway/" },
            { name: "Slope", url: "https://mathadventure1.github.io/slope/slope/index.html" },
            { name: "Slope 2", url: "https://d3rtzzzsiu7gdr.cloudfront.net/gameplayer/index.html?Slope%202" },
            { name: "Slope 3", url: "https://slope3.com/" },
            { name: "Cookie Clicker", url: "https://eli-schwartz.github.io/cookieclicker/" },
            { name: "Drive Mad", url: "https://ubg365.github.io/drive-mad/play.html" },
            { name: "Drive Mad (Server 2)", url: "https://d272xss3wq00xu.cloudfront.net/drivemad/index.html" },
            { name: "Drive Mad Mod", url: "https://play.fancade.com/63BA239C20C40BF3" }, 
            { name: "BitLife", url: "https://ubg365.github.io/bitlife-life-simulator/play.html" },
            { name: "Ztype", url: "https://zty.pe" },
            { name: "3kh0.github.io (ad spammy)", url: "https://3kh0.github.io" },
            { name: "Hover Racer Drive", url: "https://ubg365.github.io/hover-racer-drive/" },
            { name: "Monkey Mart", url: "https://ubg365.github.io/monkey-mart/play.html" },
            { name: "Drift Boss", url: "https://ubg365.github.io/drift-boss/" },
            { name: "Madalin Stunt Cars 2", url: "https://ubg100.github.io/games/Madalin/index.html" },
            { name: "Breaking the bank", url: "https://mountain658.github.io/zbreakingthebank.html" },
            { name: "Escaping the prison", url: "https://mountain658.github.io/zescapetheprison.html" },
            { name: "Stealing the diamond", url: "https://mountain658.github.io/zstealingthediamond.html" },
            { name: "Infiltrating the airship", url: "https://sz-games.github.io/games/Flash.html?game=/games/henry-airship/infiltratingtheairshipgame.swf" },
            { name: "Fleeing the complex", url: "https://sz-games.github.io/games/Flash.html?game=https://sz-games.github.io/Games6/Henry%20Stickmin%20-%20Fleeing%20the%20Complex.swf?raw=true" },
            { name: "Free Rider", url: "https://freeriderhd.com" },
            { name: "Run 3", url: "https://lekug.github.io/tn6pS9dCf37xAhkJv/" },
            { name: "Bloxorz", url: "https://ad-freegames.github.io/flash/game/bloxorz.html" },
            { name: "Drift Hunters", url: "https://htmlxm.github.io/h/drift-hunters/" },
            { name: "Venge.io", url: "https://venge.io/" },
            { name: "Highway Racer Pro", url: "https://unblocked-games.s3.amazonaws.com/highway-racer-pro.html" }, 
            { name: "Hole.io", url: "https://hole-io.com/" },
            { name: "Drift Hunters 2024", url: "https://unblocked-games.s3.amazonaws.com/drift-hunters-2024.html" },
            { name: "Webcraft", url: "https://jesgran.is-a.dev/webcraft/" }, 
            { name: "Sandspiel Studio", url: "https://studio.sandspiel.club" },
            { name: "Gamble", url: "https://www.yurk.com/games/black/" },
            { name: "FNAF", url: "https://ubg77.github.io/fix/fnaf1/" },
            { name: "Krunker.io", url: "https://krunker.io/" },
            { name: "Tomb of the mask", url: "https://mountain658.github.io/g/tombofthemask/index.html" },
            { name: "worldguessr", url: "https://www.worldguessr.com/" },
            { name: "MinecraftSkins.net", url: "https://minecraftskins.net" },
            { name: "Skindex", url: "https://skindex.pro" },
            { name: "RadioStations", url: "https://radio.garden/" },
            { name: "Windows 93", url: "https://v1.windows93.net/" },
            { name: "Mr. Bullet", url:"https://www.yurk.com/games/mrbullet/" },
            { name: "Sandspiel", url: "https://sandspiel.club" },
            { name: "Slow Roads", url: "https://slowroads.io" },
            { name: "Slow Roads (Server 2)", url: "https://d272xss3wq00xu.cloudfront.net/slow-roads/index.html" },
            { name: "Edys Car Simulator", url: "https://unblocked-games.s3.amazonaws.com/edys-car-simulator.html" },
            { name: "Backrooms", url: "https://adfree3kh0.github.io/projects/backrooms/index.html" },
            { name: "Impossible Quiz", url: "https://d3rtzzzsiu7gdr.cloudfront.net/gameplayer/index.html?Impossible%20Quiz" },
            { name: "Impossible Quiz (Server 2)", url: "https://d272xss3wq00xu.cloudfront.net/impossiblequiz/index.html" },
            { name: "Among Us Singleplayer", url: "https://adfree3kh0.github.io/projects/among-us/index.html" }, 
            { name: "Windows XP Emulator", url: "https://winxp.vercel.app/" },
            { name: "Eggy Car", url: "https://www.yurk.com/games/eggycar/" },
            { name: "Eggy Car (Server 2)", url: "https://d272xss3wq00xu.cloudfront.net/eggy-car/index.html" },
            { name: "Turbowarp Packager (Download Scratch Projects)", url: "https://packager.turbowarp.org" },
            { name: "Bad Piggies", url: "https://www.friv.cm/bad-piggies/fullscreen/" },
            { name: "Cluster Rush",  url: "https://duckmath.org/g4m3s/cluster-rush.html" },
            { name: "Crossy Road", url: "https://selenite.cc/semag/crossyroad/index.html" },
            { name: "Crossy Road (Server 2)", url: "https://d272xss3wq00xu.cloudfront.net/crossyroad/index.html" },
            { name: "1v1.lol", url: "https://selenite.cc/semag/1v1lol/index.html" },
            { name: "Bloxd.io", url: "https://bloxd.io" },
            { name: "CubeRealm.io", url: "https://cuberealm.io/" },
            { name: "Aim Trainer", url: "https://aimtrainer.io/" },
            { name: "Scrap Metal 1", url: "https://www.gamearter.com/game/scrap-metal/" },  
            { name: "Scrap Metal 2", url: "https://www.gamearter.com/game/scrap-metal-2/" },
            { name: "Scrap Metal 3", url: "https://adfree3kh0.github.io/projects/scrapmetal/index.html" },  
            { name: "Scrap Metal 4", url: "https://www.gamearter.com/game/scrap-metal-4/" },
            { name: "Scrap Metal 5", url: "https://www.gamearter.com/game/scrap-metal-5/" },
            { name: "Scrap Metal 6", url: "https://www.gamearter.com/game/scrap-metal-6/" },
            { name: "GameArter", url: "https://www.gamearter.com/games" },
            { name: "FreezeNova", url: "https://unblocked-games.s3.amazonaws.com/index.html"},
            { name: "Geometry Dash Lite", url: "https://selenite.cc/semag/gdlite/index.html" },
            { name: "FNAF 2", url: "https://selenite.cc/semag/fnaf2/index.html" },
            { name: "FNAF 3", url: "https://selenite.cc/semag/fnaf3/index.html" },
            { name: "FNAF 4", url: "https://selenite.cc/semag/fnaf4/index.html" },
            { name: "FNAF 4 (Server 2)", url: "https://d272xss3wq00xu.cloudfront.net/FNAF4/index.html" },
            { name: "Selenite Minecraft", url: "https://selenite.cc/semag/eaglercraft/index.html" },
            { name: "MEGA Client", url: "https://megaclient.vercel.app" },
            { name: "LittleBigSnake", url: "https://littlebigsnake.com" },
            { name: "Surviv.io", url: "https://surviv.io" },
            { name: "Spacebar Clicker", url: "https://unblocked-games.s3.amazonaws.com/spacebar-clicker.html" },
            { name: "Deadshot.io", url: "https://deadshot.io" },
            { name: "Clicker", url: "https://elucidation.github.io/ClickerJs/" },
            { name: "Smashkarts.io", url: "https://smashkarts.io" },
            { name: "Pixel Force", url: "https://www.yurk.com/games/pixelforce/" },
            { name: "Happy Glass", url: "https://www.yurk.com/games/happyglass/" },
            { name: "Selenite (fixed)", url: "https://selenite.cc/" },
            { name: "Duck Life 1", url: "https://selenite.cc/semag/ducklife1/index.html" },
            { name: "Duck Life 2", url: "https://selenite.cc/semag/ducklife2/index.html" },
            { name: "Duck Life 3", url: "https://selenite.cc/semag/ducklife3/index.html" },
            { name: "Duck Life 4", url: "https://selenite.cc/semag/ducklife4/index.html" },
            { name: "Duck Life 5", url: "https://selenite.cc/semag/ducklife5/index.html" },
            { name: "Duck Life 6", url: "https://selenite.cc/semag/ducklife6/index.html" },
            { name: "Stick Running", url: "https://www.yurk.com/games/stickrunning/" },
            { name: "Happy Filled Glass", url: "https://www.yurk.com/games/happyfilledglass/" },
            { name: "Hypackel Games", url: "https://d3rtzzzsiu7gdr.cloudfront.net/settings.html" },  
            { name: "Elastic Man", url: "https://d21u3ic0kp9e91.cloudfront.net/elasticman/0/index.html" },
            { name: "Tunnel Rush", url: "https://ubg44.github.io/TunnelRush/" },
            { name: "Cookie Clicker 2024 (Click link)", url: "https://d3rtzzzsiu7gdr.cloudfront.net/files/cookieclicker/game/index.html" },
            { name: "Interactive Buddy", url: "https://d3rtzzzsiu7gdr.cloudfront.net/gameplayer/index.html?Interactive%20Buddy" },
            { name: "Baldis Basics", url: "https://d3rtzzzsiu7gdr.cloudfront.net/files/baldisbasics/index.html" },
            { name: "Minecraft Classic", url: "https://d3rtzzzsiu7gdr.cloudfront.net/files/minecraft-classic/index.html" },
            { name: "Angry Birds", url: "https://d3rtzzzsiu7gdr.cloudfront.net/files/AngryBirdsWebGL/index.html" },
            { name: "Minecraft 1.8", url: "https://d3rtzzzsiu7gdr.cloudfront.net/gameplayer/index.html?Eaglercraft%20(MC)#" },
            { name: "Precision Client Eagler", url: "https://d3rtzzzsiu7gdr.cloudfront.net/files/projects/precision-client/index.html" },
            { name: "2048", url: "https://2048game.com/" },
            { name: "Flappy Bird", url: "https://d3rtzzzsiu7gdr.cloudfront.net/files/flappybird/index.html" },
            { name: "1v1.lol", url: "https://d3rtzzzsiu7gdr.cloudfront.net/gameplayer/index.html?1v1.LOL%20[Needs%20Internet]" },
            { name: "Win11 in React", url: "https://win11.blueedge.me" },
            { name: "Hypackel 2", url: "https://hypackel.com" },
            { name: "Hypackel 3", url: "https://hypackel.github.io" },
            { name: "Hypackel 4", url: "https://hypackellite.vercel.app/settings.html" },
            { name: "1v1.lol Fortnite - Play at home", url: "https://1v1.lol" },
            { name: "Impossible Quiz 2", url: "https://archive.org/details/tiq2_swf" },
            { name: "Web Archive", url: "https://web.archive.org" },
            { name: "Astra Client Eagler", url: "https://barneycompiler.github.io/AstraClientEagler/javascript" },
            { name: "Tetris", url: "https://tetris.com/play-tetris" },
            { name: "Glitch Text Generator", url: "https://lingojam.com/GlitchTextGenerator" },
            { name: "Stickman Swing", url: "https://www.yurk.com/games/stickmanswing"},
            { name: "Google Easter Egg Games", url: "https://elgoog.im" },
            { name: "Duck Math Games", url: "https://duckmath.org/index.html" },
            { name: "Chill Radio", url: "https://www.chilltrax.com/" },
            { name: "Tower of Treasure", url: "https://beinternetawesome.withgoogle.com/en_us/interland/landing/tower-of-treasure" },
            { name: "Fancy Text Generator", url: "https://lingojam.com/FancyTextGenerator" },
            { name: "Yurk.com", url: "https://yurk.com" },
            { name: "Bottle Flip 3D", url: "https://d3rtzzzsiu7gdr.cloudfront.net/play/index.html?Bottle%20Flip%203D" },
            { name: "Friv.com", url: "https://friv.com" },
            { name: "Slither.io Ripoff", url: "https://gulper.io/" },
            { name: "Infinite Craft", url: "https://infinite-craft.com/infinite-craft/" },
            { name: "Baldis Basics Method 2", url: "https://igroutka.ru/loader/game/26471/" },
            { name: "We Become what we Behold", url: "https://gnhustgames.github.io/wbwwb/" },
            { name: "Time Shooter", url: "https://games.crazygames.com/en_US/time-shooter/index.html" },
            { name: "Time Shooter 2", url: "https://games.crazygames.com/en_US/time-shooter-2/index.html" },
            { name: "Time Shooter 3", url: "https://games.crazygames.com/en_US/time-shooter-3-swat/index.html" },
            { name: "Chrome Dino", url: "https://htmlxm.github.io/h7/dinosaur-game/" },
            { name: "Getting over it ( Scratch )", url: "https://turbowarp.org/389464290/embed?autoplay&addons=remove-curved-stage-border,pause,gamepad" },
            { name: "1v1.lol Method 3", url: "https://player.work/1v1lol/index.html" },
            { name: "Eaglercraft Clients", url: "https://eaglercraftx1-8.github.io/" },
            { name: "Slither.io", url: "http://slither.com/io" },
            { name: "Easyfun.gg", url: "https://easyfun.gg" },
            { name: "Ballistic", url: "https://d272xss3wq00xu.cloudfront.net/ballistic/index.html" },
            { name: "Minecraft Java Edition", url: "https://mcraft.fun" },
            { name: "HTML Editor", url: "https://spacenerd24.github.io/Online-HTML-Viewer/" },
            { name: "Selenite Method 2", url: "https://selenite-copy.pages.dev" },
            { name: "Always Impostor", url: "https://html5.gamedistribution.com/9abe6af0fbb440b98a3e24bf7fb0636a/?gd_sdk_referrer_url=https://kevin.games/always-impostor" },
            { name: "WebMC (Eaglercraft Launcher)", url: "https://webmc.xyz/" },
            { name: "Vex 3", url: "https://dfs3rzq44v6as.cloudfront.net/#/lessons/85266bc0-927a-4c24-b7b2-4dd34a0c1c6a" },
            { name: "Vex 3 (Server 2)", url: "https://d272xss3wq00xu.cloudfront.net/vex3/index.html" },
            { name: "Vex 4", url: "https://dfs3rzq44v6as.cloudfront.net/#/lessons/0f85cdc3-db02-4e24-8103-5190d86e63dc" },
            { name: "Vex 4 (Server 2)", url: "https://d272xss3wq00xu.cloudfront.net/vex4/index.html" },
            { name: "Vex 5", url: "https://dfs3rzq44v6as.cloudfront.net/#/lessons/7ce8df8b-a3f3-4887-bb7a-0c0b1f312bfb" },
            { name: "Vex 6", url: "https://dfs3rzq44v6as.cloudfront.net/#/lessons/7ec8754e-65c7-45bf-90f3-b342c4e33cc4" },
            { name: "Vex 6 (Server 2)", url: "https://d272xss3wq00xu.cloudfront.net/vex6/index.html" },
            { name: "Vex 7", url: "https://dfs3rzq44v6as.cloudfront.net/#/lessons/a7abe0b4-e894-4799-89e8-b9806e7e33f6" },
            { name: "Stumble guys", url: "https://www.stumbleguys.com/play" },
            { name: "Cookie Clicker 2024 Method 2", url: "https://cookieclickerunblocked.github.io/games/cookie-clicker/index.html" },
            { name: "Sandspiel Ripoff (Sandsaga)", url: "https://sandsaga.com" },
            { name: "BitLife (Server 2)", url: "https://geometryspot.help/bitlife/1.html" },
            { name: "Bitlife (Server 3)", url: "https://d272xss3wq00xu.cloudfront.net/bitlife/index.html" },
            { name: "Scrap Metal 3 (Server 2)", url: "https://d272xss3wq00xu.cloudfront.net/scrapmetal/index.html" },
            { name: "GlacierOS", url: "https://learn.englishrealm.ca/" },
            { name: "Rocket Bot Royale", url: "https://rocketbotroyale2.winterpixel.io" },
            { name: "Retro Bowl", url: "https://ethonion10.neocities.org/" },
            { name: "Soundboard", url: "https://sprintingsnail69.github.io/coolsounds/" },
            { name: "Tortilla Minecraft Games", url: "https://dfs3rzq44v6as.cloudfront.net/#/lessons/ac150b87-7ba6-4b28-b18e-82d034bb521d" },
            { name: "Shell Shockers", url: "https://shellshock.io/" },
            { name: "Moto X3M", url: "https://ubg365.github.io/moto-x3m/play.html" },
            { name: "Moto X3M 2", url: "https://slope-game.github.io/newgame/motox3m-2/" },
            { name: "Moto X3M 3", url: "https://slope-game.github.io/newgame/motox3m-3/" },
            { name: "Moto X3M Winter", url: "https://unblocked-games.s3.amazonaws.com/games/2024/gm/moto-x3m-winter/index.html" },
            { name: "Moto X3M Pool Party", url: "https://unblocked-games.s3.amazonaws.com/games/2024/gm/moto-x3m-pool-party/index.html" },
            { name: "Moto X3M Spooky Land", url: "https://unblocked-games.s3.amazonaws.com/games/2024/gm/moto-x3m-spooky-land/index.html" },
            { name: "Death Run 3D", url: "https://ubg365.github.io/death-run-3d/" },
            { name: "EggyCar", url: "https://ubg365.github.io/eggy-car/play.html" },
            { name: "Stack", url: "https://ubg365.github.io/stack/" },
            { name: "Super Mario 64", url: "https://downloads.retrostic.com/play.php?console_slug=n64&rom_url=https://downloads.retrostic.com/roms/Super%20Mario%2064%20%28U%29%20%5B%21%5D.zip" },
            { name: "Asteroids ( 1986 )", url: "https://downloads.retrostic.com/play.php?console_slug=atari-7800&rom_url=https://downloads.retrostic.com/roms/Asteroids.zip" },
            { name: "Asteroids ( 1979 )", url: "https://online-emulators.com/arcade/Asteroids_(rev_2)/asteroid" },
            { name: "Bosconian", url: "https://www.retrogames.cc/embed/42458-bosconian-old-version.html" },
            { name: "Doom", url: "https://bestdosgames.com/games/doom/play" },
            { name: "Half-Life 1", url: "https://x8bitrain.github.io/webXash/" },
            { name: "Tetris ( NES )", url: "https://downloads.retrostic.com/play.php?console_slug=nes&rom_url=https://downloads.retrostic.com/roms/Tetris%20%28USA%29.zip" },
            { name: "EarthBound", url: "https://downloads.retrostic.com/play.php?console_slug=snes&rom_url=https://downloads.retrostic.com/roms/EarthBound%20%28USA%29.zip" },
            { name: "Pac Man", url: "https://downloads.retrostic.com/play.php?console_slug=mame&rom_url=https://downloads.retrostic.com/roms/pacman.zip" },
            { name: "New rally x", url: "https://www.retrogames.cc/embed/9312-new-rally-x.html" },
            { name: "Super Mario Bros", url: "https://downloads.retrostic.com/play.php?console_slug=nes&rom_url=https://downloads.retrostic.com/roms/Super%20Mario%20Bros%20%28E%29.zip" },
            { name: "Fake Hacking Prank", url: "https://geektyper.com/" },
            { name: "Classroom Games", url: "https://dnrweqffuwjtx.cloudfront.net/" },
            { name: "Distributions Game", url: "https://d10o6em2qtnr4q.cloudfront.net/assets/ca72aa6abe504291b749002226ef9094/index.html" },
            { name: "Sonic CD", url: "https://tws2401.github.io/Sonic-CD-WASM/" },
            { name: "Sonic 4: Episode 1", url: "https://wamwoowam.co.uk/sonic4/" }, 
            { name: "WebVM", url: "https://webvm.io/" },  
            { name: "Rammerhead Link Generator", url: "https://s-pscripts.github.io/rh-fork/" },   
            { name: "Evoworld.io", url: "https://evoworld.io/" },
            { name: "Links123 (CW Edit)", url: "https://ricardomariosonic123.github.io/Links123-V3" },
            { name: "Block Blast", url: "https://blockblastonline.com" },
            { name: "Masked Forces Unlimited", url: "https://maskedforcesunlimited.github.io/" },
            { name: "Bad Time Simulator", url: "https://badtimesimulator.io" },    
            { name: "I Beat Kids", url: "https://ibeatkids.com" }, 
            { name: "PulseCodes & BigFishGaming's Unblocked Games", url: "https://gamehub-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/bigfishgaming/bigfishgaming@refs/heads/main/GameHub.xml&container=ig" },
            { name: "MacOS Emulator", url: "https://www.pulsecodes.cc/mac-os" },
            { name: "Ubuntu Emulator", url: "https://www.pulsecodes.cc/ubuntu-simulator" },
      

        ];
        var container = document.createElement("div");
        container.setAttribute("id", "gamesContainer");
        document.body.appendChild(container);

        var lowestButtonPosition = 0; // Initialize with 0

        games.forEach(function(game) {
            var button = document.createElement("button");
            button.textContent = game.name;
            button.className = "button";
            button.onclick = function() {
                // Hide all buttons
                document.querySelectorAll('.button', '#searchbar', 'search_button()').forEach(function(element) {
                    element.style.display = "none";
                });

                document.getElementById("gamesContainer").innerHTML = '<object id="' + game.name.replace(/ /g, "") + 'Frame" type="text/html" data="' + game.url + '" style="width: 100%; height: 100vh;"></object>';
            };
            
            container.appendChild(button);

            // Update lowestButtonPosition
            var buttonPosition = button.offsetTop + button.offsetHeight;
            if (buttonPosition > lowestButtonPosition) {
                lowestButtonPosition = buttonPosition;
            }
        });

        // Add "Request a game" button
        var requestButton = document.createElement("button");
        requestButton.textContent = "Request a game/feature/Report A Bug";
        requestButton.className = "button";
        requestButton.style.position = "absolute";
        requestButton.style.top = (lowestButtonPosition + 90) + "px"; // Position 90px below the lowest button
        requestButton.style.left = "50%";
        requestButton.style.transform = "translateX(-50%)";
        requestButton.onclick = function() {
            document.body.innerHTML = '<object id="requestGameForm" type="text/html" data="https://docs.google.com/forms/d/e/1FAIpQLSf9ckFU6kt7Qr6Lml1k1sY9LmYJF4JhdVya68ojbyOHeskYvA/viewform?embedded=true" style="width: 100%; height: 100vh;"></object>';
        };
        document.body.appendChild(requestButton);

    }, 1000);
};



document.getElementById("launchApps").onclick = function() {
    document.body.innerHTML = "<h3>Loading...<h3>";
    setTimeout(function() {
        document.body.innerHTML = "";
        document.body.innerHTML = "<input id='searchbar' onkeyup='search_button()' type='text' name='search' placeholder='Search Apps 🔍'>";
        var apps = [
            { name: "Dinguschan's Github Search", url: "https://github-repository-search-two.vercel.app/" },
            { name: "DingusProxy", url: "https://dinguschan-owo.github.io/dingusproxy" },
            { name: "Helios Browser", url: "https://helios-browser.vercel.app" },
            { name: "ByeBlocker", url: "https://chic-kashata-e4cec3.netlify.app/" },
            { name: "Blobwifi", url: "https://blobby-boi.github.io/Blobwifi/" },
            { name: "Interstellar", url: "https://menu.earlyriserscoffeeshop.com/" },
            { name: "Dinguschan's Blocking Extension Checker", url: "https://installed-blocking-extension-checker.vercel.app/" },
            { name: "ChatGPT", url: "https://dfs3rzq44v6as.cloudfront.net/apps/27ca35c4-2604-4054-b790-b9436b00d06b/?usr-img=../../assets/img/user.webp" },
            { name: "DeepAI", url: "https://deepai.org/" },
            { name: "Appetize.io Android Phone", url: "https://appetize.io/embed/xc1w6f1krd589zhp22a0mgftyw?autoplay=false&debug=true&device=pixel4&embed=true&launchUrl=exp%3A%2F%2Fexp.host%2F%40snack%2Fsdk.46.0.0-ghV0%21Qgb8N&scale=65&screenOnly=false&xDocMsg=true&xdocMsg=true&params=%7B&osVersion=11.0&deviceColor=black" },
            { name: "Website Source Code Viewer", url: "https://codebeautify.org/source-code-viewer" },
            { name: "List of Exploits", url: "https://cocalc.com/github/3kh0/ext-remover/blob/main/README.md" },
             { name: "History Flooder", url: "https://spritzerland.github.io/chbook/" },
            { name: "Virtual Machine (3 min. Free Trial)", url: "https://www.browserling.com/virtual-browser" },
            { name: "Virtual Machines", url: "https://copy.sh/v86/" },
            { name: "Gauth Math Helper", url: "https://gauthmath.com" },
            { name: "PopAI", url: "https://popai.pro/" },
            { name: "Calculator", url: "https://desmos.com/scientific" },
            { name: "Windows 10", url: "https://dustinbrett.com/" },
            { name: "AaronOS", url: "https://aaronos.dev/" },
            { name: "Windows 96", url: "https://windows96.net/" },
            { name: "AI Image Generator", url: "https://nuelink.com/tools/ai-image-generator" },
            { name: "ChatGPT Alt", url: "https://talkai.info/" },
            { name: "YT to mp3", url: "https://cobalt.tools" },
            { name: "Dinguschan's URL Converter", url: "https://url-converter-opal.vercel.app/" },
            { name: "Notepad in JS", url: "https://notepad.js.org/index.html" },
            { name: "Dinguschan's Message Encoder/Decoder", url: "https://encoder-decoder-nine.vercel.app/" },
            { name: "EmulatorJS", url: "https://demo.emulatorjs.org/" },
        ];
        document.body.innerHTML = "";
        document.body.innerHTML = "<input id='searchbar' onkeyup='search_button()' type='text' name='search' placeholder='Search Apps'>";
        var container = document.createElement("div");
        container.setAttribute("id", "appsContainer");
        document.body.appendChild(container);

        apps.forEach(function(app) {
            var button = document.createElement("button");
            button.textContent = app.name;
            button.className = "button";
            button.onclick = function() {
                if (app.url) {
                    document.body.innerHTML = '';
                    var messageText = document.createElement("p");
                    messageText.textContent = app.message;
                    messageText.style.color = "#fff";
                    messageText.style.marginTop = "20px";
                    document.body.appendChild(messageText);
                    document.body.innerHTML = '<object id="appsFrame" type="text/html" data="' + app.url + '" style="width: 100%; height: 100vh;"></object>';
                } else if (app.action) {
                    app.action();
                }
            };
            container.appendChild(button);
        });
    }, 1000);
};

// main menu button functions go here

    document.getElementById("openInAboutBlank").onclick = function() {
var win = window.open('');
win.document.open();
win.document.write(document.documentElement.outerHTML);
win.document.title = "about:blank";
win.document.close();
window.parent.window.location.replace(localStorage.getItem('panicurl') || 'https://classroom.google.com/h')
};

document.getElementById("tabcloak").onclick = function() {
      document.title = "Home";
      document.querySelector('link[rel="icon"]').href = "https://ssl.gstatic.com/classroom/favicon.png";
};

document.getElementById("chat").onclick = function() {
  document.body.innerHTML = '<object id="chatFrame" type="text/html" data="https://chattyice234.github.io/online-chatroom" style="width: 100%; height: 100vh;"></object>';
};
