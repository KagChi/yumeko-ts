import YumekoClient from "../../classes/Client";
import AmazedCommand from "./Amazed";

export default class Thumbsup extends AmazedCommand {
    public constructor(client: YumekoClient) {
        super(client, "thumbsup");
    }
}
