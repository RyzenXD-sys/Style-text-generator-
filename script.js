const styles = {
    Bold: "𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇",
    Italic: "𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻",
    Cursive: "𝒶𝒷𝒸𝒹𝑒𝒻𝓰𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏",
    Gothic: "𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷"
    Bold Italic: "𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯",
    Bubble: "ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ",
    Square: "🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉",
    Small Caps: "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ",
    Underline: "a̲b̲c̲d̲e̲f̲g̲h̲i̲j̲k̲l̲m̲n̲o̲p̲q̲r̲s̲t̲u̲v̲w̲x̲y̲z̲",
    Strike: "a̶b̶c̶d̶e̶f̶g̶h̶i̶j̶k̶l̶m̶n̶o̶p̶q̶r̶s̶t̶u̶v̶w̶x̶y̶z̶",
    Double Underline: "a̳b̳c̳d̳e̳f̳g̳h̳i̳j̳k̳l̳m̳n̳o̳p̳q̳r̳s̳t̳u̳v̳w̳x̳y̳z̳",
    Upside Down: "ɐqɔpǝɟƃɥᴉɾʞʃɯuodbɹsʇnʌʍxʎz",

    Parenthesis: "⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵",
    Hearts: "a♥b♥c♥d♥e♥f♥g♥h♥i♥j♥k♥l♥m♥n♥o♥p♥q♥r♥s♥t♥u♥v♥w♥x♥y♥z",
    Stars: "a★b★c★d★e★f★g★h★i★j★k★l★m★n★o★p★q★r★s★t★u★v★w★x★y★z",
    Waves: "a≈b≈c≈d≈e≈f≈g≈h≈i≈j≈k≈l≈m≈n≈o≈p≈q≈r≈s≈t≈u≈v≈w≈x≈y≈z",

    Zalgo: "a̷b̷c̷d̷e̷f̷g̷h̷i̷j̷k̷l̷m̷n̷o̷p̷q̷r̷s̷t̷u̷v̷w̷x̷y̷z̷",
    Mirror: "ɒdɔbɘʇϱʜiįʞlmnoqpɿƨƚυvwxγz"
};

const normal = "abcdefghijklmnopqrstuvwxyz";

function transform(text, style) {
    return text.toLowerCase().split("").map(c => {
        const i = normal.indexOf(c);
        return i >= 0 ? style[i] : c;
    }).join("");
}

function generate() {
    const input = document.getElementById("inputText").value;
    const outputs = document.getElementById("outputs");
    outputs.innerHTML = "";

    Object.keys(styles).forEach(name => {
        const value = transform(input, styles[name]);

        const box = document.createElement("div");
        box.className = "style-box";
        box.innerHTML = `
            <div class="style-header">
                <strong>${name}</strong>
                <button onclick="navigator.clipboard.writeText('${value.replace(/'/g,"")}')">Copy</button>
            </div>
            <div>${value}</div>
        `;
        outputs.appendChild(box);
    });
}

function toggleTheme() {
    document.body.classList.toggle("light");
}
