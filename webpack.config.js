import path from 'path';
import nodeExternals from 'webpack-node-externals';
import Dotenv from 'dotenv-webpack';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === 'production';

export default {
    target: 'node',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.cjs',
        module: true, // Active la sortie ES module
        chunkFormat: 'module', // Spécifie le format de chunk ESM
    },
    experiments: {
        outputModule: true, // Active l'expérimentation outputModule
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
