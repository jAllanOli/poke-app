import { of } from 'rxjs';
import { PokemonsService } from './pokemons.service';

describe('Pokemons Service', () => {
  let service: PokemonsService;
  let httpClientSpy: any;

  beforeEach(() => {
    httpClientSpy = {
      get: jest.fn(),
    };
    service = new PokemonsService(httpClientSpy);
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should call getPokemons', () => {
    const res = 'Test Return';
    const defaultUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0';

    jest.spyOn(httpClientSpy, 'get').mockReturnValue(of(res));
    service.getPokemons();
    expect(httpClientSpy.get).toBeCalledTimes(1);
    expect(httpClientSpy.get).toBeCalledWith(defaultUrl);
  });
});
