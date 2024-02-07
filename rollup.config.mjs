import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import babel from "@rollup/plugin-babel";
import nodeResolve from "@rollup/plugin-node-resolve";
import css from "rollup-plugin-import-css";
import postcss from "rollup-plugin-postcss";

export default {
	input: "./src/index.js",
	output: {
		file: "./lib/main.js",
		format: "cjs",
	},

	plugins: [
		postcss({
			extract: true,
			extensions: [".css", ".scss"],
			use: ["sass"],
		}),
		nodeResolve({
			extensions: [".js", ".jsx"],
		}),
		babel({
			exclude: "node_modules/**",
		}),
		commonjs(),
		replace({
			preventAssignment: false,
			"process.env.NODE_ENV": '"development"',
		}),
	],
	external: (id) => /^react/.test(id),
};
