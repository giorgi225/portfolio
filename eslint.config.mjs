import next from "eslint-config-next";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const eslintConfig = [...nextCoreWebVitals, ...nextTypescript, ...next, ...compat.config({
  rules: {
    "import/order": [
      "warn",
      {
        groups: [
          "builtin", // built-in modules (fs, path)
          "external", // node_modules
          "internal", // aliases like @/*
          ["parent", "sibling", "index"], // relative paths
          "object", // import "./style.css"
          "type", // import types
        ],
        pathGroups: [
          {
            pattern: "@/types/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/data/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/hooks/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/lib/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/utils/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/components/**",
            group: "internal",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
      },
    ],
  }
}), {
  ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"]
}];

export default eslintConfig;