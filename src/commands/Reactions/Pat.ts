import YumekoClient from "../../classes/Client";
import AmazedCommand from "./Amazed";

export default class Pat extends AmazedCommand {
    public constructor(client: YumekoClient) {
        super(client, "pat");
    }
}
