import { ICompositorConfig } from '../types';
import path from 'path';
import { merge } from '../utils';
import compositor from '../theme-compositor';

import compositorBaseConfig from './fixtures/compositor.config.js';
import tailwindConfig from './fixtures/tailwind.config.js';

const createConfig = config => {
	const compositorConfig: ICompositorConfig = merge(
		compositorBaseConfig,
		config
	);
	const tailwindConfigComposed = compositor(compositorConfig)(tailwindConfig);
	return tailwindConfigComposed;
};

test('transform with font files', () => {
	const tailwindConfig = createConfig({
		fonts: [
			{
				file: path.resolve(
					'plugin/src/__tests__/',
					'fixtures/inter/Inter-Regular.woff'
				),
				key: 'sans-400',
			},
		],
	});
	expect(tailwindConfig).toMatchSnapshot();
});
