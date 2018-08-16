using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace AppSettingReflectionPage.Pages
{
    public class SlotModel : PageModel
    {
        private readonly IConfiguration Config;
        public string SlotKey { get; private set; }
        public string AppKey { get; private set; }
        public SlotModel(IConfiguration config){
            Config = config;
        }
        public void OnGet()
        {
		SlotKey = Config["SlotKey"];
		AppKey = Config["AppKey"];
        }
    }
}
