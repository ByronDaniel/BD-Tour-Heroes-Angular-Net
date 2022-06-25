using AutoMapper;
using bd.heroes.api.Data;
using bd.heroes.api.Models;
using bd.heroes.api.Models.Dtos;
using Microsoft.EntityFrameworkCore;

namespace bd.heroes.api.Services
{
    public class HeroeService : IHeroeService
    {
        private readonly AppDbContext _context;
        private IMapper _mapper;
        public HeroeService(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<List<HeroeDto>> GetHeroes()
        {
            List<Heroe> heroes = await _context.Heroes.ToListAsync();
            if(heroes.Count == 0)
            {
                throw new Exception("No existen Heroes");
            }
            return _mapper.Map<List<HeroeDto>>(heroes);
        }

        public async Task<HeroeDto> GetHeroe(int id)
        {
            Heroe heroe = await _context.Heroes.FindAsync(id);
            if(heroe == null)
            {
                throw new Exception($"No existe Heroes con id: {id}");
            }
            return _mapper.Map<HeroeDto>(heroe);
        }

        public async Task<HeroeDto> PostHeroe(HeroeDto heroeDto)
        {
            Heroe heroe = _mapper.Map<Heroe>(heroeDto);
            await _context.Heroes.AddAsync(heroe);
            await _context.SaveChangesAsync();
            return _mapper.Map<HeroeDto>(heroe);
        }

        public async Task<HeroeDto> PutHeroe(HeroeDto heroeDto)
        {
            
            Heroe hero = _mapper.Map<HeroeDto, Heroe>(heroeDto);
            if(hero == null) {
                throw new Exception($"No existe el Heroe con id: {heroeDto.Id}");
            }
            _context.Entry(hero).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return _mapper.Map<HeroeDto>(hero);
        }

        public async Task<bool> DeleteHeroe(int id)
        {
            Heroe heroe = await _context.Heroes.FindAsync(id);
            if(heroe == null) {
                throw new Exception($"No existe el Heroe con id: {id}");
            }
            try
            {
                _context.Heroes.Remove(heroe);
                await _context.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}
