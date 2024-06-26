// vite.main.config.mjs
import { defineConfig } from "file:///C:/dev-is-hard/vueappclean/node_modules/vite/dist/node/index.js";
var vite_main_config_default = defineConfig({
  resolve: {
    // Some libs that can run in both Web and Node.js, such as `axios`, we need to tell Vite to build them in Node.js.
    browserField: false,
    conditions: ["node"],
    mainFields: ["module", "jsnext:main", "jsnext"]
  }
});
export {
  vite_main_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5tYWluLmNvbmZpZy5tanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxkZXYtaXMtaGFyZFxcXFx2dWVhcHBjbGVhblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcZGV2LWlzLWhhcmRcXFxcdnVlYXBwY2xlYW5cXFxcdml0ZS5tYWluLmNvbmZpZy5tanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L2Rldi1pcy1oYXJkL3Z1ZWFwcGNsZWFuL3ZpdGUubWFpbi5jb25maWcubWpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWdcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHJlc29sdmU6IHtcbiAgICAvLyBTb21lIGxpYnMgdGhhdCBjYW4gcnVuIGluIGJvdGggV2ViIGFuZCBOb2RlLmpzLCBzdWNoIGFzIGBheGlvc2AsIHdlIG5lZWQgdG8gdGVsbCBWaXRlIHRvIGJ1aWxkIHRoZW0gaW4gTm9kZS5qcy5cbiAgICBicm93c2VyRmllbGQ6IGZhbHNlLFxuICAgIGNvbmRpdGlvbnM6IFsnbm9kZSddLFxuICAgIG1haW5GaWVsZHM6IFsnbW9kdWxlJywgJ2pzbmV4dDptYWluJywgJ2pzbmV4dCddLFxuICB9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBa1IsU0FBUyxvQkFBb0I7QUFHL1MsSUFBTywyQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBO0FBQUEsSUFFUCxjQUFjO0FBQUEsSUFDZCxZQUFZLENBQUMsTUFBTTtBQUFBLElBQ25CLFlBQVksQ0FBQyxVQUFVLGVBQWUsUUFBUTtBQUFBLEVBQ2hEO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
