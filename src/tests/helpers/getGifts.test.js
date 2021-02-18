import { getGifs } from '../../helpers/getGifts';

describe('Pruebas al helper getGifts', () => {
  test('Categoria recibida', async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });
});
