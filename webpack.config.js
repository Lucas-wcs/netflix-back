import path  from 'path';
import nodeExternals from 'webpack-node-externals';
import Dotenv from 'dotenv-webpack';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// Vérifiez si l'environnement est défini sur "production"
const isProduction = process.env.NODE_ENV === 'production';

export default {
    target: 'node',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    externals: [nodeExternals({
        allowlist: ['datas']
    })],
    plugins: [
        new Dotenv({
            path: isProduction ? '.env.prod' : '.env',
        }),
    ],
};