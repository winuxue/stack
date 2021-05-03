using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace dotnet.Controllers
{
    [ApiController]
    [Route("")]
    public class HomeController : Controller
    {
        static int i = 0;

        [HttpGet()]
        public string Index()
        {
            Console.WriteLine(++i);
            return "Welcome to ASP.NET Core Framework!";
        }
    }
}