using Microsoft.EntityFrameworkCore.Migrations;

namespace Vega.Migrations
{
    public partial class SeedFeature : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("Insert into Features (Name) values ('Feature1')");
            migrationBuilder.Sql("Insert into Features (Name) values ('Feature2')");
            migrationBuilder.Sql("Insert into Features (Name) values ('Feature3')");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("Delete from Features where Name In('Feature1','Feature2','Feature3')");
        }
    }
}
