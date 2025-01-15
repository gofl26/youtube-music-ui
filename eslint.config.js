import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier"; // Prettier 플러그인 추가
import eslintConfigPrettier from "eslint-config-prettier"; // Prettier와 충돌 방지

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      eslintConfigPrettier, // Prettier와 충돌하는 ESLint 규칙 비활성화
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      prettier, // Prettier 플러그인 추가
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "prettier/prettier": [
        "error",
        {
          semi: false,
          singleQuote: true,
          trailingComma: "all",
          tabWidth: 2,
          printWidth: 80,
        },
      ],
      // "prettier/prettier": "warn", // Prettier 규칙을 ESLint 경고로 설정
    },
  }
);
