import YumekoClient from "../../classes/Client";
import AmazedCommand from "./Amazed";

export default class Bite extends AmazedCommand {
    public constructor(client: YumekoClient) {
        super(client, "bite");
    }
}
