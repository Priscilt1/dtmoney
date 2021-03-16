import styled from 'styled-components'

export const Container = styled.header`
    background: var(--blue);
`

export const Content = styled.div`
	max-width: 1120px;
	margin: 0 auto;
	padding: 2rem 1rem 12rem; //equivalente ao tamanho do font-size do root, lembrando que a fonte é 16px. (padding 16px e 160px)
	display: flex;
	align-items: center;
	justify-content: space-between;

	button {
		font-size: 1rem;
		color: #fff;
		background: var(--blue-light);
		border: 0;
		padding: 0 2rem;
		border-radius: 0.25rem; //equivalente a 4px 
		height: 3rem; //equivalente a 48px. Ir multiplicando as medidas por 16

		transition: filter 0.2s;

		&:hover {
			filter: brightness(0.9); //para escurecer o bottao no hover
		}
	}
`