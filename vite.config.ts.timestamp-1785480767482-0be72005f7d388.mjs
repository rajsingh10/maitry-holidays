// vite.config.ts
import { defineConfig } from "file:///D:/Live%20projects/maitry-holidays/node_modules/vite/dist/node/index.js";
import react from "file:///D:/Live%20projects/maitry-holidays/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { componentTagger } from "file:///D:/Live%20projects/maitry-holidays/node_modules/lovable-tagger/dist/index.js";
import { ViteImageOptimizer } from "file:///D:/Live%20projects/maitry-holidays/node_modules/vite-plugin-image-optimizer/dist/index.js";
var __vite_injected_original_dirname = "D:\\Live projects\\maitry-holidays";
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-framer": ["framer-motion"],
          "vendor-lucide": ["lucide-react"],
          "vendor-ui": ["@radix-ui/react-accordion", "@radix-ui/react-slot", "@radix-ui/react-tabs", "@radix-ui/react-toast", "@radix-ui/react-tooltip"],
          "vendor-query": ["@tanstack/react-query"]
        }
      }
    }
  },
  plugins: [
    react(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 75 },
      jpg: { quality: 75 },
      webp: { quality: 80 },
      avif: { quality: 70 }
    }),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"]
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxMaXZlIHByb2plY3RzXFxcXG1haXRyeS1ob2xpZGF5c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcTGl2ZSBwcm9qZWN0c1xcXFxtYWl0cnktaG9saWRheXNcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0xpdmUlMjBwcm9qZWN0cy9tYWl0cnktaG9saWRheXMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgeyBjb21wb25lbnRUYWdnZXIgfSBmcm9tIFwibG92YWJsZS10YWdnZXJcIjtcclxuaW1wb3J0IHsgVml0ZUltYWdlT3B0aW1pemVyIH0gZnJvbSAndml0ZS1wbHVnaW4taW1hZ2Utb3B0aW1pemVyJztcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+ICh7XHJcbiAgc2VydmVyOiB7XHJcbiAgICBob3N0OiBcIjo6XCIsXHJcbiAgICBwb3J0OiA4MDgwLFxyXG4gICAgaG1yOiB7XHJcbiAgICAgIG92ZXJsYXk6IGZhbHNlLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIG1hbnVhbENodW5rczoge1xyXG4gICAgICAgICAgXCJ2ZW5kb3ItZnJhbWVyXCI6IFtcImZyYW1lci1tb3Rpb25cIl0sXHJcbiAgICAgICAgICBcInZlbmRvci1sdWNpZGVcIjogW1wibHVjaWRlLXJlYWN0XCJdLFxyXG4gICAgICAgICAgXCJ2ZW5kb3ItdWlcIjogW1wiQHJhZGl4LXVpL3JlYWN0LWFjY29yZGlvblwiLCBcIkByYWRpeC11aS9yZWFjdC1zbG90XCIsIFwiQHJhZGl4LXVpL3JlYWN0LXRhYnNcIiwgXCJAcmFkaXgtdWkvcmVhY3QtdG9hc3RcIiwgXCJAcmFkaXgtdWkvcmVhY3QtdG9vbHRpcFwiXSxcclxuICAgICAgICAgIFwidmVuZG9yLXF1ZXJ5XCI6IFtcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksIFxyXG4gICAgVml0ZUltYWdlT3B0aW1pemVyKHtcclxuICAgICAgcG5nOiB7IHF1YWxpdHk6IDgwIH0sXHJcbiAgICAgIGpwZWc6IHsgcXVhbGl0eTogNzUgfSxcclxuICAgICAganBnOiB7IHF1YWxpdHk6IDc1IH0sXHJcbiAgICAgIHdlYnA6IHsgcXVhbGl0eTogODAgfSxcclxuICAgICAgYXZpZjogeyBxdWFsaXR5OiA3MCB9LFxyXG4gICAgfSksXHJcbiAgICBtb2RlID09PSBcImRldmVsb3BtZW50XCIgJiYgY29tcG9uZW50VGFnZ2VyKClcclxuICBdLmZpbHRlcihCb29sZWFuKSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcclxuICAgIH0sXHJcbiAgICBkZWR1cGU6IFtcInJlYWN0XCIsIFwicmVhY3QtZG9tXCIsIFwicmVhY3QvanN4LXJ1bnRpbWVcIiwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiwgXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIiwgXCJAdGFuc3RhY2svcXVlcnktY29yZVwiXSxcclxuICB9LFxyXG59KSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFIsU0FBUyxvQkFBb0I7QUFDdlQsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixTQUFTLHVCQUF1QjtBQUNoQyxTQUFTLDBCQUEwQjtBQUpuQyxJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssT0FBTztBQUFBLEVBQ3pDLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxNQUNILFNBQVM7QUFBQSxJQUNYO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sY0FBYztBQUFBLFVBQ1osaUJBQWlCLENBQUMsZUFBZTtBQUFBLFVBQ2pDLGlCQUFpQixDQUFDLGNBQWM7QUFBQSxVQUNoQyxhQUFhLENBQUMsNkJBQTZCLHdCQUF3Qix3QkFBd0IseUJBQXlCLHlCQUF5QjtBQUFBLFVBQzdJLGdCQUFnQixDQUFDLHVCQUF1QjtBQUFBLFFBQzFDO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixtQkFBbUI7QUFBQSxNQUNqQixLQUFLLEVBQUUsU0FBUyxHQUFHO0FBQUEsTUFDbkIsTUFBTSxFQUFFLFNBQVMsR0FBRztBQUFBLE1BQ3BCLEtBQUssRUFBRSxTQUFTLEdBQUc7QUFBQSxNQUNuQixNQUFNLEVBQUUsU0FBUyxHQUFHO0FBQUEsTUFDcEIsTUFBTSxFQUFFLFNBQVMsR0FBRztBQUFBLElBQ3RCLENBQUM7QUFBQSxJQUNELFNBQVMsaUJBQWlCLGdCQUFnQjtBQUFBLEVBQzVDLEVBQUUsT0FBTyxPQUFPO0FBQUEsRUFDaEIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ3RDO0FBQUEsSUFDQSxRQUFRLENBQUMsU0FBUyxhQUFhLHFCQUFxQix5QkFBeUIseUJBQXlCLHNCQUFzQjtBQUFBLEVBQzlIO0FBQ0YsRUFBRTsiLAogICJuYW1lcyI6IFtdCn0K
