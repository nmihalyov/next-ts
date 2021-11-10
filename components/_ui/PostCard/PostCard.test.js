import PostCard from './PostCard';

describe('PostCard:', () => {
  const setUp = props => shallow(<PostCard {...props} />);

  it('contains CardItem', () => {
    const component = setUp();
    const card = component.find('CardItem');

    expect(card).toHaveLength(1);
  });

  it('contains Link if id > 1000', () => {
    const component = setUp({id: 1001});
    const link = component.find('Link');

    expect(link).toHaveLength(1);
  });

  it('doesn\'t contain Link if id <= 1000', () => {
    const component = setUp({id: 1});
    const link = component.find('Link');

    expect(link).toHaveLength(0);
  });
});