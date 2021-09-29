const path = require('path');
module.exports = {
	webpack: {
		alias: {
			'@src': path.resolve(__dirname, 'src/'),
			'@components': path.resolve(__dirname, 'src/components/'),
			'@scss': path.resolve(__dirname, 'src/scss/'),
			'@atoms': path.resolve(__dirname, 'src/components/atoms'),
			'@molecules': path.resolve(__dirname, 'src/components/molecules'),
			'@organisms': path.resolve(__dirname, 'src/components/organisms'),
			'@templates': path.resolve(__dirname, 'src/components/templates'),
			'@pages': path.resolve(__dirname, 'src/components/pages'),
			'@hooks': path.resolve(__dirname, 'src/hooks/'),
			'@utils': path.resolve(__dirname, 'src/utils/'),
			'@contexts': path.resolve(__dirname, 'src/contexts/'),
		},
	},
};
