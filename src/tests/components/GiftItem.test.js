import { shallow } from 'enzyme';
import GiftItem from '../../components/GiftItem';

describe('Pruebas en <GiftItem/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<GiftItem title="Image" url="http://" />);
  });
  test('Renderizado de componente', () => {
    expect(wrapper).toMatchInlineSnapshot();
  });
});
