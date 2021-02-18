import { shallow } from 'enzyme';
import GiftExpertApp from '../components/GiftExpertApp';

describe('Pruebas en el componente < GiftExpertApp/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(GiftExpertApp);
  });
  test('Prueba de renderizado correcto', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
