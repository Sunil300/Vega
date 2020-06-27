using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Vega.Controllers.Resources;
using Vega.Models;
using Vega.Persistence;

namespace Vega.Controllers
{
    
    public class MakesController : Controller
    {
        private readonly VegaDbContext context;
        private readonly IMapper mapper;

        public MakesController(VegaDbContext context,IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }
        [HttpGet("/api/Makes")]
        public async Task<IEnumerable<MakeResource>> GetMakes()
        {
           var makes= await context.Makes.Include(m => m.Models).ToListAsync();
            return mapper.Map<List<Make>, List<MakeResource>>(makes);
        }
        [HttpGet("/api/Features")]
        public async Task<IEnumerable<KeyValuePairResource>> GetFeatures()
        {
            var features= await context.Features.ToListAsync();
            return mapper.Map<List<Feature>, List<KeyValuePairResource>>(features);
        }
        //[HttpPost("/api/Vehicle")]
        //public async Task<ActionResult<VehicleResource>> PostVehicle(Vehicle vehicle)
        //{
        //    context.Vehicles.Add(vehicle);
        //    await context.SaveChangesAsync();
        //    return Ok(vehicle);
        //}
        //[HttpPost("/api/Vehicles")]
        //public IActionResult CreateVehicle(VehicleResource vehicleResource)
        //{
        //    var vehicle = mapper.Map<VehicleResource, Vehicle>(vehicleResource);
        //    return Ok(vehicle);
        //}
    }
}