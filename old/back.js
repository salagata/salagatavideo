// Schwa: Enviroment
// Do Not copy paste this part
const discord = {
    user: {
        id:11039068490029,
        avatar:"521f48718e91df9eb66c916f45e8ad19",
        username:"Renko Usami"
    },
    storage: {
        "channel":{},
        "global":{
            "cipher":"GP6EJR54=1409031321552084992",
            "metaInfo":"{\"phase\":\"phi\",\"lastUpdate\":\"<t:1754959914>\",\"version\":\"1.1.2.1\"}",
            "users":"[\"11039068490029\"]",
            "ownerId":"1005205558497906839"
        },
        "server":{
            "ids":"[\"749840930017717582\",\"750068596834643505\",\"755475301097582349\",\"796874392343750289\",\"755476291678948953\"]"
        },
        "user":{
            "authUser":"free"
        }
    },
    variables: {
        __args: ['random','5'],
        __argsString: '"random" 5',
        authOwner:"false",
        rcg:134532,
        phases:"{\n\"delta\": {}\n}",
        effectList:"{\n  \"normal\": {\n    \"code\": \"volume # 1\",\n    \"args\": 0,\n    \"params\": [],\n    \"author\": \"<@860712797045784588>\",\n    \"name\": \"normal\"\n  },\n  \"reversed\": {\n    \"code\": \"reverse #\",\n    \"args\": 0,\n    \"params\": [],\n    \"author\": \"<@860712797045784588>\",\n    \"name\": \"reversed\"\n  },\n  \"confusion\": {\n    \"code\": \"contrast # -1\\nhaah #\\ncopy # #$\\nconvert #$ audio/wav \\nreverse #$\\nrepeatduration #$ #d\\naudioputreplace # #$\",\n    \"args\": 0,\n    \"params\": [],\n    \"author\": \"<@860712797045784588>\",\n    \"name\": \"confusion\"\n  },\n  \"g major\": {\n    \"code\": \"invert #\\ncopy # #$\\nconvert #$ audio/wav\\ncopy #$ #$a\\ncopy #$ #$b\\ncopy #$ #$c\\ncopy #$ #$d\\ncopy #$ #$e\\naudiopitch #$ 2**(12/12)\\naudiopitch #$a 2**(7/12)\\naudiopitch #$b 2**(4/12)\\naudiopitch #$d 2**(-5/12)\\naudiopitch #$e 2**(-12/12)\\naudioputmix #$ #$a\\nvolume #$\\naudioputmix #$ #$b\\nvolume #$\\naudioputmix #$ #$c\\nvolume #$\\naudioputmix #$ #$d\\nvolume #$\\naudioputmix #$ #$e\\nvolume #$\\nrepeatduration #$ #d\\naudioputreplace # #$\",\n    \"args\": 0,\n    \"params\": [],\n    \"author\": \"<@860712797045784588>\",\n    \"name\": \"g major\"\n  },\n  \"mari group\": {\n    \"code\": \"hueshifthsv # 50\\ncopy # #$\\nconvert #$ audio/wav\\naudiopitch #$ 2**(1/12)\\nrepeatduration #$ #d\\naudioputreplace # #$\",\n    \"args\": 0,\n    \"params\": [],\n    \"author\": \"<@860712797045784588>\",\n    \"name\": \"mari group\"\n  },\n  \"custom\": {\n    \"code\": \"{arg:1}\",\n    \"args\": 1,\n    \"params\": [\n      \"{arg:1}\"\n    ],\n    \"author\": \"<@860712797045784588>\",\n    \"name\": \"custom\"\n  },\n  \"split pitch\": {\n    \"code\": \"copy # #$\\nconvert #$ audio/wav\\ncopy #$ #$p\\naudiopitch #$p 2**({arg:1}/12)\\naudioputmix #$ #$p\\nvolume #$\\nrepeatduration #$ #d\\naudioputreplace # #$\",\n    \"args\": 1,\n    \"params\": [\n      \"{arg:1}\"\n    ],\n    \"author\": \"<@860712797045784588>\",\n    \"name\": \"split pitch\"\n  }\n}"
    }
}
// Eta: Interesting Output Messages
const metaInfo = JSON.parse(discord.storage.global.metaInfo);
discord.variables.eta = false;
const authOwner = discord.variables.authOwner;
const rcg = discord.variables.rcg
function printEmbed(embedJSON) {
    const embedEnd = {
        "embeds": embedJSON
    }
    console.log(JSON.stringify(embedEnd))
}
function printPage(pages) {
    const embedEnd = {
        "pages": pages
    }
    console.log(JSON.stringify(embedEnd))
}
function properName(name) {
    return name[0].toUpperCase() + name.slice(1).toLowerCase()
}
function snake2camel(text) {
    return text.split("-").map((x,i) => i == 0 ? x : properName(x)).join("")
}
// Alpha: Setup Phase System
// External TagScript
const effectName = discord.variables.__args[0];
const userLength = discord.variables.__args.length;
const HEADER = {
    "icon_url": `https://cdn.discordapp.com/avatars/${discord.user.id}/${discord.user.avatar}`,
    "name": discord.user.username
}
const FOOTER = {
    "icon_url": "https://cdn.discordapp.com/attachments/1377013190965203035/1378220702422925412/speed.gif?ex=683bcf8d&is=683a7e0d&hm=238e89b1738835aeebb7ebb96cebe0ce82da38cd75652c727f58fc3a3d336c30&",
    "text": "salagatavideo"
}
const phases = JSON.parse(discord.variables.phases)
const effectList = JSON.parse(discord.variables.effectList)
const effects = Object.keys(effectList)
const nargs = ["split any pitches","multi gradient map"]
effects.push(...nargs);
// Random Color Generator

