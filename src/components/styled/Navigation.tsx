import styled from 'styled-components';

const Nav = styled.nav`
  ul {
    padding: 0;
    li > a {
      color: green;
    }

    li + li {
      margin-left: 20px;
    }
  }
`