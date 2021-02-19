import { useFetch } from '../../hooks/useFetch';
import { renderHook } from '@testing-library/react-hooks';
describe('Pruebas en useFetch', () => {
  test('Debe devolver el estado inicial', async () => {
    const category = 'Goku';
    const { result, waitForNextUpdate } = renderHook(() => useFetch(category));
    const { data, loading } = result.current;
    expect(data).toEqual([]);
    await waitForNextUpdate();
    expect(loading).toBe(true);
  });
  test('Debe de retornar el arreglo de imagenes', async () => {
    const category = 'Goku';
    const { result, waitForNextUpdate } = renderHook(() => useFetch(category));
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toBe(50);
    expect(loading).toBe(false);
  });
});
