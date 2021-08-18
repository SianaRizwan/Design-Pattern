//Receiver Class-1
export class Light {
    public on(): string {
        return 'on'
    }

    public off(): string {
        return 'off'
    }
}

var brightness:number=0
//Receiver Class-2
export class RedLight {
    public RedLightOn(): string {
        brightness=0;
        return `red${brightness}`
    }

    public RedLightOff(): string {
        return "off"
    }

    public increaseBrightness(): string {
        brightness++;
        return `red${brightness}`
    }

    public decreaseBrightness(): string {
        brightness--;
        return `red${brightness}`

    }
}

//interface that passes specific request to specific receiver
export interface Command {
    execute(): string
}

//implementing the Command interface for specific commands 
//that needs to be passed to specific receiver
export class LightOnCommand implements Command {

    private light: Light

    //constructor takes the object of the specific receiver class that it will controll
    constructor(light: Light) {
        this.light = light;
    }

    execute(): string {
        return this.light.on();
    }


}

//implementing the Command interface for specific commands 
//that needs to be passed to specific receiver
export class LightOffCommand implements Command {
    private light: Light

    //constructor takes the object of the specific receiver class that it will controll
    constructor(light: Light) {
        this.light = light
    }

    execute(): string {
        return this.light.off()
    }

}

//implementing the Command interface for specific commands 
//that needs to be passed to specific receiver
export class RedLightOn implements Command {
    light: RedLight;

    //constructor takes the object of the specific receiver class that it will controll
    constructor(light: RedLight) {
        this.light = light;
    }

    execute(): string {
        return this.light.RedLightOn()
    }

}

//implementing the Command interface for specific commands 
//that needs to be passed to specific receiver
export class RedLightOff implements Command {
    light: RedLight;

    //constructor takes the object of the specific receiver class that it will controll
    constructor(light: RedLight) {
        this.light = light;
    }

    execute(): string {
        return this.light.RedLightOff()
    }

}

//implementing the Command interface for specific commands 
//that needs to be passed to specific receiver
export class RedLightIncreaseBrightness implements Command {
    light: RedLight;

    //constructor takes the object of the specific receiver class that it will controll
    constructor(light: RedLight) {
        this.light = light;
    }

    execute(): string {
        return this.light.increaseBrightness()
    }

}

//implementing the Command interface for specific commands 
//that needs to be passed to specific receiver
export class RedLightDecreaseBrightness implements Command {
    light: RedLight;

    //constructor takes the object of the specific receiver class that it will controll
    constructor(light: RedLight) {
        this.light = light;
    }

    execute(): string {
        return this.light.decreaseBrightness()
    }

}

//Invoker class
export class RemoteControll {
    command!: Command;
    constructor() {
    }
    //sets the command that the invoker(the remote) will execute
    setCommand(command: Command) {
        this.command = command;
    }

    //executes the command
    executeCommand() {
        return this.command.execute()
    }


}