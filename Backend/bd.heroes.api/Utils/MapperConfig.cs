using AutoMapper;
using bd.heroes.api.Models;
using bd.heroes.api.Models.Dtos;

namespace bd.heroes.api.Utils
{
    public class MapperConfig
    {
        public static MapperConfiguration RegisterMaps()
        {
            var mappingConfig = new MapperConfiguration(config =>
            {
                config.CreateMap<HeroeDto, Heroe>();
                config.CreateMap<Heroe, HeroeDto>();
            });
            return mappingConfig;
        }
    }
}
