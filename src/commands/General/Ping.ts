import type YumekoClient from "../../classes/Client";
import Command from "../../classes/Command";
import { MessageEmbed, Message } from "discord.js";
import { stripIndents } from "common-tags";

export default class PingCommand extends Command {
    public constructor (client: YumekoClient) {
        super(client, "ping", {
            aliases: ["ping"],
            description: {
                content: "Ping pong",
                usage: "ping",
                examples: ["ping"]
            },
            permissions: {
                client: ["EMBED_LINKS"]
            },
            category: "general",
        });
    }

    public async exec(msg: Message): Promise<Message> {
        const now = Date.now();
        const m = await msg.ctx.send("🏓 Ping..");
        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(stripIndents`
                ⏱️ **RoundTrip:** \`${Math.round(Date.now()-now)}ms\`
                ⏳ **Latency:** \`${m.createdTimestamp - msg.createdTimestamp}ms\`
                💓 **API:** \`${this.client.ws.ping}ms\`
            `);
        return m.edit("🏓 Pong", embed);
    }
}