if(effectName == "guild") {
    if(authOwner == false) {   
        console.error(`Unknown effect: ${effectName}
    Use list to see all available effects: \`\`\`
    .tag {tagname} list
    \`\`\` 
    Use for help to know how to use salagatavideo: \`\`\`
    .tag {tagname} help 
    \`\`\` 
            `)
    }
} else if(effectName == "list") {
    // Beta: Embed Builder
    function listEmbed(color,effects,start,end) {
        return {
            "color": color,
            "footer": FOOTER,
            "author": HEADER,
            "title": "The Effect List",
            "description": effects.slice(start,end).map(x => "* " + x).join("\n"),
            "fields": [
                {
                    "name": "Page ("+Math.floor(start/20+1)+"/"+Math.ceil(effects.length/20)+")",
                    "value": effects.length + " Total Effects.",
                    "inline": false
                }
            ]
        }
    }
    // Zeta: Command Catalog
    const search = discord.variables.__args[1];
    const availableEffects = effects.filter(x => x.toLowerCase().includes(search?.toLowerCase() ?? ""));
    let list = [];
    for (let i = 0; i < availableEffects.length; i += 20) {
        list.push({
            "embed":listEmbed(rcg, availableEffects, i, i + 20)
        });
    }
    // Beta: Embed Builder
    printPage(list)
} else if(effectName == "help") {
    // Beta: Embed Builder
    function helpEmbed(color) {
        return {
        "author": HEADER,
        "color": color,
        "footer": FOOTER,
        "title": "Page (n/N)",
        "fields": [
            {
                "name": "Field 1",
                "value": "Content",
                "inline": false
            }
        ],
        "description": "Description if there is"
    }
    }

    // Beta: Embed Builder
    // Epsilon: Help Usage
    const wipEmbed = helpEmbed(rcg)
    printEmbed([wipEmbed])

} else if(discord.variables.__args.includes("ihtx")) {
    function correction(dargs,sargs) {
        const ihtxIndex = dargs.findIndex(x => /^ihtx\w*/.test(x));
        const first = sargs.split("ihtx")[0];
        const then = dargs.slice(ihtxIndex+1);
        const choices = [(a) => `--powers=${a}`,(a) => `--duration=${a}`,(a) => `--no-trim=${a}`,(a) => `--old-pitch=${a}`];
        const parms = then.map((x,i) => choices[i](x));
        return ".tag "+ discord.tag.name + " " + first + " --ihtx " + parms.join(" ")
    }
    // Beta: Embed Builder
    function helpEmbed(color) {
        return {
        "author": HEADER,
        "color": color,
        "footer": FOOTER,
        "title": "Are you trying to do an IHTX?",
        "fields": [
            {
                "name": "Sub-Parameters",
                "value": "Subparameters use a special syntax, where they begin with -- (a double line), followed by their name or definition in camel-case notation. This notation was used for the reasons mentioned above, and so that the order doesn't matter (unlike conventional modules). If you wish, you can first specify --old-pitch=true and then --powers=5, or whatever suits you best. Examples: --ihtx, --powers=5, --raw.",
                "inline": false
            },
            {
                "name": "¿How to do an IHTX in salagatavideo?",
                "value": "Simply type the effect you want, followed by its necessary parameters, and then, --ihtx, followed by the necessary parameters, {newline} --powers=5, --old-pitch=true, --snip=0.5, --no-trim=true",
                "inline": false
            },
            {
                "name": "Possible correction detected",
                "value": correction(discord.variables.__args,discord.variables.__argsString),
                "inline": false
            },
            {
                "name": "TIP",
                "value": "To do Reverse or Random: `--type=random|reverse` {newline}To do Buggy, Kine, P&G Render, SCFR: `--render-mode=buggy|kine|pgrender|scfr`",
                "inline": false
            }
        ],
        "description": "As you can see, salagatavideo uses a processing module, which is different from regular tags (HollyVideo, AMTVEVideo, ...), which is more optimized and more powerful, that's why we use the \"N parameters, different sub-parameters\" rule. This means that, unlike conventional modules, with a fixed number of parameters, in salagatavideo you can put any number of parameters you want, including n parameters (||I plan to add a .pipe-like function soon||), in exchange for one thing."
    }
    }

    // Beta: Embed Builder
    // Omicron: Powers of X
    const wipEmbed = helpEmbed(rcg)
    printEmbed([wipEmbed])
} else if(!effects.includes(effectName) && effectName != "pipe") {
    // Alpha: Setup Phase System
    console.error(`Unknown effect: ${effectName}
Use list to see all available effects: \`\`\`
.tag {tagname} list
\`\`\` 
Use for help to know how to use salagatavideo: \`\`\`
.tag {tagname} help 
\`\`\` 
        `)
} else {
    const subCommandIndex = discord.variables.__args.findIndex(x => /^--\w+/.test(x));
    const subCommand = discord.variables.__args[subCommandIndex];
    // Beta: Embed Builder
    function helpEmbed(color,phase) {
        return {
                    "color": color,
                    "author": HEADER,
                    "title": "N0TEI: Salagata Video is under~~wear~~ construction!",
                    "image": {
                        "url": "https://media.discordapp.net/attachments/1124758334805909509/1377434562669445212/sgbiuc.png?ex=6838f367&is=6837a1e7&hm=33f93790bd6456f46ca814300da27be5878cfa5fe3be6ec527bffeeed1e27069&=&format=webp&quality=lossless&width=191&height=96"
                    },
                    "description": "like miami /j",
                    "fields": [
                        {
                            "name": "Current phase: " + properName(phase),
                            "value": phases[phase]?.fact ?? "No fact available for this phase."
                        },
                        {
                            "name": "Uppercase",
                            "value": phases[phase]?.uppercaseFact ?? "No fact available for this phase."
                        }
                    ],
                    "thumbnail": {
                        "url": phases[phase]?.image
                    },
                    "footer": FOOTER,
                    "timestamp": "Wed Apr 02 2025 21:38:00 GMT-0500 (hora estándar de Perú)"
                }
    }
    const outputEmbed = [helpEmbed(rcg,metaInfo.phase)];
    const PIPE_OPERATOR = ";";
    function tokenizer(msCode) {
        const lines = msCode.split(PIPE_OPERATOR).filter(line => line.trim() !== '');
        const tokens = lines.map(line => {
            const t = [];
            let currentToken = '';
            let inQuotes = false;
            let escapeNext = false;
            for (let i = 0; i < line.length; i++) {
                const char = line[i];
                if (escapeNext) {
                    currentToken += char;
                    escapeNext = false;
                } else if (char === '\\') {
                    escapeNext = true;
                } else if (char === '"') {
                    inQuotes = !inQuotes;
                    errorIndex = i
                } else if (char === ' ' && !inQuotes) {
                    if (currentToken.length > 0) {
                        t.push(currentToken);
                        currentToken = '';
                    }
                } else {
                    currentToken += char;
                }
            }
            if (currentToken.length > 0) {
                t.push(currentToken);
            }
            return t;
        });
        return tokens;
    }
    let finalCode = ``
    function loadEffect(effectArgs) {
        let effectName = effectArgs[0].toLowerCase().trim();
        let currentEffect;
        switch (effectName) {
            case "split any pitches":
                let sapc = `copy # #\$
    convert #\$ audio/wav\n`
                const tempcopy = [];
                const temppitch = [];
                const tempapm = [];
                for(let i = 1; i < effectArgs.length; i++) {
                    tempcopy.push(`copy #$ #$${i-1}`);
                    temppitch.push(`audiopitch #$${i-1} 2**({` + "arg:" + `${i}}/12)`);
                    tempapm.push(`audioputmix #$0 #$${i}
    volume #$0`);
                }
                tempapm.pop();
                sapc += tempcopy.join("\n") + "\n" + temppitch.join("\n") + "\n" + tempapm.join("\n") + `\nrepeatduration #$0 #d
    audioputreplace # #$0`;
                currentEffect = {
                    "args": effectArgs.length-1,
                    "params": new Array(effectArgs.length-1).fill(0).map((x,i) => "{" + "arg:"+(i+1)+"}"),
                    "code": sapc
                }
                break;
            case "multi gradient map":
                let mgm = `grayscale #`
                const tempcr = [];
                const tempcg = [];
                const tempcb = [];
                for(let i = 1; i <= effectArgs.length/3; i++) {
                    tempcr.push("{"+`arg:${i*3-2}}/255`);
                    tempcg.push("{"+`arg:${i*3-1}}/255`);
                    tempcb.push("{"+`arg:${i*3}}/255`);
                }
                mgm += "\nhuecurvergba # red " + tempcr.join(" ") + "\nhuecurvergba # green " + tempcg.join(" ") + "\nhuecurvergba # blue " + tempcb.join(" ");
                
                currentEffect = {
                    "args": Math.round((effectArgs.length-1)/3)*3,
                    "params": new Array(Math.round((effectArgs.length-1)/3)*3).fill(0).map((x,i) => "{" + "arg:"+(i+1)+"}"),
                    "code": mgm
                }
                break;
            default:
                currentEffect = effectList[effectName]
                break;
        }
        let c = currentEffect.code;
        let parameters = effectArgs.slice(1,1+currentEffect.args);
        for(let i = 0;i < currentEffect.args; i++) {
            c = c.replaceAll(currentEffect.params?.[i] ?? " ",parameters?.[i] ?? "{"+`arg:${i}}`)
        }
        return c
    }
    const effectParams = discord.variables.__args.slice(0,subCommandIndex == -1 ? undefined : subCommandIndex);
    let c = "";
    if(discord.variables.__args[0] == "pipe") {
        const piped = discord.variables.__argsString.slice(discord.variables.__argsString.indexOf(discord.variables.__args[1])-1,subCommandIndex == -1 ? undefined : discord.variables.__argsString.indexOf(discord.variables.__args[subCommandIndex]));
        const elm = tokenizer(piped);
        // console.log(piped)
        for(const inst of elm) {
            c += loadEffect(inst) + "\n"
        }
    } else {
        c = loadEffect(effectParams);
    }
    const options = discord.variables.__args.slice(subCommandIndex+1).reduce((a,x) => {
        const b = snake2camel(x.slice(2)).split("=")
        a[b[0]] = b[1]
        return a
    },{})
    discord.variables.ext = "iscript";
    if(subCommandIndex != -1) {
        const oldPitch = (options?.oldPitch ?? "false") == "true";
        if(oldPitch) {
            c = c.replaceAll(`copy # #$\nconvert #$ audio/wav`,``).replaceAll(`repeatduration #$ #d\naudioputreplace # #$`,``).replaceAll(`#$`,`#`)
        }
        switch (subCommand) {
            case "--raw":
                function rawEmbed(color,code) {
                    return {
                        "color": color,
                        "footer": FOOTER,
                        "author": HEADER,
                        "title": "Code",
                        "description": "```\n"+code+"\n```"
                    }
                }
                const outputType = options?.outputType ?? "embed";
                const mediaName = options?.mediaName ?? "#";
                c = c.replaceAll("#",mediaName)
                if(outputType == "file") {
                    finalCode = c;
                discord.variables.ext = "attach";
                } else {
                    outputEmbed.push(rawEmbed(rcg,c));
                discord.variables.ext = "embed";
                }
                break;
            case "--ihtx":
                const type = options?.type ?? "normal";
                let template = [];
                const powers = Number(options?.powers ?? "5");
                const snip = Number(options?.duration ?? "0.5");
                const noTrim = (options?.noTrim ?? "false") == "true";
                // IHTY???
                const ITHYATTEMPT = options?.renderMode ?? "null"; // render-mode=kine
                const prefixIHTY = {
                    buggy: "\nshuffle # 0.16",
                    kine: "\ncopy # #$\nfadein #$ 0.16\nfadeout #$ 0.16\naudioputreplace # #$",
                    pgrender: '\nif 0 == 0 "copy # #$\\ncopy #$ #$$\\nswaprgba #$$ bgr\\noverlay #$ #$$ 0 0 none 0.01 0 true 25\\nhueshifthsvffmpeg #$ 120 1.5\\nhueshifthsv #$ -120 25\\noverlay # #$ 0 0 none 0.01 0 true 25"',
                    scfr: '\nif 0 == 0 "copy # #$\\nswaprgba #$ rrb\\nhueshifthsv #$ -28.5 50\\noverlay # #$ 0 0 none 0.01 0 true 25\\nhueshifthsv # 0 15"'
                }
                // IHTX Parameters
                // Omicron: I Hate The X
                switch (type) {
                    case "normal":
                        function* genPowers(powers) {
                            for (let j = 0; j < powers; j++) {
                                yield j+1;
                            }
                        }
                        template.push(...Array.from(genPowers(powers)))
                        break;
                    case "reverse":
                        function* genPowers2(powers) {
                            for (let j = 0; j < powers; j++) {
                                yield j+1;
                            }
                        }
                        template.push(...Array.from(genPowers2(powers)))
						template.reverse()
                        break;
                    case "multiplier": 
                        template = [powers];
                        break;
                    case "scalar":
                        function* genPowers3(powers,scale) {
                            for (let j = 0; j < powers; j++) {
                                yield (j+1)*scale;
                            }
                        }
                        const ihtxsScale = Number(options?.scale ?? "2");
                        template.push(...Array.from(genPowers(powers,ihtxsScale)));
                        break;
                    case "random":
                        function* genPowers4(powers) {
                            for (let j = 0; j < powers; j++) {
                                yield j+1;
                            }
                        }
                        template.push(...Array.from(genPowers4(powers)));
						template = template.sort(() => Math.floor(Math.random() * 3 - 1))
                        break;
                    default:
                        break;
                }
                finalCode += `get 0 duration true\n
                snip 0 0 ${snip}\n`
                // Xi: Powers of X
                for (let i = 0; i < powers; i++) {
                    finalCode += `copy ${i} ${i+1}\n`;
                    finalCode += (c + (prefixIHTY?.[ITHYATTEMPT] ?? "")).replaceAll("#",i+1) + (noTrim ? "\n" : `\nrepeatduration ${i+1} 0d \n`);
                }
                // Sigma: Joining powers
                if(powers != 1) {
                    finalCode += `concatmultiple 0 ${template.join(" ")}\nsnip 0 ${snip}\n`
                }
                finalCode += `render 0 default salagatavideo`
            default:
                break;
        }
    } else {
        // Normal Render
        finalCode += `copy 0 1\n${c.replaceAll("#","1")}
        render 1 default salagatavideo`
    }
    if(finalCode.includes("load")) {
        discord.variables.inputmedia = true;
    }
    discord.variables.code = finalCode;
    // Alpha: Setup Phase System
    // Beta: Embed Builder
    printEmbed(outputEmbed)
    discord.variables.eta = true;
}