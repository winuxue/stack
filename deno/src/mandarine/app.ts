import { MandarineCore, Controller, GET } from "https://deno.land/x/mandarinets@v2.3.2/mod.ts";

@Controller()
export class MyController {

    @GET('/hello-world')
    public httpHandler() {
        return "Welcome to MandarineTS Framework!";
    }

}

new MandarineCore().MVC().run();