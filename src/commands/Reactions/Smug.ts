import YumekoClient from "../../classes/Client";
import AmazedCommand from "./Amazed";

export default class Smug extends AmazedCommand {
    public constructor(client: YumekoClient) {
        super(client, "smug");
    }
}
