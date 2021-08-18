import {  orderHandler } from "../pages/hello-command/command-provider";
import { LightOnCommand,Light,LightOffCommand } from "../patterns/command/command-RemoteControl"

describe("Command Pattern Test",()=>{

    test('Light On',()=>{
        let expected = new LightOnCommand (new Light())
        let received = orderHandler('on')
        expect(received).toEqual(expected.execute())
    })

    
    test('Light Off',()=>{
        let expected = new LightOffCommand (new Light())
        let received = orderHandler('off')
        expect(received).toEqual(expected.execute())
    }) 

}

)