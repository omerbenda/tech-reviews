using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using tech_reviews.BL;
using tech_reviews.DAL;

namespace tech_reviews
{
    public class Program
    {
        public static void Main(string[] args)
        {
            WebApplicationBuilder builder = WebApplication.CreateBuilder(args);
            ConfigurationManager config = builder.Configuration;
            config.AddEnvironmentVariables();

            if (!isRequiredDataFound(config))
            {
                throw new ArgumentException("Missing environment variable");
            }

            builder.Services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["JwtSettings:Key"]!)),
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ValidateLifetime = false,
                    ValidateIssuerSigningKey = true,
                };
            });

            builder.Services.AddAuthorization();

            // Add services to the container.

            builder.Services.AddControllers();

            builder.Services.AddCors(
                options =>
                {
                    options.AddDefaultPolicy(
                        policy =>
                        {
                            policy
                                .AllowAnyHeader()
                                .SetIsOriginAllowed(hostName => true);
                        });
                });

            builder.Services.AddSingleton<PostDAL>();
            builder.Services.AddSingleton<UserDAL>();
            builder.Services.AddSingleton<PostBL>();
            builder.Services.AddSingleton<UserBL>();
            builder.Services.AddSingleton<IdentityBL>();

            WebApplication app = builder.Build();

            // Configure the HTTP request pipeline.

            app.UseHttpsRedirection();

            app.UseCors();

            app.UseAuthentication();
            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }

        private static bool isRequiredDataFound(IConfiguration config)
        {
            return config["JwtSettings:Key"] != null;
        }
    }
}
