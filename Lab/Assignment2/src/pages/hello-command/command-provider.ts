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

//function that will take and implement the commands through the remotecontroll
export function commandOnLight(command: Command): string {
    const remoteControll = new RemoteControll();
    remoteControll.setCommand(command)
    return remoteControll.executeCommand()

}

let IsRedOn: boolean = false
let IsLightOn: boolean = false
//this function is also called in page.svelte that gets and defines commands from ui
//and sets for which command what action will be taken by passing the command
//to the above created function
export function orderHandler(command: string): string {
    let action: string;
    switch (command) {
        case "on":
            IsLightOn=true
            action = IsLightOn ? commandOnLight(new LightOnCommand(new Light())) : commandOnLight(new LightOnCommand(new Light()))
            break;

        case "off":
            IsRedOn = false
            IsLightOn=false
            action = IsRedOn || IsLightOn ? commandOnLight(new RedLightOff(new RedLight())) : commandOnLight(new LightOffCommand(new Light()))
            break
        
        case "red":
            IsRedOn = true
            action = IsRedOn && IsLightOn ? commandOnLight(new RedLightOn(new RedLight())):commandOnLight(new LightOffCommand(new Light()))
            break

        case "increase":
            action = IsRedOn ? commandOnLight(new RedLightIncreaseBrightness(new RedLight())):commandOnLight(new LightOnCommand(new Light()))
            break

        case "decrease":
            action = IsRedOn ? commandOnLight(new RedLightDecreaseBrightness(new RedLight())) : commandOnLight(new LightOnCommand(new Light()))
            break

        default:
    }
    // @ts-ignore
    return action;
}