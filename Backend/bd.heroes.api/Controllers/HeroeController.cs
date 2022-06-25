using bd.heroes.api.Models;
using bd.heroes.api.Models.Dtos;
using bd.heroes.api.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace bd.heroes.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HeroeController : ControllerBase
    {
        private readonly IHeroeService _heroeService;
        private ResponseDto _response;
        public HeroeController(IHeroeService heroeService)
        {
            _heroeService = heroeService;
            _response = new ResponseDto();
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Heroe>>> GetHeroes()
        {
            try
            {
                _response.Result = await _heroeService.GetHeroes();
                return Ok(_response);
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.DisplayMessage = "Error al recuperar los heroes";
                _response.ErrorMessages = new List<string> { ex.ToString() };
                return BadRequest(_response);
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Heroe>> GetHeroe(int id)
        {
            try
            {
                _response.Result = await _heroeService.GetHeroe(id);
                return Ok(_response);
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.DisplayMessage = "Error al recuperar el heroe";
                _response.ErrorMessages = new List<string> { ex.ToString() };
                return BadRequest(_response);
            }
        }

        [HttpPost]
        public async Task<ActionResult<Heroe>> PostHeroe(HeroeDto heroeDto)
        {
            try
            {
                _response.Result = await _heroeService.PostHeroe(heroeDto);
                return Ok(_response);
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.DisplayMessage = "Error al guardar el heroe";
                _response.ErrorMessages = new List<string> { ex.ToString() };
                return BadRequest(_response);
            }
        }

        [HttpPut]
        public async Task<ActionResult<Heroe>> PutHeroe(HeroeDto heroeDto)
        {
            try
            {
                _response.Result = await _heroeService.PutHeroe(heroeDto);
                return Ok(_response);
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.DisplayMessage = "Error al actualizar el heroe";
                _response.ErrorMessages = new List<string> { ex.ToString() };
                return BadRequest(_response);
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteHeroe(int id)
        {
            try
            {
                _response.Result = await _heroeService.DeleteHeroe(id);
                return Ok(_response);
            }
            catch(Exception ex)
            {
                _response.IsSuccess = false;
                _response.DisplayMessage = "Error al eliminar el heroe";
                _response.ErrorMessages = new List<string> { ex.ToString() };
                return BadRequest(_response);
            }
        }
    }
}
