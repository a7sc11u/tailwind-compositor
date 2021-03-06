import { Style } from '../types';

export const matrixColumns = ({ columns }: { columns: number }): Style => {
	const result: Style = {
		display: 'grid',
		gridTemplateColumns: `repeat(${columns}, minmax(auto,1fr))`,
	};

	return result;
};

export const matrixRows = ({ size }: { size?: string }): Style => {
	const result: Style = {
		gridAutoRows: `minmax(${size}, auto)`,
	};

	return result;
};

export const matrixCellStartX = ({ start }: { start: number }): Style => {
	const result: Style = {
		gridColumnStart: `${start} !important`,
	};

	return result;
};

export const matrixCellSpanX = ({ span }: { span: number }): Style => {
	const result: Style = {
		gridColumn: `auto / span ${span}`,
	};

	return result;
};

export const matrixCellStartY = ({ start }: { start: number }): Style => {
	const result: Style = {
		gridRowStart: `${start} !important`,
	};

	return result;
};

export const matrixCellSpanY = ({ span }: { span: number }): Style => {
	const result: Style = {
		gridRow: `auto / span ${span}`,
	};

	return result;
};

export const matrixGap = ({ rhythm }: { rhythm: string }): Style => {
	return {
		gridRowGap: rhythm,
		gridColumnGap: rhythm,
	};
};

export const matrixGapX = ({ rhythm }: { rhythm: string }): Style => {
	return {
		gridColumnGap: rhythm,
	};
};

export const matrixGapY = ({ rhythm }: { rhythm: string }): Style => {
	return {
		gridRowGap: rhythm,
	};
};
