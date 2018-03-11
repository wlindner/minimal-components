import styled from 'styled-components';

const Row = styled.div`
  margin: 0 -8px;
  display: flex;
  flex: ${props => (props.grow ? '1 1 auto' : 'initial')};

  flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};

  justify-content: ${props => {
    switch (props.justify) {
      case 'start':
      default:
        return 'flex-start';
      case 'center':
        return 'center';
      case 'end':
        return 'flex-end';
    }
  }};
`;

export default Row;
