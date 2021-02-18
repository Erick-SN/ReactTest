import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas al componente <AddCategory/>', () => {
  let wrapper;
  const setCategories = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });
  test('renderizado del componente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('Validando evento del input', () => {
    const input = wrapper.find('input');
    const value = 'Hola mundo';
    input.simulate('change', { target: { value } });
  });
  test('no debe postear la informacion', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });
  test('enviar la informacion', () => {
    const value = 'Goku';
    wrapper.find('input').simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategories).toHaveBeenCalled();
    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
