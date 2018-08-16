using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace AppSettingReflectionPage.Pages
{
    public class IndexModel : PageModel
    {
        private readonly IConfiguration Config;
        public string message { get; private set; }
        public IndexModel(IConfiguration config){
            Config = config;
        }
        public void OnGet()
        {
           var msg = Config["ReflectionKey"];
           message = msg;
        }
    }
}
