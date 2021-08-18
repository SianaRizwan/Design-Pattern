import {
    Light,
    LightOnCommand,
    LightOffCommand,
    RedLight,
    RedLightOn,
    RedLightOff,
    RedLightIncreaseBrightness ,
    RedLightDecreaseBrightness,
    RemoteControll,
    Command
} from "../../patterns/command/command-RemoteControl";


export function commandOnLight(command: Command): string {
    const remoteControll = new RemoteControll();
    remoteControll.setCommand(command)
    return remoteControll.executeCommand()

}

let IsRedOn: boolean = false
export function orderHandler(command: string): string {
    let action: string;
    switch (command) {
        case "on":
            action = IsRedOn ? commandOnLight(new RedLightOn(new RedLight())) : commandOnLight(new LightOnCommand(new Light()))
            break;

        case "off":
            IsRedOn = false
            action = IsRedOn ? commandOnLight(new RedLightOff(new RedLight())) : commandOnLight(new LightOffCommand(new Light()))
            break
        
        case "red":
            IsRedOn = true
            action = IsRedOn ? commandOnLight(new RedLightOn(new RedLight())):commandOnLight(new LightOnCommand(new Light()))
            break

        case "increase":
            action = IsRedOn ? commandOnLight(new RedLightIncreaseBrightness(new RedLight())):commandOnLight(new LightOffCommand(new Light()))
            break

        case "decrease":
            action = IsRedOn ? commandOnLight(new RedLightDecreaseBrightness(new RedLight())) : commandOnLight(new LightOffCommand(new Light()))
            break

        default:

    }
    // @ts-ignore
    return action;

}