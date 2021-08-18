
export class Light {
    public on(): string {
        return 'on'
    }

    public off(): string {
        return 'off'
    }
}

var brightness:number=0

export class RedLight {
    public RedLightOn(): string {
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


export interface Command {
    execute(): string
}

export class LightOnCommand implements Command {

    private light: Light

    constructor(light: Light) {
        this.light = light;
    }

    execute(): string {
        return this.light.on();
    }


}

export class LightOffCommand implements Command {
    private light: Light

    constructor(light: Light) {
        this.light = light
    }

    execute(): string {
        return this.light.off()
    }

}


export class RedLightOn implements Command {
    light: RedLight;
    constructor(light: RedLight) {
        this.light = light;
    }

    execute(): string {
        return this.light.RedLightOn()
    }

}

export class RedLightOff implements Command {
    light: RedLight;
    constructor(light: RedLight) {
        this.light = light;
    }

    execute(): string {
        return this.light.RedLightOff()
    }

}

export class RedLightIncreaseBrightness implements Command {
    light: RedLight;

    constructor(light: RedLight) {
        this.light = light;
    }

    execute(): string {
        return this.light.increaseBrightness()
    }

}

export class RedLightDecreaseBrightness implements Command {
    light: RedLight;

    constructor(light: RedLight) {
        this.light = light;
    }

    execute(): string {
        return this.light.decreaseBrightness()
    }

}


export class RemoteControll {
    command!: Command;
    constructor() {
    }
    setCommand(command: Command) {
        this.command = command;
    }
    executeCommand() {
        return this.command.execute()
    }


}