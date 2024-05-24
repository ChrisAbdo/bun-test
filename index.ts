Bun.serve({
  hostname: "::",
  port: 6969,
  fetch: async (request: Request) => {
    return new Response("Hello World", { status: 200 });
  },
});
