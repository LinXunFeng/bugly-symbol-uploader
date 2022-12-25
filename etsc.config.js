module.exports = {
  esbuild: {
    minify: false
  },
  // Postbuild hook
  postbuild: async () => {
    console.log("postbuild");
    const cpy = (await import("cpy")).default;
    await cpy(
      [
        "src/static/**/*.*", // Copy all .json files
      ],
      "dist/static"
    );
  },
};