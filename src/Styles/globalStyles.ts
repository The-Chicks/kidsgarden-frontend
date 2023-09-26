import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`${css`
	html,
	body,
	div,
	span,
	applet,
	object,
	iframe,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	a,
	abbr,
	acronym,
	address,
	big,
	cite,
	code,
	del,
	dfn,
	em,
	img,
	ins,
	kbd,
	q,
	s,
	samp,
	small,
	strike,
	strong,
	sub,
	sup,
	tt,
	var,
	b,
	u,
	i,
	center,
	dl,
	dt,
	dd,
	ol,
	ul,
	li,
	fieldset,
	form,
	label,
	legend,
	table,
	caption,
	tbody,
	tfoot,
	thead,
	tr,
	th,
	td,
	article,
	aside,
	canvas,
	details,
	embed,
	figure,
	figcaption,
	footer,
	header,
	hgroup,
	menu,
	nav,
	output,
	ruby,
	section,
	summary,
	time,
	mark,
	audio,
	video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	menu,
	nav,
	section {
		display: block;
	}

	ol,
	ul {
		list-style: none;
	}
	blockquote,
	q {
		quotes: none;
	}

	blockquote:before,
	blockquote:after,
	q:before,
	q:after {
		content: "";
		content: none;
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	body {
		padding: 0;
		box-sizing: border-box;
		line-height: 1;

		#root {
			max-width: 1080px;
			margin: 0 auto;
		}
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	button {
		all: unset;
	}

	* {
		-webkit-tap-highlight-color: rgba(
			255,
			255,
			255,
			0
		); // 모바일에서 꾹 누를 때 색상 변경
		user-select: none; // 텍스트 선택 못 함
		-webkit-touch-callout: none; // 모바일에서 링크 길게 누를 때 메뉴 안 뜨게
		touch-action: none;
	}
`}
`;

export default GlobalStyles;