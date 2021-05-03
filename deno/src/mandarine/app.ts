// @ts-ignore
import { MandarineCore, Controller, GET } from "https://deno.land/x/mandarinets@v2.3.2/mod.ts";

@Controller()
export class MyController {
    private i = 0;
    @GET('/')
    public httpHandler() {
        console.log(++this.i);
        return "Welcome to MandarineTS Framework!";
    }

}

new MandarineCore().MVC().run();