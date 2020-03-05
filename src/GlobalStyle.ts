import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

	html, body, #__next {
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}
`;

export default GlobalStyle;
