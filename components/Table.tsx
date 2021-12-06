import styled from '@emotion/styled';

export const TableHeaderRow = styled.tr`
	display: flex;
	align-items: center;
	width: 100%;
	padding-left: 14px;
	padding-right: 14px;
	border-bottom-width: 1px;
	background-color: white;
	color: black;
	@media (min-width: 768px) {
		padding-top: 0;
		padding-bottom: 0;
		padding-left: 50px;
		padding-right: 60px;
		border-top-left-radius: 1rem;
		border-top-right-radius: 1rem;
	}
`;

export const TableRow = styled.tr`
	display: flex;
	width: 100%;
	align-items: center;
	border-bottom-width: 1px;
	padding-left: 14px;
	padding-right: 14px;
	margin-left: 100px;
	width: 50%;


	@media (min-width: 768px) {
		padding-left: 50px;
		padding-right: 60px;
	}
`;

const JUSTIFY_CONTENT_BY_ALIGN = {
	left: 'flex-start',
	center: 'center',
	right: 'flex-end',
} as const;

export const TableData = styled.td<{ align?: 'left' | 'center' | 'right' }>`
	display: flex;
	align-items: center;
	justify-content: ${({ align = 'left' }) => JUSTIFY_CONTENT_BY_ALIGN[align]};
	padding: 12px 6px;
	margin-left: 100px;
	width: 50%;


	@media (min-width: 768px) {
		padding: 16px 8px;
	}
`;
