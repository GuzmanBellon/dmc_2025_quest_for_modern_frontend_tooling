import Card from '../../components/card/card.twig'

export default {
  title: 'Components/Card',
  component: Card,
}

export const Default = {
  args: {
    title: 'Card title',
    description: 'Card subtitle',
    image: `<img src="https://picsum.photos/id/1005/400/200" alt="Card image">`,
  },
}
