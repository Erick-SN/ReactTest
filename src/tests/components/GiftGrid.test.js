import { useFetch } from '../../hooks/useFetch';
import { shallow } from 'enzyme';
import GiftGrid from '../../components/GiftGrid';
jest.mock('../../hooks/useFetch');
describe('Pruebas en <GiftGrid/>', () => {
  let wrapper;
  beforeEach(() => {
    jest.clearAllMocks();
    useFetch.mockReturnValue({
      data: [],
      loading: true,
    });
    wrapper = shallow(<GiftGrid category="" />);
  });
  test('Prueba de renderizado correcto', () => {
    // useFetch.mockReturnValue({
    //   data: [],
    //   loading: true,
    // });
    // const wrapper = shallow(<GiftGrid category="Goku" />);
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
    const wrapper = shallow(<GiftGrid category="Goku" />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GiftItem').length).toBe(gifs.length);
  });
});
