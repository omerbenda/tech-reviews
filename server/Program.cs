using tech_reviews.BL;
using tech_reviews.DAL;

namespace tech_reviews
{
    public class Program
    {
        public static void Main(string[] args)
        {
            WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();

            builder.Services.AddCors(
                options =>
                {
                    options.AddDefaultPolicy(
                        policy =>
                        {
                            policy.SetIsOriginAllowed(hostName => true);
                        });
                });

            builder.Services.AddSingleton<PostDAL>();
            builder.Services.AddSingleton<UserDAL>();
            builder.Services.AddSingleton<PostBL>();

            WebApplication app = builder.Build();

            // Configure the HTTP request pipeline.

            app.UseHttpsRedirection();

            app.UseCors();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
