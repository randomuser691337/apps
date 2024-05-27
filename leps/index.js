// hey there fella stop lepping around this is just an embed wrapped in a webdesk window
mkw('<embed src="https://leps.nugg3t.xyz" class="embed" id="lepsbed" style="height: 70vh; background-color: #fff;"></embed>', '<button class="b4" onclick="toggleleps();">Toggle Background</button> LepsMedia', '75vw', 'auto', undefined, undefined, true, undefined, 'lepwindow');
var lepstat = false;
async function toggleleps() {
    if (lepstat === false) {
        $('#lepsbed').css('background-color', 'rgba(0, 0, 0, 0)');
        lepstat = true;
    } else {
        $('#lepsbed').css('background-color', '#fff');
        lepstat = false;
    }
}