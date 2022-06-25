using bd.heroes.api.Models.Dtos;

namespace bd.heroes.api.Services
{
    public interface IHeroeService
    {
        Task<List<HeroeDto>> GetHeroes();
        Task<HeroeDto> GetHeroe(int id);
        Task<HeroeDto> PostHeroe(HeroeDto heroeDto);
        Task<HeroeDto> PutHeroe(HeroeDto heroeDto);
        Task<bool> DeleteHeroe(int id);
    }
}
