import mc from "minecraft-protocol";
import dotenv from "dotenv";
dotenv.config();
if (process.argv.length < 4 || process.argv.length > 5) {
    console.log(
        "Usage : yarn start <host> <port> [certain_packet]"
    );
    process.exit(1);
}
const client = mc.createClient({
    host: process.argv[2],
    port: parseInt(process.argv[3]),
    username: process.env.USERNAME || "",
    password: process.env.PASSWORD || "",
    version: process.env.VERSION
});

client.on("packet", (data, meta) => {
    if (process.argv[4]) {
        if (meta.name == process.argv[4]) {
            console.log(data, meta);
        }
    } else {
        console.log(data, meta);
    }
});
