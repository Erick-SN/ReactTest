import { useFetch } from '../../hooks/useFetch';
import { shallow } from 'enzyme';
import GiftGrid from '../../components/GiftGrid';
jest.mock('../../hooks/useFetch');
describe('Pruebas en <GiftGrid/>', () => {
  let wrapper;
  beforeEach(() => {
    useFetch.mockClear();
    useFetch.mockReturnValue({
      data: [],
      loading: true,
    });
    wrapper = shallow(<GiftGrid category="Goku" />);
  });
  test('Prueba de renderizado correcto', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('Debe de mostrar items al ejecutar useFetch', () => {
    const gifs = [
      {
        id: 'ABC',
        url: 'https://google.com',
        title: 'abc',
      },
    ];
    useFetch.mockReturnValue({
      data: gifs,
      loading: false,
    });
    expect(wrapper).toMatchSnapshot();
  });
});
