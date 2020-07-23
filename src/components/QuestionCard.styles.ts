import styled from 'styled-components'

const Wrapper = styled.div`
  font-size: 1.5rem;
  width: minmax(500px,1100px);
  background: #ebfeff;
  border-radius: 10px;
  border: 2px solid #0085a3;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  p {
    font-size: 1.5rem;
    font-weight: 700;
  }

  ul {
      list-style: disc;
      text-align: left;
  }
  li {
      :hover {
          opacity:0.6;
      }
  }
`;

export default Wrapper;