import { shallow } from 'enzyme';
import GiftItem from '../../components/GiftItem';

describe('Pruebas en <GiftItem/>', () => {
  let wrapper;
  const title = 'title';
  const url = 'http://';
  beforeEach(() => {
    wrapper = shallow(<GiftItem title={title} url={url} />);
  });
  test('Renderizado de componente', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('Asegurando los elemtos para mostrar la imagen', () => {
    const p = wrapper.find('p');
    const img = wrapper.find('img');
    expect(p.text().trim()).toBe(title);
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });
});
