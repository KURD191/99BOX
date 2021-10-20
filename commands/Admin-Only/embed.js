"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    category: 'Admin Only',
    description: 'Send a embed based on provided JSON data',
    requiredPermissions: ['ADMINISTRATOR'],
    slash: false,
    minArgs: 1,
    expectedArgs: '<JSON Data>',
    callback: function (_a) {
        var message = _a.message, channel = _a.channel, args = _a.args;
        try {
            var json = JSON.parse(args.join(' '));
            if (!(json === null || json === void 0 ? void 0 : json.embeds) && !(json === null || json === void 0 ? void 0 : json.embeds.description)) {
                return '`JSON Data` is invalid as no embed exists. Please visit [https://discohook.org/] for designing your embed';
            }
            channel.send(json).catch(function (err1) {
                message.reply("`JSON Data` is invalid. Please copy `JSON Data` from [https://discohook.org/]");
            });
            if (message.deletable) {
                message.delete();
            }
        }
        catch (err) {
            return "`JSON Data` is invalid. Please visit [https://discohook.org/] for designing your embed";
        }
    },
};
//Shilish "Accio" Vatsin
